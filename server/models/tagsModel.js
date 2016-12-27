/**
 * Created by Administrator on 2016/12/27.
 */
var mongodb = require('./index');
var Schema = mongodb.mongoose.Schema;
var tagsSchema = new Schema({
    name:{type:String}
});
var tagsModel = mongodb.mongoose.model('TagsList',tagsSchema);
exports.tagsModel = tagsModel;