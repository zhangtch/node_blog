/**
 * Created by Administrator on 2016/12/16.
 */
var tagsModel = require('../models/tagsModel').tagsModel;
var tagsDAO = function(){};

tagsDAO.prototype = {
    save: function (json, callBack){
        var newTags = new tagsModel(json);

        newTags.save(function (err) {
            callBack(err);
        });
    },
    remove: function (json, callBack) {
        tagsModel.remove(json, function (err) {
            callBack(err);
        });
    },
    update: function (json, condition, callBack) {
        tagsModel.update(json, condition, function (err) {
            callBack(err);
        });
    },
    findAll: function (callBack) {
        tagsModel.find({},function (err, doc) {
            callBack(err, doc);
        });
    },
    findById: function (id, callBack) {
        tagsModel.findOne(id, function (err, doc) {
            callBack(err, doc);
        });
    },
    findByName: function (name, callBack) {
        tagsModel.findOne(name, function (err, doc) {
            callBack(err, doc);
        });
    }
};
exports.tagsDAO = new tagsDAO();