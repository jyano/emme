b.clone = function (x, y, a) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.D(x, y).type(b.type()).rot(a)
	arr = []
	b.fs(function (f) {
		var h, x, y, r
		arr.push(f)
		_.e(arr, function (f) {
			if (f.iC()) {
				h = f.H()
				x = h.m_p.x * 30
				y = h.m_p.y * 30
				r = h.m_radius * 30
				b1.cir(r, x, y, $r())
			}
			else {
				b1.pol({c: $r(), v: f.vs()})
			}
		})
	})
	return b1
}
b.polyClone = function (x, y, a) {
	var b = this, b1
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.B(x, y).type(b.type()).rot(a)
	b.fs(function (f) {
		b1.pol(_.m(f.vs(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b1
}
b.copy = function (x, y) {
	var b = this, w = b.W(), g = G(arguments)
	return w.pol(x, y, b)
}
b.clone = function (x, y, a) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.D(x, y).type(b.type()).rot(a)
	arr = []
	b.fs(function (f) {
		var h, x, y, r
		arr.push(f)
		_.e(arr, function (f) {
			if (f.iC()) {
				h = f.H()
				x = h.m_p.x * 30
				y = h.m_p.y * 30
				r = h.m_radius * 30
				b1.cir(r, x, y, $r())
			}
			else {
				b1.pol({c: $r(), v: f.vs()})
			}
		})
	})
	return b1
}
b.polyClone = function (x, y, a) {
	var b = this, b1
	x = N(x, b.X())
	y = N(y, b.Y())
	a = N(a, b.rot())
	b1 = w.B(x, y).type(b.type()).rot(a)
	b.fs(function (f) {
		b1.pol(_.m(f.vs(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b1
}
b.copy = function (x, y) {
	return this.W().pol(x, y, this)
}
f.cloneTo = function (b) {

// *makes pol
// * gets the verts from its shape..  conver it to an array of arrs,
// and it will polif the specified body with that vsA
// (lets you 'stamp' in a specified body)
	var f = this
	if (f.isCir()) {
		var h = f.H()
		var x = h.m_p.x * 30
		var y = h.m_p.y * 30
		b.cir(h.rad(), x, y, $r())
	}
	else {
		b.pol({c: $r(), v: f.vs()})
		// alt??! b.pol( f.vsA() )
		// maybe both work???
	}
	return f
}
b.clone = function (x, y, rt) {
	var b = this
	x = N(x, b.X())
	y = N(y, b.Y())
	rt = N(rt, b.rt())
	var ty = b.ty()
	//make a new body at the right 'transform' (copying this body)
	var b1 = w.D(x, y).ty(ty).rt(rt)
	//then.. for each of this body's fixtures....
	// stamp it 'on' that damn body
	// when u are done.. it will be just like you !!!
	return b.cloneTo(b1)
} //= b.cloneNew = b.pClone = b.polyClone
CLO = function () {
	W([400, 400]).G(100)
	b = w.D(200, 200, 'r', 30, 30)
	b.clone(300, 300).C('g')
}
b.cloneTo = function (b1) {

// b.polEachF will take a different body..
// and it will polif that body with EACH if its fs
	this.fs(function (f) {
		f.cloneTo(b1)
	})
	return b1
}
function copy() {
	b.copy = function (x, y) {
		var b = this, w = b.W()
		return w.pol(x, y, b)
	}
	COP = function () {
		W([400, 400]).G(100)
		b = w.D(200, 200, 'r', 30, 30)
		b.copy(300, 300).C('g')
	}
}
b.polyClone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		b.poly.apply(b, _.map(f.verts(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b
}
b.clone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		var h, x, y, r
		if (f.isCirc()) {
			h = f.shape()
			x = h.m_p.x * 30
			y = h.m_p.y * 30
			r = h.m_radius * 30
			b.circ(r, x, y)
		}
		else {
			b.poly(f.verts())
		}
	})
	return b
}
b2d.ol = b2d.overlapping = function (b1, b2) {
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs())
	|| _.isEqual(p.vs(), v2.vs()))
}
b2d.fixt = b2d.f = function (shape) {
	var g = G(arguments),
			h = g[0],
			len = g.length,
			fixt = new b2d.Dynamics.b2FixtureDef()
	// simply makes one fixt,
	// tries to set its shape
	// and returns it
	//you can pass in a pre-made shape
	if (b2d.isShape(shape)) {
		f.shape = h
	}
	
	//or..
	// if you pass it an array, it makes a polyH from it
	// from verts/arr (confirmed)
	else if (A(shape)) {
		f.shape = b2d.polyH.apply(b2d, g)
	}
	
	// or if you passed in anything (number(s))
	// it makes a circle or poly shape, depending on how many numbers you passed
	else if (len == 1 || len == 3) {
		f.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		f.shape = b2d.polyH.apply(b2d, g)
	}
	return f
}
b2d.fixtC = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
$pC = function (rad, numVxs) {
	var g = G(arguments)
	rad = N(rad, 50)
	numVxs = N(numVxs, 5)
	var ang = 2 * M.PI / numVxs
	var vxs = []
	//alpha: _.arr = function(){var g=G(arguments), arr=[]}
	_.t(numVxs, function (vx) {
		vx = V(
				M.cos(ang * vx) * rad,
				M.sin(ang * vx) * rad)
		vxs.push(g.p ? vx : [vx.x, vx.y])
	})
	//returns an arr of rel verts
	return vxs
}
b.pC = function () {
	var b = this, g = G(arguments), o,
			vs = [], p
	o = O(g[0]) ? g[0] :
			S(g[0]) ? {c: g[0], r: g[1], n: g[2]}
					: {r: g[0], n: g[1]}
	o.r = N(o.r, 20)
	o.a = 2 * M.PI / o.n
	_.t(N(o.n, 20), function (i) {
		var v
		v = V(M.c(o.a * i) * o.r, M.s(o.a * i) * o.r)
		vs.push([v.x, v.y])
	})
	if (g.n) {
		return vs
	}
	p = b.pol(vs)
	p.C(o.c || $r())
	return b
	function alt() {
		b.polCir = b.pC = function () {
			var b = this, g = G(arguments), o,
					vs = [], p
			o = O(g[0]) ? g[0] :
					S(g[0]) ? {c: g[0], r: g[1], n: g[2]}
							: {r: g[0], n: g[1]}
			b._pC = function () {
				var b = this, g = G(arguments), o
				o = g.O ? g.f :
						g.S_ ? {col: g.f, rad: g.s, num: g.t}
								: {rad: g.f, num: g.s}
				o.col = o.col || 'v'
				b.pol($pC(o.rad, o.num))
				return b.C(o.col)
			}
			o.r = N(o.r, 20)
			o.a = 2 * M.PI / o.n
			_.t(N(o.n, 20), function (i) {
				var v
				v = V(M.c(o.a * i) * o.r, M.s(o.a * i) * o.r)
				vs.push([v.x, v.y])
			})
			if (g.n) {
				return vs
			}
			p = b.pol(vs)
			p[0].C(o.c || $r())
			return b
		}
	}
}
w.pC = function () {
	var w = this, g = G(arguments), o
	if (g.O) {
		return w.D(g.f.x, g.f.y).pC(g.f)
	}
	var b = w.D(g.f, g.s)
	b.pC.apply(b, _.r(g, 2))
	return b
	function alt() {
		w.polCir = w.pC = function (x, y, pC0, pC1, pC2) {
			var w = this, g = G(arguments), o
			if (g.O) {
				o = g[0]
				return w.D(o.x, o.y).pC(o)
			}
			return w.D(x, y).pC(pC0, pC1, pC2)
		}
	}
	
	w.pC__ = function () {
		return this.S(830, 270).pC('z', 80, 10)
	}
}
w.polyCirc = function (x, y, r, sides) {
	var w = this, b = w.D(x, y)
	b.pol({v: $pC(r, sides)})
	return b
}
f.pC = function (n) {
	var f = this, g = G(arguments)
	var pC = f
	if (f.isCir()) {
		pC = $pC(f.rad(), N(n, 10))
	}
	if (g.n) {
		return pC
	}
	return M.p(pC)
	function alt() {
		f.polCir = f.pC = function (n) {
			var f = this, g = G(arguments), pC
			pC = f.iC() ? b2d.pC(f.rad(), N(n, 10))
					: f
			return g.m ? M.p(pC) : pC
		}
	}
}
b.mPC = b.minusPolyCirc = function (x, y, r, sides) {
	var b = this, pC, p
	pC = $pC(r, sides)
	p = _.m(pC, function (v) {
		v = V(v)
		return [v.x + x, v.y + y]
	})
	vs = $DIF(b, p).ps(b)
	//b.clear()
	b.pol(vs)
	return b
}
PC = BPC = FPC = function () {
	W({w: 0}).C('o')
	_.fnEv(.5,
			function penta() {
				w.S(200, 300).pC('r', 60, 5)
				w.S(400, 300).pC('b', 80, 10)
			},
			function polDeca() {
				w.pC(700, 300, 'y', 120, 15)
				w.S(600, 500).pol(
						w.S(800, 500, 'w', 50).f().pC(10, '*')
				)
			})
}
/////// ///////// //////////// ////////////// ///
WPC = function () {
	W().C('w')
	w.pC(300, 300, 'b', 120, 5)
	w.pC(300, 300, 'r', 120, 4)
	w.pC(300, 300, 'x', 120, 3)
	w.pC(300, 300, 'x', 120, 2)
}
PCD = function () {
	W(600, 600).C('y').$$fall()
	blue = b = victim = w.pC(300, 300, 'b').stat().al(.5)
	vic = victim.pD()
	red = r = bullet = w.pC(290, 330, 'r').stat().rt(10).al(.5)
	bul = bullet.pD()
	res = vic.difference(bul)
	res2 = bul.difference(vic)
	vs = res.tlNeg(bullet).vs()
	vs2 = res.tlNeg(victim).vs()
	_.inx(2, function () {
		victim.kill()
		bullet.kill()
		w.pol(300, 400, vs2).C('b').stat()
		w.pol(300, 400, vs).C('r')//.stat()
	})
}
PCI = function () {
	W(600, 600).C('y').$$fall()
	blue = victim = w.pC(300, 300, 'b').stat().al(.5)
	vic = victim.pD()
	red = bullet = w.pC(290, 330, 'r').stat().rt(10).al(.5)
	bul = bullet.pD()
	u = vic.union(bul)
	d = vic.difference(bul)
	i = vic.intersection(bul)
	x = vic.xor(bul)
	_.in(.2, function () {
		victim.al(.3)
		bullet.al(.3)
		dif()
		int()
		uni()
		xorT()
		xorB()
	})
	function dif() {
		var vs0 = d.tlNeg(blue).vs()
		var b = w.S(100, 300)
		b.pol(vs0)
		b.C('b')
		b.fs(function (f) {
			f.al(.5)
		})
		_.in(function () {
			b.dyn()
		})
	}
	
	function int() {
		var vs1 = i.tlNeg(blue).vs()
		var b = w.S(100, 300)
		b.pol(vs1)
		b.C('r').al(.5)
		_.in(function () {
			b.dyn()
		})
	}
	
	function uni() {
		var vs1 = u.tlNeg(blue).vs()
		var b = w.S(300, 100)
		b.pol(vs1)
		b.C('g')
		b.fs(function (f) {
			f.al(.5)
		})
		_.in(function () {
			b.dyn()
		})
	}
	
	function xorT() {
		var vs1 = x.getPoly(1).tlNeg(blue).vs()
		var b = w.S(400, 300)
		b.pol(vs1)
		b.C('a')
		b.fs(function (f) {
			f.al(.5)
		})
		_.inx(function () {
			b.dyn()
		})
	}
	
	function xorB() {
		var vs1 = x.tlNeg(blue).vs()
		var b = w.S(400, 300)
		b.pol(vs1)
		b.C('a')
		b.fs(function (f) {
			f.al(.5)
		})
		_.inx(function () {
			b.dyn()
		})
	}
}
PCH = function () {
	w.fall = function () {
		return this.e(function (b) {
			b.dyn()
		})
	}
	w.$$fall = function () {
		var w = this
		w.$$(function () {
			w.fall()
		})
		return w
	}
	W(600, 600).C('y').$$fall()
	blue = victim = w.pC(300, 300, 'b').stat().al(.5)
	vic = victim.pD()
	red = bullet = w.pC(300, 300, 'r', 30).stat().rt(10).al(.5)
	bul = bullet.pD()
	d = vic.difference(bul)
	hol = d.g(1)
	ho = hol.tlNeg(blue)
	vs = ho.vs()
	//blue.kill()
	//red.kill()
	b = w.S(100, 300)
	b.pol(vs.reverse())
	b.C('z')
	_.in(function () {
		b.fs(function (f) {
			f.al(.5)
		})
		//b.dyn()
	})
}
TANKWHEELS = function () {
	w = b2d.W({g: 0}).debug()
	grv = V(0, 1000)
	dir = 12
	car = w.B(300, 300, 'r', 100, 5)
	w1 = w.rev(w.B(250, 300, 'b', [_.map(b2d.polyCirc(45, 10),
			function (v) {
				return [v.x, v.y]
			}
	)]).den(5), car).mot(10)
	w2 = w.rev(w.B(350, 300, 'b', [_.map(b2d.polyCirc(45, 10),
			function (v) {
				return [v.x, v.y]
			}
	)]).den(5), car).mot(10)
	w.click(function () {
		dir *= -1
		w1.mot(dir);
		w2.mot(dir)
		grv = V(-grv.x, -grv.y)
	})
	cjs.tick(function () {
		car.F(grv)
	})
	w.right.coll(function () {
		grv = V(-1000, 0)
	})
	w.left.coll(function () {
		grv = V(1000, 0)
	})
	w.roof.coll(function () {
		grv = V(0, -1000)
	})
	w.floor.coll(function () {
		grv = V(0, 1000)
	})
}
POLYCIRC = function () {
	w = b2d.W()
	w.polyCirc(400, 300, 100, 8)
}
//wall
STANDMEUP = function () {
	w = b2d.W({})
	//y= w.ship(500,200)
	dir = 12
	car = w.D(300, 300, 'r', 200, 45)
	w1 = w.rev(
			w.D(250, 300, 'b', [_.m(b2d.polyCirc(45, 10),
					function (v) {
						return [v.x, v.y]
					})]).de(5), car).mot(10)
	w2 = w.rev(w.B(350, 300, 'b', [_.m(b2d.polyCirc(45, 10),
					function (v) {
						return [v.x, v.y]
					})]).de(5)
			, car).mot(10)
	x = function () {
		dir *= -1
		w1.mot(dir)
		w2.mot(dir)
	}
	w.click(x)
}
SEB = function () {
	W({g: 1})//w.show(function(){return b.num()})
	b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
	y = w.y().lD(3).X(1100)
	p = w.p(200, 400).K('jason');
	//setTimeout(function () {p.sprite.sXY(.5)}, 1000)
	can = true
	w.b(function (cx) {
		var fixt, j, bull, terr, bX, bY, br
		if (fixt = cx.w('bul', 'terr')) {
			bull = fixt[0].B()
			terr = fixt[1].B()
			bX = bull.X()
			bY = bull.Y()
			bull.kill()
			if (can) {
				can = false
				b.minusPolyCirc(bX, bY, 100, 7)
				poly = M.p(_.m(b2d.pC(100, 7), function (v) {
					return [v.x + b.X(), v.y + b.Y()]
				}))
				verts = b.sub(poly)
				br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
				b.sub(br, '-') // br.kill()
				//  b.color('r')
				can = true
			}
		}
		else if (fixt = cx.w('jason', 'bul')) {
			$l('bullet hit jason!!!!');
			j = fixt[0].body();
			j.sprite.tw([{sxy: 20, r: 100}, 1000])
		}
	})
	f = function () {
		v = h.verts()
		v.unshift('b')
		v.unshift(200)
		v.unshift(200)
		w.B.apply(w, v)
	}
}
CIRCTOPOLY = function () {
	w = b2d.W()
	b = w.S(300, 300, 50)
	w.B(600, 400).poly(
			b2d.polyCirc(b.fixt().rad(), 10)
	)
}
old = function () {
	$pC = b2d.polyCirc = function (rad, prec) {
		rad = N(rad) ? rad : 20
		prec = N(prec) ? prec : 20
		var arr = [],
				ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			arr.push(V(rad * Math.cos(ang * i), rad * Math.sin(ang * i)))
		})
		return arr
		function alt() {
			b2d.polyCirc = function (rad, prec) {
				rad = N(rad) ? rad : 20
				prec = N(prec) ? prec : 20
				var arr = [],
						ang = 2 * Math.PI / prec
				_.times(prec, function (i) {
					arr.push(V(rad * Math.cos(ang * i),
							rad * Math.sin(ang * i)))
				})
				return arr
			}
			b2d.pC = b2d.polCir = function () {
				var g = G(arguments), //b2d.polyCirc =
						vs = [],
						r = N(g[0], 20),
						n = N(g[1], 20),
						a = 2 * M.PI / n
				_.t(n, function (i) {
					var v = V(
							M.c(a * i) * r,
							M.s(a * i) * r)
					vs.push(g.p ? v : [v.x, v.y])
				}) //returns an arr of rel verts
				return vs
				function alt() {
					b2d.polyCirc = function (r, n) {
						var g = G(arguments), vs = [], a
						r = N(r, 20)
						n = N(n, 20)
						a = 2 * M.PI / n
						_.t(n, function (i) {
							vs.push(V(r * M.c(a * i), r * M.s(a * i)))
						})
						return vs
					}
				}
			}
			w.polyCirc = function (x, y, rad, sides) {
				var b = this.dyn(x, y), pc = b2d.polyCirc(rad, sides)
				b.poly.apply(b, pc)
				return b
				b2d.pC = function (r, prec) {
					var g = G(arguments), vv = [], a
					r = _.tN(r, 20)
					prec = _.tN(prec, 20)
					a = 2 * M.PI / prec
					_.t(prec, function (i) {
						vv.push(V(M.c(a * i) * r, M.s(a * i) * r))
					})
					return vv
				}
			}
			w.polyCirc = function (x, y, rad, sides) {
				var b = this.dyn(x, y),
						pc = b2d.polyCirc(rad, sides)
				b.poly.apply(b, pc)
				return b
			}
		}
	}
	killIfSmallx = function (f) {
		var area = f.area();
		if (area < 20) {
			$l('too small: ' + area);
			f.kill()
		}
	}
}
//old:
uses_b_conc = b.minusPolyCirc = function (x, y, rad, sides) {
	var b = this
	poly = Math.poly(_.map(b2d.polyCirc(rad, sides),
			function (v) {
				return [v.x + x, v.y + y]
			}))
	verts = b.rel(b.pts().difference(poly))
	b.clear().sep(verts)
	return this
}
POLGEMS = function () {
	W()
	w.i.h(400, 300, '+').bV({
		v: verts = [
			[[5, 100], [0, -100], [200, -150], [200, 150]],
			[[-50, 50], [-50, -100], [450, -50], [450, 50]]
		]
	})
	w.D(800, 300).pol({
		v: verts,
		c: 'r', C: 'y', l: 10,
		bf: 'me'
	})
}
///////
notused = w.md1 = function (fn) {
	return this.md(function (a, b, c) {
		if (self.used) {
			return
		}
		fn(a, b, c)
		self.used = 1
	})
}//
w.withBul = w.withCollideBul = w.cxBul = function (k, fn) {
	var w = this
	this.b(function (cx) {
		cx.w('bul', k, fn)
	})
}
b.uniAlt = function () {
	var b = this, g = G(arguments), n, fs
	fs = b.fs()
	if (g.u) {
		return g.p ? UNI(fs).reg(b) : b2d.u(fs)
	}
	//unite with fixt or first-fixt(of body)
	if (O(g[0]) && !F(g[0])) {
		return b.f().uni(b2d.tF(g[0]))
	}
}
/// uni 
f.DIFFold = function (b2) {
	var f = this, b = f.B(), g = G(arguments), b2 = g[0]//,diff
	// diff =  Math.poly( f.V() ).difference(  Math.poly( b2.V() ) )
	diff = f.minus(b2)
	//if( ! b2d.hasVerts(diff) ){ f.kill(); return }
	// b.conc(   b.rel(diff) )
	b.sep(diff)
	f.kill()
	if (g.n) {
		b2.kill()
	}
	return this
}
b2d.overlapping = b2d.ol = function (b1, b2) {
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs()) ||
	_.isEqual(p.vs(), v2.vs()))
	function alt() {
		b2d.overlapping = function (b1, b2) {
			var v1 = b1.pts(),
					v2 = b2.pts()
			var p = v1.union(v2)
			return !(_.isEqual(p.verts(), v1.verts()) ||
			_.isEqual(p.verts(), v2.verts()))
		}
	}
}
f.difAlt = function () {
	var f = this, b = f.B(), g = G(arguments), p
//f.dif does the math and returns the answer (vs)
	p = M.p(f)
	g.e(function (g) {
		if (b2d.iB(g)) {
			g.fs(function (f) {
				p = p.D(f)
			})
		}
		else {
			p = p.D(g)
		}
	})
	if (!b2d.hV(p)) {
		$l('!hV(p)')
		return
	}
	p = p.reg(f)
	if (g.n) {
		p = p.reg(f.B())
	}
	return p
}
b.subAlt = function () {
	var b = this, g = G(arguments)
	g.e(function (pD) {
		b.sub1(pD, g.o)
	})
	if (g.f !== 0) {
		//	b.C(g.f || b.c())
	}
	return b
}
b.dffAlt = function (b2) {
	var b = this
	var p = Math.poly(b.V())
	return p.difference(Math.poly(b2.V()))
}
Pol = function (vs) {
	this.v = this.vs = vs
}
b.killXY = b.KPos = b.KXY = b.kXY = function () {
	var b = this
	var xy = b.XY();
	b.kill();
	return xy
}
b2d.polyDot = function (pts) {// see f.dots
	var t = 0
	_.e(A(pts) ? pts : pts.pts(),
			//combine with b2d.verts
			function (v) {
				setTimeout(function () {
							w.dot(V(v))
						},
						t)
				t += 100
			})
}
b2d.recV = function (x, y, w, h) {
	var hW = w / 2, hH = h / 2
	return [[x - hW, y - hH], [x + hW, y - hH],
		[x + hW, y + hH], [x - hW, y + hH]]
}
b2d.toFixture = b2d.tF = function (f) {
	return b2d.iB(f) ? f.f() : f
}
b2d.glu = function (a, b) {
	return a.glu(b)
}
pD.pols = function () {
// = pD.polygons = pD.polys = pD.ps = pD.hs
	var pD = this, g = G(arguments),
			o = b2d.iB(g.f) ? {
				polys: b2d.reg(this.polys(), g.f),
				fn: g.s
			} : g.N_ ? {
				polys: b2d.reg(this.polys(), V(g.f, g.s)),
				fn: g.t
			} : {fn: g.f}
	if (g.p) {
		o.polys = _.m(o.polys, M.p)
	}
	if (F(o.fn)) {
		_.e(o.polys, o.fn);
		return this
	}
	return o.polys
}
