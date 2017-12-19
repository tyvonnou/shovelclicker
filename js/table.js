var bonus, gainObj;

window.onload = function () {
	ajaxx('json/bonus.json').then((res) => {
		bonus = res;
		var tbody = qr('#tbody-bonus');
		for (let key in res) {
			incrementBonus[key] = 0;
			let tr = document.createElement('TR');
			let th = document.createElement('TH');
			let tdValue = document.createElement('TD');
			let tdTotal = document.createElement('TD');
			tr.id = key;
			th.innerHTML = `${key}<br />(${res[key].price})`;
			tdValue.textContent = res[key].value;
			tdTotal.textContent = 0;
			tdTotal.id = 'total-' + key
			tr.appendChild(th);
			tr.appendChild(tdValue);
			tr.appendChild(tdTotal);
			tbody.appendChild(tr);
		}
	}).catch((err) => {
		console.error(err);
	});

	ajaxx('json/gain.json').then((res) => {
		gainObj = res;
	}).catch((err) => {
		console.error(err);
	}); 
}
