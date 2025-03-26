function createCard(duration, title, cName, views, monthsOld) {

    if (views >= 1000000000) {
        views = (views / 1000000000) + "B";
    } else if (views >= 1000000) {
        views = (views / 1000000) + "M";
    } else if (views >= 1000) {
        views = (views / 1000) + "K";
    }
    let gfdg = `${}`
    let html = `<div class="container">
    <div class="card">
    <div class="tumbail">
    <img src="image-ezgif.com-webp-to-jpg-converter.jpg" id="img">
    <span id="span"><p id="p">${duration}</p></span>
    </div>
    <div class="info-head">
    <div class="title">
                    <h4>${title}</h4>
                </div>
                <div class="info">
                    <ul>
                        <li>${cName}</li><span>•</span>
                        <p id="View">${views}</p><li> views  </li><span>•</span>
                        <li>${monthsOld}</li><p>ago</p>
                        </ul>
                        </div>
                        </div>
                        </div>
                        </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
let duration = "1:02:55"
let title = "Welcome to my courses || Sigma Web Development"
let cName = "CodeWithTurjo"
let views = 1090
let monthsOld = "1 week"

if (duration.length >= 6) {
    document.getElementById('span').style.transform = "translateX(-2px)"
} else {
    document.getElementById('span').style.transform = "translateX(-px)"
}
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "7 months", 560000, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard(duration, title, cName, views, monthsOld)