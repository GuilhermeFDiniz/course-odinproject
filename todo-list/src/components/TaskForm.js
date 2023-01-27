import Task from "./TaskModel"
import {addTask} from './StorageTasks'

export default function TaskForm() {
  const form = document.createElement('form')
  const button = document.createElement('button')
  const nameInput = document.createElement('input')
  const dateInput = document.createElement('input')
  const statusInput = document.createElement('input')
  const priorityInput = document.createElement('select')
  const optionLow = document.createElement('option')
  const optionNormal = document.createElement('option')
  const optionHigh = document.createElement('option')
  dateInput.setAttribute("type", "date")
  optionHigh.setAttribute("value", "high")
  optionLow.setAttribute("value", "low")
  optionNormal.setAttribute("value", "normal")
  optionLow.textContent = 'Low'
  optionNormal.textContent = 'Normal'
  optionHigh.textContent = 'High'
  priorityInput.appendChild(optionLow)
  priorityInput.appendChild(optionNormal)
  priorityInput.appendChild(optionHigh)
  nameInput.classList.add("input-name")
  dateInput.classList.add('input-text')
  statusInput.classList.add('input-status')
  priorityInput.classList.add("input-priority")
  button.setAttribute("type", "submit")
  statusInput.setAttribute("type", "checkbox")
  form.appendChild(nameInput)
  form.appendChild(dateInput)
  form.appendChild(statusInput)
  form.appendChild(priorityInput)
  form.appendChild(button)
  button.innerHTML = 'Button';
  form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const formName = document.querySelector('.input-name').value
    const formDate = document.querySelector('.input-text').value
    const formCheckbox = document.querySelector('.input-status').checked
    const formPriority= document.querySelector('.input-priority').value
    const newTask = new Task(formName, formDate, formCheckbox, formPriority)
    addTask(newTask)
  })
  return form;
}
