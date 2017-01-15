/**
 * Created by tianzhang on 17/1/14.
 */
'use strict';
let config = {
    //服务器 host
    host: 'http://localhost:3000',
    //web 开发环境 host
    webHost: 'http://localhost:8080',
    //跨域请求白名单
    whiteOrigins:[
        'http://localhost:8080',
        'http://localhost:3000',
        'http://zzttcc.leanapp.cn'
    ]
};
// 判断环境
switch (process.env.LC_APP_ENV) {

    // 当前环境为线上测试环境
    case 'stage':
        config.host = 'http://zzttcc.leanapp.cn';
        config.webHost = 'http://zzttcc.leanapp.cn';
        break;

    // 当前环境为线上正式运行的环境
    case 'production':
        config.host = 'http://zzttcc.leanapp.cn';
        config.webHost = 'http://zzttcc.leanapp.cn';
        break;
}

module.exports = config;