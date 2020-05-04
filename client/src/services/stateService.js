// Make a request to the route of the server (routes/states.js)

import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/states/').then( response => {
            return response.data
        })
    },
    // Function that sends a PATCH request to the server-->(states.js)
    setVisited(stateName, visited){
        return axios.patch('/api/state/'+ stateName, { visited: visited }).then(response =>{
            return response.data
        })
    },
    // make request to ew API route
    // use stateName to build the URL to request
    getOne(stateName) {
        return axios.get('/api/states/' + stateName).then( response => {
            return response.data
        })
    }
}