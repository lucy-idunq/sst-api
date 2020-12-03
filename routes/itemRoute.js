const express = require('express');
const { upload } = require('../middleware/uploadMiddleware');
const { getItemList, getItemById, postNewItem,updateItem, removeItem } = require('../controller/itemController');

const router = express.Router();

router.use(upload('itemImage'));

// http://localhost:8800/api/v1/items

router.get('/', getItemList);
router.get('/:id', getItemById)

router.post('/', postNewItem)

router.put('/:id', updateItem)

router.patch('/:id', removeItem)


module.exports = router;