const btn = document.querySelector('.btn')
const text = document.querySelector('.text')
let shown = true


function toggleText() {
    if (shown) {
        btn.innerHTML = 'Show Text 👀'
        text.style.opacity = 0; 
    } else {
        btn.innerHTML = 'Hide Text 🙈'
        text.style.opacity = 1; 
    } 
    shown = !shown
}


btn.addEventListener('click', () => {
    toggleText()
})