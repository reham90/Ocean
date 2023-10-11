$(window).on('load', function() {
  $(".preloader").fadeOut();

});
$(document).ready(function() {
  new WOW().init();

  // phone size menu onclick
  if ($(window).width() <= 991) {

      $('#menu-id').click((e) => {
          e.preventDefault();
          $('.menu-bars .bar').toggleClass('hide-icon');
          $('.menu-bars .times').toggleClass('hide-icon');
          $('.navgition').toggleClass('reset-left');
          $('body').toggleClass('overflow');
          $('.menu-bars').toggleClass('open-bars');
      });
      $('.nav-head .close-btn').click(() => {
          $('.navgition').removeClass('reset-left');

          $('.menu-bars .times').toggleClass('hide');
          $('body').removeClass('overflow');
      });

      /// // search in mobile /////////
      $('.fixed-search').click((e) => {
          e.preventDefault();
          $('.overlay-box').fadeToggle(300);
          $('.search-section').toggleClass('search-open');
          $('.fixed-search .open-search').toggleClass('close-search');
          $('body').toggleClass('overflow');
      });

      // slide down menu
      $('.menu-name').click(function(e) {
          e.preventDefault();
          $(this).siblings('.cats-dispaly').slideToggle(400);
          $('.menu-name').not(this).siblings('.cats-dispaly').slideUp(400);
          if ($(window).width() <= 991) {
              $(this).toggleClass('active');
              $('.menu-name').not(this).removeClass('active');
          }
      });
  }

  // fixed nav
  $stickyNav = $('.top-header');
  $(window).on('scroll load', () => {
      const scroll = $(window).scrollTop();
      if (scroll >= 200) {
          $stickyNav.addClass('fixed-nav');
      } else {
          $stickyNav.removeClass('fixed-nav');
      }
      if (scroll == 0) {
          $stickyNav.removeClass('fixed-nav');
      }
      if ($(".top-header").hasClass("fixed-nav")) {
          $('.select-items').addClass('select-hide');
          $('.language-bar').css('display', 'none');
      }
      if (!$(".top-header").hasClass("fixed-nav")) {
          $('.select-items').removeClass('select-hide');
          $('.language-bar').css('display', 'block');
      }

  });

  const $stickyheader = $('header');
  lastScroll = 0;
  $(window).on('scroll load', () => {
      const scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
          $stickyheader.addClass('fixed-header', {
              duration: 1000,
          });
      } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
          $stickyheader.addClass('fixed-header', {
              duration: 1000,
          });
      } else {
          $stickyheader.removeClass('fixed-header', {
              duration: 500,
          });
      }
      lastScroll = scroll;
      if (scroll == 0) {
          $stickyheader.removeClass('fixed-header', {
              duration: 500,
          });
      }
  });

  /// ////// ** main-slider** /////////
  const specials = new Swiper('.main-slider .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.main-slider .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.main-slider .swiper-btn-next',
          prevEl: '.main-slider .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });

  /// /////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
      $('.nav-foot-header').addClass('footer-accordion');
      $('.nav-foot').addClass('footer-panel');
  }
  $('.footer-accordion').click(function() {
      const x = `${$(this).siblings().prop('scrollHeight') + 15}px`;
      $('.footer-accordion').not(this).removeClass('active');
      $(this).toggleClass('active');
      if ($(this).siblings().css('max-height') == '0px') {
          $(this).siblings().css('max-height', x);
          $(this).siblings('.nav-foot').css('padding-top', '15px');
      } else {
          $(this).siblings().css('max-height', '0');
          $(this).siblings('.nav-foot').css('padding-top', '0');
      }

      $('.footer-accordion').not(this).siblings().css('max-height', '0');
      $('.footer-accordion')
          .not(this)
          .siblings('.nav-foot')
          .css('padding-top', '0');
  });
  /// ///////** fixed arrow to top**//////////
  $('.arrow-top').click(() => {
      $('html,body').animate({
              scrollTop: 0,
          },
          1500);
  });
  $(this).scrollTop() >= 500 ?
      $('.arrow-top').fadeIn(300) :
      $('.arrow-top').fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $('.arrow-top').fadeIn(300) :
          $('.arrow-top').fadeOut(300);
  });


  /// ////// **best-sellers-section** /////////
  var screen = new Swiper('.arrivals .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.arrivals .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.arrivals .swiper-btn-next',
          prevEl: '.arrivals .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 2,
              spaceBetween: 15,
          },
          767: {
              slidesPerView: 3,
              spaceBetween: 15,
          },

          992: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1199: {
              slidesPerView: 4,
              spaceBetween: 30,
          },
      },
  });

  /// ////// **offers-slider** /////////
  var screen = new Swiper('.offers .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.offers .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.offers .swiper-btn-next',
          prevEl: '.offers .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 2,
              spaceBetween: 15,
          },
          767: {
              slidesPerView: 2,
              spaceBetween: 15,
          },

          992: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1199: {
              slidesPerView: 4,
              spaceBetween: 30,
          },
      },
  });

  /// ////// **new-arrivals-slider** /////////
  var screen = new Swiper('.new-arrive .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.new-arrive .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.new-arrive .swiper-btn-next',
          prevEl: '.new-arrive .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 2,
              spaceBetween: 15,
          },
          767: {
              slidesPerView: 2,
              spaceBetween: 15,
          },

          992: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1199: {
              slidesPerView: 4,
              spaceBetween: 30,
          },
      },
  });




});