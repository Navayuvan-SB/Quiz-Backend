// Import statements
const router = require("express").Router();
const {
  registerController,
  loginController,
  updateUserController,
  changePasswordController,
  deleteUserController,
  isUserController,
  isAdminController,
} = require("./controller");
const jwtVerification = require("../../services/jwtVerification");

// Register an user
router.post("/register", registerController);

// Login user
router.post("/login", loginController);

// Check if a user is 'user'
router.get("/is-user", jwtVerification, isUserController);

// Check if a user is 'admin'
router.get("/is-admin", jwtVerification, isAdminController);

// Update an user
router.patch("/", jwtVerification, updateUserController);

// Change Password
router.patch("/change-password", jwtVerification, changePasswordController);

// Delete an user
router.delete("/", jwtVerification, deleteUserController);

// Exports
module.exports = router;
