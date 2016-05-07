var Comment = require('../models').Comment;

/**
 * 新增一条评论
 */
exports.addComment = function (data) {
    return Comment.create(data);
};

/**
 * 通过话题id 获取所有评论
 */
exports.CommentsByTopicId = function (id) {
    return Comment.find({topic_id: id}).sort('updated_at').exec();
};
