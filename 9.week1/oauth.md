title: 第一周补课
speaker: 珠峰培训
url: http://zhufengpeixun.cn
transition: slide3
theme: blue
usemathjax: yes

[slide]
##什么是OAuth
OAuth是一个授权的开放网络标准，允许用户让**第三方**应用访问该用户在某一网站上存储的**私密**的资源，而无需将用户名和密码提供给第三方应用。

[slide]
##OAuth应用场景
大前端网校QQ登录
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/oauth.png" class="img-responsive">

[slide]
#步骤1
大前端网校请求QQ登录页面时使用的带有特定参数的URL
请求参数
----
返回参数 | 说明
:-------|:------
client_id  | 表示客户端的ID
redirect_uri  | 表示重定向URL

返回值
----
返回参数 | 说明
:-------|:------
code | 表示授权码，有效期很短，客户端只能使用一次

[slide]
#步骤2
用户使用QQ号登录并授权
跳转到URL中并追加code参数

[slide]
#步骤3
返回登录结果
用户使用QQ登录授权之后需要请求的一个带有特定参数的URL
请求参数
----
返回参数 | 说明
:-------|:------
client_id  | 表示客户端的ID
client_secret | 客户端密钥
code  | 授权登陆拿到的参数，会过期

返回值
----
返回参数 | 说明
:-------|:------
accessToken | 用户通过第三方应用访问OAuth接口的令牌,可以访问后续资源

[slide]
#QQ实战
- [QQ互联](http://connect.qq.com/intro/login)
- [QQ互联OAuth](http://wiki.connect.qq.com/OAuth2.0%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3)

