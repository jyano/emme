cx.tf = function () {
	this.transform.apply(this, arguments)
	return this
}
cx.sTf =  function () {
	this.setTransform.apply(this, arguments)
	return this
}
cx.tl = function (tX, tY, rt, sX, sY) {// this.translate.apply(this, arguments)
	this.translate(tX, tY)
	if (N(rt)) {
		this.rt(rt)
	}
	if (N(sX)) {
		this.sc(sX, sY)
	}
	return this
}
//
_canTransform = function (el) {
	el.translate = el.tr = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1,
				 Y = g[1] || X
		x.x.translate(X, Y)
	}
	el.transform = el.tf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('t', a, c, e, b, d, f)
	}
	el.setTransform = el.stf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('st', a, c, e, b, d, f)
	}
	return el
}

function scale() {
	x.sX = function (x) {
		return this.sc(x, 1)
	}
	x.sY = function (y) {
		return this.sc(1, y)
	}
	x.sc = x.Z = function (x, y) {
		y = N(y, x)
		this.scale(x, y);
		//this.scale.apply(this, arguments)
		return this
	}
	el.scaleImCen = function (img, s) {
		var w = this.W(), h = this.H(), s = s || 1
		this.draw(img,
				w * s / -2 + w / 2,
				h * s / -2 + h / 2//+ w/2
				,
				w * s,
				h * s)
	}
	el.scaleImCenSpiralMe = function () {
		var scaleNum = 1,
				that = this
		_.times(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
	el.scaleImCenSpiral = function () {
		var scaleNum = 1,
				that = this
		_.times(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
//give scale cos(rads), skew:sin(rads)  ??
	el.norm = function () {
		el.context.scale(this.W() / 10, this.H() / 10)
		return this
	}
	el.scale = el.sc = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1, Y = g[1] || X
		x.x.scale(X, Y)
	}
}
function rotat() {
	x.rt = function (n) {
		this.rotate(M.tR(n));
		return this
	}
	el.rotate = el.rt = function (r) {
		var g = G(arguments),
				r = g[0] || 1
		//r=pi(-6)*r
		//x.fr(0,0,1,1)
		//x({f:$r('c')
		x.x.rotate(r)
	}
} 
scale()
rotat()
 //fit

cx.fit = function (i, x, y) {//i = i || 'me'
	var cx=this,cv=cx.canvas
	x = N(x, 0)
	y = N(y, 0)
	cx.dI(i, x, y, cv.width, cv.height)
	return cx
}
 
$.fit = function (a, b, c) {
	return $.cx(c || 'r', b || 700, b || 700) 
			.fit(a || 'me').$cv().dgb()}
$.fn.fitMug = $.fn.mug = function (ur) {
	var cv = this
	$.post('/mug', {u: ur}, function (mug) {
		cv.fit(mug)
	})
	return cv
}
cv.fit = function (i, x, y) {
	var cv = this, cx = cv.gC()
	cx.fit.apply(cx, arguments)
	return cv
}
 