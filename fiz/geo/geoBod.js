function bodSub() {
	bSub = b.reducePolyBy = b.gPolWithout = function (pD) {
		this.fs(function (f) {
			pD = pD.D(f)
		})
		return pD
		// =b.cutPol = b.difFromPol = b.gPolWo = b.difPol = b.subMe = b.scrapeMeWithPol = b.pDWo
	}
	b.subF = function (f1, x, y) {
		var b = this
		var v = V(x, y)
		b.fs(function (f) {
			f.sub($pol(f1, v))
		})
		return b
	}
	b.dif = function (o) {
		var b = this, g = G(arguments),
				f = b.f(), fs = b.fs(), p
		if (b.n() == 1) {
			return b.f().dif(o, '-')
		}
		p = DIF(b, o).reg(b)
		if (g.n) {
			if (b2d.iB(o) || b2d.iF(o)) {
				o.kill()
			}
			else {
				b.kill()
			}
		}
		return p
	}
	b.subB = function (b1) {
		return this.fs(function (f) {
			b1.sub(f)
		})
	}
	b.sub1 = function (pD) {
		var b = this, g = G(arguments)
		if (b2d.iF(pD)) {
			b.subF(pD)
		}
		else if (b2d.iB(pD)) {
			b.subB(pD)
		}
		if (g.n) {
			pD.kill()
		}
		return b
	}
	b.sub = function () {
		var b = this, gg = G(arguments), c = b.c()
		gg.e(function (g) {
			if (b2d.iF(g)) {
				b.fs(function (f) {
					f.sub(g)
				})
				if (gg.n) {
					g.kill()
				}
			}
			else if (b2d.iB(g)) {
				g.fs(function (f) {
					b.sub(f)
				})
				if (gg.n) {
					g.kill()
				}
			}
		})
		b.C(b.c())
		return b
	}
	b.subtract = function (a) {
		var g = G(arguments), a = g[0]
		_.each(this.fixts(),
				function (f) {
					f.sub(a)
				})
		if (g.n) {
			a.kill()
		}
		return this
	}
	b.sub = function (a) {
		var p = this.minus(a)
		this.clear()
		this.conc(p)
	}
	b.subPolAtFxt = function (pol, fxt) {
		var g = G(arguments)
		var xy = g.n ? fxt.B().kXY() : fxt.B()
		this.subPol(pol, xy)
		return this
	}
 
	b.subAll = function (poly) {
		return this.fs(function (f) {
			f.sub(poly)
		})
	}
	b.subPol = b.subPoly = b.subP = function (poly, xy) {
		return this.subAll($pol(poly, xy))
	}
 }
function bodDiff() {
	b.dif = b.without = function (o) {
		var b = this, g = G(arguments)
		var f = b.f(), fs = b.fs()
		if (b.count() == 1) {
			return b.f().dif(o, '-')
		}
		if (g.n) {
			if (b2d.iB(o) || b2d.iF(o)) {
				o.kill()
			}
			else {
				b.kill()
			}
		}
		return $DIF(b, o).tlNeg(b)
	}
	b.DIF = function (b2) {
		var g = G(arguments), b2 = g[0]
		this.fs(function (f) {
			f.DIFF(b2)
		})
		if (g.n) {
			b2.kill()
		}
		return this
	}
	b.DIFF = function (b2) {
		var g = G(arguments), b2 = g[0],
				b = this, f = b.fixt(), dffV = b.dff(b2).verts()
		b2d.conc(b, _.map(dffV, function (v) {
			return V(v[0] - b.X(), v[1] - b.Y())
		}))
		f.kill()
		b.rot(0)
		if (g.n) {
			b2.kill()
		}
		return this
	}
 
	b.gPolWo = without = b.pDWo = function (gPol) {
		this.fs(function (f) {
			gPol = gPol.D(f)
		})
		return gPol
	}
	b.dif = b.without = function (o) {
		var b = this, g = G(arguments),
				f = b.f(), fs = b.fs(), p
		if (b.n() == 1) {
			return b.f().dif(o, '-')
		}
		p = $dif(b, o).reg(b)
		if (g.n) {
			if (b2d.iB(o) || b2d.iF(o)) {
				o.kill()
			}
			else {
				b.kill()
			}
		}
		return p
	}
}

