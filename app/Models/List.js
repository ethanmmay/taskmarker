import {
    ProxyState
} from "../AppState.js";
import {
    generateId
} from "../Utils/generateId.js";

export default class List {
    constructor({
        title,
        color = "#404040",
        textColor = "#e6e6e6",
        id = generateId()
    }) {
        this.title = title
        this.color = color
        this.textColor = textColor
        this.id = id
    }

    get Template() {
        return /*html*/ `
<div class="col-sm-4 border-rounded shadow-lg m-3 card-color-${this.id}" style="background-color:${this.color}; color: ${this.textColor};">
    <div class="row p-3">
        <div class="col-sm-12">
            <div class="row d-flex justify-content-between">
                <h2 style="text-decoration: underline;">${this.title}</h2>
                <p id="tasksCompleted${this.id}"></p>
                <button class="btn btn-danger" onclick="app.ListsController.deleteList('${this.id}')">X</button>
            </div>
        </div>
        <div class="col-12">
            <form class="form-inline" onsubmit="app.TasksController.addTask(event, '${this.id}')">
                <div class="row">
                    <div class="col-12 form-group">
                        <div class="row w-100 my-3">
                        <h4 class="ml-3">Add Tasks:</h4>
                            <div class="col-12 d-flex align-items-center">
                            <input type="text" name="title" id="title" class="form-control" placeholder="Add Task" aria-describedby="helpId" minlength="3" maxlength="50">
                            <input type="color" id="textColor" name="textColor" value="#e6e6e6" title="Text Color" class="">
                            <button type="submit" class="btn btn-success">+</button>
                            </div>
                        </div>
                        <div class="row w-100">
                            ${this.Tasks}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
        `
    }

    get Tasks() {
        let template = ""
        let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
        tasks.forEach(t => template += t.Template)
        return template
    }
}