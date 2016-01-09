var http = require('http');
var options = {
    hostname: 'localhost',
    port: 8080,
    headers: {
        'Content-Type': 'application/json'
    },
    path: '/',
    method: 'POST'
}
var request = http.request(options, function (response) {
    response.setEncoding('utf8');
    var result = '';
    response.on('data', function (data) {
        result += data;
    });
    response.on('end', function (data) {
        console.log(result);
        //console.log(JSON.parse(result));
    });
})

request.write(JSON.stringify({"name": "zfpx"}));
request.end();


