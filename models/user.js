var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true }, // 性别
    signature: { type: String }, // 签名
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// 设置索引
UserSchema.index({name: 1});






module.exports = mongoose.model('User', UserSchema);
