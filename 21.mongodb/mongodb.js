//cursor.find().skip(3).limit(3).sort({name:-1})

var cursor = {
    list : [
        {name:1},{name:2},{name:3},{name:4},{name:5},
        {name:6},{name:7},{name:8},{name:9},{name:10}
    ],
    find:function(callback){
        var self = this;
        process.nextTick(function(){
            var list = self.list.sort(self.sort);
            var result = [];
            var i=0;
            while(i++<self.limit){
                result.push(self.list[self.skip+i-1]);
            }
            callback(result);
        });
        return this;
    },
    skip:function(skip){
        this.skip = skip;
        return this;
    },
    limit:function(limit){
        this.limit = limit;
        return this;
    },
    sort:function(sort){
        this.sort = sort;
        return this;
    }
}
var result =cursor.find(function(result){
    console.log(result);
}).skip(3).limit(3).sort(function(pre,after){
      pre.name - after.name;
});
