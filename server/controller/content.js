/**
 * Created by Administrator on 2016/12/16.
 */
var contentDAO = require('../dao/contentDAO').contentDAO;
var tagsDAO = require('../dao/tagsDAO').tagsDAO;
const judgeTag = function(tagName){
    if(!tagName){
        tagsDAO.findByName({name:tagName},function (err, doc) {
            if (!err) {
                if(doc.name !== tagName) {
                    tagsDAO.save({name:tagName},function (err) {
                        if (err) {
                            return err;
                        }
                    });
                }
            }
        });
    }
};
//发表
exports.post = function (req, res) {
    var tagName = req.body.tag;
    var newContent = {
        title: req.body.title,
        tag: tagName,
        abstract: req.body.abstract,
        content: req.body.content,
        createdAt: Date.now()
    };
    judgeTag();
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
    var tagName = req.body.tag;
    var updateContent = {
        title: req.body.title,
        tag: tagName,
        abstract: req.body.abstract,
        content: req.body.content,
        createdAt: Date.now()
    };
    judgeTag(tagName);
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
//根据id获取
exports.getOneById = function (req, res) {
    contentDAO.findByTitle({_id:req.params._id},function (err, doc) {
        if (!err) {
            doc = {rows:doc};
            res.send(doc);
        }
    });
};
//根据tag获取
exports.getByTag = function (req, res) {
    contentDAO.findByTags({tag:req.params.tag},function (err, doc) {
        if (!err) {
            doc = {rows:doc};
            res.send(doc);
        }
    });
};