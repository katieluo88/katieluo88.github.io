$(document).ready(function() {

  $(window).scroll(function() {
		if ($('body').scrollTop() > 100) {
      setTimeout(function(){
  			$('#header-wrapper').addClass('header-active');
        $('#navbar').addClass('navbar-active');
        $('#navbar ul').addClass('list-active');
        $('#header-wrapper').css('position', 'fixed');
        $('.title').css('float', 'left');
        $('.title').css('padding', 30);
        $('.title').css('margin-left', 50);
        $('.title').css('margin-right', '');
        $('.title').css('left', '');
        $('.title').css('right', '');
        $('.title').css('height', 100);
        $('#navbar').css('padding-top', 0);
        $('#navbar').css('margin-top', 0);
        $('#header-wrapper').css('height', 100);
      }, 50);
		} else {
      setTimeout(function(){
  			$('#header-wrapper').removeClass('header-active');
        $('#navbar').removeClass('navbar-active');
        $('#navbar ul').removeClass('list-active');
        $('#header-wrapper').css('position', 'absolute');
        $('.title').css('float', '');
        $('.title').css('padding', 50);
        $('.title').css('margin-left', 'auto');
        $('.title').css('margin-right', 'auto');
        $('.title').css('left', 0);
        $('.title').css('right', 0);
        $('.title').css('height', '');
        $('#navbar').css('padding-top', 100);
        $('#navbar').css('margin-top', 50);
        $('#header-wrapper').css('height', 300);
      }, 50);
		}
	});

  $('#about').hover(function() { menuHover('#about') }, function() {menuOff('#about')});
  $('#travel').hover(function() { menuHover('#travel') }, function() {menuOff('#travel')});
  $('#project').hover(function() { menuHover('#project') }, function() {menuOff('#project')});
  $('#contact').hover(function() { menuHover('#contact') }, function() {menuOff('#contact')});

  var menuHover = function(id) {
      if ( !$(id).hasClass('navbar-colored')) {
        console.log("I executed")
        $(id).addClass('navbar-colored');
      };
  };
  var menuOff = function(id) {
    setTimeout(function(){
      if ( $(id).hasClass('navbar-colored')) {
          $(id).removeClass('navbar-colored');
      };
    }, 100);
  };

});
