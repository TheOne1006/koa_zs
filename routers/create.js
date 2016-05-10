'use strict';

var Models = require('../lib/core');
var $Topic = Models.$Topic;
var debug = require('debug')('app:routers:create');

exports.get = function* () {
    yield this.render('create');
};


exports.post = function* () {
    var data = this.request.body;
    data.user = this.session.user;
    var topic = yield $Topic.addTopic(data);

    this.flash = {success: '发布成功'};
    this.redirect('/topic/'+topic._id);
};
