// Map()
let arr = [1, 2, 4, 65, 34]
let newArr1 = []

/* Linger line Alternative of map() */for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr1.push(element**2)
}
console.log(newArr1);

/* Map() */
let arr1 = [1, 2, 4, 65, 34]
let newArr2 = arr1.map(e=>{
    return e**2;
})

console.log(newArr2);

//filter

const greaterThanSeven = (e)=>{
    if(e > 7){
        return true
    }
    return false
}

console.log(newArr1.filter((e)=>{
    if(e > 7){
        return true
    }
    return false
}))

//Reduce()

let arr3 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b;
}

console.log(arr3.reduce((a,b)=>{
    return a*b;
}))

//Array.form

console.log(Array.from("Turja"))