const image = document.querySelector('.img')
const urlInput =document.querySelector("input[name='input-url']")
const colorInput =document.querySelector("input[name='input-color']")
const numberInput =document.querySelector("input[name='input-number']")


let url=''; 
let width=10; 
let color = '#000000'; 

function hideImageOnload() {
    image.style.display = 'none'; 
}

function setImage(url, width, color) {
    image.style.display = 'block'; 
    image.style.borderStyle = 'solid'; 
    image.style.backgroundImage = "url(" + url + ")"; 
   
    image.style.borderWidth = width + 'px';
    image.style.borderColor = color; 
}

urlInput.addEventListener('change', () => {
    url = urlInput.value
    setImage(url, width, color)
}) 

numberInput.addEventListener('change', () => {
    width = numberInput.value
    setImage(url, width, color)
}) 

colorInput.addEventListener('change', () => {
    color = colorInput.value
    setImage(url, width, color)
}) 

hideImageOnload(); 