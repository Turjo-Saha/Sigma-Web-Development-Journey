// let Adjectiv = {
//     a1 : "Carzy",
//     a2 : "Amazing",
//     a3 : "Fire"
// }
// let Shop = {
//     s1 : "Engine",
//     s2 : "Food",
//     s3 : "Garment"
// }
// let word = {
//     w1 : "Bros",
//     w2 : "Limited",
//     w3 : "Hub"
// } 
// let random = Math.round(Math.random()*100);
// console.log(random);
// if (random < 33.333333333333333){
// console.log(Adjectiv.a1 , Shop.s1 , word.w3);
// }else if(random < 66.666666666666666){
// console.log(Adjectiv.a2 , Shop.s2 , word.w1);
// }else{
// console.log(Adjectiv.a3 , Shop.s3 , word.w2);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let first,second,third;

let rand = Math.random();
let rand1 = Math.random();
let rand3 = Math.random();
let adjective = {
    i: "Carzy",
    ii: "Amazing",
    iii: "Fire"
}
let shop = {
    i: "Engine",
    ii: "Food",
    iii: "Garment"
}
let word = {
    i: "Bros",
    ii: "Limited",
    iii: "Hub"
}

first = rand < 0.33 ?adjective.i : rand < 0.66 ?adjective.ii : adjective.iii;
second = rand1 < 0.33 ?shop.i : rand1 < 0.66 ?shop.ii : shop.iii;
third = rand3 < 0.33 ?word.i : rand3 < 0.66 ?word.ii : word.iii;

console.log(first,second,third);




