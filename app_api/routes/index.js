require('../models/db');
const express = require('express'); //Express app
const router = express.Router(); //Router Logix
const jwt = require("express-jwt");

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"]
});

//This is where we import the controllers we will route
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');


router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);    

//define route for our trips endpoint
router 
    .route('/trips')
    .get(tripsController.tripsList) //GET method routes TripList
    .post(auth, tripsController.tripsAddTrip);



//GET Method routes tripsFindbyCode - reuqires parameter
router 
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

//router.route('/trips/:tripCode').get(tripsController.tripsFindCode);    

module.exports = router;