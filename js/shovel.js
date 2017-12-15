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

const incrementBonusAuto = function () {
	for (key in incrementBonus) {
		i = Math.round10(i + incrementBonus[key], -1);
	}
	qr("#result > p > strong").textContent = i;
}

const resetposition = function resetposition () {
		var img = document.getElementById("pelle");
		var t = img.style.transform.match(/(\d+)/g) || [0];  // on met ||[0) pour le 1st passage
		var val = 0;                      // incrémentation de 40
		img.style.transform = 'rotate(' +val +'deg)';
}
const incrementBonusInterval = window.setInterval(incrementBonusAuto, 1000);

var incrementBonus = {};


qr("#pelle").addEventListener("mouseup", function(){  
	i++;
	let result = qr("#result > p > strong");
	result.textContent = i;
	myFunctionGauche();
});


qr("#pelle").addEventListener("mousedown", function(){
	let result = qr("#result > p > strong");
	result.textContent = i;
	myFunctionDroite();
});



qr("#pelle").addEventListener("mouseout", function(){
		resetposition();
		let result = qr("#result > p > strong");
		result.textContent = i;
});

qr('#table-bonus').addEventListener('click', function (evt) {			//Récupération de l'élément parent (th/td)
	var parent = evt.target.parentElement;	
	if (parent.tagName === 'TR') {
		console.log(parent);
		console.log('bonus', parent.id);
		incrementBonus[parent.id] =  Math.round10(incrementBonus[parent.id] + bonus[parent.id], -1);
		qr('#total-' + parent.id).textContent = incrementBonus[parent.id];
		console.log(incrementBonus);
		
	}
});






