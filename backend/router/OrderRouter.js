const express = require('express');
const { isAuthenticated, authorizeRole } = require('../middlewere/auth');
const { createOrder, getSingleOrder, MyOrders, getAllOrders, updateOrder, dleteOrder } = require('../controller/OrderController');
const router = express.Router();
router.route("/createOrder").post(isAuthenticated,createOrder);
router.route("/order/:id").get(isAuthenticated,getSingleOrder);
router.route("/orders/me").get(isAuthenticated,MyOrders);
router.route("/admin/orders").get(isAuthenticated,authorizeRole,getAllOrders);
router.route("/admin/order/:id")
        .put(isAuthenticated ,authorizeRole,updateOrder)
        .delete(isAuthenticated ,authorizeRole,dleteOrder);


module.exports =router;