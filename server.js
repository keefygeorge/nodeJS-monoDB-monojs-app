console.log("loading server socket");
// Use npm install connect
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080);



var data, ws;
// Use npm install ws
var WebSocketServer = require('ws').Server,
	db = require('db');
	
ws = new WebSocketServer({port: 8081});
console.log("Server started on localhost port 8081");
ws.on('connection', function(ws) {
	connectDB();
	console.log("Client connected to server");
	
	ws.on('message', function(message) {
		console.log('received: %s', message);
		var msg = JSON.parse(message);
		
		var n = db.users.find({name: msg.name},{name:1,_id:0}, function(err,users){
			ws.send(JSON.stringify(n));
			if( err || !users) console.log("No account found please register");
			else users.forEach( function(user) {
				console.log(user);
			});
		});	
	});
});

