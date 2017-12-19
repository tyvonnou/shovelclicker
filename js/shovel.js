var i = 0, money = 0, divLootEvenPair = 1, gainArray = [];

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
		for (key in incrementBonus) {
			if (incrementBonus[key] > 0) loot();			
		}
	}
}

const resetposition = function resetposition () {
		var img = document.getElementById("pelle");
		var t = img.style.transform.match(/(\d+)/g) || [0];  // on met ||[0) pour le 1st passage
		var val = 0;                      // incrémentation de 40
		img.style.transform = 'rotate(' +val +'deg)';
}

const loot = function lootTresor () { //TODO: Generate random word
	var cat, index, div = qr('#div-loot');
	for (let key in gainObj) {
		if (i >= parseInt(key)) {
			gainObj[key].data.forEach(element => {
				element.color = gainObj[key].color;
				gainArray.push(element);
			});
		}
	}	
	if (gainArray.length > 0) {
		cat = randArray(gainArray);
		if (cat['total']) {
			cat['total'] += 1;
		} else {
			cat['total'] = 1;
		}
		money += cat['value'];
		qr('#argent').textContent = money;
		if (div.childElementCount === 10) {
			if (div.lastChild.nodeName === "#text") {
				div.removeChild(div.lastChild);
			}
			div.removeChild(div.lastChild);
		}
		let p = document.createElement('P');
		p.innerHTML = `
			Nom : <b>${cat['name']}</b> <br /> 
			Valeur : <b>${cat['value']}</b>
		`;
		p.style.backgroundColor = cat['color'];
		if (div.hasChildNodes()) {
			div.insertBefore(p, div.firstChild);
		} else  {
			div.appendChild(p);
		}
//				if (divLootEvenPair%2 === 0) {
//					p.classList.add('even');
//					divLootEvenPair += 1;
//				} else {
//					p.classList.add('odd');
//					divLootEvenPair = 0;
//				}
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
		if (money >= bonus[parent.id].price) {
			incrementBonus[parent.id] =  Math.round10(incrementBonus[parent.id] + bonus[parent.id].value, -1);
			qr('#total-' + parent.id).textContent = incrementBonus[parent.id];
			money -= bonus[parent.id].price;
			incrementBonusAuto();
		}
	}
});
