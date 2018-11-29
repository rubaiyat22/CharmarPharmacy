$(document).ready(function(){
    carousel = new Siema({selector: '#carousel', loop: true})
    setInterval(() => carousel.next(), 5000)

    $("#downimg").click(function(){
    	$('html,body').animate({
	        scrollTop: $("#services").offset().top},
	        1200);
    });

    $(window).click(function(e){
        if (!e.target.matches('#dropbutton') && $('#myDropDown').is(':visible')) {
            $('#myDropDown').toggle();
        }
    });

    $('#dropbutton').click(function(){
        $('#myDropDown').toggle();
    });

    $(window).resize(function(){
        if ($('#contact').is(':visible')) {
            $('#brand_img').css('margin-top', $('#contact').height()/4);
        } else {
            $('#brand_img').css('margin-top', '2%');
            $('#dropbutton').css('margin-top', $('#brand_img').height()/4);
        }
    });
    if ($('#contact').is(':visible')) {
        $('#brand_img').css('margin-top', $('#contact').height()/4);
    } else {
        $('#brand_img').css('margin-top', '2%');
        $('#dropbutton').css('margin-top', $('#brand_img').height()/4);
    }
});

function scrollFunc(elmnt){
    let time = 0;
    if (elmnt == 'services'){
        time = 800;
    }
    else if (elmnt == 'pharmacists'){
        time = 1200;
    }
    else {
        time = 1500;
    }
    $('html,body').animate({
        scrollTop: $(document.getElementById(elmnt)).offset().top}, time);
    $(document.getElementById(elmnt)).fadeIn('slow');
}
