export default function TaskForm() {
  const form = document.createElement('form')
  const button = document.createElement('button')
  const nameInput = document.createElement('input')
  const textInput = document.createElement('input')
  const statusInput = document.createElement('input')
  const priorityInput = document.createElement('select')
  const optionLow = document.createElement('option')
  const optionNormal = document.createElement('option')
  const optionHigh = document.createElement('option')
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
  textInput.classList.add('input-text')
  statusInput.classList.add('input-status')
  priorityInput.classList.add("input-priority")
  button.setAttribute("type", "submit")
  statusInput.setAttribute("type", "checkbox")
  form.appendChild(nameInput)
  form.appendChild(textInput)
  form.appendChild(statusInput)
  form.appendChild(priorityInput)
  form.appendChild(button)
  button.innerHTML = 'Button';
  form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const formName = document.querySelector('.input-name').value
    const formText = document.querySelector('.input-text').value
    const formCheckbox = document.querySelector('.input-status').checked
    const formPriority= document.querySelector('.input-priority').value
    console.log(formName)
    console.log(formText)
    console.log(formCheckbox)
    console.log(formPriority)
  })
  return form;
}
