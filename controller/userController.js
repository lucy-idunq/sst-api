// const dao = require("../dao/sstdb");
// const response = require("../cofig/response");

module.exports.getUserData = (req, res,next) => {
    res.send('hello')
    // try{
    //     dao.getUserData()
    //        .then((data) => {
    //         return res.status(200).json(
    //         response({
    //           payload: data[0],
    //           message: "user data get successfully",
    //         })
    //       );
    //     })
    //     .catch((err)=>{
    //         return next({  status:400, error:err  });
    //     })
    // }catch(error){
    //     return next({ status:500,  error:error  });
    // }
};
