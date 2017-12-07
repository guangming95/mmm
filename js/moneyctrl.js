$(function () {
    var pageid = 1;
    renderInfo(pageid);

    //加载列表
    function renderInfo(pageid) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            type: "get",
            data: {
                pageid: pageid
            },
            success: function (data) {
                console.log(data);
                $('.moneyctrl .list').html(template("tpl", data));
                OtherTool.pageTo(data,renderInfo, pageid)
            }
        });
    }



});