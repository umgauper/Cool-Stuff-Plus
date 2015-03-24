$(document).ready(function() {
    $('.bxslider').bxSlider();
    $("button").click(
        function() {
            $(".viewMore").toggle("slow", function() {});
        });

    //panel functions
    $('div.other').hide();
    $('li.refrig').on('click', function() {
        $('li.refrig').css({"background-color": "#FFFFFF"});
        $('li.other').css({"background-color": "#D3D3D3"});
        $('div.other').hide();
        $('div.refrig').show();
    });
    $('li.other').on('click', function() {
        $('li.other').css({"background-color": "#FFFFFF"});
        $('li.refrig').css({"background-color": "#D3D3D3"});
        $('div.refrig').hide();
        $('div.other').show();
    });

});