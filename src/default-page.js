/* global document */
import project from "./project";

const defaultPage = () => {
    const firstProject = project("Default Project", "I am the default project folder.")

    const content = document.getElementById("content");

    const h4 = document.createElement("h4");
    h4.innerText = `${firstProject.name}`;

    const small = document.createElement("small");
    small.innerText = `${firstProject.description}`;

    const div = document.createElement("div");
    div.appendChild(h4);
    div.appendChild(small);

    content.appendChild(div);
    return content;
}

export default defaultPage;