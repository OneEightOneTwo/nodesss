var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 登录
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// //注册路由
// var signRouter = require('./routes/sign');
//网站用户
var userRouter = require('./routes/user');
//后台管理系统
var mageRouter = require('./routes/mage');

// 注册销量路由
var SalesDataRouter = require('./routes/SalesData');
// 订单路由
var order_formRouter = require('./routes/order_form');
// 添加商品
var upgoodsRouter = require('./routes/upgoods');
// 商品列表
var jiekouRouter = require('./routes/jiekou');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
//销量路由
app.use('/SalesData', SalesDataRouter);
// 订单路由
app.use('/order_form', order_formRouter);
// 添加商品
app.use('/upgoods', upgoodsRouter);

//定义路由的进入路径
//注册路由
// app.use('/sign', signRouter);
// 订单路由
app.use('/user', userRouter);
// 添加商品
app.use('/mage', mageRouter);
// 商品列表

app.use('/jiekou', jiekouRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
