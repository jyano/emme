bH.rad = function (r) {
	var bH = this;
	bH.GR = function () {
		return this.GetRadius()
	}
	bH.SR = function (rad) {
		this.SetRadius(rad);
		return this
	}
	bH.sRad = function (r) {
		var bH = this
		if (bH.ty() == 'c') {
			return bH.SR(r / 30)
		}
		bH.m_radius = r / 30
		return bH
	}
	bH.gRad = function () {
		var bH = this
		return bH.ty() == 'c' ? bH.GR() * 30 :
		bH.m_radius * 30
	}
	return U(r) ? bH.gRad() : bH.sRad(r)
}
bH.ty = function () {
	return b2d.iH(this)
}
//pH = b2d.PolygonShape.prototype
pH._box = function () {
	var pH = this
	pH.SetAsOrientedBox.apply(this, arguments)
	return pH
}
pH.box = function () { // tx uses!
	var pH = this, g = G(arguments),
			o = G.boxBox(g)
	return pH._box(
			o.w / 60,
			o.h / 60,
			V(o.x, o.y, '-'),
			M.tR(o.rt)
	)
}
pH.vs = pH.vertsx = function () {
	alert('pH.vs. see boxShapes.js')
	var pH = this
	return _.m(pH.m_vertices, function (v) {
		return [v.x * 30, v.y * 30]
	})
}
pH.arr = function (v) {
	var p = this
	v = _.m(v, function (v) {
		return V(v).d()
	})
	p.SetAsArray(v, v.length)
	return p
}
pH.setAsVec = function (v, sc) {
	var pH = this //used by SepLib
	pH.SetAsVector(_.m(v, function (v) {
		return V(v).d(N(sc, 30))
	}))
	return pH
}
bH.iP = function () {
	return b2d.iP(this)
}
bH.iC = function () {
	return b2d.iC(this)
}
bH.iA = function () {
	return b2d.iA(this)
}
bH.TP = function () {
	return this.TestPoint.apply(this, arguments)
}
pH.SAB = function (wd, ht) {
	var pH = this
	pH.SetAsBox(wd, ht);
	return pH
}
pH.SAOB = function (wd, ht, pos, ang) {
	this.SetAsOrientedBox(wd, ht, pos, ang)
	return this
}
pH.sAOB = pH.box = function (wd, ht, pos, ang) {

//handles both box and set as box!
//w,h -> centered box
//w,h,xy,ang -> oriented box
//w,h,x,y,ang ->oriented box
	var pH = this, g = G(arguments), o
	//pass in pos as {x,y} ? ..
	o = O(g.t) ?
		// .. -> w,h, posOb, rt
	{w: g.f, h: g.s, pos: g.t, ang: g.fo} :
		//pass in pos as x,y ? ..
			N(g.fo) ?
				// .. ->
			{w: g.f, h: g.s, pos: V(g.t, g.fo), ang: g.fi} :
				// can leave out pos Ob (x and y)
			{w: g.f, h: g.s, ang: g.t}
	//
	o.w = N(o.w, 100) / 60
	o.h = N(o.h, 100) / 60
	//
	o.pos = (o.pos || V()).d()
	//
	o.rt = M.tR(N(o.ang, 0))
	//
	return pH.SAOB(o.w, o.h, o.pos, o.rt)
}
pH.sAB = function (wd, ht, rt) {
	return this.sAOB(wd, ht, V(), N(rt, 0))
}
pH._SAA = function (arr) {
	var pH = this
	arr = arr || []
	pH.SetAsArray(arr, arr.length)
	return pH
}
pH.SAA = function () {
	var g = G(arguments)
	return this._SAA.apply(this, g.A ? g.f : g)
}
pH.sAA = pH.pol = pH.ar = pH.arr = function () {
	bx.tMt = function (x, y) {
		return V(x, y).d()
	}
	var pH = this, g = G(arguments)
	return pH.SAA(
			_.m(g.s ? g : g.f, bx.tMt)
	)
}
pH.set = function () {
	var pH = this, g = G(arguments)
	//this covers all cases for polygons !!!! // ******// !!!!!!!!
	N(g.f) ? pH.sAOB.apply(pH, g) :
			O(g.f) ? pH.sAA.apply(pH, g) :
					pH
}
cH.set = function () {//cH.S =
	var bH = this
	bH.Set.apply(bH, arguments)
	return bH
}
cH.SLP = function () {
	this.SetLocalPosition.apply(this, arguments)
	return this
}
cH.GLP = function () {
	return this.GetLocalPosition()
}
cH.XY = cH.lP = function (x, y) {
	var cH = this;
	return U(x) ? cH.GLP().m() :
			cH.SLP(V(x, y).d())
}
pH.SAV = function () {
	var pH = this
	pH.SetAsVector.apply(pH, arguments)
	return pH
}
pH.sAV = pH.asV = function (v, sc) {
	sc = N(sc, 30)
	var pH = this //used by SepLib
	return pH.SAV(_.m(v, function (v) {
		return V(v).d(sc)
	}))
}
bH.GT = function () {
	return this.GetType()
}
bH.iP = function () {
	return b2d.iP(this)
}
bH.iC = function () {
	return b2d.iC(this)
}
bH.iA = function () {
	return b2d.iA(this)
}
bH.rad = function (r) {
	var bH = this;
	bH.GR = function () {
		return this.GetRadius()
	}
	bH.SR = function (rad) {
		this.SetRadius(rad);
		return this
	}
	bH.sRad = function (r) {
		var bH = this
		if (bH.ty() == 'c') {
			return bH.SR(r / 30)
		}
		bH.m_radius = r / 30
		return bH
	}
	bH.gRad = function () {
		var bH = this
		return bH.ty() == 'c' ? bH.GR() * 30 :
		bH.m_radius * 30
	}
	return U(r) ? bH.gRad() : bH.sRad(r)
}
//shape methods:
bH.TP = function (x, y) {
	return this.TestPoint(x, y)
}
bH.tPt = bH.tP = function (x, y) {
	var bH = this
	alert('bH.tPt tP')
	return bH.TP(x / 30, y / 30)
}
bH.RC = function (fn, p1, p2) {
	return this.RayCast(fn, p1, p2)
}
bH.CAB = function (v1, v2) {
	var bH = this;
	return bH.ComputeAABB()
}
bH.CM = function (mass) {
	var bH = this;
	return bH.ComputeMass()
}
bH.CSA = function () {
	var bH = this
	var area = bH.ComputeSubmergedArea()
	return area
}
bH.C = function () {
	return this.Copy()
}
pH.SAB = function (wd, ht) {
	this.SetAsBox(wd, ht);
	return this
}
pH.SAOB = function (wd, ht, pos, ang) {
	this.SetAsOrientedBox(wd, ht, pos, ang)
	return this
}
pH.sAB = function (args) {
	var pH = this, g = G(arguments), o
	o = O(g.t) ? {w: g.f, h: g.s, x: g.t.x, y: g.t.y, rt: g.fo} :
			N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
					N(g.s) ? {w: g.f, h: g.s, rt: g.t} :
					{rt: g.f}
	o.w = (o.w || 100) / 60
	o.h = (o.h || 100) / 60
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.v = V(o.x, o.y).d()
	o.rt = M.tR(o.rt || 0)
	return o.v ? pH.SAOB(o.w, o.h, o.v, o.rt) :
			pH.SAB(o.w, o.h)
}
pH.box = function () {
	var pH = this, g = G(arguments)
	return pH.sAB.apply(pH, toArgs(g))
	function isArgs(g) {
		return g.A || _.isArguments(g.f)
	}
	
	function toArgs(g) {
		return isArgs(g) ? g.f : g
	}
}
bH.GT = function () {
	return this.GetType()
}
cH.S = function () {
	var bH = this
	bH.Set.apply(bH, arguments)
	return bH
}
cH.GLP = function () {
	return this.GetLocalPosition()
}
cH.SLP = function (vec) {
	this.SetLocalPosition(vec);
	return this
}
cH.XY = function (x, y) {
	if (U(x)) {
		return this.GLP().m()
	}
	var vec = V(x, y).d()
	return this.SLP(vec)
}
pH.SAA = function (arr, arrLen) {
	this.SetAsArray(arr, arrLen)
	return this
}
pH.sAA = function (arr) {
	return this.SAA(arr, arr.length)
}
pH.arr = function () {
	var pH = this, g = G(arguments)
	var pts = g.s ? arguments :
			g.f
	a = arr = _.m(pts, function (pt) {
		var v = V(pt)
		return V(v.x, v.y).d()
	})
	pH.sAA(arr)
	return pH
}
//edge shape:
pH.SAE = function (v1, v2) {
	this.SetAsEdge(v1, v2)
	return this
}
bH.ty = function () {
	return b2d.iH(this)
}