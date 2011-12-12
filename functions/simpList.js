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

	storage.set('/simp/'+id, obj, 1);
}

})();

// модификация списка
if (page('verkauf.php')) (function(){

var id   = kundenId;
var list = $$('.blau');
var div  = list[list.length - 1];
var sum  = parseInt(div.innerHTML.replace(/\D/g, '')) / 100;

var productId, price, st = '', sum_real = 0, s;
var list  = storage.get('/simp/'+id);

for (productId in list)
{
	price = storage.get('/price/' + productId, 0);
	sum_real += s = list[productId] * price;
	st += '<div class="e'+productId+'" style="display: inline-block;"></div> '+
		'<span class="blau">'+list[productId] + 'x' + price + ' = ' + s + '</span><br>';
}

var div = $$('div');
style(div[1], 'text-align: left; padding: 0 0 0 30px; margin-top: -30px');
div[1].innerHTML = st;
$(div[div.length - 2], sum + ' / '+ sum_real);

})();
