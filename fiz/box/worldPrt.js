 
 $l('worldPt')
w.A = function (bD, fD) {
	var w = this, g = G(arguments), o
	w.cB(g.f, g.s)
	return w
}

w.CB = function (bD) {
	var b = this.CreateBody(bD)
	return b
	w.cB_conflictWithCircleBodyPerhaps = function (bD, fD) {
		var w = this, g = G(arguments), o
		var b = w.CB(g.f)
		if (g.s) {
			b.f(g.s)
		}
		return b
	}
}
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
w.dB = function (x, y) {
	return this.CB($dB(x, y))
}
w.GBL = w.bd = w.bs = function () {
	//= w.bL = 
	return this.GetBodyList()
}
w.fixts = function (x, y, f) {
	var w = this
	f = b2d.fixts[f]
	return w.B(x, y, f)
}
w.left = w.horiz = function (num) {
	num = N(num) ? num : 4
	this.each(function (b) {
		b.X(num, '-')
	})
}
w.up = w.vert = function (num) {
	num = N(num) ? num : 4
	this.each(function (b) {
		b.Y(num, '-')
	})
} 
w.GBL = w.bL = w.bd = w.bs = function () {
	return this.GetBodyList()
}
w.aAF = w.aF__ = function () {
	var w = this, g = G(arguments)
	w.aF.apply(w, g)
	return w
}
w.R = function (c, W, H, x, y) {
	alert('w.R')
	var w = this, g = G(arguments),
			wC = w.cen(),
			r
	if (!S(g.f)) {
		y = x;
		x = H;
		H = W;
		W = c;
		c = 'x'
	}
	if (U(W)) {
		W = 200
		H = 200
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(H)) {
		H = W
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(x)) {
		x = wC.x - W / 2;
		y = wC.y - H / 2
	}
	return w.S(
			x + W / 2,
			N(y, x) + H / 2,
			c,
			W, H
	)
	old = function () {
		/*
		 x=N(g[0])?g[0]:wC.x
		 y=N(y)?y:N(g[0])?N(g[0]):wC.y
		 W=N(W)?W:100
		 H=N(H)?H:W
		 */
	}
}
w.vW = function (col, H, x, y) {
	 
	var w = this, g = G(arguments),
			cW = w.can.W(),
			cH = w.can.H()
	if (!S(col)) {
		y = x;
		x = H;
		H = col;
		col = 'x'
	}
	H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
	if (U(x)) {
		x = cW / 2;
		y = cH / 2 - H / 2
	}
	else if (U(y)) {
		x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
		y = cH / 2 - H / 2
	}
	//x-=10?
	return w.R(col, 20, H, x, y).bo(.2).K('wall')
}
  
 
w.dB = function (x, y) {
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
	return this.CB($dB(x, y))
}

