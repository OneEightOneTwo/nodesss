var express = require('express');
var router = express.Router();

// const tokke = require('../libs/token');
const db = require('../blis/mongod.js');
/* GET users listing. */
//处理前端发送过来的登录信息,并且响应结果
//建议router.post跟前端ajax是要匹配的
router.post('/login', function (req, res, next) {
  let {
    users,
    psws
  } = req.body;
  // console.log(req.body);


  (async () => {
    let data = await db.find('user', {
      user: users,
      password: psws
    });

    // let {
    //   users,
    //   psws
    // } = data[0];
    // let ste = tokke.createToken({
    //   users
    // });
    
    console.log(data);
    if (data.length > 0) {
      res.send(data);
    } else {
      res.send('failure');
    }
   
    // console.log(user, password);
    // console.log(ste);
    // if (users == user && psws == password) {
    //   res.send({
    //     code: 1,
    //     toke: ste
    //   })
    // } else {
    //   res.send('failure');
    // }
    //   // console.log(req.body.users);
    //   // console.log(data);
    //   // console.log(data[0].user);
    //   console.log(user, password);
  })();

  // res.send('login');

});

module.exports = router;