const Post = require("../model/Post");
const mongoose = require("mongoose");
const User = require("../model/User");
const bcrypt = require("bcrypt");

//Register --POST
const newRegister = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await User.create({ username, password: hashedPassword });
            res.status(201).json({ message: "User Created", user });
        } catch (error) {
            if (error.code === 11000) {
                res.status(409).json({ message: "User already in use" });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    } catch (error) {
        console.log(error);
    }
}

//Check login --POST
const checkLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({ message: "Invalid credentials" });
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });
        const token = jwt.sign({ id: user._id }, jwtSecret);
        res.cookie("token", token, { httpOnly: true });
    } catch (error) {
        console.log(error);
    }
}

//Data for dashboard--GET
const loadData = async (req, res) => {
    try {
        const locals = {
            title: "Dashboard"
        };

        const data = await Post.find();
        res.json({
            data, locals
        })
    } catch (error) {
        console.log(error);
    }
}

//Create a new post--POST
const createPost = async (req, res) => {
    try {
        try {
            const newPost = new Post({
                title: req.body.title,
                body: req.body.body,
            });

            await Post.create(newPost);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}

//Edit a Post--PUT
const editPost = async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            body: req.body.body,
            updatedAt: Date.now(),
        });
    } catch (error) {
        console.log(error);
    }
}

//Delete a Post--POST
const deletePost = async (req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    newRegister,
    checkLogin,
    loadData,
    createPost,
    editPost,
    deletePost
}