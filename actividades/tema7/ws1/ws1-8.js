$(document).ready(() => {
    $('button').click(() => {
        if ($('div p').css('font-size') >= '22px') {
            $('div p').css('font-size', '14px');
        }
        $('div p').css('font-size', '+=3');
    });
    $('h1').click(function () {
        $(this).siblings().toggle('slow');
    });
	$('div').hover(function(){
		$(this).css("background-color", "#eee");
		}, function(){
			$(this).css("background-color", "#fff");
		});

});