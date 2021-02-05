t = [900,803,802,801,700,600,500,400,300,200,100]

k = t.sort(function(a,b){ 
    console.log(a,b);
    console.log(a-b);
    return a-b;
})

console.log(k)

