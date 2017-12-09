$(function () {
    var productName, productImg;
    var brandtitleid = Tool.getUrlInfo("brandtitleid");
    $.ajax({
        url: "http://127.0.0.1:9090/api/getbrand",
        type: "get",
        data: {
            brandtitleid: brandtitleid
        },
        success: function (data) {
            // console.log(data);
            $('.wherebrand ul').html(template("tpl", data));
        }
    });
    $.ajax({
        url: "http://127.0.0.1:9090/api/getbrandproductlist",
        type: "get",
        data: {
            brandtitleid: brandtitleid,
            pagesize: 4
        },
        success: function (data) {
            console.log(data);
            productName = data.result[0].productName;
            productImg = data.result[0].productImg;
            // console.log(data2);
            $('.salebrand ul').html(template("tpl1", data));


            $.ajax({
                url: "http://127.0.0.1:9090/api/getproductcom",
                type: "get",
                data: {
                    productid: 0
                },
                success: function (data) {
                    console.log(data);
                    $('.commentbrand ul').html(template("tpl2", data));
                    $('.commentbrand ul .right').html(template("tpl3", {name: productName,img:productImg}));
                    $('.commentbrand .bt-top .img-box').html(template("tpl4", {name: productName,img:productImg}));
                    console.log(template("tpl3", {data: productName}));
                    console.log(template("tpl4", {data: productName}));
                }
            });


        }
    });

});
