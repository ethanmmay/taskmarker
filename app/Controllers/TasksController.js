import {
    ProxyState
} from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import {
    tasksService
} from "../Services/TasksService.js"
import ListsController from "./ListsController.js"

export default class TasksController {
    constructor() {
    }

    addTask(event, listId) {
        event.preventDefault()
        if (event.target.title.value == "") {
            window.alert("Cannot have an empty task.")
        } else {
        let rawTask = {
            title: event.target.title.value,
            textColor: event.target.textColor.value,
            listId: listId
        }
        tasksService.addTask(rawTask)
        }
    }

    deleteTask(taskId, listId) {
        window.confirm("Are you sure you want to delete this?") ? tasksService.deleteTask(taskId) : window.alert("Did not delete task.")
    }

    toggleComplete(taskId, listId) {
        tasksService.toggleComplete(taskId)
    }
}