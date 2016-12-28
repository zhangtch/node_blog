/**
 * Created by Administrator on 2016/12/16.
 */
var commentModel = require('../models/commentModel').commentModel;
var commentDAO = function(){};

commentDAO.prototype = {
    save: function (json, callBack){
        var newContent = new commentModel(json);

        newContent.save(function (err) {
            callBack(err);
        });
    },
    remove: function (json, callBack) {
        commentModel.remove(json, function (err) {
            callBack(err);
        });
    },
    update: function (json, condition, callBack) {
        commentModel.update(json, condition, function (err) {
            callBack(err);
        });
    },
    findAll: function (callBack) {
        commentModel.find({},function (err, doc) {
            callBack(err, doc);
        });
    },
    findByArticle: function (title, callBack) {
        commentModel.find(title, function (err, doc) {
            callBack(err, doc);
        });
    }
};
exports.commentDAO = new commentDAO();