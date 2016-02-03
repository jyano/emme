w._sB = function (x, y, fD) {
	var b = this.CB($sB(x, y))
	if (fD) {
		b.cF(fD)
	}
	return b
}
w.CB = function (bD) {
	var b = this.CreateBody(bD)
	return b
}
w.cB = function (bD, fD) {
	var w = this, g = G(arguments), o
	var b = w.CB(g.f)
	if (g.s) {
		b.f(g.s)
	}
	return b
}
w.cCB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cCF(r)
	return b
}
w.cRB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cRF(r)
	return b
}
w.sB = w.cS = w.cSF = w.sF = w.S = w.stat = function (x, y, fD) {
	if (!fD) {
		return this._sB(x, y)
	}
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return this.cF($sB(x, y), fD)
	function alt() {
		w.stat = function (x, y, fD) {
			var w = this
			if (O(x)) {
				fixtDef = y;
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 500
			y = N(y) ? y : 250
			return w.A($sB(x, y), fD)
		}
	}
}
w.dB = function (x, y) {
	return this.CB($dB(x, y))
}
w.cTri = w.tri = function (x, y) {
	return this.sB(x, y), $fD($pH()).SAA([
		V(-1, 0), V(0, -1), V(1, 0)
	], 3)
}
$ba = $xyr = $xyR = function () {
	var b = w.dB(545, 195)
	b.A($cF(50).DBF())
	return b
}
$sqH = function () {
	var g = G(arguments)
	var o = N(g.t) ?
	{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
	{sz: g.f, rt: g.s}
	o.sz = o.sz || 50
	return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
}
w.dynX = w.dynamicX = function (x, y, fD) {
	var w = this, body
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	return w.body(b2d.dyn(x, y), fD)
}
w.dR = w.cRF = w.$dR = w.$rD = w.rD = function () {
	var w = this, g = G(arguments);
	var b = w.sB(g.f, g.s)
	b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
	return b.dyn()
}
w.sR = w.rS = w.$sR = w.$rS = function () {
	return this.cRF.apply(this, arguments).stat()
}
w.dC = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return cF
}
w.dC_ = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return b
}
w.dC__ = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return w
}
w.sC = function (x, y, r) {
}
////////////////////////
function soon() {
	w.boxOld = function (x, y, W, H) {//=brk=brick=
		w.circleStat = function (x, y, r) {
			var cir = w.sB(x, y)
			cir.A($cir(N(r, 50)))
			return cir
		}
		w.circle = function (x, y, r) {
			var cir = w.dB(x, y)
			cir.A($cir(N(r, 50)))
			return cir
		}
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 50;
		H = N(H) ? H : W
		return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
		w.brickOld = function (x, y, W, H) {//=brk=brick=
			x = N(x) ? x : 60;
			y = N(y) ? y : x
			W = N(W) ? W : 30;
			H = N(H) ? H : W
			return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')
		}
	}
	w.aRF = function () {
		var w = this, g = G(arguments)
		var b = w.sB(g.f, g.s)
		b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
		return w
	}
	w.aCF = function (x, y, r) {
		var w = this
		var b = w.dB(x, y)
		var cF = b.cCF(r)
		return w
	}
// uses k:
	w.box = w.bi = function (x, y, W, H) {
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 50;
		H = N(H) ? H : W
		return this.A($dB(x, y), $rF(W, H)).K('box')
	}
	w.cF = function (bD, fD) {
		return this.cB(bD).cF(fD)
	}
}
w.vsK = w.vertsKin = function (x, y, arrs) {
	var b = this.kin(x, y)
	_.e(arrs, function (arr) {
		b.convex(arr[0], _.r(arr))
	})
	return b
}
w.perch = w.skyPerch = function (col) {
	var w = this
	col = col || 't'
	w.S(200, 50, col, 300, 20) //top
	w.S(200, 360, col, 300, 20) //bottom
	w.S(60, 240, col, 20, 260) //left
	w.S(340, 320, col, 20, 100)//right
	return w
}