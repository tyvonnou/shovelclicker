'use strict';

class Annimation {
	constructor(idCanvas, shovelSrc, coalSrc) {
		this.canvas = document.getElementById(idCanvas);
		this.shovelSrc = shovelSrc;
		this.coalSrc = coalSrc;
	}

	getContext(contextType, contextAttributes=null) {
		return this.canvas.getContext(contextType, contextAttributes);
	}

	clear() {
		this.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawImg(src, sx, sy, sWidth, sHeight) {
		var img = new Image();
		img.onload = () => {
			this.getContext('2d').drawImage(img, sx, sy, sWidth, sHeight);
		}
		img.src = src;
	}

	drawShovel() {
		this.drawImg(this.shovelSrc, 0, 0, 300, 300);
	}

	drawAnimation(sx, sy) {
		this.clear();
		this.drawShovel();
		this.drawImg(this.coalSrc, sx, sy, 45, 45);
	}
}
