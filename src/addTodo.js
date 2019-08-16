import todo from "./todo"

const todoList = document.getElementById("todoList");

const addTodo = () => {
    let todos = [];

    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("dueDate");
    const priority = document.getElementById("priority");
    const project = document.getElementById("project");


    document.addEventListener("click", function(e){
        if (e.target.id === "addTodoBtn") {
            todos.push(todo(title.value, description.value, dueDate.value, priority.value, project.value))
            displayTodos(todos);
        }
    })
}

const displayTodos = (todos) => {
    resetTodoList();
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.setAttribute("id", index)
        li.innerHTML += todo.title;
        li.innerHTML += todo.description;
        li.innerHTML += todo.dueDate;
        li.innerHTML += todo.priority;
        li.innerHTML += todo.project;
        todoList.appendChild(li);
        console.log(todos);
    });
}

const resetTodoList = () => {
    todoList.innerHTML = "";
}


export default addTodo;