function circ(){
	w.cCB = function (x, y, r) {
		var w = this
		var b = w.dB(x, y)
		var cF = b.cCF(r)
		return b
	}
	w.dC = function (x, y, r) {
		var w = this
		var b = w.dB(x, y)
		var cF = b.CF($cF(r))
		return b
	}
	w.sC = function (x, y, r) {
		var w = this
		var b = w.sB(x, y)
		var cF = b.CF($cF(r))
		return b
	}
	w.dC_x = function (x, y, r) {
		var w = this
		var b = w.dB(x, y)
		var cF = b.CF($cF(r))
		return b
	}
	w.dC__x = function (x, y, r) {
		var w = this
		var b = w.dB(x, y)
		var cF = b.CF($cF(r))
		return w
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
}
function rel(){
	w.sTW = w.sToW = w.gTL = function (x, y) { //works
		var w = this,
				x = x / w.z - w.s.x / w.z,
				y = y / w.z - w.s.y / w.z
		//w.dot(x,y,'*') // cool
		return {x: x, y: y}
	}
	w.wTS = w.wToS = w.lTG = function (x, y) {//also works!
		var w = this,
				x = (x + w.s.x / w.z) * w.z,
				y = (y + w.s.y / w.z) * w.z
		//w.dot(x,y,'*') // cool
		return {x: x, y: y}
	}
}
function ground() {
	w.GGB = w.grB = w.gB = w.gGB = w.GGBd = function () {
		return this.GetGroundBody()
	}
}
function rec() {
	w.dR = w.cRF = w.$dR = w.$rD = w.rD = function () {
		var w = this, g = G(arguments);
		var b = w.sB(g.f, g.s)
		b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
		return b.dyn()
	}
	w.sR = w.rS = w.$sR = w.$rS = function () {
		return this.cRF.apply(this, arguments).stat()
	}
	w.boxes = function () {
		var w = this, g = G(arguments)
		_.e(g, function (g) {
			w.box.apply(w, g)
		})
		return w
	}
	w.brcks = w.boxesStat = function () {
		var w = this, g = G(arguments)
		_.e(g, function (g) {
			w.brick.apply(w, g)
		})
		return w
	}
	w.cRB = function (x, y, r) {
		var w = this
		var b = w.dB(x, y)
		var cF = b.cRF(r)
		return b
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
}
function staticBods() {
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
	w._sB = function (x, y, fD) {
		var b = this.CB($sB(x, y))
		if (fD) {
			b.cF(fD)
		}
		return b
	}
	function staticPolys() {
		w.polS = function () {
			var w = this, g = G(arguments), b, o
			if (g.A) {
				return w.pol.apply(w, g.f)
			}
			if (O(g.f) && O(g.s)) {
				g.e(function (g) {
					w.pol(g).stat()
				})
				return w
			}
			o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
			o.x = N(o.x, w.hW);
			o.y = N(o.y, w.hH)
			b = w.D(o.x, o.y)
			if (!g.p) {
				return b.pol(o.p)
			}
			if (o.rg) {
				o.p.ps(o.rg, function (p) {
					b.pol(o)
				})
			}
			else {
				o.p.ps(function (p) {
					b.pol(o)
				})
			}
			return b.f()
		}
	}
	w._sB = function (x, y, fD) {
		var b = this.CB($sB(x, y))
		if (fD) {
			b.cF(fD)
		}
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
}
function arrShape() {
	w.aF = w.cAF = function (x, y) {
		var w = this, g = G(arguments)
		var sB = w.sB(x, y)
		return sB.CF($fD($aH(A(g.t) ? g.t : _.r(g, 2))))
	}
	w.aF__ = w.aAF = function () {
		var w = this, g = G(arguments)
		w.aF.apply(w, g)
		return w
	}
	w.arr = function () {
		var g = G(arguments)
		var b = this.D(g.f, g.s)
		b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
		return b
	}
	w.cAF = w.aF = function (x, y) {
		var w = this, g = G(arguments)
		var sB = w.sB(x, y)
		return sB.CF($fD($aH(A(g.t) ? g.t : _.r(g, 2))))
	}
	w.arr = function () {
		var g = G(arguments)
		var b = this.D(g.f, g.s)
		b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
		return b
	}
}
function kill() {
	w.cleanup = function () {
		w.e(function (b) {
			if (!b.IsActive) {
			}
		})
	}
	w._preKill = function (b) {
		
		//$l('w._preKill')
		if (b.sprite) {
			b.sprite.rm()
		}
		b.sprite = null
		if (b.sp()) {
			b.sp().rm()
		}
		b.fs(function (f) {
			f.rmSp()
		})
	}
	w._fPreKill = function (f) {
		//$l('w._fPreKill')
		f.rmSp()
	}
	w.startKilling = function () {
		var w = this
		$t(function () {
			w.each(function (b) {
				if (b.is('destroy')) {
					b.K('destroyed')
					b.kill()
				}
			})
		})
		return w
	}
	w.DB = w.DBo = w.DBd = function (b) {
		this.DestroyBody(b);
		return this
	}
	w.rmB = w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
		var w = this
		if (U(b)) {
			w.e(function (b) {
				w.rmB(b)
			})
		}
		else {
			w.DestroyBody(b)
		}
		return w
	}
}
function numBods() {
	w.GBC = w.n = w.numBods = w.count = w.bC = w.gBC = function () {
		return this.GetBodyCount()
	}
	w.numDB = function () {
		var w = this
		var n = 0
		w.eDB(function (b) {
			n++
		})
		return n
	}
	w.numDB.show = function () {
		var w = this
		var num = 0
		$t(function () {
			w.eDB(function (b) {
				var n = w.numDB();
				if (num !== n) {
					num = n;
					$l('num: ' + n)
				}
			})
		})
	}
	w.GBC = w.numBods = function () {
		//= w.n =w.count = w.bC = w.gBC
		return this.GetBodyCount()
	}
	function numDynBods() {
		w.numDB = function () {
			var w = this
			var n = 0
			w.eDB(function (b) {
				n++
			})
			return n
		}
		w.numDB.show = function () {
			var w = this
			var num = 0
			$t(function () {
				w.eDB(function (b) {
					var n = w.numDB();
					if (num !== n) {
						num = n;
						$l('num: ' + n)
					}
				})
			})
		}
	}
}
function joint(){
	 w.CJ = function (jtD) {
		 return this.CreateJoint(jtD)
	 }
	 w.DJ = function (jt) {
		 this.DestroyJoint(jt)
		 return this
	 }}
function triangle() {
	w.aTri = function (x, y) {
		this.sB(x, y).CF(
				$fD($pH()._SAA([
					V(-1, 0), V(0, -1), V(1, 0)
				]))
		)
		return this
	}
	w.cTri = w.tri = function (x, y) {
		return this.sB(x, y), $fD($pH()).SAA([
			V(-1, 0), V(0, -1), V(1, 0)
		], 3)
	}
}
circ()
rel()
ground()
rec()
staticBods()
arrShape()
kill()
numBods()
joint()
triangle()