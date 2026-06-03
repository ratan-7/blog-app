const User = require('../models/User')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            message: "user not fetching"
        });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                messsage: "user not found"
            })
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            message: "user not fetching"
        });
    }
}


const createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(401).json({
            message: "error creating user"
        });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}


