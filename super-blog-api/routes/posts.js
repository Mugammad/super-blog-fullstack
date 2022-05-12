const express = require('express')
const PostController = require('../controllers/posts')
const authJwt = require('../middleware/auth')

const router = express.Router()

router.post('/blogs', authJwt, PostController.postBLog)
router.delete('/blogs/:id', authJwt, PostController.deleteBlog)
router.get('/blogs', authJwt, PostController.getBlogs)

module.exports = router