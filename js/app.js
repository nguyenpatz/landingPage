const btn_menu = document.querySelector(".button_menu");
const row_mobile = document.querySelector(".row1__mobile");

row_mobile.style.display="none";

btn_menu.addEventListener("click",(evt)=> {
    if(row_mobile.style.display == "none") {
        row_mobile.style.display = "flex";
    } else {
        row_mobile.style.display = "none";
    }
});


// When screen has width 801px, row_mobile and button will display none 
const mediaQuery = window.matchMedia('(min-width: 801px)');

function handleScreen(e) {
    if(e.matches) {
        row_mobile.style.display = "none";
        btn_menu.style.display = "none";
    } else {
        btn_menu.style.display = "block";
    }
}

mediaQuery.addListener(handleScreen)

handleScreen(mediaQuery)
