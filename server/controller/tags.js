/**
 * Created by Administrator on 2016/12/16.
 */
var tagsDAO = require('../dao/tagsDAO').tagsDAO;

//发表
exports.postTags = function (req, res) {
    var newTags = {
        name: req.body.name
    };
    tagsDAO.save(newTags, function (err) {
        if(!err){
            var param = {
                code: 200,
                msg: '成功发布一个标签'
            };
            res.send(param);
        }
    });
};
//更新列表
exports.update = function (req, res) {
    var updateTags = {
        name: req.body.name
    };
    tagsDAO.update({_id:req.body._id},{'$set':updateTags}, function (err) {
        if(!err){
            var param = {
                code: 200,
                msg: '成功更新一个标签'
            };
            res.send(param);
        }
    });
};
//删除一篇
exports.delete = function (req, res) {
    tagsDAO.remove({_id:req.params._id}, function (err) {
        if(!err){
            var param = {
                code: 200,
                msg: '成功删除一个标签'
            };
            res.send(param);
        }
    });
};
//获取全部
exports.getAllTags = function (req, res) {
    tagsDAO.findAll(function (err, doc) {
        if (!err) {
            doc = {rows:doc};
            res.send(doc);
        }
    });
};
//根据id获取
exports.getOneById = function (req, res) {
    tagsDAO.findById({_id:req.params._id},function (err, doc) {
        if (!err) {
            doc = {rows:doc};
            res.send(doc);
        }
    });
};