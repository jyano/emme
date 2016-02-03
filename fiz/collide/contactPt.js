cx.A = function () {
	return this.GetFixtureA()
}
cx.B = function () {
	return this.GetFixtureB()
}
cx.a = function () {
	return this.A().B()
}
cx.b = function () {
	return this.B().B()
}
cx.fA = cx.A = function (k) {
	var $$ = this.GetFixtureA()
	return D(k) ? $$.of(k) : $$
}
cx.fB = cx.B = function (k) {
	var $$ = this.GetFixtureB()
	return D(k) ? $$.of(k) : $$
}
cx.bA = cx.a = function (k) {
	var $$ = this.fA().B()
	return D(k) ? $$.of(k) : $$
}
cx.bB = cx.b = function (k) {
	var $$ = this.fB().B()
	return D(k) ? $$.of(k) : $$
}
cx.bA = cx.a = function () {
	return this.A().gB()
}
cx.bB = cx.b = function () {
	return this.B().gB()
}
cx.fA = cx.A = function () {
	return this.GetFixtureA()
}
cx.fB = cx.B = function () {
	return this.GetFixtureB()
}
cx.with = cx.includesBetween = cx.w = function () {
	var cx = this, g = G(arguments)
	// (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
	//if you have a second pam,, but its not a function
	cx.includes = cx.ic = function () {
		var cx = this, g = G(arguments)
		/* protosig
		 //     str    :  str,fn   :   obj   :   obj,fn
		
		 w.b(function(cx){
		 cx.ic(fisherman1, function(fish){this.eat(fish.B( ))  })
		 var oneWasFisherman1 = cx.ic(fisherman1); if(oneWasFisherman1){$l('the fish is: '+Fisherman1[1])}
		 cx.ic('fish', function(fisherman){  this.swimTo( fisherman.B( ))  })
		 var oneWasFish = cx.ic('fish'); if(oneWasFish){$l('the fish is: '+oneWasFish[0])}
		 })
		 */
		if (F(g.s)) {
			if (cx.A().of(g.f)) {
				_.b(g.s, cx.A())(cx.B(), cx)
			}
			else if (cx.B().of(g.f)) {
				_.b(g.s, cx.B())(cx.A(), cx)
			}
			return cx
		}
		//if this fixture 'of' that string(kind),fixt,or body
		//if so always passed back an array with the first mentioned selector in the [0] pos
		return cx.A().of(g.f) ? [cx.A(), cx.B()] :
				cx.B().of(g.f) ? [cx.B(), cx.A()] :
						false
		//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
	}
	cx.between = cx.bw = function () {
		var cx = this,
				g = G(arguments),
		// bw(k,k1)  or  bw(k,k1,fn)
				a = cx.A(), b = cx.B()
		if (F(g.t)) {
			if (a.of(g.f) && b.of(g.s)) {
				g.t.apply(a, [b, cx])
			}
			else if (b.of(g.f) && a.of(g.s)) {
				g.t.apply(b, [a, cx])
			}
			return cx
		}
		return cx.A().of(g.f) && cx.B().of(g.s) ? [cx.A(), cx.B(), cx] : cx.B().of(g.f) && cx.A().of(g.s) ? [cx.B(), cx.A(), cx] : false
	}
	return g.s && !F(g.s) ?
			cx.bw(g.f, g.s, g.t) :
			cx.ic(g.f, g.s)
}
cx.w = cx.of = cx.with = function () {
	var cx = this, g = G(arguments), o
	cx.both = function () {
		var cx = this, g = G(arguments)
		var fA = cx.fA()
		var fB = cx.fB()
		if (fA.of(g.f) && fB.of(g.s)) {
			if (F(g.t)) {
				var fn = _.b(g.t, fA)
				g.p ? fn(fB, cx) :
						_.in(0, function () {
							fn(fB, cx)
						})
				return cx
			}
			return [fA, fB]
		}
		else if (fB.of(g.f) && fA.of(g.s)) {
			if (F(g.t)) {
				var fn = _.b(g.t, fB)
				g.p ? fn(fA, cx) : _.in(0, function () {
					fn(fA, cx)
				})
				return cx
			}
			return [fB, fA]
		}
		return cx
	}
	cx.this = function () {
		var cx = this, g = G(arguments), a = cx.fA(),
				b = cx.fB(), k = g.f, fn = g.s
		if (a.of(k)) {
			if (F(fn)) {
				fn = _.b(fn, a)
				g.p ? fn(b, cx) : _.in(0, function () {
					fn(b, cx)
				})
				return cx
			}
			return [a, b, cx, g.o]
		}
		else if (b.of(k)) {
			if (F(fn)) {
				fn = _.b(fn, b)
				g.p ? fn(a, cx) : _.in(0, function () {
					fn(a, cx)
				})
				return cx
			}
			return [b, a]
		}
	}
	cx.these = function (p1, p2, fn) {
		var cx = this, g = G(arguments), fA = cx.fA(), fB = cx.fB(), a = fA, b = fB
		if (a.of(p1) && b.of(p2)) {
			if (fn) {
				_.b(fn, a)(b, cx);
				return cx
			}
			return [a, b]
		}
		else if (b.of(p1) && a.of(p2)) {
			if (fn) {
				_.b(fn, b)(a, cx);
				return cx
			}
			return [b, a]
		}
	}
	cx.with2 = cx.ofThese = cx.theseTwo = cx.withBoth = cx.isBetween = cx.these
	cx.btwn = cx.withBothFrom = cx.bw = cx.btw = cx.between = cx.these
	o = F(g.t) || (g.s && !F(g.s)) ?
	{k: g.f, k1: g.s, fn: g.t} :
	{k: g.f, fn: g.s}
	return o.k1 ? cx.these(o.k, o.k1, o.fn) :
			cx.this(o.k, o.fn)
	function alt() {
	}
	
	cx.wi = function () {
		var g = G(arguments), cx = this, o
		o = g.s && !F(g.s) ? {k1: g.f, k2: g.s, fn: g.t}
				: {k: g.f, fn: g.s}
		return o.k2 ? cx.both(o.k1, o.k2, o.fn, g.o) :
				cx.this(o.k, o.fn, g.o)
	}
}
cx.includes = cx.ic = function () {
	var cx = this, g = G(arguments)
	var o = {k: g.f, fn: g.s}
	if (o.fn) {
		if (cx.fA(o.k)) {
			cx.fnAB(o.fn)
		} //_.b(o.fn, cx.A())(cx.B(), cx)
		else if (cx.fB(o.k)) {
			cx.fnBA(o.fn)
		} //  _.b(o.fn, cx.B())(cx.A(), cx)
		return cx
	}
	cx.AB = function () {
		var cx = this
		return [cx.fA(), cx.fB(), cx]
	}
	cx.BA = function () {
		var cx = this
		return [cx.fB(), cx.fA(), cx]
	}
	//if this fixture 'of' that string(kind),fixt,or body
	//if so always passed back an array with the first mentioned selector in the [0] pos
	return cx.fA(o.k) ? cx.AB() :
			cx.fB(o.k) ? cx.BA() :
					false //[cx.A(), cx.B(), cx] : //[cx.B(), cx.A(), cx] :
	//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
}
cx.between = cx.bw = function () {
	var cx = this, g = G(arguments)
	// bw(k,k1)  or  bw(k,k1,fn)
	var fA = cx.fA()
	var fB = cx.fB()
	var fn = g.t
	if (F(fn)) {
		if (fA.of(g.f) && fA.of(g.s)) {
			fn.apply(fA, [fB, cx])
		}
		else if (fB.of(g.f) && fA.of(g.s)) {
			fn.apply(fB, [fA, cx])
		}
		return cx
	}
	return cx.fA(g.f) && cx.fB(g.s) ? [cx.fA(), cx.fB(), cx] :
			cx.fB(g.f) && cx.fA(g.s) ? [cx.fB(), cx.fA(), cx] :
					false
}
cx.with = function (a, b, c) {
	if (U(b) || F(b)) {
		return this.includes(a, b)
	}
	return this.between(a, b, c)
}
cx.fnAB = function (fn) {
	var cx = this
	_.b(fn, cx.A())(cx.B(), cx)
	return cx
}
cx.fnBA = function (fn) {
	var cx = this
	_.b(fn, cx.B())(cx.A(), cx)
	return cx
}
cx.kFn = function (k, fn) {
	var cx = this
	if (cx.A().of(k)) {
		cx.fnAB(fn)
	}
	else if (cx.B().of(k)) {
		cx.fnBA(fn)
	}
}
cx.not = cx.nof = cx.withoutAny = cx.ex = cx.excludes = function (u) {
	return !this.w(u)
}
cx.dsIf = cx.destroyIf = cx.setDestroyIf = function () {
	var cx = this
	_.e(arguments, function (k) {
		cx.a().setDestroyIf(k);
		cx.b().setDestroyIf(k)
	})
	return cx
}
cx.dsOIf = cx.destroyOtherIf = function (k) {
	var a = this.a(), b = this.b()
	if (a.is(k)) {
		b.setDestroy()
	}
	else if (b.is(k)) {
		a.setDestroy()
	}
}
cx.yesNo = function (ar1, ar2) {
	var ok = true
	_.e(ar1, function (k) {
		if (cx.nof(k)) {
			ok = false
		}
	})
	_.e(ar2, function (k) {
		if (cx.of(k)) {
			ok = false
		}
	})
	return ok
}
cx.exIn = cx.excludeInclude = function (no, yes) {
	return this.w(yes) && this.excludes(no)
}
cx.inEx = cx.includeExclude = function (yes, no) {
	return this.w(yes) && this.excludes(no)
}
cx.includes1 = function (what, func) {
	var cx = this,
			fA = cx.A(),
			fB = cx.B()
	if (F(func)) {
		if (fA.of(what)) {
			_.bind(func, fA)(fB, cx)
		}
		else if (fB.of(what)) {
			_.bind(func, fB)(fA, cx)
		}
		return this
	}
	if (fA.of(what)) {
		return [fA, fB]
	}
	if (fB.of(what)) {
		return [fB, fA]
	}
	return false
}
cx.between1 = function (p1, p2, func) {
	var cx = this, fA = cx.A(), fB = cx.B()
	if (F(func)) {
		if (fA.of(p1) && fB.of(p2)) {
			return _.bind(func, fA)(fB, cx) || cx
		}
		if (fB.of(p1) && fA.of(p2)) {
			return _.bind(func, fB)(fA, cx) || cx
		}
	}
	if (fA.of(p1) && fB.of(p2)) {
		return [fA, fB]
	}
	else if (fB.of(p1) && fA.of(p2)) {
		return [fB, fA]
	}
	return false
}
cx.w = cx.with = function (a, b) {
	var cx = this
	cx.includes = function (u) {
		var cx = this
		if (cx.fA().of(u)) {
			return cx.fB()
		}
		if (cx.fB().of(u)) {
			return cx.fA()
		}
	}
	cx.between = function (p1, p2) {
		var a = this.A(), b = this.B()
		if (a.of(p1) && b.of(p2)) {
			return [a, b]
		}
		if (b.of(p1) && a.of(p2)) {
			return [b, a]
		}
	}
	return b ? cx.between(a, b) : cx.includes(a)
}
cx.includes = function (k, fn) {
	var cx = this, g = G(arguments), fA, fB
	fA = cx.A()
	fB = cx.B()
	if (!fn) {
		return fA.of(k) ? [fA, fB] : fB.of(k) ? [fB, fA] : null
	}
	//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
	if (fA.of(k)) {
		fixts(fA, fB)
	}
	else if (fB.of(k)) {
		fixts(fB, fA)
	}
	return cx
	function fixts(a, b) {
		_.b(fn, a)(b, cx)
	}
}
cx.between = function (k1, k2, fn) {
	var cx = this, fA = cx.A(), fB = cx.B()
	return fA.of(k1) && fB.of(k2) ? fixts(fA, fB)
			: fA.of(k2) && fB.of(k1) ? fixts(fB, fA)
			: null
	function fixts(a, b) {
		return fn ? (_.b(fn, a)(b, cx) || cx) : [a, b, cx]
	}
}
cx.w = cx.with = function () {
	var cx = this, g = G(arguments)
	if (F(g[1]) || U(g[1])) {
		return cx.includes(g[0], g[1])
	}
	return cx.between(g[0], g[1], g[2])
}
cx.T = cx.t = cx.type = function () {
	var cx = this
	return cx.rM().m_type
}
cx.N = cx.next = cx.gN = function () {
	return this.GetNext()
}//Get the next contact in the world's contact list.
cx.bC = cx.bCo = cx.bindCo = cx.bindController = function (k) {
	var cx = this, g = G(arguments), f
	//if any fixt collides with a certain kind
	//switch to the controller with that name
	_.e(g,
			function (k) {
				cx.with(k,
						function () {
							this.switchTo(window[k])
						})
			})
}
cx.m = cx.wM = cx.man = cx.worMan = cx.worldManifold = function () {
	var cx = this, m
	m = new b2d.Collision.b2WorldManifold
	cx.GetWorldManifold(m)
	return m
}
cx.cen = cx.point = cx.V = function () {
	var cx = this
	return cx.m().m_points[0].m()
}
cx.nr = cx.norm = cx.no = function () {
	var cx = this
	return cx.m().m_normal.toFixed(2)
} //norm is just the dir to quickest separate the overlapping shapes
//  If you want to know the actual direction that these two corners impacted at, you can use:
// v1 = b1.GetLinearVelocityFromWorldPoint( cx.cen() )
//  v2 = b2.GetLinearVelocityFromWorldPoint( cx.cen() )
//  impactV = v1 - v2
//cx.vA=  function(){var cx=this; return cx.lV(cx.a())}
//cx.vB=  function(){var cx=this;return cx.lV(cx.b())}
cx.en = function (a) {
	var cx = this
	if (U(a)) {
		return cx.IsEnabled()
	}
	cx.SetEnabled(a ? true : false);
	return cx
} // Enable/disable this this.//
// This can be used inside the pre-solve contact listener.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
cx.cont = cx.continuous = cx.iC = function () {
	var cx = this
	return cx.IsContinuous()
} //Does this contact generate TOI events for continuous simulation
cx.sen = function () {
	var cx = this, g = G(arguments)
	if (U(g[0])) {
		return cx.IsSensor()
	}
	cx.SetSensor(g[0] ? true : false)
	return cx
}
cx.tch = cx.touching = cx.iT = function () {
	var cx = this
	return cx.IsTouching()
}
   