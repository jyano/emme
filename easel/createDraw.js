//pass in your own obj to use 'o.i/o.bf'
 
h._load=function(){
	var h =this,gx = h.graphics, g=G(arguments),o
	o = g.N_? {x: g.f, y: g.s, C: g.t, c: g.fo, lW: g.fi}: 
	N(g.s)? {c: g.f, lW: g.s}:
	{C: g.f, c: g.s, lW: g.t}
	if(N(o.x)){
		h.XY(o.x, o.y)
	}
	if(o.C){h.C(o.C)}
	if(o.c){ h.c(o.c)}
	if(o.lW){h.lW(o.lW)}
	return h
}



h.load=function(){

}

LOAAD=function(){$St()



	 h = new cjs.Shape()
	 h = $h()

	h.load('r','g')
	// h.a2(st)
	 h.dc(30,400,40)
}
 
 
AWESOME = XX6 = GRAPHICSTEST = function () {
	stage = $St()
	canvas = stage.canvas
	// grab canvas width and height for later calculations:
	w = canvas.width
	h = canvas.height
	img = $.img('me', layout)[0]
	function layout() {
		var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
			createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]
		var padding = 5
		var _width = 155
		var _height = 155
		var cols = 4
		var space = 0
		var border = createBorder();
		_.times(arr.length, function (i) {
			var tile = arr[i]()
			tile.x = 42 + (_width + padding) * (i % cols)
			tile.y = 42 + (i / cols | 0) * (_height + padding)
			stage.A(tile)
		})
		stage.A(border)
		stage.update()
	}
	
	function createBorder() {
		var s = $H()
		s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
		return cjs.container().A(s)
	}
	
	function createBitmapFill() {
		var container = createTile();
		var s = $H().XY(12, 10)
		var mtx = new createjs.Matrix2D().rotate(1)
		s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
				.beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
		return cjs.container().A(s)
	}
	
	function createRectGradientFill() {
		var s = $H().XY(12, 10)
		s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
		return createTile().A(s)
	}
	
	function createEllipse() {
		var s = $H().XY(40, 10)
		s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
				.setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
				.drawEllipse(0, 0, 70, 140, 8)
		return createTile().A(s)
	}
	
	function createRadialGradientFill() {
		var s = $H().XY(80)
		s.graphics.ss(8).beginStroke("#f0f")
				.beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
		return createTile().A(s)
	}
	
	function createLineTo() {
		var s = $H()
		s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
				.moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
		return createTile().A(s)
	}
	
	function createHex() {
		var s = $H().XY(80, 40)
		s.graphics.beginFill("pink")
				.drawPolyStar(0, 0, 40, 6)
				.drawPolyStar(0, 75, 40, 6)
				.drawPolyStar(45, 45, 20, 6)
		return createTile().A(s)
	}
	
	function createStar() {
		var s = $H().XY(80, 85)
		s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
				.beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
		return createTile().A(s)
	}
	
	function createRoundRect() {
		var s = $H().XY(12)
		s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
		return createTile().A(s)
	}
	
	function createTile() {
		var bg = $H()
		bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
		bg.alpha = 0.25
		return cjs.container().A(bg)
	}
}
h.ef = function () {
	this.graphics.endFill.apply(
			this.graphics, arguments)
	return this
}
h.es = function () {
	var h = this, gx = h.graphics
	gx.es()
	return h
}
h.cp = function () {
	this.graphics.cp();
	return this
}
h.clr = h.z = h.clear = function () {
	this.graphics.clear();
	return this
}
h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
}
h._lt = function (x, y) {
	var v = V(x, y)
	this.graphics.lt(v.x, v.y)
	return this
}
h.lt = function (x, y) {
	var h = this, gx = h.graphics, g = G(arguments)
	//A(a) && O(a[0])
	if (AO(g.f)) {
		g.e(function (v) {
			h.lt.apply(h, v)
		})
		return h
	}
	O(g.s) ? g.e(function (pt) {
		h.lt(pt)
	}) :
			gx.lt(V(x, y).x, V(x, y).y)
	return h
	function alt() {
		h.lt = function (x, y) {
			var h = this, gx = h.graphics, g = G(arguments)
			if (AO(g.f)) {
				g.e(function (v) {
					h.lt.apply(h, v)
				})
			}
			else if (O(g.s)) {
				g.e(function (pt) {
					h.lt(pt)
				})
			}
			else {
				this.graphics.lt(V(x, y).x, V(x, y).y)
			}
			return this
		}
	}
}
h._mt = function (x, y) {
	var g = G(arguments)
	var pt = V(g.f, g.s)
	this.graphics.mt(pt.x, pt.y)
	return this
}
h.mt = function () {
	var g = G(arguments), o
	if (g.N) {
		return this._mt(g.f, g.s)
	}
	o = AO(g) ? {
		firPt: _.f(g.f), restPts: _.r(g.f),
		ox: g.s, oy: g.t
	} :
	{firPt: g.f, restPts: g.r}
	return this._mt(
			o.firPt[0] + N(o.ox, 0),
			o.firPt[1] + N(o.oy, 0)
	).lt(M.os(o.restPts, o.ox, o.oy))
}
h.same = h.copy = function () {
	return $h(this)
} // cjs.shape(this)
h.FS = function () {
// = h.fs = h.col
	var h = this, gx = h.graphics, g = G(arguments), o
	gx.FS.apply(gx, g)
	return h
}
h.c = function () {	// uses " c_C_L " color pattern
	var h = this, gx = h.graphics, g = G(arguments), o
	o = g.u ? {c: 'z', C: 'w', l: 6} : g.O ? g.f :
			N(g.s) ? {c: g.f, l: g.s} :
					g.N_ ? {l: g.f, C: g.s} :
					{c: g.f, C: g.s, l: g.t}
	colInArr()
	function colInArr() {
		if (A(o.c)) {
			$c_C_L = function (o, col) {
				col = col || {}
				if (N(o.c[1])) {
					col.c = o.c[0];
					col.l = o.c[1];
				}
				else if (N(o.c[0])) {
					col.l = o.c[0];
					col.C = o.c[1]
				}
				else {
					col.c = o.c[0];
					col.C = o.c[1];
					col.l = o.c[2]
				}
				return col
			}
			if (N(o.c[1])) {
				o.c = o.c[0];
				o.l = o.c[1];
			}
			else if (N(o.c[0])) {
				o.l = o.c[0];
				o.C = o.c[1]
			}
			else {
				o.c = o.c[0];
				o.C = o.c[1];
				o.l = o.c[2]
			}
		}
		if (A(o.C)) {
			$C_L = function (o, col) {
				col = col || {}
				col.C = o.C[0];
				col.l = o.C[1]
				return col
			}
			o.C = o.C[0];
			o.l = o.C[1]
		}
	}
	
	transparent()
	function transparent() {
		if (o.c == 0) {
			$gxF = function (gx, col) {
				gx.f(null);
				col.C = 'X'
			}
			gx.f(null);
			o.c = 'X'
		}
		if (o.C == 0) {
			$gxS = function (gx, col) {
				gx.s(null);
				col.C = 'X'
			}
			gx.s(null);
			o.C = 'X'
		}
		if (o.c == 00) {
			$gxFS = function (gx, col) {
				gx.f(null);
				gx.s(null);
				col.c = 'X';
				col.C = 'X'
			}
			gx.f(null);
			gx.s(null);
			o.c = 'X';
			o.C = 'X'
		}
	}
	
	colorize()
	function colorize() {
	}
	
	if (S(o.c)) {
		gx.f(oO('c', o.c))
	}
	if (S(o.C)) {
		gx.s(oO('c', o.C))
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	fGrad()
	function fGrad() {
		if (o.lf) {/*
		 $l('r: ' + o.r)
		 $l('x: ' + o.x)
		 $l('y: ' + o.y)
		 $l('x1: '+ o.lf.x1)
		 $l('y1: '+ o.lf.y1)
		 $l('x2: '+ o.lf.x2)
		 $l('y2: '+ o.lf.y2)
		 */
			o.lf = O(o.lf) ? o.lf : {}
			if (o.r) {
				o.r = N(o.r, 0);
				o.x = N(o.x, 0);
				o.y = N(o.y, 0)
				o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
				o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
				o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
				o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
			}
			h.lf(o.lf)
		}
		if (o.rf) {
			o.rf = O(o.rf) ? o.rf : {}
			o.c = [2, 'z']
			if (o.r) {
				o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
				o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
				o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
				o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
				o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
			}
			h.rf(o.rf)
		}
		if (o.ls) {
			o.ls = O(o.ls) ? o.ls : {}
			if (o.r) {
				o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
				o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
				o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
				o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
			}
			h.ls(o.ls)
		}
		if (o.rs) {
			o.rs = O(o.rs) ? o.rs : {}
			if (o.r) {
				o.rs.x1 = _.tN(o.rs.x1) + o.x
				o.rs.y1 = _.tN(o.rs.y1) + o.y
				o.rs.x2 = _.tN(o.rs.x2) + o.x
				o.rs.y2 = _.tN(o.rs.y2) + o.y
				o.rs.r2 = _.tN(o.rs.r2) + o.r
			}
			h.rs(o.rs)
		}
	}
	
	fBMap()
	function fBMap() {
		if (o.bs) {
			h.bs(o.bs)
		}
		if (o.bf) {
			h.bf(o.bf)
		}
	}
	
	//note about h.c : used to be:   h.c = function (rad) {return this.dc(0, 0, rad)}
	return h
}
h.lW = h.l = function (l, b, c) {
	var h = this, gx = h.graphics;
	gx.ss(l || 1, b, c)
	return h
}
h.ss = function () {
	var h = this, gx = h.graphics, g = G(arguments)
	gx._ss.apply(gx, g)
	return h
}
h.C = h.s = h.sC = function (str, l) {
	var h = this, gx = h.graphics
	if (N(l)) {h.l(l)}
	gx._s(str)
	return h
}
h.f = function (fil, str) {
	var h = this, gx = h.graphics
	gx._f(fil)
	if (S(str)) {gx._s(str)}
	return h
}
dO.al = dO.opacity = function (al) {
	var dO = this
	if (U(al)) {
		return dO.alpha
	}
	dO.alpha = al;
	return dO
}
dO.shad = function (color, x, y, blur) {
	cjs.shad = function (color, x, y, blur) {
		alert('cjs.shad')
		if (color == '-') {
			return new cjs.Shadow(null, 0, 0, 0)
		}
		color = S(color) ? color : 'a'
		blur = N(blur) ? blur : 10
		x = N(x) ? x : 0
		y = N(y) ? y : 0
		var shad = new cjs.Shadow(oO('c', color), x, y, blur)
		return shad
	}// = cjs.shadow
	var shadow = cjs.shad(color, x, y, blur)
	this.shadow = shadow
	return this
}
globComp()

function globComp() {
	dO.cO = dO.compOp = function (compOp) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.compositeOperation
		}
		dO.compositeOperation = compOp
		return dO
	}
