// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + '/public'));

// app.listen(8080);

// var express = require('express');
// var app = express();
// app.get('/', function (req, res) {  
//     res.send('Hello world!');
// });
// app.listen(3000); 

var express = require('express');  
var app = express();  
var routes = require('./routes')(app);
app.listen(3000, function(){
	console.log('监听3000端口。。。')
}); 