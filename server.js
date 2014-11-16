var connect = require('connect');
serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("../angularjs-lab"));
app.listen(5000);