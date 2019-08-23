/* global document */

import project from "./project";
import selectProjectsDisplay from "./selectProject";
import todoItemLogic from "./todoItemLogic";


const projectLogic = (() => {
    const getData = () => {
        return JSON.parse(localStorage.getItem('projectsArr') || "[]");
    };
      
    const setData = (data) => {
        localStorage.setItem('projectsArr', JSON.stringify(data));
    };

    const projectsArr = getData();

    const clickListeners = () => {
        document.addEventListener("click", function(e){
            if (e.target.id === "addProjectBtn") {
                add();
            } else if (e.target.id.substring(0, 10) === "delProject") {
                deleteProject(e);
                display();                 
                selectProjectsDisplay();
            } else if (e.target.id === "showProjectFormBtn") {
                const projectName = document.getElementById("projectName");
                resetFormField(projectName);
                document.getElementById("addProjectForm").style.display = "block";
            } else if (e.target.id === "closeProjectForm") {
                document.getElementById("addProjectForm").style.display = "none";
            } else if (e.target.id.substring(0, 11) === "showProject") {
                showProjectHeader(e);
                todoItemLogic.showProjectOwnedTodo(filterProjectTodos(e));
            }
        })
    }

    const filterProjectTodos = (e) => {
        return todoItemLogic.getData().filter((todo) => todo.projectOwn === `${e.target.id.slice(11)}`);
    }

    const showProjectHeader = (e) => {
        const todoListHeader = document.getElementById("todoListHeader");
        todoListHeader.innerText = `Project: ${e.target.id.slice(11)}`;
    }

    const deleteProject = (e) => {
        const index = Number(e.target.id.slice(10));
        projectsArr.splice(index, 1);
        setData(projectsArr);
    }

    const add = () => {
        const projectName = document.getElementById("projectName");

        if (projectName.value != "" && projectName.value != " ") {
            projectsArr.push(project(projectName.value));
            setData(projectsArr);
            display();
            selectProjectsDisplay();
            document.getElementById("addProjectForm").style.display = "none";
        }        
    }

    const resetFormField = (field) => {
        field.value = "";
    }

    const display = () => {
        const projectList = document.getElementById("projectList");
        showDefault(projectList);
        getData().forEach((project, index) => {
            projectList.innerHTML +=   `<a class="d-flex justify-content-between my-1 text-decoration-none" href="#">
                                            <span class="my-auto" id="showProject${project.name}">${project.name}</span>
                                            <span class="btn btn-sm btn-danger text-white" id="delProject${index}">Delete</span>
                                        </a>`;
        });
    }

    const showDefault = (projectList) => {
        projectList.innerHTML = `<a class="d-flex justify-content-between my-1 text-decoration-none" href="#">
                                    <span class="my-auto" id="showProjectDefault">Default</span>
                                </a>`
    }    

    return { clickListeners, display, projectsArr, getData }
})();

export default projectLogic;