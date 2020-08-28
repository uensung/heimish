var filter = "win16|win32|win64|mac|macintel";
if ( navigator.platform ) {
  if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
    parent.window.location.href = "https://uensung.github.io/heimish/m/";
  }
}

var swiper = new Swiper('.main .swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  speed: 1000,
  mousewheel: true,
  pagination: {
    el: '.main .swiper-pagination',
    clickable: true
  },
  on: {
    slideChangeTransitionStart: function() {
      console.error('this', this.$wrapperEl);
      console.error('this', this.$wrapperEl.css('transform'));
      var slide = $(this.$wrapperEl[0]).find(".mainSlide.swiper-slide-active");
      var idx   = slide.data("idx");
      if(idx == 2) {
        $('.header').removeClass('isBright');
        $('.swiper-pagination-bullet').addClass('blackBulletBtn');
        $('.swiper-pagination-bullet-active').addClass('blackBullet');
      } else {
        $('.header').addClass('isBright');
        $('.swiper-pagination-bullet').removeClass('blackBulletBtn');
      }
      console.error('7771111', idx);
      if(idx == 7) {
        console.error('777?');
        $('.swiper-pagination').hide();
//         this.$wrapperEl.css({"transform": "translate3d(0px, " + now + "px, 0px)"});
        let result = getMatrix(this.$wrapperEl[0]);
        console.error('result', result);
      } else {
        $('.swiper-pagination').show();
      }
    }
  }
});

function getMatrix(element) {
  console.error('element', element);
  const values = element.style.transform.split(/\w+\(|\);?/);
  console.error('values', values);
  console.error('values', values[1]);
  const transform = values[1].split(/,\s?/g);
  console.error('transform', transform);
  
  return {
    x: parseInt(transform[0]),
    y: parseInt(transform[1]),
    z: parseInt(transform[2])
  };
}

arr = ['[다산다라쿠션] 벨벳 커버쿠션', '[베리굿 조현 PICK]<br/>테이핑 새도우 피치코랄 ', '[베리굿 조현 PICK]<br/>데일리즘 스머지 스탑 마스카라', '벨벳 파우더 팩트']
var swiper = new Swiper('.main .swiper-container-in', {
  slidesPerView: 1,
  speed: 1000,
  loop: true,

  pagination: {
    el: '.main .swiper-pagination-in',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.main .swiper-container-in .swiper-button-next',
    prevEl: '.main .swiper-container-in .swiper-button-prev',
  },
  on: {
    slideChangeTransitionStart: function(){
      var slide = $(this.$wrapperEl[0]).find(".innerSlide.swiper-slide-active");
      var txt = slide.data("idx");
      $('.mask .mask_title').html(arr[txt])
   },
  }
});
