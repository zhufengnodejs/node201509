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
PersonSchema.add({ password: 'String' });
PersonSchema.add({ hobby: 'String' });
PersonSchema.method('mysave', function (cb) {
    this.hobby='drink';
    this.save(cb);
    console.log('how are you');
})
PersonSchema.static('findByName', function (name, callback) {
    return this.find({ name: name }, callback);
});

// 创建Model 是通过数据库连接创建的
var PersonModel = db.model("Person", PersonSchema);

var personEntity = new PersonModel({
    name : "xxxx",
    age  : 6,
    email: "zfpx@qq.com",
    password:'1234567',
    head:'touxiang'
});
personEntity.mysave(function(err,doc){
    console.log(doc.hobby);
});
PersonModel.findByName('xxxx',function(err,docs){
  console.log(docs.length);
});

/*PersonModel.create([
    { name:"zfpx1", age:1 },
    { name:"zfpx2", age:2 },
    { name:"zfpx3", age:3 },
    { name:"zfpx4", age:4 },
    { name:"zfpx5", age:5 },
    { name:"zfpx6", age:6},
    { name:"zfpx7", age:7 },
    { name:"zfpx8", age:8 },
    { name:"zfpx9", age:9},
    { name:"zfpx10",age:10 }
], function(error,docs) {
    if(error) {
        console.log(error);
    } else {
        console.log('save ok');
    }
});*/

PersonModel.findById("569a1586760fc95417e9633a", function (err, doc){
    console.log(doc.name);
    //doc 查询结果文档
});

PersonModel.find({},null,{skip:3,limit:3,sort:{age:-1}},function(err,docs){
    //查询所有数据，并按照age降序顺序返回数据docs
    docs.forEach(function(doc){
        console.log(doc.name,doc.age);
    });
});