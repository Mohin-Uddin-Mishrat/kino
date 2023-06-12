const express = require('express');
const { isAuthenticated } = require('../middlewere/auth');
const { createOrder } = require('../controller/OrderController');
const router = express.Router();
router.route("/createOrder").post(isAuthenticated,createOrder);
router.route("/si").post(isAuthenticated,createOrder);

module.exports =router;