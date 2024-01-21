import { showTodoForm } from "./event-listeners";
import { StorageManager } from "./storage-manager";

class DOMManipulator {

    constructor() {
        this.projectsDiv = document.querySelector('.projects-list');
        this.todoDiv = document.querySelector('.todo-list');
    }

    buildElement(tag, classToAdd = "", textContent = "", child = null) {
        const element = document.createElement(tag);
        element.classList = classToAdd;
        element.textContent = textContent;
        if(child !== null) {
            element.appendChild(child);
        }

        return element;
    }

    buildTodoItem(todoObj, index) {
        const todoItem = this.buildElement('div', 'todo-item');
        todoItem.setAttribute('index', index);
        const projectName = document.querySelector('.project-name').textContent;

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox')
        this.addToDom(todoItem, checkbox);
        this.addToDom(todoItem, this.buildElement('h3', null, todoObj.title));
        this.addToDom(todoItem, this.buildElement('p', null, todoObj.dueDate));
        this.addToDom(todoItem, this.buildElement('p', todoObj.priority, "Priority: " + todoObj.priority));

        const removeButton = this.buildElement('button', 'btn-remove-todo', 'x');
        removeButton.addEventListener('click', () => {
            //on click, remove todo from storage and call loadTodos to refresh
            StorageManager.removeTodoFromStorage(todoObj, projectName);
            this.loadTodos(projectName);
        });

        this.addToDom(todoItem, removeButton);

        todoItem.addEventListener('dblclick', (e) => {
            let index;
            if(e.target.attributes.index === undefined) {
                index = e.target.parentElement.attributes.index.value;
            } else {
                index = e.target.attributes.index.value;
            }

            document.getElementById('title').value = todoObj.title, 
            document.getElementById('description').value = todoObj.description, 
            document.getElementById('due-date').value = todoObj.dueDate, 
            document.getElementById('priority').value = todoObj.priority, 
            document.getElementById('notes').value = todoObj.notes;
            showTodoForm('edit', index);

        });

        return todoItem;
    }


    addToDom(parent, child) {
        parent.appendChild(child);
    }

    loadProjects() {
        const projectsList = this.getProjectsList();
        const addTodo = document.querySelector('#add-todo');
        addTodo.classList.remove('hide');

        //clear before loading
        this.projectsDiv.innerHTML = "";
    
        for(let project of projectsList) {
            const projectButton = this.buildElement('button', 'project', project);
            projectButton.addEventListener('click', () => {
                this.setProjectName(project);
                this.loadTodos(project);
            });

            this.addToDom(this.projectsDiv, projectButton);
            
        }
    }

    loadTodos(project) {
        const todoList = this.getTodoList(project);
        this.setProjectName(project);

        this.todoDiv.innerHTML = '';
        if(!todoList) return;
        //index added to track todo items for update functionality
        let index = 0;
        for(let todo of todoList) {
            this.addToDom(this.todoDiv, this.buildTodoItem(todo, index));
            index++;
        }
    }

    getProjectsList() {
        return Object.keys(JSON.parse(StorageManager.retrieve()));
    }

    getTodoList(project) {
        const todoList = JSON.parse(StorageManager.retrieve())[project];

        return todoList;
    }

    setProjectName(name) {
        const h2 = document.querySelector('.project-name');
        h2.textContent = name;
    }


}

export { DOMManipulator };