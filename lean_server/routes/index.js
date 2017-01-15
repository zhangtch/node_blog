/**
 * Created by tianzhang on 17/1/14.
 */
'use strict';
// 添加一个模块
const Todos = require('./todos')
const ContentList = require('../controller/content')
const TagsList = require('../controller/tags')
const CommentList = require('../controller/comment')

module.exports = function (app) {
    app.get('/todos', Todos.todosList)
    app.post('/todos', Todos.addList)

    app.get('/getContent', ContentList.contentList)
    app.get('/getContent/:tag', ContentList.contentListByTag)
    app.get('/article/:id', ContentList.article);

    app.get('/getAllTags', TagsList.tgsList);

    app.get('/getComments/:id', CommentList.commentList);
    app.get('/getReply/:reply', CommentList.getReply);
    app.post('/postComment', CommentList.postComment);
};