$(function () {
    //导航加载
    $.ajax({
        url: "http://127.0.0.1:9090/api/getindexmenu",
        type: "get",
        success: function (data) {
            console.log(data);
            console.log(1);
            $('.m-nav > ul').html(template("tpl", data));
        }
    });

//    导航展开事件
    $(".m-nav").on("click", ".nav-more", function (e) {
        e.preventDefault();
        $('.m-nav').animate({
            height:"16rem"
        },500);
    });

//    打折列表加载

    $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        type:"get",
        success:function (data) {
            console.log(data);
            $('.m-sale .m-sale-main ul').html(template("tpl1",data));
        }
    });


});

