import "./styles/style.css"
import Task from './components/TaskModel.js'
import CreateTask from './components/TaskCard.js'
import TaskForm from './components/TaskForm.js'
import TaskList from './components/TaskList'
import Menu from "./components/Menu"
import Header from "./components/Header"
import _ from 'lodash';

function component(){
  const page = document.createElement('div')
  page.classList.add('page')
  const container = document.createElement('div')
  container.classList.add('container')
  const content = document.createElement('div')
  content.classList.add('content')
  const listElement = document.createElement("div")
  listElement.classList.add('content-list')
  const formElement = document.createElement("div")
  content.appendChild(formElement)
  content.appendChild(listElement)
  container.appendChild(Menu())
  container.appendChild(content)
  formElement.appendChild(TaskForm())
  page.appendChild(Header())
  page.appendChild(container)
  return page
}

document.body.appendChild(component())
