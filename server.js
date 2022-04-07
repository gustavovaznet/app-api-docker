//SERVER

//VARIABLES
var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var port = 8080;

//PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  	extended: true
}));

//CONFIG
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});

//GET - INDEX
app.get('/',function(req,res){
	var data = {
		"Data":"",
		"Ver" : "1.0",
	};
	data["Data"] = "API de Serviços do Jon - retorno em JSON";
	res.json(data);
	console.log(data);
});


//GET - HTML 
app.get('/html',function(req,res){
	
	var body = '<html>'
				+'	<head>'
				+'	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>'
				+'	</head>'
				+'	<body>'
				+'		<h1>API</h1>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	</body>'
				+'	</html>';

	console.log(body);
	res.writeHead(200,{"Content-Type" : "text/html"});
	res.write(body);
	res.end();
});

//PORT
app.listen(port,function(){
	console.log("Connected via PORT 8080");
});
