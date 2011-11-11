// добавляем кнопку автополива
$('helfer_all').appendChild($('span',
{
	className: 'link',
	title: 'Гном-помощник по поливу',
	style: "position:absolute;z-index:1;width:25px;height:45px;top:0px;right:425px;"+
		"background:URL('/"+"/pics.wurzelimperium.de/pics/verkauf/kannenzwerg.gif') top left no-repeat",
	onclick: function()
	{
		var i = 205, N = 0;
		notify.wait('Идет полив...');
		parent.selectMode(2, true, parent.selected);
		while (--i)
		{
			parent.show_built(i, 'over'); // наводим курсор на клетку
			if (($$(parent.garten.document, '#b'+i)[0].src+'').indexOf('cursors/no') == -1) // если нужно - поливаем
			{
				parent.cache_me(i, parent.garten.garten_prod[i], parent.garten.garten_kategorie[i]);
				N++;
			}
			parent.show_built(i, 'out');  // уводим курсор
		}
		if (N)
			notify.info('Полито '+N+' растени'+ok('е','я','ий')+'...');
		else
			notify.error('Ничего не полито!');
	}
}));
