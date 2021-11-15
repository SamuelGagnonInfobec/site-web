    
// $(window).on('load', function () {
//    $(".loading").fadeOut( "slow" );
//    }); // JavaScript Document
   

$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("nav ul a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});


// MENUMOBILE
function openNav() { document.getElementById("navMenu").className = "open"; }
function closeNav() { document.getElementById("navMenu").className = ""; }


$(window).scroll(function() {
    if ($(this).scrollTop() > 200){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
		




// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);


function hasScrolled() {
	var st = $(this).scrollTop();
	
	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
	
	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight){
		// Scroll Down
		$('header').removeClass('nav-down').addClass('nav-up');
	} else {
		// Scroll Up
		if(st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}
	lastScrollTop = st;
	}

	
// LIEN SMOOTH
$('a.smoothlink').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	if (target.length) {
		$('html,body').animate({
			scrollTop: target.offset().top
			}, 800);
			return false;
		}
	}
});	



// TOGGLE
$('.toggle').hide();
$('.toggle.current').show();
$( ".toggle-init" ).click(function() {			
	$(this).toggleClass("active");
	var last = $(this).prev($(".toggle"));
	last.slideToggle("100", function() {
	}); 
				
});




$(document).ready(function() {
	// HAUT DE PAGE	
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.upPage');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
		
	
});//docready end	


