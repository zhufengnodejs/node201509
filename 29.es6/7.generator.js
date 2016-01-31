/**
 * 生成器
 */

function* say(words){
   for(var i=0;i<words.length;i++){
       yield words[i];
   }
}

var says = say(['hello','word']);
console.log(says.next());
console.log(says.next());
//console.log(says.next());