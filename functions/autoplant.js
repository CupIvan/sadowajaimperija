// привязываемся к штатному автомату-сажальщику
if (page('verkauf_map.php'))
{
	// после нажатия на автомат активируем его, даже если не осталось попыток
	var _showAutoPlant = showAutoPlant;
	showAutoPlant = function()
	{
		var _ajaxRequestCommon = parent.ajaxRequestCommon;
		parent.ajaxRequestCommon = function(a,b,c,h)
		{
			h({});
			var id, pinfo, options = '', list = parent.regal.produkte;
			for (id in list) // перебираем доступные семена
			{
				pinfo = parent.regal.getProductInfos(id);
				if (pinfo.category != 'v') continue; // это нельзя посадить
				options += '<option value="'+id+'">'+pinfo.name+'</option>';
			}
			// корректируем описание
			$$(parent.garten.document, '#ap_text')[0].innerHTML =
				'Пока никто не видит, ты можешь еще <b>пару раз</b> попользоваться автоматом, только никому не говори!<br><br>'+
				'Выбери продукт, который ты хочешь вырастить на свободных полях твоего сада.<br><span>'+
				'<select name="productid" id="productid">'+options+'</select>&nbsp;</span><br>'+
				'<span><button type="button" class="msg_input link" onclick="startAutoPlant();">Посадить</button></span>';
		}
		_showAutoPlant();
		parent.ajaxRequestCommon = _ajaxRequestCommon;
	}
}

// заменяем стандартную функцию жука-сажальщика
if (page('garten_map.php'))
startAutoPlant = function()
{
	notify.wait('Идет посадка...');
	// выбираем растение, сразу включается режим посадки
	parent.regal.selectProduct(parent.garten.document.getElementById('productid').value);
	autoclick(function(N){
		if (N)
			notify.info('Посажено '+N+' растени'+ok(N,'е','я','ий'));
		else
			notify.error('Ничего не посажено!');
	});
};
