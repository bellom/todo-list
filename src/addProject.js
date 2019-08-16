import project from "./project"


const addProject = () => {
    let projects = [project("Default")];

    const projectList = document.getElementById("projectList");
    const projectName = document.getElementById("projectName");


    document.addEventListener("click", function(e){
        if (e.target.id === "addProjectBtn") {
            projects.push(project(projectName.value))
            displayProjects(projects);
        }
    })

    const displayProjects = (projects) => {
        resetProjectList();
        projects.forEach((project, index) => {
            const li = document.createElement("li");
            li.setAttribute("id", index+1)
            li.innerText = project.name;
            projectList.appendChild(li);
            console.log(projects)
        });
    }

    const resetProjectList = () => {
        projectList.innerHTML = "";
    }
}


export default addProject;

