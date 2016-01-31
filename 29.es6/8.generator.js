/**
 * 生成器
 */

function* say(words){
  yield 'hello';
  yield 'word';
}

var says = say();
says.next();
//says.next();
//console.log(says.next());