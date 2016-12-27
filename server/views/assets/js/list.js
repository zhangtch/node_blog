/**
 * Created by Administrator on 2016/12/20.
 */
var ListJS = {
    init: function () {
        var search = decodeURI(window.location.search, "UTF-8");
        var tag = '';
        if(search){
            tag = search.slice(1).split('=');
            tag = tag[1];
        }
        $.getJSON('http://localhost:3000/getContent/'+tag,function (d) {
            var rows = d.rows;
            var html = '';
            for(var i=0,len = rows.length;i<len;i++){
                html += `<div class="single_fake" data-id="sdf">
                    <div class="single">
                        <div class="single_left">
                            <div class="article_title abs-title">
                                <a href="/node_blog/server/views/article.html?id=${rows[i]._id}" class="article-list-title" target="_blank" 
                                title="${rows[i].title}">${rows[i].title}
                                </a>
                            </div>
                            <div class="article_cut">
                                ${rows[i].abstract}
                            </div>
                        </div>
                        <div class="article_thumb">
                            <img src="" alt="ces">
                        </div>
                        <div class="article_delete" data-id="${rows[i]._id}">
                            <img src="./assets/img/clear_input.png" alt="clear">
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="tip meta-tip">
                        <span>${rows[i].createdAt}</span>
                        <a href="/node_blog/server/views/list.html?tag=${rows[i].tag}" class="article-list-title" target="_blank" 
                                title="${rows[i].tag}">${rows[i].tag}
                                </a>
                    </div>
                </div>`;
            }
            $('#list_article').append(html);
        });
        $('#list_article').on('click','.article_delete',function () {
            var _id = $(this).attr('data-id');
            console.log(_id)
            $.getJSON('http://localhost:3000/delete/'+_id,function (d) {
                if(d.code == 200){
                    history.go(0);
                }
            });
        })
    }
};
$(function () {
    ListJS.init();
});