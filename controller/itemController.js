
const response = require('../config/response')
const { getItemListService, getItemByIdService, postNewItemService, updateItemService, removeItemService } = require('../service/ItemService')

module.exports.getItemList = (req, res, next) => {
    try {
        getItemListService()
            .then((data) => {
                return res.status(200).json(
                    response({
                        payload: data[0],
                        message: "Items get successfully",
                    })
                );
            })
            .catch((err) => {
                return next({ status: 400, error: err });
            })
    } catch (error) {
        return next({ status: 500, error: error });
    }
};

module.exports.getItemById = (req, res, next) => {
    const id = req.params.id
    const bodyData = req.body
    const fileData = req.file
    try {
        getItemByIdService(id)
            .then((data) => {
                return res.status(200).json(
                    response({
                        payload: data[0],
                        message: "Items with ID get successfully",
                    })
                );
            })
            .catch((err) => {
                return next({ status: 400, error: err })
            })


    } catch (error) {
        return next({ status: 500, error })
    }
}

module.exports.postNewItem = (req, res, next) => {
    const bodyData = req.body
    const file = req.file
    try {
        postNewItemService(bodyData, file, (error, data) => {
            if (error) {
                return next({ status: 400, error: error });
            }
            return res.status(201).json(
                response({
                    payload: data[0],
                    message: "New item added successfully"
                })
            )
        })

    } catch (error) {
        return next({ status: 500, error });
    }
};

module.exports.updateItem = (req, res, next) => {
    const id = req.params.id
    const bodyData = req.body
    const file = req.file
    console.log(req.file)
    try {
        updateItemService(id, bodyData, file, (error, data) => {
            if (error) {
                return next({ status: 400, error: error });
            }
            return res.status(202).json(
                response({
                    payload: data[0],
                    message: "Items updated successfully"
                })
            )
        })
    } catch (error) {
        return next({ status: 500, error })
    }
}

module.exports.removeItem = (req, res, next) => {
    const id = req.params.id
    try {
        removeItemService(id)
            .then((data) => {
                return res.status(204).json(
                    response({
                        message: "Items remove successfully",
                    })
                );
            })
            .catch((err) => {
                return next({ status: 400, error: err })
            })
    } catch (error) {
        return next({ status: 500, error })
    }
}