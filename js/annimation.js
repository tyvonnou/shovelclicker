'use strict';

const Annimation = class Annimation {
	construct(idCanvas, shovelSrc, coalSrc) {
		this.canvas = document.getElementById(idCanvas);
		this.shovelSrc = shovelSrc;
		this.coalSrc = coalSrc;
		this.i = 0
	}
	
	clear() {
		var ctx = this.canvas.getContext('2d');
		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	
	drawImg(src, sx, sy, sWidth, sHeight) {
		var ctx = this.canvas.getContent('2d');
		var img = New Image();
		img.onload = function () {
			ctx.drawImage(img, sx, sy, sWidth, sHeight);
		}
		img.src = src;
	}
	
	drawShovel() {
		this.drawImg(this.shovelSrc, 0, 10, 300, 300);
	}
	
	drawAnnimation() {
		this.i += 1;
		this.clear();
		this.drawShovel();
		if (i % 2 === 0) {
			this.drawImg(this.coalSrc, 50, 30, 45, 45);
		} else {
			this.drawImg(this.coalSrc, 75, 0, 45, 45);
		}
	}
}