console.log("Turja is a hacker")
setTimeout(() => {
    console.log('I am Iron man')
}, 1000);
console.log('The ed')

const callack = (ame)=>{
    console.log(ame)
}
const loadscript = (src,callack) =>{
    let sc = document.createElement('script')
    sc.src = src
    sc.onload = callack("Turja")
}

loadscript('HEllo',callack)