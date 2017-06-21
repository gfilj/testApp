//init
mui.init({
	
});

var tapId=null;

//all method in here
mui.plusReady(function(){
	initHelp();
});

function initHelp(){
	var help = qiao.h.getItem('help');
	if(help == 'first'){
		qiao.h.update(qiao.h.db(), getSql(1, '事项5', '待办事项5'));
        qiao.h.update(qiao.h.db(), getSql(2, '事项4', '待办事项4'));
        qiao.h.update(qiao.h.db(), getSql(3, '事项3', '待办事项3'));
        qiao.h.update(qiao.h.db(), getSql(4, '事项2', '待办事项2'));
        qiao.h.update(qiao.h.db(), getSql(5, '事项1', '待办事项1'));
        qiao.h.update(qiao.h.db(), getSql(6, '功能8', '退出程序'));
        qiao.h.update(qiao.h.db(), getSql(7, '功能7', '右滑菜单'));
        qiao.h.update(qiao.h.db(), getSql(8, '功能6', '左上角查看完成事项'));
        qiao.h.update(qiao.h.db(), getSql(9, '功能5', '右上角添加待办事项'));
        qiao.h.update(qiao.h.db(), getSql(10, '功能4', '长按待办事项可以删除'));
        qiao.h.update(qiao.h.db(), getSql(11, '功能3', '右滑待办事项可以完成'));
        qiao.h.update(qiao.h.db(), getSql(12, '功能2', '点击待办事项可以查看详情'));
        qiao.h.update(qiao.h.db(), getSql(13, '功能1', '首页显示待办事项列表'));
         
        qiao.h.insertItem('help','notfirst');
	}
	
	initList()
}

function getSql(index, title, content){
    return 'insert into t_plan_day_todo (id, plan_title, plan_content) values (' + index + ', "' + title + '", "' + content + '")';
}

//init todoList
function initList(){
	var $ul = $('#todolist').empty();
    qiao.h.query(qiao.h.db(), 'select * from t_plan_day_todo order by id desc', function(res){
        for (i = 0; i < res.rows.length; i++) {
            $ul.append(genLi(res.rows.item(i)));
        }
 		console.log('Im here!');
// 		$ul.show();
        showList($ul);
    });
}

function genLi(data){
	var id = data.id;
    var title = data.plan_title;
    var content = data.plan_content;
     
    var li = 
        '<li class="mui-table-view-cell" id="todoli_' + id + '" data-id="' + id + '">' +
            '<div class="mui-slider-right mui-disabled">' + 
                '<a class="mui-btn mui-btn-red doneBtn">完成</a>' +
            '</div>' + 
            '<div class="mui-slider-handle">' + 
                '<div class="mui-media-body">' + 
                    title + 
                    '<p class="mui-ellipsis">'+content+'</p>' + 
                '</div>' + 
            '</div>' +
        '</li>';
         
    return li;
}

function showList(ul){
	if(ul.is(':hidden'))
	 ul.show();    
}
