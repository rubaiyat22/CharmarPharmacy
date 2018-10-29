$(document).ready(function(){
    $("#downimg").click(function(){
    	$('html,body').animate({
	        scrollTop: $("#services").offset().top},
	        1300);
    });

    $('#dropbutton').click(function () {
        document.getElementById("myDropDown").classList.toggle("show");
    });

    window.onclick = function(e) {
        if (!e.target.matches('#dropbutton')) {
            var myDropdown = document.getElementById("myDropDown");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    }

    // $('#contact').height(
    //     $("#logo").height()
    // );

    // $('#brand').height(
    //     $("#logo").height()
    // );

    // $('#brand').height(
    //     $("#logo").height()
    // );
    // $('#top').height(
    //     $("#logo").height() + $("#main").height()
    // );
});
