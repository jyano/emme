w.mJ = function (o) {
	var w = this
	if (o.m == 0) {
		return w
	}
	o = o || {}
	$.M()
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	$.oMU(function () {
		w.M()
	})
	$.oMD(function (x, y) {
		w.XY(x, y,
				function (f) {
					if (f.ofClass(o.m)) {
						w.mj = w.m(f.body(), _)
					}
				})
	})
	return w
}
w.mJ = function (b) {
	var w = this, g = G(arguments)
	if (g.u) {
		return 0
	}
	var j = w.CJ(
			$mJD(w.GGB(), b).sT(mX, mY)
	)
	j.mF(300)// * b.mass()
	j.mF(200000)
	j.fq(.5)
	j.dm()
	// default freqency is 5!!, maxF 30000, dmRat .7
	//$l('fq: '+ j.fq()+ ', dm: ' + j.dm()+ ', mF: ' + j.mF())
	return j
}
w.wMouse = function () {
	var w = this
	$.oMD(function (x, y) {
		var p = w.sToW(x, y)
		w.mx = p.x;
		w.my = p.y
	})
	$.oMM(function (x, y) {
		var p = w.sToW(x, y)
		w.mx = p.x;
		w.my = p.y
	})
	//  cjs.tick(function(){    if(w.mj){w.mj.tg(w.mx, w.my) }})
	return w
}
w.wMouseJ = function (o) {
	var w = this
	w.md(function (e) {
		w.XY(e.x, e.y, function (f) {
			if (f.ofClass(o.m)) {
				w.mj = w.m(f.body(), e.x, e.y)
			}
		})
	})
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(w.mx, w.my)
		}
	})
	$.oMU(function () {
		w.M()
	})
	return w
}
$.M = function () {
	var $ = this
	$.oMD(function (x, y) {
		_.x = x;
		_.y = y
	})
	$.oMM(function (x, y) {
		_.x = x;
		_.y = y
	})
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	return this
}
$.M0 = function () {
	var $ = this
	$.oMD(function (x, y) {
		_.x = x;
		_.y = y
	})
	$.oMM(function (x, y) {
		_.x = x;
		_.y = y
	})
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	return this
}
w.mTrack = function (b) {
	var w = this
	$.oMM(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	$.oMU(function () {
		w.M()
	})
	$.oMD(function (x, y) {
		w.mj = w.m(b, _)
	})
	return w
}
w.mTrackTransport = function (b) {
	var w = this
	$.oMM(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	$.oMU(function () {
		w.M()
	})
	$.oMD(function (x, y) {
		b.XY(x, y)
		w.mj = w.m(b, _)
	})
	return w
}
w.killMJ = function () {
	var w = this
	if (w._mJ) {
		w.DJ(w._mJ);
		w._mJ = 0
	}
	return w
}
w.tgMJ = function () {
	var w = this
	var b = w.bAt(mX, mY)
	w._mJ = w._mJ ? w._mJ :
			b ? w.mJ(b) :
					0
	if (w._mJ) {
		w._mJ.tg(V(mX, mY))
	}
	return w
}
w.handleMJ = function () {
	var w = this
	w._mD ? w.tgMJ() :
			w.killMJ()
	return w
}
w.mSetup = function () {
	$.md(function (e) {
		$mXY = function (e, x, y) {
			mx = e.clientX - x
			my = e.clientY - y
			mX = mx / 30
			mY = my / 30
		}
		var x = w.x
		var y = w.y
		w._mD = 1
		$mXY(e, x, y)
		$.mm(function (e) {
			$mXY(e, x, y)
		})
		// *** need to change to pagex(so can scroll page?).. 
		// but i think it messes up for mobile
	})
	$.mu(function () {
		w._mD = 0
	})
}
w.M = function () {
	var w = this
	if (w.mj) {
		w.j(w.mj);
		w.mj = null
	}
}