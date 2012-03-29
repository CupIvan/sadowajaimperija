/**
 * Расчет списка покупок симпика
 */

if (page('page=garden')) (function(){

	style('wimpVerkaufProducts', 'top: 60px;');

	ajax.request_ = ajax.request;
	ajax.request  = function(url, data, handler)
	{
		if (url == 'verkaufajax' && data['do'] == 'getData')
		{
			var handler_ = handler;
			handler = function(f)
			{
				// оригинальный обработчик
				handler_(f);
				// рисуем таблицу
				drawSimpList(f);
			}
		}
		ajax.request_(url, data, handler);
	}
})();

// переоформляем список симпика
function drawSimpList(list)
{
	var st = '';

	// сохраняем идентификатор симпа (для обновления после прихода из рынка)
	storage.set('/session/lastSimpId', list.id);

	var round = function(x, d)
	{
		d = Math.pow(10, d);
		x = Math.round(x * d);
		return x / d + (x%100==0?'.0':'') + (x%10==0?'0':'');
	}
	var sum  = list.sum;

	var i, productId, amount, market_price, min_price, is_shop, st = '', sum_sell = 0, sum_buy = 0, num, cl_color, st_right, st_shop = '';

	// перебираем все растения и вычисляем сумму покупки
	st_right = ' style="text-align: right"';
	for (i = 0; i < list.products.length; i++)
	{
		productId = list.products[i].pid;
		amount    = list.products[i].amount;

		market_price = storage.get('/market/price/' + productId, 0);
		min_price    = storage.get('/shop/price/'   + productId, 99999);
		if (min_price > market_price) { min_price = market_price; is_shop = 0; }
		else
		{
			is_shop = 1;
			st_shop = ' title="На рынке: '+round(market_price, 2)+'"';
		}

		sum_sell += amount * market_price * 0.9; // 10% - комиссия рынка

		num = regal.getCount(productId);
		if (num < amount)
		{
			num -= amount;              // если не хватает - пишем отрицательное число
			sum_buy += num * min_price; // столько необходимо докупить
		}
		else num = amount;

		cl_color  = 'class="' + (num>0?'blau':'rot') + '"';
		min_price = round(min_price, 2);

		if (num < 0)
			storage.set('/session/buyNow/'+productId, -num);

		st += '<tr>'+
			'<td><div class="e' + productId + '" style="display: inline-block;"></div></td>'+
			'<td '+cl_color+st_right+'>' + num   + ' x</td>'+
			'<td '+cl_color+st_right+st_shop+'>' + (is_shop?'*':'') + min_price + '</td>'+
			'<td '+cl_color+'>' + '=' + '</td>'+
			'<td '+cl_color+st_right+'>' + round(amount * min_price, 2) + '</td>'+
			'</tr>';
	}

	style($$(top.document, '#stadt')[0], 'position: relative; left: 40px; top: 40px; z-index: 101;');
	style($$(top.document, '#stadtframe')[0], 'width: 640px; height: 560px;');

	st = '<table style="margin: auto">'+st+'</table>';

	// итоговая сумма
	var st_total = '';
	sum_buy  += sum; // вычитаем из суммы, которую предлагает симпик сумму расходов на покупку
	st_total += '<span title="'+(sum_sell > sum ? 'Выгоднее отоварить на рынке за '+round(sum_sell, 2) : 'Хорошее предложение')+'"'+
		'class="'+(sum_sell > sum ? 'rot' : 'blau')+'">' + round(sum - sum_sell, 2) + '</span>';
	st_total += '    ';
	st_total += '<span title="'+(sum_buy < 0 ? 'Потратишь' : 'Получишь')+' сейчас"'+
		'class="'+(sum_buy < 0 ? 'rot' : 'blau')+'">' + round(sum_buy, 2) + '</span>';

	var hr = '<hr style="width: 80%; margin: 3px auto;">';
	st = hr + st_total + hr + st;

	$("wimpVerkaufProducts", st);

	// при клике идем на рынок
	$($$('#wimpVerkaufProducts tr'), {onclick: function(e){
		var productId = e.target.parentNode.innerHTML.replace(/.+?(\d+).+/, '$1');
		top.$('stadt').style.display = 'block';
		top.$('stadtframe').src = '/stadt/markt.php?filter=1&page=1&order=p&v='+productId;
	}});
} // /drawSimpList

// корректировки на странице рынка
//---------------------------------
if (page('markt.php')) (function(){

// исправляем кнопку "закрыть" на рынке, а то так не работает
$$('.closeBtn')[0].onclick = function() {
	parent.wimps.show(storage.get('/session/lastSimpId')); // обновляем список покупок, чтобы появилась кнопка "Да"
	style(parent.$('stadt'), 'display: none');
};

// подставляем нужное кол-во растений
try
{
	var productId = /v=(\d+)/.exec(L)[1];
	var buy_ = buy;
	buy = function(a,b,c,d,e)
	{
		buy_(a, storage.get('/session/buyNow/'+productId, b),c,d,e);
	}
}
catch(e){}

})();
