
var util = {
    each:(function(){
        if(Array.prototype.forEach){
            return function(list,fn,context){
                list.forEach(fn,context);
            }
        }else{
            return function(list,fn,context){
                for(var i=0;i<list.length;i++){
                    fn.call(context,list[i],i,list);
                }
            }
        }
    })()
}

var arr = [1,2,3];
util.each(arr,function(item,index,all){
    console.log(this.name,item,index,all);
},{name:'zfpx'});

