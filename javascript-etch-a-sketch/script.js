let size = parseInt(document.querySelector("#sizeSlider").value)
console.log(size)
let grid = document.querySelector(".grid")
console.log(grid)
function createDiv() {
  let gridBlock = document.createElement('div')
  gridBlock.classList.add('style-grid-block')
  gridBlock.style.width = `${100.0/size}%`
  gridBlock.style.height = `${100.0/size}%`
  return gridBlock
}

for (let i = 0; i < (size*size); i++) {
  const block = createDiv()
  grid.insertAdjacentElement("beforeend", block)
  for (let k = 0; k < size; k++) {
  }
}
