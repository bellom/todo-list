import project from "./project";
import selectProjectsDisplay from "./selectProject";
import todoItemLogic from "./todoItemLogic";

const projectLogic = (() => {
    const projectsArr = [project("Default")];

    const btnClick = () => {
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
        return todoItemLogic.todoItemsArr.filter((todo) => todo.projectOwn === `${e.target.id.slice(11)}`);
    }

    const showProjectHeader = (e) => {
        const todoListHeader = document.getElementById("todoListHeader");
        todoListHeader.innerText = `Project: ${e.target.id.slice(11)}`;
    }

    const deleteProject = (e) => {
        const index = Number(e.target.id.slice(10));
        projectsArr.splice(index, 1);
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
        reset();
        getData().forEach((project, index) => {
            projectList.innerHTML +=   `<a class="d-flex justify-content-between my-1 text-decoration-none" href="#">
                                            <span class="my-auto" id="showProject${project.name}">${project.name}</span>
                                            <span class="btn btn-sm btn-danger text-white" id="delProject${index}">Delete</span>
                                        </a>`
        });
    }

    const reset = () => {
        projectList.innerHTML = "";
    }

    const getData = () => {
        return JSON.parse(localStorage.getItem('projectsArr'));
      };
      
    const setData = (data) => {
    localStorage.setItem('projectsArr', JSON.stringify(data));
    };

    return { btnClick, display, projectsArr}
})();

export default projectLogic;