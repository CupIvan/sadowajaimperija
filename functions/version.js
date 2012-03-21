// текущая версия скрипта в трее
if (page('=garden')) (function(){
	var tray = $('garten_aktuell_nummer').parentNode;
	tray.innerHTML = '<a href="http:/'+'/si.cupivan.ru/beta/changelog.html" target="_blank"'+
		' style="font-weight: bold; color: yellow;" title="История изменений">'+
		'v' + g.version + '</a> ' + tray.innerHTML;
})();

// показываем сообщение об обновлении
if (page('=garden')) (function(){
	if (g.updateMessage) // вышла новая вресия
	{
		notify.wait('Новые вкусности приехали!\n<br>Тебя ждет что-то интересненькое:<br>'+
			'<a target="_top" href="http:/'+'/si.cupivan.ru/beta/install.html?fromVersion='+g.version+'">'+
			g.updateMessage+', а также...</a>');
		return;
	}
})();
