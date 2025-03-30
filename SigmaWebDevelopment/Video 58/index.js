// function nice(name) {
//     console.log("Hey "+ name + " nice to meet you.");
//     console.log("Hey "+ name + " What are you doing.");
//     console.log("Hey "+ name + " How are you.");
// }

// nice("Turja");
// nice("Azwaf")

function sum(a , b, c=2) {
    console.log(a,b,c);
    return a + b + c
}

result1 = sum(2,5) 
result2 = sum(9 , 12, -2) 

console.log("The sum of this number is: " + result1);
console.log("The sum of this number is: " + result2);

let fudf1 = (x)=>{
    return "You do got " +x+ " marks of of 10";
}
marks1 = fudf1(10);
marks2 = fudf1(2);

console.log("You got " +marks1+ " marks out of 20");
console.log("You got " +marks2+ " marks out of 20");