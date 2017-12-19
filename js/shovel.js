var i = 0, money = 0;

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
	let meters = i;
	for (key in incrementBonus) {
		i = Math.round10(i + incrementBonus[key], -1);
	}
	qr("#result").textContent = i;
	if (i != meters) {
		loot();
	}
}

const resetposition = function resetposition () {
		var img = document.getElementById("pelle");
		var t = img.style.transform.match(/(\d+)/g) || [0];  // on met ||[0) pour le 1st passage
		var val = 0;                      // incrémentation de 40
		img.style.transform = 'rotate(' +val +'deg)';
}

const loot = function lootTresor () { //TODO: Generate random word
	var cat, index;
	for (let keyStr in gain) {
		let keyArray = keyStr.split(";", 2);
		let div = qr('#div-loot');
		if (i >= keyArray[0] && i <= keyArray[1]) {
			index = randIndex(gain[keyStr]);
			if (gain[keyStr][index]['total']) {
				gain[keyStr][index]['total'] += 1;
			} else {
				gain[keyStr][index]['total'] = 1;
			}
			money += gain[keyStr][index]['value'];
			qr('#argent').textContent = money;
			if (div.childElementCount === 5) {
				removeAllChild(div);
			}
			let p = document.createElement('P');
			p.innerHTML = `
				Nom : <b>${gain[keyStr][index]['name']}</b> <br /> 
				Valeur : <b>${gain[keyStr][index]['value']}</b>`;
			div.appendChild(p);
			break;
		}
	}
}


const incrementBonusInterval = window.setInterval(incrementBonusAuto, 1000);


var incrementBonus = {};


qr("#pelle").addEventListener("mouseup", function(){
	i++;
	loot();
	let result = qr("#result");
	result.textContent = i;
	myFunctionGauche();
});


qr("#pelle").addEventListener("mousedown", function(){
	let result = qr("#result");
	result.textContent = i;
	myFunctionDroite();
});



qr("#pelle").addEventListener("mouseout", function(){
		resetposition();
		let result = qr("#result");
		result.textContent = i;
});

qr('#tbody-bonus').addEventListener('click', function (evt) {			//Récupération de l'élément parent (th/td)
	var parent = evt.target.parentElement;
	if (parent.tagName === 'TR') {
		console.log(parent);
		console.log('bonus', parent.id);
		incrementBonus[parent.id] =  Math.round10(incrementBonus[parent.id] + bonus[parent.id], -1);
		qr('#total-' + parent.id).textContent = incrementBonus[parent.id];
		console.log(incrementBonus);

	}
});
