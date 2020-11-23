const mysql = require('mysql2');

const con = mysql.createPool({
    host: "localhost",
    user: "lucy",
    password: "root",
    database: "mydb",
  })

// module.exports.getUserData = ()=>{
//     const query ='SELECT * FROM user_tbl where status=1'
//     return con.promise().query(query);
// }