// dO.o // not good!!!!!
//eh.. unnecessary? could overlap something important? well.. does it or not?
	dO.Ds = dO.dO = function () {
		return this.compOp('destination-out');
	}
	dO.dS = dO.dI = function () {
		return this.compOp('destination-in')
	}
	dO.sD = dO.sI = function () {
		this.compOp('source-in');
		return this
	}
	dO.Sd = dO.sO = function () {
		this.compOp('source-out');
		return this
	} // why use this ??x.sd = x.sV= function(){ this.compOp('source-over'); return this }
	dO.ds = dO.dV = function () {
		this.compOp('destination-over');
		return this
	}
	dO.SD = dO.sT = dO.sA = function () {
		this.compOp('source-atop');
		return this
	}
	dO.DS = dO.dT = dO.dA = function () {
		this.compOp('destination-atop');
		return this
	}
	dO.li = function () {
		this.compOp('lighter');
		return this
	}
	dO.co = function () {
		this.compOp('copy');
		return this
	}
	dO.xo = function () {
		this.compOp('xor');
		return this
	}
}
 function color(){
	 $hsl = cjs.HSL = function (a, b, c) {
		 return U(a) ? cj.HSL(M.r() * 360, 100, 50) :
				 cj.Gx.getHSL(a, b, c)
	 }
	 $rgb = cjs.rgb = cjs.Gx.rgb = cjs.Gx.getRGB
 }
 
