
bx.oParse = function (W, H, wW, wH) {
	var o = N(H) ? {W: W, H: H, wW: wW, wH: wH} :
			N(W) ? {g: W} :
					A(W) ? _.x(H, {W: W[0], H: W[1], wW: W[2], wH: W[3]}) :
							O(W) ? W : {}
	return o
}
bx.aWorld = function () {
	var g = G(arguments), o
	o = g.O ? g.f :
			N(g.s) ? {x: g.f, y: g.s, sleep: g.t} :
					N(g.f) ? {y: g.f, sleep: g.s} :
					{sl: g.f}
	o.x = N(o.x, 0)
	o.y = N(o.y, 10)
	o.sleep = U(o.sleep || o.sleep) ?
			true : false
	return new bx.W(o.x, o.y, o.sl)
}
bx.parseW = function (g) {
	var
			o = g.A_ ?
					_.x(g.s || {},
							{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
					N(g.f) && U(g.s) ? {g: g.f} :
							g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
									g.S ? {w: g.f} :
									g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	w = new b2d.World(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	return w = bx.theWorld1()
}

makeStage1 = function (X, Y, options) {
	canvas = c = $can(X, Y).a().bc('z')
	canvas.id('canvas')
	stage = s = SuperStage(canvas)
	T$.removeAllEventListeners()
	ctx = x = xx(canvas)
	stage.ob.autoClear = false
	if (options.bg) {
		stage.b(options.bg)
	}
}
TRIPLESTAGE = function () {
	w = W({g: 0})
	b = w.ball(500, 300, 60)
	b.bindSprite2(w.s.shape(500, 300))
	num = 0
	dif = .1
	shape = b.sprite
	shape.rG(['r', 'y'], [0, num], 60).dc(0, 0, 60)
	w.st.HUD.bm('me', function (b) {
		b.XY(300).drag()
	})
	w.st.back.bm('guy', function (b) {
		b.XY(200).drag()
	})
	w.st.back.linGrad('b', 'z')
}
tripleStage5LayerWalls = function room() {
	w.BG = w.I = $St('z', w.W, w.H, 0, 0)
	w.st = w.s = $St('X', w.W, w.H, 0, 0)//.aC(0)
	w.cv = w.canvas = w.st.canvas;
	w.$cv = w.can = $(w.canvas);
	w.cx = w.ctx = w.can.ctx('2d')
	w.bg = w.st.ct();
	w.gx = w.g = w.st.ct();
	w.fg = w.st.ct()
	w.FG = w.i = $St('X', w.W, w.H, 0, 0)
	if (o.i) {
		w.s.bm(o.i)
	}
	w.lG($r())
	if (o.aC == 1) {
		//w.i.aC(0)
		// if(g.O){; return w}
		// return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
	}
	w.walls(_w)
}
w.setBg = function (o) {
	var w = this;
	if (o.i) {
		w.s.bm(o.i)
	}
	;
	return w
}
w.auCl = function (aC) {
	var w = this, st = w.st
	if (U(aC)) {
		return st.autoClear
	}
	st.autoClear = aC ? true : false
	return w
}
w.ggAuCl = function () {
	var w = this
	w.auCl(!w.auCl())
	return w
}
Wor = function (ops) {
	var width, height
	if (!O(ops)) {
		ops = {}
	}
	width = ops.W || 1200;
	height = ops.H || 600
	w = b2d.world(V(0, 0))

	cjs.watchKeys()

	w.st = w.stage = w.s = cjs.tripleStage('r', width, height)

	w.stage.back.A()
	w.stage.A()
	w.stage.HUD.A()
	w.canvas = w.stage.canvas;
	w.c = w.can = $(w.canvas)

	canvas = $(w.canvas).id('canvas')

	w.context = w.canvas.getContext('2d')

	setInterval(function () {
		w.step(1 / 60, 10, 10).clearForces()
		w.stage.update()
	}, 1000 / 60)

	w.gameW = w.st.canvas.width
	w.gameH = w.st.canvas.height
	return w
}
 
