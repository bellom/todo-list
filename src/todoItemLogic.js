/* global document, localStorage */

import todoItem from "./todoItem";
import todoList from "./todoList";

const todoItemLogic = (() => {
    const getData = () => {
        return JSON.parse(localStorage.getItem('todoItemsArr') || "[]");
    };

    const setData = (data) => {
        localStorage.setItem('todoItemsArr', JSON.stringify(data));
    };

    const todoItemsArr = getData();

    const clickListeners = () => {
        document.addEventListener("click", function (e) {
            if (e.target.id === "addTodoBtn") {
                add();
            } else if (e.target.id === "showTodoFormBtn") {
                showTodoForm();
            } else if (e.target.id === "closeTodoForm") {
                document.getElementById("addTodoForm").style.display = "none";
            } else if (e.target.id.substring(0, 11) === "todoDetails") {
                toggleFullTodo(e);
            } else if (e.target.id.substring(0, 10) === "removeTodo") {
                deleteTodo(e);
                display();
            } else if (e.target.id.substring(0, 8) === "editTodo") {
                const index = e.target.id.slice(8);
                hideFullTodo(index);
                showEditTodoForm(index);
            } else if (e.target.id.substring(0, 12) === "saveEditForm") {
                const index = e.target.id.slice(12);
                editTodo(index);
                hideEditForm(index);
            } else if (e.target.id.substring(0, 13) === "closeEditForm") {
                const index = e.target.id.slice(13);
                hideEditForm(index);
            } else if (e.target.id.substring(0, 9) === "closeTodo") {
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
        } else if (fullTodo.style.display === "block") {
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
        todoList(project, index);
        hideFullTodo(index);
        hideEditForm(index);
    }

    const reset = () => {
        const todoList = document.getElementById("todoList");
        todoList.innerHTML = "";
    }

    const hideEditForm = (index) => {
        document.getElementById(`addEditForm${index}`).style.display = "none";
    }

    return {
        todoItemsArr,
        clickListeners,
        showProjectOwnedTodo,
        display,
        getData
    }
})();

export default todoItemLogic;