// Serve the Vue app
// As API server, for the Vue app to make requests 
// API server will accept requests for a list of states
// Req for info of each state
// Request to change the visited status attribute of a state
// THIS IS A SERVER ROUTE

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

// PATCH request - to update
// :name parameter in the route path to match any patch request 
router.patch('/state/:name', function(req,res,next){
    // Update DB
    // By using name paramaeter
    // update req.bosy.visited value - define on State.vue id
    // Vue app will send this data with this request
    States.update({ visited: req.body.visited }, { where: { 
        name: req.params.name 
        }
    })
    .then( rows => {
        if (rows){
            return res.send('ok')

        }else {
            // if there is no rows modified, the state is not in the DB
            return res.status(404).send()
        }
    })
    // to catch unexpected error
    .catch( err => next(err) )
})
// Create a new route to handle the requests to `/states/:name`
router.get('/states/:name', function( req,res,next ){
    // req.params to query the database
    States.findOne({where: {name: req.params.name }})
        .then(state => {
            if (state) {
                return res.json(state)

            }else {
                // if the stat not in DB
                return res.status(404).send()
            }

        })
        .catch (err => next(err) )
})



module.exports = router