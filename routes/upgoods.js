var express = require('express');
var router = express.Router();
//引入mongod
const db = require('../blis/mongod');

// /* GET home page. */
router.get('/up', function (req, res, next) {
    //设置跨域
    // res.header('Access-Control-Allow-Origin','*');
    //
    (async () => {
        let data = await db.insert('upgoods',[
            req.query
        ]);
        console.log(data);
        res.send('上传成功')
    })();
});

module.exports = router;