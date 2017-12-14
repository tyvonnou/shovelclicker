var i = 0;

const myFunctionDroite = function moveToRightImage() {
	  var img = document.getElementById("pelle");
	  var t = img.style.transform.match(/(\d+)/g) || [0];  // on met ||[0) pour le 1st passage
	  var val = ( t[0] *1 +36) % 360;                      // incrémentation de 40
	  img.style.transform = 'rotate(' +val +'deg)';
};

	const myFunctionGauche = function moveToLeft() {
	  var img = document.getElementById("pelle");
	  var t = img.style.transform.match(/(\d+)/g) || [0];  // on met ||[0) pour le 1st passage
	  var val = ( t[0] *1 +(360 -36)) % 360;                      // incrémentation de 40
	  img.style.transform = 'rotate(' +val +'deg)';
};

qr("#pelle").addEventListener("click", function(){
	i++;
	var result = qr("#result > p > strong");
	result.innerHTML = i;
	if (i % 2 === 0) myFunctionDroite();
	else myFunctionGauche();
	
	
});

qrAll("tr").addEventListener("click", function(){
	alert(this.textContent);
});


