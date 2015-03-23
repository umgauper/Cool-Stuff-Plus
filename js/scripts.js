$(document).ready(function() {
    //$('.bxslider').bxSlider(); // images would not load correctly after I added panelController, so I moved this line to the panelController
    $("button").click(
        function() {
            $(".viewMore").toggle("slow", function() {});
            //$('.bxslider').bxSlider();
        });



});
// can not use JS code to resize window...