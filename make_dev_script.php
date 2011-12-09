<?php

$st = file_get_contents('beta/script.5.1.js');
//echo $st; exit;

$st = preg_replace_callback('#(// ([a-z/.]+).*?\n).*?\n#is', 'f', $st);
function f($x)
{
	$st    = $x[1];
	$fname = "beta/".$x[2];

	if (file_exists($fname))
		$st .= file_get_contents($fname);
	else
		$st = $x[0];

	return $st;
}

$st = str_replace('g = { ', 'g = { version: "NEW", ', $st);

echo $st;
