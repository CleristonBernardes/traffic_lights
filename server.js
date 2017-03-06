var express 		= require("express");
var bodyParser 	= require("body-parser");
// var global 			= require("global_variables");
var traffic_c 	= require("./controller/traffic");
// var fs 					= require("fs");


var app = express();
app.use(bodyParser.json());
app.use(function(err, req, res, next) {
	var erro = {"error": "Could not decode request: JSON parsing failed"};
	handleResponse(res, 400, erro);
})

app.get('/', function (req, res) {
	fs.readFile( global.data_path + "payload.json", 'utf8', function (err, data) {
	   handleResponse(res, 200, data);
	});
})

app.get('/traffic', function (req, res) {
	traffic_c.switch_light(req.query, function (err, traffic) {
		if err
			return handleResponse(res, 400, err);
		handleResponse(res, 200, traffic);
	});
})

// app.post('/filteredData', function (req, res) {
// 	var result = business.filterFullPayLoad(req.body);
// 	console.log(result.exchange);
// 	handleResponse(res, result.status, result.exchange);
// })
//
// app.post('/', function (req, res) {
// 	var result = business.filterFullPayLoad(req.body);
// 	console.log(result.exchange);
// 	handleResponse(res, result.status, result.exchange);
// })


var server = app.listen(process.env.PORT || 8081, function () {
  console.log("Service running 8081....");
})


function handleResponse(res, code, exchange) {
  res.status(code || 500).json(exchange);
}
