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


const shovelclick = function shovelclick() {				// Fonction qui realise le mouvement de la pelle 
	qr("#pelle").addEventListener("mouseup", function(){  
		var result = qr("#result > p > strong");
		result.innerHTML = i;
		myFunctionGauche();
	});

	qr("#pelle").addEventListener("mousedown", function(){
		i++;
		var result = qr("#result > p > strong");
		result.innerHTML = i;
		myFunctionDroite();
	});
	
}

shovelclick();						
	




