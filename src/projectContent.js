import projectLogic from "./projectLogic";

const projectContentDom = () => {
    const projectContent = document.getElementById("projectContent");

    projectContent.innerHTML = `<h4>Add a Project</h4>
                                <div class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2 mb-2" placeholder="Enter project name" id="projectName">
                                    <button id="addProjectBtn" class="btn btn-primary my-2 my-sm-0" onclick="${projectLogic.btnClick()}">Add Project</button>
                                </div>
                                <h5 class="mt-2">Projects</h5>
                                <div id="projectList"></div>`;
}

export default projectContentDom;