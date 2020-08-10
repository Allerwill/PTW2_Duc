$( document ).ready(function() {
    $('.location[position="eight"]').addClass("selected");
    $(".location").click(function(){
        $(".location").not(this).removeClass("selected");
        $(this).toggleClass("selected")
    });

});