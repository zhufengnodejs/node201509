'use strict'

function love(name,{username,age}={username:'wangwu'}){
    console.log(`${name} loves ${username} who is ${age} years old!`);
}

love('zhangsan',{username:'lisi',age:18});
love('zhangsan');