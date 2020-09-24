const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var memberSchema = new Schema({
	fname: {
		type: String
	}, 
	lname: {
		type: String
	},
	phone: {
		type: Number
	},
	email: {
		type: String
	},
	avatar: {
		type: String
	}
}, {
	timeStamps: true
});

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;
