// configuration
var express    = require('express');
var app        = express();
var morgan     = require('morgan');
var bodyParser = require('body-parser');

// configuration
//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
//log every request to the console
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));
// parse application/json
app.use(bodyParser.json());

// listen (start app with node server.js)
app.listen(9000);
console.log("App listening on port 9000");
