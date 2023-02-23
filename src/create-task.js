/**
 * @class Task
 * @description This class is responsible for creating a task object
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
  constructor (title, description, dueDate, priority, notes, checkList) {
    this.id = Math.floor(Math.random() * 100000)
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checkList = checkList
  }
}

/**
 * @class TaskStorage
 * @description This class is responsible for storing and retrieving tasks from the local storage
 * Available methods:
 * - saveTask
 * - getTaskById
 * - getAll
 * - updateTask
 * - deleteTask
 */
class TaskStorage {
  constructor () {
    this.tasks = []
  }

  saveTask (task) {
    this.tasks.push(task)
  }

  getTaskById (taskid) {
    return this.tasks.find(task => task.id === taskid)
  }

  getAll () {
    return this.tasks
  }

  updateTask (taskId, updatedTask) {
    const index = this.tasks.findIndex(task => task.id === taskId)
    if (index !== 1) {
      this.tasks[index] = updatedTask
    }
  }

  deleteTask (taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
  }
}

export { Task, TaskStorage }
