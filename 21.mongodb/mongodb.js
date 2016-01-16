//cursor.find().skip(3).limit(3).sort({name:-1})

var cursor = {
    list : [
        {name:1},{name:2},{name:3},{name:4},{name:5},
        {name:6},{name:7},{name:8},{name:9},{name:10}
    ],
    find:function(num){},
    skip:function(num){},
    limit:function(num){},
    sort:function(config){}
}
var result =cursor.find().skip(3).limit(3).sort({name:-1});
console.log(result);