import { importer } from "./initialize-page";
import { StorageManager } from "./storage-manager";
import { DOMManipulator } from "./dom-manipulator";

class ProjectManager {

    createProject(name) {
        return { 
            [name]: [],
        };
    }

    addToProject(project, todo) {
        //alert(`add ${JSON.stringify(todo)} to ${project}`);
        //parse, edit then stringify before saving to storage
        const projectList = JSON.parse(StorageManager.retrieve());
        projectList[project].push(todo);

        StorageManager.save(JSON.stringify(projectList));

        new DOMManipulator().loadTodos();
    }

}

export { ProjectManager };