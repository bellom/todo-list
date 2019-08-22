const todoContentDom = () => {
    const todoContent = document.getElementById("todoContent");

    todoContent.innerHTML = `<h5 class="font-weight-bold">
                                Add a Todo
                                <button class="badge btn btn-success ml-1" id="showTodoFormBtn">
                                    +
                                </button>
                            </h5>
                                <div class="form-inline my-2 my-lg-0" id="addTodoForm">
                                    <form>
                                        <input class="form-control mr-sm-2 mb-2" placeholder="Enter todo title" id="title" required>
                                        <input class="form-control mr-sm-2 mb-2" placeholder="Enter todo description" id="description" required>
                                        <input class="form-control mr-sm-2 mb-2" id="dueDate" type="date" required>
                                        <select class="custom-select mr-sm-2 mb-2" id="priority" required>
                                            <option>Choose Priority</option>
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                        </select>
                                        <select class="custom-select mr-sm-2 mb-2" id="selectProjects" required></select>
                                        <div role="group">                                    
                                            <button id="addTodoBtn" class="btn btn-sm btn-primary mb-2">Add Todo</button>
                                            <button type="button" id="closeTodoForm" class="btn btn-sm btn-danger mb-2">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                                <h5 id="todoListHeader"></h5>
                                <div id="todoList"></div>`;
    document.getElementById("addTodoForm").style.display = "none";
}

export default todoContentDom;