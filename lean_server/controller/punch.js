/**
 * Created by tianzhang on 17/1/17.
 */
'use strict';
let request = require('request');

// 根据文章查询 ContentList 列表
exports.toPunch = function (req, res, next) {
    const cookies = req.params.cookies;
    if (cookies === '') {
        res.status(500).send('cookies is empty')
    }
    let headers = {
        'Accept' : '*/*',
        'Accept-Encoding' : 'gzip, deflate',
        'Accept-Language' : 'zh-CN,en-US;q=0.8',
        'User-Agent' : 'Mozilla/5.0 (Linux; Android 5.1; M578C Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.114 Mobile Safari/537.36 MicroMessenger/6.3.15.49_r8aff805.760 NetType/WIFI Language/zh_CN',
        'X-Requested-With' : 'XMLHttpRequest',
        'Host' : 'w.21cn.com',
        'Connection' : 'keep-alive',
        'Origin' : 'http://w.21cn.com',
        'Referer' : 'http://w.21cn.com/apollo/attendance/gotoAttendance.do',
        'Content-Length' : '43',
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Cookie' : ''
    };
    headers.Cookie = req.params.cookies;
    let params = {
        'lng' : '113.3369',
        'lat' : '23.14866',
        'accuracy' : '1500.029'
    };
    request({
        method:'post',
        url:'http://w.21cn.com/apollo/attendance/sign.do',
        headers:headers,
        form:params
    },function(err,response,body){
        if(err){
            res.send('Request failed with response code' + res.statusCode)
        } else {
            res.send(JSON.parse(body))
        }
    })
};