'use strict';

var Models = require('../lib/core');
var $User = Models.$User;
var debug = require('debug')('app:routers:signin');

exports.get = function* () {
    yield this.render('signin');
};

exports.post = function* () {
    var data = this.request.body;
    var userInfo = yield $User.getUserByName(data.name);
    debug('userInfo', userInfo);

    if(!userInfo || (userInfo.password !== data.password)) {
        this.flash = {error: '用户名密码错误'};
        return this.redirect('back');
    }

    this.session.user = {
        name: userInfo.name,
        email: userInfo.email
    };

    this.flash = {success:'登录成功'};
    this.redirect('/user/'+userInfo.name);
};
