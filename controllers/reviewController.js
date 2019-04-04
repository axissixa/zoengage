const responseHandler = require("../handlers/responseHandler");
const reviewModel = require('../models/Review');


exports.addReview  = async (req, res) => {
    const userId = req.body.userId||"";
    if(!userId){
        return responseHandler.getResponse(200, 'cannot add review while not logged in', {}, res)
    }
    
    const restaurantId = req.body.restaurantId||"";
    if(!restaurantId){
        return responseHandler.getResponse(200, 'cannot add review without restaurantIs', {}, res)
    }

    const userRating = req.body.userRating||"";
    if(!userRating){
        return responseHandler.getResponse(200, 'cannot add review without rating', {}, res)
    }
    
    const reviewText = req.body.reviewText||null;

    const reviewObj = {
        zomatoId: restaurantId,
        userId: userId,
        userRating: userRating,
        content: reviewText
    }

    const insertData = await new reviewModel(reviewObj).save();

    return responseHandler.getResponse(200, '', insertData, res);
}

exports.getReview = async (req, res) => {
    const restaurantId = req.query.restaurantId||"";
    if(!restaurantId){
        return responseHandler.getResponse(200, 'cannot get reviews without restarantId', {}, res)
    }

    const data = await reviewModel.find({
        zomatoId: restaurantId
    })

    return responseHandler.getResponse(200, '', data, res);
}