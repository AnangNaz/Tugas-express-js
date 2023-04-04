const {Sequelize, } = require('sequelize')

const sequelize = new Sequelize('absensi2', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize