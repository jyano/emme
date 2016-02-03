b.convex = b.polyArr = function (col, arr, str) {
	var b = this, w = b.W(), h, f, g = G(arguments)
	//when and if should i call .conc/.sep ?
	// i could auto-conc it.. but ill lose track of the fixts?
	if (g.length > 2) {
		//passing points direclty: ([],[],[]) or ('r',[],[],[])
		if (S(col)) {
			arr = _.r(g)
		}
		else {
			col = 'p';
			arr = g
		}
	}
	if (!S(col)) {
		
		// ['c', [[],[]] ]   or [[],[]]
		if (A(col) && S(col[0])) {
			arr = _.r(col);
			col = col[0]
		}
		else {
			arr = col;
			col = null
		}
	}
	if (S(_.l(arr))) {
		str = arr.pop()
	}
	f = b.poly.apply(b, arr)
	if (str) {
		f.K(str)
	}
	if (col) {
		f.bindSprite(w.st.poly(arr, col, col))
	}
	return f
	// b2d.sep = b2d.conc =     func|body,verts,scale
//takes an array of points (or of one color and a bunch of points)
////
////
////
// i need a func to check if my points are convex or not ! 
// can check my current libs first!! :)
}
b._pol = function (points, c, i) {
	var b = this
	var newFs, spr
	newFs = b.sepNew(points, function withNewFixtures(f) {
		f.c(c || 'x')
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	})
	if (i) {
		spr = w.gx.h()
		spr.bV({v: points})
		b.bS(spr)
	}
	return newFs
}
b.poly = b.polyArr = b.convex = function (c, V, k) {
	var b = this, w = b.W(), g = G(arguments), h, f
//when and if should i call .conc/.sep ?
// i could auto-conc it.. but ill lose track of the fixts?
	if (g.length > 2) {
		if (S(c)) {
			V = _.r(g)
		} else {
			c = 'p';
			V = g
		}
	}//passing points direclty: ([],[],[]) or ('r',[],[],[])
	if (!S(c)) {
		if (S(c[0])) {
			V = _.r(c);
			c = c[0]
		} else {
			V = c;
			c = null
		}
	}// ['c', [[],[]] ]   or [[],[]]
	if (S(_.l(V))) {
		k = V.pop()
	}
	b.poly = function () {
		var b = this
		return b.f(
				b2d.poly.apply(null, arguments)
		)
	}
	f = b.poly.apply(b, V)
	if (k) {
		f.K(k)
	}
	if (c) {
		f.bS(w.s.poly(V, c, c))
	}
	return f
}
b.POLY = function (c, arr) {
	var b = this, w = b.W(), g = G(arguments), o
	o = S(g.f) ?
	{c: g.f, arr: g.s} :
	{arr: g.f}
	o.c = o.c || 'y'
	var f = b.f($aF(o.arr))
	b.bS2(
			w.st.poly(o.arr, o.c, o.c)
	)
	return f
}  //w.CONVEX = b.vex = b.conv = b.vex =
b.pol = function () {
	var b = this, w = b.W(), g = G(arguments), o
	var newFs
	if (g.u) {
		return b
	}
	if (b2d.iB(g.f)) {
		g.f.fs(b);
		return b
	}
	//if passed [[ color and ]] verts:
	o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} :
			gpc.iP(g.f) ? {v: g.f} :
					b2d.iF(g.f) ? {v: g.f.vs()} :
						// pass in  [[],[],[]]   or  ['r',[],[],[]]
							g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
									g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
											g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
											{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
	_oo = o
	$df.h(o)
	o.i = o.i || o.bf
	//$l('check _o');
	_o = o
	newFs = b.sepNew(o.v, function (f) {
		f.set(o)
		f.c(o.c, o.C, o.l)
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	})
	if (o.i) {
		__h = w.gx.h().bV(o)
		b.bS(__h)
	}
	return newFs
}
b.poly = b.pol = function me() {
	var b = this, w = b.W(), g = G(arguments),
			v, h, f, fd, n, fs, h, mult, o
	if (A(g[0]) || S(g[0])) {
		if (!g.length > 2) {
			return me.apply(b, g)
		}
		o = S(g[0]) ? {c: g[0], V: _.r(g)} : {c: 'p', V: g}
		if (S(_.l(o.V))) {
			o.k = o.V.pop()
		}
		f = b.f(b2d.poly.apply(null, o.V))
		if (o.k) {
			f.K(o.k)
		}
		if (o.c) {
			f.bS(w.s.poly(o.V, o.c, o.c))
		}
		return f
	}
	o = b2d.fixtPams(g[0])
	if (o.X) {
		b.clear()
	}
	if (o.q == false) {
		h = new b2d.PolygonShape()
		v = _.map(o.v, b2d.div)
		h.SetAsArray(v, v.length)
		fd = new b2d.Dynamics.b2FixtureDef()
		fd.shape = h
		fd.den(o.d).rest(o.b).fric(o.f)
		f = b.fixt(fd)
		if (o.k) {
			f.K(o.k)
		}
		if (o.C) {
			f.C(o.C)
		}
		return f
	}
	n = b.num()
	if (O(o.v[0][0])) {
		_.e(o.v, function (v) {
			b2d.sep(b, v)
		})
	}
	else {
		b2d.sep(b, o.v);
		o.v = [o.v]
	}
	fs = _.f(b.fs(), b.num() - n)
	_.e(fs, function (f) {
		f.d(o.d).r(o.b).fr(o.f)
		f.m_isSensor = o.s ? true : false
		if (o.k) {
			f.K(o.k)
		}
		if (o.c) {
			f.C(o.c, o.C, o.l)
		}
		if (o.lf) {
			f.bS(
					w.s.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(
					//w.s.h().c(o).lt(o.v) // w.s.h().poly(o)
					w.s.h().rf(o).lt(o.v)
			)
		}
	})
	if (o.bm) {
		b.bS(w.s.h().bmV(o))
	}
	return fs.length > 1 ? fs : fs[0]
}
b.pol = function () {
	var b = this, w = b.W(), g = G(arguments), fs, n, arr, o, vs
	b2d.mini()
	//-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]]
	// b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}
	if (g.u) {
		return b
	}
	if (iP(g.f) && U(g.s)) {
		return b.pol({v: g.f})
	}
	if (S(g.f) && iP(g.s) && U(g.t)) {
		return b.pol({c: g.f, v: g.s})
	}
	if (iF(g.f)) {
		g.f = g.f.rV()
	}
	else if (iB(g.f)) {
		g.f.fs(b);
		return b
	}
	if (g.A) {
		o = S(g.f[0]) ?
		{c: g.f[0], v: _.r(g.f)} :
		{v: g.f}
	}
	else {
		o = g.O ? g.f :
				g.S_ ?
						(g.t ?
						{c: g.f, v: g.r} :
						{c: g.f, v: g.s}) :
				{v: g}
	}
	o = df.h(o)
	if (iP(o.v)) {
		o.v = o.v.vs()
	}
	n = b.n()
	if (O(o.v[0][0])) {
		_.e(o.v, function (v) {
			b2d.sep(b, v)
		})
	}
	
	//pass in 2 or more objs->
	else {
		b2d.sep(b, o.v);
		o.v = [o.v]
	}
	//pass in one object
	//->  ['r', [],[],[] ]//->  [[],[],[]]
	//pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
	//just pass in loose verts//-> [],[],[]
	//same two as above but also nested in wrapper array.. so just ONE pam
	//if (o.X) {b.clear()}
	//the NEW fixts
	fs = _.f(b.fs(), b.n() - n) //each of only the NEW fixts
	_.e(fs, function (f) {
		f.d(o.d).r(o.b).fr(o.f)
		if (o.s) {
			f.m_isSensor = o.s ? true : false
			f.sen(1)
		}
		f.K(o.k)
		f.C(o.c, o.C, o.l)
		if (o.lf) {
			f.bS(w.s.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.s.h().rf(o).lt(o.v))
		}
	})
	o.i = o.i || o.bf
	if (o.i) {
		h = w.g.h()
		h.bV(o)
		b.bS(h)
	}
	//b.cir('y', 10);b.cir('z', 6)
	return fs.length > 1 ? fs : fs[0]
}
////////https://www.youtube.com/watch?v=_QqKMv6I2hc
b.pol = function () {
	var b = this, w = b.W(), g = G(arguments), o
	var newFs
	if (g.u) {
		return b
	}
	if (b2d.iB(g.f)) {
		g.f.fs(b);
		return b
	}
	//if passed [[ color and ]] verts:
	o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} :
			gpc.iP(g.f) ? {v: g.f} :
					b2d.iF(g.f) ? {v: g.f.vs()} :
						// pass in  [[],[],[]]   or  ['r',[],[],[]]
							g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
									g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
											g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
											{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
	$df.h(o)
	o.i = o.i || o.bf
	newFs = b.sepNew(o.v, function (f) {
		f.set(o)
		f.c(o.c, o.C, o.l)
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	})
	if (o.i) {
		b.bS(__h = w.gx.h().bV(o))
	}
	return newFs
}
w.BAL = w.BALL = function (x, y, r, c) {
	var w = this
	return w.ball(x, y, r).bS2(w.st.cir(x, y, r, c))
} //= w.circ = w.circColor
w.BAL = w.BALL = function (x, y, radius, color) {
	var wd = this.s.W(), ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	radius = N(radius) ? radius : _.random(14) + 8
	return this.ball(x, y, radius).lD(2)
			.bindSprite2(
			this.s.cir(x, y, radius, color)
	)
}
b.cir = function () {
	var b = this,
			g = G(arguments), o = g.f, fD, f
	polyMorph()
	fD = b2d.fD(b2d.cH(o.r), o.x, o.y)
	fD.sen(o.s || g.n || false)
	f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
	return o.c === 0 ? f : f.cSp(o)
	function polyMorph() {
		//if passed array, it assumes it is arguments for ONE cir
		if (g.A) {
			return b.cir.apply(b, g.f)
		}
		//if you pass at least two objects, it makes multiple cirs and passes back b
		if (O(g.s)) {
			g.e(function (c) {
				b.cir(c)
			});
			return b
		}
		// can pass obj
		// can pass: c C [r] [x] [y]
		// can pass: c [r] [x] [y]
		// can pass: [r] [x] [y] [c] [C]
		o = g.O ? g.f
				: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
				: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
				: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
		return cirDfs(o)
	}
}
b.cir = function () {
	var b = this,
			g = G(arguments), o = g.f, fD, f
	polyMorph()
	fD = b2d.fD($cH(o.r), o.x, o.y)
	fD.sen(o.s || g.n || false)
	f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
	return o.c === 0 ? f : f.cSp(o)
	function polyMorph() {
		//if passed array, it assumes it is arguments for ONE cir
		if (g.A) {
			return b.cir.apply(b, g.f)
		}
		//if you pass at least two objects, it makes multiple cirs and passes back b
		if (O(g.s)) {
			g.e(function (c) {
				b.cir(c)
			});
			return b
		}
		// can pass obj
		// can pass: c C [r] [x] [y]
		// can pass: c [r] [x] [y]
		// can pass: [r] [x] [y] [c] [C]
		o = g.O ? g.f
				: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
				: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
				: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
		return cirDfs(o)
	}
}
f.cir = function (o) {
	var f = this
	return _.x(o || {}, {x: f.pX(), y: f.pY(), r: f.rad()})
}
w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
	var w = this, g = G(arguments), b, o
	o = g.O ? g.f : N(g.s) ? {
		x: g.f, y: g.s,
		r: g.t,
		c: g[3]
	} : {r: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.r = N(o.r, 50)
	o.c = o.c || $r()
	b = w.D(o.x, o.y, o.c, o.r)
			.d(.5).fr(0).r(.5)
			.K('ball cir')
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.bump = w.baa = function () {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		r: g[2]
	} : {r: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.r = _.tN(o.r, 40)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)
	if (g.n) {
		b.sen(true)
	}
	return b
}
b.CIRC = b.circ = function (col, rad, x, y) {
	var g = G(arguments), fixt, h, str
	col = g[0];
	rad = g[1];
	x = g[2];
	y = g[3];
	if (S(y)) {
		str = y;
		y = null
	}
	if (S(x)) {
		str = x;
		x = null
	}
	if (S(rad)) {
		str = rad;
		rad = null
	}
	if (!S(col)) {
		y = x;
		x = rad;
		rad = col
	}
	fixt = this.fixt(b2d.circ(rad, x, y))
	if (str) {
		fixt.K(str)
	}
	if (S(col)) {
		fixt.bindSprite(w.s.circ(col, rad, x, y))
	}
	return fixt
}
w.circ = function (x, y, rad, col) {
	var ball, w = this
	// will err on random x,y.. dont like it. that should be with '*' (explicityly ONLY for something like this)
	var wd = this.s.W(),
			ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	rad = N(rad) ? rad : _.random(14) + 8
	ball = w.ball(x, y, rad).linDamp(2)
	ball.bindSprite2(w.s.cir(x, y, rad, col))
	return ball
}
function add_notCreate() {
	w.addCirc = function (x, y, radius, color) {//specific to talkjs
		x = N(x) ? x : parseInt(Math.random() * 2200 - 1000)
		y = N(y) ? y : parseInt(Math.random() * 1600 - 1000)
		radius = N(radius) ? radius : _.random(14) + 8
		color = oO('c', color || $r())
		this.ball(x, y, radius).bindSprite2(
				cjs.circ(radius, color).XY(x, y)).linDamp(2)
	}
}
b.rect = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this,
			rect = b2d.poly(wd, ht, x, y),
			fixt = this.fixt(rect).den(1),
			r = cjs.rect2(wd, ht, x, y).XY(this.X(), this.Y())
	w.s.A(r)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	return fixt
}
b.rectSensor = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this
	var rect = b2d.poly(wd, ht, x, y)
	rect.isSensor = true
	var fixt = this.fixt(rect)
	fixt.den(.00000001)
	var r = cjs.rect2(wd, ht, x, y)
	r.XY(this.X(), this.Y())
	w.s.A(r)
	r.opacity(.3)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	fixt.sprite = r
	return fixt
}
w.R = function (c, W, H, x, y) {
	var w = this, wC = w.cent(),
			r,
			g = G(arguments)
	if (!S(g[0])) {
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
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	y = N(y) ? y : x
	/*
	 x=N(g[0])?g[0]:wC.x
	 y=N(y)?y:N(g[0])?N(g[0]):wC.y
	 W=N(W)?W:100
	 H=N(H)?H:W
	 */
	r = w.S(x + (W / 2), y + (H / 2), c, W, H)
	return r
}
b.RECT = function (col, wd, ht, x, y, rot) {
	var g = G(arguments),
			fd,
			fixt,
			h,
			str, alpha = 1
	col = g[0];
	wd = g[1];
	ht = g[2]
	x = g[3];
	y = g[4];
	rot = g[5]
	if (S(rot)) {
		str = rot;
		rot = null
	}
	if (S(y)) {
		str = y;
		y = null
	}
	if (S(x)) {
		str = x;
		x = null
	}
	if (S(ht)) {
		str = ht;
		ht = null
	}
	if (!S(col)) {
		rot = y;
		y = x;
		x = ht;
		ht = wd;
		wd = col
	}
	fd = b2d.rec(wd, ht, x, y, rot)
	if (g.n) {
		fd.isSensor = true
		alpha = .2
	}
	fixt = this.fixt(fd)
	if (str) {
		fixt.K(str)
	}
	if (S(col)) {
		fixt.bindSprite(
				w.s.RECT(col, wd, ht, x, y, rot), 0, 0, 0, alpha
		)
	}
	return fixt
}
 
w.gG = w.greenGuy = function (x, y) {
	x = N(x) ? x : 100;
	y = N(y) ? y : 100
	var w = this
	var gG = w.D(x, y)
	gG.size = 20
	gG.core = gG.K('gG').rect(20, 25).re(2)
	gG.shrivel = function () {
		var gG = this
		gG.size = 20//; gG.lV(0).aV(0)
	}
	gG.makeShel = function () {
		var gG = this;
		if (gG.shel) {
			gG.shel.kill()
		}
		gG.shel = gG.rectSensor(gG.size, gG.size)
	}
	gG.growSize = function () {
		this.size += 4;
		return this
	}
	_.ev(.5, function () {
		gG.growSize().makeShel()
	})
	gG.core.cl('player', function () {
		gG.shrivel()
	})
	return gG
}
w.polyBul = function (x, y, wd, ht, col) {
	var bul = this.bul(x, y)
	bul.poly(wd, ht)
	if (col) {
		bul.bindSprite2(
				cjs.rect(wd, ht, oO('c', col)).XY(x, y).a2(this.s)
		)
	}
	return bul
}
UPDOWN = function () {
	w = b2d.W({g: 0}).debug().C('g')
	y = w.ship(300, 50).linDamp(5)
	co1 = w.acc(0, -50)
	co2 = w.acc(0, 50)
	s1 = w.rectSensor(250, 300, 600, 600, 'o').K('co1')
	s2 = w.rectSensor(950, 300, 600, 600, 'o').K('co2')
	w.bindCo('co1', 'co2')
	w.beg(function () {
	})
	w.end(function (cx) {
		var fixt
		if (fixt = cx.with('co1')) {
			// fixt.cancel()
		}
		if (fixt = cx.with('co2')) {
			// fixt.cancel()
		}
	})
	_.times(20, function () {
		w.circ(300, 300, 30, 'b')
	})
}
w.vW = function (col, H, x, y) {
	var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
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
w.rectStat = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brick(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y)
	).linDamp(2)
}
w.rectSensor = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brickSensor(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
	).linDamp(2)
}
b.rectSensor = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this
	var rect = b2d.poly(wd, ht, x, y)
	rect.isSensor = true
	var fixt = this.fixt(rect)
	fixt.den(.00000001)
	var r = cjs.rect2(wd, ht, x, y)
	r.XY(this.X(), this.Y())
	w.s.A(r)
	r.opacity(.3)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	fixt.sprite = r
	return fixt
}
w.buck = w.sensorBucket = function (x, y, k) {
	var w = this//x = N(x) ? x : 320 //y = N(y) ? y : 245
	k = k || 'sensorBucket'
	Part(x, y + 95, 320)
	Part(x - 150, y - 15)
	Part(x + 150, y - 15)
	return w.rectSensor(x, y, 280, 170, 'b').K(k)
	function Part(x, y, wd) {
		return w.BRICK(x, y, wd, 20, 200, 'o')
	}
}
w.rectSensor = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brickSensor(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
	).linDamp(2)
}
w.BMP = w.BUMP = function (x, y, r, c) {
	var w = this,
			g = G(arguments)
	//	var wd = w.st.W(), ht = w.st.H()
	//x = N(x) ? x : _.pI(M.r() * (wd - 100)) + 60
	//y = N(y) ? y : 50
	//r = N(r) ? r : _.ran(14) + 8
	c = oO('c', c || 'y')
	return w.bump(x, y, r, g.o).bS2($cGx(r, c))
}// = w.circStat = w.cSt
w.circStat = function (x, y, radius, color) {
	var wd = this.s.W(),
			ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	radius = N(radius) ? radius : _.random(14) + 8
	color = oO('c', color || $r())
	return this.bump(x, y, radius).bindSprite2(
			cjs.circ(radius, color).XY(x, y)
	).linDamp(2)
}
w.circStat = function (x, y, radius, color) {
	var wd = this.s.W(),
			ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	radius = N(radius) ? radius : _.random(14) + 8
	color = oO('c', color || $r())
	return this.bump(x, y, radius).bindSprite2(
			cjs.circ(radius, color).XY(x, y)
	).linDamp(2)
}