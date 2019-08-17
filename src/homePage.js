import navbar from "./navbar";
import projectLogic from "./projectLogic"

const homePage = () => {
    navbar();
    projectLogic.display();
}

export default homePage;
