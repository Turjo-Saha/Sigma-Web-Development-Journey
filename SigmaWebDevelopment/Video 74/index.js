let button = document.getElementById('btn');
let text = document.querySelector('.container').firstElementChild;

document.addEventListener('keydown', (e) => {
    console.log(e.key, e.keyCode);
    if (text.innerHTML == "Hello! I am a content") {
        text.innerHTML = "Yah!";
    } else if(text.innerHTML == "Yah!") {
        text.innerHTML = "Hello! I am a content";
    }
});