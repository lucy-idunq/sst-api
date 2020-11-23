const express = require('express');
const multer = require('multer');
const {getUserData,getUser,newUser,deleteUser} = require('../controller/userController')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null,'uploads')
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + "_" + file.originalname)
    }
})
const upload = multer({ storage }).single('userPhoto')

const router = express.Router();

// http://localhost:8800/user
router.get('/',getUserData);
// router.get('/:id',getUser);
// router.post('/new-user',(req,res)=> newUser(req,res,upload));
// router.patch('/:id',deleteUser)

module.exports = router;