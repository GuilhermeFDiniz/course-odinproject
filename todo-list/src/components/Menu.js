export default function Menu(){
  const menu = document.createElement('div')
  const inbox = document.createElement('h3')
  const today = document.createElement('h3')
  const week = document.createElement('h3')
  inbox.textContent = 'Inbox'
  today.textContent = 'Today'
  week.textContent = 'This Week'
  menu.classList.add('menu')
  menu.appendChild(inbox)
  menu.appendChild(today)
  menu.appendChild(week)
  return menu
}
