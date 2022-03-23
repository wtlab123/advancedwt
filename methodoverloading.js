class student{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("student name from parent class"+this.name);
    }
}
class student1 extends student{
    constructor(name,rollno){
        super(name);
        this.rollno=rollno;
    }
    display1(){
        console.log("student name from child class:"+this.name+"her roll no is"+this.rollno);
    }
}
let s=new student1(shilpa,1238);
s.display1();