import projectLogic from "./projectLogic";

const selectProjectsDisplay = () => {
    const selectProjects = document.getElementById("selectProjects");
    const option = document.createElement("option");

    projectLogic.projectsArr.forEach(element => {
        option.setAttribute("value", `${element.name}`);
        option.innerText = `${element.name}`;
        selectProjects.appendChild(option);
    });
}

export default selectProjectsDisplay;