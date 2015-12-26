/**
 * util
 *
 **/
function Parent(){
    this.name = 'Parent';
    this.age = 6;
    this.say = function(){
        console.log('hello',this.name);
    }
}
Parent.prototype.showName = function(){
    console.log(this.name);
}

function Child(){
    this.name = 'Child';
}
//不能传参 会继承私有属性
Child.prototype = new Parent();

var child = new Child();
//console.log();
child.showName();
console.log(child. === Object.prototype);