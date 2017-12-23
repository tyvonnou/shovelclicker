'use strict';



/**
 * Care of shovel 2d annimation
 * 
 * @class Annimation
 */
class Annimation {
	/**
	 * Creates an instance of Annimation.
	 * @param {string} idCanvas - id of a HTMLCanvasElementHTMLCanvasElement
	 * @param {string} shovelSrc - source of shovel picture
	 * @param {any} coalSrc - source of coal picture
	 * @memberof Annimation
	 */
	constructor(idCanvas, shovelSrc, coalSrc) {
		this.canvas = document.getElementById(idCanvas);
		this.shovelSrc = shovelSrc;
		this.coalSrc = coalSrc;
	}

	/**
	 * get context of the HTMLCanvasElementHTMLCanvasElement
	 * 
	 * @param {string} contextType - context to get
	 * @param {object} [contextAttributes=null] - attribute of context
	 * @returns {RenderingContext} - See https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext#Return_value
	 * @memberof Annimation
	 */
	getContext(contextType, contextAttributes=null) {
		return this.canvas.getContext(contextType, contextAttributes);
	}

	/**
	 * clear the HTMLCanvasElementHTMLCanvasElement
	 * 
	 * @memberof Annimation
	 */
	clear() {
		this.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	/**
	 * Draw a picture in HTMLCanvasElement
	 * 
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage|CanvasRenderingContext2D.drawImage()}
	 * @param {string} src - Source of a picture
	 * @param {int} dx - The X coordinate in the destination canvas at which to place the top-left corner of the source image.
	 * @param {int} dy - The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
	 * @param {int} dWidth - The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
	 * @param {int} dHeight - The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.
	 * @memberof Annimation
	 */
	drawImg(src, dx, dy, dWidth, dHeight) {
		var img = new Image();
		img.onload = () => {
			this.getContext('2d').drawImage(img, dx, dy, dWidth, dHeight);
		}
		img.src = src;
	}
	/**
	 * Draw shovel picture
	 * 
	 * @see Annimation.drawImg()
	 * @memberof Annimation
	 */
	drawShovel() {
		this.drawImg(this.shovelSrc, 0, 0, 300, 300);
	}

	/**
	 * Draw shovel and coal pictures
	 * 
	 * @see Annimation.drawImg()
	 * @param {int} dx - The X coordinate in the destination canvas at which to place the top-left corner of the source image.
	 * @param {int} dy - The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
	 * @memberof Annimation
	 */
	drawAnimation(dx, dy) {
		this.clear();
		this.drawShovel();
		this.drawImg(this.coalSrc, dx, dy, 45, 45);
	}
}
