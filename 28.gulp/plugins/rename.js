var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// 常量
const PLUGIN_NAME = 'gulp-prefixer';

// 插件级别的函数（处理文件）
function gulpPrefixer(paramName) {
   /* if (!prefixText) {
        throw new PluginError(PLUGIN_NAME, '没有输入前缀字符串');
    }
*/
    //prefixText = new Buffer(prefixText); // 提前分配

    // 创建一个 stream 通道，以让每个文件通过
    var stream = through.obj(function(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
         //我们只处理buffer类型的流
        file.name = paramName;

        // 确保文件进入下一个 gulp 插件
        this.push(file);

        // 告诉 stream 引擎，我们已经处理完了这个文件
        cb();
    });

    // 返回文件 stream
    return stream;
};

// 导出插件主函数
module.exports = gulpPrefixer;