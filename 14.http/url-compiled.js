'use strict';

var url = require('url');
var urlObj = url.parse('http://zfpx:123@www.baidu.com:80/mypath/sub?name=zfpx#top', true);
console.log(urlObj);

console.log(url.format(urlObj));

//# sourceMappingURL=url-compiled.js.map