$(function(){
    var couponid =Tool.getUrlInfo("couponid");
//    加载页面数据
    var dataAll;
    $.ajax({
        url: "http://127.0.0.1:9090/api/getcouponproduct",
        type:"get",
        data:{
            couponid:couponid
        },
        success:function (data) {
            // console.log(data);
            $('.couponproduct ul').html(template("tpl",data));
            dataAll = data;
        }

    });

    //点击li加载图片
    $('.couponproduct ul').on("click","li",function () {
        dataAll.i = $(this).index();
        $('.couponproduct .see-info').html(template("tpl1",dataAll));
        $('.couponproduct .see-info').show();
        $('.close-img').off().on("click",function () {
            $('.see-info').hide();
        });
    });




});