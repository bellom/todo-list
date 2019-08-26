/* global document */

const hideForms = () => {
    document.getElementById("addTodoForm").style.display = "none";
    document.getElementById("addProjectForm").style.display = "none";
}

export default hideForms;