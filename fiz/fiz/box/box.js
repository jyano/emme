b.GWC = function () {
	return this.GetWorldCenter()
}
b.ap = function (met, g) {
	var b = this;
	return b[met].apply(b, g)
}
b.GW = b.W = b.wor = b.world = function () {
	return this.GetWorld()
}
b.GN = b.N = b.next = b.gN = function () {
	return this.GetNext()
}
b.fR = b.sFR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.fR1 = b.fixRot = function () {
	return this.fixedRot(true)
}
b.fR0 = b.FR = function () {
	return this.fixedRot(false)
}
b.fixedRot = b.sFR = b.fR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.SFR = function (fR) {
	this.SetFixedRotation(fR)
	return this
}
b.IFR = function () {
	return this.IsFixedRotation()
}
b.tf = b.transform = function (tf) {
	var b = this
	if (U(tf)) {
		return b.GetTransform()
	}
	b.SetTransform(tf)
	return b
}
b.rt = function (angle) {
	var g = G(arguments),
			ang = g[0],
			newAng,
			currAng = Math.toDegrees(this.GetAngle())
	if (U(ang)) {
		return currAng
	}
	if (g.p) {
		newAng = currAng + ang
	}
	else if (g.n) {
		newAng = currAng - ang
	}
	else if (g.m) {
		newAng = currAng * ang
	}
	else if (g.d) {
		newAng = currAng / ang
	}
	else {
		newAng = ang
	}
	this.SetAngle(Math.toRadians(newAng))
	return this
}
b.XY = function (x, y) {
	var newPos
	if (x === '*') {
		x = Math.random() * 10
	}
	if (y === '*') {
		y = Math.random() * 10
	}
	if (U(x)) {
		var pos = this.GetPosition()
		return pos.mult()
	}
	y = N(y) ? y : x
	newPos = V(x / 30, y / 30)
	this.SetPosition(newPos)
	return this
}
b.X = function (x) {
	var g = G(arguments), pos = this.XY()
	if (U(x = g[0])) {
		return pos.x
	}
	this.XY($.update(pos.x, x, g), pos.y)
	return this
}
b.Y = function (y) {
	var g = G(arguments), pos = this.XY()
	if (U(y = g[0])) {
		return pos.y
	}
	this.XY(pos.x, $.update(pos.y, y, g))
	return this
}
b.rt = b.rot = function (angle, ms) {
	var b = this, g = G(arguments), r = g[0], ms = g[1],
			a = Math.toDegrees(b.GetAngle()) //currAng
	if (U(r)) {
		return a
	}
	if (N(ms)) {
		b.stop = I(function () {
			b.rot(r, '+')
		}, ms)
	}
	else {
		b.SetAngle(M.toRadians(g.p ? a + r : g.n ? a - r : g.m ? a * r : g.d ? a / r : r))
	}
	return b
}
b.X = function (x) {
	var g = G(arguments),
			pos = this.XY()
	if (U(x = g.f)) {
		return pos.x
	}
	this.XY(
			_.upd(pos.x, x, g), pos.y
	)
	return this
	function alt() {
		b.X = function (x) {
			var g = G(arguments), pos = this.XY()
			if (U(x = g[0])) {
				return pos.x
			}
			this.XY($.update(pos.x, x, g), pos.y)
			return this
		}
	}
}
b.Y = function (y) {
	function alt() {
		b.Y = function (y) {
			var g = G(arguments), pos = this.XY()
			if (U(y = g[0])) {
				return pos.y
			}
			this.XY(pos.x, $.update(pos.y, y, g))
			return this
		}
	}
	
	var b = this,
			g = G(arguments),
			pos = b.XY()
	if (g.u) {
		return pos.y
	}
	this.XY(pos.x,
			_.upd(pos.y, y, g))
	return this
}
b.XY = function (x, y) {
	function alt() {
		b.XY = function (x, y) {
			var newPos
			if (x === '*') {
				x = Math.random() * 10
			}
			if (y === '*') {
				y = Math.random() * 10
			}
			if (U(x)) {
				var pos = this.GetPosition()
				return pos.mult()
			} //used to parseInt.. necessary?
			y = N(y) ? y : x
			newPos = V(x / 30, y / 30)
			this.SetPosition(newPos)
			return this
		}
	}
	
	var b = this, g = G(arguments),
			newPos, pos
	if (x === '*') {
		x = R(10)
	}
	if (y === '*') {
		y = R(10)
	}
	if (g.u) {
		pos = b.GetPosition()
		return pos.m().tF(0)
	} //used to parseInt.. necessary?
	if (b2d.iB(x)) {
		y = x.Y()
		x = x.X()
	}
	y = N(y) ? y : x
	newPos = V(x / 30, y / 30)
	this.SetPosition(newPos)
	return this
}
b.GP = function () {
	return this.GetPosition()
}
b.SP = function (ps) {
	this.SetPosition(ps);
	return this
}
b.STf = function (tf) {
	this.SetTransform(tf);
	return this
}
b.GTf = function (tf) {
	return this.GetTransform()
}
b.SA = function (ang) {
	this.SetAngle(ang);
	return this
}
b.GA = function () {
	return this.GetAngle()
}
b.SPAA = function () {
	this.SetPositionAndAngle.apply(this, arguments)
	return this
}
b.wC = function () {
	return this.GWC().m()
}
b.GLC = b.GLcC = function () {
	return this.GetLocalCenter()
}
b.GWC = function () {
	return this.GetWorldCenter()
}
b.wC = function () {
	var b = this,
			w = b.W(),
			g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetWorldCenter().m()
	function alt() {
	}
}
b.wCent = b.wC = b.cent = function () {
	var b = this, w = b.wor()
	var g = G(arguments)
	if (g.P) {
		return b.GetWorldCenter().mult()
	}    //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	b.XY(
			w.W() / 2, w.H() / 2
	)
	return b
	function alt() {
		b.worldCenter = function () {
			return this.GetWorldCenter()
		} //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	}
}
b.GCxL = function () {
	return this.GetContactList()
}
b.GCoL = function () {
	return this.GetControllerList()
}
b.GJL = function () {
	return this.GetJointList()
}
b.M = function () {
	return this.Merge.apply(this, arguments) || this
}
b.S = function () {
	return this.Split.apply(this, arguments) || this
}
b.GMD = function () {
	return this.GetMassData()
}
b.SMD = function (mD) {
	this.SetMassData(mD);
	return this
}
b.RMD = function () {
	this.ResetMassData();
	return this
}
b.GM = function () {
	return this.GetMass()
}
b.GLVFLP = b.GlVLP = function () {
	return this.GetLinearVelocityFromLocalPoint.apply(this, arguments)
}
b.GLVFWP = function () {
	return this.GetLinearVelocityFromWorldPoint.apply(this, arguments)
}
b.wV = b.worldVec = function (v, y) {
	if (N(v) && N(y)) {
		v = V(v, y)
	}
	if (U(v)) {
		v = V(0, -100)
	}
	return this.GetWorldVector(v)
}
b.GLV2 = function () {
	return this.GetLocalVector()
}
b.GWV2 = function () {
	return this.GetWorldVector()
}
b.wPt = b.wPoint = b.worldPoint = b.wP = function (x, y) {
	return this.GetWorldPoint(V(x, y).div()).mult()
}
b.GLP = function () {
	return this.GetLocalPoint.apply(this, arguments)
}
b.GWP = b.GWPt = function () {
	return this.GetWorldPoint.apply(this, arguments)
}
b.isBu = function () {
}
LCXPT = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
b.SB = function (bu) {
	this.SetBullet(bu);
	return this
}
b.IB = function () {
	return this.IsBullet()
}
b.SAw = function (sA) {
	this.SetAwake(sA);
	return this
}//return  _.set(b, 'SetAwake', sA)
b.IAw = function () {
	return this.IsAwake()
}
b.SSA = function (sA) {
	this.SetSleepingAllowed(sA);
	return this
}
b.ISA = function () {
	return this.IsSleepingAllowed()
}
b.SAc = function (ac) {
	this.SetActive(ac);
	return this
}
b.IAc = function () {
	return this.IsActive()
}
b.awake = function () {
	var g = G(arguments)
	this.SetAwake(g.n ? false : true)
	return this
}
b.aw1 = b.wake = b.wakeUp = function () {
	this.SetAwake(true);
	return this
}
b.aw0 = b.sleep = function () {
	this.SetAwake(false);
	return this
}
b.GM = function () {
	return this.GetMass()
}
b._m = function () {
	var n = 1
	this.fs(function (f) {
		$l('#' + (n++) + ' mass: ' + f.mass())
	})
}
b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf = function (k) {
//	$l('b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf =')
	var b = this
	return b.of(k) ? b.K('ds destroy') : b
}
b.ds = function () {
	var b = this
	b.W().DB(b)
	return b
} //= b.destroy
b.ty = b.type = function (a) {
	var b = this
	if (U(a)) {
		return b.GetType()
	}
	b.SetType(a)
	return b
}
b.GT = function () {
	return this.GetType()
}
b.ST = function (ty) {
	this.SetType(ty)
	return this
}
b.iD = b.isDyn = function () {
	return this.GetType() == 2
}
b.dyn = function (resumeVel) {
	var b = this
	b.type(2)
	if (resumeVel == b && O(b._linVel)) {
		b.lV(b._linVel)
	}
	b._linVel = null
	return b
	function alt() {
		b.dyn = function (resumeVel) {
			this.type(2)
			if (resumeVel == true && O(this._linVel)) {
				this.linVel(this._linVel)
			}
			this._linVel = null
			return this
		}
	}
}
b.stat = function () {
	var b = this,
			v = b.lV()
//huh??? oh can get/set type of body
	b._linVel = V(v.x, v.y)
	b.type(0)
	return b
	function alt() {
		b.stat = function () {
			var v = this.linVel()
//huh??? oh can get/set type of body
			this._linVel = V(v.x, v.y)
			this.type(0)
			return this
		}
	}
}
b.iS = b.isStat = function () {
	return this.GetType() == 0
}
function kinem() {
	$kB = $bD1 = function (x, y) {
		return $bD(x, y).ty(1)
	}
	w.K = function () {
		return this.B.apply(this, arguments).kin()
	}
	function kin() {
		bD.kin = function () {
			return this.T(1)
		}
		bD.kin = function () {
			return this.T(1)
		}
	}
	
	b.iK = b.isKin = function () {
		return this.GetType() == 1
	}
	b.kin = function () {
		return this.type(1)
	}
	$kBD = b2d.kD = function (x, y) {
		return $dBD(x, y).T(1)
	}
	b2d.kin = b2d.kinematic = KinematicBodyDef = kBD = function (x, y) {
		return b2d.bodyDef(x, y).T(1)
	}
	$kB = $kBD = b2d.kD = function (x, y) {
		return $bD(x, y).T(1)
	}
	w.kin = function (x, y, fixtDef) {
		var body
		if (O(x)) {
			fixtDef = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		body = this.A(b2d.kin(x, y), fixtDef)
		return body
	}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
	w.K = w.kin = function (x, y, fD) {
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500;
		y = N(y) ? y : 250
		return w.A($kB(x, y), fD)
	}
	w.vertsKin = function (x, y, arrs) {
		var bod = this.kin(x, y)
		_.each(arrs, function (arr) {
			bod.convex(arr[0], _.rest(arr))
		})
		return bod
	}
	w.sB = function (x, y) {
		return this.cB($sBD(x, y))
	}
	w.kB = function (x, y) {
		return this.cB($kBD(x, y))
	}
	w.kB = function (x, y) {
		return this.CB($kB(x, y))
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
}
b.XX = b.destroy = b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	_.each(this.fixts(), function (f) {
		f.removeSprites()
		//if(f.sprite){f.sprite.remove()}
	})
	this.sprite = null
	this.SetActive(false)
	this.wor().DestroyBody(this)
}//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}
b.kill = b.xx = b.destroy = function () {
	var b = this, w = b.W()
	b.SetActive(false)
	if (w._preKill) {
		w._preKill(b)
	}
	b.W().DestroyBody(b)
	return b.pos()
}
b.destroySpaz = b.kill = b.rm = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.ds()
}
b.destroyFixt = b.destroyFixture = function (f) {
	this.DestroyFixture(f)
	return this
}
b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.destroy()
}
b.destroy = function () {
	this.W().DestroyBody(this)
}
b.setDestroy = function () {
	return this.K('destroy')
}
b.setDestroyIf = function (data) {
	if (this.is(data)) {
		this.setDestroy()
	}
}
//function kill() {
w.DB = w.DBo = w.DBd = function (b) {
	this.DestroyBody(b);
	return this
}
w.DB = function (a) {
	this.DestroyBody(a);
	return this
}
w.rmB = w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
	var w = this
	if (U(b)) {
		w.e(function (b) {
			w.rmB(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
b.rF = function () {
	// = b.$rF = b.rH
	return this.CF($rF.apply(null, arguments))
	//var rH = $rH.apply(null, arguments)
	//return this.fD(rH)
}
b.cF = function () {//=b.cCF
	var aF = $cF.apply(null, arguments)
	return this.CF(aF)
}
b.aF = function () {
	//= b.cAF
	var aF = $aF.apply(null, arguments)
	return this.CF(aF)
}
///////////////////
b._rad = function (n) {
	if (U(n)) {
		return this.shp().m_radius * 30
	}
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) {
		h.SetRadius(n / 30)
	}
}
b.rad = function (r) {
	var b = this, h = b.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return b
}
b.hit = function (x, y, dot) {
	var b = this,
			w = b.W(),
			g = G(arguments), hit = false
	if (g.p) {
		w.dot(x, y)
	}
	b.fs(function (f) {
		if (f.hit(x, y)) {
			hit = true
		}
	})
	return hit
	function alt() {
		b.hit = function (x, y, dot) {
			var hit
			if (dot == true) {
				this.wor().dot(x, y)
			}
			this.eachFixt(function (f) {
				if (f.hit(x, y)) {
					hit = true
				}
			})
			return hit
		}
	}
}
b.rect = function () {
	return this.f($rF.apply(null, arguments))
}
b.aAF = function () {
	var aF = $aF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.aCF = function () {
	var aF = $cF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.cir = function (r) {
	return this.f($fD($cH(r)))
}
b.arrF = function () {
	return this.f($aF.apply(null, arguments))
}
b.cFx = b.circ = function () {
	var cF = $cF.apply(null, arguments)
	return this.f(cF)
}
b.A = function (fD) {
	this.CF(fD);
	return this
}
$L('sens', 'dfr', 'shapes')
b.fs = b.e = b.eF = function (fn) {
	var b = this
	var arr = []
	var f = b.f()
	while (f) {
		arr.push(f)
		f = f.N()
	}
	if (fn) {
		_.e(arr, function (it) {
			fn(it, fn)
		});
		return b
	}
	return arr
}
b.DF = b.dsFx = function (fixt) {
	this.DestroyFixture(fixt)
	return this
}
b.empty = b.clear = function () {
	return this.fs(function (f) {
		f.kill()
	})
}
b.rmF = function (f) {
	if (f) {
		this.DF(f)
	}
	else {
		this.fs(function (f) {
			this.rmF(f)
		})
	}
	return this
}
b.grp = function (i) {
	f = this.fixt()
	if (U(i)) {
		return f.grp()
	}
	f.grp(i);
	$l('set to ' + i)
	return this
}
b.onAddFxt = function () {
	this.rMD()
	return this
}
b2d.fxPar = $$$cirORpoly$$$ = function (fxs, fn) {
	var b = this
	//if its not an array,, assume is fine, and leave it as is
	fxs = _.m(fxs, function (f) {
		return !A(f) ? f :
				f.length == 1 || f.length == 3 ?
						$cF.apply(null, f) :
						$pF.apply(null, f)
	})
	// fn = _.b(fn, b) ?
	if (fn) {
		_.e(fxs, fn);
		return b
	}
	return fxs
	//if (f.isSensor) {return b2d.polySens.apply(null, f)}
}
b.fxPar = function (f) {
// so how does that work??
// the array len determines if it is to make 
// a circle fxt ($cF) or rect fixt $pF
	var b = this
	b2d.fxPar(f, function (fD) {
		b.f(fD)
	})
	return b
}
b.fD = b.fxD = b.$fD = function (fD) {
//return this.CF( $fD(fD) )
	return this.CF($fD.apply(null, arguments))
}
b.GFL = function () {
	return this.GetFixtureList()
}
b.n = b.num = b.count = function () {
	return this.m_fixtureCount
}
b.fs = function (fn) {
	var b = this, g = G(arguments),
			fl = b.f(), fn = g.f, arr = []
	while (fl) {
		arr.push(fl);
		fl = fl.GetNext()
	}
	if (N(fn)) {
		return arr[fn]
	}
	if (F(fn)) {
		_.e(arr, fn);
		return b
	}
	if (b2d.iB(fn)) {
		b.fs(function (f) {
			fn.pol(f)
		})
		return fn
	}
	return arr
	/*
	 if (g.p) {//order by biggest
	 arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
	 if (g.n) {//order by smallest
	 arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
	 */
	function alt() {
		b.fixts = b.each = b.eachFixt = function (func) {
			var fl = this.fixt(), arr = [],
					g = G(arguments), func = g[0]
			while (fl) {
				arr.push(fl);
				fl = fl.GetNext()
			}
			//order by biggest
			if (g.p) {
				arr = arr.sort(function (a, b) {
					return b.area() - a.area()
				})
			}
			//order by smallest
			if (g.n) {
				arr = arr.sort(function (a, b) {
					return a.area() - b.area()
				})
			}
			if (F(func)) {
				_.each(arr, func);
				return this
			}
			return arr
		}
	}
	
	// = b.e
}
b.CF = function () {//b.CF = b.CreateFixture
	return this.CreateFixture.apply(this, arguments)
}
b.CF_ = function () {//b.CF = b.CreateFixture
	this.CreateFixture.apply(this, arguments)
	return this
}
b.CF2 = function () {
	return this.CreateFixture2.apply(this, arguments)
}
b.dsF = b.dF = b.DF = b.DFx = function (f) {
	this.DestroyFixture(f);
	return this
}
b.GFL = b.GFxL = function () {
	return this.GetFixtureList()
}
function sens() {
	b.togSen = function () {
		return this.sensor(!this.sensor())
	}
	b.sen = b.iS = function (s) {
		var b = this
		var f = b.f()
		if (U(isSensor)) {
			return f.m_isSensor
		}
		b.fs(function (f) {
			f.sen(s)
		})
		return b
	}
	b.s1 = b.sens = function () {//turns on
		this.f().sensor(true);
		return this
	}
	b.sr1 = b.s1 = b.mS = function () {
		return this.sSr(1)
	}
	b.sSr = function (sr) {
		var b = this
		b.fs(function (f) {
			f.sr(sr)
		})
		return b
	}
	b.sr = b.sens = function (sr) {
		var b = this
		if (U(sr)) {
			return b.f().iSr()
		}
		b.sSr(sr)
		return b
	}
}
function dfr() {
	b.de = function (den) {
		if (U(den)) {
			return this.list().GetDensity()
		}
		this.each(function (f) {
			f.SetDensity(den)
		})
		this.ResetMassData()
		return this
	}
	b.fr = function (fric) {
		if (U(fric)) {
			return this.list().GetFriction()
		}
		this.each(function (f) {
			f.SetFriction(fric)
		})
		return this
	}
	b.re = function (rest) {
		if (U(rest)) {
			return this.list().GetRestitution()
		}
		this.each(function (f) {
			f.SetRestitution(rest)
		})
		return this
	}
	b.DFR = b.DFB = function (d, f, r) {
		return this.den(d).fric(f).rest(r)
	}
	b.DBF = function (d, r, f) {
		var b = this
		b.den(d)
		if (N(r)) {
			this.rest(r)
		}
		if (N(f)) {
			b.fric(f)
		}
		return b
		function alt() {
			b.DBF = function (d, r, f) {
				var b = this
				b.den(d)
				if (N(r)) {
					this.rest(r)
				}
				if (N(f)) {
					b.fric(f)
				}
				return b
			}
		}
	}
	b.fr = b.fric = function (fr) {
		var b = this
		if (U(fr)) {
			return b.f().GetFriction()
		}
		b.fs(function (f) {
			f.SetFriction(fr)
		})
		return b
		function alt() {
			b.fric = function (fric) {
				if (U(fric)) {
					return this.list().GetFriction()
				}
				this.each(function (f) {
					f.SetFriction(fric)
				})
				return this
			}
		}
	}
	b.de = b.d = b.den = function (d) {
		var b = this
		if (U(d)) {
			return b.f().GetDensity()
		}
		b.fs(function (f) {
			f.SetDensity(d)
		})
		b.ResetMassData()
		return b
		function alt() {
			b.den = function (den) {
				if (U(den)) {
					return this.list().GetDensity()
				}
				this.each(function (f) {
					f.SetDensity(den)
				})
				this.ResetMassData()
				return this
			}
		}
	}
	b.re = b.r = b.bo = b.rest = function (r) {
		function alt() {
			b.bo = b.rest = function (rest) {
				if (U(rest)) {
					return this.list().GetRestitution()
				}
				this.each(function (f) {
					f.SetRestitution(rest)
				})
				return this
			}
		}
		
		var b = this
		if (U(r)) {
			return b.f().GetRestitution()
		}
		b.fs(function (f) {
			f.SetRestitution(r)
		})
		return b
	}
	b.de = b.den = function (de) {
		var b = this//$l('b.de boxBody.js')
		if (U(de)) {
			return b.f().de()
		}
		b.e(function (f) {
			f.SetDensity(de)
		})
		return this.RMD()
	}
	b.de1 = function () {
		return this.de(1)
	}
	b.fr = b.fric = function (fr) {
		var b = this
		return D(fr) ?
				b.fs(function (f) {
					f.SetFriction(fr)
				}) :
				b.list().GetFriction()
	}
	b.re = b.rest = function (re) {
		var b = this
		return D(re) ? b.fs(function (f) {
			f.re(re)
		}) :
				b.f() ? b.f().GetRestitution() : false
	}
}
b.f = function (fD) {//b.createFixture = b.cF = b.fixt1 = b.shape =
	var b = this, f;
	if (U(fD)) {
		return this.GetFixtureList()
	}
	// can pass a CODED array of fixts (will get parsed)
	if (A(fD)) {
		_.each(b2d.fixtParse(fD),
				function (fd) {
					b.fixt(fd)
				})
		return b
	}
	if (!b2d.isFixtDef(fD)) {
		fD = b2d.fixt.apply(b2d, arguments)
	}
	//create the fixt
	f = this.CreateFixture(fD)
	//assign it classes specified in the fixt def
	if (A(fD.classes)) {
		_.each(fD.classes,
				function (clas) {
					f.K(clas)
				})
	}
	return f
	//= b.fixt = b.list
}
b.f = function (fD) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GFL()
	}
	if (g.A_) {
		_.e(b2d.fxPar(g.f), function (fD) {
			b.f(fD)
		})
		return b
	}
	var f = b.CF(g.f)
	if (g.f.K()) {
		f.K(g.f.K())
	}
	return f
}
b.GP = function () {
	var b = this
	var wPts = b.wPts()
	return M.poly(wPts)
}
b.lGP = function () {
	var b = this
	var lPts = this.pts()
	return Math.poly(lPts)
}
b.PD = b.pD = function () {
	//b.P =
	var b = this, p,
			fs = b.fs()
	if (!_.f(fs)) {
		return new PolyDefault()
	}
	p = M.p(_.f(fs))
	_.eR(fs, function (f) {
		p = p.U(f)
	})
	return p//p.reg(b)
	//this returns a gPoly
}
b.pD = function () {
	var b = this, f = b.f(), g = G(arguments), pD = $pD()
	if (!f) {
		return pD
	}
	// if the body has no freqkin fixts.. 
	// if its an infant body , massless? fixtureless
	pD = M.p(f)
	_.eR(b.fs(), function (f) {
		pD = pD.U(f)
	})
	return pD
}
b.polDefault = b.polDef = b.bolDf = b.pD = b.P = function () {
	var b = this, p, fs = b.fs()
	if (!_.f(fs)) {
		return new PolyDefault()
	}
	p = M.p(_.f(fs))
	_.eR(fs, function (f) {
		p = p.U(f)
	})
	return p//p.reg(b)
	//this returns a gPoly
}
b.ps = function (fn) {
	alert('b.ps sucks')
	var b = this,
			arr = [],
			p = b.uni()
	if (F(fn)) {
		p.ps(b, fn);
		return b
	}
	p.ps(b, function (v) {
		arr.push(v)
	})
	return arr
}
b.each = b.eachFixt = function (func) {
	var fl = this.GetFixtureList()
	var withList = function self(list, func) {
		func(list)
		list = list.GetNext()
		if (list) {
			return self(list, func)
		}
	}
	withList(fl, func)
}
b.worldVec = function (vec, y) {
	if (N(vec) && N(y)) {
		vec = V(vec, y)
	}
	if (U(vec)) {
		vec = V(0, -100)
	}
	return this.GetWorldVector(vec)
}
b.count = function () {
	return this.m_fixtureCount
}
bodyDef()
function bodyDef(){
	bD.Set = function () {
// actual sig: bD.position.Set(x, y)
		var bD = this
		bD.position.Set.apply(bD.position, arguments)
		return bD
	}
	bD.GXY = bD.GP = function () {
		return this.position
	}
	bD.SP = function (x, y) {
		this.position = V(x, y)
		return this
	}
	bD.SXY = function (x, y) {
		var v = V(x, y)
		return this.Set(v.x, v.y)
	}
	bD.GX = function () {
		return this.GP().x
	}
	bD.GY = function () {
		return this.GP().y
	}
	bD._X = bD.SX = function (x) {
		return this.SXY(x, this.GY())
	}
	bD._Y = bD.SY = function (y) {
		return this.SXY(this.GX(), y)
	}
	bD.gXY = bD.gP = function () {
		return this.GP().m()
	}
	bD.gX = function () {
		return this.gXY().x
	}
	bD.gY = function () {
		return this.gXY().y
	}
	bD.sXY = bD.set = function (x, y) {
		var v = V(x, y).d()
		this.Set(v.x, v.y)
		return this
	}
	bD.sX = function (x) {
		return this.sXY(x, this.gY())
	}
	bD.sY = function (y) {
		return this.sXY(this.gX(), y)
	}
	bD.X = function (x) {
		return U(x) ? this.gX() :
				this.sX(x)
	}
	bD.Y = function (y) {
		return U(y) ? this.gY() :
				this.sY(y)
	}
	bD.XY = bD.p = bD.ps = bD.xy = function () {
		var bD = this, g = G(arguments)
		return g.u ? bD.gXY() : bD.sXY(g.f, g.s)
//if (x === '*') {x = M.r() * 10 * 60}
//if (y === '*') {y = M.r() * 10 * 60}
//if(O(x)){this.position=x;return this}
	}
	bD.A = bD.ang = bD.Ang = function (an) {
		var bD = this
		bD.GA = function () {
			return this.angle
		}
		bD.SA = function (an) {
			this.angle = an;
			return this
		}
		return U(an) ? this.GA() : this.SA(an)
	}
	bD.rt = bD.rot = function (rt) {
		//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
		return U(rt) ? M.toD(this.Ang()) : this.Ang(M.toR(rt))
	}
	bD.STy = function (ty) {
		this.type = ty;
		return this
	}
	bD.ty = function (ty) {
		return U(ty) ? this.type : this.STy(ty)
	}
	bD.dyn = function () {
		return this.T(2)
	}
	bD.stat = function () {
		return this.T(0)
	}
	bD.kin = function () {
		return this.T(1)
	}
	bD.ty = bD.T = bD.typ = bD.kind = function (type) {
		if (U(type)) {
			return this.type
		}
		this.type = type
		return this
	}
	bD.stat = function () {
		return this.T(0)
	}
	bD.dyn = function () {
		return this.T(2)
	}
	bD.T = bD.typ = bD.kind = function (type) {
		if (U(type)) {
			return this.type
		}
		this.type = type
		return this
	}
	bD.lV = function (lV) {
		bD.SLV = function (lV) {
			this.linearVelocity = lV;
			return this
		}
		var bD = this
		return U(lV) ? this.linearVelocity : this.SLV(lV)
		function alt() {
			bD.lV = function (vel) {
				if (U(vel)) {
					return this.linearVelocity
				}
				this.linearVelocity = vel;
				return this
			}
		}
	}
	bD.aV = function (vel) {
		var bD = this
		bD.SAV = function (aV) {
			this.angularVelocity = aV;
			return this
		}
		return U(vel) ? this.angularVelocity : this.SAV(vel)
		function alt() {
			bD.aV = function (vel) {
				if (U(a)) {
					return this.angularVelocity
				}
				this.angularVelocity = vel
				return this
			}
		}
	}
	bD.SAc = function (ac) {
		this.active = ac;
		return this
	}
	bD.ac = function (ac) {
		return this.SAc(ac ? true : false)
	}
	bD.a1 = bD.mA = function () {
		return this.ac(1)
	}
	bD.a0 = function () {
		return this.ac(0)
	}
	bD.act = bD.setActive = function (isActive) {
		this.active = isActive ? true : false
		return this
	}
	bD.inertia = function (inertia) {
		if (U(inertia)) {
			return this.insertiaScale
		}
		this.insertiaScale = inertia;
		return this
	}
	bD.sleepy = bD.aS = function (canSleep) {
		this.allowSleep = canSleep ? true : false
		return this
	}
	bD.act = bD.setActive = function (isActive) {
		this.active = isActive ? true : false
		return this
	}
	bD.lD = function (lD) {
		var bD = this
		bD.SLD = function (lD) {
			this.linearDamping = lD;
			return this
		}
		return U(lD) ? this.linearDamping : this.SLD(lD)
		function alt() {
			bD.lD = function (dm) {
				var bD = this
				if (U(dm)) {
					return bD.linearDamping
				}
				bD.linearDamping = dm
				return bD
			}
		}
	}
	bD.aD = function (aD) {
		var bD = this
		bD.SAD = function (aD) {
			this.angularDamping = aD;
			return this
		}
		return U(aD) ? this.angularDamping : this.SAD(aD)
		function alt() {
			bD.aD = function (damp) {
				if (U(damp)) {
					return this.angularDamping
				}
				this.angularDamping = damp;
				return this
			}
		}
	}
	bD.bul = bD.bull = bD.fR = function (iBu) {
		var bD = this
		if (U(iBu)) {
			return bD.bullet
		}
		bD.bullet = iBu;
		return bD
	}
	bD.SB = function () {
		this.bullet = isBul;
		return this
	}
	bD.bul = bD.bull = function (isBul) {
		return U(isBul) ? this.bullet : this.SB(isBul ? true : false)
	}
	bD.b1 = bD.mB = function () {
		return this.bul(1)
	}
	bD.b0 = function () {
		return this.bul(0)
	}
	bD.bul = bD.bull = function (isBul) {
		//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body
		if (U(isBul)) {
			return this.bullet
		}
		this.bullet = isBul;
		return this
	}
	$bulBD = function (x, y) {
		var bD = $dB(x, y)
		bD.bullet = true
		bD
	}
	bD.sl = bD.aSl = function (aS) {
		return this.ASl(aS ? true : false)
	}
	bD.s1 = bD.dS = bD.dAS = bD.mAS = function () {
		return this.sl(1)
	}
	bD.s0 = function () {
		return this.sl(0)
	}
	bD.ASl = function (aS) {
		var bD = this;
		bD.allowSleep = aS;
		return bD
	}
	bD.sleepy = bD.aS = function (canSleep) {
		this.allowSleep = canSleep ? true : false
		return this
	}
	bD.GFR = function () {
		return this.fixedRotation
	}
	bD.SFR = function (fR) {
		this.fixedRotation = fR
		return this
	}
	bD.fR = bD.FR = bD.fixedRot = function (fR) {
		return U(fR) ? this.GFR() : this.SFR(fR ? true : false)
		bD.fixedRotAlt = bD.fRalt = function (isFixed) {
			if (U(isFixed)) {
				return this.fixedRotation
			}
			this.fixedRotation = isFixed;
			return this
		}
	}
	bD.fR1 = bD.r0 = bD.nRt = bD.mFR = function (rt) {
		if (N(rt)) {
			this.rt(rt)
		}
		return this.fR(1)
	}
	bD.fR0 = bD.r1 = function (rt) {
		if (N(rt)) {
			this.rt(rt)
		}
		return this.fR(0)
	}
	bD.inertia = function (ine) {
		if (U(ine)) {
			return this.insertiaScale
		}
		this.insertiaScale = ine
		return this
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
fD.fr = fD.fric = fD.f = function (fr) {
	if (U(fr)) {
		return this.friction
	}
	this.friction = fr
	return this
}
fD.fr = fD.f = fD.frc = function (f) {
	var fD = this
	if (U(f)) {
		return this.friction
	}
	fD.friction = f
	return fD
	function alt() {
		fD.frc = fD.fric = fD.f = function (fric) {
			if (U(fric)) {
				return this.friction
			}
			this.friction = fric;
			return this
		}
	}
}
fD.polA = function (verts) {
	this.arr.apply(this, verts)
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
$rH = function () {
	var pH = $pH(), g = G(arguments)
	pH.sAOB.apply(pH, g)
	return pH
}
$eF = function (a, b, c, d) {
	var f = $fD()
	f.shape = $eH(a, b, c, d)
	return f
}
function _edge() {
	w.edgAr = function () {
		var w = this,
				g = G(arguments),
				X = 0,
				Y = 0,
				x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
		_.e(g, function (e) {
			e = w.edgD(e[0], e[1], e[2], e[3])
			w.wed(e, x, V(g[0][0], g[0][1]))
		})
		return x
	}
	w.edgD = function (x1, y1, x2, y2) {
		var w = this,
				l = w.l(x1, y1, x2, y2),
				e = w.D(0, 0, b2d.edg(x1, y1, x2, y2)).d(1)
		e.bS(l) //bS2
		return e
	}
	w.edgs = function () {
		var w = this, g = G(arguments), X = 0, Y = 0, x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]), x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
		if (A(g[0])) {
			//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
			//  w.weld(x,b)
			// X=g[0][0]
			// Y=g[0][1]
		}
		_.e(g, function (e) {
			if (A(e)) {
				e = w.edgD.apply(w, e)
			}
			w.wed(e, x)
		})//  w.weld(x2  , x)
		w.dot(300, 300)
		return x2
	}
	w.edgsD = function (ar) {
		var w = this
		ar = ar || [V(), V(100, 100)]
		i = V(ar.shift())
		i2 = V(ar.shift())
		w.edg(i.x, i.y, i2.x, i2.y)
		_.e(ar, function (v) {
			i = i2
			i2 = V(v)
			w.edg(i.x, i.y, i2.x, i2.y)
		})
	}
	w.edg = function (x1, y1, x2, y2) {
		var w = this
		// you would always want a single stat?
		w.l(x1, y1, x2, y2, '-')
		return w.S(0, 0, b2d.edg(x1, y1, x2, y2))
	}
	w.edgs = function (ar) {
		var w = this, e
		ar = ar || []
		i = V(ar.shift())
		i2 = V(ar.shift())
		e = w.edg(i.x, i.y, i2.x, i2.y)
		_.e(ar, function (v) {
			i = i2
			i2 = V(v)
			e.glu(w.edg(i.x, i.y, i2.x, i2.y))
		})
	}
	b2d.edg = function (x1, y1, x2, y2) {
		var fd = b2d.pol()
		fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
		return fd
	}
}
w.edgAr = function () {
	var w = this,
			g = G(arguments),
			X = 0,
			Y = 0,
			x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
	_.e(g, function (e) {
		e = w.edgD(e[0], e[1], e[2], e[3])
		w.wed(e, x, V(g[0][0], g[0][1]))
	})
	return x
}
w.edgD = function (x1, y1, x2, y2) {
	var w = this,
			l = w.l(x1, y1, x2, y2),
			e = w.D(0, 0, b2d.edg(x1, y1, x2, y2)).d(1)
	e.bS(l) //bS2
	return e
}
w.edgs = function () {
	var w = this, g = G(arguments), X = 0, Y = 0, x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]), x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
	if (A(g[0])) {
		//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
		//  w.weld(x,b)
		// X=g[0][0]
		// Y=g[0][1]
	}
	_.e(g, function (e) {
		if (A(e)) {
			e = w.edgD.apply(w, e)
		}
		w.wed(e, x)
	})//  w.weld(x2  , x)
	w.dot(300, 300)
	return x2
}
w.edgsD = function (ar) {
	var w = this
	ar = ar || [V(), V(100, 100)]
	i = V(ar.shift())
	i2 = V(ar.shift())
	w.edg(i.x, i.y, i2.x, i2.y)
	_.e(ar, function (v) {
		i = i2
		i2 = V(v)
		w.edg(i.x, i.y, i2.x, i2.y)
	})
}
w.edg = function (x1, y1, x2, y2) {
	var w = this
	// you would always want a single stat?
	w.l(x1, y1, x2, y2, '-')
	return w.S(0, 0, b2d.edg(x1, y1, x2, y2))
}
w.edgs = function (ar) {
	var w = this, e
	ar = ar || []
	i = V(ar.shift())
	i2 = V(ar.shift())
	e = w.edg(i.x, i.y, i2.x, i2.y)
	_.e(ar, function (v) {
		i = i2
		i2 = V(v)
		e.glu(w.edg(i.x, i.y, i2.x, i2.y))
	})
}
b2d.edg = function (x1, y1, x2, y2) {
	var fd = b2d.pol()
	fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
	return fd
}
function edges() {
	b2d.edge = function (x1, y1, x2, y2) {
		var fd = b2d.poly()
		fd.shape.SetAsEdge(V(x1, y1).div(), V(x2, y2).div())
		return fd
	}
	w = b2d.World.prototype
	w.edgeChain = function () {
		var w = this,
				g = G(arguments),
				X = 0,
				Y = 0,
				x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]),
				x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
		if (A(g[0])) {
			
			//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
			//  w.weld(x,b)
			// X=g[0][0]
			// Y=g[0][1]
		}
		_.each(g, function (e) {
			if (A(e)) {
				e = w.edgeD.apply(w, e)
			}
			w.weld(e, x)
		})
		//  w.weld(x2  , x)
		w.dot(300, 300)
		return x2
	}
	w.edge = function (x1, y1, x2, y2) {
		var w = this, e
		// you would always want a single stat?
		w.line(x1, y1, x2, y2)
		e = w.S(0, 0, b2d.edge(x1, y1, x2, y2))
		return e
	}
	w.edgeD = function (x1, y1, x2, y2) {
		var w = this, l, e
		l = w.line(x1, y1, x2, y2)
		e = w.D(0, 0, b2d.edge(x1, y1, x2, y2)).den(1)
		e.bindSprite2(l)
		return e
	}
	w.edges = function (ptArr) {
		var w = this, e
		ptArr = ptArr || []
		i = V(ptArr.shift())
		i2 = V(ptArr.shift())
		e = w.edge(i.x, i.y, i2.x, i2.y)
		_.each(ptArr, function (v) {
			i = i2
			i2 = V(v)
			e.glue(
					w.edge(i.x, i.y, i2.x, i2.y)
			)
		})
	}
	w.edgesD = function (ptArr) {
		var w = this
		ptArr = ptArr || []
		i = V(ptArr.shift())
		i2 = V(ptArr.shift())
		w.edge(i.x, i.y, i2.x, i2.y)
		_.each(ptArr, function (v) {
			i = i2
			i2 = V(v)
			w.edge(i.x, i.y, i2.x, i2.y)
		})
	}
	w.edgeArr = function () {
		var w = this,
				g = G(arguments),
				X = 0,
				Y = 0,
				x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
		_.each(g, function (e) {
			e = w.edgeD(e[0], e[1], e[2], e[3])
			w.weld(e, x, V(g[0][0], g[0][1]))
		})
		return x
	}
	w.sTW = w.sToW = w.gTL = function (x, y) { //works
		var w = this,
				x = x / w.z - w.s.x / w.z,
				y = y / w.z - w.s.y / w.z
		//w.dot(x,y,'*') // cool
		return {x: x, y: y}
	}
	w.wTS = w.wToS = w.lTG = function (x, y) {//also works!
		var w = this,
				x = (x + w.s.x / w.z) * w.z,
				y = (y + w.s.y / w.z) * w.z
		//w.dot(x,y,'*') // cool
		return {x: x, y: y}
	}
// https://developer.chrome.com/devtools/docs/workspaces !!!!!
}
function more() {
	//edge shape:
	pH.SAE = function (v1, v2) {
		this.SetAsEdge(v1, v2)
		return this
	}
	$eH = function (x1, y1, x2, y2) {
		return _$pH().SAE(V(x1, y1, '-'), V(x2, y2, '-'))
	}
	SAE = function () {
		W().p()
		w.eg(100, 500, 1000, 0)
		w.eg(50, 50, 100, 500)
		w.eg(0, 0, 1000, 100)
		w.cirB(410, 100, 2)
		_.in(4, function () {
			w.eg(100, 100, 500, 300)
			w.eg(100, 200, 500, 400)
			w.eg(100, 300, 500, 500)
			w.eg(1000, 100, 600, 300)
			w.eg(1000, 200, 600, 400)
			w.eg(1000, 300, 600, 500)
			w.cirB(410, 100)
		})
	}
	moreEdge = function () {
		EDE = function () {
			W()
			v1 = V(0, 0)
			v2 = V(40, 0)
			eH = $eH()
			eH.Set(v1, v2)
		}
		GHOST = GHO = function () {
// / // This an edge shape with ghost vertices.
			eH = $eH()
			eH.Set(v1 = V(30, 8), v2 = V(0, 0));
			eH.m_hasVertex0 = true;
			eH.m_hasVertex3 = true;
			eH.m_vertex0 = v0 = V(40, 0);
			eH.m_vertex3 = v3 = V(40, 14);
		}
//chain:
		CHAIN = CHA = function () {
			vs = [V(30, 0), V(50, 10), V(0, 0), V(-30, 80)]
			chain = $chH()
			chain.CreateChain(vs, 4);
		}
		GHOSTVERTS = GHV = function () {
// // Install ghost vertices
			chain = $chH();
			chain.SetPrevVertex(V(90, 30));
			chain.SetNextVertex(V(-60, 0))
		}
		LOOP = function () {// You may also create loops automatically.
//
// // Create a loop. The first and last vertices are connected.
//
			chain = $chainH();
			chain.CreateLoop(vs, 4);
			// Self-intersection of chain shapes is not supported.
// It might work, it might not.
// The code that prevents ghost collisions assumes there are no self-intersections
// of the chain.
// Each edge in the chain is treated as a child shape and can be accessed by index.
//
// // Visit each child edge.
//
			for (i = 0; i < chain.GetChildCount(); ++i) {
				eH = $eH();
				chain.GetChildEdge(eH, i)
			}
		}
	}
}
function edgePairs() {//b2ControllerEdge "A controller edge is used to connect bodies and controllers together in a bipartite graph.";
	b2d.CE = b2d.CoE = b2d.ControllerEdge = b2d.Cos.b2ControllerEdge
// In graph theory, 
// a bipartite graph (or bigraph)
// is a SIMPLE graph 
// whose vertices can be divided 
// into two disjoint sets  (X,Y)  ~ G = (X,Y, E)
// and
// (that is, and are each independent sets)
// such that
// every edge connects a vertex in to one in .
// ( every edge is between a vertex in X and a vertex in Y
// Vertex set and are often denoted as partite sets.
	cE = b2d.CE.prototype
	cE.co = cE.Co = cE.C = function () {
		return this.controller
	}
	cE.pC = function () {
		return this.prevController
	}
	cE.nC = function () {
		return this.nextController
	}
	cE.pB = function () {
		return this.prevBody
	}
	cE.nB = function () {
		return this.nextBody
	}
	cE.b = cE.B = function () {
		return this.body
	}
}
b.H = b.h = function (arg) {
	var b = this, g = G(arguments), arg = g[0],
			len = length(g)
	if (g.u) {
		return b.f() && b.f().H() // return b
	}
	//passing a single array, suggest MULTIPLE fixts
	//[f1,f2,..]
	if (A(g[0]) && U(g[1])) {
		_.each(g[0], function (a) {
			b.H.apply(b, a)
		})
	}
	
	
	//[col,[f1,f2,..]]
	else if (S(g[0]) && A(g[1]) && U(g[2])) {
		_.each(g[1], function (f) {
			if (b2d.isFixtDef(f)) {
				b.fixt(f).C(g[0])
			}
			else {
				if (!S(f[0])) {
					f = _.map(f, function (a) {
						return a
					})
					//*** ?
					f.unshift(g[0])
				}
				if (b2d.isFixtDef(f[1])) {
					b.fixt(f[1]).C(f[0])
				}
				else {
					b.H.apply(b, f)
				}
			}
		})
	}
	//fixtDef
	else if (b2d.isFixtDef(g[0])) {
		b.fixt(g[0])
	}
	//['color', fixtDef]
	else if (S(g[0]) && b2d.isFixtDef(g[1])) {
		b.fixt(g[1]).C(g[0])
	}
	
	//verts
	else if (O(g[1])) {
		if (g.n) {
			g.push('-')
		}
		b.conc(g)
		//b.convex(g)
	}
	
	//circ
	else if (len == 1 || len == 3) {
		if (g.n) {
			g.push('-')
		}
		b.CIRC.apply(b, g)
	}
	
	//rect
	else {
		if (g.n) {
			g.push('-')
		}
		b.RECT.apply(b, g)
	}
	function length(arr) {
		var len = arr.length
		if (S(arr[0])) {
			len--
		}
		if (S(_.last(arr))) {
			len--
		}
		return len
	}
	
	return b
}
b._colorize = function (c) {
	if (c) {
		this.C(c === '*' ? $r() : c)
	}
	return this
}
w.fixts = function (x, y, f) {
	var w = this
	f = b2d.fixts[f]
	return w.B(x, y, f)
}
w.cleanup = function () {
	w.e(function (b) {
		if (!b.IsActive) {
		}
	})
}
// is body.Isactive??
v.tA = function () {
	return [this.x, this.y]
}
b2d.tA = function (vs) {
	return _.m(vs, function (v) {
		return v.tA(v)
	})
}
V0 = function (x, y) {
	if (O(x)) {
		return V0(V(x).x, V(x).y)
	}
	return {x: N0(x), y: N0(y)}
}
b2d.AB = function (x1, y1, x2, y2) {
	var ab = new b2d.Collision.b2AABB()
	ab.lowerBound.Set(x1 / 30, y1 / 30)
	ab.upperBound.Set(x2 / 30, y2 / 30)
	return ab
	function alt() {
		b2d.AABB = function (a, b, c, d) {//this is the one that works!
			var aabb = new b2AABB()
			aabb.lowerBound.Set(a, b)
			aabb.upperBound.Set(c, d)
			return aabb
		}
	}
}
$AB = $aB = b2d.AB = AABB = AB = function (a, b, c, d) {
	var ab = new b2d.AABB() // ??
	ab.lowerBound.Set(a, b)
	ab.upperBound.Set(c, d)
	return ab
	function alt() {
		$AB = b2d.AB = function () {
			var g = G(arguments), ab = new b2d.Collision.b2AABB
			if (g.p) {
				ab.lUB(g.f, g.s, g.t, g.f)
			}
			else if (U(g.t)) {
				ab.pt(g.f, g.s)
			}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
			else {
				ab.lUB(g.f, g.s, g.t, g.fo, '-')
			}
			return ab
		}
		$AB = b2d.AB = function () {
			var g = G(arguments), ab = new b2d.Collision.b2AABB
			if (g.p) {
				ab.lUB(g.f, g.s, g.t, g.f)
			}
			else if (U(g.t)) {
				ab.pt(g.f, g.s)
			}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
			else {
				ab.lUB(g.f, g.s, g.t, g.fo, '-')
			}
			return ab
		}
		AABB = AB = function (a, b, c, d) {
			var ab = new b2AABB()
			ab.lowerBound.Set(a, b)
			ab.upperBound.Set(c, d)
			return ab
		}//b2d.AB =
	}//get rectangle by two coords
}
AB001 = b2d.AB0001 = b2d.AB0001 = function (a, b) {
	return $aB(a - .001, b - .001, a + .001, b + .001)
	function alt() {
		AB001 = function (a, b) {
			return AB(a - .001, b - .001, a + .001, b + .001)
		}
	}
}
b2d.AABB01 = function (x, y) {//now used div
	var v = V(x, y).div(),
			x = v.x,
			y = v.y
	return this.AABB(x - .001, y - .001, x + .001, y + .001)
}
b2d.tf = function (v1, v2, v3) {
	if (U(v1)) {
		return new b2d.Math.b2Transform()
	}
	if (A(v1)) {
		return b2d.tf(
				V(v1[0], v1[1]),
				V(v1[2], v1[3]),
				V(v1[4], v1[5]))
	}
	var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
	return tf
}
b2d.M.b2Transform.prototype.toArr = function () {
	var tf = this
	var pos = tf.position,
			R = tf.R,
			col1 = R.col1,
			col2 = R.col2
	return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
}
TREC = function () {
	W()
	b = w.CreateBody($bD(300, 400))
	//b.rec('r', 100,400, 400,200,33)
	b.f(30, 40, 20)
	b.f(30, 40) //nothing??
	// b.f([[20, 165, -50, -50, 45]])
	//b.f(20, 165, -50, -50, 45)
	w.D(300, 300, 'r', [[200, 20], [20, 165, -50, -50, 45], [20, 165, 50, -50, -45]])
}
function debug() {
	w.DDD = function () {
		this.DrawDebugData();
		return this
	}
	w.SDD = function (dD) {
		this.SetDebugDraw(dD);
		return this
	}
	function bug() {
		debugDraw = new b2DebugDraw();
		debugDraw.SetSprite(document.getElementById("playground").getContext("2d"));
		debugDraw.SetDrawScale(20.0);
		debugDraw.SetFillAlpha(0.5);
		debugDraw.SetLineThickness(1.0);
		debugDraw.SetFlags(b2DebugDraw.e_shapeBit);
		w.SetDebugDraw(debugDraw);
	}
	
	w.bug = function (id) {
		var can, ctx
		can = id ? $("#" + id)[0] : $0("#canvas")
		ctx = can.getContext("2d")
		return this.SDD(
				$dD().ctx(ctx).sc(20).fAl(0.5).lT(1).SF(bx.DD.hBit))
	}
	function moreBug() {
		w.dD = w.dbD = w.bug = function () {
			var dbD = $dD.apply($dD, arguments)
			// this.scale = dd.scale()
			return this.SDD(dbD)
		}
		w.sDD = w.db = w.debug = function (d) {
			var w = this;
			return U(d) ? w.ggAuCl() :
					d === w ? w.auCl(0) :
							d === false ? w.auCl(1) :
									w.SDD(d)
//p.debugDraw  =p.dD= p.sDD=
		}
		w.dd = function (o) {
			var w = this
			if (o.clear !== false) {
				w.debug(b2d.debugDraw(
						w.context, 30).flags(shB || jB).alpha(.6).line(3000))
			} // w.bug(w.ctx, 30, '*', .6 )
			return w
		}
		w.db = w.debug = function (data) {
			
			//p.debugDraw  =p.dD= p.sDD=
			if (U(data)) {
				this.s.autoClear = this.s.autoClear ? false : true;
				return this
			}
			if (data === true) {
				this.s.autoClear = false;
				return this
			}
			if (data === false) {
				this.s.autoClear = true;
				return this
			}
			this.SDD(data)
			return this
		}
	}
	
	bx.DD = b2DebugDraw = bx.D.b2DebugDraw
	bx.DD.hBit = b2d.DD.e_shapeBit
	dD.SS = dD.ctx = function (ctx) {
		var dD = this  //it is looking for  a context?
		if (U(ctx)) {
			return dD.GetSprite()
		}
		dD.SetSprite(ctx)
		return dD
		//dD.cx = dD.spr = dD.i = dD.sprite = 
	}
	dD.SDS = function (sc) {
		this.SetDrawScale(sc)
		return this
	}
	dD.sc = function (sc) {
		var dD = this
		if (U(sc)) {
			return dD.GetDrawScale()
		}
		dD.SDS(sc)
		return dD
		// = dD.dS = dD.scale = dD.drawScale
	}
	dD.SA = dD.al = dD.alpha = dD.fA = function (al) {
		var dD = this
		if (U(al)) {
			return this.GetAlpha()
		}
		this.SetAlpha(al)
		return this
//Get/SetAlpha(al:N)    used for lines
	}
	dD.SFA = dD.fA = dD.fAl = function (a) {
		var dD = this
		if (U(a)) {
			return dD.GetFillAlpha()
		}
		dD.SetFillAlpha(a)
		return dD
		//= dD.alpha = dD.fillAlpha
	}
	dD.SLT = dD.lT = function (lt) {
		var dD = this
		if (U(lt)) {
			return dD.GetLineThickness()
		}
		dD.SetLineThickness(lt);
		return dD
		// = dD.line
	}
	dD.SF = dD.fl = function (fl) {
		var dD = this
		var DD = b2DebugDraw
		if (U(fl)) {
			return dD.GetFlags()
		}
		if (flags == '*') {
			flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
		}
		dD.SetFlags(flags);
		return dD
		//dD.flags = dD.F =
	}
	dD.SF = function () {
		this.SetFlags.apply(this, arguments)
		return this
	}
	dD.cv = function (cv) {
		cv = cv || $.c()
		return this.ctx($(cv)[0].getContext("2d"))
	}
	$dD = function (sp, sc) {

// = b2d.debugDraw
		//=DebugDraw=dbD
		var dD = new b2d.DD()
		if (sp) {
			dD.sp(sp);
		}
		if (N(sc)) {
			dD.sc(sc)
		}
		return dD
	}
	$dDAlt = function () {
		$dD = function () {
			var g = G(arguments), o, dbD = new b2DebugDraw()
			var DD = b2DebugDraw
			//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
			var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
			o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
			if ($.iC(o.cx)) {
				o.cx = $(o.cx).ctx()
			}
			o.sc = N(o.sc, 30)
			o.fl = o.fl || flags
			o.l = N(o.l, 20)
			o.al = N(o.al, .95)
			if (o.cx) {
				dbD.sprite(o.cx)
			}
			if (o.sc) {
				dbD.scale(o.sc)
			}
			dbD.flags(o.fl)
			dbD.alpha(N(o.al, 0.5))
			return _dbD = dbD
			function alt() {
				b2d.debugDraw = function (sprite, scale, flags, alpha, line) {
					var dd = new b2d.DebugDraw()
					//can pass in either canvas or context
					if ($.isCan(sprite)) {
						sprite = sprite.ctx()
					}
					if (sprite) {
						dd.sprite(sprite)
					}
					if (scale) {
						dd.scale(scale)
					}
					if (flags) {
						dd.flags(flags)
					}
					dd.alpha(N(alpha) ? alpha : 0.5)
					// dd.line( N(line)? line :1 )
					// dd.SetLineThickness(1)
					return dd
				}
			}
		}
		$_DD = function () {
			return new b2d.DD
		}
		var g = G(arguments), o, dbD = new b2DebugDraw()
		var DD = b2DebugDraw
		//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
		if ($.iC(o.cx)) {
			o.cx = $(o.cx).ctx()
		}
		o.sc = N(o.sc, 30)
		o.fl = o.fl || flags
		o.l = N(o.l, 20)
		o.al = N(o.al, .95)
		if (o.cx) {
			dbD.sprite(o.cx)
		}
		if (o.sc) {
			dbD.scale(o.sc)
		}
		dbD.flags(o.fl)
		dbD.alpha(N(o.al, 0.5))
		return _dbD = dbD
	}
	$dD.aabb = $dD.a = b2d.DD.e_aabbBit //4
	$dD.hBit = $dD.shape = $dD.h = b2d.DD.e_shapeBit //1
	$dD.jBit = $dD.jt = $dD.j = b2d.DD.e_jointBit //2
	$dD.pair = $dD.p = b2d.DD.e_pairBit //8
	$dD.cOM = $dD.c = b2d.DD.e_centerOfMassBit // 10
	$dD.co = b2d.DD.e_controllerBit //20
	bx.hBit = bx.DD.e_shapeBit
	bx.jBit = bx.DD.e_jointBit
}
debug()