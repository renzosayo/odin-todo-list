import { createTodo } from "./todo-creator";
import { DOMManipulator } from "./dom-manipulator";

class StorageManager {
    //only uses 1 localstorage item for entire app
    static STORAGE_ITEM_NAME = "todo-main-item";

    static save(newItem) {
        localStorage.setItem(this.STORAGE_ITEM_NAME, newItem);
    }

    static retrieve() {
        return localStorage.getItem(this.STORAGE_ITEM_NAME);
    }

    static editTodo(index) {
        const storedContent = JSON.parse(StorageManager.retrieve());
        let projectName = document.querySelector('.project-name').textContent;
        
        const newTodo = createTodo(
            document.getElementById('title').value, 
            document.getElementById('description').value, 
            document.getElementById('due-date').value, 
            document.getElementById('priority').value, 
            document.getElementById('notes').value
        );

        storedContent[projectName][index] = newTodo;
        this.save(JSON.stringify(storedContent));

       new DOMManipulator().loadTodos(projectName);
    }

    static removeTodoFromStorage(todo, project) {
        //logic for removing todo
        const storedContent = JSON.parse(this.retrieve());
        const todoList = storedContent[project];

        for(let obj of storedContent[project]) {
            if(todo['title'] === obj['title']) {
                todoList.splice(todoList.indexOf(obj),1); 
                this.save(JSON.stringify(storedContent)); 
            }
        }
    }

    static removeProjectFromStorage(project) {
        //logic for removing project
        const storedContent = JSON.parse(this.retrieve());
        delete storedContent[project];
        this.save(JSON.stringify(storedContent));
    }
}

export { StorageManager };