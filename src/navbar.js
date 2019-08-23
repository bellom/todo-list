/* global document */

const navbar = () => {
    const nav = document.getElementById("nav");
    nav.innerHTML =    `<a class="navbar-brand text-white mx-auto font-weight-bold" href="#">TODO LIST</a>`;    
}

export default navbar;