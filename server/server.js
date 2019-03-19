const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const port = process.env.PORT || 3000

const app = express()
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', require('./api/v1'))

app.listen(port)
console.log('API server running on port: ' + port)
