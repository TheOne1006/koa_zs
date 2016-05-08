'use strict';

var Models = require('../lib/core');
var $User = Models.$User;
var debug = require('debug')('app:routers:signin');

exports.get = function* () {
    yield this.render('signin');
};
