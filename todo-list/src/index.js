import "./styles/style.css"

console.log("Estou funcionando aeee")
function component(){
  const element = document.createElement("h1")
  element.textContent = "Olaaa"
  return element
}

document.body.appendChild(component())
