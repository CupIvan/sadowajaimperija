/**
 * Хранилище данных на базе HTML5 LocalStorage
 */
window.storage =
{
	server: g.server,
	set: function(key, value)
	{
		if (key.indexOf('/session/') != -1)
			window['sessionStorage'].setItem(this.server + key, json(value));
		else
			window['localStorage'].setItem(this.server + key, json(value));
	},
	get: function(key, def)
	{
		if (key.indexOf('/session/') != -1)
			return this.decode(window['sessionStorage'].getItem(this.server + key)) || def;
		else
			return this.decode(window['localStorage'].getItem(this.server + key)) || def;
	},
	decode: function(x)
	{
		return eval('('+x+')');
	}
}
