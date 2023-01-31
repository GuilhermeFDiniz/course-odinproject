export default function Header(){
  const div = document.createElement('div')
  const title = document.createElement('h1')
  title.textContent = 'To Do List'
  div.classList.add('header')
  div.appendChild(title)
  return div
}
