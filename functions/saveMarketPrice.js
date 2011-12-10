/**
 * Сохраняем рыночные цены для последующего анализа
 */
if (page('markt.php')) (function(){

	var productId = /&v=(\d+)/.exec(L);
	if (!productId) return; productId = productId[1];

	var td = $$($$('tr')[1], 'td'); if (!td[3]) return;
	var price = td[3].innerHTML.replace(/\D+$/, '').replace(/[. ]/, '').replace(',', '.');

	storage.save('/price/'+productId, price);

})();
