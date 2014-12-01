__ = require('underscore');

var express = require('express');
 
//TODO resetup express to latest express and middleware config.

var app = express();
app.set('port', (process.env.PORT || 5000))
app.use("/", express.static(__dirname + '/public'));


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
