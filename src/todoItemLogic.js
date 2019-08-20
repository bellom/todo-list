import todoItem from "./todoItem";
import deleteProject from "./projectLogic";



const todoItemLogic = (() => {
    const todoItemsArr = [];

    const btnClick = () => {
        document.addEventListener("click", function(e){
            if (e.target.id === "addTodoBtn") {
                add();
            } else if (e.target.id === "showTodoFormBtn") {
                showTodoForm();
            } else if (e.target.id === "closeTodoForm") {
                document.getElementById("addTodoForm").style.display = "none";                
            } else if (e.target.id.substring(0,11) === "todoDetails"){
                const todoDetails = document.getElementById(e.target.id);
                const index = e.target.id.slice(11);
                todoDetails.innerHTML = `<div>
                                            <h6 class="col my-auto font-weight-bold viewTitle" id="viewTitle">${getData()[index].title}</h6>
                                            <p class="col-5 my-auto"><strong>Date: </strong><i class="viewDate">${getData()[index].dueDate}</i></p>
                                            <p class="col-5 my-auto"><strong>Description:</strong> <i class="viewDesc">${getData()[index].description}</i></p>
                                            <p class="col-5 my-auto"><strong>Priority Status:</strong><i class="viewPriority">${getData()[index].priority}</i></p>
                                            <span class="btn btn-sm btn-danger text-white ml-3" id="removeTodo${index}">Delete</span>
                                            <span class="btn btn-sm btn-primary text-white" id="editTodo${index}">Edit</span>
                                            <div class="form-inline my-2 my-lg-0 ml-3" id="addEditForm">
                                                <form>
                                                    <input class="form-control mr-sm-2 mb-2 mt-3" value="${getData()[index].title}" id="editTitle" required>
                                                    <input class="form-control mr-sm-2 mb-2 mt-3" value="${getData()[index].description}" id="editDesc" required>
                                                    <input class="form-control mr-sm-2 mb-2" id="editdueDate" value="${getData()[index].dueDate}" type="date" required>
                                                    <select class="custom-select mr-sm-2 mb-2" id="editPriority" value="${getData()[index].priority}" required>
                                                        <option>Choose Priority</option>
                                                        <option value="Low">Low</option>
                                                        <option value="Medium">Medium</option>
                                                        <option value="High">High</option>
                                                    </select>
                                                    <div role="group">                                    
                                                        <button type="button" id="saveEditForm" class="btn btn-sm btn-primary mb-2">Save</button>
                                                        <button type="button" id="closeEditForm" class="btn btn-sm btn-danger mb-2">Cancel</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>`;
                hideEditForm();
            } else if (e.target.id.substring(0,10) === "removeTodo"){
                deleteTodo(e);
                display();
            } else if (e.target.id.substring(0,8) === "editTodo"){
                document.getElementById("addEditForm").style.display = "block";
            } else if (e.target.id === "saveEditForm"){
                editTodo();
                hideEditForm();
            } else if (e.target.id === "closeEditForm"){
                hideEditForm();
            }
        })
    }

    const showTodoForm = () => {
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        const dueDate = document.getElementById("dueDate");
        
        resetFormField(title);
        resetFormField(description);
        resetFormField(dueDate);
        document.getElementById("addTodoForm").style.display = "block";
    }

    const add = () => {
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        const dueDate = document.getElementById("dueDate");
        const priority = document.getElementById("priority");
        const selectProjects = document.getElementById("selectProjects");

        if (title.value != "" && description.value != "" && dueDate.value != "" && priority.value != "" && selectProjects.value != "") {
            todoItemsArr.push(todoItem(title.value, description.value, dueDate.value, priority.value, selectProjects.value));
            setData(todoItemsArr);
            display();
            showProjectHeader();
            document.getElementById("addTodoForm").style.display = "none";
        }        
    }

    const editTodo = () => {
        const viewTitle = document.querySelector(".viewTitle");
        const viewDesc = document.querySelector(".viewDesc");
        const viewDate = document.querySelector(".viewDate");
        const viewPriority = document.querySelector(".viewPriority");

        const title = document.getElementById("editTitle").value;
        const desc = document.getElementById("editDesc").value;
        const dueDate = document.getElementById("editdueDate").value;
        const priority = document.getElementById("editPriority").value;

        viewTitle.innerHTML = title;
        viewDesc.innerHTML = desc;
        viewDate.innerHTML = dueDate;
        viewPriority.innerHTML = priority;
    }

    const deleteTodo = (e) => {
        const index = Number(e.target.id.slice(10));
        todoItemsArr.splice(index, 1);
    }

    const resetFormField = (field) => {
        field.value = "";
    }

    const showProjectHeader = () => {
        const todoListHeader = document.getElementById("todoListHeader");
        todoListHeader.innerText = "All Todos";
    }

    const display = () => {
        const todoList = document.getElementById("todoList");
        reset();
        getData().forEach((project, index) => {
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

    const getData = () => {
        return JSON.parse(localStorage.getItem('todoItemsArr'));
    };
      
    const setData = (data) => {
        localStorage.setItem('todoItemsArr', JSON.stringify(data));
    };

    const reset = () => {
        todoList.innerHTML = "";
    }

    const hideEditForm = () => {
        document.getElementById("addEditForm").style.display = "none";
    }

    return { todoItemsArr, btnClick, showProjectOwnedTodo, display }
})();

export default todoItemLogic;