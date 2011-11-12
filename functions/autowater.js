// добавляем помощника по поливу
if (page('verkauf_map.php'))
$('helfer_all').appendChild($('span',
{
	className: 'link',
	title: 'Гном-помощник по поливу',
	style: "position:absolute;z-index:1;width:25px;height:45px;top:0px;right:425px;"+
		"background:URL('/"+"/pics.wurzelimperium.de/pics/verkauf/kannenzwerg.gif') top left no-repeat",
	onclick: function()
	{
		notify.wait('Идет полив...');
		parent.selectMode(2, true, parent.selected);
		autoclick(function(N){
			if (N)
				notify.info('Полито '+N+' растени'+ok(N,'е','я','ий'));
			else
				notify.error('Ничего не полито!');
		});
	}
}));
