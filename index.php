<?php
$filename = "json/bonus.json";
$handle = fopen($filename,"r");
$bonus = json_decode(fread($handle, filesize($filename)));
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tresor cache</title>
<script src='js/bibliotheque.js'></script>
<link href="default.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<figure>
		<figcaption>Creuse et trouve le tresor ! :</figcaption>
		<img alt="pelle" src="images/pelle.png" id="pelle" class=""/>
	</figure>
	<div id="result">
		<p>Nombre de metres creuses : <strong></strong></p>
	</div>
	
	<table>
		<?php foreach ($bonus as $key => $value):?>
			<tr id="tr<?=$key ?>">
				<th><?=$key ?></th>
				<td><?=$value ?></td>
			</tr>
		<?php endforeach;?>
	</table>
	 <!--  <button onclick="myFunctionGauche()"> Gauche </button>
    <button onclick="myFunctionDroite()"> Droite </button> --> <!-- Bouton de test -->
	<script src="js/shovel.js"></script>
</body>