import "./styles/style.css"
import teste from "./printeste.js"
import _ from 'lodash';

console.log("Estou funcionando aeee")

function component(){
  const element = document.createElement("div")
  const botao = document.createElement('button')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  botao.innerHTML = 'Click me and check the console!';
  element.appendChild(botao)
  botao.onclick = teste
  return element
}

document.body.appendChild(component())
