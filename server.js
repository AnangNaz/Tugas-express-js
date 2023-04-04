const express = require('express')
const cors = require('cors')
const port = 3700

// connecting sequelize to db mysql2
const sequelize = require('./db-config')
sequelize.sync().then(() => console.log('database ready'))

// Endpoint represent to routes/users
const userEndPoint = require('./routes/users')
const absensiEndPoint = require('./routes/absensi')

const app = express()
app.use(cors())
app.use(express.json())

// main endpoint
app.use('/users', userEndPoint)
app.use('/absensi', absensiEndPoint)

app.listen(port, () => console.log(`running server on port ${port}`))