// import the Sequelize constructor from the library
const Sequelize = require('sequelize')

require('dotenv').config()

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.sometext3, process.env.sometext2, process.env.sometext1, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
})

module.exports = sequelize