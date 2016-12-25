/**
 * Created by Administrator on 2016/12/20.
 */
var ArticleJS = {
    init: function () {
        var search = location.search.substr(1);
        var arr = search.split('=');
        var _id = arr[1];
        console.log(_id)
        $.getJSON('http://localhost:3000/article/'+_id,function (d) {
            $('#J_title').text(d.rows.title);
            $('#J_body').html(d.rows.content);
        });
    }
};
$(function () {
    ArticleJS.init();
})