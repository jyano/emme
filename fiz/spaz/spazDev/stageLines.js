w.line = function (col, x1, y1, x2, y2) {
	var w = this,
			g = G(arguments),
			col = g[0],
			x1 = g[1], y1 = g[2],
			x2 = g[3], y2 = g[4]
	if (g.p) {
		if (!S(col)) {
			y2 = x2;
			x2 = y1;
			y1 = x1;
			x1 = col;
			col = 'b'
		}
		h = w.s.HUD.shape()
		return h.sC(col, 8).mt(x1, y1).lt(x2, y2)
	}
	else if (g.n) {
		if (!S(col)) {
			y2 = x2;
			x2 = y1;
			y1 = x1;
			x1 = col;
			col = 'x'
		}
		return w.s.back.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
	}
	else {
		if (!S(col)) {
			y2 = x2;
			x2 = y1;
			y1 = x1;
			x1 = col;
			col = 'w'
		}
		return w.s.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
	}
}