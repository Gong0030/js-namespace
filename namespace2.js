var LIN = {
    d: function (ev) {
        var target = ev.currentTarget;
        target.style.backgroundColor = "red";
        target.style.borderColor = "green";
    },
    init: function () {
        var b = document.getElementById('boxes');
        b.addEventListener('mouseover',LIN.d);
    }
}

LIN.init();