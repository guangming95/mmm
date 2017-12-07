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
        window.animated({
            top: 0
        }, 300);
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
});