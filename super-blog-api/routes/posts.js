const express = require('express')
const PostController = require('../controllers/posts')
const authJwt = require('../middleware/auth')

const router = express.Router()

router.post('/blogs', authJwt, PostController.postBLog)
router.post('/blogs/like', authJwt, PostController.likeBlog)
router.delete('/blogs/:id', authJwt, PostController.deleteBlog)
router.get('/blogs', PostController.getBlogs)

module.exports = router