function points(){
	b.pgPts = function () {
		return M.poly(this.V())
		function docs() {
//= b.polyVerts
		}
	}
	b.pts = function (fn) {
		var b = this
		var arr = []
		var pD = b.uni()
		if (F(fn)) {
			pD.ePol(fn);
			return b
		}
		return pD.pts()
		function docs() {
			function alt() {
				b.pts = b.ps = function (fn) {
					var b = this, arr = [], p = b.uni()
					if (F(fn)) {
						p.ps(b, fn);
						return b
					}
					p.ps(b, function (v) {
						arr.push(v)
					})
					return arr
				}
			}
		}
	}
	b.ptsGP = function () {
		var b = this
		var num = this.num()
		if (num == 0) {
			return
		}
		var fs = b.fixts()
		var pg = fs[0]
		if (num == 1) {
			return pg.union(pg)
		}
		_.e(_.r(fs), function (f) {
			f = M.poly(f)
			pg = M.poly(pg.union(f))
		})
		return pg
		function docs() {//		 
			//return this.union()
			//it used to just get from the FIRST fixt,
			//but now it unions them all together :)
			//b.verts = function(){ return this.fixt().verts() }
		}
	}
	b.wPtsGP = function () {
		var b = this, g = G(arguments)
		return b.pD().pts()
	}
	b.wPts = function () {
		var p = this.transform().position.mult()
		return _.m(this.pts(), function (pt) {
			return pt.add(p)
		})
	}
	b.rtWPts = function () {
		var b = this
		return _.m(b.rtPts(), function (v) {
			return V(v.x + b.X(), v.y + b.Y())
		})
	}
	b.rtPts = function () {
		var b = this
		var rt = M.tR(b.rt())
		return _.m(b.pts(), function (v) {
			var v = V(v)
			var x = v.x * M.c(r) - v.y * M.s(r) + b.X()
			var y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
			return V(x, y)
		})
		function docs() {
			
			//b.vs????
//b.fsGp   fsToGPol...
// for each of my fxs, 
// turn them into gP's
// and then aggregate them all
// by unioning each reductively
// so it gets bigger and bigger..
			function alt() {
				b.rtPts = b.rotVerts = function () {//rotated but local
					newX = function (x, y, rad) {
						rad = Math.toRadians(rad)
						return x * Math.cos(rad) - y * Math.sin(rad)
					}
					newY = function (x, y, rad) {
						rad = Math.toRadians(rad)
						return x * Math.sin(rad) + y * Math.cos(rad)
					}
					f.Vold = function () {//f.rotVerts=
						return this.wPts()
						newX = function (x, y, rot) {
							rot = Math.toRadians(rot)
							x *= Math.cos(rot).toFixed(3)
							y *= Math.sin(rot).toFixed(3)
							return x - y
						}
						newY = function (x, y, rot) {
							rot = Math.toRadians(rot)
							return (x * Math.sin(rot)) + (y * Math.cos(rot))
						}
						var verts = this.verts(), b = this.B()
						return _.map(verts, function (v) {
							var x = v.x, y = v.y
							return V(
									newX(x, y, b.rot()) + b.X(),
									newY(x, y, b.rot()) + b.Y())
						})
					}//this becomes wVerts
					var b = this, pts = b.verts()
					return _.m(pts, function (v) {
						var x = v.x,
								y = v.y
						return V(newX(x, y, b.rot()), newY(x, y, b.rot()))
					})
				}
			}
			
			//this returns [V,V,V...]
		}
	}
}
function bodUni() {
	b.sum = function (b1) {
		return $UNI(this, b1).pts(this, '-')
	}
	b.uni = function () {
		var b = this, g = G(arguments)
		var fs = b.fs()
		if (g.u) {
			return !g.n ?
					$UNI(fs).tlNeg(b) : $UNI(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g.f) && !F(g.s)) {
			return b.f().uni(b2d.tF(g.f))
		}
	}
	b.U = function () {
		var b = this, g = G(arguments)
		var pD = b.pD()
		g.e(function (arg) {
			pD = pD.U(arg)
		})
		return pD.tlNeg(b)
	}
	b.union = function () {
		var num = this.num(),
				fs = this.fixts()
		if (num == 0) {
			return
		}
		if (num == 1) {
			return fs[0].pts()
		}
		return fs[0].union(_.rest(fs))
	}
	b.minus = function (fOrB) {
		return this.rel(
				this.pts().difference(fOrB.pts())
		)
	}
}
b.sub = b.scrape = function () {
	var b = this, g = G(arguments), col = g.f
	b.subF = b.scrapeWithFxt = b.subFxt = b._sub = function (f) {
		var b = this
		b.fs(function (fxt) {
			fxt.sub(f)
		})
		return b
	}
	g.e(function (ob) {
		b2d.iF(ob) ? b.subF(ob) :
				b2d.iB(ob) ?
						b.subB(ob) : null
		if (g.n) {
			ob.kill()
		}
	})
	if (col !== 0) {
		b.C(col || b.c())
	}
	return b
}
b.explosion = b.exp = function () {//alert('b.exp is random!')
	var b = this, xy
	xy = b.pos()
	b.kill()//	return R() ? b2d.sep(b2d.pC(20, 7)).XY(xy) : w.D(xy.x, xy.y).rec( 60, 60).rot(45)
	return w.D(xy.x, xy.y).rec(60, 60).rot(45)
}
explodableOnContact = b.expl = function (c) {
// is body.Isactive??
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
	var b = this
	var victim = b
	victim.cl(function (f) {
		var bulletF = f, bulletB = f.B()
		victim.subF('expl', bulletB.killXY())
		if (c) {
			victim.C(c === '*' ? $r() : c)
		}
	})
	return b
}
b.scrapeWith = b.subFrom = function (fromWhat) {
	var b = this
	b.fs(function (f) {
		fromWhat.sub(f)
	})
	return b
}
b.scrapeWithBod = b.subBod = b.subB = function (b) {
	return this.subFrom(bod)
}
b.explAlt = function (col) {
	var b = this
	b.cl(function (f) {
		b.subPolAtFxt('expl', f, '-')._colorize(col)
	})
	return b
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
}