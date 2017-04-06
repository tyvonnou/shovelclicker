var i = 0;

qr("#pelle").addEventListener("click", function(){
	i++;
	var result = qr("#result > p > strong");
	result.innerHTML = i;
	
});

qrAll("tr").addEventListener("click", function(){
	alert(this.textContent);
});

