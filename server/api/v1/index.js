const routes = require('express').Router()

routes.use('/sample', require('./sample'))

module.exports = routes