REC = function () {
	$St()
	h = st.Sh().dg()
	gx = h.graphics
	gx.FS()._dr()
	gx = st.Gx().FS()._dr(100, 100, 500, 10)
	h.dr(100, 100, 500, 10)
	st.Gx().FS()._dr(500, 30)
}
CONNECT = function () {
	z();//m$$('location=location')
	stage = $St(1000)
	pink = cjs.cir(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
	stage.A(pink)
	container = new createjs.Container()
	stage.A(container)
	green = cjs.cir(200, 'green', 'purple').XY(320, 300)//.rXY(100)
	yellow = cjs.cir(100, 'yellow', 'purple').XY(250)
	red = cjs.cir(40, 'red', 'purple').XY(200, 100)
	orange = cjs.cir(20, 'orange', 'purple').XY(300)
	container.A(green, yellow, red, orange)
	LS(yellow, container)
	SL(green)
	SL(green, pink)
	SL(yellow)
	SL(red, container)
	SL(orange, red)
}
FAIL = SKETCH = function () {
	s = cjs.stage(500, 500).A()
	s.can.P('a').XY(300)
	s.bm('me', 0.2, function (bm) {
	})
	s.A(cjs.circle(100, 'blue', 'green').XY(100, 100).drag())
	s.circle(100, 100, 10, 'red', 'yellow')
			.circle(10, 100, 100, 'black', 'purple')
			.circle(100, 10, 100, 'blue', 'red')
			.circle(150, 150, 120, 'red', 'blue')
			.circle(30, 'brown', 'gray')
	St()
	ct = s.ct(1000, 300).drag()
	ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
	h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
	h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
	st.u()
	St()
	ct = s.ct(600, 300)
	ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
	ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
	h = ct.Sh()
	h.graphics.FS()
	h.rec({
		w: 100, h: 200, a: 20,
		c: 'b', C: 'w', l: 20, bm: 1
	}).X(100)
	_.in(8, function () {
		h.X(0)
	}) //notice how gradient is seen behind the bm!!!
}//D 
SHPEZ8 = function () {//C- only PLAY!?
	St()
	s.can.P('a').XY(200)
	s.bm('me')
	s.bm('me', 0.2, function (bm) {
	})
	h = $h().cir()
	s.A(
			$h().cir(100, 'blue', 'green').XY(100, 100).drag()
	)
	s.h().cir(100, 100, 10, 'red', 'yellow')
	s.h().cir(10, 100, 100, 'black', 'purple')
	s.h().cir(100, 10, 100, 'blue', 'red')
	s.h().cir(150, 150, 120, 'red', 'blue')
	s.h().cir(30, 'brown', 'gray')
	s.u()
}
SHPS8 = function () {
	z()
	s = stage = $St(500, 500)
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.Sh().cir(100, 100, 100, 'b', 'g')//.fn(SL)
	s.cir(100, 100, 10, 'r', 'y')//.fn(SL)
	s.cir(10, 100, 100, 'z', 'x')//.fn(SL)
	s.cir(100, 10, 100, 'a', 'c')//.fn(SL)
	s.Sh().cir(150, 150, 120, 'c', 'd')
		//.fn(SL)
			.cir(30, 'x', 'x')
}
SHPES9 = function () {
	z()
	s = stage = St(500, 500).a()
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
	s.Circle(100, 100, 10, 'r', 'y').fn(SL)
	s.Circle(10, 100, 100, 'z', 'x').fn(SL)
	s.Circle(100, 10, 100, 'a', 'c').fn(SL)
	s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
	s.Circle(100, 100, 10, 'r', 'y').fn(SL)
	s.Circle(10, 100, 100, 'z', 'x').fn(SL)
	s.Circle(100, 10, 100, 'a', 'c').fn(SL)
	s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
}
RR1 = BASIC = RRR8 = ROUNDREC = function () {//C+
	s = $St()
	h = s.h()
	gx = h.graphics.FS()
	h.c('b', 'r', 5).dc(100, 100, 100)
	h.dr(300, 200, 100, 50)
	h.dr2(500, 200, 100, 50)
	h.rr2(500, 200, 100, 50, 50)
	h.de2(500, 200, 100, 50)
	s.dot(100, 100)
	s.dot(300, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.u()
}
RR2 = GOODONE = TXH8 = function () {
	St()
	h = $H().a2(st)
	h.f('red').s('black')
	h.graphics.dc(400, 400, 200)
	h.graphics.dr(100, 0, 200, 200)
	/////////
	h.rec(100, 100, 100, 100, 'y')
	h.rec(200, 200, 100, 100, 'b')
	h.c('o').polyStar(300, 100,
			50, 5, 0.6, -90)
	h.c('w', 'z')
			.roundRectComplex(400, 300,
			300, 300, 20, 20, 30, 40)
	h.cir(500, 200, 40, 'b', 'x', 10)
	return
	//function exceedsStackSize() {
	////////////////
	h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
			.c('X', 'g', 8)
			.mt([
				[100, 100], [300, 300], [400, 100],
				[500, 300], [450, 450]], [[500, 0], [600, 100]
			])
	h.cir(600, 300, 'u', 'g', 10)
	lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
	v = [[300, 300], [320, 200], [640, 400], [280, 650]]
	//two ways to make the same thing
	s.h().poly({
		v: v,
		lf: lf
	})
	s.h(250, 50).lf(lf).mt(v)
}
BB = BRUSH = BLOTCHY = function () {
	z();
	var _mPt
	st = $St(1000)
	st.mO(1)
	h = $h().a2(st)
	h.ss('o', 40, 's', 'bevel', 1)
	st.bm('chicks', function (bm) {
		// _i= i = i[0]
		bm.al(.2)
		st.A(bm)
		st.MD(function () {
			_mPt = _pt = st.m()
		})
		st.MU(function () {
			_mPt = null
		})
		st.MM(function () {
			if (!_mPt) {
				return
			}
			_pt = st.m()
			mx = _pt.x
			my = _pt.y
			mPt = $Pt(M.av(_pt.x, mx), M.av(_pt.y, my))
			h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
			_mPt = V(mPt)
		})
	})
}
TWOSTAGES = function () {
	$.hdr().K("EaselJS").A(
			$.h1('nextStage'),
			$.p("This is an example")).A()
	c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
			.right(0).bor('1px solid grey').A() // background: 'none',
	c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	topStage = stageSetup("canvasTwo", handleEvt)
			.N("topStage").eMO()
			.A(makeSquare(375, 30, "pink", handleEvt))
			.next(bottomStage)
	topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	function stageSetup(canvasName, handler) {
		s = stage = new cjs.Stage(canvasName).tick()
		//stage.addEventListener("stagemousemove", handler);	// too noisy
		_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
			s.on(ev, handler)
		})
		s.log = []
		return s
	}
	
	function makeSquare(x, y, color, handler) {
		var shape = cjs.shape().N('square').XY(x, y)
		shape.graphics.f(color).dr(0, 0, 135, 135)
		var cont = cjs.ct().N('container').A(shape)
		_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
			cont.on(ev, handler)
		})
		cont.cursor = "pointer"
		return cont
	}
	
	function handleEvt(evt) {
		var target = evt.target,
				stage = target.getStage(),
				log = stage.log
		log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		+ " y:" + evt.stageY.toFixed(0))
		while (log.length > 12) {
			log.shift()
		}
		stage.text.text = log.join("\n")
		if (evt.type == "mouseover") {
			target.alpha = 0.5
		}
		if (evt.type == "mouseout") {
			target.alpha = 1
		}
	}
}
GRAPHTEST8 = BROKEN = function () {
	$St();
	img = $.i('me', function () {
		s.ct().A(h = $Sh())
		gx = h.graphics.FS()
		s.A($Bm(img))
		gx.ss(32).dr(20, 20, 920, 360);
		fns = [
			function () {
				return $Sh(12, 10)
						.lf('b', 'g', 130).dr(130)
			},
			function () {
				return $Sh(40, 10, 'b', 16)
						.ls('r', 'w', 70, 140).de(70, 140)
			},
			function () {
				return $Sh(80, 80)
						.C('b', 8).rf('w', 'y', 40).dc(40)
			},
			function () {
				return $Sh(12, 10, 18)
						.bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
			},
			function () {
				return $Sh(12, 12, 'g', 'r', 8)
						.rr(130, 30)
			}, //w(h) and r
			function lt() {
				return $Sh().C('o')
						.ss(16, 'round', 'round')
						.mt([40, 10], [90, 90], [90, 140])
			},
			function star() {
				return $Sh(80, 85, 'y', 'b', 3)
						.pStr(0, 0, 80, 5, .8, -95)
			},
			function hex() {
				return $Sh(80, 40, 'p')
						.pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
			}
		]
		_.e(fns, withEachFn)
		function withEachFn(cont, i) {
			var W = 155, H = 155, P = 5, C = 4 //pad, cols
			s.A(tile(cont()).XY(
					42 + (W + P) * (i % C),
					42 + (i / C | 0) * (H + P)))
		}
	})[0]
	tile = createTile = function (x, y) {
		var bg, til
		bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
		til = cjs.ct().A(bg)
		if (N(x)) {
			til.X(x)
		}
		if (N(y)) {
			til.Y(y)
		}
		if (O(x)) {
			til.A(x)
		}
		return til
	}
}
TWOSTAGS = function () {
	$.hdr().K("EaselJS").A(
			$.h1('nextStage'),
			$.p("This is an example")).A()
	c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
			.right(0).bor('1px solid grey').A() // background: 'none',
	c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	topStage = stageSetup("canvasTwo", handleEvt)
			.N("topStage").eMO()
			.A(makeSquare(375, 30, "pink", handleEvt))
			.next(bottomStage)
	topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	function stageSetup(canvasName, handler) {
		s = stage = new cjs.Stage(canvasName).tick()
		//stage.addEventListener("stagemousemove", handler);	// too noisy
		_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
			s.on(ev, handler)
		})
		s.log = []
		return s
	}
	
	function handleEvt(evt) {
		var target = evt.target,
				stage = target.getStage(),
				log = stage.log
		log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		+ " y:" + evt.stageY.toFixed(0))
		while (log.length > 12) {
			log.shift()
		}
		stage.text.text = log.join("\n")
		if (evt.type == "mouseover") {
			target.alpha = 0.5
		}
		if (evt.type == "mouseout") {
			target.alpha = 1
		}
	}
}
ST22 = function () {
	$.header().K("EaselJS").A(
			$.h1('nextStage'),
			$.p("This is an example")).A()
	c1 = $.canvas('y', 540, 260).id('canvasOne')//.P('a').top(0).right(0).bor('1px solid grey').A() // background: 'none',
	c2 = $.canvas('o', 540, 260).id('canvasTwo')//.P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	topStage = stageSetup("canvasTwo", handleEvt)
			.N("topStage").eMO()
			.A(makeSquare(375, 30, "pink", handleEvt))
			.next(bottomStage)
	topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	function stageSetup(canvasName, handler) {
		s = stage = $St(canvasName)
		//stage.addEventListener("stagemousemove", handler);	// too noisy
		_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
			s.on(ev, handler)
		})
		s.log = []
		return s
	}
	
	function makeSquare(x, y, color, handler) {
		var shape = cjs.shape().N('square').XY(x, y)
		shape.graphics.f(color).dr(0, 0, 135, 135)
		var cont = cjs.container().N('container').A(shape)
		_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
			cont.on(ev, handler)
		})
		cont.cursor = "pointer"
		return cont
	}
	
	function handleEvt(evt) {
		var target = evt.target,
				stage = target.getStage(),
				log = stage.log
		log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		+ " y:" + evt.stageY.toFixed(0))
		while (log.length > 12) {
			log.shift()
		}
		stage.text.text = log.join("\n")
		if (evt.type == "mouseover") {
			target.alpha = 0.5
		}
		if (evt.type == "mouseout") {
			target.alpha = 1
		}
	}
	
	/*
	
	 $.header().K("EaselJS").A(
	 $.h1('nextStage'),
	 $.p("This is an example")).A()
	 c1 = $.canvas('y', 540, 260).id('canvasOne').P('a').top(0)
	 .right(0).bor('1px solid grey').A() // background: 'none',
	 c2 = $.canvas('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	 $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	 bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	 //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	 bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	 topStage = stageSetup("canvasTwo", handleEvt)
	 .N("topStage").eMO()
	 .A(makeSquare(375, 30, "pink", handleEvt))
	 .next(bottomStage)
	 topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	 function stageSetup(canvasName, handler) {
	 s = stage = new cjs.Stage(canvasName).tick()
	 //stage.addEventListener("stagemousemove", handler);	// too noisy
	 _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
	 s.on(ev, handler)
	 })
	 s.log = []
	 return s
	 }
	
	 function makeSquare(x, y, color, handler) {
	 var shape = cjs.shape().N('square').XY(x, y)
	 shape.graphics.f(color).dr(0, 0, 135, 135)
	 var cont = cjs.container().N('container').A(shape)
	 _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
	 cont.on(ev, handler)
	 })
	 cont.cursor = "pointer"
	 return cont
	 }
	
	 function handleEvt(evt) {
	 var target = evt.target,
	 stage = target.getStage(),
	 log = stage.log
	 log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
	 + " y:" + evt.stageY.toFixed(0))
	 while (log.length > 12) {
	 log.shift()
	 }
	 stage.text.text = log.join("\n")
	 if (evt.type == "mouseover") {
	 target.alpha = 0.5
	 }
	 if (evt.type == "mouseout") {
	 target.alpha = 1
	 }
	 }
	 */
}
NEEDS$DF = CJSME = function () {
	$St()
	cjs.me = function (fn) {
		Q(['me'], function (q) {
			fn(q.getResult('me'))
		})
	}
	cjs.me(function (i) {
		h.c({
			l: 200,
			rf: ['w', 'u', 800],
			rs: {c1: 'w', c2: 'x', r2: 800}
		}).dc({x: 0, y: 0, r: 200})
		st.h().c({
			l: 200,
			lf: {c1: 'w', c2: 'u', y2: 200},
			ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
		}).dc({x: 0, y: 0, r: 200})
		st.h().lf('y', 'r', 10).dc({r: 200}).c({
			l: 0,
			c: 'y',
			//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
			bs: i, bf: i
		}).dc({r: 200})
		st.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40)
	})//D
}
makeSquare = function (x, y, color, handler) {
	var shape = cjs.shape().N('square').XY(x, y)
	shape.graphics.f(color).dr(0, 0, 135, 135)
	var cont = cjs.ct().N('container').A(shape)
	_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
		cont.on(ev, handler)
	})
	cont.cursor = "pointer"
	return cont
}
function old() {
	UGUNSHIP = function () {
		angleInDegrees = function self(y, x) {
			if (O(y)) {
				return self(y.vy, y.vx)
			}
			var d = tDeg(Math.atan(y / x))
			if (x < 0) {
				d = Math.abs(d) + 90;
				if (y < 0) {
					d = Math.abs(d) + 90
				}
			}
			return d
		}
		ship = function (st) {
			t = new cjs.Shape().XY(100).rY(20).vX(1).vY(1)
			t.graphics.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
			kD('d', function () {
				t.rt(6, '+')
			})
			kD('u', function () {
				t.rt(6, '-')
			})
			if (st) {
				st.A(t)
				st.on('stmousedown', function (event) {
					e = event
					t.vX((e.rawX - t.x) / 100, '+')
					t.vY((e.rawY - t.y) / 100, '+')
					if (t.vx > 10) {
						t.vX(10)
					}
					if (t.vy > 10) {
						t.vY(10)
					}
				})
			}
			setInterval(function () {
				t.X(t.vx, '+').Y(t.vy, '+')
				t.rotation = angleInDegrees(t)
			}, 10)
			return t
		}
		PL = 1;
		aA = []
		div = $.d('y').pad(10)
		div.A(
				$.h1('controls'),
				b1 = $.bt('start', function () {
					PL = 1;
					b1.hd();
					b2.sh()
				}),
				b2 = $.bt('stop', function () {
					PL = 0;
					b2.hd();
					b1.sh()
				}).hide(),
				$.bt('sgun', function () {
					sgun(guy)
				})
		)
		boot = $.boot()
		st = createjs.st(800, 600).tick()
		boot.A(
				div,
				st.canvas
		)
		guy = ship(st)
		// kD('s',function(){ $l('bang')})
		// _.times(100,function(){var a=ast();a.a();a.p()})
		// st.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )
		sgun(guy)
	}
	$rGx = $recGx = classicRecGx = function (width, height, fc, sc) {
		
		// =  cjs.rect= cjs.rect2
		width = width || 50
		height = height || 50
		fc = fc || 'green'
		sc = sc || 'white'
		halfwidth = width / 2
		halfheight = height / 2
		var h = new cjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(-halfwidth, -halfheight)
				.lt(-halfwidth, halfheight)
				.lt(halfwidth, halfheight)
				.lt(halfwidth, -halfheight)
				.lt(-halfwidth, -halfheight)
		return h
	}
}
function grid() {
	GRID = function () {
		stage = s = $St(1000, 1000)
		container = c = new createjs.Container()
		stage.A(container)
		cjs.bindSlide(container)
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.times(rows * cols, function (i) {
			drawSquare(container,
					sqSP * (i % cols),
					sqSP * Math.floor(i / cols)
			)
		})
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
	}
	GRIDD = NEEDSDRAWSQUARE = function () {
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
		
		$St()
		ct = st.ct()
		ct.SL()
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.t(rows * cols, function (i) {
			drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i / cols)
			)
		})
		st.update()
	}//A-
} 