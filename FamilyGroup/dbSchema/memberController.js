const path = require('path');
const multer = require('multer');
const Member = require('./member');

//show the list of members
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function(req, file, cb) {
		console.log('***************************');
		console.log(file);
		let ext = path.extname(file.originalname);
		cb(null, Date.now + ext)
	}
});

const uploads = multer({
	storage: storage,
	fileFilter: function(req, file, callback) {
		if(file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
			callback(null, true);
		} else {
			callback(null, false);
		}
	},
	limits: {
		fileSize: 1024 * 1024 * 2
	}
})

const index = (req, res, next) => {
	Member.find()
	.then(response => {
		res.json({
			response
		});
	})
	.catch(error => {
		res.json({
			message: "An error occurred"
		});
	})
}

//find the member with ID
const show = (req, res, next) => {
	let memberID = req.body.memberID;
	Member.findById(memberID)
	.then(response => {
		res.json({
			response
		});
	})
	.catch(error => {
		res.json({
			message: 'An error occurred'
		});
	})
}

//ADD A NEW MEMBER
const save = (req, res, next) => {
	let data = req.body;
	let member = new Member({
		fname: data.fname,
		lname: data.lname,
		phone: data.phone,
		email: data.email
	});

	member.save()
	.then(response => {
		res.json({
			message: "A Member Added Successfully"
		});
	})
	.catch(error => {
		res.json({
			message: "An error occurred" 
		})
	})

}

// UPDATE THE MEMBER BY ID
const update = (req, res, next) => {
	let data = req.body;
	let memberID = data.memberID;
	let updatedData = data;

	Member.findByIdAndUpdate(updatedData)
	.then(() => {
		res.json({
			message: "Member Updated successfully"
		});
	})
	.catch(error => {
		res.json({
			message:" An error occurred"
		});
	})
}

// DELETE THE MEMBER BY ID
const destroy = (req, res, next) =>{
	let memberID = req.body.memberID;
	Member.findOneAndRemove(memberID)
	.then(() =>{
		res.json({
			message: "A member deleted Successfully"
		})
	})
	.catch(error =>{
		res.json({
			message: "An error occurred"
		})
	})
}

module.exports = {
	index, show, save, update, destroy, uploads
}