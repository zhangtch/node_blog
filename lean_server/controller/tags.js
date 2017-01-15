/**
 * Created by tianzhang on 17/1/14.
 */
'use strict';
const AV = require('leanengine');
const TagsList = AV.Object.extend('TagsList');
// 查询 TagsList 列表
exports.tgsList = function (req, res, next) {
    const query = new AV.Query(TagsList);
    query.find().then(function (data) {
        if (data) {
            let arr = []
            for (let item of data) {
                let result = {}
                result.objectId = item.get('objectId')
                result.name = item.get('name')
                arr.push(result)
            }
            res.send(arr)

        } else {
            throw new Error("can not find tags")
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
