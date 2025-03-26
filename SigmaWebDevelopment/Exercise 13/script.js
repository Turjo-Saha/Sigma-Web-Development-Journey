function createCard(thumbail, duration, title, cName, views, monthsOld){
    return    document.querySelector('img').innerHTML = thumbail,
        document.getElementById('p').innerHTML = duration,
        document.querySelector('h4').innerHTML = title,
        document.querySelector('ul').firstElementChild.innerHTML = cName,
        document.querySelector('ul').children[2].innerHTML = views,
        document.querySelector('ul').children[5].innerHTML = monthsOld
}
let thumbail = document.querySelector('img').src = "image-ezgif.com-webp-to-jpg-converter.jpg"
let duration = "1:02:55"
let title = "Welcome to my courses || Sigma Web Development"
let cName = "CodeWithTurjo"
let views = 1090
let monthsOld = "1 week"

if (views >= 1000000000) {
    views = (views / 1000000000) + "B";
} else if (views >= 1000000) {
    views = (views / 1000000) + "M";
} else if (views >= 1000) {
    views = (views / 1000) + "K";
}

createCard(thumbail, duration, title, cName, views, monthsOld)



if(duration.length >= 6){
    document.getElementById('span').style.transform = "translateX(-10px)"
}else{
    document.getElementById('span').style.transform = "translateX(0px)"
}