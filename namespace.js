var GONG0030 = {
    d: function (ev) {
        var target = ev.currentTarget;
        target.style.backgroundColor = "pink";
        target.style.borderColor = "black";
    },
    init: function () {
        var d = document.getElementById('boxes');
        d.addEventListener('click',GONG0030.d);
    }
}

GONG0030.init();
