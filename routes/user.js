var express = require('express');
var router = express.Router();

// const tokke = require('../libs/token');
const db = require('../blis/mongod');
/* GET users listing. */
//处理前端发送过来的登录信息,并且响应结果
//建议router.post跟前端ajax是要匹配的
router.post('/all', async (req, res, next) => {

    let data = await db.find('yonghu', {
    });
    // console.log(data);
    // await console.log('data');
    res.send(data);
});

//部分查询
router.post('/check', async (req, res, next) => {
    //post:req.body
    //get:req.query
    let {
        ids,
        users,
        emails
    } = req.body;
    // await console.log(ids,users,emails);
    let data = await db.find('yonghu', {
        ID: ids,
        user: users,
        email: emails
    });
    // console.log(data);
    // await console.log('data');

    if (data.length > 0) {
        res.send(data);
    } else {
        res.send('没有数据');
    }


});


router.post('/all', async (req, res, next) => {

    let data = await db.find('yonghu', {
    });
    // console.log(data);
    // await console.log('data');

    res.send(data);

});

module.exports = router;