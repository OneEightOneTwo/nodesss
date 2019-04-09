var express = require('express');
var router = express.Router();
//引入mongod
const db = require('../blis/mongod');
// /* GET home page. */
router.get('/odf', function (req, res, next) {
    //设置跨域
    // res.header('Access-Control-Allow-Origin','*');
    (async () => {
        let data = await db.find('order_form');
        let json = {
            code: 0,
            msg: '',
            count: data.length,
            data: data
        }
        res.send(json)
    })();
});
// id搜索渲染
router.get('/odfin', function (req, res, next) {
    //设置跨域
    // res.header('Access-Control-Allow-Origin','*');

    let id = req.url.split('=')[1];
    (async () => {
        let data = await db.find('order_form', {
            "id": id * 1
        });
        res.send(data)
        console.log(id)
    })();
});
module.exports = router;