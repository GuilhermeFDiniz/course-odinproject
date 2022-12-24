let container = document.querySelector('#container');
console.log(container)
const paragraph = document.createElement('p');
paragraph.textContent = "Hey i'm rud";
paragraph.classList.add('red')
container.appendChild(paragraph);
const hthree = document.createElement('h3')
hthree.classList.add('blue')
hthree.textContent = "I'm a blue h3"
container.appendChild(hthree)
const div = document.createElement('div')
div.classList.add("black-border")
div.classList.add("pink-background")
div.classList.add("div-pink")
let container2 = document.querySelector('.div-pink')
const hone = document.createElement('h1')
hone.textContent = "I'm in a div"
div.appendChild(hone)
const p = document.createElement('p')
p.textContent = 'ME TOO'
div.appendChild(p)
container.appendChild(div)

const btn = document.querySelector('#btn')
btn.addEventListener('click', function(e) {
  console.log(e.target.style.background = 'blue')
})
