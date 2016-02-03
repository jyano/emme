 
_$Bm = function (i) {
	return new cjs.Bitmap(i)
}
$Bm = function () {
	var g = G(arguments), i = g[0]
	if (!O(i)) {
		return _$Bm()
	}
	if ($.iI(i)) {
		i = $(i)[0];
		var bm = _$Bm(i)
		if (g.p) {
			bm.drag()
		}
		return bm
	}
	//return new cjs.Bitmap(i)
	bm = $Bm(i.i)
	if (i.al) {
		bm.al(i.al)
	}
	if (i.fl) {
		bm.fl(i.fl)
	}
	if (i.aF2) {
		bm.aF2(i.aF2)
	}
	if (!g.n) {
		bm.rCenter()
	}
	if (g.p) {
		bm.drag()
	}
	return bm
}
cjs.BmSync = function (i, st) {
	var bm = $Bm(src(i[0]))
	if (O(st)) {
		st.A(bm)
	}
	return bm
}
SuperBitmap = SuperBitmapSync = bm = function (img, stage) {
	var superBitmap = Do(new cjs.Bitmap(src(img)))
	if (O(stage)) {
		stage.a(superBitmap)
	}
	return superBitmap
}
cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
	if (O(img) && S(img.d)) {
		img = img.d
	}
	$.i(img, function (i) {
		bm = $Bm(i)
		if (F(fn)) {
			fn(bm)
		}
		if (S(fn)) {
			$w[fn] = bm
		}
	})
	return img
}
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
SuperBitmapAsync = function (i, fn) {
	i = i[0]
	if (O(i) && S(i.d)) {
		i = i.d
	}
	$.i(i, function (img) {
		bm = $Bm(img)
		if (F(fn)) {
			fn(bm)
		}
		if (S(fn)) {
			$w[fn] = bm
		}
	})
	return i
}
ct.Bm = function (i) {
	return $Bm(i).a2(this)
}
ct._bm = function (i, fn) {
	var ct = this
	$.i(i, function (i) {
		ct.A(bm = $Bm(i))
		if (F(fn)) {
			fn(bm)
		}
	})
	return ct
}
ct.bm = function () {
	var ct = this, g = G(arguments), o, bmp
	o = N(g.s) ?
	{i: g.f, sc: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	o.sc = N(o.sc) ? o.sc : 1
	if (_.iDU(o.i)) {
		o.i = $.i(o.i)
	}
	if (O(o.i)) {
		bmp = $Bm(o.i).a2(ct)
		if (o.fn) {
			o.fn(bmp)
		}
		return ct
	}
	$.i(o.i, function (i) {
		bmp = $Bm(i).a2(ct).rC().sXY(o.sc).a2(ct)
		//bm.XY( that.W()/2, that.H()/2 )
		// works with stage i guess.. but fucks with 'container' - cant check bounds
		if (g.n) {
			bmp.XY(-1000)
		}
		if (o.fn) {
			o.fn(bmp)
		}
	})
	return ct
}
ct.bmR = function (i, fn) {
	var ct = this, bm
	$.i(i, function (i) {
		bm = $Bm(i[0]).a2(ct)
		bm.rXY(
				bm.W() / 2,
				bm.H() / 2
		)
		if (fn) {
			fn(bm)
		}
	})
	return ct
}
bmFill()
function bmFill() {
	gx._bf = function (i, tf) {
		return this.bf(i, null, tf)
	}
	h.bf = function () {

//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case,
// the function draws a rectangle
// (and the bitmap is automatically used as the fill)
		var h = this, gx = h.graphics, g = G(arguments), o
		o = O(g.f) && A(g.f.hs) ?
				g.f :
				F(g.s) ?
				{i: g.f, fn: g.s, hs: g.t} :
				{i: g.f, mx: g.s, hs: g.t}
		o.mx = A(o.mx) ?
				$Mx(o.mx) :
				o.mx
		o.fn = _.tFn(o.fn)
		o.i = o.i || 'me'
		if (S(o.i) && !Q.ran) {
			$.i(o.i, function (i) {
				_bf(i, o)
			})
		}
		else {
			_bf(
					S(o.i) ?
							Q.i(o.i) :
							o.i
					, o)
		}
		function _bf(i, o) {
			gx._bf(i, o.mx);
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) : o.fn(h)
		}
		
		return h
	}
	function alt() {
		h._bf = function () {
			var h = this, gx = h.graphics, g = G(arguments)
			var tf = A(g.s) ? cjs.m2d.apply(cjs, g.s) : g.s
			tf = tf || cjs.m2d(R(500), R(300))
			S(g.f) ? gx.bf(Q.i(g.f), null, tf) :
					O(g.f) ? gx.bf(g.f, null, tf) : 0
			return h
			function alt() {
				h._bf = function (i, tf) {
					var h = this, gx = h.graphics, g = G(arguments)
					gx._bf(i, tf)
					return h
				}
			}
		}
		h.bf1 = function () {
			var h = this, gx = h.graphics, g = G(arguments), o
			o = O(g.f) && A(g.f.hs) ? g.f :
					F(g.s) ? {i: g.f, fn: g.s} :
					{i: g.f, mx: g.s, fn: g.t}
			o.i = o.i || 'me'
			if (S(o.i) && !Q.ran) {
				$.i(o.i, function (i) {
					_bf(i, o.mx, o.fn)
					if (o.hs) {
						_.e(o.hs, o.fn)
					}
				})
			}
			if (S(o.i)) {
				o.i = Q.i(o.i)
			}
			_bf(o.i, o.mx, o.fn)
			return h
			function _bf(i, mx, fn, hs) {
				var g = G(arguments),
						o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
								F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
								{i: g.f, mx: g.s, hs: g.t}
				o.i = S(o.i) ? Q.i(o.i) : o.i
				o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
				o.fn = _.tFn(o.fn)
				h._bf(i, o.mx)
				o.hs ? _.e(o.hs, function (shp) {
					o.fn(shp, h)
				}) :
						o.fn(h)
			}
		}
		h.bf = function () {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (O(g.f) && A(g.f.hs)) {
				o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
			}
			else {
				o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
			}
			o.i = o.i || 'me'
			if (!Q.ran) {
				if (o.hs) {
					$.i(o.i, function (i) {
						_bf(i, o.mx);
						if (o.fn) {
							_.e(o.hs, o.fn)
						}
					})
				}
				else if (S(o.i)) {
					$.i(o.i, function (i) {
						_bf(i, o.mx, o.fn)
					})
				}
			}
			else if (S(o.i)) {
				_bf(Q.i(o.i), o.mx, o.fn)
			}
			else {
				_bf(o.i, o.mx)
			}
			return h
			function _bf(i, mx, fn, hs) {
				var g = G(arguments),
						o = {
							i: g.f,
							mx: A(g.s) ? $Mx(g.s) : g.s,
							fn: _.tFn(g.t),
							hs: g[3]
						}
				h._bf(i, o.mx)
				o.hs ? _.e(o.hs, function (shp) {
					o.fn(shp, h)
				}) : o.fn(h)
			}
		}
		h.bf = function () {
			var h = this, gx = h.graphics, g = G(arguments);
			if (!F(Q)) {
				return h._bf.apply(h, g)
			}
			function fn(fn) {
				return function (i) {
					gx.bf(i[0])
					if (F(g.s)) {
						fn(g)
					}
				}
			}
			
			var fn1 = fn(function () {
				g.s(h)
			})
			var fn2 = fn(function () {
				_.e(g.f.hs, g.s)
			})
			g.S_ ? $.i(g.f, fn1) :
					g.O_ && A(g.f.hs) ?
						//if object with an 'hs' property
							$.i(g.f.i || 'me', fn2) :
							gx.bf(g.f, null, g.s)
			return h
		}
	}
	
	gx._bs = function (i, tf) {
		return this.bs(i, null, tf)
	}
	h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
	h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
	bmFillTf()
	function bmFillTf() {
		h._bfT = function (i) {
			var g = G(arguments)
			return this._bf(i, $tMx(A(g.s) ? g.s : g.r))
		}
		h._bfTAs = function (str, tfPropsArr, fn) {
			var h = this, g = G(arguments), o
			o = A(g.s) ?
			{i: g.f, tf: g.s, fn: g.t} :
			{i: g.f, fn: g.s}
			$.i(o.i, function (i) {
				_.tFn(o.fn)(
						h._bf(g.f, $tMx(_.tA(o.tf))))
			})
			return h
		}
		h._bfTf = h._bfT = function (img) {
			var g = G(arguments)
			var props = A(g.s) ? g.s : g.r
			return this._bf(img, $Tf(props)) //gant!
		}
		h._bfTfArrs = h._bfTAs = function (str, tfPropsArr, fn) {
			var h = this, g = G(arguments), o
			o = A(g.s) ?
			{i: g.f, tf: g.s, fn: g.t} :
			{i: g.f, fn: g.s}
			$.i(o.i, function (i) {
				var tfMx = $Tf(_.tA(o.tf))
				h._bf(g.f, tfMx)
				_.tFn(o.fn)(h)
			})
			return h
		}
	}
	
	matrix()
	function matrix() {
		mx.aTf = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
			x = N(x, 0)
			y = N(y, 0)
			scaleX = N(scaleX, 1)
			scaleY = N(scaleY, 1)
			rotation = N(rotation, 0)
			return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
		}
		$Mx = function () {
			var g = G(arguments), o;
			// = cjs.m2d
			if (A(g.f)) {
				return $Mx.apply(null, g.f)
			}
			o = g.O ? g.f :
					U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
					{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
			_MxOb = function (mx) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
				mx.a = N(mx.a, 1)
				mx.b = N(mx.b, 0)
				mx.c = N(mx.c, 0)
				mx.d = N(mx.d, 1)
				mx.tx = N(mx.tx, 0)
				mx.ty = N(mx.ty, 0)
				var m = new cjs.Matrix2D(mx.a, mx.b, mx.c, mx.d, mx.tx, mx.ty)
				return m
			}
			return _MxOb(o)
		}
		$Tf = $TfMx = $tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
			return $Mx().aTf(x, y, sx, y, rt, kx, ky, rx, ry)
		}
		dO.mx = dO.gM = function () {
			return this.getMatrix()
		}
		dO.mxMx = dO.cMx = dO.ccMx = dO.gCM = function () {/*
		 getConcatenatedDisplayProps ( [props] ) DisplayProps
		 Inherited from DisplayObject: getConcatenatedDisplayProps:999
		 Generates a DisplayProps object representing the combined 
		 display properties of the object
		 and all of its parent Containers up to the highest level ancestor 
		 (usually the Stage).
		 Parameters:
		
		 [props] DisplayProps optional
		 A DisplayProps object to populate with the calculated values. 
		 If null, a new DisplayProps object is returned.
		 Returns:
		
		 DisplayProps: The combined display properties.
		 */
			var dO = this
			return dO.getConcatenatedMatrix()
		}
		dO.catProps = dO.gCDP = function () {
			var dO = this
			return dO.getConcatenatedDisplayProps()
		}
		$Pt = function (x, y) {
			//=P=  cj.P = cj.Pt
			if (U(x)) {
				return new C$.Point
			}
			if (O(x) && O(y)) {
				return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
			}
			if (O(x)) {
				return new cj.Point(
						x.mx(),
						x.my()
				)
			}
			return new cj.Pt(x, y)
		}
	}
}
_.tFn = function (fn, fn2) {
	return F(fn) ? fn :
			fn2 ? fn2 : function () {
				return
			}
}
DRAWCAR = function () {
//http://www.createjs.com/tutorials/Animation%20and%20Ticker/
//http://www.createjs.com/tutorials/Animation%20and%20Ticker/timeBased.htmlLAYYS = USINGLAYERSINEASEL9 = function () {
	s = St(500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.sXY(3)
		drawCar()
		s.tick(function () {
			b.x(-1 * (g.x() * 2))
			b.y(-1 * (g.y() * 2))
		})
	})
	bt = $.bt('safd', function () {
		s.sXY(2)
	}).A()
	function drawCar() {
		s.bm('guy', function (bm) {
			g = bm
			bm.sXY(.5)
			SL(bm)
		})
	}
}