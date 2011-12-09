// ==UserScript==
// @name           Molehill Empire Beta
// @namespace      sadowajaimperija_beta
// @description    Usefull script for game (v5)
// @author         CupIvan <mail@cupivan.ru>
// @version 5.1
// @dateModify     09.12.11
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

var SCRIPT_VERSION = '5.1';

var s = document.createElement('script');
s.src = 'http://si.cupivan.ru/beta/script.'+SCRIPT_VERSION+'.js';
document.body.appendChild(s);
