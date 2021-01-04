$(document).ready(function(){

    search();
    menuMobile();
    menuMobileDropDown();

});

//botão input
function search() {
    $(function() {
        $("#search").hover(
            function () {
                $('#input').fadeIn();
            },
            function () {
                $('#input').fadeOut();
            }
        );
    });

}


function menuMobile() {
    $('.menu-toggle').click(function (){
        let menu = $('.menu-primary-mobile > ul, .menu-secundary-mobile > ol');
        $(menu).slideToggle();
    });
}



function menuMobileDropDown() {

        $('#vestidos').click(function () {  $('#vestidos-ul').stop().slideToggle(); })
        $('#blusas').click(function () {  $('#blusas-ul').stop().slideToggle(); })
        $('#calca').click(function () {  $('#calca-ul').stop().slideToggle(); })
        $('#camisas').click(function () {  $('#camisas-ul').stop().slideToggle(); })
        $('#shorts').click(function () {  $('#shorts-ul').stop().slideToggle(); })
        $('#saias').click(function () {  $('#saias-ul').stop().slideToggle(); })
        $('#macaquinho').click(function () {  $('#macaquinho-ul').stop().slideToggle(); })
        $('#praia').click(function () {  $('#praia-ul').stop().slideToggle(); })

}



















