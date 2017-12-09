$(function () {
    var productid = Tool.getUrlInfo("productid");
//    进入页面加载数据
    $.ajax({
        url: "http://127.0.0.1:9090/api/getdiscountproduct",
        type: "get",
        data: {
            productid: productid
        },
        success: function (data) {
            // console.log(data);
            //渲染标题
            $('.discount .title').html(template("tpl",data));
            //渲染来源时间
            $('.discount .product-info').html(template("tpl1",data));
            //    渲染图片简介
            $('.discount .info-img').html(template("tpl2",data));
            //    渲染商品详情
            $('.discount .info-img-box').html(template("tpl3",data));
            //    渲染评论详情
            $('.discount .info-comment').html(template("tpl4",data));
            //    渲染评论详情
            $('.discount .baoyou').html(template("tplby",data));
        }
    });
    // console.log(1);
});