const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { checkLogin, loadData, createPost, newRegister, deletePost, editPost } = require("../controllers/adminController");

const jwtSecret = process.env.JWT_SECRET;

//authentication middleware
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

router.post("/register", newRegister);

router.post("/login", checkLogin);

router.get("/dashboard", authMiddleware, loadData);

router.post("/add-post", authMiddleware, createPost);

router.put("/edit-post/:id", authMiddleware, editPost);

router.delete("/delete-post/:id", authMiddleware, deletePost);

//Logout--GET
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: 'Logout successful.' });
});

module.exports = router;
