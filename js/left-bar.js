$(".js-burger").click(function() {
    $(".js-sect-1").toggleClass("main-nav_open");
    $(this).toggleClass("main-nav-open-btn_active");
    $(".js-layer").toggleClass("js-layer-active");
    $('.main-nav').toggleClass('active');
});
