/*
* Name: Prosper.js
* Author: drozerah@free.fr
* Date: 10/07/17
* Description: items import width delay + show/hide item info on hover mouse event
* Dependencies: jquery-1.10.2+
* License: all rights reserved
*/
$(document).ready( function (){
 //console.log("The DOM page is now loaded and can be manipulated");
	$(".itemTitle").hide();
	$(window).on('load', function() {
	 //console.log("All elements on page are loaded !");
	/* #box wrapper is displayed when page is loaded and document ready */
	$("#box").show(); 
	$(".itemTitleHover").removeClass('itemTitleHover');
		var selectItem = $('.item');
		selectItem.hide();
		//console.log(selectItem.length);
		//console.log(selectItem);
		var num = selectItem.length;
		for( var i = 0; i <= num; i++ ){
			itemAll = selectItem[i];
		     $( itemAll ).delay( 450*i ).fadeIn(200);
			//console.log(num);
		}
	    var item = $( ".item" );  
		item.mouseenter(
		  function() {
		   //console.log("Hover in !");
		   $( this ).find( "div:last" ).fadeIn('slow');
		  }
		);
		item.mouseleave(
		  function() {
		   //console.log("Hover out !");
		   $( this ).find( "div:last" ).fadeOut('fast').not(this).hide();
		  }
		);
	});
});