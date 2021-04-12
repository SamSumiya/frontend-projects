const image = document.querySelector('.img-main')

let images = [
    {'src' : 'https://cdn.pixabay.com/photo/2016/11/29/06/20/blonde-1867768_1280.jpg', 'alt' : 'San Francisco'},
    {'src' : 'https://cdn.pixabay.com/photo/2017/03/18/14/56/panorama-2154194__480.jpg', 'alt' : 'San Francisco'}, 
    {'src' : 'https://cdn.pixabay.com/photo/2016/08/31/11/30/transamerica-pyramid-1633204_1280.jpg', 'alt' : 'San Francisco'}, 
    {'src' : 'https://cdn.pixabay.com/photo/2016/08/31/11/30/transamerica-pyramid-1633202__480.jpg', 'alt' : 'San Francisco'}, 
    {'src' : 'https://cdn.pixabay.com/photo/2014/07/10/10/20/golden-gate-bridge-388917__480.jpg', 'alt' : 'San Francisco'}, 
    {'src' : 'https://cdn.pixabay.com/photo/2016/12/09/09/22/san-francisco-1893985__480.jpg', 'alt' : 'San Francisco'}, 
    {'src' : 'https://cdn.pixabay.com/photo/2015/11/07/11/17/golden-gate-bridge-1030999__480.jpg', 'alt' : 'San Francisco'}, 
    {'src' : 'https://cdn.pixabay.com/photo/2019/12/05/05/50/san-francisco-4674351__480.jpg', 'alt' : 'San Francisco'}, 
    {'src' : 'https://cdn.pixabay.com/photo/2020/01/25/14/21/san-francisco-4792657__480.jpg', 'alt' : 'San Francisco'}, 
    {'src' : 'https://cdn.pixabay.com/photo/2015/12/08/00/30/bridge-1081782__480.jpg', 'alt' : 'San Francisco'}, 
    {'src' : 'https://cdn.pixabay.com/photo/2016/08/31/11/30/transamerica-pyramid-1633203__480.jpg', 'alt' : 'San Francisco'}
]

function setImage() {
    let src = image.getAttribute('src'); 
    let imageInfo = images[Math.floor(Math.random() * images.length)] ;
    while (src===imageInfo.src) {
        imageInfo = images[Math.floor(Math.random() * images.length)] ;
    } 
    image.setAttribute('src', imageInfo.src)
    image.setAttribute('alt', imageInfo.alt)
}

image.addEventListener('click', () => {
    setImage(); 
})

document.body.addEventListener('keydown', (e) => {
    if (e.key === " ") {
        setImage()
    }
})

setImage(); 