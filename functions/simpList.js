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
var id   = kundenId;
var list = $$('.blau');
var div  = list[list.length - 1];
var sum  = parseInt(div.innerHTML.replace(/\D/g, '')) / 100;

var productId, price, st = '', sum_real = 0, sum_buy = 0, s, num, cl_color, st_right;
var list  = storage.get('/session/simp/'+id);

st_right = ' style="text-align: right"';
for (productId in list)
{
	price = storage.get('/market/price/' + productId, 0);
	sum_real += s = list[productId] * price;
	num = parent.regal.getCount(productId);
	if (num < list[productId])
	{
		num -= list[productId]; // если не хватает - пишем отрицательное число
		sum_buy += num * price;
	}
	else num = list[productId];
	cl_color =  'class="' + (num>0?'blau':'rot') + '"';
	st += '<tr>'+
		'<td><div class="e' + productId + '" style="display: inline-block;"></div></td>'+
		'<td '+cl_color+st_right+'>' + num   + ' x</td>'+
		'<td '+cl_color+st_right+'>' + price + '</td>'+
		'<td '+cl_color+'>' + '=' + '</td>'+
		'<td '+cl_color+st_right+'>' + round(s, 2) + '</td>'+
		'</tr>';
}

sum_buy += sum; // вычитаем из суммы, которую предлагает симпик сумму расходов на покупку

var div = $$('div');
style(div[1], 'margin-top: -30px');
div[1].innerHTML = '<table style="margin: auto">'+st+'</table>';

// итоговая сумма
div = div[div.length - 2]; st = '';
st += '<span title="'+(sum_real > sum ? 'Выгоднее отоварить на рынке' : 'Хорошее предложение')+'"'+
	'class="'+(sum_real > sum ? 'rot' : 'blau')+'">' + round(sum - sum_real, 2) + '</span>';
st += '    ';
st += '<span title="'+(sum_buy < 0 ? 'Потратишь' : 'Получишь')+' сейчас"'+
	'class="'+(sum_buy < 0 ? 'rot' : 'blau')+'">' + round(sum_buy, 2) + '</span>';
$(div, st);

})();
