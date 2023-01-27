import {getTasks} from './StorageTasks.js'
import CreateTask from './CreateTask.js'

export default function TaskList(){
  const tasks = getTasks()
  const div = document.createElement('div')
  div.classList.add('task-list')
  tasks.map(task => {
    div.appendChild(CreateTask(task.name, task.date, task.status, task.priority))
  })
  return div
}
