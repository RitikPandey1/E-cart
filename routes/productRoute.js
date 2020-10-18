const express = require('express');
const { getProduct , addProduct } = require('../controller/Product');

const router = express.Router();

router.get('/:category', getProduct);
router.post("/addProduct", addProduct);

module.exports = router;