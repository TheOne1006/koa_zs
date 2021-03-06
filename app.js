'use strict';

var koa = require('koa');
var logger = require('koa-logger');
var errorhandler = require('koa-errorhandler');
// var staticCache  = require('koa-static-cache');
var bodyparser = require('koa-bodyparser');
var session = require('koa-generic-session');
var MongoStore = require('koa-generic-session-mongo');
var flash = require('koa-flash');
var scheme = require('koa-scheme');
var router = require('koa-frouter');
var render = require('co-ejs');
var staticServer = require('koa-static');
var mount = require('koa-mount');



// 环境变量 改变配置文件
var config = require('config-lite');

var app = koa();
// 不放在 default.js 避免循环
var merge = require('merge-descriptors');
var core = require('./lib/core');
var renderConf = require(config.renderConf);

// debug('renderConf: ', renderConf);
merge(renderConf.locals || {}, core, false);
app.keys = [renderConf.locals.$app.name];

/**
 * 中间件使用
 */
// 捕捉下游错误
app.use(errorhandler());
app.use(mount('/public', staticServer(__dirname + '/public')));
app.use(bodyparser());
app.use(logger());
app.use(session({
    store: new MongoStore(config.mongodb)
}));
app.use(flash());

app.use(scheme(config.schemeConf));


app.use(render(app, renderConf));
app.use(router(app, {
    root: config.routerConf
}));

/**
 * module.parent 判断文件是否被引用,被引用则导出 app.callback() 已供测试
 */
if(module.parent) {
    module.exports = app.callback();
} else {
    app.listen(config.port, function() {
        console.log('Server listing on : %s', config.port);
    });
}
