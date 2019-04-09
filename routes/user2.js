var express = require('express');
var router = express.Router();

// const tokke = require('../libs/token');
const db = require('../blis/mongod.js');
/* GET users listing. */
//处理前端发送过来的登录信息,并且响应结果
//建议router.post跟前端ajax是要匹配的
router.post('/check', function (req, res, next) {
    let {
        ids,
        users,
        emails
    } = req.body;
    // console.log(req.body);


    (async () => {
        let data = await db.find('yonghu', {
            id: ids,
            user: users,
            email:emails
        });

        console.log(data);
        if (data.length > 0) {
            res.send('success');
        } else {
            res.send('failure');
        }


    })();


});

module.exports = router;