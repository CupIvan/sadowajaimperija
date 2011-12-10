/**
 * Хранилище данных на базе HTML5 LocalStorage
 */
window.storage =
{
	obj: storage = window['localStorage'],
	save: function(key, value)
	{
		this.obj.setItem(g.server + key, value);
	},
	load: function(key, value)
	{
		this.obj.getItem(g.server + key);
	}
}
