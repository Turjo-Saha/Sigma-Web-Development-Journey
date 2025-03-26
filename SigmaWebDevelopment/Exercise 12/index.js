let box = document.querySelector('.container').children

function color(){
    let R = Math.floor(Math.random() * 255)
    let G = Math.floor(Math.random() * 255)
    let B = Math.floor(Math.random() * 255)
    return `rgb(${R},${G},${B})`
}

Array.from(box).forEach(e => {
    e.style.backgroundColor = color()
    e.style.color = color()
});

document.body.style.backgroundColor = color()
