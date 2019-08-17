import project from "./project";

const projectLogic = (() => {
    const projectsArr = [project("Default")];

    const btnClick = () => {
        document.addEventListener("click", function(e){
            if (e.target.id === "addProjectBtn") {
                add();
            } else if (e.target.id.substring(0, 10) === "delProject") {
                const index = Number(e.target.id.slice(10));
                projectsArr.splice(index, 1);
                display();                
            }
        })
    }

    const add = () => {
        const projectName = document.getElementById("projectName");

        projectsArr.push(project(projectName.value));
        display();
    }

    const display = () => {
        const projectList = document.getElementById("projectList");
        reset();
        projectsArr.forEach((project, index) => {
            projectList.innerHTML +=   `<a class="dropdown-item d-flex justify-content-between" href="#">
                                            <span id=${project.name}>${project.name}</span>
                                            <span class="btn btn-sm btn-danger text-white" id="delProject${index}">Delete</span>
                                        </a>`
        });
    }

    const reset = () => {
        projectList.innerHTML = "";
    }

    return { btnClick, display }
})();

export default projectLogic;