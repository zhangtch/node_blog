/**
 * Created by Administrator on 2016/12/28.
 */
var mongod = require('./index');
var Schema = mongod.mongoose.Schema;
var commentSchema = new Schema({
    name:{type:String},
    content:{type:String},
    pointerArticle:{type:String},
    reply:{type:String},
    createdAt:{type:Date, default: Date.new}
});

var commentModel = mongod.mongoose.model('Comments',commentSchema);
exports.commentModel = commentModel;
