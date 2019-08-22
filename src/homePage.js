import navbar from "./navbar";
import projectLogic from "./projectLogic"
import projectContentDom from "./projectContent";
import todoContentDom from "./todoContentDom";
import selectProjectsDisplay from "./selectProject";
import todoItemLogic from "./todoItemLogic";

const homePage = () => {
    navbar();
    projectContentDom();
    todoContentDom();
    selectProjectsDisplay();
    projectLogic.display();
    todoItemLogic.display();
}

export default homePage;
