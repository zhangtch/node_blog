/**
 * Created by tianzhang on 17/1/14.
 */
'use strict';
const AV = require('leanengine');
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

const ContentList = AV.Object.extend('ContentList');
// 查询 ContentList 列表
exports.contentList = function (req, res, next) {
    const query = new AV.Query(ContentList);
    query.descending('createdAt');
    query.find().then(function (data) {
        if (data) {
            let arr = []
            for (let item of data) {
                let result = {}
                result.objectId = item.get('objectId')
                result.title = item.get('title')
                result.abstract = item.get('abstract')
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
// 获取指定id的文章信息
exports.article = function (req, res, next) {
    const id = req.params.id
    const query = new AV.Query(ContentList);
    query.get(id).then(function (data) {
        let result = {}
        if (data) {
            result.content = data.get('content')
            result.title = data.get('title')
            result.imageUrl = data.get('imageUrl')
            res.send(result)
        } else {
            throw new Error('article can not found')
        }
    }, function (err) {
        if (err.code === 101) {
            res.send(err)
        } else {
            next(err);
        }
    }).catch(next);
}
// 获取指定tag的文章列表
exports.contentListByTag = function (req, res, next) {
    const id = req.params.tag
    const query = new AV.Query(ContentList);
    query.equalTo('tag', id);
    query.descending('createdAt');
    query.find().then(function (data) {
        if (data) {
            let arr = []
            for (let item of data) {
                let result = {}
                result.objectId = item.get('objectId')
                result.title = item.get('title')
                result.abstract = item.get('abstract')
                result.createdAt = item.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
                arr.push(result)
            }
            res.send(arr)
        } else {
            throw new Error('Can not find.');
        }
    }, function (err) {
        if (err.code === 101) {
            res.send(err)
        } else {
            next(err);
        }
    }).catch(next);
}