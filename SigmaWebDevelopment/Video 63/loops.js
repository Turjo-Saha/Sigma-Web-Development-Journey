let a = [1,3,4,5,6,98,1];

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
// }

// a.forEach((value, index, arr)=> {
//     console.log(value, index, arr);
// });

let obj = {
    a : 67,
    b : 69
}

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key , element);
//     }
// }

for (const iterator of a) {
    console.log(iterator);
}