import { ProjectManager } from "./project-manager";
import { DOMManipulator } from "./dom-manipulator";
import { StorageManager } from "./storage-manager";
import { showTodoForm, addProject, addTodo, viewProjects } from "./event-listeners";

const importer = new class {
    constructor() {
        this.projectHandler = new ProjectManager();
        this.domHandler = new DOMManipulator();
    }
};

function initializePage() {
    createInitialProject();
    setListeners();
    setPageContent();
}

function createInitialProject() {
    //projects list starts empty, creates 'Today' (default) on first run
    const storageItem = StorageManager.retrieve();

    if(!storageItem || Object.keys(storageItem) === 0) 
        StorageManager.save(JSON.stringify(importer.projectHandler.createProject("Today")));

}

function setListeners() {
    const btnAddProject = document.querySelector('.add-project');
    const btnAddTodo = document.querySelector('.add-todo');
    const btnSubmitTodo = document.querySelector('.submit-todo');
    const btnViewProjects = document.querySelector('.view-projects');

    btnAddProject.addEventListener('click', addProject);
    btnAddTodo.addEventListener('click', () => {
        showTodoForm('create')
    });
    btnSubmitTodo.addEventListener('click', addTodo);
    btnViewProjects.addEventListener('click', viewProjects);

}

//checks localstorage for content then displays on page
function setPageContent() {
    const DEFAULT_PROJECT = 'Today';

    importer.domHandler.loadProjects();
    importer.domHandler.loadTodos(DEFAULT_PROJECT);
    importer.domHandler.setProjectName(DEFAULT_PROJECT);
}



export { initializePage, importer };