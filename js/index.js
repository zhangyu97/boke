$(".caidang").click(function () {
    $(".kuangzi").animate({height:500},1000)
});
$(".caidang").mouseleave(function () {
    $(".kuangzi").animate({height:0},1000)
});