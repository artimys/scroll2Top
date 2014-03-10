/*
 * Plugin: scroll2Top
 * A simple customizable plugin for scrolling back to top of page
 * Author: Arturo Simon
 * Version: 1.0.0
 * Updated: March 10th, 2014
*/
(function(b,a,c){b.fn.scroll2Top=function(d){var e={appearAt:250,fadeSpeed:200,scrollSpeed:600};return this.each(function(){var g=b.extend({},e,d),f=b(this);f.on("click",function(h){h.preventDefault();b("html, body").animate({scrollTop:0},g.scrollSpeed)});b(a).scroll(function(){if(b(this).scrollTop()>parseInt(g.appearAt)){f.fadeIn(g.fadeSpeed)}else{f.fadeOut(g.fadeSpeed)}})})}}(jQuery,window));