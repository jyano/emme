w.b = w.begin = function () {
	var that = this
	_.each(arguments, function (func) {
		that.beginHandlers.push(func)
	})
	return this
}
w.cl = w.w = w.k = w.on = w.with = w.collWith = function () {
	var w = this, g = G(arguments)
	w.b(function (cx) {
		cx.w(g[0], g[1], g[2])
	})
	return w
}
w.collide = w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g[0], g[1], g[2])
		})
	}
	return w
}
w.clXXX = function (k1, k2, flag) {
	var w = this
	var k = k1 + k2
	if (F(k2)) {
		return w.clAny(k1, k2)
	}
	w.b(function (cx) {
		if (cx.w(k1, k2)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k)
		if (cx) {
			flag(cx)
		}
	})
}
w.clA = w.clAny = function (k, flag) {//can combine this with above
	var that = this
	var w = this
	w.b(function (cx) {
		if (cx.w(k)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k);
		if (cx) {
			flag(cx)
		}
	})
}
w.collideAny = function (what, func) {
	return this.bg(what, function (cx) {
		$.do(function () {
			func(cx)
		})
	})
}
w.coll = function (k1, k2, func) {
	var that = this,
			w = this,
			name = k1 + k2
	if (F(k2)) {
		return this.collideAny(k1, k2)
	}
	this.beg(function (cx) {
		if (cx.with(k1, k2)) {
			that.flag(name, cx)
		}
	})
	cjs.tick(function () {
		var cx = that.flagged(name)
		if (cx) {
			func(cx)
		}
	})
}
w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
}
w.cl = function () {
	var w = this, g = G(arguments), o
	o = g.s && !F(g.s) ?
	{k: g.f, k2: g.s, fn: g.t} :
	{k: g.f, fn: g.s}
	w.b(function (cx) {
		o.k2 ? cx.wi(o.k, o.k2, o.fn) :
				cx.wi(o.k, o.fn)
	})
	return w
}
w.CL = function (k) {
	var w = this
	var fn = function rc(a, b, c) {
		w.cl(k, a, b, c)
		return rc
	}
	return fn
}
w.cl0 = function () {
	var w = this, g = G(arguments)
	w.cl.apply(w, g.concat('0'))
	return w
}
w.with = w.collWith = function (a, b, c) {
	var w = this
	w.beg(function (cx) {
		cx.with(a, b, c)
	})
	return this
}
w.class = function (k) {
	var w = this
	var ob = {
		class: k, k: k,
		world: w, w: w
	}
	ob.with = ob.collWith = function (k, func) {
		var ob = this
		if (O(k)) {
			_.each(k, function (fun, k) {
						ob.with(k, fun)
					}
			)
		}
		else {
			w.with(this.class, k, func)
		}
		return this
	}
	return ob
}
w.b = w.bg = w.beg = function () {
	var w = this, g = G(arguments), o, fn;
	if (g.u) {
		return this.GetBodyList()
	} /// polymorphism here??? wow.. super cryptic!!!!
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?lVWs
	//it just puts each item into bH arr
	fn = F(g.t) ? function (cx) {
		if (cx.w(g.f, g.s)) {
			g.t(cx)
		}
	} :
			F(g.s) ? function (cx) {
				if (cx.w(g.f)) {
					g.s(cx)
				}
			} :
					g.f //fn=$.mo(.2,fn)
	w.BG.push(fn)
	return w
	function alt() {
		w.beg = w.begin = function (what, what2, func) {
			var w = this
			if (F(what)) {
				_.each(arguments, function (func) {
					w.BG.push(func)
				})
			}
			else if (F(what2)) {
				func = what2
				w.BG.push(function (cx) {
					if (cx.with(what)) {
						func(cx)
					}
				})
			}
			else if (F(func)) {
				w.BG.push(function (cx) {
					if (cx.with(what, what2)) {
						func(cx)
					}
				})
			}
			return this
		}//ADDS one or more handlers to beginHandlers array
	}
}
w.b = w.bg = w.beg = function () {
	//ADDS one or more handlers to beginHandlers array
	var w = this
	G(arguments).e(function (fn) {
		w.BG.push(fn)
	})
	return w
}
w.bE = w.begEnd = function (bFn, eFn) {
	var w = this
	w.b(bFn)
	w.end(eFn)
	return w
}
w.b = w.beg = w.begin = function (k, k2, fn) {
	var w = this, g = G(arguments)
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?
	//if first pam is a fn, it assumes 1 or more fns
	//it just puts each item into bH arr
	if (g.F_) {
		g.e(function (fn) {
			w.bH.push(fn)
		})
	}
	else if (F(g.t)) {
		w.bH.push(function (cx) {
			if (cx.w(g.f, g.s)) {
				g.t(cx)
			}
		})
	}
	else if (F(g.f)) {
		w.bH.push(function (cx) {
			if (cx.w(k)) {
				k2(cx)
			}
		})
	}
	return w
}
w.end = function (k, k2, fn) {
	var w = this, g = G(arguments), eH = w.endHandlers
	if (F(k)) {
		_.e(g, function (fn) {
			eH.push(fn)
		})
	}
	else if (F(k2)) {
		fn = k2;
		eH.push(function (cx) {
			if (cx.with(k)) {
				fn(cx)
			}
		})
	}
	else if (F(fn)) {
		eH.push(function (cx) {
			if (cx.with(k, k2)) {
				fn(cx)
			}
		})
	}
	return w
}
w.pre = function () {
	var w = this, g = G(arguments)
	g.e(function (fn) {
		w.preHandlers.push(fn)
	})
	return w
}
w.po = w.post = function () {
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.postHandlers.push(fn)
	})
	return w
}
//preSolve alterations: //enable,friction,restitutoin
w.pre = function () {
	w._pre = function (fn) {
		var w = this, g = G(arguments)
		//fn = $.mo(.2,fn )
		w.pH.push(fn)
		return w
	}
	w.onPre = w.pre = function (fn) {
		var w = this, g = G(arguments)
		//fn = $.mo(.2,fn )
		w.pH.push(fn)
		return w
	}
	var w = this, g = G(arguments), o, fn
	if (F(g.t)) {
		fn = function (cx, i) {
			if (cx.w(g.f, g.s)) {
				g.t(cx)
			}
		}
	}
	else if (F(g.s)) {
		fn = function (cx, i) {
			cx.w(g.f, function (f) {
				_.b(g.s, this)(f, cx, i)
			})
		} //this good
	}
	else {
		fn = g.f
	}
	//fn=$.mo(.2,fn) //this will break it!!
	w.pH.push(fn)
	return w
	function pre() {
		w.pre = function () {
			var w = this, g = G(arguments)
			_.e(g, function (fn) {
				w.PRE.push(fn)
			})
			return w
		}
	}
	
	function alt() {
		w.pre = function () {
			var w = this, g = G(arguments), o, fn
			w._pre = function () {
				var that = this
				_.each(arguments, function (func) {
					that.preHandlers.push(func)
				})
				return this
			}
			//this good
			//fn=$.mo(.2,fn) //this will break it!!
			return w._pre(
					F(g.t) ?
							function (cx, i) {
								if (cx.w(g.f, g.s)) {
									g.t(cx)
								}
							} :
							F(g.s) ?
									function (cx, i) {
										cx.w(g.f, function (f) {
											_.b(g.s, this)(f, cx, i)
										})
									} :
									g.f
			)
		}
	}
}
w.post = w.po = function () {
	var w = this, g = G(arguments)
	g.e(function (fn) {
		w.PH.push(
				function (cx, I) {
					var i = _.m(I.normalImpulses, M.fl)[0],
							t = _.m(I.tangentImpulses, M.fl)[0]
					return fn(
							cx, i, t)
				})
	})
	return w
	function alt() {
		w.post = w.po = function () {
			var w = this, g = G(arguments)
			g.e(function (fn) {
				w.PH.push(
						function (cx, I) {
							var i = _.m(I.normalImpulses, M.fl)[0],
									t = _.m(I.tangentImpulses, M.fl)[0]
							return fn(
									cx, i, t)
						})
			})
			return w
		}
		w.po = w.post = function () {
			var w = this, g = G(arguments)
			_.e(g, function (fn) {
				w.PO.push(fn)
			})
			return w
		}
		w.post = function () {
			var that = this
			_.e(arguments, function (func) {
				that.postHandlers.push(func)
			})
			return this
		}
	}
}
w.end = function () {
	var w = this, g = G(arguments)
	if (g.F_) {
		g.e(function (fn) {
			w.eH.push(fn)
		})
	}
	else if (F(g.s)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s)
		})
	}
	else if (F(g.t)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
	function alt() {
		w.end = function () {
			var w = this, g = G(arguments)
			_.e(g, function (fn) {
				w.END.push(fn)
			})
			return w
		}
		w.end = function (what, what2, func) {
			var w = this
			if (F(what)) {
				_.each(arguments, function (func) {
					w.endHandlers.push(func)
				})
			}
			else if (F(what2)) {
				func = what2
				w.endHandlers.push(function (cx) {
					if (cx.with(what)) {
						func(cx)
					}
				})
			}
			else if (F(func)) {
				w.endHandlers.push(function (cx) {
					if (cx.with(what, what2)) {
						func(cx)
					}
				})
			}
			return this
		}
	}
}
w.wn = w.whe = w.when = function () {
	var w = this, g = G(arguments), o
	o = F(g[0]) ? {b: g[0], e: g[1]}
			: F(g[1]) ? {k: g[0], b: g[1], e: g[2]}
			: {k: g[0], k2: g[1], b: g[2], e: g[3]}
	//when b,[e]  k,b,[e]  k,k2,b,[e]
	if (o.k2) {
		w.b(o.k, o.k2, o.b);
		if (o.e) {
			w.end(o.k, o.k2, o.e)
		}
	}
	else if (o.k) {
		w.b(o.k, o.b);
		if (o.e) {
			w.end(o.k, o.e)
		}
	}
	else {
		w.b(o.b);
		if (o.e) {
			w.end(o.e)
		}
	}
	return w
}
w.wl = w.whi = w.while = function (k, k2, fn) {
	var w = this, push
	if (F(fn)) {
		w.wn(k, k2,
				function () {
					push = true
				},
				function () {
					push = false
				})
		z(function () {
			if (push) {
				fn()
			}
		})
	}
	else if (F(k2)) {
		w.wn(k, function () {
			push = true
		}, function () {
			push = false
		});
		z(function () {
			if (push) {
				k2()
			}
		})
	}
	return w
}