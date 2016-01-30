'use strict'
class Person{
    constructor(name){
        this.name = name;
        this.age = 6;
        this._hobbies = [];
    }

    getName(){
        console.log(this.name);
        //return this.name;
    }

    get hobby(){
        return this._hobbies;
    }
    set hobby(hobby){
        this._hobbies.push(hobby);
    }

}

class Student extends Person {
   constructor(name){
        super(name);
   }
   getStuNo(){
       console.log('945');
   }
    getName(){
        console.log(super.getName(),this.name);
    }
}


var p = new Person('zfpx');
p.hobby = 'smoking';
p.hobby = 'drinking';
console.log(p.hobby);
console.log(p);
p.getName();
console.log(p.age);

var student = new Student('zhangsan');
student.getName();
student.getStuNo();
