class student{
    static display(){
        console.log("hi from parent class");
    }
}
class student1 extends student{
    static display1(){
        console.log("hi from child class");
    }
}
student.display();
student1.display();