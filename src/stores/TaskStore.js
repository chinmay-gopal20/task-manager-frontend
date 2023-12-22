import 'react-native-get-random-values';
import { makeAutoObservable, observable } from 'mobx';
import { ReminderTypeConstants } from '../constants/ReminderTypeConstants';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { sortBy } from 'lodash';

export class TaskStore {
  constructor() {
    this.tasks = [];
    this.counts = {
      [ReminderTypeConstants.ALL]: 0,
      [ReminderTypeConstants.TODAY]: 0,
      [ReminderTypeConstants.COMPLETED]: 0,
      [ReminderTypeConstants.IN_COMPLETE]: 0,
    };

    makeAutoObservable(this, {
      tasks: observable.struct,
      counts: observable.struct
    })
  }

  getCompletedTasks = () =>  this.tasks.filter((task) => task.completedDate);

  getTodayTasks = () => this.tasks.filter((task) => moment(task.dueDate).isSame(moment().format('DD-MM-YYYY'), 'day'))

  getIncompleteTasks = () => this.tasks.filter((task) => !task.completedDate);

  getAllTasks = (type) => {
    if (type === ReminderTypeConstants.ALL)
      return sortBy(this.tasks, 'createdAt');
    else if (type === ReminderTypeConstants.COMPLETED)
      return sortBy(this.getCompletedTasks(), 'completedDate')
    else if (type === ReminderTypeConstants.TODAY)
      return sortBy(this.getTodayTasks(), 'createdAt')
    else if (type === ReminderTypeConstants.IN_COMPLETE)
      return sortBy(this.getIncompleteTasks().map((task) => {
        if (moment(task.dueDate).isBefore(moment().format('DD-MM-YYYY'), 'day'))
          return { ...task, isOverDue: true }
        else
          return task
      }), 'dueDate');
    else {
      console.log('getAllTasks :: Invalid type')
      return []
    }
  }

  updateCounts = () => {
    this.counts = {
      [ReminderTypeConstants.ALL]: this.tasks.length,
      [ReminderTypeConstants.TODAY]: this.getTodayTasks().length,
      [ReminderTypeConstants.COMPLETED]: this.getCompletedTasks().length,
      [ReminderTypeConstants.IN_COMPLETE]: this.getIncompleteTasks().length,
    }
  }

  addTask = (taskDetails) => {
    const newTask = {
      id: uuidv4(),
      title: taskDetails?.title,
      dueDate: taskDetails?.dueDate,
      description: taskDetails?.description,
      completedDate: null,
      isOverDue: false,
      createdAt: new Date()
    }

    this.tasks = [...this.tasks, newTask];
    this.updateCounts();
  }

  markAsComplete = (taskId) => {
    let existingsTasks = [...this.tasks];
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      const updatedTask = {
        ...existingsTasks[taskIndex],
        completedDate: moment().format('DD-MM-YYYY')
      }

      existingsTasks[taskIndex] = updatedTask
      this.tasks = [...existingsTasks]
      this.updateCounts();
    } else {
      console.log('markAsComplete :: Invalid task')
    }
  }

  deleteTask = (taskId) => {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.updateCounts();
    } else {
      console.log('Delete task :: Invalid task')
    }
  }

  getTask = (taskId) => {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        const task = this.tasks[taskIndex];
        if (moment(task.dueDate).isBefore(moment().format('DD-MM-YYYY'), 'day'))
          return { ...task, isOverDue: true }
        else
          return task
      } else {
        console.log('getTask :: Invalid task')
        return null;
      }
    }
}