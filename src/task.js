/**
 * @class Task
 * @description This class is responsible for creating a task object
 * @param {string} project - The project of the task
 * @param {string} title - The title of the task
 * @param {string} description - The description of the task
 * @param {string} dueDate - The due date of the task
 * @param {string} priority - The priority of the task
 * @param {string} notes - The notes of the task
 * @param {string} checkList - The checklist of the task
 * @returns {object} - The task object
 * Available properties:
 */
class Task {
  constructor (project, title, description, dueDate, priority, notes, checkList) {
    this.id = Math.floor(Math.random() * 100000)
    this.project = project
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checkList = checkList
  }
}

/**
 * @class TaskManager
 * @description This class is responsible for managing the tasks
 * @returns {object} - The task manager object
 * Available properties:
 * @property {array} tasks - The array of tasks
 * Available methods:
 * @method getTaskById - Get a task by id
 * @method getAll - Get all tasks
 * @method getTaskIndex - Get the index of a task
 */
class TaskManager {
  constructor () {
    this.tasks = []
  }

  getTaskById (taskId) {
    return this.tasks.find(task => task.id === taskId)
  }

  getAll () {
    return this.tasks
  }

  getTaskIndex (task) {
    return this.tasks.findIndex(t => t.id === task.id)
  }
}

/**
 * @class TaskStorage
 * @description This class is responsible for storing the tasks
 * @returns {object} - The task storage object
 * Available properties:
 * @property {object} taskManager - The task manager object
 * Available methods:
 * @method saveTask - Save a task
 * @method updateTask - Update a task
 * @method deleteTask - Delete a task
  */
class TaskStorage {
  constructor () {
    this.projects = {}
  }

  saveTask (task) {
    if (task instanceof Task) {
      if (!this.projects[task.project]) {
        this.projects[task.project] = new TaskManager()
      }
      const taskManager = this.projects[task.project]
      // if task not in storage using taskid add it
      if (!taskManager.getTaskById(task.id)) {
        taskManager.tasks.push(task)
      }
    }
  }

  updateTask (updatedTask) {
    const taskManager = this.projects[updatedTask.project]
    const index = taskManager.getTaskIndex(updatedTask)
    if (index !== -1) {
      taskManager.tasks[index] = updatedTask
    }
  }

  deleteTask (task) {
    const taskManager = this.projects[task.project]
    const index = taskManager.getTaskIndex(task)
    if (index !== -1) {
      taskManager.tasks.splice(index, 1)
    }
  }
}

export { Task, TaskStorage }
