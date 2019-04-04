const express = require('express');
const router = express.Router();

const zomatoController = require('../../controllers/zomatoController')
const initController = require('../../controllers/initController')
const reviewController = require('../../controllers/reviewController')

router.get('/addCategories', initController.addCategories);
router.get('/addEstablishments' , initController.addEstablishments);
router.get('/addCuisines' , initController.addCuisines);
router.get('/searchRestaurants', zomatoController.searchRests);
router.get('/getlocation', zomatoController.getLocation)
router.get('/getRestaurant', zomatoController.getRestaurant);
router.get('/Reviews', reviewController.getReview);
router.post('/Reviews', reviewController.addReview);

module.exports = router;