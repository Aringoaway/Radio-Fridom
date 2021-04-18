jQuery(document).ready(function(){
    "use strict"

    $(".c1").before(
        "<div class=\"year\">" +
                "<div class=\"years\">1999</div>" +
            "</div>" +

        "");

    $(".c5").before(
        "<div class=\"menu__item white\">" +
        "<div class=\"data__card\">27. januar 1999.</div>" +
        "<div class=\"card__text simple\">Albright i Ivanov pozvali na otvaranje pregovora</div>" +
        "</div>" +

        "");


});

// $(document).ready(function(){
//     //Скрыть PopUp при загрузке страницы
//     PopUpHide();
// });
// //Функция отображения PopUp
// function PopUpShow(){
//     $("#popup1").show();
// }
// //Функция скрытия PopUp
// function PopUpHide(){
//     $("#popup1").hide();
// }

$(function(){
    $('.c1').click(function () {
        $('.popup').show();
        $('.p1').show();
    });

    $('.popup').click(function () {
        $('.popup').hide();
        $('.p1').hide();
    });

    $('.p1').click(function () {
        $('.popup').hide();
        $('.popup__item').hide();
    });
});

$(function(){
    $('.c2').click(function () {
        $('.popup').show();
        $('.p2').show();
    });

    $('.popup').click(function () {
        $('.popup').hide();
        $('.p2').hide();
    });

    $('.p2').click(function () {
        $('.popup').hide();
        $('.popup__item').hide();
    });
});

$(function(){
    $('.c3').click(function () {
        $('.popup').show();
        $('.p3').show();
    });

    $('.popup').click(function () {
        $('.popup').hide();
        $('.p3').hide();
    });

    $('.p3').click(function () {
        $('.popup').hide();
        $('.popup__item').hide();
    });
});