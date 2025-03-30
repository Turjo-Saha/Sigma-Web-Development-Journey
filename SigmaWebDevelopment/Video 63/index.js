
let arr = [1, 2, 3, 4, 5];
// Index = 0, 1, 2, 3, 4
// console.log(arr[0], typeof arr);
console.log(arr, typeof arr);
console.log(arr.length)
console.log(arr.toString());
console.log(arr.join(" & "));
console.log(arr.push(), arr);
console.log(arr.push("Turja"), arr);
console.log(arr.shift(), arr);
console.log(arr.unshift("Harry"), arr);
console.log(delete arr[2], arr);
console.log(arr.reverse(), arr);

let numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice(1, 2))
console.log(numbers.splice(1, 3))
console.log(numbers.splice(1, 3, 222, 333))
