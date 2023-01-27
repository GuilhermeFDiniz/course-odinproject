import Task from './TaskModel.js'

export default function CreateTask(name, date, status, priority){
  const task = new Task(name, date, status, priority)
  const card = document.createElement('div')
  const titleCard = document.createElement('span')
  const dateCard = document.createElement('span')
  const statusCard = document.createElement('input')
  const priorityCard = document.createElement('span')
  statusCard.setAttribute("type", "checkbox")
  statusCard.checked = status
  titleCard.textContent = name
  dateCard.textContent = date
  priorityCard.textContent = priority
  card.classList.add('task-card')
  card.appendChild(titleCard)
  card.appendChild(dateCard)
  card.appendChild(statusCard)
  card.appendChild(priorityCard)
  return card
}
