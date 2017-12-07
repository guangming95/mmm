$(function () {
    var categoryid = Tool.getUrlInfo("categoryid");
    renderInfo();
    // var pageid = Tool.getUrlInfo("pageid") || 1;


//    列表分级导航加载
    function renderInfo(pageid) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getcategorybyid",
            type: "get",
            data: {
                categoryid: categoryid
            },
            success: function (data) {
                console.log(data);
                $('.old-url').html(template("tpl", data));
                var id = data.result[0].categoryId;
                console.log(id);

                //    商品列表加载
                $.ajax({
                    url: "http://127.0.0.1:9090/api/getproductlist",
                    type: "get",
                    data: {
                        categoryid: id,
                        pageid: pageid ||1

                    }, success: function (data) {
                        console.log(data);
                        $('.m-productlist .main ul').html(template("tpl1", data));
                        pageRender(data,pageid);


                    }
                });
            }
        });

    }
    //页数加载
    function pageRender(data, pageid) {
        var index = pageid||1;
        //    总条数
        var totalCount = data.totalCount;
        // console.log(Math.ceil(totalCount / data.pagesize));
        // 总页数
        var count = Math.ceil(totalCount / data.pagesize);
        var tempObj = {};
        tempObj.count = count;
        tempObj.index = index;
        $('.m-productlist .bottom .btn-center').html(template("tpl2", tempObj));
        console.log(tempObj);


        $('.btn-center .currentPage').on("click", function () {
            $('.btn-center ul').slideToggle(400);
        });

        //    翻页随机选，点击事件
        $('.btn-center ul').on("click", "li", function () {
            // loaction.href

            //第二种ajax传值
            renderInfo($(this).data("pageid"));
        });
    }
    
//    上一页，下一页点击事件
    
    $('.btn-prev').on("click",function () {
        var index = $('.currentPage').data("index");
        console.log(index);
        if(1<index){
            renderInfo(index-1);
            console.log("上一页",index-1);
        }

    });
    $('.btn-next').on("click",function () {
        var index = $('.currentPage').data("index");
        var count = $('.currentPage').data("end");
        console.log(count);
        if(index<count){
            renderInfo(index+1);
            console.log("xia一页",index+1);
        }


    });
});