var contentContr = require('./../controller/content')
module.exports = function (app) {
    app.get('/', function(req, res, next) {
        res.render('post');
    });
    app.get('/index', function(req, res, next) {
        res.render('list');
    });
    app.post('/post', contentContr.post);
    app.post('/update', contentContr.update);
    app.get('/getContent', contentContr.getContent);
    app.get('/article/:_id', contentContr.getOne);
    app.get('/delete/:_id', contentContr.delete);
};
