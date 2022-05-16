const express = require('express')
const router = require('./routes')
const Cors = require('cors')

const app = express()
app.use(express.json())

app.use(Cors)
app.use(router)


app.all("*", function (req, res, next) {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
   res.setHeader("Access-Control-Allow-Credentials", true); 
   next();
});


app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to Super Blog's API"})
})

app.use((err, req, res, next) => {
    res.status(parseInt(400)).json(err.detail)
})

app.listen(8080, () => console.log('server is running on port 8080'))