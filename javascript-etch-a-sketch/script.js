let size = parseInt(document.querySelector("#sizeSlider").value)
let grid = document.querySelector(".grid")
let penColor = "rgb(0,0,0)";

function createDiv() {
  let gridBlock = document.createElement('div')
  gridBlock.classList.add('style-grid-block')
  gridBlock.style.width = `${100.0/size}%`
  gridBlock.style.height = `${100.0/size}%`
  gridBlock.addEventListener('mouseover', () => {
    if (rainbow.value === "true") {
      gridBlock.style.backgroundColor = (randomBgColor())
    } else {
      gridBlock.style.backgroundColor = penColor
    }
  })
  return gridBlock
}

function randomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor
}

let rainbow = document.querySelector('.rainbow')
rainbow.addEventListener('click', () => {
rainbow.value = true
})

let picker = document.querySelector("#colorpicker")
picker.oninput = (e) => {
  rainbow.value = false
  penColor = e.target.value
  console.log(penColor)
}


let clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
  document.querySelectorAll(".style-grid-block").forEach(element => {
    element.style.backgroundColor = "white"
  })
})

for (let i = 0; i < (size*size); i++) {
  const block = createDiv()
  grid.insertAdjacentElement("beforeend", block)
  for (let k = 0; k < size; k++) {
  }
}
