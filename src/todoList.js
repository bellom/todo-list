/* global document, localStorage */

const getData = () => {
    return JSON.parse(localStorage.getItem('todoItemsArr') || "[]");
};

const todoList = (project, index) => {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML += `<div id="todoDetails${index}" class="mb-4 p-4 btn-light border">
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
                                            <button type="button" id="saveEditForm${index}" class="btn btn-sm btn-primary mb-2">Save</button>
                                            <button type="button" id="closeEditForm${index}" class="btn btn-sm btn-danger mb-2">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>`;
}

export default todoList;