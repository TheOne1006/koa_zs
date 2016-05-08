/**
 * 暴露所有 models/*
 */
var mongoose = require('mongoose');
var mongoConfig = require('config-lite').mongodb;
var debug = require('debug')('app:models:index');

debug('mongoConfig.url: %s', mongoConfig.url);
// 尝试连接
mongoose.connect(mongoConfig.url, function (error) {
    if(error) {
        console.error('connect to %s error:', mongoConfig.url, error.message);
        process.exit(1);
    }
});

// exports
exports.User = require('./user');
exports.Topic = require('./topic');
exports.Comment = require('./comment');
