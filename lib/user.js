var User = require('../models').User;

// 新建一个用户
exports.addUser = function (data) {
    return User.create(data);
};

// 通过id 获取用户
exports.getUserById = function (id) {
    return User.findById(id).exec();
};

// 通过 name 获取用户
exports.getUserByName = function (name) {
    return User.findOne({name: name}).exec();
};
