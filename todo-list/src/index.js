import "./styles/style.css"
import Task from './components/TaskModel.js'
import CreateTask from './components/TaskCard.js'
import TaskForm from './components/TaskForm.js'
import TaskList from './components/TaskList'
import Menu from "./components/Menu"

import _ from 'lodash';

function component(){
  const content = document.createElement('div')
  const listElement = document.createElement("div")
  const formElement = document.createElement("div")
  listElement.classList.add("content-task-list")
  listElement.classList.add('content-list')
  content.appendChild(formElement)
  content.appendChild(listElement)
  formElement.appendChild(TaskForm())
  // listElement.appendChild(TaskList())
  return content
}

document.body.appendChild(component())
