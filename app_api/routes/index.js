const express = require('express'); //Express app
const router = express.Router(); //Router Logix

//This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

//define route for our trips endpoint
router 
    .route('/trips')
    .get(tripsController.tripsList) //GET method routes TripList
    .post(tripsController.tripsAddTrip);



//GET Method routes tripsFindbyCode - reuqires parameter
router 
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;