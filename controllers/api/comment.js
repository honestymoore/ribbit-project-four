const Comment = require('../../models/comment')
const Post = require('../../models/post')

function createComment(req, res, next){
    const comment = req.body
    post.owner = req.user._id
    Post.create(post)
    .then((comment) => {
        res.status(201).json({comment: comment})
    })
     .catch(next)
}

function indexComment (req, res, next){
    Post.find({})
        .populate('owner')
        .then((comments) => {
            return comments.map((comments) => comments)
        })
        .then((comments) => {
            return res.status(200).json({ comments: comments })
        })
        .catch(next)
}

module.exports = {
    createComment,
    indexComment
}