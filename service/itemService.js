
const dao = require('../dao/sstdb')

module.exports.getItemListService = () => {
     return dao.getItemListdb()
}
module.exports.getItemByIdService = (id) => {
     return dao.getItemByIDdb(id)
}

module.exports.postNewItemService = (bodyData, file, callback) => {
     const item_name = bodyData.item_name
     const image = file.originalname
     const packaging = bodyData.packaging
     const price = bodyData.price
     const description = bodyData.description
     const created_by = bodyData.created_by
     const modified_by = bodyData.modified_by
     dao.postNewItemdb(item_name, image, packaging, price, description, created_by, modified_by)
          .then(data => {
               if (data[0].affectedRows === 1) {
                    const id = data[0].insertId
                    return dao.getItemByIDdb(id)
                         .then(data => {
                              return callback(null, data)
                         })
                         .catch(err => {
                              return callback(err, null);
                         })
               }

          })
          .catch(error => {
               callback(error, null);
          })
}

module.exports.updateItemService = (id, bodyData, file, callback) => {
     const item_name = bodyData.item_name
     const image = file === undefined ? '' : file.originalname
     const packaging = bodyData.packaging
     const price = bodyData.price
     const description = bodyData.description
     const created_by = bodyData.created_by
     const modified_by = bodyData.modified_by
     dao.updateItemdb(id, item_name, image, packaging, price, description, created_by, modified_by)
          .then(data => {
               if (data.length > 0) {
                    return dao.getItemByIDdb(id)
                         .then(data => {
                              return callback(null, data)
                         })
                         .catch(err => {
                              return callback(err, null)
                         })
               }
               return null;
          })
          .catch(err => {
               return callback(err, null)
          })
}

module.exports.removeItemService = (id) => {
     return dao.removeItemdb(id)
}