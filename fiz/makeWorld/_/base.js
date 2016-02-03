$Wor = function () {
	//= _$W
	var g = G(arguments), o
	o = // g.O? g.f:
			g.O_ ? {grav: g.f, doSleep: g.s} :
					N(g.s) ? {grav: V(g.f, g.s), doSleep: g.t} :
							N(g.f) ? {grav: V(0, g.f), doSleep: g.s} :
							{grav: V(0, 10), doSleep: g.f}
	o.doSleep = U(o.doSleep) ? true : o.doSleep ? true : false
	return w = new b2d.W(o.grav, o.doSleep)
}


$box = function () {
	bx.can()
	$Wor().bug()
	w.loop()
	return w
}


$boxFn = function (fn) {
	return function () {
		$box()
		fn()
	}
}
w.GG = function () {
	return this.GetGravity()
}
w.SG = function (gv) {
	this.SetGravity(gv);
	return this
}
w.gv = w.G = function (x, y) {
	var w = this, v, gv
	var gv = w.GG()
	if (U(x)) {
		return gv
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-gv.x, -gv.y)
	}
	return w.SG(v)
	function alt() {
		w.G = function (x, y) {
			var v, currGrav = this.GetGravity()
			if (U(x)) {
				return currGrav
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			if (x == 'flip') {
				v = V(-currGrav.x, -currGrav.y)
			}
			w.SetGravity(v)
			return this
		}
		w.G = function (x, y) {
			var w = this,
					v, currG = w.GetGravity()
			if (U(x)) {
				return currG
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			else if (x == 'flip') {
				v = V(-currG.x, -currG.y)
			}
			w.SetGravity(v)
			return w
			function alt() {
				w.G = function (x, y) {
					var v, currGrav = this.GetGravity()
					if (U(x)) {
						return currGrav
					}
					if (N(x)) {
						v = N(y) ? V(x, y) : V(0, x)
					}
					if (x == 'flip') {
						v = V(-currGrav.x, -currGrav.y)
					}
					w.SetGravity(v)
					return this
				}
			}
		}
	}
}
w.GG = function () {
	return this.GetGravity()
}
w.SG = function (gv) {
	this.SetGravity(gv);
	return this
}
w.gv = w.G = function (x, y) {
	var w = this, v, gv
	var gv = w.GG()
	if (U(x)) {
		return gv
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-gv.x, -gv.y)
	}
	return w.SG(v)
	function alt() {
		w.G = function (x, y) {
			var v, currGrav = this.GetGravity()
			if (U(x)) {
				return currGrav
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			if (x == 'flip') {
				v = V(-currGrav.x, -currGrav.y)
			}
			w.SetGravity(v)
			return this
		}
		w.G = function (x, y) {
			var w = this,
					v, currG = w.GetGravity()
			if (U(x)) {
				return currG
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			else if (x == 'flip') {
				v = V(-currG.x, -currG.y)
			}
			w.SetGravity(v)
			return w
			function alt() {
				w.G = function (x, y) {
					var v, currGrav = this.GetGravity()
					if (U(x)) {
						return currGrav
					}
					if (N(x)) {
						v = N(y) ? V(x, y) : V(0, x)
					}
					if (x == 'flip') {
						v = V(-currGrav.x, -currGrav.y)
					}
					w.SetGravity(v)
					return this
				}
			}
		}
	}
}