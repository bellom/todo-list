
import navbar from "./navbar";
import projectLogic from "./projectLogic"
import projectContentDom from "./projectContent";
import todoContentDom from "./todoContentDom";
import todoItemLogic from "./todoItemLogic";

const homePage = () => {
    navbar();
    projectContentDom();
    todoContentDom();
    projectLogic.selectProjectsDisplay();
    projectLogic.display();
    todoItemLogic.display();
}

export default homePage;
