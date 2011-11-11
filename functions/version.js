if (page('=garden')) (function(){

var changelog =
{
'5.0.1': 'Автополив растений',
'5.0.0': 'Новый суперскрипт для "Садовой империи"',
};

// отображаем текущую версию скрипта
var version = '?'; for (version in changelog) break;
var tray = $('garten_aktuell_nummer').parentNode;
tray.innerHTML = '<b>v' + version + '</b> ' + tray.innerHTML;

})();
