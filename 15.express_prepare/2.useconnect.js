var connect = require('./2.connect');
var app = connect();
require('./middle')(app);
require('./route')(app);
app.listen(8080);


