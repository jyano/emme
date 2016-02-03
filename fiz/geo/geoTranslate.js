f.pos = f.cirPos = function () {
	var f = this
	var h = f.H()
	var posPt = h.m_p
	return V(posPt.x, posPt.y).mult()
	function docs() {
		// for circs
	}
}
b.pos = function () {
	return this.tf().position.m()
}
b.reg = b.rel = function (p) {
	var b = this
	var pts = gpc.iP(p) ? p.pts() : p
	return _.m(pts, function (v) {
		v = V(v)
		return V(v.x - b.X(), v.y - b.Y())
	})
	function docs() {
		//my poly operations can only work with POSITIVE vertices
		//but box2d needs fixt vertices specified relative to a body
		//so this allows the body that the operation was based on to take responsibility
		//for converting them back
		//you can pass in the verts, or the gPoly itself!
		//this returns [V,V,V...]
	}
}
pD.tlNeg = pD.from = pD.cameFrom = pD.reg = pD.rel = function (x, y) {// = pD.reg
	return $gP(b2d.sub(this.pts(), V(x, y)))
	// pD.tl2 = pD.translate =   pD.from = pD.cameFrom =pD.translateBackTo =pD.rel =
	//you can pass in the verts, // or the gPoly itself! //what about a f?
}
pD.tl = function (x, y) {
	return $gP(b2d.add(this.pts(), V(x, y)))
}
pD.butHere = pD.to = pD.at = pD.ger = function (x, y) {
	return this.reg(-V(x, y).x, -V(x, y).y)
}
pD.maybeTl = pD.maybeHere = function (xy) {
	return xy ? this.tl(xy) : this
}
//my poly operations can only work with POSITIVE vertices
//but box2d needs fixt vertices specified relative to a body
//so this allows the body that the operation was based on to take responsibility
//for converting them back
//you can pass in the verts, or the gPoly itself!
b.toPositivePoints = b.mapToGPoly = b.reg = b.rel = function (p) {
	var b = this
	var vs = gpc.iP(p) ? p.vs() : p
	return _.m(vs, function (v) {
		v = V(v);
		return V(v.x - b.X(), v.y - b.Y())
	})
	//this returns [V,V,V...]
}
b.rel = function (gPoly) {
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var verts = b2d.isGPoly(gPoly) ? gPoly.verts() : gPoly
	return _.m(verts,
			function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			})
}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
b.pos = function () {
	return this.tf().position.m()
} //used in MEET
pD.reg = pD.rel = function (b) {
	var p = this, g = G(arguments),
			vs = p.vs(), b, o
	//you can pass in the verts,
	// or the gPoly itself!
	//what about a f?
	o = V(g[0], g[1])
	vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	})
	return M.p(vs)
}
pD.tl_possibleAlt = function () {
//pD.tl:
//=pD.tlAdd = pD.butHere = pD.to = pD.at = pD.ger =
	pD.ger = function (x, y) {
		var pD = this
		var v = V(x, y);
		pD = pD.reg(-v.x, -v.y)
		return pD
	}
}