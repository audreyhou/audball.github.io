var $ = jQuery;

$(document).ready(function () {
    $(".HamburgerIcon").click(function () {
        $(this).toggleClass("is-active");
        $("#MenuItem-Home").toggle(500);
        $("#MenuItem-About").toggle(500);
        $("#MenuItem-Experience").toggle(500);
        $("#MenuItem-Photography").toggle(500);
        $("#MenuItem-Contact").toggle(500);
    });
});