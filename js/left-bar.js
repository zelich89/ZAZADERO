$(".js-burger").click(function() {
    $(".js-sect-1").toggleClass("main-nav_open");
    $(this).toggleClass("js-burger_active");
    $(".js-layer").toggleClass("js-layer-active");
    $('.sect-1').toggleClass('active');
});
