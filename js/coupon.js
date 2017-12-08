$(function(){
//    加载页面数据
    $.ajax({
        url: "http://127.0.0.1:9090/api/getcoupon",
        type:"get",
        success:function (data) {
            console.log(data);
            $('.coupon ul').html(template("tpl",data));
        }

    });
});