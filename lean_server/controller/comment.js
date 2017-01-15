/**
 * Created by tianzhang on 17/1/14.
 */
'use strict';
const AV = require('leanengine');

const Comments = AV.Object.extend('Comments');
// 根据文章查询 ContentList 列表
exports.commentList = function (req, res, next) {
    const pointerArticle = req.params.pointerArticle
    if (pointerArticle === '') {
        res.status(500).send('id is empty')
    }
    const query = new AV.Query(Comments);
    query.descending('createdAt');
    query.find({pointerArticle:pointerArticle}).then(function (data) {
        if (data) {
            let arr = []

            for (let item of data) {
                let result = {}
                result.objectId = item.get('objectId')
                result.name = item.get('name')
                result.content = item.get('content')
                result.reply = item.get('reply')
                result.createdAt = item.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
                arr.push(result)
            }

            res.send(arr)
        } else {
            throw new Error('Can not find.');
        }
    }, function (err) {
        if (err.code === 101) {
            // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
            res.send(err)
        } else {
            next(err);
        }
    }).catch(next);
}
// 根据评论id获取评论信息
exports.getReply = function (req, res, next) {
    const reply = req.params.reply
    if (reply === '') {
        res.status(500).send('id is empty')
    }
    const query = new AV.Query(Comments);
    query.descending('createdAt');
    query.find({reply:reply}).then(function (data) {
        if (data) {
            let arr = []

            for (let item of data) {
                let result = {}
                result.objectId = item.get('objectId')
                result.name = item.get('name')
                result.content = item.get('content')
                result.reply = item.get('reply')
                result.createdAt = item.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
                arr.push(result)
            }

            res.send(arr)
        } else {
            throw new Error('Can not find.');
        }
    }, function (err) {
        if (err.code === 101) {
            // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
            res.send(err)
        } else {
            next(err);
        }
    }).catch(next);
}
//发表评论
exports.postComment = function (req, res) {
    for(var key in req.body) {
        var param = JSON.parse(key)
        var name = param.name
        var content = param.content
        var reply = param.reply
        var articleId = param.pointerArticle
    }

    if (!name || !content) {
        res.status(500).send('昵称和内容不可为空')
    }
    const comments = new Comments();
    comments.set('name', name)
    comments.set('content', content)
    comments.set('reply', reply)
    comments.set('pointerArticle', articleId)
    comments.save()

    try {
        let result = {}
        result.name = name
        result.content = content
        result.reply = reply
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
};