import {TaskStore} from "./TaskStore";

export class RootStore {
  taskStore;

  constructor() {
    this.taskStore = new TaskStore(this);
  }
}
