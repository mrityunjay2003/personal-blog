const Post = require("../model/Post");

const getPost = async (req, res) => {
    try {

        let perPage = 4;
        let page = req.query.page || 1;

        const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const count = await Post.countDocuments();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);

        res.json({
            data,
            count,
            nextPage,
            hasNextPage
        })
    } catch (error) {
        console.log(error);
    }
}

const getOnePost = async (req, res) => {
    try {
        const slug = req.params.id;
        const data = await Post.findById({ _id: slug });

        res.json({
            data
        })
    } catch (error) {
        console.log(error);
    }
}

const searchResults = async (req, res) => {
    try {
        let term = req.body.term;
        const searchNoSpecialChar = term.replace(/[^a-zA-Z0-9]/g, "");

        const data = await Post.find({
            $or: [
                { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
                { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
            ],
        });
        res.json({
            data
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getPost,
    getOnePost,
    searchResults
}