

$(document).ready(function() {  
  // scroll
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var navbar = $('.navbar');

    var scroll = $(window).scrollTop();
    if (scroll > position) { // scroll down 
      if (!navbar.hasClass('navbar--hide')) {
        navbar.addClass('navbar--hide');
      } else if (navbar.hasClass('navbar--show')) {
        navbar.removeClass('navbar--show');
      }
      
      $(".single__contents :header").each(function () {
        if ($(window).scrollTop() >= $(this).position().top) {
          var id = $(this).attr('id');
          $('.toc a').removeClass('active');
          $('.toc a[href="#' + id + '"]').addClass('active');

          $('#toc > li').each(function () {
            $(this).find('ul').css('display', 'none');
          });
          $(`#toc [href="#${id}"]`).next().css('display', 'block');
          $(`#toc [href="#${id}"]`).parents('ul').css('display', 'block');
        }
      });
    } else { // scroll up
      var navbar = $('.navbar');
      if (navbar.hasClass('navbar--hide')) {
        navbar.removeClass('navbar--hide');
      } else if (!navbar.hasClass('navbar--show')) {
        navbar.addClass('navbar--show');
      }

      $(".single__contents :header").each(function () {
        if ($(window).scrollTop() >= $(this).position().top) {
          var id = $(this).attr('id');
          $('.toc a').removeClass('active');
          $('.toc a[href="#' + id + '"]').addClass('active');

          $('#toc > li').each(function () {
            $(this).find('ul').css('display', 'none');
          });
          $(`#toc [href="#${id}"]`).next().css('display', 'block');
          $(`#toc [href="#${id}"]`).parents('ul').css('display', 'block');
        }
      });
    }
    position = scroll;
  });
  
  // media query
  enquire.register("screen and (max-width:769px)", {
    match: function () {
      $('main').removeClass('main-main').removeClass('main').addClass('main');
      $('aside').removeClass('main-side').removeClass('hide').addClass('hide');      
    },
    unmatch: function () {      
      if ($('aside').length > 0) {
        $('main').removeClass('main-main').removeClass('main').addClass('main-main');
        $('aside').removeClass('main-side').removeClass('hide').addClass('main-side');
      }
      $('.navbar__burger').removeClass('is-active');
      $('.navbar__menu').removeClass('is-active');
    },
    setup: function () { },
    deferSetup: true,
    destroy: function () { },
  });

  // navbar
  $('.navbar__burger').click(function() {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $('.navbar__menu').removeClass('is-active');
    } else {
      $(this).addClass('is-active');
      $('.navbar__menu').addClass('is-active');
    }
  });

  // truncate
  $('.summary__text').shave(160);
});