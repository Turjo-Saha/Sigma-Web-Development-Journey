const prom1 = new Promise((resolve,reject)=>{
    var a = Math.random()
    if(a < 0.5){
        reject('Fuck You')
    }else{
        setTimeout(() => {
            console.log('Turja');
            resolve('Turja is average coder but he is trying to improve.')
        }, 2000);
    }
})


prom1.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})