class stud{
    static display(){
        console.log("hello parent class");
    }
}
class stud1 extends stud{
    display1(){
        console.log("hello child class");
    }
}
   stud.display();
   stud1.display(); //parent class