
function Stack(){
    this.data = [10];
    this.size = 0;
}

Stack.prototype.pop = function(){
    var curr = this.data[this.size-1];
    this.size = this.size-1;
    return curr;
}
Stack.prototype.push = function(data){
    this.data[this.size] = data;
    this.size = this.size+1;
}
Stack.prototype.size = function(){
    return this.size;
}

var st = new Stack();
st.push(1);
st.push(2);
st.push(3);
var data = st.pop();
console.log(data);
console.log(st.size);
