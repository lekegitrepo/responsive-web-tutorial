(function ($, window, document, undefined)
{
	'use strict';
	
	$(function ()
	{
	    $("#mobileMenu").hide();
	    $(".toggleMobile").click(function()
	    {
	    	$(this).toggleClass("active");
	        $("#mobileMenu").slideToggle(500);
	    });
	});
	$(window).on("resize", function()
	{
		if($(this).width() > 500)
		{
			$("#mobileMenu").hide();
			$(".toggleMobile").removeClass("active");
		}
	});
})(jQuery, window, document);


$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});

