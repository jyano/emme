$Gx = function (a) {
	return new cjs.Gx(a).FS()
}
gx = cjs.Gx.prototype
gx._mt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.mt(o.x, o.y)
	return gx
}
gx._lt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.lt(o.x, o.y)
	return gx
}
gx.fancyLt = gx.poly = function (vs, f, s, w) {
	var gx = this, g = G(arguments), o
	o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
	if (o.cCL) {
		gx.cCL.apply(gx, o.cCL)
	}
	_.e(o.vs, function (v) {
		gx.lt(v[0], v[1])
	})
	gx.cp()
	return this
}
gxCir()
gxPol()
gxColor()
function gxCir() {
	gx._dc = function () {
		var gx = this, g = G(arguments), o
		o = g.O ? g.f :
				N(g.s) ? {x: g.f, y: g.s, r: g.t} :
				{r: g.f}
		return gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
	}
	gx.cir = function () {
		var gx = this, g = G(arguments), o
		o = g.O ? g.f :
				N(g.s) ?
				{x: g.f, y: g.s, r: g.t, fC: g.fo, sC: g.fi, ss: g.si} :
				{r: g.f, fC: g.s, sC: g.t, ss: g.fo}
		if (!g.n) {
			o.fC = o.fC || 'z'
			o.sC = o.sC || 'w'
			o.ss = N(o.ss, 4)
		}
		if (o.fC) {
			gx.fC(o.fC)
		}
		if (o.sC) {
			gx.sC(o.sC)
		}
		if (N(o.ss)) {
			gx.ss(o.ss)
		}
		return gx._dc(o)
	}
}
function gxPol() {
	gx._pol = function () {
		var gx = this, g = G(arguments)
		if (g.A) {
			return gx._pol.apply(gx, g.f)
		}
		gx.mt(g.f0, g.f1)
		_.e(_.r(g), function (pt) {
			gx.lt(pt[0], pt[1])
		})
		return gx.lt(g.f0, g.f1)
	}
	gx.pol = function (pts, f, s, w) {
		var gx = this, g = G(arguments)
		if (N(pts[0])) {
			g.e(function (pt) {
				gx.lt(pt[0], pt[1])
			})
		}
		else {
			gx.FS(f, s, w)
			_.e(pts, function (pt) {
				gx.lt(pt[0], pt[1])
			})
		}
		return gx.cp()
	}
}
function gxColor() {
	gx._ss = function () {	//=0//=0//=10//=false
		var gx = this, g = G(arguments)
		if (g.S_) {
			return gx._s(g.f)._ss.apply(gx, g.r)
		}
		var l = N(g.f, 4)
		var caps = g.s == 'r' ? 'round' : g.s == 's' ? 'square' : g.s == 'b' ? 'butt' : g.s
		var jts = N(g.t, 0)
		var mit = g.fo == 'r' ? 'round' : g.fo == 'm' ? 'miter' : g.fo == 'b' ? 'bevel' : N(g.fo, 100)
		var ignSc = g.n ? true : false
		gx.ss(l, caps, jts, mit, ignSc)
		return gx
	}
	gx.F = function (fC) {
		return this._f(fC || 'z')
	}
	gx.S = function (sC) {
		return this._s(sC || 'w')
	}
	gx.SS = function (thickness, caps, jts, mtrLm, igSc) {
		return this._ss(N(thickness, 4), caps, jts, mtrLm, igSc)
	}
	gx.FS = function (f, s, w) {
		// = gx.fs = gx.fC = gx.cCL
		var gx = this
		gx.F(f).S(s).SS(w)
		return gx
	}
	gx.C = function (f, s, w) {
		// = gx.fs = gx.fC = gx.cCL
		var gx = this
		gx.F(f)
		if (s) {
			gx.S(s)
		}
		if (w) {
			gx.SS(w)
		}
		return gx
	}
	gx._f = function (col) {
		return this.f(oO('c', col))
	}
	gx._s = function (col, thickness) {
		// = gx.col = gx.sC
		var gx = this
		gx.s(oO('c', col))
		if (N(thickness)) {
			gx.SS(thickness)
		}
		return gx
	}
}
gx._dr = function () {
	var gx = this, g = G(arguments), o
	o = g.O ? g.f : N(g.t) ?
	{x: g.f, y: g.s, w: g.t, h: g.fo} :
	{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	gx.dr(o.x, o.y, o.w, o.h)
	// drawRect ( x  y  w  h ) Graphics chainable :
	// Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
	return gx
}