title: 第一周补课
speaker: 珠峰培训
url: http://zhufengpeixun.cn
transition: slide3
theme: blue
usemathjax: yes

[slide]
#git提交代码这一块

[gitflow](http://book.haoduoshipin.com/gitbeijing/flow)

[slide] 
#异步操作和多线程的区别
- 多线程和异步操作两者都可以达到避免调用线程阻塞的目的 {:&.rollIn}
- 异步操作是指CPU在发起数据传输时发送一个指令，硬件就开始自己和内存交换数据，在传输完成之后硬件会触发一个中断来通知操作完成
- 线程本质上是进程中一段并发运行的代码
- [异步调用与多线程的区别](http://blog.csdn.net/jo_say/article/details/8111351)

[slide]
#npm发布流程
版本控制（npm package那一块） 
- `npm init` 初始化项目 {:&.rollIn}
- `npm adduser` 增加用户
- `npm publish` 发布项目
- 修改*package.json*升级版本
- 再次`npm publish`发布新版本

[slide]
#event 事件订阅和发射
有时被称作发布/订阅模式，观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态发生变化时，会通知所有观察者对象，使它们能够自动更新自己。

<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/observer.jpg" class="img-responsive"> 

> 所有可能触发事件的对象都是一个继承了EventEmitter类的子类的实例对象

[slide]
#global process
- global 全局对象类似于浏览器中的window {:&.rollIn}
  全局作用域，可以定义一些不需要任何加载就可以使用的变量，也预先定义了一些全局方法和类
  
- process 代表当前运行中的node进程
是一个全局对象，可以用来获取node.js应用程序以及运行该程序的用户，运行环境各种信息的属性方法与事件

[slide]
#fs模块系列的方法，读读写写开开关关，fd标示，read和readfile，write和writefile等容易混淆。
---
用途 | 异步 | 同步
:-------|:------:|-------
将文件作为**整体**读入缓存区 | readFile | readFileSync
将文件**部分**读入缓存区 | read | readSync
将数据**完整**写入文件 | writeFile | writeFileSync
将缓存区的**部分**内容写入文件 | write | writeSync

[slide]
#Buffer 二进制 
- 客户端JS对于二进制支持不好 {:&.rollIn}
- 在处理文件流时必须处理二进制，因此node提供了一个专门存放二进制数据的缓存区Buffer,可以表示任意的数据

[slide]
#文件的异步copy,文件异步处理 

[slide]
#module模块
- 在node.js中以模块为单位划分所有的功能  {:&.rollIn}
- 一个node.js应用由大量模块组成
- 每个模块都是一个js脚本
- 分为定义、导出、引入、使用四步

[slide]
#util模块的继承问题
```
util.inherits(Person,EventEmitter);
```
[slide]
#作业转换base64

[slide]
1. 为啥在局部作用域中定义的全局变量很难维护  {:&.rollIn}
2. 定义变量是用逗号隔开和每个变量以分号结束的区别
3. request.url,request.method返回俩次结果
    eg:      /
             GET
             /favicon.ico
             GET
     /favicon.ico这个请求是什么？能不能不要
4. toString()和util.inspect()的区别
5. node服务开启后，为什么每次执行以下文件，在浏览器才能看到结果
https://www.npmjs.com/package/forever
6. 要是同步读取文件的话怎样抓取错误信息
try catch
7. 分块读取时怎样处理
8. 
```
fs.fsync(fdw,function(){
        fs.close(fdw);
})中的fsync用法
```
9. 读取文件的时候如果文件默认不是UTF8保存  读取到buffer后用 utf8输出还是会有乱码

[slide]
#如何分析错误 nodejs的调试
http://www.zhufengpeixun.com/kecheng/detail_947414

[slide]
#node的作用，以及在前端如何使用还有他使用的一些开源框架
https://www.npmjs.com/
[slide]
#每次上课时间可以少些吗，如果上一下午，时间少些好接受些


