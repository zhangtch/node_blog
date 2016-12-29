/**
 * Created by Administrator on 2016/12/28.
 */
var commentDAO = require('../dao/commentDAO').commentDAO;
//发表回复
exports.post = function (req, res) {
    var newContent;
    for(var key in req.body) {
        var param = JSON.parse(key)
        newContent = {
            name: param.name,
            pointerArticle: param.pointerArticle,
            content: param.content,
            reply: param.reply,
            createdAt:new Date()
        };
    }
    commentDAO.save(newContent, function (err) {
        if(!err){
            var param = {
                code: 200,
                msg: '成功回复',
                rows: newContent
            };
            res.send(param);
        }
    });
};
//删除一篇
exports.delete = function (req, res) {
    commentDAO.remove({_id:req.params._id}, function (err) {
        if(!err){
            var param = {
                code: 200,
                msg: '成功删除'
            };
            res.send(param);
        }
    });
};
//获取一篇文章的全部评论
exports.getComments = function (req, res) {
    commentDAO.findByArticle({pointerArticle:req.params.pointerArticle},function (err, doc) {
        if (!err) {
            res.send(doc);
        }
    });
};
//根据评论id获取评论信息
exports.getReply = function (req, res) {
    commentDAO.findByArticle({reply:req.params.reply},function (err, doc) {
        if (!err) {
            res.send(doc);
        }
    });
};