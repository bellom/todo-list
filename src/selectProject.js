/* global document */
// file selectProjectsDisplay.ts

import projectLogic from "./projectLogic";

const selectProjectsDisplay = () => {
    const selectProjects = document.getElementById("selectProjects");
    selectProjects.innerHTML = `<option>Choose Project</option>
                                <option value="Default">Default</option>`;
    
    projectLogic.getData().forEach(element => {
        const option = document.createElement("option");
        option.setAttribute("value", `${element.name}`);
        option.innerText = `${element.name}`;
        selectProjects.appendChild(option);
    });
}

export default selectProjectsDisplay;