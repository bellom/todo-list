
import projectLogic from "./projectLogic"
import todoItemLogic from "./todoItemLogic";
import hideForms from "./hideForms";

const homePage = () => {
    hideForms();
    projectLogic.selectProjectsDisplay();
    projectLogic.display();
    todoItemLogic.display();
}

export default homePage;
