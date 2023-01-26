import "./styles/style.css"
import Task from './components/Task.js'
import CreateTask from './components/CreateTask.js'

import _ from 'lodash';

console.log("Estou funcionando aeee")

function component(){
  const element = document.createElement("div")
  const form = document.createElement('form')
  const button = document.createElement('button')
  const nameInput = document.createElement('input')
  const textInput = document.createElement('input')
  const statusInput = document.createElement('input')
  const priorityInput = document.createElement('input')
  const Guilherme = CreateTask('Guilherme', '10/12/1992', false, 'low')
  nameInput.classList.add("input-name")
  textInput.classList.add('input-text')
  statusInput.classList.add('input-status')
  priorityInput.classList.add("input-priority")
  button.innerHTML = 'Button';
  element.innerHTML = 'Hello';
  button.setAttribute("type", "submit")
  statusInput.setAttribute("type", "checkbox")
  form.appendChild(nameInput)
  form.appendChild(textInput)
  form.appendChild(statusInput)
  form.appendChild(button)
  form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const formName = document.querySelector('.input-name').value
    const formText = document.querySelector('.input-text').value
    const formCheckbox = document.querySelector('.input-status').checked
    // const formPriority= document.querySelector('.input-priority').value
    console.log(formName)
    console.log(formText)
    console.log(formCheckbox)
  })
  element.appendChild(form)
  return element
}

document.body.appendChild(component())
