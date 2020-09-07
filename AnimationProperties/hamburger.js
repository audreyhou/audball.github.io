var $ = jQuery;

$(document).ready(function () {
    $(".HamburgerIcon").click(function () {
        $(this).toggleClass("is-active");
        if(document.getElementById("MenuItem-Menu").style.display == "block")
        {
            document.getElementById("MenuItem-Menu").style.display = "none";
            document.getElementById("MenuItem-About").style.display = "block";
            document.getElementById("MenuItem-Experience").style.display = "block";
            document.getElementById("MenuItem-Photography").style.display = "block";
        }
        else
        {
            document.getElementById("MenuItem-Menu").style.display = "block";
            document.getElementById("MenuItem-About").style.display = "none";
            document.getElementById("MenuItem-Experience").style.display = "none";
            document.getElementById("MenuItem-Photography").style.display = "none";
        }
    });
});