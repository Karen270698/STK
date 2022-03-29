$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//------------------

//$(function ($) {
    //var url = document.location.href;
    //var pos = url.indexOf("#");
    //if (pos > 0) {
        //url = url.substring(0, pos);
    //}
    //$.each($('.header__list a'), function (index, value) {
        //if (url.indexOf($(this).attr('href')) + 1) {
            //$(this).addClass('act');//.parent().addClass('act')
        //}
    //});
//});
