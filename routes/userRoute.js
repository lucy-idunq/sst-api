const express = require('express');
const { upload } = require('../middleware/uploadMiddleware')
const { postNewRegisterUser } = require('../controller/userController')

const router = express.Router();

router.use(upload('userPhoto'))

// http://localhost:8800/api/v1/users

router.post('/', postNewRegisterUser);
// router.get('/:id',getUser);
// router.post('/new-user',(req,res)=> newUser(req,res,upload));
// router.patch('/:id',deleteUser)

module.exports = router;