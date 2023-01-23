function createMenu(){
  const menu = document.createElement("div")
  menu.classList.add('menu')
  const tomato = createItem('tomato', 'Delicious Tomato Sandwich')
  menu.appendChild(tomato)
  const potato = createItem('potato', 'Delicious Potato Sandwich')
  menu.appendChild(potato)
  const cheese = createItem('cheese', 'Delicious Cheese Sandwich')
  menu.appendChild(cheese)
  return menu
}


function createItem(title, description){
  const item = document.createElement("div")
  item.classList.add('menu-item')
  const menuTitle = document.createElement("h2")
  menuTitle.textContent = title
  const menuDescription = document.createElement("p")
  menuDescription.textContent = description
  const menuImage = document.createElement("img")
  menuImage.src = `./images/${title}.png`
  menuImage.alt = title
  item.appendChild(menuImage)
  item.appendChild(menuTitle)
  item.appendChild(menuDescription)
  return item
}

function loadMenu(){
  const main = document.querySelector('#content')
  main.appendChild(createMenu())
}

export default loadMenu;
