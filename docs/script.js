const bgswitch = document.getElementById("bgswitch")

function changeBackground(color) {
    document.mainBox.style.background = color;
}

bgswitch.addEventListener("click", function() { changeBackground('darkgrey')})