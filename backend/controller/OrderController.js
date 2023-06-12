const catchAsyncError = require("../middlewere/catchAsyncError");
const errorHandeler = require("../middlewere/errorHandelr");
const Order = require("../models/oderModels");
const Productmodel = require("../models/porductModel");

exports.createOrder = catchAsyncError(async (req, res, next) => {
    const {
        shipingInfo,
        shippingPrice,
        orderItems,
        itemsPrice,
        texPrice,
        paymentInfo,
        totalPrice,
    } = req.body;

    const order = await Order.create({
        shipingInfo,
        shippingPrice,
        orderItems,
        itemsPrice,
        texPrice,
        paymentInfo,
        paidAt: Date.now(),
        totalPrice,
        user: req.user.id

    })

    res.status(200).json({
        success: true,
        order
    })

})

exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
    const singleOrder = await Order.findById(req.params.id).populate("user", "name email");
    if (!singleOrder) {
        return next(new errorHandeler("product not found with this id", 404))
    }

    res.status(200).json({
        success: true,

    })
})
exports.MyOrders = catchAsyncError(async (req, res, next) => {
    const Orders = await Order.findById({ user: req.user._id });
    if (!singleOrder) {
        return next(new errorHandeler("product not found with this id", 404))
    }

    res.status(200).json({
        success: true,
        Orders

    })
})

exports.getAllOrders = catchAsyncError(async (req, res, next) => {
    const AllOrders = await Order.find();
    let totalAmount = 0;
    AllOrders.forEach(ord => totalAmount = totalAmount + ord.totalPrice);

    res.status(200).json({
        success: true,
        AllOrders,
        totalAmount

    })
})


const updateStock = async (id, quantity) => {
    const product = await Productmodel.findById(id);
    product.stock -= quantity;

    await product.save({ validateBeforeSave: true })
}
exports.updateOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return next(new errorHandeler("Order not found with this id", 404))
    }

    if (order.orderStatus === "delivered") {
        return next(new errorHandeler("YoU have already delivered this order", 404));
    }

    if (order.orderStatus === "shipped") {
        order.orderItems.forEach(async (ord) => { await updateStock(ord.product, ord.quantity) })

    }
    if (req.body.orderStatus === "delivered") {
        order.deliveredAt = Date.now();
    }

    order.orderStatus = req.body.status
    await order.save();

    res.status(200).json({
        success: true,
        order
    })
})

module.exports.dleteOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new errorHandeler("Order not found with this Id", 404));
    }
    const delet = await Order.findByIdAndRemove(req.params.id)
    res.status(200).json({
        success:true
})
})