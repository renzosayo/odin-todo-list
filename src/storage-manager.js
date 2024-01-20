class StorageManager {
    //only uses 1 localstorage item for entire app
    static STORAGE_ITEM_NAME = "todo-main-item";

    static save(newItem) {
        localStorage.setItem(this.STORAGE_ITEM_NAME, newItem);
    }

    static retrieve() {
        return localStorage.getItem(this.STORAGE_ITEM_NAME);
    }

    static removeTodo(todo, project) {
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

    static removeProject(project) {
        //logic for removing project
        const storedContent = JSON.parse(this.retrieve());
        delete storedContent[project];
        this.save(JSON.stringify(storedContent));
    }
}

export { StorageManager };