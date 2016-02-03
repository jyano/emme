function fixtDif() {
	f.dif = function () {
		var f = this, b = f.B(), g = G(arguments)
		var pD = f.GP()
		g.e(function (ob) {
			pD = bx.iB(ob) ?
					ob.gPolWithout(pD) :
					pD.D(ob)
		})
		if (!pD.hasAtLeastOnePoly()) {
			alert('f.dif (scrape.js?)')
		}
		var toBeRegged = g.n ? b : f
		return pD.reg(f).reg(toBeRegged)
		if (g.n) {
			_.in(function () {
				f.kill()
			})
		}
		//can take a body.. or a poly
		//   what about fixts? answer: p.D can consume a fixt
	}
	f.minus = f.diff = function (bOrF) {
		var f = this, b = f.body(), g = G(arguments),
				verts, poly
		//can handle a fixt OR a body! or even a gPoly itself!
		poly = f.pts().difference(b2d.isGPoly(bOrF) ?
				bOrF : bOrF.pts())
		_.e(g.r, function (bOrF) {
			poly = poly.difference(
					b2d.isGPoly(bOrF) ?
							bOrF : bOrF.pts())
		})
		if (b2d.hasVerts(poly)) {
			return b.rel(poly)
		}
	}
	f.difKill = function (difWhat) {
		var f = this, g = G(arguments)
		var difdFxt = f.dif(difWhat) //vs is f minus something
		_.in(function () {
			f.kill()
			//then f goes away
		})
		return difdFxt
	}
	f.dif = function () {
		var f = this, g = G(arguments)
		var pD = f.tGP()
		g.e(function (v) {
			pD = pD.D(v)
		})
		pD = pD.tlNeg(f.B())
		if (g.n) {
			f.kill()
		}
		return pD.ifHasPol()
		//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
//you can pass in the verts, 
// or the gPoly itself! //what about a fxt?
	}
}
function fixtSub() {
	f.sub = function () {
		var f = this, b = f.B(), g = G(arguments),
				p
//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self
		p = f.dif(g[0], '-') //vs is f minus something
		if (p && !M.p(p).hH()) {
			f.kill() //then f goes away
			if (M.p(p).getArea() < 2000) {
				return
			}
			b.pol(p)//the body makes a new f, from the the vs
		}
		if (g.n) {
			g[0].kill()
		}
		if (g.p) {
			g[0].dyn()
		} //can optionally delete the 'something'
		return f
	}
	f.sub = function (f1) {
		var f = this, b = f.B(), g = G(arguments)
		var pD = f.dif(f1, '-')   //   kill THIS f
		if (g.n) {
			f1.kill()
		}
		if (g.p) {
			f1.dyn()
		}
		if (pD.bigEnough() || g.m) {
			b.pol(pD)
		}
		return f
	}
	//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self
//lets begin:
	f.sub = function () {
		
		//= f.scrapeWith
		var f = this, b = f.B(), g = G(arguments)
		var difdFxt = f.difKill(g.f)
		if (!bigEnough(difdFxt)) {
			return
		}
// we get the dif of the this and the thing we are subtracting from it...
// then we kill THIS fixt
//here, body makes a new f from the dif (hence, it might be slimmer)
//again... it is fixtizing the result of the gPol subtraction operation
// it subtracted something from this... killed itself..
// .. and now is adding a NEW fixture to replace itself..
//but the new fixture is the difference result of subtracting something else, from it
//so after that subtraction, it killed itself, and and now 
// we are replacing the body that held that fixt, replaces it with the resutl
// of the difference between it and another fixt
		b.pol(difdFxt)
		if (g.n) {
			
			//now that other thing that we subtracted from our fixt before it was killed and replaced..
			//..letst talk about that thing
			//we can optionally kill that thing too!!
			//it may have been a real manufactured body or fixt
			//... though there should be a better way than that!!! !!!! :=)(+
			what.kill()
		}
		if (g.p) {//and  aparently we can also optionally dynamize it!
			what.dyn()
		}
		return f
	}
	f.sub = function (b2) {
		// = f.DIF = f.DIFF
		var f = this, g = G(arguments), b2 = g[0]
		f.B().sep(f.minus(b2))
		f.kill()
		if (g.n) {
			b2.kill()
		}
		return this
	}
	f.reduceB = f.scrapeBodWith = f.subFromBod = function (b) {
		bod.fs(function (f) {
			f.sub(b)
		})
	}
}
function fixtUni() {
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.jA) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.reg(b)
//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
	f.union = function (f2) {
		var f = this, b = f.body(), p //can handle a fixt OR a body!
		if (A(f2)) {
			return this.union.apply(this, f2)
		}
		p = f.pts().union(f2.pts())
		_.e(_.r(arguments), function (f) {
			p = p.union(f.pts())
		})
		return b.rel(p)
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.A) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.tlNeg(b) // return p.reg(b)
		//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
}
 
 function points(){
	 fD.pts = fD.vrt = fD.verts = function () {
		 var h = this.H()
		 var verts = h.vs()
		 return [vs[0].m(), vs[1].m(), vs[2].m(), vs[3].m()]
		 function alt() {
			 fD.vrt = fD.verts = function () {
				 var shape = this.shape,
						 verts = shape.m_vertices,
						 verts = [
							 verts[0].mult(),
							 verts[1].mult(),
							 verts[2].mult(),
							 verts[3].mult()]
				 return $l(verts)
			 }
		 }
	 }
//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
//= f.points = f.verts = f.vertices = f.vs
//=f.vs = f.points = f.verts = f.vertices =
	 /*
	  b2d.tA source :
	  function(vs) {
	  return _.m(vs, function (v) { return [v.x, v.y]  })
	  }
	
	  v.tA:function () { return [v.x, v.y] }
	  */
	 f._pts = function () {
		 // alt: return b2d.m(  this.H().m_vertices  )
		 var f = thisf.__pts = function () {
			 return this.H().m_vertices
		 }
		 return _.m(f.__pts(), b2d.mult)
	 }
	 f.locPts = function () {
		 var f = this, b = this.B(), g = G(arguments)
		 return g.p ?
				 _.m(f._pts(), function (v) {
					 return v.rt(b.rt())
				 }) :
				 f._pts()
		 // (optionally rotated locally by body's rotation)
	 }
	 f.pts = function () {
		 var f = this, b = f.B(),
				 g = G(arguments)
		 var vs = _.m(f._pts(), function (v) {
			 return g.n ?
					 v : v.rt(b.rt())
		 })
		 return b2d.tA(vs)
		 function alt() {
			 f.pts = function () {
				 var f = this, b = f.B(), g = G(arguments)
				 return b2d.tA(_.m(f._pts(), function (v) {
					 return g.n ? v : v.rt(b.rt())
				 }))
			 }
		 }
	 }
	 f.wPts = function () {
		 var f = this, b = f.B(), g = G(arguments)
		 var pts = g.p ?  // was g.N
				 f.pts('+') :
				 f.pts()
		 return _.m(pts, function (v) {
			 return v.add(b)
		 })
		 //give world verts of fixt rotated
		 // (or optionally, not rotated for some reason)
		 f.wV = function () {
			 return b2d.tA(b2d.add(this.pts(), this.B()))
			 function alt() {
				 f.wV = function () {
					 var f = this, b = f.B(), g = G(arguments),
							 vs
					 vs = g.n ? f.vs() : f.vs('+')
					 return b2d.tA(_.m(vs, function (v) {
						 return V(v).add(b)
					 }))
				 }
			 }
		 }
	 }
	 f.GP = function () {
		 return $pD(this.wPts())
	 }
	 f.ptsA = function () {
		 var f = this
		 return _.m(f.pts(), function (v) {
			 v = V(v)
			 return [v.x, v.y]
		 })
		 //=f.vsA
	 }
	 f.wPtsA = function () {
		 var f = this, b = f.B(), g = G(arguments)
		 var pts = f.pts()
		 var pt = V(b.X(), b.Y())
		 return b2d.tA(b2d.add(pts, pt))
	 }
	 f.wPtsGP = function () {
		 return $pD(this.wPts())
	 }
 }
f.A = f.area = function () {
	return M.p(this).getArea()
} 