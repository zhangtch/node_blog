/**
 * Created by Administrator on 2016/12/16.
 */
// var marked = require('marked');
$(function(){
    $('#container2').hide();
    $.getJSON('http://localhost:3000/getContent',function (d) {
        var rows = d.rows;
        var html = '<ul>';
        for(var i=0,len = rows.length;i<len;i++){
            html += `<li data-id="${rows[i]._id}"><h3>${rows[i].title}</h3><p>${rows[i].abstract}</p><p class="delete">delete</p></li>`;
        }
        html += '</ul>';
        $('#container').append(html);
    });
    $('#container').on('click','li',function (e) {
        var _id = $(this).attr('data-id');
        if(e.target.className !== 'delete'){
            $.getJSON('http://localhost:3000/article/'+_id,function (d) {
                console.log(d)
                $('#container').hide();
                $('#container2').show();
                $('#container2 h2').html(d.rows.title);
                $('#container2 p').html(d.rows.content);
                window.location.hash = 'article';
            });
        }else{
            $.getJSON('http://localhost:3000/delete/'+_id,function (d) {
                console.log(d);
                if(d.code == 200){
                    history.go(0);
                }
            });
        }

    });
    window.onhashchange = function () {
        if(window.location.hash != '#article'){
            $('#container').show();
            $('#container2').hide();
        }else{
            $('#container').hide();
            $('#container2').show();
        }
    }
});
