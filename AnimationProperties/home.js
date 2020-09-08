var $ = jQuery;
var homeVisited = false;

$(document).ready(function () {
    if(homeVisited) {
        $(".backgroundExtension").removeClass(".backgroundAnimation");
    }
})