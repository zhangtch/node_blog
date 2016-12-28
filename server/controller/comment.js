/**
 * Created by Administrator on 2016/12/28.
 */
var commentDAO = require('../dao/commentDAO').commentDAO;
//发表回复
exports.post = function (req, res) {
    var newContent = {
        name: req.body.name,
        pointerArticle: req.body.pointerArticle,
        content: req.body.content,
        reply: req.body.reply,
        createdAt: Date.now()
    };
    commentDAO.save(newContent, function (err) {
        if(!err){
            var param = {
                code: 200,
                msg: '成功回复'
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