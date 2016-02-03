w.kin = function (x, y, fixtDef) {
	var body
	if (O(x)) {
		fixtDef = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	body = this.A(b2d.kin(x, y), fixtDef)
	return body
}
w.vsK = w.vertsKin = function (x, y, arrs) {
	var b = this.kin(x, y)
	_.e(arrs, function (arr) {
		b.convex(arr[0], _.r(arr))
	})
	return b
}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
w.K = w.kin = function (x, y, fD) {
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return w.A($kB(x, y), fD)
}
w.vertsKin = function (x, y, arrs) {
	var bod = this.kin(x, y)
	_.each(arrs, function (arr) {
		bod.convex(arr[0], _.rest(arr))
	})
	return bod
}
w.K = function () {
	return this.B.apply(this, arguments).kin()
}
function kin() {
	bD.kin = function () {
		return this.T(1)
	}
	bD.kin = function () {
		return this.T(1)
	}
}
w.kin = function (x, y, fixtDef) {
	var body
	if (O(x)) {
		fixtDef = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	body = this.A(b2d.kin(x, y), fixtDef)
	return body
}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
w.K = w.kin = function (x, y, fD) {
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return w.A($kB(x, y), fD)
}
w.vertsKin = function (x, y, arrs) {
	var bod = this.kin(x, y)
	_.each(arrs, function (arr) {
		bod.convex(arr[0], _.rest(arr))
	})
	return bod
}
w.sB = function (x, y) {
	return this.cB($sBD(x, y))
}
w.kB = function (x, y) {
	return this.cB($kBD(x, y))
}
w.kB = function (x, y) {
	return this.CB($kB(x, y))
}
w.sB = function (x, y) {
	return this.cB($sB(x, y))
}
w.kB = function (x, y) {
	return this.cB($kBD(x, y))
}
w.kB = function (x, y) {
	return this.CB($kB(x, y))
} 