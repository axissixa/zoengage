const express = require('express');
const router = express.Router();

const v1 = require('./v1/index');

const tryarr = [
    {'a': "hello"},
    {'a': "hello"},
    {'a': "hello"},
    {'a': "hello"},
    {'a': "hello"},
    {'a': "hello"},
]
router.get('/', (req,res)=> {
    res.render("layout"),{
        categories: tryarr
    }
    //res.send({"status":"Application is working normally"});
})

// If the APIs are being updated to another version, its easier
// to keep them in difrerent folders
router.use('/v1',v1);

module.exports = router;