/**
 * Created by Administrator on 2016/12/16.
 */
var contentDAO = require('../dao/contentDAO').contentDAO;

//发表
exports.post = function (req, res) {
    var newContent = {
        title: req.body.title,
        abstract: req.body.abstract,
        content: req.body.content,
        createdAt: Date.now()
    };
    contentDAO.save(newContent, function (err) {
        if(!err){
            var param = {
                code: 200,
                msg: '成功发表一篇'
            };
            res.send(param);
        }
    });
};
//更新列表
exports.update = function (req, res) {
    var updateContent = {
        title: req.body.title,
        abstract: req.body.abstract,
        content: req.body.content,
        createdAt: Date.now()
    };
    contentDAO.update({_id:req.body._id},{'$set':updateContent}, function (err) {
        if(!err){
            var param = {
                code: 200,
                msg: '成功更新一篇'
            };
            res.send(param);
        }
    });
};
//删除一篇
exports.delete = function (req, res) {
    contentDAO.remove({_id:req.params._id}, function (err) {
        if(!err){
            var param = {
                code: 200,
                msg: '成功删除一篇'
            };
            res.send(param);
        }
    });
};
//获取全部
exports.getContent = function (req, res) {
    contentDAO.findAll(function (err, doc) {
        if (!err) {
            doc = {rows:doc};
            res.send(doc);
        }
    });
};
//根据title获取
exports.getOne = function (req, res) {
    contentDAO.findByTitle({_id:req.params._id},function (err, doc) {
        if (!err) {
            doc = {rows:doc};
            res.send(doc);
        }
    });
};