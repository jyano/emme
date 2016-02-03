BF4 = TFM = function () {
	$St()
	$.i('chicks', function (img) {
		//stroke color
		h.sC('b', 50)
//bitmap fill
		h.bf(img, $tMx(210, 230, .5, .5))
//draw circle
		h.dc(100, 100, 100)
	})
}
BF2 = LDB = function () {
	$St()
	Q('me', function (q) {
		st.h('+').bf(q.get('me')).dc(100)
		$h().a2(st).XY(500, 100).bf('me').dc(100)
	})
}
DRG = BF0 = HBF = function () {
	$St().h(300, 300).bf('me', function (h) {
		h.dc(300).dg()
	})
}
h._bC = function (o) {
	var h = this;
	h.bf(o, function (h1) {
		h.dc(h1)
	})
	return h
}
h.bC = h.bmCir = function (o) {
	var h = this
	o = o || {}
	o.i = o.i || 'me'
	o.circs = o.circs || []
	o.cs = o.cs || []
	o.hs = o.hs || []
	$.i(o.i, function (i) {
		_.e(o.circs, function (c) {
			h.bf(i).dc(c)//.ef()
		})
	})
	return h
}
h.bmR = h.bmRec = h.bR = function (o) {
	var h = this;
	h.bf(o, function (h1) {
		if (o.hs) {
			_.e(o.hs, function (r) {
				w.rec(r.w, r.h)
			})
		}
		else {
			h.rec(o.hs)
		}
	})
	return h
	function alt() {
		h.bR = function (o) {
			var h = this;
			if (F(Q)) {
				h.bf(o, function (h1) {
					h.rec(h1)
				})
			}
			else {
				alert('h.bR not preloaded?')
				h.bf(o.bf)
				h.rec(o.hs)
				_.e(o.hs, function (r) {
					w.rec(r.w, r.h)
				})
			}
			return h
			//= h.bfR = h.bmR
		}
	}
}
h.bP = h.bV = function (o) {
	var h = this, g = G(arguments), o
	h._bV = function (i, vs) {
		i = i || 'me'
		return this.bf(i).lt(vs).cp()
	}
	h._bVAsy = function (i, v) {
		var h = this
		i = i || 'me'
		$.i(i, function (i) {
			h._bV(i, v)
		})
		return h
	}
	o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
	if (Q.ran) {
		h._bV(o.i, o.v)
	}
	else {
		h._bVAsy(o.i, o.v)
	}
	return h
	function alt() {
		h.bV = function (o) {
			var h = this, g = G(arguments), o
			o = g.A ? {hs: g.f} : g.f || {}
			o.hs = o.hs || []
			o.i = o.i || 'me'
			if (F(Q)) {
				$.i(o.i, function (i) {
					h.bf(i[0])
					_.e(o.v, function (v) {
						h.lt(v)
					})//
					h.cp()
					h.ef()
				})
				return h
			}
			h.bf(o.i)
			_.e(o.v, function (v) {
				h.lt(v)
			})
			return h
		}
		function old() {
			h.bmV = function (o) {
				var h = this
				o = o || {}
				o.i = o.i || 'me'
				$.img(o.i, function (i) {
					i = i[0]
					_.e(o.v, function (v) {
						h.bf(i)
						h.lt(v)
						h.ef().cp()
					})
				})
				return h
			}
		}
	}
}
BF8 = BFH = function () {
	$St()
		//bitmap fill
			.h().bf({
				i: 'me',
				// for each of these radii..
				hs: [100, 300, 500, 700, 900],
				fn: function (x) {
					//draw circle
					h.dc(x, 30, 120).es()
				}
			})
}
BF100 = BMC = function () {
	$St()
			.h().bmCir({
				circs: [
					{r: 100},
					{x: 200, y: 200}, {}
				]
			})
	BF101 = BCS = function () {
		$St()
		h.bmCir({circs: cirs})
		h2 = $H(700, 300).a2(st).dg()
		h2.bmCir({circs: vs})
	}
}
$Ldr('LBF0', function (ld) {
	h = $St().h().C('z')
	h.dr(0, 0, 40, 40)
	h.bf(ld.get('me'), -100)
	h.dr(0, 0, 500, 200)
	h.dr(100, 100, 500, 200)
})
$Ldr('HBS0', function (ld) {
	h = $St(1000, 500).h()
	chicks = ld.get('chicks')
	me = ld.get('me')
	h.l(8)
	h.bf(chicks, $Mx(1, 0, 0, 1, -800, -400))
	h.dr(0, 0, 1600, 800)
	var Ch = function (x, y) {
		var h = $H().a2(st).l(8)
		h.graphics.bf(chicks)
		h.bs(me)
		//cjs.SL(h)
		return h
	}
	Ch(200, 200).rec(200, 300)
	Ch(400, 250).rec(200, 300)
	Ch(600, 250).rec(200, 300)
	Ch(750, 350).rec(200, 300)
	Ch(900, 250).rec(200, 300)
})
$Ldr('BFS', function (ld) {
	h = $St().h()
	me = ld.get('me')
	chicks = ld.get('chicks')
	h.l(20)
	h.bf(me)
	h.bs(chicks)
			.rec(200, 200, 200, 300).rec(400, 250, 200, 300)
			.rec(600, 250, 200, 300).rec(750, 350, 200, 300)
			.rec(900, 250, 200, 300)
	var Ch = function () {
		var h = st.h('+').l(20).bf(chicks).bs(me)
		// h.rec.apply(ch, arguments)
		return h
	}
	Ch().rec(200, 200, 200, 300)
	Ch().rec(400, 250, 200, 300)
	Ch().rec(600, 250, 200, 300)
	Ch().rec(750, 350, 200, 300)
	Ch().rec(900, 250, 200, 300)
})
$Ldr('PFC', function (ld) {
	h = $St().h()
	h.bf($(ld.get('me')).A()[0])
			.cir({x: 40, y: 289, r: 100}).mt(vs1).mt([[550, 20],
				[800, 100], [700, 300], [500, 120]]).mt([[750, 20],
				[900, 100], [900, 300], [700, 120]], 50, 200).mt([[550, 20],
				[800, 100], [700, 300], [500, 120]], 0, 50)
			.cir({x: 550, y: 20, r: 20, c: 'b'})
			.cir({x: 800, y: 100, r: 30, c: 'b'})
			.cir({x: 700, y: 300, r: 20, c: 'g'})
			.cir({x: 500, y: 120, r: 30, c: 'g'})
})
$Ldr('HBC', function (ld) {
	h = $St().h('+')
	h = $H().a2(st)
	h.bC({
		circs: [{x: 200, y: 100, r: 150}, {r: 100}, {x: 300}]
	}).dg()
})
MX00 = M2D = CJSM2D = function () {
	m = $Mx()
	$l(m)
	$St().bm('me', function (bm) {
		b = bm.XY(400, 200)
		p = b.getConcatenatedDisplayProps();
		$l(p)
		cm = b.getConcatenatedMatrix()
		$l(cm)
	})
}
 