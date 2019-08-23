/* global document */

const projectContentDom = () => {
    const projectContent = document.getElementById("projectContent");

    projectContent.innerHTML = `<h5 class="font-weight-bold">
                                    Add a Project
                                    <button class="badge btn btn-success ml-1" id="showProjectFormBtn">
                                        +
                                    </button>
                                </h5>
                                <div class="form-inline my-2 my-lg-0" id="addProjectForm">
                                    <form onsubmit="return false">
                                        <input class="form-control mr-sm-2 mb-2" placeholder="Enter project name" id="projectName" required>
                                        <button id="addProjectBtn" class="btn btn-sm btn-primary my-2 my-sm-0">Add Project</button>
                                        <button id="closeProjectForm" class="btn btn-sm btn-danger my-2 my-sm-0">Cancel</button>                                                                            
                                    </form>
                                </div>
                                <h5 class="mt-2">Projects</h5>
                                <div id="projectList"></div>`;

    document.getElementById("addProjectForm").style.display = "none";
}

export default projectContentDom;