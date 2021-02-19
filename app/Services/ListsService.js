import {
    ProxyState
} from "../AppState.js";
import List from "../Models/List.js";
import {
    saveState
} from "../Utils/LocalStorage.js"

class ListService {
    checkCompleted() {
        ProxyState.lists.forEach(l => {
            let tasks = ProxyState.tasks.filter(t => t.listId == l.id)
            let trueCount = 0
            let falseCount = 0
            tasks.forEach(t => t.isComplete ? trueCount++ : falseCount++)
            document.getElementById("tasksCompleted" + l.id).innerText = trueCount + "/" + (trueCount+falseCount) + " completed"
        })
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