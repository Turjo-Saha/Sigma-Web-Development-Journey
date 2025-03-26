//For loops

let a = 6;
let sum = 1

for (let i = 1; i <= a; i++) {
    sum *= i
}
console.log(sum);

//Reduce

let arr = []
let b = 6

for (let i = 1; i <= b; i++) {
    arr.push(i)
}

console.log(arr.reduce((a,b)=>{
    return a*b
}))

//Reduce by using function
let u = 6

function factorial(num){
    let arr = Array.from(Array(num+1).keys())
    let c = arr.slice(1,).reduce((a,b) => a*b)
    return c
}


console.log(factorial(a))


//For loop with function

let x = 6

function factlopp(num){
    let add = 1
    for (let i = 1; i <= num; i++) {
        add *= i
    }
    return add
}

console.log(factlopp(x))