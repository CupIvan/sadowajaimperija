<?php

$st = file_get_contents('i/script.js');

$st = preg_replace_callback('#(// ([a-z/.]+).*?\n).*?\n#is', 'f', $st);
function f($x)
{
	$st    = $x[1];
	$fname = "i/".$x[2];

	if (file_exists($fname))
		$st .= file_get_contents($fname);
	else
		$st = $x[0];

	return $st;
}

echo $st;
