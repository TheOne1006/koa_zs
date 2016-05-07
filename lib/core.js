'use strict';
/**
 * 聚合 lib/* 并导出
 */
var Comment = require('./comment');
var Topic = require('./topic');
var User = require('./user');

module.exports = {
    get $User () {
        return User;
    },
    get $Comment () {
        return Comment;
    },
    get $Topic () {
        return Topic;
    }
};
