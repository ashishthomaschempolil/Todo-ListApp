import { Task, TaskStorage } from './task'


const taskStorage = new TaskStorage()
const task = new Task('project1', 'title1', 'description1', 'dueDate1', 'priority1', 'notes1', 'checkList1')

taskStorage.saveTask(task)

console.log(taskStorage)

task.title = 'task2'

taskStorage.updateTask(task)

console.log(taskStorage)

const task2 = new Task('project2', 'title2', 'description2', 'dueDate2', 'priority2', 'notes2', 'checkList2')

taskStorage.saveTask(task2)

console.log(taskStorage)