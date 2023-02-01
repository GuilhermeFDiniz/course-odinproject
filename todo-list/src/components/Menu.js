export default function Menu(){
  const menu = document.createElement('div')
  const inbox = document.createElement('h3')
  const today = document.createElement('h3')
  const week = document.createElement('h3')
  inbox.classList.add('menu-item')
  today.classList.add('menu-item')
  week.classList.add('menu-item')
  inbox.textContent = 'Inbox'
  today.textContent = 'Today'
  week.textContent = 'This Week'
  menu.classList.add('menu')
  menu.appendChild(inbox)
  menu.appendChild(today)
  menu.appendChild(week)
  return menu
}
