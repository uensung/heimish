var filter = "win16|win32|win64|mac|macintel";
if ( navigator.platform ) {
  if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
    parent.window.location.href = "https://uensung.github.io/heimish/m/";
  }
}

var slidePositionY;
var transformData;
var idx;
var footerH;
var resizeH;
var tempH;
var swiper = new Swiper('.main .swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: 0,
  pagination: {
    el: '.main .swiper-pagination',
    clickable: true
  },
  on: {
    slideChangeTransitionStart: function() {
      var slide = $('.swiper-wrapper').find(".mainSlide.swiper-slide-active");
      idx       = slide.data("idx");
      transformData = getTransFormData($('.swiper-wrapper')[0]);
      footerH       = parseInt($('.footer').css('height'));
      if(idx == 2) {
        $('.header').removeClass('isBright');
        $('.swiper-pagination-bullet').addClass('blackBulletBtn');
        $('.swiper-pagination-bullet-active').addClass('blackBullet');
      } else {
        $('.header').addClass('isBright');
        $('.swiper-pagination-bullet').removeClass('blackBulletBtn');
      }

      if(idx == 6) {
        slidePositionY = transformData.y;
      }

      if(idx == 7) {
        $('.swiper-pagination').hide();
        var lastSlidePositionY = (slidePositionY - footerH);
        $('.swiper-wrapper').css({"transform": "translate3d(0px, " + lastSlidePositionY + "px, 0px)"});
        tempH = $(window).innerHeight();
      } else {
        $('.swiper-pagination').show();
      }
    }
  }
});


$(document).ready(function(){
  $(window).resize(function(e) {
    if(idx == 6) {
      transformData = getTransFormData($('.swiper-wrapper')[0]);
      slidePositionY = transformData.y;
    }

    if(idx == 7) {
      transformData = getTransFormData($('.swiper-wrapper')[0]);
      slidePositionY = transformData.y;
      resizeH = $(window).innerHeight() - footerH;
      if(tempH != $(window).innerHeight()) {
        $('.swiper-wrapper').css({"transform": "translate3d(0px, " + (slidePositionY + resizeH) + "px, 0px)"});
      } else {
        $('.swiper-wrapper').css({"transform": "translate3d(0px, " + (slidePositionY) + "px, 0px)"});
      }
      tempH = $(window).innerHeight();
    }
  });
});

function getTransFormData(element) {
  const values = element.style.transform.split(/\w+\(|\);?/);
  const transform = values[1].split(/,\s?/g);

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
    nextEl: '.main .pagenation_area_in .swiper-button-next',
    prevEl: '.main .pagenation_area_in .swiper-button-prev',
  },
  on: {
    slideChangeTransitionStart: function(){
      var slide = $(this.$wrapperEl[0]).find(".innerSlide.swiper-slide-active");
      var txt = slide.data("idx");
      $('.mask .mask_title').html(arr[txt])
   },
  }
});
