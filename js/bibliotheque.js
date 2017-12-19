const qr = function QuerySelector (chaine){
	return document.querySelector(chaine);
}

const qrAll = function querySelectorAll (chaine){
	return document.querySelectorAll(chaine);
}

const ajaxx = function requeteAjaxText(url, args, method="POST") {
	return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function (evt) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    if (this.getResponseHeader("Content-Type") === "application/json") {
                        resolve(JSON.parse(this.responseText));
                    }
                    resolve(this.responseText);
                }
                reject({
                    code:this.status,
                    text:this.statusText
                });
            }
        }
        if (args != null) {
            var params = '';
            for (key in args) {
                let element = args[key];
                params += key + '=' + element + '&'; //?machin=2&
            }
        }
        xhr.send(params);
    });
}

const randArray = function pickRandomElementInArray(items) {
	return items[Math.floor(Math.random()*items.length)];
}

const randIndex = function pickRandomIndexInArray(items) {
	return Math.floor(Math.random()*items.length);
}


/**
 * Remove all children of an HTML element
 * @param {DOMElement} node - html element
 */

const removeAllChild = function removeAllChild(node) {
    while (node.hasChildNodes()) {
    	console.log(node.lastChild);
        node.removeChild(node.lastChild);
    }
};