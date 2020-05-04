// Set the statesAPI routes
// Create express app

var express = require('express')
var bodyParser = require('body-parser')
var states_api = require('./routes/states.js')

var path = require('path')

var app = express()

// Serves the Vue app
app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use(bodyParser.json())

app.use('/api', states_api)

//Error handlers - for not found, and app errors
app.use(function(req,res,next){
    res.status(404).send('Not Found')
})

app.use(function (err,req,res,next) {
    console.error(err.stack)
    res.status(500).send('Server Error')
})

//Start server running

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('App Running on Port', server.address().port)
})