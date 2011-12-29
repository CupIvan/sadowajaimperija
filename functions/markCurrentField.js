// выделяем текущее поле
if (page('garten_map.php'))
{
	var i, N = /garden=(\d+)/.exec(L);
	N = N ? N[1] : 1;

	for (i = 1; i <= 6; i++)
		style($$(parent.document, '#garten_quick'+i)[0],
			(i == N
				? 'margin: 2px 0 -2px 1px; border: 2px solid red;'
				: 'margin: 4px 0  0   3px; border: 0;')
			+ ' padding: 0;');
}
