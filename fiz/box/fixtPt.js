f.setKill = function () {
	$l('setKill boxFixt.js')
	var that = this
	var flagNum = Math.random()
	this.B().W().flag(flagNum)
	$t(function () {
		if (w.flagged(flagNum)) {
			that.kill()
		}
	})
}
f.isStat = function () {
	return this.B().isStat()
}
f.isDyn = function () {
	return this.B().isDyn()
}
f.isKin = function () {
	return this.B().isKin()
}
f.bType = function () {
	return this.B().GetType()
}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
f.isBType = f.isType = function (t) {
	if (t) {
		return this.bType() == t
	}
}
f.TP = function () {
	var f = this,
			h = f.H()
	return h.TP.apply(h, arguments)
}
f.vs = f.verts = function () {
	alert('f.vs verts boxFixt.js')
	var h = this.GetShape()
	var verts = h.m_vertices
	return [verts[0].m(), verts[1].m(), verts[2].m(), verts[3].m()]
}
f.rad = function (r) {
	var f = this, h = f.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return f
}
f.tPt = f.tP = function (pt, y) {
	var f = this, g = G(arguments)
	var tf = f.B().tf()
	var pt = N(pt) ? V(pt, y) : pt
	return f.H().TP(tf, pt)
}
f.tf = f.gTf = function (tf) {
	var f = this, b = f.B()
	if (U(tf)) {
		return b.tf()
	}
	b.tf(tf)
	return f
}
f.H = f.shp = f.shape = function (h) {

//should let user specify dimensions of shape, not just have to pass formed shape in
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h // it DOES WORK!  but is this much different than just replacing the fixt?
	return this
}
f.rad = function () {
	return this.shp().m_radius * 30
}
f.hType = function () {
	return this.H().m_type
}
f.iC = f.isCirc = function () {
	return this.hType() == 0
}
f.lV = function () {
	var f = this, b = f.B(), g = G(arguments)
	b.lV.apply(b, g)
	return f
}
f.B = f.body = function () {
	return this.GetBody()
}
f.W = function () {
	return this.B().W()
}
f.rt = f.rot = function (rot, g) {
	return this.B().rot(rot, g)
}
f.de = f.den = f.d = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	this.body().ResetMassData()
	return this
}
f.re = f.rest = f.r = f.bo = function (rest) {
	if (U(rest)) {
		return this.GetRestitution()
	}
	this.SetRestitution(rest);
	return this
}
f.fr = f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.sen = function (s) {
	var f = this
	if (U(s)) {
		return f.IsSensor()
	}
	if (s == '/') {
		s = f.SetSensor(!f.IsSensor())
	}
	else {
		f.SetSensor(s ? true : false)
	}
	return f
	function alt() {
		f.sen = f.sensor = function (sen) {
			var f = this
			if (U(sen)) {
				sen = !f.m_isSensor
			}
			f.m_isSensor = sen
			return this
		}
	}
}
f.isSen = function (isSensor) {
	return this.m_isSensor
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}
f.stat = function () {
	var b = this.B();
	b.stat.apply(b, arguments);
	return this
}
f.GN = f.N = f.next = function () {
	return this.GetNext()
}
f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}
f.stat = function () {
	var b = this.B();
	b.stat.apply(b, arguments);
	return this
}
f.bTy = f.bType = function () {
	return this.B().GetType()
}
f.isBType = f.isType = function (t) {
	var f = this
	if (t) {
		return f.bType() == t
	}
}
f.iS = f.iSt = function () {
	return this.B().iS()
}
f.iD = f.iDy = function () {
	return this.B().iD()
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}
f.iK = function () {
	return this.B().iK()
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}
f.iK = function () {
	return this.B().iK()
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}

