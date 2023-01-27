import "./styles/style.css"
import Task from './components/Task.js'
import CreateTask from './components/CreateTask.js'
import AddTask from './components/TaskForm.js'

import _ from 'lodash';

console.log("Estou funcionando aeee")

function component(){
  const element = document.createElement("div")
  element.innerHTML = 'Hello';
  element.appendChild(AddTask())
  return element
}

document.body.appendChild(component())
