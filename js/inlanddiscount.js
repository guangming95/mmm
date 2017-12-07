$(function(){
    //加载页面数据
    $.ajax({
        url: "http://127.0.0.1:9090/api/getinlanddiscount",
        type:"get",
        success:function(data){
            console.log(data);
            $('.in-list ul').html(template("tpl",data));
        }
    });
});