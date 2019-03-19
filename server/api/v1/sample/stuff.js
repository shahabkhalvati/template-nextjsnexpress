const path = require('path')
const routes = require('express').Router()

routes.use('/echo', (req, res) => {
  res.status(200).json({
    message: 'connected',
    body: req.body,
    method: req.method
  })
})

module.exports = routes
