const express = require('express')
const userRouter = require('./routes/user')
const postRouter = require('./routes/posts')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(userRouter)
app.use(postRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to Super Blog's API"})
})

app.use((err, req, res, next) => {
    res.status(400).json(err)
})

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`))