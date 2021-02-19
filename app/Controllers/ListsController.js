import {
    ProxyState
} from "../AppState.js"
import {
    listsService
} from "../Services/ListsService.js"

function _draw() {
    let template = ""
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById("lists").innerHTML = template
}

export default class ListsController {

    static checkCompleted(id) {
        listsService.checkCompleted(id)
    }

    constructor() {
        ProxyState.on("lists", _draw)
        ProxyState.on("tasks", _draw)
        _draw()
    }

    addList(event) {
        event.preventDefault()
        let rawList = {
            title: event.target.title.value,
            color: event.target.color.value,
            textColor: event.target.textColor.value
        }
        listsService.addList(rawList)
    }

    deleteList(listId) {
        window.confirm("Are you sure you want to delete this?") ? listsService.deleteList(listId) : window.alert("Did not delete list.")
    }
}