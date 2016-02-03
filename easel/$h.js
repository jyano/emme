$Sh = $H = $h = function () {
	var g = G(arguments), h = new cjs.Shape(),
	//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
			o = g.O ? g.f :
					g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
					{x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
						// 'c-C-l' pattern
							N(g.s) ? {C: g.f, l: g.s} :
							{c: g.f, C: g.s, l: g.t}
	_h = h
	h.XY(N(o.x, 0), N(o.y, 0))
	h.c(o.c || 'z', o.C || 'w', o.l || 8)
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	if (g.p) {
		h.dg()
	}
	
	h.gx = h.graphics
	
	
	return h
}