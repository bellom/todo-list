/* global document */

import todoItem from "./todoItem";

const todoItemLogic = (() => {
    const getData = () => {
        return JSON.parse(localStorage.getItem('todoItemsArr') || "[]");
    };
      
    const setData = (data) => {
        localStorage.setItem('todoItemsArr', JSON.stringify(data));
    };

    const todoItemsArr = getData();

    const clickListeners = () => {
        document.addEventListener("click", function(e){
            if (e.target.id === "addTodoBtn") {
                add();
            } else if (e.target.id === "showTodoFormBtn") {
                showTodoForm();
            } else if (e.target.id === "closeTodoForm") {
                document.getElementById("addTodoForm").style.display = "none";            
            } else if (e.target.id.substring(0,11) === "todoDetails"){
                toggleFullTodo(e);
            } else if (e.target.id.substring(0,10) === "removeTodo"){
                deleteTodo(e);
                display();
            } else if (e.target.id.substring(0,8) === "editTodo"){
                const index = e.target.id.slice(8);
                hideFullTodo(index);
                showEditTodoForm(index);
            } else if (e.target.id.substring(0,12) === "saveEditForm"){
                const index = e.target.id.slice(12);
                editTodo(index);
                hideEditForm(index);
            } else if (e.target.id === "closeEditForm"){
                hideEditForm();
            } else if (e.target.id.substring(0,9) === "closeTodo") {
                const index = e.target.id.slice(9);                
                document.getElementById(`fullTodo${index}`).style.display = "none";
            }
        })
    }

    const showEditTodoForm = (index) => {
        document.getElementById(`addEditForm${index}`).style.display = "block";
    }

    const toggleFullTodo = (e) => {
        const index = e.target.id.slice(11);
        const fullTodo = document.getElementById(`fullTodo${index}`)

        if (fullTodo.style.display === "none") {
            fullTodo.style.display = "block";
        } else if (fullTodo.style.display = "block") {
            fullTodo.style.display = "none";
        }
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

    const editTodo = (index) => {
        const title = document.getElementById("editTitle").value;
        const desc = document.getElementById("editDesc").value;
        const dueDate = document.getElementById("editdueDate").value;
        const priority = document.getElementById("editPriority").value;

        todoItemsArr[index].title = title;
        todoItemsArr[index].description = desc;
        todoItemsArr[index].dueDate = dueDate;
        todoItemsArr[index].priority = priority;
        setData(todoItemsArr);
        display();
    }

    const deleteTodo = (e) => {
        const index = Number(e.target.id.slice(10));
        todoItemsArr.splice(index, 1);
        setData(todoItemsArr);
    }

    const resetFormField = (field) => {
        field.value = "";
    }

    const showProjectHeader = () => {
        const todoListHeader = document.getElementById("todoListHeader");
        todoListHeader.innerText = "All Todos";
    }

    const display = () => {
        reset();
        getData().forEach((project, index) => {
            showTodoList(project, index);
        });
    }

    const hideFullTodo = (index) => {
        document.getElementById(`fullTodo${index}`).style.display = "none";
    }

    const showProjectOwnedTodo = (array) => {
        reset();
        array.forEach((project, index) => {
            showTodoList(project, index);
        });
    }

    const showTodoList = (project, index) => {
        todoList.innerHTML +=   `<div id="todoDetails${index}" class="mb-4 p-4 btn-light border">
                                    <span class="my-auto font-weight-bold">${project.title}</span>
                                    <span class="float-right my-auto">Date: ${project.dueDate}</span>
                                    <span id="fullTodo${index}" class="text-muted">
                                        <p class="mb-0"><strong>Description: </strong><i>${getData()[index].description}</i></p>
                                        <p><strong>Priority Status: </strong><i>${getData()[index].priority}</i></p>
                                        <span class="btn btn-sm btn-primary text-white" id="editTodo${index}">Edit</span>
                                        <span class="btn btn-sm btn-danger text-white" id="removeTodo${index}">Delete</span>
                                        <span class="btn btn-sm btn-danger text-white" id="closeTodo${index}">Close</span>
                                    </span>
                                    <div class="form-inline my-2 my-lg-0 mx-2" id="addEditForm${index}">
                                        <form onsubmit="return false">
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
                                            <button id="saveEditForm${index}" class="btn btn-sm btn-primary mb-2">Save</button>
                                            <button id="closeEditForm" class="btn btn-sm btn-danger mb-2">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>`;
        hideFullTodo(index);
        hideEditForm(index);
    }

    const reset = () => {
        todoList.innerHTML = "";
    }

    const hideEditForm = (index) => {
        document.getElementById(`addEditForm${index}`).style.display = "none";
    }

    return { todoItemsArr, clickListeners, showProjectOwnedTodo, display, getData }
})();

export default todoItemLogic;