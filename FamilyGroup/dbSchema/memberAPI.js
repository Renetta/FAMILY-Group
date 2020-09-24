const express = require('express')
const router = express.Router()

const MemberController = require('./memberController')

router.get('/', MemberController.index)
router.post('/show', MemberController.show)
router.post('/store', MemberController.uploads.single('avatar'), MemberController.save)
router.post('/update', MemberController.update)
router.post('/delete', MemberController.destroy)

module.exports = router;
