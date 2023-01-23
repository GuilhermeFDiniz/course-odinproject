function createTitle(title){
  const titleDiv = document.createElement('div')
  const titleText = document.createElement('h1')
  titleText.textContent = title
  titleDiv.appendChild(titleText)
  return titleDiv
}

function createDescription(description){
  const descriptionDiv = document.createElement('div')
  const descriptionText = document.createElement('p')
  descriptionText.textContent = description
  descriptionDiv.appendChild(descriptionText)
  return descriptionDiv
}

function createSchedule(open, close) {
  const scheduleDiv = document.createElement('div')
  const scheduleTitle = document.createElement('h1')
  const scheduleText = document.createElement('p')
  scheduleTitle.textContent = 'Restaurant Schedule'
  scheduleText.textContent = `Monday: ${open}am - ${close}pm`
  scheduleDiv.appendChild(scheduleTitle)
  scheduleDiv.appendChild(scheduleText)
  return scheduleDiv
}

function createLocation(address){
  const addressDiv  = document.createElement("div")
  const addressTitle = document.createElement('h1')
  const addressText = document.createElement("p")
  addressTitle.textContent = 'Location'
  addressText.textContent = address
  addressDiv.appendChild(addressTitle)
  addressDiv.appendChild(addressText)
  return addressDiv
}
