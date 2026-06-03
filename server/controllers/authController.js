const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

//signup 
exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name, email, password: hashPassword, role
        });
        await user.save();
        res.status(200).json({
            message: "User registered successfully!", user
        })
        console.log(user);
    } catch (err) {
        res.status(500).json({
            message: "error register user", error: err.message
        })
    }
};


// signin/login
exports.signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.API_SECRET, { expiresIn: '7d' });
        res.status(200).json({
            accessToken: token, message: "User login successfully"
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}
