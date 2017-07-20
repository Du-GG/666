$(document).ready(function(){
    var slideBox = $(".slideBox");
    var ul = slideBox.find("ul");
    var oneWidth = slideBox.find("ul li").eq(0).width();
    var number = slideBox.find(".spanBox span");            //注意分号 和逗号的用法
    var timer = null;
    var sw = 0;                    
     //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
    number.on("click",function (){
    $(this).addClass("active").siblings("span").removeClass("active");
    sw=$(this).index();
	    ul.animate({
	            "right":oneWidth*sw,    //ul标签的动画为向左移动；
	    });
    });
    //定时器的使用，自动开始
    timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
    },2000);
    //hover事件完成悬停和，左右图标的动画效果
    slideBox.hover(function(){
        clearInterval(timer);
       },function(){
        timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
        },2000);
    });
    $(".list_one").click(function () {
        $(this).find("ul").stop().slideToggle()
    })
    $(".list_two").click(function () {
        $(this).find("ul").stop().slideToggle()
    })
})