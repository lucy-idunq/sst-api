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

module.exports.login = (name)=>{
  const query=`SELECT * FROM  user_tbl WHERE name='${name}'`
  return con.promise().query(query);
}