var express = require('express');
var router = express.Router();
//引入mongod
const db = require('../blis/mongod');

// /* GET home page. */
router.get('/set', function (req, res, next) {
    //设置跨域
    // res.header('Access-Control-Allow-Origin','*');
    //
    (async () => {
        let data = await db.find('Ssd',{});
        // console.log(data);
        res.send(data)
    })();
});

module.exports = router;

