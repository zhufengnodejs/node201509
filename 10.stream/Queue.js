function Queue(){
    this.data = [];
}
//入列
Queue.prototype.enqueue = function(data){
   this.data.push(data);
}
//出列
Queue.prototype.dequeue = function(){
    return this.data.shift();
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
var d = q.dequeue();
console.log(d);

