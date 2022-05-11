const express = require('express')
const PostController = require('../controllers/posts')
const authJwt = require('../middleware/auth')

const router = express.Router()

router.post('/blogs', authJwt, PostController.postBLog)

module.exports = router