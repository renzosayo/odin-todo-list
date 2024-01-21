import { importer } from "./initialize-page";
import { createTodo } from "./todo-creator";
import { StorageManager } from "./storage-manager";
import { DOMManipulator } from "./dom-manipulator";

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

function clearForm() {
    //clear fields
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('notes').value = '';   
}

function showTodoForm(mode, index) {
    const todoForm = document.querySelector("dialog");

    //change what submit does depending on mode
    const formBtn = document.querySelector('.submit-todo');
    const newBtn = formBtn.cloneNode(true);
    //clone to remove all listeners
    formBtn.parentElement.replaceChild(newBtn, formBtn);

    if(mode === 'create') {
        clearForm();
        newBtn.addEventListener('click', addTodo);
    } else if(mode === 'edit') {
        newBtn.addEventListener('click', (e) => StorageManager.editTodo(index));
    }
    todoForm.showModal();
}

function viewProjects() {
    //project-name to 'All Projects'
    new DOMManipulator().setProjectName('All Projects');
    //todo-list to get child div for all projects
    const todoDiv = document.querySelector('.todo-list');
    const addTodo = document.querySelector('.add-todo');
    addTodo.classList.add('hide');
    todoDiv.innerHTML = '';

}


function addTodo() {
    const newTodo = createTodo(
        document.getElementById('title').value, 
        document.getElementById('description').value, 
        document.getElementById('due-date').value, 
        document.getElementById('priority').value, 
        document.getElementById('notes').value
    );
    let projectName = document.querySelector('.project-name').textContent;

    //to add todo to project
    importer.projectHandler.addToProject(projectName, newTodo);
    importer.domHandler.loadTodos(projectName);

}

export { addProject, showTodoForm, addTodo, viewProjects };