/**
 * Created by Administrator on 2016/12/16.
 */
var contentModel = require('../models/contentModel').contentModel;
var contentDAO = function(){};

contentDAO.prototype = {
    save: function (json, callBack){
        var newContent = new contentModel(json);
        
        newContent.save(function (err) {
            callBack(err);
        });
    },
    remove: function (json, callBack) {
        contentModel.remove(json, function (err) {
            callBack(err);
        });
    },
    update: function (json, condition, callBack) {
        contentModel.update(json, condition, function (err) {
            callBack(err);
        });
    },
    findAll: function (callBack) {
        contentModel.find({},function (err, doc) {
            callBack(err, doc);
        });
    },
    findByTitle: function (title, callBack) {
        contentModel.findOne(title, function (err, doc) {
            callBack(err, doc);
        });
    },
    findByTags: function (tags, callBack) {
        contentModel.find(tags, function (err, doc) {
            callBack(err, doc);
        });
    }
};
exports.contentDAO = new contentDAO();