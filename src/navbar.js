import projectLogic from "./projectLogic";

const navbar = () => {
    const nav = document.getElementById("nav");
    nav.innerHTML =    `<a class="navbar-brand" href="#">TODO LIST</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Projects
                                    </a>
                                    <div id="projectList" class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Default</a>
                                        <div class="dropdown-divider"></div>
                                    </div>
                                </li>
                            </ul>
                            <div class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" placeholder="Enter project name" id="projectName">
                                <button id="addProjectBtn" class="btn btn-outline-primary my-2 my-sm-0" onclick="${projectLogic.btnClick()}">Add Project</button>
                            </div>
                        </div>`;    
}

export default navbar;