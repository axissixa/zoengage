const express = require('express');
const router = express.Router();

const searchController = require('../../controllers/searchController')

router.get('/addCategories', searchController.addCategories);
router.get('/addEstablishments' , searchController.addEstablishments);
router.get('/addCuisines' , searchController.addCuisines);

module.exports = router;