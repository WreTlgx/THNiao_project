$(document).ready(function(){

    var documentWidth = $(document).width();

    //导航栏点击效果
    $(".pink-a a").click(function(event){
        $(".pink-a a").removeClass("active");
        $(this).addClass("active");
        $(this).mouseleave(function () {
           $(this).css({"text-decoration":"none"});
        });
    });

    //导航栏的搜索图标和登录按钮
    $(".search-btn").click(function (event) {
        $(this).css({"transform":"translateX(169px)"});
        $(".search-input").show();

    });
    $(".search-btn").mouseenter(function (event) {
        $(this).css({"color":"#f36"});
    });
    $(".search-btn").mouseleave(function (event) {
        $(this).css({"color":"rgba(0,0,0,.87)"});
    });
    $(".search-input").mouseenter(function (event) {
        $(".search-btn").hide();
    });
    $(".search-input").mouseleave(function (event) {
        $(".search-btn").hide();
        setTimeout(function (event) {
            $(".search-input").hide();
            $(".search-btn").show();
            $(".search-btn").css({"transform":"translateX(0px)"});
            if($(window).width() > 815){
                rightBarShow();
            }
        },1000);
    });
    $(".search-input>.search-icon").click(function (event) {
        $(this).css({"color":"#f36"});
    });
    $(".search-input>.search-icon").mouseenter(function (event) {
        $(this).css({"color":"rgba(0,0,0,.87)"});
    });
    $(".search-input>.search-icon").mouseleave(function (event) {
        $(this).css({"color":"rgba(0,0,0,.87)"});
    });
    $(".right-bar a.btn.down").mouseenter(function (event) {
        $(".right-bar>div>div").stop().slideDown();
    });
    $(".right-bar>div").mouseleave(function (event) {
        $(".right-bar>div>div").stop().slideUp();
    });
    rightBarShow();
    judgeHide();
    function rightBarShow(){
        setTimeout(function (event) {
            $(".right-bar").show();
        },1100);
    }
    function rightBarHide(){
        $(".right-bar").hide();
    }
    function judgeHide(){
        if($(window).width() <= 815){
            rightBarHide();
        }else{
            rightBarShow();
        }
        if($(window).width() <= 750){
            $(".search.item").css({"margin-left":10});
        }
        if($(window).width() <= 685){
            $(".search.item").hide();
            $(".navbar-ul li").css({"margin-left": 10});
        }else{
            $(".search.item").show();
            $(".navbar-ul li").css({"margin-left": 0});
        }
        if($(window).width() <= 995){
            $(".search-btn").click(function(event){
                rightBarHide();
            });
        }else{
            $(".search.item").mouseleave(function(event){
                rightBarShow();
            });
        }
    }
    pageBanner();
    $(window).resize(function (event) {
        judgeHide();
        documentWidth = $(document).width();
        pageBanner();
    });

    //page轮播

    function pageBanner(){
        $(".banner>.banner-in>li").css({"width":documentWidth});
    }

});