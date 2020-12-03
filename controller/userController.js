const dao = require("../dao/sstdb");
// const response = require('../config/response')

 const {registerService} = require('../service/userService')

module.exports.postNewRegisterUser = (req, res, next) => {
    // return  res.send('hello')
     return registerService()
    // const bodyData = req.body
    // try {
    //     dao.postNewRegisterUser(bodyData)
    //         .then((data) => {
    //             return res.status(201).json(
    //                 response({
    //                     payload: data[0],
    //                     message: "user data get successfully",
    //                 })
    //             );
    //         })
    //         .catch((err) => {
    //             return next({ status: 400, error: err });
    //         })
    // } catch (error) {
    //     return next({ status: 500, error: error });
    // }
};
