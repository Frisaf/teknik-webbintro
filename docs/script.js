const bgswitch = document.getElementById("bgswitch")

function changeBackground(color) {
    const main = document.querySelector('.mainBox')
    main.classList.toggle('light')
}

bgswitch.addEventListener("click", function() { changeBackground('darkgrey')})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    }
    else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos
}