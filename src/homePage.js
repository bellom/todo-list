import navbar from "./navbar";
import projectLogic from "./projectLogic"
import projectContentDom from "./projectContent";
import todoContentDom from "./todoContentDom";
import selectProjectsDisplay from "./selectProject";

const homePage = () => {
    navbar();
    projectContentDom();
    todoContentDom();
    selectProjectsDisplay();
    projectLogic.display();
}

export default homePage;
