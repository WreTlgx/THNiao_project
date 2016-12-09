$().ready(function (event) {

    /*触发event搜索按钮*/
    $("nav>div>div>form>i.search-icon").click(function (event) {
        $("nav>div>div>form>div.searchs").show();
        $(this).css({"transform":"translateX(175px)"});
        setTimeout(function (event) {
            $("nav>div>div>form>i.search-icon").css({"display":"none"});
        },300)
    });
    /*search搜索按钮*/
    $("nav>div>div>form>div.searchs>i").click(function (event) {

    });
    /*点击空白隐藏input*/
    $("div.spaces").click(function (event) {
        $("nav>div>div>form>i.search-icon").css({"display":"inline-block","transform":"translateX(0px)"});
        $("nav>div>div>form>div.searchs").hide();
    });

    /*Fiudown的Fiumenu上下滑动*/
    $("nav>div>div.Fiudown>div").mouseenter(function (event) {
        $("nav>div>div.Fiudown>div>div.Fiumenu").stop().slideDown();
    });
    $("nav>div>div.Fiudown>div").mouseleave(function (event) {
        $("nav>div>div.Fiudown>div>div.Fiumenu").stop().slideUp();
    });



    //test/测试:
    /*
     //浏览器窗口100%宽图片的响应式居中
     <section class="page" style="position:relative">
     <div style="width:100%; height:100%;background:pink;">
     <img class="textimg" src="images/page4.jpg" alt="" style="width:1400px;height:420px;">
     </div>
     <div style="width:600px; height:100%; border:1px solid red;box-sizing:border-box;margin:0 auto;"></div>
     </section>
     */
    /*
    var c = 1400;
    $(window).resize(function(){
        var a = $(window).width(); //可见的浏览器窗口
        // console.log(a);
        var b = (c-a)/2;
        // console.log(b);
       $("img.textimg").css({"margin-left":-b});
    });
    */
    //电脑屏幕宽度：
    //console.log(screen.width);
    //包含滚动条的可见浏览器窗口：
    //console.log(window.innerWidth);

    //page轮播
    var $pageLinks = $("body>section.page>div.banner>ul.banner-in>li>a");
    var $bannerBtns = $("section.page>div.banner>div.banner-btns");
    var screenWidths = screen.width;
    //console.log(screenWidths);
    $pageLinks.css({"width":screenWidths});
    $pageLinks.parent().css({"width":screenWidths});
    $pageLinks.parent().parent().css({"width":screenWidths * 3,"left":-screenWidths});
    $pageLinks.parent().parent().parent().css({"width":screenWidths});



    $(window).resize(function (event) {
        var innerWidths = window.innerWidth; //可视窗口宽度(包含滚轮宽度)
        var winWidths = $(window).width(); //可视窗口宽度
        var a = winWidths;
        
        if(a < screenWidths){
            var b = (screenWidths - a) / 2;
            for(var i in $pageLinks){
                $pageLinks.eq(i).css({"background-position":-b+"px,0px"});
            }
        }
    });

});