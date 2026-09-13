const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const qbRoutes = require('./routes/users')
const objectsRoutes = require('./routes/objects')

const app = express() //создание приложения

app.use(cors())
app.use(bodyParser.json())
app.use('/api', qbRoutes)
app.use('/api', objectsRoutes)

app.listen(4000)
