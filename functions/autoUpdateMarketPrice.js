/**
 * Автообновление рыночных цен
 */
if (page('=garden')) (function(){

var createMarket = function()
{
	$().appendChild($('iframe', {id: 'hidden_market'}));
}
var openMarketPage = function(id)
{
	$('hidden_market').src = '/stadt/markt.php?filter=1&page=1&order=p&v='+id;
}
var rand = function(min, max)
{
	var r = Math.random();
	return Math.round(r * (max - min)) + min;
}

createMarket();

var pause = 0, productId, now = time();

for (productId = 1; productId < data_products.length; productId++)
if (data_products[productId].category == 'v')
if (now - storage.get('/session/market/time/'+productId, 0) > 10*60) // опрос 1 раз в 10 минут
	(function(productId){
		setTimeout(function() {
			openMarketPage(productId);
		}, pause += rand(5, 9) * 1000); // между запросами интервал в 5-9 секунд
	})(productId);
})();
