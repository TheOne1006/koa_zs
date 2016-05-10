'use strict';

var gravatar = require('gravatar');
var moment = require('moment');
var md = require('markdown-it')();
var pkg = require('../package');
var debug = require('debug')('app:helpers:filters');

moment.locale(pkg.locale);

module.exports = {
    get fromNow () {
        return function (date) {
            return moment(date).fromNow();
        };
    },
    get gravatar () {
        return gravatar.url;
    },
    get markdown() {
        return function (content) {
            return md.render(content);
        };
    }
};
