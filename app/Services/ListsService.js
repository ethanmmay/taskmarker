import {
    ProxyState
} from "../AppState.js";
import List from "../Models/List.js";
import {
    saveState
} from "../Utils/LocalStorage.js"

class ListService {
    checkCompleted(id) {
        let tasks = ProxyState.tasks.filter(t => t.listId == id)
        let trueCount = 0
        let falseCount = 0
        tasks.forEach(t => t.isComplete ? trueCount++ : falseCount++)
        console.log("tasksCompleted" + id)
        document.getElementById("tasksCompleted" + id).innerText = trueCount + "/" + (trueCount+falseCount) + " completed"
    }

    constructor() {
        ProxyState.on("lists", saveState)
    }

    addList(rawList) {
        ProxyState.lists = [new List(rawList), ...ProxyState.lists]
    }

    deleteList(listId) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != listId)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != listId)
    }
}

export const listsService = new ListService();