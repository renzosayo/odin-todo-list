import { addTodo } from "./event-listeners";
import { StorageManager } from "./storage-manager";

class DOMManipulator {

    constructor() {
        this.projectsDiv = document.querySelector('.projects-list');
        this.todoDiv = document.querySelector('.todo-list');
    }

    buildElement(tag, classToAdd = "", textContent = "", child = null) {
        const element = document.createElement(tag);
        element.classList.add(classToAdd);
        element.textContent = textContent;
        if(child !== null) {
            element.appendChild(child);
        }

        return element;
    }

    buildTodoItem(todoObj) {
        const todoItem = this.buildElement('div', 'todo-item');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox')
        this.addToDom(todoItem, checkbox);
        this.addToDom(todoItem, this.buildElement('h3', null, todoObj.title));
        this.addToDom(todoItem, this.buildElement('p', null, todoObj.priority));
        this.addToDom(todoItem, this.buildElement('button', null, 'x'));

        return todoItem;
    }


    addToDom(parent, child) {
        parent.appendChild(child);
    }

    loadProjects() {
        const projectsList = this.getProjectsList();

        //clear before loading
        this.projectsDiv.innerHTML = "";
    
        for(let project of projectsList) {
            const projectButton = this.buildElement('button', 'project', project);

            this.addToDom(this.projectsDiv, projectButton);
            
        }
    }

    loadTodos() {
        const todoList = this.getTodoList();

        this.todoDiv.innerHTML = '';
        for(let todo of todoList) {
            this.addToDom(this.todoDiv, this.buildTodoItem(todo));
        }
    }

    getProjectsList() {
        return Object.keys(JSON.parse(StorageManager.retrieve()));
    }

    getTodoList() {
        const todoList = JSON.parse(StorageManager.retrieve())['Today'];

        return todoList;
    }



}

export { DOMManipulator };