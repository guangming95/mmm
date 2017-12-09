$(function () {
    $('.category').on("click", ".top", function () {
        // console.log($(this));
        $(this).next().slideToggle(400);
    });
//    加载一级分类数据
    $.ajax({
        url: "http://127.0.0.1:9090/api/getcategorytitle",
        type: "get",
        success: function (data) {
            // console.log(data);
            $('.first-category').html(template("tpl", data));
            // 遍历一级数据，根据一级分类加载二级分类
            $('.first-content .top').each(function (i) {
                var id = $(this).data("id");
                // console.log(id);
                $.ajax({
                    url: "http://127.0.0.1:9090/api/getcategory",
                    type: "get",
                    data: {
                        titleid: id
                    },
                    success: function (data) {
                        // console.log(data);
                        $('.second-category').eq(i).html(template("tpl1",data));
                    }
                });
            });
        }
    });
});