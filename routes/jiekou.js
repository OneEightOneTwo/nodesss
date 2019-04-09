
var express = require('express');
var router = express.Router();
let db = require('../blis/node-js.js');
router.get('/set', function (req, res, next) {
    //设置跨域
    res.header('Access-Control-Allow-Origin', '*');
    (async () => {
        let data = await db.find('fruit');
        // console.log(data, 665);
        res.send(data)
    })();
})
router.get('/set2', function (req, res, next) {
    //设置跨域
    res.header('Access-Control-Allow-Origin', '*');
    (async () => {
        let data = await db.find('meat');
        // console.log(data, 665);
        res.send(data)
    })();
})
router.get('/set3', function (req, res, next) {
    //设置跨域
    res.header('Access-Control-Allow-Origin', '*');
    (async () => {
        let data = await db.find('cai');
        // console.log(data, 665);
        res.send(data)
    })();
})
// 删除
router.get('/del', function (req, res, next) {
    //设置跨域
    res.header('Access-Control-Allow-Origin', '*');
    (async () => {
        let data = await db.find('cai');
        // console.log(data, 665);
        res.send(data)
    })();
})


module.exports = router;






