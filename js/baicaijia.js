$(function(){
//    加载数据
//    一级分类
    $.ajax({
        url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
        type:"get",
        success:function (data) {
            console.log(data);
            $('.baicaijia .bcj-top ul').html(template("tpl",data));
            // console.log(template("tpl", data));

            //动态设置滑动ul的宽度
            var lis = $('.baicaijia .bcj-top ul li');
            // console.log(lis.eq(lis.length - 1).position().left+lis.eq(lis.length - 1).width()+30);
            var ulWidth = lis.eq(lis.length - 1).position().left+lis.eq(lis.length - 1).width()+100;
            $('.baicaijia .bcj-top ul').width(ulWidth);
            // console.log();



            renderSecond();
        }

    });


    //二级列表加载
    function renderSecond(titleid) {
        // 二级列表
        $.ajax({
            url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
            type:"get",
            data:{
                titleid:titleid||0
            },
            success:function (data) {
                console.log(data);
$('.baicaijia .bcj-content ul').html(template("tpl1",data));
            }

        });
    }


//    一级菜单点击事件
    $('.baicaijia .bcj-top').on("click","li",function () {
        // console.log($(this).data("id"));
        $(this).addClass("now").siblings().removeClass("now");
        renderSecond($(this).data("id"))
    });
});