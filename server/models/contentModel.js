/**
 * Created by Administrator on 2016/12/16.
 */
var mongodb = require('./index');
var Schema = mongodb.mongoose.Schema;
var contentSchema = new Schema({
    title:{type:String},
    abstract:{type:String},
    content:{type:String},
    tag:{type:String},
    imageUrl:{type:String},
    createdAt:{type:Date, default: Date.new}
});
var contentModel = mongodb.mongoose.model('ContentList',contentSchema);
exports.contentModel = contentModel;