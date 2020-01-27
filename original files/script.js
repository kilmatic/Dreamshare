const hamburger = (document).querySelector('.nav-hamburger');
const navlist = (document).querySelector('ul#headernav');
const links = (document).querySelectorAll("ul#headernav li");

hamburger.addEventListener("click", () => {
    navlist.classList.toggle("open");
});