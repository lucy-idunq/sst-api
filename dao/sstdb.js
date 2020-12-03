const mysql = require('mysql2');

const con = mysql.createPool({
  host: "localhost",
  user: "lucy",
  password: "root",
  database: "sst_database",
})

module.exports.login = (name) => {
  const query = `SELECT * FROM  user_tbl WHERE name='${name}'`
  return con.promise().query(query);
}

// module.exports.postNewRegisterUser = (bodyData) => {
//   const query = `INSERT INTO user_tbl(name,phone,address,mail,photo,created_date,modified_date,active,password) VALUES ('bodyData.name','bodyData.phone','bodyData.address','bodyData.mail','bodyData.photo','bodyData.created_date','bodyData.modified_date','bodyData.active','bodyData.password')`
//   return con.promise().query(query);
// }

module.exports.getItemListdb = () => {
  const query = `SELECT * FROM tbl_items WHERE is_active=1`
  return con.promise().query(query);
}

module.exports.getItemByIDdb = (id) => {
  const query = `SELECT * FROM tbl_items WHERE id=${id}`
  return con.promise().query(query);
}

module.exports.postNewItemdb = (item_name, image, packaging, price, description, created_by, modified_by) => {
  const query = `INSERT INTO tbl_items(item_name,image,packaging,price,description,created_by,modified_by)
  VALUES('${item_name}','${image}' ,'${packaging}','${price}','${description}',${created_by} ,${modified_by})`
  return con.promise().query(query);
}

module.exports.updateItemdb = (id, item_name, image, packaging, price, description, created_by, modified_by) => {
  const query = `UPDATE tbl_items SET item_name='${item_name}',image='${image}',packaging='${packaging}',price='${price}',description='${description}',created_by=${created_by},modified_by=${modified_by}`
  return con.promise().query(query)
}

module.exports.removeItemdb = (id) => {
  const query = `UPDATE tbl_items SET is_active=0 WHERE id=${id}`
  return con.promise().query(query)
}