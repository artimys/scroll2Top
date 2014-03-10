/*
 * Plugin: scroll2Top
 * A simple customizable plugin for scrolling back to top of page
 * Author: Arturo Simon
 * Version: 1.0.0
 * Updated: March 10th, 2014
*/

(function ( $, window, undefined ) {
	$.fn.scroll2Top = function(options) {


		// Defaults
		var defaults = {
				appearAt    : 250,	// px
				fadeSpeed   : 200,	// ms
				scrollSpeed : 600	// ms
			};


		return this.each(function() {

			var settings = $.extend({}, defaults, options),		// Merge defaults + user options
				scrollBtn = $(this);							// Current element (ex. DIV)

			// Add Click Event that will animate the scroll up
			scrollBtn.on("click", function(e) {
				e.preventDefault();
				$("html, body").animate({scrollTop: 0}, settings.scrollSpeed);
			});

			$(window).scroll(function() {
				// Determines when to show/hide scrollBtn using scrollTop() method
				// scrollTop() method gets current vertical position of scroll bar
				if ($(this).scrollTop() > parseInt(settings.appearAt)) {
					scrollBtn.fadeIn(settings.fadeSpeed);
				} else {
					scrollBtn.fadeOut(settings.fadeSpeed);
				}
			});

		});


	};
}(jQuery, window));