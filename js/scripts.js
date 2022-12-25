/*
	Active by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/


jQuery(function($){

'use strict';

// slide image animations whike scrolling
  const scrollElements = document.querySelectorAll(".js-scroll");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }

  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });





  $('.navbar').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('show').find('.search-input').focus();
    // $(selector).find('.autocomplete').focus();
    $(this).toggleClass('active');

    e.preventDefault();
  });

  // close when click off of container
  $(document).on('click touchstart', function (e){
    if (!$(e.target).is('.search-toggle, .search-toggle *, .navbar, .navbar *')) {
      $('.search-toggle').removeClass('active');
      $('.navbar').removeClass('show');
    }
  });

    

    

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */
	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#st-preloader').delay(20).fadeOut('slow');
	    });
	}());



    /* ---------------------------------------------- /*
     * Animated scrolling / Scroll Up
    /* ---------------------------------------------- */
    (function () {
        $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());


    /* ---------------------------------------------- /*
     * Full Screen
    /* ---------------------------------------------- */
    (function () {
        $(".st-fullHeight").height($(window).height());

        $(window).resize(function(){
            $(".st-fullHeight").height($(window).height());
        });

    }());
	

    /* ---------------------------------------------- /*
     * Parallax Scrolling
    /* ---------------------------------------------- */
	(function () {
		$(window).bind('load', function () {
			parallaxInit();						  
		});
		function parallaxInit() {		
			$(".subscribe").parallax("50%", 0.3);
		}	
		parallaxInit();
	}());


    $('#header').each(function(){
        var navOffset = $('#header').offset().top;
  
        jQuery(window).scroll(function () {
            
          if($(window).scrollTop() > navOffset + 300){
            $('#header').addClass('fixed');
          } else {
            $('#header').removeClass('fixed');
          } 
  
          if($(window).scrollTop() > navOffset + 600 ){
              $('#header').addClass('sticky');
            } else {
              $('#header').removeClass('sticky');
          }
  
        });
  
      });

	

});