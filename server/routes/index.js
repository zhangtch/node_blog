var contentContr = require('./../controller/content')
var tagsContr = require('./../controller/tags')
module.exports = function (app) {
    app.get('/', function(req, res, next) {
        res.render('post');
    });
    app.get('/index', function(req, res, next) {
        res.render('post');
    });
    app.post('/post', contentContr.post);
    app.post('/postTags', tagsContr.postTags);
    app.get('/getAllTags', tagsContr.getAllTags);
    app.post('/update', contentContr.update);
    app.get('/getContent', contentContr.getContent);
    app.get('/getContent/:tag', contentContr.getByTag);
    app.get('/article/:_id', contentContr.getOneById);
    app.get('/delete/:_id', contentContr.delete);
};
