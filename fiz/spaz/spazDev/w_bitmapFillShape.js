w.bmR = w.bR = w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = S(g.t) ?
	{
		x: g.f, y: g.s, i: g.t, w: g.fo, h: g.fi, c: g.si
	} : {
		x: g.f, y: g.s, w: g.t, h: g.fo, c: g.fi
	}
	b = w.D(o.x, o.y, o.c || 'y', o.w, o.h) // allpha?: b = w._D( o )
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	h.bf(o.i || 'sun');
	h.rec(o.w, o.h);
	b.bS(h);
	return b
}
BODYSHAPE = BSH = function () {
	w = b2d.W()
	w.ball()
	b = w.S(400, 300)
	b.H('o', 50)
	b.H('r', 50, 50)
	b.H('b', 50, 50, 50)
	b.H('g', 50, 50, 50, 50)
	b.H('w', 50, 50, 50, 50, 50)
	b.H('u', [-100, 0], [0, -50], [200, -10])
	b2 = w.D(600, 300).H([
		['o', 50],
		['r', 50, 50],
		['b', 50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])
	b3 = w.D(600, 300).H('y', [
		[50],
		[50, 50],
		[50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])
}
COLORMAZE = MMM = MARIOMAZE = function () {
	W({W: 600, H: 300, g: 0, w: 0}).db().stars(80)
	p = w.p(2.5).XY(220, 70).con('thrust').aD(10000)
	//p.follow(300, 150)
	grid = w.GRID(maze, 100, -100, 14, 40)
	score = 100
	$t(function () {
		
		//grid.aV(.2)
		//w.st.HUD.pen(score)
	})
	//w.b(function (cx) {cx.w('player', 'grid', function() {score--		   })})
	// grid.angDamp(1)
}