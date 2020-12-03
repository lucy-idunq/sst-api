// const response = require('../config/response')

// module.exports.ErrorMiddleware = (err, req, res, next) => {

//     if (err) {
//         console.log(err, "::middleware-err");
//         return res.status(err.status).send(response({
//             success: false,
//             error: err.error,
//         })
//         )
//     } else {
//         next();
//     }

// }