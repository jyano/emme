$l('paths')
cx = x 
x.cP = x.x = x.cp = function () {
	this.closePath();
	return this
}
x.b = x.beg = x.bP = function () {
	var x = this, g = G(arguments)
	x.beginPath()
	if (g.u) {
		return x
	}
	if (g.N_) {
		x.mt(g.f, g.s)
		if (g.t) {
			x.C(g.t, g.fo, g.fi)
		}
	}
	else {
		x.C.apply(x, g)
	}
	return x
}
x.iP = x.ptInPth = function (x, y) {
	return this.isPointInPath(x, y)
}
x.mT = x.mt = function () {
	var x = this, g = G(arguments)
	if (g.A_ && A(g.f[0])) {
		x.mt.apply(x, g.f)
	}
	else if (g.A_) {
		x.mt(g.f[0], g.f[1])
		g.eR(function (pt) {
			x.lt(pt[0], pt[1])
		})
	}
	else {
		x.moveTo(N(g.f, 0), N(g.s, 0))
		if (N(g.t)) {
			x.lt(g.t, g[3])
		}
	}
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.lT = x.lt = function () {
	var g = G(arguments), x = this
	if (g.A_ && A(g.f[0])) {
		x.lt.apply(x, g.f)
	}
	else if (O(g.s)) {
		g.e(function (pt) {
			x.lt(pt[0], pt[1])
		})
	}
	else {
		x.lineTo(g.f, g.s)
	}
	return g.n ? x.s() :
			g.p ? x.f() :
					g.m ? x.D() : x
}
//draw curves
x.ac = x.a = function () {
	var g = G(arguments), x = this,
			o = N(g.s) ? {x: g.f, y: g.s, r: g.t, rt1: g[3], rt2: g[4]} :
			{r: g.f}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	o.rt1 = N(o.rt1, 0)
	o.rt2 = N(o.rt2, 360)
	o.ccw = g.n ? true : false
	this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.ac2 = x.arc2 = x.at = function () {
	var g = G(arguments), o
	o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
	this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.ac4 = x.quad = x.quadratic = x.qt = function () {
	this.quadraticCurveTo();
	return this
}
// lineProps 
x.l = x.lW = function (n) {
	var g = G(arguments)
	if (!g.n) {
		this.lineWidth = n;
		return this
	}
	return this.lt(g.f, g.s)
}
x.lC = function (c) {
	var g = G(arguments);
	if (c == 'r') {
		c = 'round'
	}
	else if (c == 'r') {
		c = 'square'
	}
	else if (c == 'b') {
		c = 'but'
	}
	this.lineCap = c
	return this
}
x.lJ = function (n) {
	var g = G(arguments);
	if (g.N) {
		this.lineJoin = n;
		return this
	}
}
x.clp = x.cl = function () {
	this.clip();
	return this
}
x.Mt = x._pol = function () {
	this.b()
	return this.mt.apply(this.arguments)
}
x.pol = function (vs, ox, oy) {
	var x = this, i
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
	_.e(_.r(vs), function (v) {
		x.lt(v[0] + ox, v[1] + oy)
	})
	return x.cp().s().f()
}
 
x.drawPol = x.drawSinglePoly = function (vxs, strCol, hole, ox, oy) {
	var x = this
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(vxs[0][0] + ox, vxs[0][1] + oy)
	_.e(_.r(vxs), function (vx) {
		x.lt(vx[0] + ox, vx[1] + oy);
	})
	x.lW(12).sS(strCol).fS("rgba(255, 0, 0, 0.1)")
	if (hole) {
		x.fS("#ffffff")
	}
	x.cp().s().f()
}
XX7 = INVERSE = RAW = PX = function () {
	__C()
	i = new Image()
	$(i).load(function (e) {
		x.drawImage(e.target, 0, 0)
		d = x.getImageData(0, 0, 200, 200)
		for (var i = 0; i < d.data.length; i += 4) {
			d.data[i] = 255 - d.data[i];
			d.data[i + 1] = 255 - d.data[i + 1];
			d.data[i + 2] = 255 - d.data[i + 2];
			d.data[i + 3] = 255;
		}
		x.putImageData(d, 0, 0);
	})
	i.src = _.src('me')
	canvas = c
	_.in(function () {
		canvas.draw('sun', 0, 0)
		_.in(2, function () {
			pixels = canvas.gD(100, 100, 500, 500)
			canvas.pD(pixels, 100, 110)
			canvas.f("r").fr(10, 10, 50, 50)
			imgData = c.gD(10, 10, 50, 50)
			c.pD(imgData, 10, 70)
		})
	})
}

//  loader 
$.fn.ld = function () {
	var q = this
	q.load.apply(q, arguments)
	return q
}
x.dc = function (xx, y, rad) {
	var x = this
	x.ac(xx, y, N(rad, 0))
	return x
}
x.cir = function (xx, y, rad, fCol, sCol) {
	var x = this
	if (fCol) {
		x.fC(fCol)
		if (sCol) {
			x.sC(sCol)
		}
	}
	x.dc(xx, y, N(rad, 0))
	return x
}
x.cvC = function (c) {
	$(this.canvas).C(c)
	return this
}
//
_canDraw = function (el) {
	el.f = el.fS = el.fs = el.fill = function (c) {
		if (U(c)) {
			el.context.fill()
		}
		else {
			el.context.fillStyle = oO('c', c)
		}
		return el
	}
	el.s = el.stroke = el.sS = function (c) {
		var el = this
		if (U(c)) {
			el.context.stroke()
		}
		else {
			el.context.strokeStyle = oO('c', c)
		}
		return el
	}//ss
	el.fsl = function (fS, sS, l) {
		this.context.f(fS)
		if (sS) {
			this.context.s(sS)
		}
		if (N(l)) {
			this.context.l(l)
		}
		return this
	}
	el.cP = el.closePath = function () {
		el.context.closePath()
		return el
	}
	el.bP = el.beginPath = el.begin = function (x, y) {
		el.context.beginPath()
		if (N(x)) {
			el.moveTo(x, y)
		}
		if (A(x)) {
			el.moveTo(x[0], x[1])
		}
		return el
	}
	return el
}
//
el.mT = el.moveTo = function (x, y) {
	el.context.moveTo(x, y)
	return el
}
el.lT = el.lineTo = function (x, y) {
	if (A(x)) {
		_.e(arguments,
				function (x) {
					el.lineTo(x[0], x[1])
				})
	}
	el.context.lineTo(x, y)
	return el
}
el.cl = el.clip = function () {
	el.context.clip()
	return el
}
_canCurves = function (el) {
	el.arc = function (a, b, c, d, e, f, g) {
		el.context.arc(a, b, c, d, e, f, g)
		return el
	}
	el.arcTo = el.arc2 = function a2(X) {
		var g = G(arguments)
		if (A(X)) {
			return _a(a2(x), X)
		}
		this.arcTox([0] || 50, g[1] || 40, g[2] || 100, g[3] || 100, g[4] || 30)
		this.stroke()
		return this
	}
	el.bezierCurveTo = function (a, b, c, d, e, f, g) {
		this.context.quadraticCurveTo(a, b, c, d, e, f, g)
		return this
	}
	el.quadraticCurveTo = function (a, b, c, d, e, f, g) {
		this.context.quadraticCurveTo(a, b, c, d, e, f, g)
		return el
	}
	el.curveTo = function (a, b, c, d, e, f, g) {
		if (N(e)) {
			return this.bezierCurveTo(a, b, c, d, e, f)
		}
		else return this.quadraticCurveTo(a, b, c, d, e, f, g)
	}
	el.cir = function (X, Y, R, fs, ss) {
		var g = G(arguments),
				X = g[0] || 200, Y = g[1] || 200, r = g[2] || 1,
				fs = g[3],
				ss = g[4]
		el.bP()
		el.arc(X, Y, r, 0, 7, false)
		el.fS(fs)
		el.sS(ss)
		el.s().f()
		return el
	}
	el.paperBag = function (x, y, width, height, blowX, blowY) {
		x = x || 100
		y = y || 100
		width = width || 100
		height = height || 100
		blowX = blowX || 100
		blowY = blowY || 100
		var lx, ly;
		this.ctx().strokeStyle = 'Red'
		this.ctx().beginPath();
		this.ctx().moveTo(x, y);
		this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
		this.ctx().quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
		this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
		this.ctx().quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
		return this
	}
	return el
}
_canCurves(el);
line()
function line() {
	_drawLine = function (el) {
		//draw line ( [x,y],[x,y] || x,y,x,y )
		//draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
		//fresh start
		el.ln = el.line = function rc(p) {
			var args = G(arguments), p = args[0]
			if (N(args[0])) {
				el.begin(args[0], args[1])
				el.lineTo(args[2], args[3])
				el.stroke()
				return el
			}
			if (A(args[0]) && N(args[0][0])) {
				el.begin(args.f)
				_.e(args.r, function (p) {
					el.lineTo(p[0], p[1])
				})
				el.stroke()
				return el
			}
			if (AA(p)) {
				_.e(args,
						function (p) {
							el.line.apply(null, p)
						})
			}
			el.stroke()
			return el
		}
		el.fitEx = function () {
			this.ln([0, 0], [this.W(), this.H()], [0, this.W()], [this.H(), 0])
		}
		el.sun = function (a, b, s) {
			s = s || 1;
			this.rG([[a || 0, b || a || 0],
						s * 100, s * 500],
					{'y': 0, 1: tCl('p', 0)},
					600, 600)
		}
		el.ball = function (b) {
			b = b || {}
			var dir = b.d || false,
					px = b.x || 100, py = b.y || 100, rad = b.r || 100,
					per = b.p || Math.PI * 2,
					ss = $r('c', b.s),
					fs = $r('c', b.f),
					lw = D(b.l) ? b.l : 4
			return x.com(
					'b', ['a', px, py, rad, 0, per, dir],
					{f: fs, s: ss, w: lw}, 'f', 's')
		}
		el.pointInPath = el.pip = function (c, a, b) {
			return this.context.isPointInPath(a, b)
		}
		el.paperBag = function (x, y, width, height, blowX, blowY) {
			x = x || 100
			y = y || 100
			width = width || 100
			height = height || 100
			blowX = blowX || 100
			blowY = blowY || 100
			var lx, ly;
			this.beginPath();
			this.moveTo(x, y);
			this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
			this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
			this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
			this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
			return this
		}
		//normal prop (as methods)
		el.lW = el.lineWidth = function (w) {
			if (U(w)) {
				return el.context.lineWidth
			}
			el.context.lineWidth = w
			return el
		}
		el.lC = el.lineCap = function (w) {
			if (U(w)) {
				return el.context.lineCap
			}
			el.context.lineCap = w
			return el
		}
		el.lJ = el.lineJoin = function (w) {
			if (U(w)) {
				return el.context.lineJoin
			}
			el.context.lineJoin = w
			return el
		}
	}
	_drawLine(el)
	el.hL = el.horizontalLine = el.lnh = function (X, Y, l) {
		var g = G(arguments), X = g[0], Y = g[1], l = g[2],
				X2 = g.p ? X + l : g.n ? X - l : l
		return x.ln(X, Y, X2, Y)
	}
	el.vL = el.verticalLine = el.lnv = function (X, Y, len) {
		var g = G(arguments),
				X = g[0],
				Y = g[1],
				len = g[2],
				Y2 = g.p ? Y + len
						: g.n ? Y - len
						: len
		return x.ln(X, Y, X, Y2)
	}
}
 
cx.ln = cx.line = function rc(p) {
	var cx=this, g = G(arguments), p = g[0]
	if (N(g[0])) {
	
		return cx.b(g[0], g[1]).lT(g[2], g[3]).s()
	}
	if (A(g[0]) && N(g[0][0])) {
		cx.b(g.f)
		_.e(g.r, function (p) {
			cx.lT(p[0], p[1])
		})
		cx.s()
		return cx
	}

	if (AA(p)) {_.e(g, function (p) {cx.line.apply(null, p)})}
	
	return cx.s()
}
cx.fitEx = function () {
	this.ln([0, 0], [this.W(), this.H()], [0, this.W()], [this.H(), 0])
}
cx.sun = function (a, b, s) {
	s = s || 1;
	this.rG([[a || 0, b || a || 0],
				s * 100, s * 500],
			{'y': 0, 1: tCl('p', 0)},
			600, 600)
}
cx.ball = function (b) {
	b = b || {}
	var dir = b.d || false,
			px = b.x || 100, py = b.y || 100, rad = b.r || 100,
			per = b.p || Math.PI * 2,
			ss = $r('c', b.s),
			fs = $r('c', b.f),
			lw = D(b.l) ? b.l : 4
	return x.com(
			'b', ['a', px, py, rad, 0, per, dir],
			{f: fs, s: ss, w: lw}, 'f', 's')
}
cx.pointInPath = cx.pip = function (c, a, b) {
	return this.context.isPointInPath(a, b)
}
cx.paperBag = function (x, y, width, height, blowX, blowY) {
	x = x || 100
	y = y || 100
	width = width || 100
	height = height || 100
	blowX = blowX || 100
	blowY = blowY || 100
	var lx, ly;
	this.beginPath();
	this.moveTo(x, y);
	this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
	this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
	this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
	this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
	return this
}
// DRAWINGAPP YOUTUBE TUT
//https://www.youtube.com/watch?v=m4sioSqlXhQ
//https://www.youtube.com/watch?v=m4sioSqlXhQ
 
rects()
	function rects(){
		x.r = function () {
			var ctx = this, g = G(arguments), o
			o = N(g.fo) ? {x: g.f, y: g.s, w: g.t, h: g.fo} :
					N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
					{w: g.f, h: g.s}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, ctx.W())
			o.h = N(o.h, ctx.H())
			ctx.rect(o.x, o.y, o.w, o.h)
			return ctx
		}
		x.r2 = function (x, y, w, h) {
			var g = G(arguments), o
			o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
					N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
					{w: g.f, h: g.s}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, this.W())
			o.h = N(o.h, this.H())
			this.rect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
			return this
		}
//fillRect
		x.fr = x.fR = function (x, y, w, h) {
			el.fR = el.fillRect = el.fr = function (a, b, c, d) {
				a = a || 0
				b = b || 0
				c = c || el.W()
				d = d || el.H()
				el.context.fillRect(a, b, c, d)
				return this
			}
			el.fillRect = el.fr = function (a, b, c, d) {
				a = a || 0
				b = b || 0
				c = c || this.W()
				d = d || this.H()
				this.context.fillRect(a, b, c, d)
				return this
			}
			el.colorFillRect = el.cfr = function (a) {
				var args = G(arguments)
				this.save()
				this.fillStyle = a
				this.fillRect(0, 0, this.W(), this.H())
				this.restore()
				return this
			}
			var g = G(arguments), o
			o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
					N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
					{w: g.f, h: g.s}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, this.W())
			o.h = N(o.h, this.H())
			this.fillRect(o.x, o.y, o.w, o.h)
			return this
		}
		x.fr2 = x.fR2 = function (x, y, w, h) {
			var g = G(arguments), o
			o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
					N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
					{w: g.f, h: g.s}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, this.W())
			o.h = N(o.h, this.H())
			this.fillRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
			return this
		}
