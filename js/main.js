/*
jQuery(document).ready(function(){
	var navOffSet=jQuery("div.nav").offset().top;
	jQuery(window).scroll(function(){
		var scrollPos=jQuery(window).scrollTop();
		//jQuery(".status").html(scrollPos);
		
		if(scrollPos>=navOffSet){
			jQuery("div.nav").addClass("fixed");
		}else{
			jQuery("div.nav").removeClass("fixed");
		}
	});
	
});
*/
$(document).ready(function(){
	var navOffSet=$("div.nav").offset().top;
	
	$(window).scroll(function(){
		var scrollPos=$(window).scrollTop();
		
		if(scrollPos>=navOffSet){
			$("div.nav").addClass("fixed");
		}else{
			$("div.nav").removeClass("fixed");
		}
		
	});
	
});