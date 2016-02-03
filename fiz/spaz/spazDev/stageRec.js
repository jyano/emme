w.dr = function (c, x, y, W, h) {
	var w = this, g = G(arguments), o
	o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
			: {x: g[0], y: g[1], w: g[2], h: g[3]}
	_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
			g.n ? {g: w.bg, c: o.c || 'r'} :
			{g: w.hud, c: o.c || 'b'})
	o.g.h().rec(o)
}
w.dr = function (c, x, y, W, h) {
	var w = this, g = G(arguments), o
	o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
			: {x: g[0], y: g[1], w: g[2], h: g[3]}
	_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
			g.n ? {g: w.bg, c: o.c || 'r'} :
			{g: w.hud, c: o.c || 'b'})
	o.g.h().rec(o)
}
w.dr = function (col, x, y, W, h) {
	var w = this,
			g = G(arguments),
			col = g[0], x = g[1], y = g[2], W = g[3], h = g[4]
	if (g.p) {
		if (!S(col)) {
			h = W;
			W = y;
			y = x;
			x = col;
			col = 'b'
		}
		w.s.HUD.shape().fs(col).rect(x, y, W, h)
	}
	else if (g.n) {
		if (!S(col)) {
			h = W;
			W = y;
			y = x;
			x = col;
			col = 'r'
		}
		w.s.back.shape().fs(col).rect(x, y, W, h)
	}
	else {
		if (!S(col)) {
			h = W;
			W = y;
			y = x;
			x = col;
			col = 'w'
		}
		w.s.shape().fs(col).rect(x, y, W, h)
	}
}
w.dr = function (c, x, y, W, h) {
	var w = this, g = G(arguments), o
	o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
			: {x: g[0], y: g[1], w: g[2], h: g[3]}
	_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
			g.n ? {g: w.bg, c: o.c || 'r'} :
			{g: w.hud, c: o.c || 'b'})
	o.g.h().rec(o)
}