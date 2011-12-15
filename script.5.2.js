(function()
{
var L = ''+document.location, g = { server: '?', updateMessage: '' };

// dollar.js 3.3
var $$=function(a,b,_){var i,j,k,h,l=document,m,e,n,o;if(typeof(a)!='string'){if(a)l=a;a=b;b=_};l=[l];a=a.split(' ');h=a.length;for(i=0;i<h;i++){m=[];for(j=0;j<l.length;j++){n=(/([#\.])?([\w-]+)([\.\[#])?([\w-]+)?/i).exec(a[i]);n[0]='';if('.checkbox.hidden.password.'.indexOf('.'+n[2]+'.')>=0)n[0]=n[2],n[2]='input';if(n[1]=='#')e=[l[j].getElementById(n[2])];else if(n[1]=='.')try{e=l[j].getElementsByClassName(n[2])}catch(e){e=_getElementsByClassName(l[j],n[2])}else try{e=l[j].getElementsByTagName(n[2])}catch(e){};o=e.length;if(i==h-1){var p=[];for(k=0;k<o;k++)p.push(e[k]);e=p};for(k=0;k<o;k++)if(e[k]){if((n[3]=='.'&&e[k].className.indexOf(n[4])<0)||(n[3]=='#'&&e[k].id!=n[4])||(n[3]=='['&&e[k].name!=n[4]&&!e[k][n[4]])||(n[0]&&e[k].type!=n[0]))continue;m.push(e[k]);if(i==h-1&&b!=undefined)b(e[k],k,o)}};l=[].concat(m)};return l};var $=function(c,d){var q,r,a,s=c||document,i;if(typeof(c)=='function')return $('',{onDOMContentLoaded:c});if(typeof(c)=='object'&&c[0]&&c.nodeName!='SELECT'){i=-1;while(c[++i])s=$(c[i],d);return s};if(typeof(c)=='string'){if(('.header.section.footer.div.span.nav.a.img.iframe.script.style.form.input.label.select.option.').indexOf('.'+c+'.')!=-1){s=document.createElement(c);try{s.innerHTML=' '}catch(e){}}else if(c)s=document.getElementById(c);if(!s)return null}else if(c==undefined)s=document.body;if(d!=undefined){if(c=='style'){try{s.innerHTML=d}catch(e){s.setAttribute('type','text/css');s.styleSheet.cssText=d};return s};var u,b,t;if(typeof(d)!='object')d={innerHTML:d};for(i in d)if(i=='style')style(s,d[i]);else if(i.indexOf('on')==0){b=(function(i){return function(e){e=e||window.event;if(!e.target)e.target=e.srcElement;if(!e.which)e.which=e.keyCode;u=e.returnValue=d[i](e);if(!u&&e.preventDefault)e.preventDefault();return u}})(i);try{s.addEventListener(i.replace(/^on/,''),b,false)}catch(e){if(i.indexOf('onDOM')==0){t=window.onload;window.onload=function(){if(t)t();b()}}else s[i]=b}}else s[i]=d[i]};return s};function _getElementsByClassName(f,g){var v=[],i,w;var x=new RegExp('\\b'+g+'\\b');var y=f.getElementsByTagName('*');for(i=0;i<y.length;i++){w=y[i].className;if(x.test(w))v.push(y[i])};return v};$('nav');$('section');$('header');$('footer');
// style.js 2.1
var style=function(x,a){var d;if(typeof(x)=='string')x=$(x);if(!x)return false;if(x.length&&x[0]&&x.firstChild==undefined){for(var i=0;i<x.length;i++)style(x[i],a);return};if(typeof(a)=='object')for(d in a){d.replace(/-(.)/g,function(_,x){return x.toUpperCase()});x.style[d]=a[d]}else{var i,d,f,_;_=function(a,b,c){a=a.split('|');if(c&&!a[1])return b.replace(a[0].replace('!',''),'').replace(/ $/,'')+(a[0][0]=='!'?'':' '+a[0]);return(a[1]&&b==a[0])?a[1]:a[0]};if(a.indexOf(':')==-1){return x.className=_(a,x.className,1)};a=a.split(';');for(i=0;i<a.length;i++){d=a[i].split(':');if(d.length!=2)continue;f=d[1];d=d[0];d=d.replace(/\s/g,'');d=d.replace(/-(.)/g,function(_,x){return x.toUpperCase()});f=f.replace(/['"]/g,'');f=f.replace(/^\s+|\s+$/g,'');x.style[d]=_(f,x.style[d])}};return false}
// notify.js 2.1
var notify=(function(){this.id=0;this.ids={};this.wait=function(x,t,d){return this._message(x,t,d,'wait')};this.info=function(x,t,d){return this._message(x,t,d,'info')};this.error=function(x,t,d){return this._message(x,t,d,'error')};this.message=function(x,t,d){return this._message(x,t,d)};this._message=function(a,b,c,f){var h;if(!c)c=0;if(!b)b=2000;if(this.ids[this.id]&&this.ids[this.id].style=='wait')this.clear(this.id);var g=++this.id;this.ids[g]={style:f};if(f=='wait'){f='background: #FE7;';h='data:image/png;base64,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';b=60000};if(f=='error'){f='background: #F77;';h='data:image/png;base64,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';b=5000};if(f=='info'){f='background: #8F7;';h='data:image/png;base64,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'};this.ids[g].timerId=setTimeout(function(){var d=$('div',{style:'display: table; position: fixed; top: 0; left: 50%; margin-top: 10px; z-index: 9999;'});$().appendChild(d);this.ids[g].div=d;a=a.split('\n');if(a.length>1)a[0]='<b>'+a[0]+'</b><br>'+a[1];a=a[0];if(h)a='<table style="border-collapse: collapse"><tr><td><img src="'+h+'"style="padding-right: 10px;"></td><td>'+a+'</td></tr></table>';this.ids[g].div.appendChild(d=$('div',{innerHTML:a,title:'Закрыть...',style:'display: none; margin-left: -50%; border-radius: 5px; border: 2px solid #000;padding: 10px; cursor: pointer; box-shadow: 0 0 10px rgba(0,0,0,0.5); background: #8BF;'+f,onclick:function(e){notify.clear(g);return true}}));setTimeout(function(){style(d,'display: inline-block')},1);setTimeout(function(){notify.clear(g)},b)},c);return g};this.clear=function(g){if(!g){for(g in this.ids){}};var d=this.ids[g];if(d){if(d.timerId)clearInterval(d.timerId);if(d.div)$().removeChild(d.div);delete this.ids[g]}};return this})();
// ok.js 1.0
var ok=function(n,a,b,c){var f=c,d=n%10;if(d<5)f=b;if(d<2)f=a;if(!d||(n>4&&n<21))f=c;return f}
// json.js 1.1
var json=function(x){var i,a='';if(typeof(x)=='number')return x;if(typeof(x)=='string')return '"'+x.replace(/\n/g,'\\n').replace(/([\"])/g,'\\$1')+'"';if(typeof(x)=='object')if(x.length&&x[0]){for(i=0;i<x.length;i++)a+=(i?', ':'')+json(x[i]);a="["+a+"]"}else{for(i in x)a+=(a?', ':'')+i+':'+json(x[i]);a="{"+a+"}"};return a}
// date.js 1.7
var time=function(){return Math.round((new Date()).getTime()/1000)};var date=function(b,c){var f=b;var t=new Date();var _=function(x){return x<10?'0'+x:x};if(!c)c=time();t.setTime(c*1000-(c<3600*999?0:t.getTimezoneOffset()*60000));if(!t.getTime())return '';var G=t.getUTCHours(),H=_(G);var i=t.getUTCMinutes();i=_(i);var s=t.getUTCSeconds();s=_(s);var j=t.getUTCDate(),d=_(j);var n=t.getUTCMonth()+1,m=_(n);var Y=t.getUTCFullYear();var y=Y%100;var w=t.getDay();var F='Январь Февраль Март Апрель Май Июнь Июль Август Сентябрь Октябрь Ноябрь Декабрь'.split(' ')[n-1];t.setDate(32);var t=32-t.getDate();var a='GHisjdnmYywtF'.split('');for(_=0;_<a.length;_++)f=f.replace(a[_],eval(a[_]));return 'GisjnYyw'.indexOf(b)==-1?f:parseInt(f)};var mktime=function(H,i,s,m,d,Y){var t=new Date(),r;if(r=/((\d+):(\d+)(:(\d+))?)?\s*(\d+)\D(\d+)\D(\d+)/.exec(H))H=r[2]||0,i=r[3]||0,s=r[5]||0,d=r[6],m=r[7],Y=parseInt(r[8]);if(i==undefined)return 0;Y=parseInt(Y);if(Y<20)Y+=2000;else if(Y<100)Y+=1900;t.setTime(0);t.setUTCHours(H);t.setUTCMinutes(i);t.setUTCSeconds(s);t.setUTCDate(d);t.setUTCMonth(m-1);t.setUTCFullYear(Y);return t.getTime()?Math.round(t.getTime()/1000):0}

// проверка на какой мы странице
var page = function(x)
{
	return (''+document.location).indexOf(x) != -1 ? 1 : 0;
}
// определяем какой у нас сервер
var s = /(\d+).+\.(.+)/.exec(''+document.domain);
if (L.indexOf('.bg.') != -1) s[2] = 'bg';
g.server = s[2] + s[1];

// functions/storage.js 
var storage={set:function(b,c){if(b.indexOf('/session/')!=-1)window['sessionStorage'].setItem(g.server+b,json(c));else window['localStorage'].setItem(g.server+b,json(c))},get:function(b,f){if(b.indexOf('/session/')!=-1)return this.decode(window['sessionStorage'].getItem(g.server+b))||f;else return this.decode(window['localStorage'].getItem(g.server+b))||f},decode:function(x){return eval('('+x+')')}}
// functions/version.js 
g.version='5.2.2';if(page('=garden'))(function(){var b=$('garten_aktuell_nummer').parentNode;b.innerHTML='<b>v'+g.version+'</b> '+b.innerHTML})();if(page('=garden'))(function(){if(g.updateMessage){notify.wait('Новые вкусности приехали!\n<br>Тебя ждет что-то интересненькое:<br><a target="_top" href="http://si.cupivan.ru/beta/install.html?fromVersion='+g.version+'">'+g.updateMessage+', а также...</a>');return}})();
// functions/autoclick.js 
function autoclick(b){var i,j,N=0,f={},g;var _=function(c){if(f[c])return;f[c]=1;parent.show_built(c,'over');g=''+$$(parent.garten.document,'#b'+c)[0].src;if(g.indexOf('cursors')!=-1&&g.indexOf('no.gif')==-1){parent.cache_me(c,parent.garten.garten_prod[c],parent.garten.garten_kategorie[c]);N++};parent.show_built(c,'out')};setTimeout(function(){for(j=0;j<12;j+=2)for(i=0;i<17;i+=2)_(j*17+i+1)},1);setTimeout(function(){for(j=0;j<12;j+=1)for(i=0;i<17;i+=2)_(j*17+i+1)},1500);setTimeout(function(){for(j=0;j<12;j+=1)for(i=0;i<17;i+=1)_(j*17+i+1);b(N)},3000)}
// functions/autoplant.js 
if(page('verkauf_map.php')){if(!$('automat')){$('helfer_all').appendChild($('div','<span id="automat" class="link" title="Автомат для посадки" style="right:333px;"onclick="showAutoPlant();"></span>'))};var f=showAutoPlant;showAutoPlant=function(){var g=parent.ajaxRequestCommon;parent.ajaxRequestCommon=function(a,b,c,h){h({});var l,o,p='',q=parent.regal.produkte;for(l in q){o=parent.regal.getProductInfos(l);if(o.category!='v')continue;p+='<option value="'+l+'">'+o.name+'</option>'};$$(parent.garten.document,'#ap_text')[0].innerHTML='Пока никто не видит, ты можешь еще <b>пару раз</b> попользоваться автоматом, только никому не говори!<br><br>Выбери продукт, который ты хочешь вырастить на свободных полях твоего сада.<br><span><select name="productid" id="productid">'+p+'</select>&nbsp;</span><br><span><button type="button" class="msg_input link" onclick="startAutoPlant();">Посадить</button></span>'};f();parent.ajaxRequestCommon=g}};if(page('garten_map.php'))startAutoPlant=function(){notify.wait('Идет посадка...');parent.regal.selectProduct(parent.garten.document.getElementById('productid').value);autoclick(function(N){if(N)notify.info('Посажено '+N+' растени'+ok(N,'е','я','ий'));else notify.error('Ничего не посажено!')});style('ap_div','display: none')};
// functions/autowater.js 
if(page('verkauf_map.php'))$('helfer_all').appendChild($('span',{className:'link',title:'Гном-помощник по поливу',style:"position:absolute;z-index:1;width:25px;height:45px;top:0px;right:425px;background:URL('//pics.wurzelimperium.de/pics/verkauf/kannenzwerg.gif') top left no-repeat",onclick:function(){notify.wait('Идет полив...');parent.selectMode(2,true,parent.selected);autoclick(function(N){if(N)notify.info('Полито '+N+' растени'+ok(N,'е','я','ий'));else notify.error('Ничего не полито!')})}}));
// functions/paintPlant.js 
if(page('garten_map.php'))(function(){var f=parent.Zeit.Client-parent.Zeit.Verschiebung;$$('.cursor',function(e){var g=e.id.replace(/\D/g,'');var l='';if(parent.garten.garten_kategorie[g]!='v')return;if(parent.garten.garten_zeit[g]<f)l='#0F0';if(parent.garten.garten_wasser[g]&&parent.garten.garten_wasser[g]<f-24*60*60)l='#00F';if(!parent.garten.garten_prod[g]||parent.garten.garten_prod[g]==41)l='#000';if(l)style(e,'opacity: 0.3; background: '+l)})})();
// functions/saveMarketPrice.js 
if(page('markt.php'))(function(){var f=/&v=(\d+)/.exec(L);if(!f)return;f=f[1];storage.set('/session/market/time/'+f,time());var g=$$($$('tr')[1],'td');if(!g[3])return;var l=g[3].innerHTML.replace(/\D+$/,'').replace(/[. ]/,'').replace(',','.');storage.set('/market/price/'+f,l)})();
// functions/simpList.js 
if(page('verkauf_map.php'))(function(){var i=0,j,f,g,l,o;while(parent.kunden['i'+i]){f=parent.kunden['i'+i].kundenId;g=parent.kunden['i'+i].a_string.split(':');l=parent.kunden['i'+i].p_string.split(':');i++;o={};for(j=0;j<l.length;j++)o[l[j]]=g[j];storage.set('/session/simp/'+f,o)}})();if(page('verkauf.php'))(function(){var p=function(x,d){d=Math.pow(10,d);return Math.round(x * d)/d};var f=kundenId;var q=$$('.blau');var r=q[q.length-1];var u=parseInt(r.innerHTML.replace(/\D/g,''))/100;var v,z,A='',B=0,s;var q=storage.get('/session/simp/'+f);for(v in q){z=storage.get('/market/price/'+v,0);B+=s=p(q[v] * z,2);A+='<div class="e'+v+'" style="display: inline-block;"></div> <span class="blau">'+q[v]+'x'+z+' = '+s+'</span><br>'};var r=$$('div');style(r[1],'text-align: left; padding: 0 0 0 30px; margin-top: -30px');r[1].innerHTML=A;$(r[r.length-2],u+' / '+p(B,2))})();
// functions/autoUpdateMarketPrice.js 
if(page('=garden'))(function(){var p=function(){$().appendChild($('iframe',{f:'hidden_market'}))};var q=function(f){$('hidden_market').src='/stadt/markt.php?filter=1&page=1&order=p&v='+f};var u=function(g,l){var r=Math.random();return Math.round(r *(l-g))+g};p();var v=0,o,z=time();for(o=1;o<data_products.length;o++)if(data_products[o].category=='v')if(z-storage.get('/session/market/time/'+o,0)>10*60)(function(o){setTimeout(function(){q(o)},v+=u(5,9)* 1000)})(o)})();

})();