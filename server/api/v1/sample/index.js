const routes = require('express').Router()

routes.use('/stuff', require('./stuff'))

module.exports = routes
