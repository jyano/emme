$fD = function (h) {
	var g = G(arguments)
	var fD = new b2d.FD()
	if (b2d.iH(h)) {
		fD.shape = h
	}
	if (g.n) {
		fD.isSensor = true
	}
	fD.de(1)
	//if (b2d.isShape(shape)) {f.shape = shape}
	if (O(g.f)) {
		fD.shape = g.f
		if (g.s) {//only cir?
			fD.shape.lP(g.s, g.t)
		}
	}
	return fD
	// = b2d.fD = b2d.f
}
$rH = function () {
	var pH = $pH(), g = G(arguments)
	pH.sAOB.apply(pH, g)
	return pH
}
$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
}
$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)
	var g = G(arguments)
	var bD = new b2d.BD()
	if (g.u) {
		return bD
	}
	var v = V(x, y)
	bD.XY(N(v.x, 0), N(v.y, 0)
	)
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
	function alt() {
		$bD = function (x, y) {
			_$bD = function () {
				return new b2d.BD()
			}
			return U(x) ? _$bD() : _$bD().XY(x, y)
		}
	}
}
$dB = function (x, y) {

//return $bD(x, y).ty(2)
	//aside: interesting that dyn comes after kin
	return $bD(x, y).T(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}

$dBD = $bD  = function (x, y) {

	//= b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
	var v, bD
	v = V(x, y)
	bD = new b2BodyDef()
	bD.XY(N(v.x, 100), N(v.y, 100))
	bD.dyn()
	return bD
}

$sBD  = function (x, y) {
//= b2d.S = b2d.sB = b2d.stat
	return $dBD(x, y).stat()
}
$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)
	var g = G(arguments)
	var bD = new b2d.BD()
	if (g.u) {
		return bD
	}
	var v = V(x, y)
	bD.XY(N(v.x, 0),
			N(v.y, 0)
	)
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
	function alt() {
		$bD = function (x, y) {
			_$bD = function () {
				return new b2d.BD()
			}
			return U(x) ? _$bD() : _$bD().XY(x, y)
		}
	}
} 
$dB = function (x, y) {

//return $bD(x, y).ty(2)
	//aside: interesting that dyn comes after kin
	return $bD(x, y).ty(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
}
 
$rH = function () {
	var pH = $pH(), g = G(arguments)
	pH.sAOB.apply(pH, g)
	return pH
}
$aH = $ar = $arr = function () {
	var g = G(arguments)
	return $pH().arr(g.s ? g : g.f)
}
_$pH = function () {
	return new b2d.PH()
}
$pH = function (W, H, x, y, a) {
	//  OR (wd, ht, xy, ang, ang2)
	var g = G(arguments), o, pH = new b2d.PH()
	if (g.u) {
		return pH
	}
	o = O(g.t) ?
	{w: g.f, h: g.s, xy: g.t, ang: g.fo, ang2: g.fi} :
	{w: g.f, h: g.s, xy: V(g.t, g.fo), ang: g.fi, ang2: g.si}
	o.w = (o.w || 100) / 60
	o.h = (o.h || o.w) / 60
	o.xy = V(o.xy / 30, o.ang / 30)
	o.rt = M.tR(o.ang2 || 0)
	o = o || {}
	return g.OO_ ? $a(pH, 'sAA', g) :
			g.N_ ? //pH.box(g.f, g.s, g.t, g.fo, g.fi) :
					pH.SAOB(o.w, o.h, o.xy, o.rt) :
					pH
	// this is all you need for all cases (thanks to pH.set) 
	// pH.set.apply(pol, g)
}
_$cH = function (r) {
	return new b2d.CH(A(r) ? r[0] : r)
}
$cH = function () {
	
	//r, x, y
	var g = G(arguments)
	var o = {}
	var cH = _$cH(N(g.f, 50) / 30)
	if (g.s) {
		cH.XY(g.s, g.t)
	}
	return cH
	//	if (N(x) && N(y)) {h.XY(x, y)}
	// cH.lP(g.s, g.t)
}
$_rF = function (wd, ht, xy, ang, ang2) {
	var g = G(arguments)
	var f = $fD($pH(wd, ht, xy, ang, ang2))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
_$rF = function () {
	var pH = $pH()
	pH.sAOB.apply(pH, arguments)
	return $fD(pH)
}
$rF1 = function (wd, ht, xy, ang, ang2) {// (wd, ht, x, y, rot) 
	var g = G(arguments), o
	if (O(g.t)) {
		o = {}
	}
	else {
		o = {}
	}
//make a rec (or orientedRec) fixture
	wd = N(g[0]) ? g[0] : 50
	ht = N(g[1]) ? g[1] : 50
	x = N(g[2]) ? g[2] : 0
	y = N(g[3]) ? g[3] : 0
	rot = N(g[4]) ? g[4] : 0
	wd = g.f
	ht = g.s
	xy = g.t
	ang = g.fo
	ang2 = g.fi
	wd = wd || 100
	ht = N(ht) ? ht : wd
	var fD = $fD($pH(wd, ht, xy, ang, ang2))
	var rec = $pH(wd, ht, x, y, rot)
	var fD = $fD(rec)
	if (g.OO_) {
		rec.arr(g)
	}
	//b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
	else {
		o = g.O ? g.f :
		{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
		rec.box(o)
	}
	fD = $fD(rec).d(N(o.d, .5))
	if (g.n) {
		fD.isSensor = true
	}
	return fD
}
$rF = function () {
	var g = G(arguments)
	var f = $fD($rH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pF_ = function (kind) {
	var pF = $pF.apply(null, _.r(arguments))
	pF.sensor(true).K(kind)
	return pF
}
$pF = function (wd, ht, x, y, rt) {
	//makes a fixture using b2d.polyH
	var g = G(arguments)//	return $fD($a($pH, g))
	//SO ONLY ONLY ONLY USE THIS FOR POLYDEFS OF ALL KINDS?
	//but can not pass den? who cares!
	//$fD($pH.apply(null, g))
	var f = $fD($pH(wd, ht, x, y, rt))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pFAlt = function (wd, ht, xy, ang, ang2) {
	var g = G(arguments)
	wd = g[0];
	ht = g[1];
	xy = g[2];
	ang = g[3];
	ang2 = g[4]
	if (A(wd)) {
		return $aF.apply(null, arguments)
	}
	//if(b2d.isShape(wd)){fixt.shape = wd; return shape}
	//you can make a poly
	wd = wd || 100
	ht = N(ht) ? ht : wd
	var f = $fD($pH(wd, ht, xy, ang, ang2)).fr(.2).re(.2)//.de(1)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pSn = $pS = $pSF = function (k) {
	var g = G(arguments)
	var pF = $pF.apply(null, _.r(arguments)).s1()
	pF.K(k || 'polySens')
	return pF
}
$aF = function () {
//but looks like $aF uses $aH to do all the work
	var g = G(arguments)
	return $fD($aH.apply(null, g))
}
$cFAlt = function () { //r,x,y
	var g = G(arguments)
	var cH = $cH(g.f)
	return $fD(cH, g.s, g.t)
}
$cirFAlt = function (rad, x, y, den) {
	var g = G(arguments)
	var o = G.boxCir(g)
	var cH = $cH(o.r, o.x, o.y)
	var fD = $fD(cH, g.o)
	fD.den(o.d)
	return fD
//make a circ fixture
// neg-> sensor
	var g = G(arguments),
			rad = N(g[0]) ? g[0] : 50,
			x = N(g[1]) ? g[1] : 0,
			y = N(g[2]) ? g[2] : 0,
			den = N(den) ? den : 1
	fixt = b2d.fixt(b2d.circH(rad).xy(x, y)).den(den)
	if (g.n) {
		fixt.isSensor = true
	}
	return fixt
	//hmm.. fixt doesnt have a rel loc.. its shape does
	//what if u want to change 'shape' of shape, but keep its rel loc?
}
$cFxxx = function (rad, x, y) {
	var g = G(arguments), f
	rad = g[0];
	x = g[1];
	y = g[2];
	rad = rad || M.r() + .1
	x = N(x) ? x : 0
	y = N(y) ? y : x
	var cir = $cH(rad)
	cir.lP(V(x, y, '-'))
	f = $fD(cir)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$cF = function () {
	var g = G(arguments)
	var cH = $cH(g.f, g.s, g.t)
	var f = $fD(cH)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
//we didn't mention it with $aF, but $cF and $aF rely on $fD
// fD can be passed a real shape
// and can be set to sensor with '-'
/*

 SetAsOrientedBox(
 hx:Number,  hy:Number, (width and height of the box)
 center:b2Vec2 = null, (center of box)
 angle:Number = 0.0 (rot in rads)
 )

 Applying this concept, the idol function continues in the following way:
 var bW:Number=5/worldScale;
 var bH:Number=20/worldScale;
 var boxPos:b2Vec2=new b2Vec2(0,10/worldScale);
 var boxAngle:Number=- Math.PI/4;


 */
$sqF = function () {
	var g = G(arguments)
	var f = $fD($sqH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$cHx = function (r, x, y) {
	r = N(r) ? r : 50
	var h = new b2d.CircleShape(r / 30)
	if (N(x) && N(y)) {
		h.XY(x, y)
	}
	return h
}

$rH = $bH = function (a, b, c, d, e) {
	return $pH().box(a, b, c, d, e)
}
$sqH = function () {
	var g = G(arguments)
	var o = N(g.t) ?
	{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
	{sz: g.f, rt: g.s}
	o.sz = o.sz || 50
	return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
}
$pHx = _$pHx = function () {
	var g = G(arguments)
	var p = new b2d.PolygonShape()
	p.sAB.apply(p, arguments)
	return p
}
$aH = function () {
	var g = G(arguments)
	var aH = $pH()
	aH.arr.apply(aH, g)
	return aH
}

//if you want to understand oriented boxes, understand this:
G.rectangle = G.boxBox = function (g) {
	var o = g.O ? g.f : O(g.t) ?
	{w: g.f, h: g.s, x: V(g.t).x, y: V(g.t).y, rt: g.fo} :
			N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
			{w: g.f, h: g.s, rt: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.rt = N(o.rt, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
b2d.pol = function () {
	return b2d.fD($a(b2d.pH, arguments))
			.d(1).fr(.2).r(.2)
}
b2d.rec = function () {
	var g = G(arguments), r, fD, o, v, p = b2d.pH()
	if (g.OO_) {
		p.arr(g)
	}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
	else {
		o = g.O ? g.f :
		{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
		p.box(o)
	}
	fD = b2d.fD(p).d(N(o.d, .5))
	if (g.n) {
		fD.isSensor = true
	}
	return fD
	/*
	 //will set cols unless you pass in 0
	 if(o.c==0){o.c=null}
	 if(o.c==00){o.c=null;o.C=null}
	 if(o.c=='*'){o.c=$r()}
	 if(o.c=='**'){o.c=$r();o.C=$r()}
	 o.c =o.c||'z'
	 o.C =o.C||'w'
	 o.l = _.tN(o.l,4)
	 o.c1 = o.c1||'z'
	 o.c2 = o.c2||'w'
	 o.s1= _.tN(o.s1)
	 o.s2= _.tN(o.s2,1)
	 //
	 o.x1 = _.tN(o.x1)
	 o.y1 = _.tN(o.y1)
	 o.x2 =_.tN(o.x2);
	 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
	 o.r1=_.tN(o.r1)
	 o.r2=_.tN(o.r2,200)
	 // o.i image
	 //o.k kind
	 // o.p  layer position
	
	
	 //o.bm//o.bM
	 //o.g gradient
	
	 //o.m mass
	 //o.t type
	 // o.v = o.v || [] //verts
	 //o.X
	 //o.z clr
	 */
}
$bi = $XYR = function () {
	var b = w.sB(545, 595)
	return b.A(b2d.cFD(150).DBF())
}

$pHxxx = b2d.pHxxx = function (W, H, x, y, a) {
	
	//makes a fixtDef with a polyShape
	//| 50,200[[,200,60,45
	//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)
	var g = G(arguments)
	var pH = new b2d.PH()
	if (g.N_) {
		pH.box(g.f, g.s, g.t, g.fo, g.fi)
	}
	else if (g.OO_) {
		$a(pH, 'arr', g)
	}
	return pH
}
$rec = $pFD = $pF = function (wd, ht, x, y, rt) {
	var rec = $pH(wd, ht, x, y, rt)
	var fD = $fD(rec)
	return fD
}
 