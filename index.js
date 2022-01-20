let mainNav = document.querySelector(".cont-nav");

function scrollNav() {
    if (window.scrollY > 0 ) {
        mainNav.style.borderColor = 'rgba(0,27,55,.1)'
    }
    else if(window.scrollY == 0) {
        mainNav.style.borderColor = 'rgba(0,27,55,0)'
    }
}

console.log(window.scrollY);

// const scroller = document.querySelector("#scroller");
// const output = document.querySelector("#output");

// scroller.addEventListener("scroll", event => {
//   output.textContent = `scrollTop: ${scroller.scrollTop}`;
// });

let scroller = window;

scroller.addEventListener("scroll", e => {
    scrollNav()
})

