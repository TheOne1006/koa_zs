'use strict';

var koa = require('koa');
var logger = require('koa-logger');
var errorhandler = require('koa-errorhandler');
var debug = require('debug')('app:index'); 
var bodyparser = require('koa-bodyparser');
var session = require('koa-generic-session');
var MongoStore = require('koa-generic-session-mongo');
var flash = require('koa-flash');
var scheme = require('koa-scheme');
var router = require('koa-frouter');

// 环境变量 改变配置文件
var config = require('config-lite');





var app = koa();
/**
 * 中间件使用
 */
// 捕捉下游错误
app.use(errorhandler());
app.use(bodyparser());
app.use(logger());
app.use(session({
    store: new MongoStore(config.mongodb)
}));
app.use(flash());
app.use(scheme(config.schemeConf));
// debug('config.routerConf: ', config.routerConf)
// app.use(router(app, {root: config.routerConf}));

app.use(router(app, {
    root: config.routerConf
}));


app.listen(3000, function() {
    console.log('Server listing on : %s', 3000);
});
