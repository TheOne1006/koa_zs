'use strict';

var Models = require('../lib/core');
var $Topic = Models.$Topic;
var debug = require('debug')('app:routers:index');

exports.get = function* () {
    var tab = this.query.tab;
    var p = this.query.p || 1;

    yield this.render('index', {
        topics: $Topic.getTopicsByTab(tab, p)
    });
};
