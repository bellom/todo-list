import projectLogic from "./projectLogic";

const navbar = () => {
    const nav = document.getElementById("nav");
    nav.innerHTML =    `<a class="navbar-brand text-white mx-auto" href="#">TODO LIST</a>`;    
}

export default navbar;