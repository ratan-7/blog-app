const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');
dotenv.config();

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('')[1];

    console.log(token);
    if (!token) {
        return res.status(401).json({
            message: "access denied .No token provided"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.API_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({
            message: "Invalid token"
        })
    }
}


//for admin 
exports.isAdmin = (admin) => (req, res, next) => {
    try {
        if (req.user.role === admin) {
            return res.status(200).json({
                message: "Welcome to admin Dashboard page!", user
            })
        }
        if (req.user.role !== admin) {
            return res.status(500).json({
                message: "access forbiden"
            })
        }
    } catch (error) {
        res.status(400).json({
            message: err.message
        })
    }
}
