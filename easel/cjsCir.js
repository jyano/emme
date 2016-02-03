 
ct.cir = function () {
	var h = this.Sh()
	return h.cir.apply(h, arguments)
}
ct.h = function () {
	var ct = this,
			h = $H.apply(null, arguments)
	ct.A(h)
	return h
}
h._dc = function () {
	var h = this
	h.graphics.dc.apply(h.graphics, arguments)
	return this
}
h.dc = function () {
	var h = this, gx = h.graphics, g = G(arguments)
	//h.cp()  // ?
	if (g.A) {
		return $a(h, 'dc', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	gx._dc.apply(gx, g)
	return h
}
h.cir = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	if (g.A) {
		return $a(h, 'cir', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f :
			N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g.fo, C: g.fi, l: g.si} :
					N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g.fo, l: g.fi} : g.N_ ? {
						r: g.f,
						c: g.s,
						C: g.t,
						l: g.fo
					} : {c: g.f, C: g.s, l: g.t}
	//o.c = o.c || 'w'; o.C = o.C || 'z'; o.l = N(o.l, 4)
	h.c(o)
	function replaced() {
		if (o.c) {
			h.c(o.c)
		}
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		h.cp()
		h._dc(o)
	}
	
	if (o.bf) {
		if (N(o.bf)) {
			o.bm = 'me'
		}
		if (F(Q)) { //async
			h.bf(o.bf, function () {
				h.dc(o)
			})
		}
		else { //sync
			o.tf = o.tf || null;
			h.bf(o.bf, o.tf).dc(o)
		}
	}
	else {
		h.dc(o)
	}
	h.alpha = N(o.al, 1)
	return h
}
h.cirs = function () {
	var h = this, g = G(arguments)
	g.e(function (c) {
		h.dc(c)
	})
	return this
}
$cir = function () {
	var g = G(arguments), o
	var h = $Sh()
	if (g.p) {
		h.drag()
	}
	o = g.O ? g.f :
			N(g.f) && N(g.s) && N(g.t) ?
			{r: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
					N(g.f) && N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g.fo, l: g.fi} :
							g.N_ ? {r: g.f, c: g.s, C: g.t, l: g.fo} :
							{c: g.f, C: g.s, l: g.t}
	h.cir(o.r, o.c, o.C, o.l)
	h.regX = -N(o.x, 0)
	h.regY = -N(o.y, 0)
	h.alpha = N(o.al, 1)
	return h
	// old: cir0: x, y, rad, fCol, sCol ( h = $Sh().XY(N(g.f, 0), N(g.s, 0)) )
	//h.f(fCol || 'z')
	//var fCol = g.fo || 'w'
	//var sCol = g.fi || 'z'
	//if (sCol) {	 h.s(sCol) }
	//h.cir(0, 0, rad)
	//if (g.O) {	 var cir = g.f
	//return cjs.cir0(cir.x, cir.y, cir.r, cir.fC, cir.sC)	 }
	//h.cir(x, y, r, fCol, sCol)
}
h._dr = function () {
// = h.dr
	var h = this, gx = h.graphics
	gx._dr.apply(gx, arguments)
	return h
}
h.dr = function (x, y, W, H) {
	// = h.dr2
	var h = this, g = G(arguments), o
	if (g.OO_) {
		g.e(function (g) {
			h.dr2(g)
		});
		return h
	}
	o = g.O ? g.f :
			U(g.t) ? {w: g.f, h: g.s} :
			{x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	h._dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
	return h
}
h.rec = function () {
	var h = this, g = G(arguments), o
	if (g.OO_) {
		g.e(function (g) {
			h.rec(g)
		});
		return h
	}
	o = g.O ? g.f :
			S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
					g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
							N(g.t) ?
							{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
							{w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, o.w)
	if (o.i) {
		$l('see h.rec')
		// ****************
		h.bf(o.i, function () {
			o.i = null;
			h.rec(o)
		})
		return h
	}
	if (o.c) {
		h.c(o)
	}
	if (o.lf) {
		$l('see h.rec')
		return // ****************
		h.lf({
			c1: o.c1 || 'z', c2: o.c2 || 'w',
			s1: 0, s2: 1,
			x: o.x - o.w / 2, y: o.y - o.h / 2,
			x2: o.x - o.w / 2, y2: o.y + o.h / 2
		})
	}
	h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
	return h
}
ct.rec = function () {
	var ct = this, g = G(arguments), o, ct2, h
	if (g.OO_) {
		g.e(this, 'rec');
		return this
	} //it doesnt know that's this! (scope talk)
	o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
			g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
	o.al = N(o.al, 1)
	o.rt = N(o.rt, 0)
	o.c = o.c || 'z';
	o.C = o.C || 'w'
	ct2 = ct.ct();
	h = ct2.h(o.x, o.y);
	h.rt(o.rt);
	h.c(o).al(o.al)
	if (o.lf) {
		h.lf(o)
	} else if (o.rf) {
		h.rf(o)
	}
	if (o.bm) {
		h.bR({i: 'me', hs: [o]})
	}
	else {
		h.rec(o.w, o.h)
	}
	if (g.p) {
		ct.drag()
	}
	return ct2
	function alt() {
		ct.rec = function () {
			var ct = this, g = G(arguments), o, ct2, h
			if (g.OO_) {
				g.e(this, 'rec');
				return this
			} //it doesnt know that's this! (scope talk)
			o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
					g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
			o.al = N(o.al, 1)
			o.rt = N(o.rt, 0)
			o.c = o.c || 'z';
			o.C = o.C || 'w'
			ct2 = ct.ct();
			h = ct2.h(o.x, o.y);
			h.rt(o.rt);
			h.c(o).al(o.al)
			if (o.lf) {
				h.lf(o)
			} else if (o.rf) {
				h.rf(o)
			}
			if (o.bm) {
				h.bR({i: 'me', hs: [o]})
			}
			else {
				h.rec(o.w, o.h)
			}
			if (g.p) {
				ct.drag()
			}
			return ct2
		}
		ct.rec = function () {
			var ct = this, g = G(arguments), o, ct2, h
			if (g.OO_) {
				g.e(this, 'rec');
				return this
			} //it doesnt know that's this! (scope talk)
			o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
					g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
			o.al = N(o.al, 1)
			o.rt = N(o.rt, 0)
			o.c = o.c || 'z';
			o.C = o.C || 'w'
			ct2 = ct.ct();
			h = ct2.h(o.x, o.y);
			h.rt(o.rt);
			h.c(o).al(o.al)
			if (o.lf) {
				h.lf(o)
			} else if (o.rf) {
				h.rf(o)
			}
			if (o.bm) {
				h.bR({i: 'me', hs: [o]})
			}
			else {
				h.rec(o.w, o.h)
			}
			if (g.p) {
				ct.drag()
			}
			return ct2
		}
	}
}
$rec = $Rec = function (a, b, c, d) {
	return new cjs.R(a, b, c, d)
}
CIR1 = HCR = function () {
	$St()
	h = st.Sh(300, 0, '+')
	h.gx.C('b', 'z', 10)
	h.bf('me', function (h) {
		h.dc(100, 0, 100)
				.dc(100, 300, 50)
				.es().s('black')
				.dc(-100, 300, 60)
				.cp()
	})
	st.Sh(0, 0, '+').gx
			.C('r', 'y', 10)
			._dc(30).cp()
			._dc(60).cp()
			.dc(100, 0, 100)
			.cp()
			.dc(400, 400, 100)
		//.C('z')
			.dc(100, 400, 100)
			.dc(-300, 400, 100)
	//gx._f('p')._s('w').ss(10)._dc(100).dc(100, 0, 100)
//	.C('g','b').cp().dc(0, 300, 100)
//	st.Sh('b', 'o', 10, '+').cp().cir(100, 100, 100).cp().es().cir(400, 400, 40, 'r').cp()
}
CIR7 = function () {
	ct = $Ct().a2($St(600))
	ct.Sh(100, 100).f('y').dc(0, 0, 40)
	$cir(80, 100, 100, 'g', 'r', 13).a2(ct)
	$cir(80, 'g', 'y', 30).a2(ct).dg()
}
CIR3 = function () {
	$St()
	s.Sh().f('b').s('g').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
			[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
	s.Sh().f('b').s('g').cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
			[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
}
CIR5 = HDC = function () {
	$Sh().a2($St()).f('b').dc(100, 100, 100).f('y').dc(200, 100, 100)
}
CIR6 = function () {
	ct = $Ct().XY(0, 0).a2($St($.c(1000, 500)))
	h = $H().a2(ct).XY(0, 0).a2(ct).f('b').dc(400, 100, 10)
	ct.A($cir({r: 100, c: 'r', C: 'g', l: 50, oX: 100}).XY(100, 200))
}
CIR8 = CJSCIR = function () {
	ct = $Ct().a2($St(600))
	ct.A(
			$cir(400, 300).f('r').dc(28, 40, 40)
	)
	_.in(2, function () {
		ct.A(
				$cir(80, 300, 300, 'g', 'y', 30)
		)
	})
	$.bt('more', function () {
		h = $H().a2(ct)
		h.f('o').dc(100, 300, 105) ///x, r , r = 50
		h.f('z').dc(100, 300)
		h.f('r').dc(100, 300, 50)
		h.f('b').dc(100, 300) //r, x=0, y=0
		h.f('r').dc(100)
	})
}
CIR9 = DRG = GOB = function () {
	st = $St() //good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	h = st.Sh().drag()
	gx = h.graphics.SS()
	$.i('me', function (img) {
		gx.F()
		gx._bf(img)
		gx._dc({x: 100, y: 200, r: 200})
		gx.C('R')._dc({x: 200, y: 200, r: 200})
		gx.C('b', 'g', 30)._dc(100, 300)
	})
}
CIRS = function () {
	$H().f('b').a2($St()).cirs(
			[200, 200, 50],
			[400, 200, 50],
			[600, 200, 50]
	)
}
CIRZS = function () {
	$St()
	h.c('b', 'r', 10).XY(-100, -100)
	/*  h.dc(300,300,50)
	 gx.dc(400,400,50)
	 h.dc(500,500,50)
	 gx.dc(600,600,50)
	 */
	// h.dc(100,100,50) -> no color
	h.c().dc(100, 100, 50) // black fill, l4 white stroke
	h.c({C: 'r'}).dc(300, 300, 50)
	h.cir({
		r: 50, x: 200, y: 200,
		C: ['y', 10]//,
		//lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
		//ls: {c1: 'u', c2: 'o'}
	})
	h.cir({
		r: 50, x: 500, y: 200,
		C: ['y', 2]//,
		//	rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
		//rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
	})
	h = s.h()//.lf({})
			.dc()
			.c('r', 'b', 10)//.lf({y2: 400})
			.dc(300, 300, 50)
	return
}
SIR = function () {
	$.C('b')
	$s({body: {fZ: 40, c: 'o', display: 'flex', 'flex-wrap': 'wrap'}, canvas: {M: 20}})
	st = $St($.c(600, 300)[0])
	st.A($Tx('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
	h.graphics.cp()
	h.dc(36)
	h.graphics.cp()
	h.dc(18)
	h.graphics.cp()
	h.graphics.cp()
	h.dc(200, 100)
	h.graphics.cp()
	h.dc(300, 100, 20)
	h.graphics.cp()
	h.dc(300, 200, 20)
	//
	st2 = $St($.c(600, 300)[0]).t()
	st2.A($Tx('h.cirs', '50px Arial', 'white').X(400))
	st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	//
	st1 = $St($.c(600, 300)[0]).t()
	////////
	st1.A($Tx('$cir', '50px Arial', 'white').X(400))
	st1.A($cir(300, 'g'))
	st1.A($cir(140, 220, 20, 'o').dc())
	st1.A($cir('r').XY(220, 200))
	st3 = $St($.c(600, 300)[0]).t()
	st3.A(_$Tx('$cirs', '50px Arial', 'white').X(400))
	st3.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
	h = $Sh().a2(st)
	gx = h.graphics.FS()
	h.dc()
	h.dc(36)
	h.cir(18, 'o')
	h.dc(200, 100)
	h.cir(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	st2 = $St($.c(600, 300)[0]).t()
	st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
	st2.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
	st1 = $St($.c(600, 300)[0]).t()
	st1.A(_$Tx('$cir', '50px Arial', 'white').X(400))
	st1.A($cir(300, 'g'))
	st1.A($cir(140, 220, 20, 'o').dc())
	st1.A($cir('r').XY(220, 200))
	st3 = $St($.c(600, 300)[0]).t()
	st3.A(_$Tx('$cirs', '50px Arial', 'white').X(400))
	st3.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
}
BOWL = function () {
	$St()
	ct = container = c = $Ct().a2(st)
	plX = st.W() / 2
	plY = 150
	plR = 100
	plr = 75 // this seems to determine the radius of the 'cluster' of balls
	oRng = 8 //outer ring
	nRng = 3// number of rings
	//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
	circ = $cir(plX, plY, plR, 'yellow')
	container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
	rngSp = plr / (nRng - 1)
	aA = []
	var ast = function (x, y, r, m, f) {
		return {
			x: x, y: y, radius: r, m: m,
			f: f, vX: 0, vY: 0, player: false
		}
	}
	_.t(nRng, function (r) {
		var crR = 0, ang = 0, rngR = 0
		if (r == nRng - 1) {
			crR = 1
		}
		else {
			crR = oRng - (r * 3)
			ang = 360 / crR
			rngR = plr - (rngSp * r)
		}
		_.t(crR, function (a) {
			var x = 0, y = 0
			if (r == nRng - 1) {
				x = plX;
				y = plY
			}
			else {
				x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
				y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
			}
			aA.push(ast(x, y, 10, 5, 0.95))
			ct.A($cir(10, 'z').XY(x, y))
		})
	})
}
CIR2 = ROTCIRS = function () {
	ct = $Ct().a2($St(1000, '+')).A(
			$H(100, 100).f('r').dc(30).dc(30, 20).dc(250, 250)
	)
	$t(function (e) {
		ct.rt(ct.rt() + 3)
	})
}
CIR4 = function () {
	$Sh().a2($St(600)).f('r', 'y').lW(30)
			.dc(400, 400, 200)
			.dr(100, 0, 200, 200)
}
JCIR = function () {
	$St()
	gx = h.graphics
	gx._f('r')._s('b').ss(130).dc(400, 300, 50)
//	gx._f('g')._s('y').ss(130).dc(500, 300, 50)
	h = st.h()
	st.A(h)
	//h.cir(400,500,220,'r','b',77)
	st.A($Cir(400, 400, 20, 'i', 'j'))
	st.A($H('b', 300, 200).dc(400))
}