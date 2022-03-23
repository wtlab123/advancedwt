let add=function(a,b){
    return a+b;
}
console.log(add(4,5));

let add1=(x,y)=>x+y;
console.log(add(3,4));
console.log(typeof add);
console.log(add instanceof Function);

//arrow function with single parameters
let square=function(x){
     return x*x;
}
console.log(square(6));


let square1=(x)=>x*x
console.log(square(10));
