// Serve the Vue app
// As API server, for the Vue app to make requests 
// API server will accept requests for a list of states
// Req for info of each state
// Request to change the visited status attribute of a state

var express = require('express')
var States = require('../models').States

var router = express.Router()

//Get all of the states and respond with data in JSON
router.get('/states', function(req, res, next){
    States.findAll({order: ['name']})
        .then( states => {
            return res.json(states)
        })
        .catch( err => next.err() )
})

module.exports = router