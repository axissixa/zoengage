const responseHandler = require("../handlers/responseHandler");
const ZOMATO_API_KEY = require('../constants').ZOMATO_API_KEY;
const city_id = require('../constants').city_id;
const default_entity_type = require('../constants').entity_type;
const z = require('zomato');
const client = z.createClient({
	userKey: ZOMATO_API_KEY
});


exports.searchRests =  (req, res) => {
    const keyword = req.query.keyword||"";
    const entity_id = req.query.entity_id||city_id;
    const entity_type = req.query.entity_type||default_entity_type;
    const count = req.query.count||10
    const offset = req.query.offset||0
    const cuisines = req.query.cuisines||"";
    const establishment = req.query.establishment||"";
    const categories = req.query.categories||"";
    
    const query = {};
    if(categories){
        query.category = categories.join(",");
    }
    if(cuisines){
        query.cuisines = cuisines.join(",");
    }
    if(establishment){
        query.establishment_type = establishment.join(",");
    }
    if(keyword){
        query.q = keyword;
    }
    query.entity_id = entity_id;
    query.entity_type = entity_type;
    query.start = offset;
    query.count = count;

    console.log(query);

    client.search(query,function(err, result){
        if(!err){
            return responseHandler.getResponse(200, "", result, res);
        }else{
            return responseHandler.getResponse(200, "failed to retrieve search results", {}, res);
        }
    })
};

exports.getLocation = (req, res) => {
    const locality = req.query.locality||'bengaluru';
    client.getLocations({query:locality, count:10}, function(err, result){
        if(!err){
            let resultJson = JSON.parse(result);
            let location_suggestions = resultJson.location_suggestions.filter(data => data.city_id===city_id)
            return responseHandler.getResponse(200,"",location_suggestions,res);
        }else{
            return responseHandler.getResponse(200, "", {}, res);
        }
    })
};

exports.getRestaurant = (req, res) => {
    const restaurantId = req.query.restaurantId||"";
    if(!restaurantId){
        return responseHandler.getResponse(200,"restaurantId is mandatory",{},res);
    }
    client.getRestaurant({res_id : restaurantId}, function(err, result){
        if(!err){
            return responseHandler.getResponse(200, "", result, res);
        }else{
            console.log(err);
            return responseHandler.getResponse(200, "", {}, res);
        }
    })
}