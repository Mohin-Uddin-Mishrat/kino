const catchAsyncError = require("../middlewere/catchAsyncError");
const ErrorHandeler = require("../middlewere/errorHandelr");
const User = require("../models/userModels");
const { SendEmail } = require("../utils/sendEmail");
const sendTokEN = require("../utils/sendToken");

exports.createUser = catchAsyncError(async (req, res, next) => {
    const { name, password, email, role } = req.body;
    const userCreate = await User.create({
        name,
        password,
        email,
        image: {
            url: "this is url",
            publicId: "this is public id"
        },
        role
    })

    sendTokEN(userCreate, 201, res)
})
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { password, email } = req.body;
    if (!email || !password) {
        return next(new ErrorHandeler("Please enter email and password", 400))
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandeler("Invalid email and password", 401))
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandeler("You entered invalid password", 400))

    }




    sendTokEN(user, 201, res)
})

exports.logout = catchAsyncError(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(201).json({
        message: " logged out "
    })
})
exports.forgetPassword = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!email) {
        return next(new ErrorHandeler("User not found"));
    }
    const resetToken = user.getResetToken();
    const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
    )}/password/reset/${resetToken}`;
    console.log(resetPasswordUrl);

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it`

    try {

        await SendEmail({
            email: user.email,
            subject: "Reset password",
            message
        })


    } catch (error) {
        user.resePasswordToken = undefined;
        user.resetExpiredate = undefined;
        return next(new ErrorHandeler(error.message, 500))
    }
})

exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })

})
exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    console.log(req.body.newPassword, req.body.confirmPassword)

    if (!isPasswordMatched) {
        return next(new ErrorHandeler("you entered wrong old password", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandeler("newPassword and confirmPassword dosent matched", 400));

    }

    user.password = req.body.newPassword;

    const usr = await user.save();

    res.status(200).json({
        success: true,
        user
    })

})


exports.updateProfile = catchAsyncError(async (req, res, next) => {

    const update = await User.findByIdAndUpdate(req.user.id, {
        name: req.body.name,
        email: req.body.email
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })



    res.status(200).json({
        success: true,
        update
    })

})
exports.getAllUser = catchAsyncError(async (req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })

})
exports.getSingleUser = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        return next(
            new ErrorHandeler(`User does not exist with Id: ${req.params.id}`)
        );
    }

    res.status(200).json({
        success: true,
        user
    })

})
exports.updateUser = catchAsyncError(async (req, res, next) => {

    const user = await User.findByIdAndUpdate(req.params.id, { role: req.body.role }, {
        new: true, runValidators: true, useFindAndModify: false
    });


    console.log(req.body.role);



    res.status(200).json({
        success: true,
        user
    })

})
exports.deleteUser = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.params.id);


    if (!user) {
        return next(
            new ErrorHandeler(`User does not exist with Id: ${req.params.id}`)
        );
    }



    await User.findByIdAndRemove(req.params.id)
    res.status(200).json({
        success: true,
        messege: "user deleted successfully"
    })

})



