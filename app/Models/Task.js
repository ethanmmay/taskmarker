import { generateId } from "../Utils/generateId.js";

export default class Task {
    constructor({ title, textColor = "#e6e6e6", id = generateId(), listId, isComplete = false })
    {
        this.title = title
        this.textColor = textColor
        this.id = id
        this.listId = listId
        this.isComplete = isComplete
    }

    get Template() {
        return /* html */`
        <div class="col-12 d-flex justify-content-between align-items-center mt-1" style="color: ${this.textColor};">
            <h3 class="${this.title.includes('important') ? 'bg-danger': ''}" style="color:${this.textColor}" >${this.title}</h3>
            <span>
                <button type="button" class="btn ${this.isComplete ? 'btn-success' : 'btn-info' }" onclick="app.TasksController.toggleComplete('${this.id}', '${this.listId}')">${this.isComplete ? '✓' : '!'}</button>
                <button type="button" class="btn btn-danger" onclick="app.TasksController.deleteTask('${this.id}', '${this.listId}')">X</button>
            </span>
        </div>
        `
    }
}