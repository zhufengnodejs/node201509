
function Person(){
    this.name = 'zfpx';
    return {name:'zf'}
}
/**
 * 1.创建空对象
 * 2.把空对象作为this 传入Person
 * 3.返回这个对象
 */
var p = new Person;
console.log(p.name);
var P2 = Person.bind({name:'px'});
var p2 = new P2;
console.log(p2);