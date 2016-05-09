'use strict';

var Models = require('../lib/core');
var $User = Models.$User;
var debug = require('debug')('app:routers:signup');

exports.get = function* () {
    debug('render signup');
    yield this.render('signup');
};

exports.post = function* () {
    var data = this.request.body;
    debug('body', data);
    var userExit = yield $User.getUserByName(data.name);
    debug('userExit', userExit);
    if(userExit) {
        this.flash = {eror: '用户已存在'};
        return this.redirect('/');
    }

    yield $User.addUser(data);

    this.session.user = {
        name: data.name,
        email: data.email
    };

    this.flash = {success: '注册成功'};
    this.redirect('/');
};
