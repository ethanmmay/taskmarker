import {
    ProxyState
} from "../AppState.js";
import ListsController from "../Controllers/ListsController.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";

export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks
    }))
    console.log("Saved Lists & Tasks")
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.tasks = data.tasks.map(storedTasks=> new Task(storedTasks))
        ProxyState.lists = data.lists.map(storedLists => new List(storedLists))
    }
    console.log("Loaded Lists & Tasks")
}