/**
 * Created by Administrator on 2016/12/16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_blog');
exports.mongoose = mongoose;