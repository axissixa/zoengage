# zoengage
zomato api calls 

the code is split into models controllers and views in their respective folders

the models for categories, establishment-types and cuisines as per zomato api are saved to the db. since these attributes will remain unchanged over long term it is easy to store and retrieve such data once a week or so.
these model files are 
/models/Category.js
/models/Establishment.js
/models/Cuisine.js

the model for reviews is made to store reviews and user ratings using the restaurantId as given on zomato aand the userId as given on our app to each logged in user.
/models/Review.js

there are two controllers. 
zomatoController is for making calls on the zomato api to retrieve restaurant data,
/controllers/zomatoController.js
reviewController is for storing the user ratings and reviews on a database with the userID and restaurantID 
/controllers/reviewController.js

the views folder has the webpages for searching and displaying restaurants as requested from the zomato api.
/views/layoout.html is a template for searching and displaying the seach results
