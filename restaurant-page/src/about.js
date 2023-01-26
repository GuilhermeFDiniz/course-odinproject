function createContact(name, position, phone, email) {
  const card = document.createElement("div")
  const cardName = document.createElement("h2")
  const cardPosition = document.createElement("p")
  const cardPhone = document.createElement("p")
  const cardEmail = document.createElement("p")

  cardName.textContent = name
  cardPosition.textContent = position
  cardPhone.textContent = phone
  cardEmail.textContent = email

  card.appendChild(cardName)
  card.appendChild(cardPosition)
  card.appendChild(cardPhone)
  card.appendChild(cardEmail)

  card.classList.add("contact-card")

  return card
}

function contentContact() {
  const contact = document.createElement('div')
  contact.classList.add("contact-container")
  contact.appendChild(createContact("Pikachu", "CEO", "32462200", "pikachu@gmail.com"))
  contact.appendChild(createContact("Squirtle", "Chef", "88822323", "squirtle@gmail.com"))
  contact.appendChild(createContact("Charmander", "Waiter", "99331265", "charmander@gmail.com"))
  return contact
}

export default contentContact;
