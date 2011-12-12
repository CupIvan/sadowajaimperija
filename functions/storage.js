/**
 * Хранилище данных на базе HTML5 LocalStorage
 */
window.storage =
{
	set: function(key, value, session)
	{
		if (session)
			window['sessionStorage'].setItem(g.server + key, json(value));
		else
			window['localStorage'].setItem(g.server + key, json(value));
	},
	get: function(key, def)
	{
		return this.decode(window['localStorage'].getItem(g.server + key))
			|| this.decode(window['sessionStorage'].getItem(g.server + key))
			|| def;
	},
	decode: function(x)
	{
		return eval('('+x+')');
	}
}
