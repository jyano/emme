 
cx.shdC = function (c) {
	var cx = this
	if (U(c)) {
		return cx.shadowColor
	}
	cx.shadowColor = oO('c', c)
	return cx
}
cx.shdX = function (c) {
	var cx = this
	if (U(x)) {
		return cx.shadowOffsetX
	}
	cx.shadowOffsetX = c
	return cx
}
cx.shdY = function (shdY) {
	var cx = this
	if (U(shdY)) {
		return cx.shadowOffsetY
	}
	cx.shadowOffsetY = shdY
	return cx
}
cx.shdB = function (shdB) {
	var cx = this
	if (U(shdB)) {return cx.shadowBlur}
	this.shadowBlur = shdB
	return this
}
cx.shd = function (color, x, y, num) {
	cx = this
	cx.shdC(color)
	cx.shdX(x).shdY(y)
	cx.shdB(num)
	return cx
}
_canShadow = function (el) {
	el.shC = el.shdC = el.shadowColor = function (c) {
		var cv = this, cx = cv.context
		if (U(c)) {
			return cx.shadowColor
		}
		cx.shadowColor = oO('c', c)
		return cv
	}
	el.shdB = el.shB = el.shadowBlur = function (blNum) {
		var cv = this,
		 cx = cv.context
		if (U(blNum)) {
			return cx.shadowBlur
		}
		cx.shadowBlur = blNum
		return cv
	}
	el.shdX = el.shX = el.shadowOffsetX = function (x) {
		var cv = this, cx = cv.context
		if (U(x)) {
			return cx.shadowOffsetX
		}
		cx.shadowOffsetX = x
		return cv
	}
	el.shY = el.shdY = el.shadowOffsetY = function (y) {
		var cv = this, cx = cv.context
		if (U(y)) {
			return cx.shadowOffsetY
		}
		cx.shdY(y)
		return cv
	}
	el.shd = el.shadow = function (color, x, y, num) {
		var cv = this, cx = cv.context
		el.shadowColor(color)
		el.shadowOffsetX(x).shadowOffsetY(y)
		el.shadowBlur(num)
		return el
	}
	return el
}
 