// прокликиваем всю карту, размер 17x12=204 клетки
function autoclick(handler)
{
	var i, j, N = 0, ids={}, src;
	// функция клика
	var _ = function(id)
	{
		var res = 0;

		if (ids[id]) return res; // уже кликали
		ids[id] = 1;
		parent.show_built(id, 'over'); // наводим курсор на клетку
		src = '' + $$(parent.garten.document, '#b'+id)[0].src;
		if (src.indexOf('cursors') != -1 && src.indexOf('no.gif') == -1) // если можно - обрабатываем
		{
			parent.cache_me(id, parent.garten.garten_prod[id], parent.garten.garten_kategorie[id]);
			res = 1;
			N++;
		}
		parent.show_built(id, 'out');  // уводим курсор

		return res;
	}

	// делаем разбиение, чтобы успело политься и можно было подсчитать кол-во обработанных растений
	var f = function(){
		var res = 0;

		// сначала прокликиваем квадратами 2x2
		for (j = 0; j < 12; j += 2)
		for (i = 0; i < 17; i += 2)
			res += _(j*17 + i + 1);

		// теперь прямоугольниками 2x1
		for (j = 0; j < 12; j += 1)
		for (i = 0; i < 17; i += 2)
			res += _(j*17 + i + 1);

		// и все что осталось
		for (j = 0; j < 12; j += 1)
		for (i = 0; i < 17; i += 1)
			res += _(j*17 + i + 1);

		// если что-то обработали - запускаем еще разок, чтобы ничего не пропустить
		setTimeout(function(){
			if (res) return f();
			if (N) parent.garten.location = (''+parent.garten.location).replace(/ernte=\w+/, ''); // обновляем фрейм
			handler(N);
		}, 1000);
	}; f();
}
