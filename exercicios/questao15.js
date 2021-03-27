//15) Converta a função abaixo em uma Arrow Function:

let promise1 = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    });
}

promise1().then(function(){
    console.log("ok!");
});

let promise2 = () => 
    new Promise((resolve, reject) => resolve());

promise2().then(function(){
    console.log("ok!");
});