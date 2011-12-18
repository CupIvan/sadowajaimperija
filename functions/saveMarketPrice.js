/**
 * Сохраняем рыночные цены для последующего анализа
 */
if (page('markt.php')) (function(){

	var productId = /&v=(\d+)/.exec(L);
	if (!productId) return; productId = productId[1];

	storage.set('/session/market/time/'+productId, time());

	var td = $$($$('tr')[1], 'td'); if (!td[3]) return;
	var price = parseFloat(td[3].innerHTML.replace(/\D+$/, '').replace(/[. ]/, '').replace(',', '.'));

	storage.set('/market/price/'+productId, price);

})();
