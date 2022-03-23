function* display(){
    console.log("hi");
    console.log("hello");
    yield 10;
    console.log("cvr college of engineering");
}
console.log("welcome to cvr");
var a=display();
console.log(a.next());
console.log("hello..");