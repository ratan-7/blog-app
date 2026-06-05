const express = require('express');
const router = express.Router();
const { signin, signup } = require("../controllers/authController")
const { verifyToken, isAdmin } = require("../middlewares/authMiddleware")

router.post("/signup", signup);
router.post("/login", signin);

router.get("/admin", verifyToken, isAdmin);
router.get("/user", verifyToken, (req, res) => {
    res.status(200).json({
        message: "Welcome to user Dashboard!"
    })
})
module.exports = router;