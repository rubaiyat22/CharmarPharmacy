$(document).ready(function(){
    $("#downimg").click(function(){
    	$('html,body').animate({
	        scrollTop: $("#services").offset().top},
	        1300);
    });
});