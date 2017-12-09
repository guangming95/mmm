$(function () {

    var maxWidth = 750;
    var uiFontSize = 40;
    var html = document.documentElement;
    var screenWidth = html.clientWidth;
    var bili = uiFontSize / maxWidth;

    // var timer = null;

    // html.style.fontSize = bili * screenWidth + "px";

    getSize();

    window.onresize = getSize;

    function getSize() {
        screenWidth = html.clientWidth;
        if (screenWidth <= 320) {
            html.style.fontSize = bili * 320 + "px";
        } else if (screenWidth >= 640) {
            html.style.fontSize = bili * 640 + "px";
        } else {
            html.style.fontSize = bili * screenWidth + "px";
        }
        // console.log(screenWidth);
        // console.log(bili);
        // console.log(html.style.fontSize);
    }

    // console.log(2);


    //    返回顶部
    $('.goTop').on("click", function () {
        // console.log("go-top");
        $('html,body').animate({"scrollTop": 0}, 500);
    });


    //自定义工具
    window.Tool = {
        //获取url参数，以对象返回
        getUrl: function () {
            var str = location.search;
            str = str.substr(1);
            var arr = str.split("&");
            var info = {};
            arr.forEach(function (e) {
                var temp = e.split("=");
                info[temp[0]] = temp[1];
            });
            return info;
        },
        //获取url单个参数的值
        getUrlInfo: function (key) {
            var obj = this.getUrl();
            return obj[key];
        }
    };

//    自定义方法
    window.OtherTool = {
        //翻页 ，数据，回调ajax渲染  当前页-可省略-默认1
        pageTo: function (data, callback, pageid) {
            //页数加载

            var index = pageid || 1;
            //    总条数
            var totalCount = data.totalCount;
            // console.log(Math.ceil(totalCount / data.pagesize));
            // 总页数
            var count = Math.ceil(totalCount / data.pagesize);
            var tempObj = {};
            tempObj.count = count;
            tempObj.index = index;
            $('.pageTo .btn-center').html(template("tplPageTo", tempObj));
            // console.log(tempObj);

            //点击翻页展开
            $('.btn-center .currentPage').off().on("click", function () {
                $('.btn-center ul').slideToggle(400);
            });

            //    翻页随机选，点击事件
            $('.btn-center ul').off().on("click", "li", function () {
                // loaction.href

                //第二种ajax传值
                callback($(this).data("pageid"));
            });
            //    上一页，下一页点击事件

            $('.btn-prev').off().on("click", function () {
                var index = $('.currentPage').data("index");
                // console.log(index);
                if (1 < index) {
                    callback(index - 1);
                    // console.log("上一页", index - 1);
                }

            });
            $('.btn-next').off().on("click", function () {
                var index = $('.currentPage').data("index");
                var count = $('.currentPage').data("end");
                // console.log(count);
                if (index < count) {
                    callback(index + 1);
                    // console.log("xia一页", index + 1);
                }
            });
            $('html,body').animate({"scrollTop": 0}, 0);
        }

    }
});