/**
 * Раскрашивание поля в разные цвета
 * синий   - надо поливать
 * зеленый - надо собирать, урожай созрел
 * черный  - надо сажать, поле пустует
 */
if (page('garten_map.php')) (function(){

	var jsTimeStamp = parent.Zeit.Client - parent.Zeit.Verschiebung;

	$$('.cursor', function(e)
	{
		var id = e.id.replace(/\D/g, '');
		var color = '';

		if (parent.garten.garten_kategorie[id] == 'z') return; // декор
		if (parent.garten.garten_kategorie[id] == 'u') return; // еще чего-то, v -> овощ
		if (parent.garten.garten_zeit[id] < jsTimeStamp)                 color = '#0F0'; // зеленый
		else
		if (parent.garten.garten_wasser[id]
			&& parent.garten.garten_wasser[id] < jsTimeStamp - 24*60*60) color = '#00F'; // синий
		if (  !parent.garten.garten_prod[id]/*пустая клетка*/
			|| parent.garten.garten_prod[id] == 41/*сорняки*/) color = '#000'; // черный

		if (color)
		style(e, 'opacity: 0.3; background: ' + color);
	})

})();
