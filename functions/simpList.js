/**
 * Расчет списка покупок симпика
 */

// сохранение списка на странице с симпиками
if (page('verkauf_map.php')) (function(){

var i = 0, j, id, counts, products, obj;
while (parent.kunden['i'+i])
{
	id       = parent.kunden['i'+i].kundenId;
	counts   = parent.kunden['i'+i].a_string.split(':');
	products = parent.kunden['i'+i].p_string.split(':');
	i++;

	obj = {};
	for (j = 0; j < products.length; j++)
		obj[products[j]] = counts[j];

	storage.set('/session/simp/'+id, obj);
}

})();

// модификация списка
if (page('verkauf.php')) (function(){

var round = function(x, d)
{
	d = Math.pow(10, d);
	x = Math.round(x * d);
	return x / d + (x%100==0?'.0':'') + (x%10==0?'0':'');
}
var id   = $$('input[kunde]')[0].value;
var list = $$('.blau');
var div  = list[list.length - 1];
var sum  = parseInt(div.innerHTML.replace(/\D/g, '')) / 100;

var productId, market_price, min_price, is_shop, st = '', sum_sell = 0, sum_buy = 0, num, cl_color, st_right, st_shop = '';
var list  = storage.get('/session/simp/'+id);

st_right = ' style="text-align: right"';
for (productId in list)
{
	market_price = storage.get('/market/price/' + productId, 0);
	min_price    = storage.get('/shop/price/'   + productId, 99999);
	if (min_price > market_price) { min_price = market_price; is_shop = 0; }
	else
	{
		is_shop = 1;
		st_shop = ' title="На рынке: '+round(market_price, 2)+'"';
	}

	sum_sell += list[productId] * market_price * 0.9; // 10% - комиссия рынка

	num = parent.regal.getCount(productId);
	if (num < list[productId])
	{
		num -= list[productId];     // если не хватает - пишем отрицательное число
		sum_buy += num * min_price; // столько необходимо докупить
	}
	else num = list[productId];

	cl_color  = 'class="' + (num>0?'blau':'rot') + '"';
	min_price = round(min_price, 2);

	st += '<tr>'+
		'<td><div class="e' + productId + '" style="display: inline-block;"></div></td>'+
		'<td '+cl_color+st_right+'>' + num   + ' x</td>'+
		'<td '+cl_color+st_right+st_shop+'>' + (is_shop?'*':'') + min_price + '</td>'+
		'<td '+cl_color+'>' + '=' + '</td>'+
		'<td '+cl_color+st_right+'>' + round(list[productId] * min_price, 2) + '</td>'+
		'</tr>';
}

st = '<table style="margin: auto">'+st+'</table>';

// итоговая сумма
var st_total = '';
sum_buy  += sum; // вычитаем из суммы, которую предлагает симпик сумму расходов на покупку
st_total += '<span title="'+(sum_sell > sum ? 'Выгоднее отоварить на рынке за '+round(sum_sell, 2) : 'Хорошее предложение')+'"'+
	'class="'+(sum_sell > sum ? 'rot' : 'blau')+'">' + round(sum - sum_sell, 2) + '</span>';
st_total += '    ';
st_total += '<span title="'+(sum_buy < 0 ? 'Потратишь' : 'Получишь')+' сейчас"'+
	'class="'+(sum_buy < 0 ? 'rot' : 'blau')+'">' + round(sum_buy, 2) + '</span>';

st = '<hr style="width: 80%">' + st_total + '<hr style="width: 80%">' + st;

var div = $$('div');
style(div[1], 'margin-top: -30px');
div[1].innerHTML = st;

})();
