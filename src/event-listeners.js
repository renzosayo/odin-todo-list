import { importer } from "./initialize-page";
import { createTodo } from "./todo-creator";
import { StorageManager } from "./storage-manager";

function addProject() {
    //add to localStorage AND add to dom
    //OR add to local storage and REFRESH projects-list
    let newProject = prompt('Please enter name for the new Project:');

    if(newProject !== null) {
        const projElement = importer.projectHandler.createProject(newProject);
        const storageData = JSON.parse(StorageManager.retrieve());
        StorageManager.save(JSON.stringify({ ...storageData, ...projElement }));
    
        importer.domHandler.loadProjects();
    }
    
}

function showTodoForm() {
    const todoForm = document.querySelector("dialog");
    todoForm.showModal();
}

function addTodo() {
    const newTodo = createTodo(
        document.getElementById('title').value, 
        document.getElementById('description').value, 
        document.getElementById('due-date').value, 
        document.getElementById('priority').value, 
        document.getElementById('notes').value
    );

    //to add todo to project
    importer.projectHandler.addToProject('Today', newTodo);
}

export { addProject, showTodoForm, addTodo };