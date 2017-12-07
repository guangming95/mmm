$(function () {
    var productid = Tool.getUrlInfo("productid");
//    进入页面加载数据
    $.ajax({
        url: "http://127.0.0.1:9090/api/getmoneyctrlproduct",
        type: "get",
        data: {
            productid: productid
        },
        success: function (data) {
            console.log(data);
            //渲染标题
            $('.moneyctrlProduct .title').html(template("tpl",data));
            //渲染来源时间
            $('.moneyctrlProduct .product-info').html(template("tpl1",data));
        //    渲染图片简介
            $('.moneyctrlProduct .info-img').html(template("tpl2",data));
            //    渲染商品详情
            $('.moneyctrlProduct .info-img-box').html(template("tpl3",data));
            //    渲染评论详情
            $('.moneyctrlProduct .info-comment').html(template("tpl4",data));
        }
    });
    console.log(1);
});