const express = require("express");
const router = express.Router();

const {
  handleregister,
  handleauthenticate,
  handlelogin,
  handleuserName,
  handlegenerateOTP,
  handleverifyOTP,
  handlecreateResetSession,
  handleupdateUser,
  handleupdatePassword,
} = require("../controllers/userController.js");

const { auth } = require("../middleware/auth.js");
const registermail = require("../controllers/mail.js");

router.post("/register", handleregister);

router.post("/sendmail", registermail);

router.post("/authenticate", handleauthenticate);

router.post("/login", handlelogin);

router.get("/user/:username",auth, handleuserName);

router.get("/generateotp", auth, handlegenerateOTP);

router.get("/verifyotp", handleverifyOTP);

router.get("/createResetSession", handlecreateResetSession);
router.put("/updateuser/:id", auth, handleupdateUser);

router.put("/resetPassword", auth, handleupdatePassword);

module.exports = router;
