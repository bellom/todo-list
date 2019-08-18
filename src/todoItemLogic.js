import todoItem from "./todoItem";


const todoItemLogic = (() => {
    const todoItemsArr = [];

    const btnClick = () => {
        document.addEventListener("click", function(e){
            if (e.target.id === "addTodoBtn") {
                add();
            } else if (e.target.id.substring(0, 7) === "delTodo") {
                deleteProject(e);
                display();                
            } else if (e.target.id === "showTodoFormBtn") {
                const title = document.getElementById("title");
                const description = document.getElementById("description");
                const dueDate = document.getElementById("dueDate");
                
                resetFormField(title);
                resetFormField(description);
                resetFormField(dueDate);
                document.getElementById("addTodoForm").style.display = "block"; 
            } else if (e.target.id === "closeTodoForm") {
                document.getElementById("addTodoForm").style.display = "none";                
            }
        })
    }

    const add = () => {
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        const dueDate = document.getElementById("dueDate");
        const priority = document.getElementById("priority");
        const selectProjects = document.getElementById("selectProjects");

        if (title.value != "" && description.value != "" && dueDate.value != "" && priority.value != "" && selectProjects.value != "") {
            todoItemsArr.push(todoItem(title.value, description.value, dueDate.value, priority.value, selectProjects.value));
            display();
            showProjectHeader();
            document.getElementById("addTodoForm").style.display = "none";
        }        
    }

    const resetFormField = (field) => {
        field.value = "";
    }

    const showProjectHeader = (e) => {
        const todoListHeader = document.getElementById("todoListHeader");
        todoListHeader.innerText = "All Todos";
    }

    const display = () => {
        const todoList = document.getElementById("todoList");
        reset();
        todoItemsArr.forEach((project, index) => {
            todoList.innerHTML +=   `<a type="button" id="todoDetails${index}" class="row py-4 btn-light mb-2 d-flex justify-content-between">
                                        <h6 class="col my-auto font-weight-bold" id="show${project.title}">${project.title}</h6>
                                        <p class="col-5 my-auto">Date: ${project.dueDate}</p>
                                    </a>`
        });
    }

    const showProjectOwnedTodo = (array) => {
        const todoList = document.getElementById("todoList");
        reset();
        array.forEach((project, index) => {
            todoList.innerHTML +=   `<a type="button" id="todoDetails${index}" class="row py-4 btn-light mb-2 d-flex justify-content-between">
                                        <h6 class="col my-auto font-weight-bold" id="show${project.title}">${project.title}</h6>
                                        <p class="col-5 my-auto">Date: ${project.dueDate}</p>
                                    </a>`
        });
    }

    const reset = () => {
        todoList.innerHTML = "";
    }

    return { todoItemsArr, btnClick, showProjectOwnedTodo }
})();

export default todoItemLogic;