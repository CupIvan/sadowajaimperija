// ==UserScript==
// @name           Molehill Empire Beta
// @namespace      sadowajaimperija_beta
// @description    Usefull script for game (v5)
// @author         CupIvan <mail@cupivan.ru>
// @version 5.0
// @dateModify     18.11.11
// @include        http://*.sadowajaimperija.ru/*
// @include        http://*.bg.molehillempire.com/*
// @include        http://*.molehillempire.com/*
// @include        http://*.wurzelimperium.de/*
// @include        http://*.molehillempire.es/*
// @include        http://*.kertbirodalom.hu/*
// @include        http://*.molehillempire.nl/*
// @include        http://*.molehillempire.ro/*
// @include        http://si.cupivan.ru/download.php*
// ==/UserScript==

var SCRIPT_VERSION = '5.0';

var s = document.createElement('script');
s.src = 'http://si.cupivan.ru/beta/script_'+SCRIPT_VERSION.replace(/^../, '')+'.js';
document.body.appendChild(s);