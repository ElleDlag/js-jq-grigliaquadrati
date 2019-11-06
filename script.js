$(document).ready(function () {
    var resA = 0;
    var resB = 0;
    $('.cell').click(function () {
        var color = $(this).css('background-color');
        color = color.replace("0)", "1)")
        $(this).css('background', color);
        if($(this).hasClass('red')){
            resA++
            $('#resA').text(resA);
            $(this).off()
        } else {
            resB++ 
            $('#resB').text(resB);
            $(this).off()
        }
    });
});