//strokeRect
		x.sR = x.sr = function (x, y, w, h) {
			var g = G(arguments), o
			o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
					N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
					{w: g.f, h: g.s}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, this.W())
			o.h = N(o.h, this.H())
			this.strokeRect(o.x, o.y, o.w, o.h)
			return this
		}
		x.sr2 = function (x, y, w, h) {
			var g = G(arguments), o
			o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
					N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
					{w: g.f, h: g.s}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, this.W())
			o.h = N(o.h, this.H())
			this.strokeRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
			return this
		}
//clearRect
		x.cR = x.clR = function (x, y, w, h) {

//clear screen [+ fill with color || run fx]
			el.clr = el.clear = el.clearRect = function (a, b, c, d) {
				if (S(a)) {
					el.fillStyle(a);
					return el.fillRect()
				}
				a = a || 0
				b = b || 0
				c = c || el.W()
				d = d || el.H()
				el.context.clearRect(a, b, c, d)
				// if(F(a)){a()}
				return el
			}
			var g = G(arguments), o
			o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
					N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
					{w: g.f, h: g.s}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, this.W())
			o.h = N(o.h, this.H())
			this.clearRect(o.x, o.y, o.w, o.h)
			return this
		}
		x.cR2 = function (x, y, w, h) {
			var g = G(arguments), o
			o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
					N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
					{w: g.f, h: g.s}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, this.W())
			o.h = N(o.h, this.H())
			this.clearRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
			return this
		}
		function alpha() {
			x.roundRect = function () {
				el.roundRect = function (X, y, width, height, radius) {
					el = this.context
					el.beginPath()
					el.moveTo(X + radius, y);
					el.lineTo(X + width - radius, y);
					el.quadraticCurveTo(X + width, y, X + width, y + radius);
					el.lineTo(X + width, y + height - radius);
					el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
					el.lineTo(X + radius, y + height);
					el.quadraticCurveTo(X, y + height, X, y + height - radius);
					el.lineTo(X, y + radius);
					el.quadraticCurveTo(X, y, X + radius, y);
					el.closePath();
					el.fill()
					return el
				}
				el.roundRect.test = function () {
					el.roundRect(100, 100, 200, 400, 20)
				}
			}
		}}