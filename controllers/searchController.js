const responseHandler = require("../handlers/responseHandler");

exports.search = (req, res) => {
    console.log(req.query.searchBox);
    return responseHandler.getResponse(200, " ", {}, res)
}