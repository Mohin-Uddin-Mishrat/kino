const express = require('express');
const { createUser, loginUser, logout, forgetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUser, deleteUser } = require('../controller/usercontroller');
const { isAuthenticated, authorizeRole } = require('../middlewere/auth');
const router= express.Router();

router.route("/createUser").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/forgetPassword").post(forgetPassword);
router.route("/me").get(isAuthenticated,getUserDetails);
router.route("/updPswd").put(isAuthenticated,updatePassword);
router.route("/me/update").put(isAuthenticated,updateProfile);
router.route("/admin/users").get(isAuthenticated,authorizeRole,getAllUser);
router.route("/admin/user/:id")
       .get(isAuthenticated,authorizeRole,getSingleUser)
       .put(isAuthenticated,authorizeRole,updateUser)
       .delete(isAuthenticated,authorizeRole,deleteUser)
       

module.exports= router