f.lV = function () {
	var f = this, b = f.B(), g = G(arguments)
	b.lV.apply(b, g)
	return f
}
f.B = f.body = function () {
	return this.GetBody()
}
f.W = function () {
	return this.B().W()
}
f.rt = f.rot = function (rot, g) {
	return this.B().rot(rot, g)
}
f.de = f.den = f.d = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	this.body().ResetMassData()
	return this
}
f.re = f.rest = f.r = f.bo = function (rest) {
	if (U(rest)) {
		return this.GetRestitution()
	}
	this.SetRestitution(rest);
	return this
}
f.fr = f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.sen = function (s) {
	var f = this
	if (U(s)) {
		return f.IsSensor()
	}
	if (s == '/') {
		s = f.SetSensor(!f.IsSensor())
	}
	else {
		f.SetSensor(s ? true : false)
	}
	return f
	function alt() {
		f.sen = f.sensor = function (sen) {
			var f = this
			if (U(sen)) {
				sen = !f.m_isSensor
			}
			f.m_isSensor = sen
			return this
		}
	}
}
f.isSen = function (isSensor) {
	return this.m_isSensor
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}
f.stat = function () {
	var b = this.B();
	b.stat.apply(b, arguments);
	return this
}
f.GN = f.N = f.next = function () {
	return this.GetNext()
}
f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}
f.stat = function () {
	var b = this.B();
	b.stat.apply(b, arguments);
	return this
}
f.bTy = f.bType = function () {
	return this.B().GetType()
}
f.isBType = f.isType = function (t) {
	var f = this
	if (t) {
		return f.bType() == t
	}
}
f.iS = f.iSt = function () {
	return this.B().iS()
}
f.iD = f.iDy = function () {
	return this.B().iD()
}
f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}
f.cl = f.coll = function (k, fn) {
	var f = this
	//ultimate func for FIXTURE COLL
	// you can specify what happens when a fixture hits:
	//ANYTHING
	// body/fixt of certain kind
	// specific fixt
	// specific body
	//but it its callback ALWAYS passed back the other fixt that was actually hit
	// and 'this' is set to THIS fixt within the cb
	//should cover class AND fixt AND body cases!!!
	if (F(k)) {
		fn = k;
		k = ''
	}
	fn = _.b(fn, f)
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (f.of(fA) && fB.of(k)) {
			fn(fB, cx)
		}
		if (f.of(fB) && fA.of(k)) {
			fn(fA, cx)
		}
	})
	return f
}
f.cl = f.col = f.coll = function (k, fn) {
	var f = this
	//ultimate func for FIXTURE COLL
	// you can specify what happens when a fixture hits:
	//ANYTHING
	// body/fixt of certain kind
	// specific fixt
	// specific body
	//but it its callback ALWAYS passed back the other fixt that was actually hit
	// and 'this' is set to THIS fixt within the cb
	//should cover class AND fixt AND body cases!!!
	if (F(k)) {
		fn = k;
		k = ''
	}
	fn = _.b(fn, f)
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (f.of(fA) && fB.of(k)) {
			fn(fB, cx)
		}
		if (f.of(fB) && fA.of(k)) {
			fn(fA, cx)
		}
	})
	return f
}
f.coll = function (what, func) {
	var that = this, fixt = this, beginFunc //ultimate func for FIXTURE COLL
	// you can specify what happens when a fixture hits:
	//ANYTHING
	// body/fixt of certain kind
	// specific fixt
	// specific body
	//but it its callback ALWAYS passed back the other fixt that was actually hit
	// and 'this' is set to THIS fixt within the cb
	//should cover class AND fixt AND body cases!!!
	if (F(what)) {
		func = what;
		what = ''
	}
	func = _.bind(func, fixt)
	w.beg(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (fixt.is(fA) && fB.of(what)) {
			func(fB, cx)
		}
		if (fixt.is(fB) && fA.of(what)) {
			func(fA, cx)
		}
	})
	return this
}
f.collide = f.cl = function (k, fn) {
	var f = this
	//ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
	if (F(k)) {
		fn = k;
		k = ''
	}
	fn = _.b(fn, f)
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (f.of(fA) && fB.of(k)) {
			fn(fB, cx)
		}
		if (f.of(fB) && fA.of(k)) {
			fn(fA, cx)
		}
	})
	return f
}
_$klass = function () {//o._K = _.wo(o._K, k) //double protection:
	o.rpK_ = function (k, k1) {
		var o = this
		o.K().splice(o.nK(k), 1, k1)
		return o
	}
}
KTX = function () {
	W()
	b = w.A($dB(300, 300))
	f = core = b.f($cF(40)).K('core')
	f1 = b.f($pF(30, 300).mS()).K('arm')
	$l('f is the core fixtuer')
	$l('first the yes"s')
	$l('f.is(f): ' + f.is(f))
	$l('f.has("core"): ' + f.hK('core'))
	$l("f.of('core: ')" + f.of('core'))
	$l("f.is('core: ')" + f.is('core'))
	$l("f.of()" + f.of())
	$l('noos')
	$l("f.is()" + f.is())
	$l('f.is(f1): ' + f.is(f1))
	$l('f.has("arm"): ' + f.hK('arm'))
	$l("f.of('arm: ')" + f.of('arm'))
	$l("f.is('arm: ')" + f.is('arm'))
	core.K('hello neato').K('cooool')
			.K('neato', 'awesome')
	$l('ks: ', core.K())
	function wire() {
		w.b(function (cx) {
			//cx.ks()
			if (cx.w('arm')) {
				b.lV(10, 0);
				w.C($r())
			}
			else if (cx.w('core', 'roof')) {
				b.stat()
			}
		})
		w.roof.K('roof')
	};
	wire()
}
b.fK = function (k) {
	var b = this
	var fx = null
	b.fs(function (f) {
		if (f.has(k)) {
			fx = f
		}
	})
	return fx
}
PROTOSIG = INC = function () {
	W()
	//cx.inc protosig
	//     str    :  str,fn   :   obj   :   obj,fn
	var fisherman1 = w.p()
	w.b(function (cx) {
		cx.ic(fisherman1, function (fish) {
			this.eat(fish.B())
		})
		var oneWasFisherman1 = cx.ic(fisherman1);
		if (oneWasFisherman1) {
			$l('the fish is: ' + Fisherman1[1])
		}
		cx.ic('fish', function (fisherman) {
			this.swimTo(fisherman.B())
		})
		var oneWasFish = cx.ic('fish');
		if (oneWasFish) {
			$l('the fish is: ' + oneWasFish[0])
		}
	})
}//begin
f.cl = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	o = g.F_ ? {fn: g.f, in0: g.s} :
	{k: g.f, fn: g.s, in0: g.t}
	o.k ? w.cl(f, o.k, o.fn, o.in0) :
			w.cl(f, o.fn, o.in0)
	return f
}
f.cl0 = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	o = g.F_ ? {fn: g.f, in0: g.s} :
	{k: g.f, fn: g.s, in0: g.t}
	o.k ? w.ofThese0(f, o.k, o.fn) :
			w.ofThis0(f, o.fn)
	return f
}
f.aK = function (k) {
	var f = this
	f._K = f._K || []
	if (S(k) && !f.of(k)) {
		f._K.push(k)
	}
	return f
}
f._gK = function () {
	var f = this
	f._K = f._K || []
	return f._K.join(' ')
}
f.gK = function () {
	var g = G(arguments), classes
	this.classes = this.classes || []
	classes = this.classes.join(' ')
	if (g.p) {
		classes += ' : ' + this.body().getClasses()
	}
	return classes
}
f.K = function () {
	var f = this, g = G(arguments);
	f._K = f._K || []
	if (g.u) {
		return f.gK()
	}
	if (g.O && g.f.k) {
		f.aK(g.f.k)
	}
	else if (g.S_) {
		_.eW(g.f, function (k) {
			f.aK(k)
		})
	}
	return f
}
f.of = function (k) {
	var f = this, b = f.B();
	//return S(k) ? f.of(k) : (f == k || b == k)
	return f._of(k) || b.of(k)
	/*
	
	 //if (!f) {return false}
	 if (!k) {
	 return true
	 }
	 return f == k || (S(k) && f.has(k)) || b.of(k)
	 */
}
f.ofK = function () {
	var f = this, b = f.B(),
			g = G(arguments)
	return f.hK(g) || b.hK(g)
}
f.is = function (k) {
	var f = this
	//	return S(k) ? f.hK(k) : f == k
	return k && f.of(k)
}
f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
			//w.q is hack
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	return f
}
f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	return f
}
f.AB = function () {
	var ab = this.GetAABB()
	return {
		l: ab.lowerBound.m(),
		u: ab.upperBound.m()
	}
}
f.AB = function () {
	var ab = this.GetAABB()
	return {
		l: ab.lowerBound.m(),
		u: ab.upperBound.m()
	}
}
f.test = f.hit = function (pt, y) {//=f.testPoint= f.tP
	var f = this, b = f.body(), w = b.wor(),
			g = G(arguments), v = V(g[0], g[1]),
			res = f.H().testPoint(b.transform(), v.div())
	if (g.p) {
		b.wor().dot(v)
	}
	return res
}//is a point within the fixture // very accurate}}
f.isStat = function () {
	return this.B().isStat()
}
f.isDyn = function () {
	return this.B().isDyn()
}
f.isKin = function () {
	return this.B().isKin()
}
f.bType = function () {
	return this.B().GetType()
}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
f.isBType = f.isType = function (t) {
	if (t) {
		return this.bType() == t
	}
}
f.AB = function () {
	var ab = this.GetAABB()
	return {
		l: ab.lowerBound.m(),
		u: ab.upperBound.m()
	}
}
f.rC = function () {
	var inp, res
	i = inp = new b2d.Collision.b2RayCastInput(V(0, 0, '-'), V(430, 450, '-'))
	res = this.RayCast(inp)
	return res
}