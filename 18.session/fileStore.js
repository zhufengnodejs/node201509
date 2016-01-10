var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
module.exports = function (session) {
    var Store = session.Store;

    function FileStore(opt) {
        var options = opt||{};
        this._dir = options.dir||'.';
        mkdirp.sync(this._dir);
    }

    FileStore.prototype.__proto__ = Store.prototype;
    FileStore.prototype.get = function (sid, callback) {
        fs.readFile(path.join(this._dir,sid),callback)
    }

    FileStore.prototype.set = function (sid, session, callback) {
        fs.writeFile(path.join(this._dir,sid),JSON.stringify(session),callback)
    }

    FileStore.prototype.destroy = function (sid, callback) {
        fs.unlink(path.join(this._dir,sid,callback));
    }
    return FileStore;
}