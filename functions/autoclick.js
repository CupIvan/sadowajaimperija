// прокликиваем всю карту, размер 17x12=204 клетки
function autoclick(handler)
{
	var i, j, N = 0, ids={}, src;
	// функция клика
	var _ = function(id)
	{
		if (ids[id]) return; // уже кликали
		ids[id] = 1;
		parent.show_built(id, 'over'); // наводим курсор на клетку
		src = '' + $$(parent.garten.document, '#b'+id)[0].src;
		if (src.indexOf('cursors') != -1 && src.indexOf('no.gif') == -1) // если можно - обрабатываем
		{
			parent.cache_me(id, parent.garten.garten_prod[id], parent.garten.garten_kategorie[id]);
			N++;
		}
		parent.show_built(id, 'out');  // уводим курсор
	}

	// делаем разбиение, чтобы успело политься и можно было подсчитать кол-во обработанных растений

	// сначала прокликиваем квадратами 2x2
	setTimeout(function(){
		for (j = 0; j < 12; j += 2)
		for (i = 0; i < 17; i += 2)
			_(j*17 + i + 1);
	}, 1);

	// теперь прямоугольниками 2x1
	setTimeout(function(){
		for (j = 0; j < 12; j += 1)
		for (i = 0; i < 17; i += 2)
			_(j*17 + i + 1);
	}, 1500);

	// и все что осталось
	setTimeout(function(){
		for (j = 0; j < 12; j += 1)
		for (i = 0; i < 17; i += 1)
			_(j*17 + i + 1);
		handler(N);
	}, 3000);

}
