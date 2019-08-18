const todoContentDom = () => {
    const todoContent = document.getElementById("todoContent");

    todoContent.innerHTML = `<h4>Add a Todo</h4>
                                <div class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2 mb-2" placeholder="Enter todo title" id="todo">
                                    <input class="form-control mr-sm-2 mb-2" placeholder="Enter todo description" id="todo">
                                    <input class="form-control mr-sm-2 mb-2" id="todo" type="date">
                                    <select class="custom-select mr-sm-2 mb-2">
                                        <option>Choose Priority</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                    <select class="custom-select mr-sm-2 mb-2" id="selectProjects">
                                        <option>Choose Project</option>
                                    </select>
                                    
                                    <button id="addTodoBtn" class="btn btn-primary mb-2">Add Todo</button>
                                </div>
                                <h5>Todo List</h5>
                                <div id="todoList"></div>`;
}

export default todoContentDom;