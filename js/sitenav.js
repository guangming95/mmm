$(function(){
    $.ajax({
        url: "http://127.0.0.1:9090/api/getsitenav",
type:"get",
        success:function (data) {
            console.log(data);
            $('.sitenav').html(template("tpl",data));
        }
    });
});