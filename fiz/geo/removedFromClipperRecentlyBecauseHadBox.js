v.sub = v.s = function () {
//subtract from one vert?
//subtract from a whole bunch of verts and get back array?
	var v = this, g = G(arguments), o
	o = V(g.f, g.s)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
}
v.add = v.a = function () {
	var v = this, g = G(arguments)
	//if (g.t) {return _.m(g, function (g) {return v.add(g)})}
	var v1 = g.u ? V(1, 1) :
			V(g.f, g.s)
	return V(v.x + v1.x, v.y + v1.y)
}
M.p = b2d.gpcPD = function () {
	var g = G(arguments), p, b, fs, vs
	// if it started off as a gPoly, just return it as is
	if (b2d.iGP(g[0])) {
		return g[0]
	}
	p = new PolyDefault()
	if (b2d.iB(g[0])) {
		fs = g[0].fs()
		vs = fs[0].wV()
		_.eR(fs, function (v) {
			vs = vs.uni(v)
		})
	}
	else {
		vs = b2d.iF(g[0]) ? g[0].wV() :
				g[0]
	}
	p.A(vs)
	return p
}
pD.pts = function (fn) {
	var pD = this, g = G(arguments), o
	o = g.F ? {fn: g.f} :
	{num: g.f, fn: g.s}
	var pts = []
	_.t(pD.nPts(), function (i) {
		var pt = [pD.x(i), pD.y(i)]
		pts.push(pt)
	})
	pts = g.n ? b2d.sub(pts, o.num) :
			g.p ? b2d.add(pts, o.num) :
					pts
	if (o.fn) {
		_.e(pts, o.fn);
		return pD
	}
	return pts
}
pD.U = function () {
	var pD = this, g = G(arguments), uP
	if (b2d.iB(g.f)) {
		uP = pD.U(g[0].f())
		_.eR(g.f.fs(), function (f) {
			uP = pD.U(f)
		})
		return uP
	}
	return pD.union(M.p(g[0]))
	function alt() {
		pD.U = function () {
			var pD = this, g = G(arguments),
					uP
			if (b2d.iB(g[0])) {
				uP = pD.U(g[0].f())
				_.eR(g[0].fs(), function (f) {
					uP = pD.U(f)
				})
				return uP
			}
			return pD.union(M.p(g[0]))
		}
	}
}
$gP$ = function () {
	// = M.p = b2d.gpcPD 
	//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	var g = G(arguments), p, b, fs, pts
	if (b2d.iGP(g.f)) {
		return g.f
	}
	if (b2d.iB(g.f)) {
		pts = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			pts = pts.uni(v)
		})
	}
	else {
		pts = b2d.iF(g.f) ? g.f.wV() : g.f
	}
	return $pD(pts)
}
pD.D = function () {
	var pD = this
	G(arguments).e(function (polOrBod) {
		pD = b2d.iB(polOrBod) ? polOrBod.pDWo(pD) :
				pD.difference(gpc.p(polOrBod))
	})
	return pD
}
bx.add = function (pts, p) {
	return _.m(pts, function (pt) {
		return V(pt).add(p)
	})
}
bx.sub = function (vs, p) { //bx.ptsMinus = bx.vertsMinus =
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
} 