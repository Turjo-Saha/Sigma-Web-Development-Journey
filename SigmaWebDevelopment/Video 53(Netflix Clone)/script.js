alert("Hello Guys!😁😁. This is my own build Netflix clone webpage by using HTML CSS JAVASCRIPT");

document.body.style.visibility = "hidden";

let password = 6969;
let word = Number(prompt("Type a password to access this webpage: "));
if(password == word){
    document.body.style.visibility = "visible";
}else{
    document.body.style.visibility = "hidden";
}

