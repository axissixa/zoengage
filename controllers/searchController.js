const responseHandler = require("../handlers/responseHandler");
const ZOMATO_API_KEY = require('../constants').ZOMATO_API_KEY;
const city_id = require('../constants').city_id;
const z = require('zomato');
const client = z.createClient({
	userKey: ZOMATO_API_KEY
});
const categoryModel = require('../models/Category');
const establishmentModel = require('../models/Establishment');
const cuisineModel = require('../models/Cuisine');



exports.addCategories =  (req, res) => {
    client.getCategories(null,async function(err, result){
        if(!err){
            let categories = [];
            let resultJson = JSON.parse(result)
            resultJson.categories.map(category => categories.push({zomatoId: category.categories.id, name: category.categories.name}));
            const insertData = await categoryModel.insertMany(categories);
            return responseHandler.getResponse(200, " ", result, res)
        }else {
          console.log(err);
          return responseHandler.getResponse(500, "err", {}, res)
        }
    });
}

exports.addEstablishments = (req, res) => {
    client.getEstablishments({city_id: city_id },async function(err, result){
        if(!err){
            let establishments = [];
            let resultJson = JSON.parse(result)
            //console.log(resultJson.establishments);
             resultJson.establishments.map(establishment => establishments.push({zomatoId: establishment.establishment.id, name: establishment.establishment.name}));
            const insertData = await establishmentModel.insertMany(establishments);
            console.log(insertData);
            return responseHandler.getResponse(200, " ", result, res)
        }else {
            console.log(err);
            return responseHandler.getResponse(500, "", {}, res)
        }
    })
}

exports.addCuisines = (req, res) => {
    client.getCuisines({city_id: city_id },async function(err, result){
        if(!err){
            let cuisines = [];
            let resultJson = JSON.parse(result)
            //console.log(resultJson.cuisines)
            resultJson.cuisines.map(cuisine => cuisines.push({zomatoId: cuisine.cuisine.cuisine_id, name: cuisine.cuisine.cuisine_name}));
            const insertData = await cuisineModel.insertMany(cuisines);
            console.log(insertData);
            return responseHandler.getResponse(200, " ", result, res)
        }else {
            console.log(err);
            return responseHandler.getResponse(500, "", {}, res)
        }
    })

}
