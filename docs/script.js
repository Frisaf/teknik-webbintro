const bgswitch = document.getElementById("bgswitch")

function changeBackground(color) {
    const main = document.querySelector('.mainBox')
    main.classList.toggle('light')
}

bgswitch.addEventListener("click", function() { changeBackground('darkgrey')})