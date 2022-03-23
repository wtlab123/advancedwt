class student {
      display(){   
        console.log("student name");

    }
}
class student1 extends student{
    display1(){
        console.log("student1 name");
        
    }
}
   let s=new student1();
   s.display();
   s.display1();
