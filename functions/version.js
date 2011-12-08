// functions/version_auto.js

// текущая версия скрипта в трее
if (page('=garden')) (function(){
	var tray = $('garten_aktuell_nummer').parentNode;
	tray.innerHTML = '<b>v' + g.version + '</b> ' + tray.innerHTML;
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
