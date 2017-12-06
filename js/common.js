window.onload = function () {
    var maxWidth = 740;
    var uiFontSize = 40;
    var html = document.documentElement;
    var screenWidth = html.clientWidth;
    var bili = uiFontSize/maxWidth;

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
    }


    console.log(screenWidth);
};