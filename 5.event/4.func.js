function say(name,word){
    console.log(name,":",word);
}
//var newSay = say.bind(this,'张三');
function newSay(){
    say.apply(null,['张三'].concat(Array.prototype.slice.call(arguments)));
}
newSay('我爱你');
newSay('i love you');

function eat(times,callback){

}
var newEat = eat(5,function(){
    console.log('吃完了');
});
newEat();
newEat();
newEat();
newEat();
newEat();