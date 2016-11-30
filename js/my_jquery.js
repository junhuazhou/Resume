
$(function(){
    var lix =0;
    $(".pic").ready().animate({bottom:'0'},1200);
    $(".first_passage h3").ready().delay(500).animate({left:'0'},1200);
    $(".first_passage p").ready().delay(700).animate({right:'0'},1200);
    $('#instruction').fullpage({
        loopBottom: true,
        'navigation': true,
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.second_passage').find('p').delay(500).animate({
                      bottom: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 3){
                $('.third_passage').find('p').delay(500).animate({
                    bottom: '0'
                }, 1500, 'easeOutExpo');
                $('.skill ul').find('li').delay(1000).animate({
                    left:'0'
                },1500,'easeOutExpo');
            }
            if(index == 4){
                $('.forth_passage').find('p').fadeIn(2000);
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.second_passage').find('p').delay(500).animate({
                    bottom: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '3'){
                $('.third_passage').find('p').delay(500).animate({
                    bottom: '-120%'
                }, 1500, 'easeOutExpo');
                $('.skill ul').find('li').delay(1000).animate({
                    left:'-120%'
                },1500,'easeOutExpo');
            }
            if(index == '4'){
                $('.forth_passage').find('p').fadeOut(2000);
            }
        }
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
    
    
    $(".pic img").mouseover(function () {
        $(this).attr("src","images/pic2.JPG");
    })
    $(".pic img").mouseleave(function () {
        $(this).attr("src","images/pic3.jpg");
    })
    $("#nav_header li:gt(0)").click(function () {
        alert("正在努力建设中......")
    })
        $(".my_info ul li:eq(0)").mouseover(function () {
            $(".my_info ul li:eq(0) img").animate({height: "100px", width: "100px"}, 200)
                .css("background-color", "white");
        })
        $(".my_info ul li:eq(0)").mouseleave(function () {
            $(".my_info ul li:eq(0) img").animate({height: "80px", width: "80px"}, 100)
                .css("background-color", "transparent");
        })
    $(".my_info ul li:eq(1)").mouseover(function () {
        $(".my_info ul li:eq(1) img").animate({height: "100px", width: "100px"}, 200)
            .css("background-color", "white");
    })
    $(".my_info ul li:eq(1)").mouseleave(function () {
        $(".my_info ul li:eq(1) img").animate({height: "80px", width: "80px"}, 100)
            .css("background-color", "transparent");
    })
    $(".my_info ul li:eq(2)").mouseover(function () {
        $(".my_info ul li:eq(2) img").animate({height: "100px", width: "100px"}, 200)
            .css("background-color", "white");
    })
    $(".my_info ul li:eq(2)").mouseleave(function () {
        $(".my_info ul li:eq(2) img").animate({height: "80px", width: "80px"}, 100)
            .css("background-color", "transparent");
    })
    $(".my_info ul li:eq(3)").mouseover(function () {
        $(".my_info ul li:eq(3) img").animate({height: "100px", width: "100px"}, 200)
            .css("background-color", "white");
    })
    $(".my_info ul li:eq(3)").mouseleave(function () {
        $(".my_info ul li:eq(3) img").animate({height: "80px", width: "80px"}, 100)
            .css("background-color", "transparent");
    })



    //封装函数

});
