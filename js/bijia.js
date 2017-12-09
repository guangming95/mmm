$(function () {
    var productId = Tool.getUrlInfo("productId");
    var categoryId = Tool.getUrlInfo("categoryid");
    var brandName = decodeURI(Tool.getUrlInfo("brandName"));
    render();

    //数据加载
    function render() {
        //三级菜单加载
        $.ajax({
            url: "http://127.0.0.1:9090/api/getcategorybyid",
            type: "get",
            data: {categoryid: categoryId},
            success: function (data) {
                // console.log(data);
                data.brandName = brandName;
                $('.old-url').html(template("tpl", data));
            }
        });
        //图片购买源加载
        $.ajax({
            url: "http://127.0.0.1:9090/api/getproduct",
            type: "get",
            data: {
                productid: productId
            },
            success: function (data) {
                // console.log(data);
                $('.img-box').html(template("tpl1", data));
                $('.info').html(template("tpl2", data));
            }
        });
        //评论信息加载
        $.ajax({
            url: "http://127.0.0.1:9090/api/getproductcom",
            type: "get",
            data: {
                productid: productId
            },
            success: function (data) {
                // console.log(data);
                $('.comment-info').html(template("tpl3", data));
            }
        });

    }
});
