var Topic = require('../models').Topic;


exports.addTopic = function (data) {
    return Topic.create(data);
};

/**
 * 获取一个话题,并增加pv1
 * @param  {string} id
 */
exports.getTopicById = function (id) {
    return Topic.findByIdAndUpdate(id, {$inc: {pv: 1}}).exec();
};

/**
 * 通过标签获取10个话题
 */
exports.getTopicsByTab = function (tab, p) {
    var query = {};
    if(tab) {
        query.tab = tab;
    }
    return Topic.find(query).skip((p - 1) * 10).sort('-updated_at').limit(10).select('-content').exec();
};

/**
 * 获取用户所有话题
 */
exports.getTopicsByName = function (name) {
    return Topic.find({'user.name': name}).sort('-updated_at').exec();
};

/**
 * 通过id,增加话题的评论数
 * @param  {string} id
 */
exports.incCommentById = function (id) {
    return Topic.findByIdAndUpdate(id, {$inc: {comment: 1}}).exec();
};

/**
 * 获取5条未评论的话题
 */
exports.getNoReplyTopics = function () {
    return Topic.find({comment: 0}).sort('-updated_at').limit(5).select('title').exec();
};

// 不同标签的话题数
exports.getTopicsCount = function (tab) {
    var query = {};
    if(tab) {
        query.tab = tab;
    }
    return Topic.count(query).exec();
};






// - - -
