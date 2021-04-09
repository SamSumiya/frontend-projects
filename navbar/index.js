const nameDisplay = document.querySelector('.link-name')
const nameInput = document.getElementById('name-input')

function setName(name) {
    nameDisplay.innerHTML = 'Welcome, '
    let nameInner = document.createElement('span')
    nameInner.innerHTML = name
    nameInner.setAttribute('class', 'name')
    nameDisplay.appendChild(nameInner)
}

nameInput.addEventListener('change', () => {
    setName(nameInput.value)
})




