$(".js-main-nav-open-btn").click(function() {
    $(".js-main-nav").toggleClass("main-nav_open");
    $(this).toggleClass("main-nav-open-btn_active");
    $(".js-layer").toggleClass("js-layer-active");
    $('.main-nav').toggleClass('active');
    $('.main-text-dark').toggleClass('active');
});


