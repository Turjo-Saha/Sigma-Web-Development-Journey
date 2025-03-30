let b = document.body.getElementsByClassName('box')[3];
console.log(b)
b.style.backgroundColor = "red"

//

document.body.firstElementChild.firstElementChild.nextElementSibling.style.backgroundColor = "blue" 
//or
document.getElementById('blue-box').style.backgroundColor = "blue"

//

document.querySelector(".box").style.backgroundColor = "green"
//All
document.querySelectorAll(".box").forEach((e) =>{
    e.style.backgroundColor = "violet"
})


let qar = document.querySelectorAll(".box");
for (let i = 0; i < qar.length; i++) {
    const element = qar[i];
    element.style.backgroundColor = "red"
}
