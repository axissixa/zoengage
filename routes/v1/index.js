const express = require('express');
const router = express.Router();

const zomatoController = require('../../controllers/zomatoController')
const initController = require('../../controllers/initController')

router.get('/addCategories', initController.addCategories);
router.get('/addEstablishments' , initController.addEstablishments);
router.get('/addCuisines' , initController.addCuisines);
router.get('/searchRestaurants', zomatoController.searchRests);
router.get('/getlocation', zomatoController.getLocation)
router.get('/getRestaurant', zomatoController.getRestaurant);
router.get('/getReviews', );
router.post('/postReview', )

module.exports = router;