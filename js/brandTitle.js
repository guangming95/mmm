$(function () {
    $.ajax({
        url: "http://127.0.0.1:9090/api/getbrandtitle",
        type: "get",
        success: function (data) {
            console.log(data);
            $('.brandtitle ul').html(template("tpl",data));
        }
    })
    ;
});