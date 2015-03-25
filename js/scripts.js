$(document).ready(function() {
    $('.bxslider').bxSlider();

    // Panel Controls
    $('li.refrig').on('click', function() {
        $('li.refrig').css({"background-color": "#FFFFFF"});
        $('li.other').css({"background-color": "#D3D3D3"});
        $('div.refrig').show();
        $('div.other').hide();
    });
    $('li.other').on('click', function() {
        $('li.other').css({"background-color": "#FFFFFF"});
        $('li.refrig').css({"background-color": "#D3D3D3"});
        $('div.refrig').hide();
        $('div.other').show();
    });

    $("button").click(
        function() {
            $(".viewMore").toggle("slow", function() {});
        });
});
