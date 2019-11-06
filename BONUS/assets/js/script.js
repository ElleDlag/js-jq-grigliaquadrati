$(document).ready(function () {
    var resA = 0;
    var resB = 0;
    var colored = [];




    arrRand (14, colored,64,1);
    $(colored).each(function(i){
        console.log($('.col-8-div.cell'))
        $('.col-8-div.cell').eq(colored[i]).addClass('colored')
    })



    //console.log(colored);
    $('.cell').click(function () {
        var color = $(this).css('background-color');
        color = color.replace("0)", "1)")
        $(this).css('background', color);
        if($(this).hasClass('colored')){
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
