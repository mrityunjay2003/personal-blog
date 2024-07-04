const express = require("express");
const router = express.Router();
const { getPost, getOnePost, searchResults } = require("../controllers/mainController");


//routes

//fetch posts for homepage--GET
router.get("/posts", getPost);

//request for the post:id--GET-
router.get("/post/:id", getOnePost);

//request for searchTerm--POST
router.post("/search", searchResults);


module.exports = router;

