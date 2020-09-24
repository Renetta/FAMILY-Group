var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');

const MemberRoute = require('./dbSchema/memberAPI');

//database creation
var url = "mongodb://127.0.0.1/FamilyGroup";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
const familydb = mongoose.connection;
familydb.on('error', (err) => {
	console.log(err);
});

familydb.once('open', () => {
	console.log("Datsbase connection established");
});

// familydb.collections['Member'].drop( function(err) {
//     console.log('collection dropped');
// });

var app = express()  
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({extended:true}));  
app.use('/uploads', express.static('uploads'));

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

// //Define a schema
// var Schema = mongoose.Schema;
// // console.log('schema:-----' + Schema);
// // console.log('db------' + familydb);


// var memberSchema = new Schema({
// 	fname: {type: String},
// 	lname: {type: String},
// 	phone: {type: Number},
// 	email: {type: String}
// }, {versionKey: false});

// // console.log('memberSchema---' + memberSchema);

// var memberModel = mongoose.model('Members', memberSchema);  
// // console.log('model-----' + model);

// app.get("/api/getMembers",function(req,res){  
// 	memberModel.find({},function(err,data){  

// 		if(err){  
// 			res.send(err);  
// 		}  
// 		else{                
// 			res.send(data);  
// 		}  
// 	});  
// })  

// app.post("/api/saveMembers", function(req, res) {
// 	console.log(req);
// 	var member = new memberModel(req.body);
// 	member.save(function(err, data) {
// 		console.log('err', err);
// 		console.log("************************************************");
// 		console.log('data-----------------------------------:', data);
// 		if(err) {
// 			res.send(err);
// 		}
// 		else {
// 			res.send(req.body);
// 		}
// 	})
// })

const PORT = process.env.PORT || 8080
app.listen(PORT, function () {  
	console.log('Example app listening on port!' + PORT);  
});


app.use('/api/member', MemberRoute);
