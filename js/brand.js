$(function () {
    var productName, productImg;
    var brandtitleid = Tool.getUrlInfo("brandtitleid");
    // console.log(brandtitleid);
    //渲染排名
    $.ajax({
        url: "http://127.0.0.1:9090/api/getbrand",
        type: "get",
        data: {
            brandtitleid: brandtitleid
        },
        success: function (data) {
            // console.log(data);
            $('.wherebrand ul').html(template("tpl", data));
            //排名序号重新渲染颜色
            $('.num-top').each(function (i) {
                switch (i){
                    case 0:{
                        $(this).css({
                            backgroundColor: "#f10e0e"
                        });
                        break;
                    }
                    case 1:{
                        $(this).css({
                            backgroundColor: "#ff9313"
                        });
                        break;
                    }
                    case 2:{
                        $(this).css({
                            backgroundColor: "#8adf5b"
                        });
                        break;
                    }
                    default:{
                        $(this).css({
                            backgroundColor: "#c9c9c9"
                        });
                        break;
                    }

                }
            });
        }
    });
    //渲染品牌型号
    $.ajax({
        url: "http://127.0.0.1:9090/api/getbrandproductlist",
        type: "get",
        data: {
            brandtitleid: brandtitleid,
            pagesize: 4
        },
        success: function (data) {
            // console.log(data);
            productName = data.result[0].productName;
            productImg = data.result[0].productImg;
            // console.log(data2);
            $('.salebrand ul').html(template("tpl1", data));


            // 渲染评论
            $.ajax({
                url: "http://127.0.0.1:9090/api/getproductcom",
                type: "get",
                data: {
                    productid: 0
                },
                success: function (data) {
                    // console.log(data);
                    $('.commentbrand ul').html(template("tpl2", data));
                    $('.commentbrand ul .right').html(template("tpl3", {name: productName,img:productImg}));
                    $('.commentbrand .bt-top .img-box').html(template("tpl4", {name: productName,img:productImg}));
                    // console.log(template("tpl3", {data: productName}));
                    // console.log(template("tpl4", {data: productImg}));

                }
            });


        }
    });

});
