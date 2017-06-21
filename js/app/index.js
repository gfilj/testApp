//init
mui.init({
	subpages:[qiao.h.normalPage('list')]
})

var main = null;
var showMenu = false;
var menu = null;
var add = null;
var detail = null;

//all method is here 
mui.plusReady(function(){
	initDb();
})

function initDb(){
	var db = qiao.h.db();
	qiao.h.update(db, 'create table if not exists t_plan_day_todo(id unique, plan_title, plan_content)');
	qiao.h.update(db, 'create table if not exists t_plan_day_done(id unique, plan_title, plan_content)');
	
	var help = qiao.h.getItem('help');
	if(!help){
		qiao.h.insertItem('help','first');
	}
	
}
