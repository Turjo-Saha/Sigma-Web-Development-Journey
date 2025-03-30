

    let number = 1;
    for (let i = 1; i <= 10, number <= 10; i++) {
        console.log(number); 
        number += 3; 
    }



let obj = {
    name : "Turja",
    ID : 883,
    Class : 7
}

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }

// let i = 11;
// while (i<=10) {
//     console.log(i);
//     i++;
// }
// let i = 3;
// do {
//     console.log(i);
//     i++;
// } while (i<100);

// for (const c of object) {
    
// }
let count = 0
for (const key in obj) {
    if(count < 2){
        const element = obj[key];
        console.log(key ,element);
        count++;
    }else{
        break;
    }
}


