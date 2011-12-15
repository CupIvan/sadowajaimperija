/**
 * Хранилище данных на базе HTML5 LocalStorage
 */
window.storage =
{
	set: function(key, value)
	{
		if (key.indexOf('/session/') != -1)
			window['sessionStorage'].setItem(g.server + key, json(value));
		else
			window['localStorage'].setItem(g.server + key, json(value));
	},
	get: function(key, def)
	{
		if (key.indexOf('/session/') != -1)
			return this.decode(window['sessionStorage'].getItem(g.server + key)) || def;
		else
			return this.decode(window['localStorage'].getItem(g.server + key)) || def;
	},
	decode: function(x)
	{
		return eval('('+x+')');
	}
}
