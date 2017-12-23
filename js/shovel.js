var i = 0, money = 0, divLootEvenPair = 1, gainArray = [];
var system;


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
	watchi();
}

const resetposition = function resetposition () {
		var img = document.getElementById("pelle");
		var t = img.style.transform.match(/(\d+)/g) || [0];  // on met ||[0) pour le 1st passage
		var val = 0;                      // incrémentation de 40
		img.style.transform = 'rotate(' +val +'deg)';
}

const loot = function lootTresor () {
	var cat, index, div = qr('#div-loot');
	for (let key in gainObj) {
		if (gainObj.hasOwnProperty(key)) {
			if (gainObj[key].hasOwnProperty('data')) {
				if (i >= parseInt(key)) {
					gainObj[key].data.forEach(element => {
						element.color = gainObj[key].color;
						gainArray.push(element);
					});
				}
			}
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


// const draw = function drawImgCanvas(sx, sy, sWidth, sHeight) {
// 	var ctx = document.getElementById('coalcanvas').getContext('2d');
// 	var coal = new Image();
// 	var shovel = new Image();
// 	coal.onload = function() {
// 		ctx.drawImage(coal, sx, sy, sWidth, sHeight);
// 	}
// 	shovel.onload = function () {
// 		ctx.drawImage(shovel, 0, 10, 150, 150);
// 	}
// 	coal.src = 'images/minecraft-icons-pack-by-chrisl/Coal.png';
// 	shovel.src = 'images/minecraft-icons-pack-by-chrisl/Iron-Shovel.png';
// }
//
// const draw = function drawImgCanvas(idCanvas, sx, sy, sWidth, sHeight) {
// 	var ctx = document.getElementById(idCanvas).getContext('2d');
// }
//
// const clearCanvas = function () {
// 	var canvas = document.getElementById('coalcanvas');
// 	var ctx = canvas.getContext('2d');
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

//const annim = function () {
//	draw(1 * 50, 0, 45, 45);
//}

const watchi = function () {				//Affichege de i
	let result = qr("#result");
	let title = qr('title')
	title.textContent = i + " - Shovel Clicker";
	result.textContent = i;
}


var incrementBonus = {};

document.addEventListener('DOMContentLoaded', function () {
	const annim = new Annimation(
		'coalcanvas',
		'images/minecraft-icons-pack-by-chrisl/Iron-Shovel.png',
		'images/minecraft-icons-pack-by-chrisl/Coal.png'
	);
	annim.drawShovel();
	
	qr('#coalcanvas').addEventListener("mousedown", function () {
		i++;
		loot();
		watchi();
		annim.drawAnimation(300, 150);
	});
	
	qr("#coalcanvas").addEventListener("mouseup", function(){
		annim.drawAnimation(225, 225);
	});

	qr("#coalcanvas").addEventListener("mouseout", function () {
		annim.drawShovel();
	});

	qr('#tbody-bonus').addEventListener('click', function (evt) {			//Récupération de l'élément parent (th/td)
		var parent = evt.target.parentElement;
		if (parent.tagName === 'TR') {
			if (money >= bonus[parent.id].price) {
				incrementBonus[parent.id] = Math.round10(incrementBonus[parent.id] + bonus[parent.id].value, -1);
				qr('#total-' + parent.id).textContent = incrementBonus[parent.id];
				money -= bonus[parent.id].price;
				incrementBonusAuto();
			}
		}
	});
}, false);

