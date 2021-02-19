import ListsController from "./Controllers/ListsController.js";
import TasksController from "./Controllers/TasksController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  ListsController = new ListsController();
  TasksController = new TasksController();
}

window["app"] = new App();
loadState()
