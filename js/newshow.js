$(".btn_2").click(function () {

    if (lunbo.offsetLeft == 0) {
        $(".show_0").stop().animate({left: "-432px"}, 1000);

    }
    if (lunbo.offsetLeft == -432) {
        $(".show_0").stop().animate({left: "-866px"}, 1000);

    }
    if (lunbo.offsetLeft == -866) {
        $(".show_0").stop().animate({left: "-1310px"}, 1000);

    }


})
$(".btn_1").click(function () {

    if (lunbo.offsetLeft == -432) {
        $(".show_0").stop().animate({left: "0px"}, 1000);

    }
    if (lunbo.offsetLeft == -866) {
        $(".show_0").stop().animate({left: "-432px"}, 1000);

    }
    if (lunbo.offsetLeft == -1310) {
        $(".show_0").stop().animate({left: "-866px"}, 1000);

    }
})


$(".list_one").click(function () {
    $(this).find("ul").stop().slideToggle()
})
$(".list_two").click(function () {
    $(this).find("ul").stop().slideToggle()
})