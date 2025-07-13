const express = require('express')

const app = express()

const port = 3000


app.get("/", (req, res) => {
    res.send("you are here")
})

app.listen(port, () => {
    console.log("The server is online")
})