var GONG = {
    d: function (ev) {
        var target = ev.currentTarget;
        target.style.backgroundColor = "yellow";
        target.style.borderColor = "gray";
    },
    init: function () {
        var p = document.getElementById('boxes');
        p.addEventListener('mouseout',GONG.d);
    }
}

GONG.init();