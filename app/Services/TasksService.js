import {
    ProxyState
} from "../AppState.js";
import Task from "../Models/Task.js";
import {
    loadState,
    saveState
} from "../Utils/LocalStorage.js";


class TasksService {
    constructor() {
        ProxyState.on('tasks', saveState)
    }

    addTask(rawTask) {
        ProxyState.tasks = [new Task(rawTask), ...ProxyState.tasks]
    }

    deleteTask(taskId) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    }

    toggleComplete(taskId) {
        let tasks = ProxyState.tasks.filter(t => t.id == taskId)
        tasks[0].isComplete = !tasks[0].isComplete
        ProxyState.tasks.filter(t => t.id == taskId)[0] = tasks[0]
        saveState()
        loadState()
    }
}

export const tasksService = new TasksService()