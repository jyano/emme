 

h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
	var args = _.toArray(arguments), circs, len
	cols = _.map(cols,
			function (col) {
				return oO('c', col)
			})
	circs = _.rest([1, 2, 3, 4, 5], 2)
	len = circs.len  //use switch!
	x1 = 0;
	y1 = 0;
	r1 = 0;
	x2 = 0;
	y2 = 0;
	r2 = 50
	if (len == 1) {
		r2 = circs[0]
	}
	else if (len == 2) {
		r1 = circs[0];
		r2 = circs[1]
	}
	else if (len == 3) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r2 = circs[2]
	}
	else if (len == 4) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r1 = circs[2]
		r2 = circs[3]
	}
	else if (len == 5) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r2 = circs[4]
	}
	else if (len == 6) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r1 = circs[4];
		r2 = circs[5]
	}
	this.graphics.bRGF(cols, ratios, x1, y1, r1, x2, y2, r2)
	return this
}


h.rg = function (o) {var h = this, g = G(arguments), gx = h.graphics, o
	if (A(g.f) && A(g.s)) {
		gx.rf(
				[
					oO('c', g.f[0]),
					oO('c', g.s[1])
				],
				
				g.s, g.t, g.fo, g.fi, g.si, g.se, g.ei
		)
		
		return h
	}
	
	
	o = O(g.f) ? g.f : S(g.s) ?
	
			_.x(
			
					{c1: g.f, c2: g.s},
					
					N(g[7]) ?
					{x1: g.t, y1: g.fo, r1: g.fi, x2: g.si, y2: g.se, r2: g.ei} :
					 N(g.si) ?
					{x2: g.t, y2: g.fo, r1: g.fi, r2: g.si} : N(g.fi) ?
					{x2: g.t, r1: g.fo, r2: g.fi} : N(g.fo) ?
					{r1: g.t, r2: g.fo} :
					{r2: g.t}
			) :
			
			 
			
			S(g.f) ? {c2: g.f} : {}
					
					
	$df.grad(o)
	o.x2 = N(o.x2, o.x1)
	o.y2 = N(o.y2, o.y1)
	o.r1 = N(o.r1, 1);
	o.r2 = N(o.r2, 100)
	return o
}
 


h.rf = function me() {
	var h = this, gx = h.graphics, g = G(arguments), o
	if (A(g.f)) {
		return me.apply(h, g.f)
	}
	
	o = h.rg.apply(h, g)
	gx.rf(
			[o.c1, o.c2],
			[o.s1, o.s2],
			o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
	return h
}