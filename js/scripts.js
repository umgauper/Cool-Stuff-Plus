$(document).ready(function(){
    $('.bxslider').bxSlider();
    $("button").click(
        function() {
            $(".viewMore").toggle("slow", function() {});
        })



});
