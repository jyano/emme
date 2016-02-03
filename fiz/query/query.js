BODYAT = function () {
	w = b2d.W({g: 0})
	b = w.S(470, 270, 'y', 100)
	b1 = w.S(500, 300, 'r', 100)
	b2 = w.S(530, 330, 'o', 100)
	w.qXY(500, 300,
			function (f) {
				f.C('w')
				return true
			})
}
CLICKKILL = function () {
	box(function () {
	})
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cv.click(function (e) {
		e.preventDefault();
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		$l('mousex ' + mouse.x)
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
			//return true
		})
		return false
	})
}
LOOPTICKER = BOX1 = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	var DD = b2DebugDraw; //dbD=  //	dbD.SetSprite(x); //  dbD.SetDrawScale(30); //	dbD.SetLineThickness(20) //	dbD.SetFillAlpha(1)// dbD.flag( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	w = $bW().sDD($dD(x, 30))
	//.fl( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	$bi()
	b = $ba()
	$l(w.numBods())
	T.t(function () {
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	})
}
fD.K = function (k) {
	var fD = this
	if (U(k)) {
		fD.getClass = function () {
			var g = G(arguments), fD = this, classes
			fD._K = fD._K || []
			this.classes = this.classes || []
			var ks = fD.classes.join(' ')
			if (g.p) {
				ks += ' : ' + fD.body().getClasses()
			}
			return ks
		}
		return fD.getClass()
	}
	fD.classes = fD.classes || []
	fD.classes.push(k)
	return fD
}
enterFrame = function () {
	if (w.mj) {
		w.mj.tg(w.mx, w.my)
	}
	w.step(1 / 60)
	if (F(o.cb)) {
		o.cb()
	}
	if (!T.iP()) {
		w.I.u();
		w.s.u();
		w.i.u()
	}
	w.DDD()
	w.e(function (b) {
		b.wX = b.X();
		b.wY = b.Y()
		b.sX = w.wTS(b.wX, b.wY).x
		b.sY = w.wTS(b.wX, b.wY).y
		if (O(b.gx)) {
			b.gx.XY(b.X(), b.Y()).rt(b.rt())
		}
	})
}
b.$ = b.click = function (fn) {
	var b = this
	b.W().stage.on('stagemouseup', function (ev) {
		w.qPoint(
				function (f) {
					if (f.B() == b) {
						_.b(fn, b)(f)
					}
				},
				ev.rawX,
				ev.rawY
		)
	})
	return b
}
function queryPoint() {
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.d())
		//is a WORLD point within the fixture // very accurate
	}
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.d())
		//is a point within the fixture // very accurate
	}
}
function apps() {
	CLICKKILL = function () {
		box(function () {
		})
		w.circle(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cv.click(function (e) {
			e.preventDefault();
			cvPos = cv.position()
			cvPos.x = cvPos.left
			cvPos.y = cvPos.top
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			$l('mousex ' + mouse.x)
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				b.kill()
				//	w.mj = w.mJ(b, o.x, o.y)
				//return true
			})
			return false
		})
	}
	FSEL = function () {
		box(function () {
		})
		w.circleStat(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		n = 0
		w.qPoint(300, 400, function (f, b, w) {
			$l("hit" + n++)
			//b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
			//return true
		})
	}
	FSEL = function () {
		n = 0
		box(function () {
			//$l('tick-'+ n++)
			if (w.mj) {
				w.mj.tg(mouse.x, mouse.y)
			}
		})
		w.mouse = {x: 0, y: 0}
		w.circle(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		cv.click(function (e) {
			e.preventDefault();
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				w.mj = w.mJ(b, mouse.x, mouse.y)
			})
			return false
		})
		cv.mousemove(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.mouse = mouse
		})
		cv.mouseup(function () {
			w.mj = null
		})
	}
	FSEL = function () {
		box(function () {
			if (w.mj) {
				var targ = w.mj.targ()
				$l('mouse joint target: ' + targ.x + ', ' + targ.y)
				w.mj.targ(mouseX, mouseY)
			}
			else {
				$l('no mouse joint')
			}
		})
		w.G(0)
		b = w.circle(420, 400, 150)
		w.circle(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		cv.mousedown(function (e) {
			e.preventDefault();
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				var mj = w.mJ(b, mouse.x, mouse.y, .1, 50000, 1000)
				mj.frq(120)
				mj.dmpRat(.01)
				mj.mxFo(100000)
				fq = mj.frq()
				$l(fq)
				w.mj = mj
			})
			return false
		})
		cv.dblclick(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f) {
				f.B().kill()
			})
		})
		cv.mousemove(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			mouseX = mouse.x
			mouseY = mouse.y
		})
		cv.mouseup(function () {
			w.DestroyJoint(w.mj)
			w.mj = null
		})
	}
	FSEL0 = function () {
		box0(function () {
			if (w.mj) {
				$l('yes')
			} else {
				$l('no')
			}
		})
		w.circle(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		cv.mousedown(function (e) {
			e.preventDefault();
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				w.mj = w.mJ(b, mouse.x, mouse.y)
			})
			return false
		})
		cv.mousemove(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			if (w.mj) {
				w.mj.tg(mouse.x, mouse.y)
			}
		})
		cv.mouseup(function () {
			w.mj = null
		})
	}
	BXEV = function (fn) {
//http://jsfiddle.net/digitalbush/JrzPH/
		w = $_W()
		w.SDD($dD().ctx(
						$.c('z', 1800, 1500)[0].getContext('2d'))
		)
		//the_circle = new b2CircleDef()
		n = 0
		_.ev(.1, function () {
			if (F(fn)) {
				fn(n)
			}
			n++
			w.N(1 / 5)
		})
	}
}
function shapes() {
	bx.f = function (k) {
		var arr = []
		w.each(function (b) {
			b.each(function (f) {
				if (f.is(k)) {
					arr.push(f)
				}
			})
		})
		return arr
	}
	bx.b = function (k) {
		var arr = []
		w.each(function (b) {
			if (b.of(k)) {
				arr.push(b)
			}
		})
		return arr
	}
	bH.tP = bH.tPt = function (tf, v, y) {
		var bH = this
		//bH.test = h.point =
		function alt() {
			bH.testPoint = h.tP = function (tf, vec) {
				return this.TestPoint(tf, vec)
			}
			bH.TP = function (x, y) {
				return this.TestPoint(x, y)
			}
			bH.tPt = bH.tP = function (x, y) {
				var bH = this
				alert('bH.tPt tP')
				return bH.TP(x / 30, y / 30)
			}
		}
		
		return this.TestPoint(tf, V(v, y).div())
	}
	bH.C = function () {
		return this.Copy()
	}
	bH.seg = h.segment = function (xf, lamb, norm, seg, maxLamb) {//Perform a ray cast against this shape.
		return this.TestSegment(xf,
				lamb,//:Array, returns the hit fraction.
				// You can use this to compute the contact point p = (1 - lambda) segment.p1
				// + lambda segment.p2.
				norm,//:b2Vec2, returns the normal at the contact point.
				// If there is no intersection, the normal is not set.
				seg,//:b2Segment, defines the begin and end point of the ray cast
				maxLamb//:Numbera number typically in the range [0,1]
		)
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
}