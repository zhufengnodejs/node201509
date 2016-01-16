var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://123.57.143.189:27017/zfpx");
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});
//集合的数据模型定义 定义了字段名和字段的类型 默认值
var PersonSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
});

// 创建Model 是通过数据库连接创建的
var PersonModel = db.model("Person", PersonSchema);

var personEntity = new PersonModel({
    name : "zfpx",
    age  : 6,
    email: "zfpx@qq.com"
});
console.log(personEntity.name); // zfpx
console.log(personEntity.age); // 6
console.log(personEntity.time); // 6


/*personEntity.save(function(error,doc){
    if(error){
        console.log("error :" + error);
    }else{
        for(var attr in doc){
            console.log(attr+'='+doc[attr])
        }
        console.log(arguments);
    }
});*/
PersonModel.create({ name:"zfpx", age:7}, function(error,doc){
    if(error) {
        console.log(error);
    } else {
        console.log(doc);
    }
});
PersonModel.find({},function(error,docs){
    console.log(docs);
    console.log(docs[0].email);
    //若没有向find传递参数，默认的是显示所有文档
});