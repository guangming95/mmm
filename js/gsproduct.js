$(function () {
    // 店铺加载
    $.ajax({
        url: "http://127.0.0.1:9090/api/getgsshop",
        type: "get",
        success: function (data) {
            data.type = 0;
            console.log(data);
            $('.nav-shop').html(template("tpl", data));
        }
    });
    // 区域加载
    $.ajax({
        url: "http://127.0.0.1:9090/api/getgsshoparea",
        type: "get",
        success: function (data) {
            data.type = 1;
            console.log(data);
            $('.nav-area').html(template("tpl", data));
        }
    });
var shopid = 0;
var areaid = 0;
    renderProduct(shopid,areaid);

    // 商品列表加载

    function renderProduct(shopid, areaid) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getgsproduct",
            type: "get",
            data: {
                shopid: shopid,
                areaid: areaid
            },
            success: function (data) {
                // console.log(data);
                $('.bsproduct .bsproduct-content ul').html(template("tpl1", data));
            }
        });
    }

    //展开导航点击事件
    
    $('.fitst-nav li').eq(0).on("click",function () {
        $('.nav-shop').slideToggle(400).siblings().hide();
        $('.nav-shop').off().on("click","li",function () {
           shopid = $(this).data("shopid");
            $('.nav-shop').hide();
            renderProduct(shopid,areaid);
            $('.nav-shop li').eq(shopid).addClass("fa fa-check").siblings().removeClass("fa fa-check");
            $('.fitst-nav li').eq(0).html($('.nav-shop li').eq(shopid).html())
        });
    });
    $('.fitst-nav li').eq(1).on("click",function () {
        $('.nav-area').slideToggle(400).siblings().hide();
        $('.nav-area').off().on("click","li",function () {
            // console.log($(this).data("areaid")) ;
            areaid = $(this).data("areaid");
            $('.nav-area').hide();
            renderProduct(shopid,areaid);
            $('.nav-area li').eq(areaid).addClass("fa fa-check").siblings().removeClass("fa fa-check");
            $('.fitst-nav li').eq(1).html($('.nav-area li').eq(areaid).html())
        });
    });
    $('.fitst-nav li').eq(2).on("click",function () {
        $('.nav-all').slideToggle(400).siblings().hide();
    });
});