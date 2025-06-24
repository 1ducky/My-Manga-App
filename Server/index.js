require('dotenv').config()

const express= require('express')
const app = express()
const Port = process.env.Port

app.listen(Port, () => {
    console.log(`Server Running at Port:${Port}`)
})