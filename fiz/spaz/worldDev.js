w.gx = function (o) {
	var w = this, W = o.W, H = o.H
	w.bg = new cjs.Stage($.can(o.C || 'z', W, H).P('a').XY(0, 0)[0]).A().tick();
	w.bg.linGrad = function (c1, c2) {
		var s = this, H = s.H(), W = s.W()
		c1 = oO('c', c1 || 'b')
		c2 = oO('c', c2 || 'r')
		if (R()) {
			$l('=')
			if (R()) {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, 0, H).dr(0, 0, W, H)
			}
			else {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, 0).dr(0, 0, W, H)
			}
		}
		else {
			$l('/')
			if (R()) {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, H, 0, 0).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, H).dr(0, 0, W, H)
				}
			}
			else {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, 0, 0, H).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, H, W, 0).dr(0, 0, W, H)
				}
			}
		}
	}
	w.bg.SHAPE = w.bg.shape(0, 0, 'w')
	w.bg.linGrad('z', 'w')
	w.s = w.stage = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().noAutoClear().tick()
	w.canvas = w.s.canvas
	w.c = w.can = $(w.canvas).id('canvas')
	w.ctx = w.context = w.c.ctx('2d')
	w.hud = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().tick()
	w.hud.h = w.hud.shape().fs($r()).rect(0, 0, 5000, 5000).opacity(.3)
	w.hud.c = $(w.hud.canvas)
	w.s.back = w.bg
	w.s.HUD = w.hud
	return w
}
w.cent = function () {
	var w = this, g = G(arguments),
			v = V(w.s.W() / 2, w.s.H() / 2)
	if (g.p) {
		w.dot(v)
	}
	return v
}
w.show = function (showWhat) {
	var world = this, what
	I(function () {
		what = F(showWhat) ? showWhat(world) : window[showWhat]
		what = F(what) ? what() : what
		world.pen(what)
	}, 200)
	TEST = function () {
		w = b2d.W()
		num = 0
		w.show(function () {
			return num
		})
	}
}
w.chalk = function () {
	this.s.chalk.apply(this.s, arguments)
	return this
}
w.dot = function (col, x, y) {
	var w = this,
			g = G(arguments),
			col = g[0], x = g[1], y = g[2]
	if (g.m) {
		w.dot(col, x, y);
		w.dot(col, x, y, '+')
	}
	if (g.p) {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'b'
		}
		w.hud.dot(col, x, y)
		//w.s.HUD.dot.apply(w.s.HUD, arguments) //interesting.. dotting just needs a stage
	}
	else {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'w'
		}
		w.s.dot(col, x, y)
	}
	return w
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.fadeTitle = function (text) {
	text = text || 'no text provided, yo'
	setTimeout(function () {
		t = w.s.text(text, 50, 'white', 600, 100)
		t.tween([{a: 0, sxy: 0}, 2000])
		setTimeout(function () {
			t.remove()
		}, 1000)
	}, 500)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.C = function (col) {
	var w = this
	w.c.C(col)
	return w
}
w.gridDrawer = function (x, y, len, spa) {
	var w = this
	len = N(len) ? len : 30;
	spa = N(spa) ? spa : 20
	return function (x, y) {
		b.rect(len, len, x * spa, y * spa);
		return b
	}
}
w.GRID = function (gd, x, y, l, spa) {//spacing
	var w = this
	var b = w.D(x, y)
	_.t(_.z(gd), function (rw) {
		_.t(_.z(_.f(gd)), function (c) {
			if (gd[c][rw]) {
				b.rect(l, l, rw * spa, c * spa, 'p');
			}
		})
	})
	return b.K('grid')
}