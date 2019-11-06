$(document).ready(function () {
    var main = '<main/>';
    var section = '<section/>';
    var div = '<div/>';
    var h2 = '<h2/>';
    var span = '<span/>';
    var rowMainCl = 'row d-flex flex-nowrap justify-content-center align-items-center result'
    var rowCl = 'row d-flex flex-nowrap row-cell'
    //main
    //-section
    //--container-fluid
    //---row d-flex flex-nowrap justify-content-center align-items-center result
    //----col-6-div
    //-----h2
    //---row d-flex flex-nowrap*8
    //----col-8-div cell*8*8
    //-----square 
    $('body').prepend(
        $(main).append(
            $(section).append(
                $(div,{'class': 'container-fluid'}).append(
                    $(div, {'class': rowMainCl}).append(
                        $(div, {'class': 'col-6'}).append(
                            $(h2,{'text':'ORANGE: '}).append(
                                $(span, {
                                    'id':'resA',
                                    'text':'0'})))
                    ).append(
                        $(div, {'class': 'col-6'}).append(
                            $(h2,{'text':'GREEN: '}).append(
                                $(span, {
                                    'id':'resB',
                                    'text':'0'}))))
                )
            )
        )
    );
    for (var i = 0; i < 8; i++) {
        $('.container-fluid').append($(div ,{'class':rowCl}))
    }
    for (var i = 0; i < 8; i++) {
        $(".row.d-flex.flex-nowrap.row-cell").append($(div ,{'class':'col-8-div cell'}).append(
            $(div ,{'class':'square'}))
            )
    }

})

