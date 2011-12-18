/**
 * Сохраняем магазинные цены для последующего анализа
 */
if (page('shop.php')) (function(){

	var i, productId, price;
	for (i = 0; i < items.length; i++)
	{
		price     = items[i].price;
		productId = items[i].productid;
		storage.set('/shop/price/'+productId, price);
		storage.set('/shop/link/' +productId, snr);   // код магазина
	}

})();
