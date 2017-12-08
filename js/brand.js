$(function () {
    var data2;
    var brandtitleid =Tool.getUrlInfo("brandtitleid");
    $.ajax({
        url: "http://127.0.0.1:9090/api/getbrand",
        type: "get",
        data: {
            brandtitleid: brandtitleid
        },
        success: function (data) {
            // console.log(data);
            $('.wherebrand ul').html(template("tpl",data));
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
            data2=data.result[0].productName;
            // console.log(data2);
            $('.salebrand ul').html(template("tpl1",data));





            $.ajax({
                url: "http://127.0.0.1:9090/api/getproductcom",
                type: "get",
                data: {
                    productid : 0
                },
                success: function (data) {
                    console.log(data);
                    $('.commentbrand ul').html(template("tpl2",data));
                    $('.commentbrand ul .right').html(template("tpl3",{data:data2}));
                    console.log(template("tpl3", {data: data2}));
                }
            });



        }
    });

});
