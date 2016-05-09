'use strict';

var Models = require('../lib/core');
var $Topic = Models.$Topic;

exports.get = function* () {
    yield this.render('create');
};
