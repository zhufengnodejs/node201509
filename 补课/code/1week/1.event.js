/**
 * 有时被称作发布/订阅模式，观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。
 * 这个主题对象在状态发生变化时，会通知所有观察者对象，使它们能够自动更新自己。
 *
 * addListener(event,listener) 对指定事件绑定
 * on(event,listener)对指定事件绑定
 * once(event,listener);绑定一次
 * removeListener(event); 解除监听
 * removeAllListeners(event); 解除所有处理
 * emit(event,arg1); 触发事件
 * setMaxListeners(n); 最大监听数量
 * listeners(event) 所有事件处理函数
 * listenerCount(emitter,event) 获取某个对象指定处理函数
 **/

