/**
 * Отображаем кнопки переключения садов, если они не доступны
 */
if (page('main.php')) (function(){

	if ($('asd').innerHTML.indexOf('garten_quick') != -1) return; // кнопки уже есть

	player_auto = 1; // нужно, чтобы заходить в "Огородное"

	var i, st = '';

	for (i = 1; i <= _REGALZAHL; i++)
	st += '<img id="garten_quick'+i+'"style="padding-left:3px; padding-top:4px;"'+
		'src="'+_GFX+'pics/garten/garten'+i+'.jpg" onclick="waehleGarten('+i+');">';

	st += '<img id="garten_quick_stadt" style="padding-left:3px; padding-top:10px;"'+
		'src="'+_GFX+'pics/garten/garten_stadt.jpg" onclick="zeigeStadtMain(1);">';

	st += '<img id="garten_quick_stadt2" style="padding-left:3px; padding-top:10px;"'+
		'src="'+_GFX+'pics/garten/garten_stadt.jpg" onclick="zeigeStadtMain(2);">';

	var div = $('div', {innerHTML: st, style: 'position:absolute; left:0px; top:250px;'});
	$('asd').appendChild(div);

})();
