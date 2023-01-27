import "./styles/style.css"
import Task from './components/TaskModel.js'
import CreateTask from './components/TaskCard.js'
import TaskForm from './components/TaskForm.js'
import TaskList from './components/TaskList'

import _ from 'lodash';

console.log("Estou funcionando aeee")

function component(){
  const element = document.createElement("div")
  element.innerHTML = 'Hello';
  element.appendChild(TaskForm())
  element.appendChild(TaskList())

  return element
}

document.body.appendChild(component())
