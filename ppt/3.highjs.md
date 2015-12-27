title: node.js入门-3
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
##HTTP
<small>珠峰培训</small>

[slide]
##服务器
-----
* 服务器可以是**专业**服务器也可以是**个人**电脑 {:&.moveIn}
* 能在**特定(IP)服务器**的**特定端口**上监听客户端的请求，并根据请求的路径返回相应结果都叫服务器：
* 比如霍营庆丰包子店就是一个服务器
    * 国风美唐4号楼408室(地点和门牌号)
    * 有人要吃包子可以返回包子(满足顾客的要求)

[slide]
##客户端
-----
* 只要能向**特定(IP)服务器**的**特定端口**发起请求并接受响应的都叫客户端 {:&.moveIn}
* 可以是mac、iphone、ipad、apple等等

[slide]
##数据在服务器和客户端之间传递
-----
* 可以把服务器硬盘上**已经有的静态文件**发送给客户端 {:&.moveIn}
* 也可以由服务器经过逻辑处理生成的**动态内容**返回给客户端，比如**当前时间**

[slide]
##http协议
-----
* 人与人之间通信，需要一种**传输手段**(声波)和一种彼此都懂的**语言**（比如普通话） {:&.moveIn}
* 要让这些形形色色的机器能够通过网络进行交互，我们就需要指明一种**协议**(比如 HTTP/HTTPS)和一种**数据封装格式**(比如 HTML/JSON)
* http指的就是指的就是这种协议+数据格式的交流体系。
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/request.jpg" class="img-responsive">

[slide]
##一个普通网站访问的过程(1)
-----
* 浏览器(或其它客户端如微信)向服务器发出一个**HTTP请求** {:&.moveIn}
* 先把**域名解析为IP地址**(chrome缓存1分钟(chrome://net-internals/#dns)->搜索操作系统缓存->读取本地host文件->发起DNS系统调用->运营商DNS缓存->找根域->com域)
* 客户端通过随机端口向服务器发起TCP三次握手,建立了**TCP连接**
* 连接建立后浏览器就可以**发送HTTP请求**了
* 服务器接收到HTTP请求，解析请求的路径和参数，经过后台的一些处理之后**生成完整响应**页面
* 服务器将生成的页面作为HTTP**响应体**，根据不同的处理结果生成**响应头**，发回给客户端

[slide]
##一个普通网站访问的过程(2)
-----
* 客户端（浏览器）接收到 HTTP 响应,从请求中得到的 HTTP 响应体里是HTML代码，于是对HTML代码开始**解析** {:&.moveIn}
* 解析过程中遇到**引用的服务器上的资源**（额外的 CSS、JS代码，图片、音视频，附件等），再向服务器发送请求
* 浏览器解析HTML包含的内容，用得到的 CSS 代码进行外观上的进一步**渲染**，JS 代码也可能会对外观进行一定的**处理**
* 当用户与**页面交互**（点击，悬停等等）时，JS 代码对此作出一定的反应，添加特效与动画
* 交互的过程中可能需要向服务器索取或提交额外的数据（局部的刷新）,一般不是跳转就是通过 JS 代码(响应某个动作或者定时)向服务器发送**AJAX**请求
* 服务器再把客户端需要的资源返回，客户端用得到的资源来实现动态效果或**修改DOM结构**。


[slide]
##请求
----
* 请求的方式 {:&.moveIn}
    * GET  从服务器**获取资源**,比如请求一张空白的注册表单 {:&.moveIn}
    * POST 向服务器**提交数据**，比如提交注册表单
* 请求的*URL*
  <img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/url.jpg" class="img-responsive">
* 请求头
  * Content-Type 指定响应内容的**类型**和**编码**，浏览器根据这个类型决定如何渲染这个内容,比如显示图片，播放mp3等
  
    > 文件类型和内容类型对照表 http://tool.oschina.net/commons

[slide]
##响应
-----
* *状态码* {:&.moveIn}
  * *1xx 请求正在处理* {:&.moveIn}
  * *2xx 正常处理完成*
    * 200 OK 请求成功
  * *3xx 重定向*
    * 301 Moved Permanently 永久重定向
    * 302 Found 临时重写向
  * *4xx 客户端错误*
    * 400 Bad Request语法错误
    * 401 Unauthorized权限未认证
    * 403 Forbidden 禁止访问
    * 404 Not Found 资源未找到
  * *5xx 服务器端错误*
    * 500 Internal Server Error 服务器故障
    * 503 Service Unavaliable 服务器繁忙
* *响应体*
   响应的具体内容，比如一张图片，一个网页

[slide]
##http模块主要用于搭建HTTP服务
* 创建HTTP服务器并**动态响应**当前时间 {:&.moveIn}
    ```javascript
   var http = require('http'); //表示加载http模块
   
   // 该函数的request参数是一个对象，表示客户端的HTTP请求
   // response参数也是一个对象，表示服务器端的HTTP回应。
   function handle(request, response){
       //writeHead表示服务器端回应一个HTTP头信息
       response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
       //response.end方法表示，服务器端回应的具体内容，以及回应完成后关闭本次会话。
       response.end(new Date().toLocaleString());
   }
   // ceateServer方法接受一个函数作为参数
   var server = http.createServer(handle);
   //表示启动服务器实例，监听本机的8080端口
   server.listen(8080, "127.0.0.1");
   console.log('Server running on port 8080.');
    ```

* 将上面这几行代码保存成文件app.js，然后用node调用这个文件，服务器就开始运行了。

    ```javascript
$ node app.js
    ``` 
命令行窗口将显示一行提示“Server running on port 8080.”。    
打开浏览器，访问http://localhost:8080
网页显示
    ```javascript
 2015-12-23 18:07:00
    ```