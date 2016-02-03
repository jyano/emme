w.QA = w.Q = w.QAB = function (a, b) {
	this.QueryAABB(a, b);
	return this
}
w.Q = function () {
	$l('w.Q')
	var w = this, g = G(arguments), o, fx
	o = g.O ? g.f :
			g.S_ && N(g.s) ?
			{k: g.f, x: g.s, y: g.t, fn: g.fo} :
					g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
							g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
									g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
											g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
											{x1: g.f, x2: g.s, fn: g.t}
	o.n = 0
	w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
	function qAFn(f) {
		o.n++
		$l('w.Q qAFn' + o.n)
		if (o.fn(f, f.B(), o.n) !== false) {
			return true
		}
	}
	
	return w
	//but it makes a rectangle not square ??
}//w.QUERY =
w.Q = function () {
	$l('w.Q')
	var w = this, g = G(arguments), o, fx
	o = g.O ? g.f :
			g.S_ && N(g.s) ?
			{k: g.f, x: g.s, y: g.t, fn: g.fo} :
					g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
							g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
									g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
											g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
											{x1: g.f, x2: g.s, fn: g.t}
	o.n = 0
	w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
	function qAFn(f) {
		o.n++
		$l('w.Q qAFn' + o.n)
		if (o.fn(f, f.B(), o.n) !== false) {
			return true
		}
	}
	
	return w
	//but it makes a rectangle not square ??
}//w.QUERY =
w.qAB = w.Q = w.queryAABB = function (func, x1, y1, x2, y2) {
	var w = this,
			AB = b2d.AB(x1, y1, x2, y2),
			num = 0
	w.QueryAABB(function (f) {
		num++
		return func(f, f.B(), num)
	}, AB)
	return num
}
w.qA = function (fn, ab) {
	this.QueryAABB(fn, ab);
	return this
}
w.qA = function (fn, ab) {
	this.QueryAABB(fn, ab);
	return this
}
w.rad = function (x, y, r, fn) {
	return this.Q({
		x1: x - r,
		y1: y - r,
		x2: x + r,
		y2: y + r,
		fn: fn
	})
}
w.qPt = w.q = w.qP = w.queryPt = w.query = function () {
	var w = this, g = G(arguments), o,
			fx
	o = g.S_ && N(g.s) ?
	{k: g.f, x: g.s, y: g.t, fn: g.fo} :
			g.S_ && O(g.s) ?
			{k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
					g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
							g.A_ ?
							{x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
							{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
	var fn = function (f) {
		if (!f) {
			alert('w.query !this(f)')
		}
		if (f.of(o.k) && f.tP(o.x, o.y)) {
			fx = f;
			return false
		}
		return true
	}
	w.qA(fn, $AB(o.x, o.y))
	if (!fx) {
		return false
	}
	if (F(o.fn)) {
		_.b(o.fn, fx)(fx);
		return w
	}
	return fx
}
w.ABpt = w.ptAB = w.bAt = w.bdAt = w.bdAtPt = w.atPt = function (x, y) {
	var w = this, g = G(arguments), o
	var selBd = null
	w.QA(function (f) {
				if (f.B().isDyn() && f.tPt(mX, mY)) {
					selBd = f.B();
					return false
				}
				return 1
			},
			$AB(x - .001, y - .001, x + .001, y + .001))
	return selBd ? selBd : 0
}//w.getBodyAtPoint =
//this is HACK//
w.q = w.qPt = w.qP = w.queryPt = w.query = function () {
	var w = this, g = G(arguments), o,
			fx
	o = g.S_ && N(g.s) ?
	{k: g.f, x: g.s, y: g.t, fn: g.fo} :
			g.S_ && O(g.s) ?
			{k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
					g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
							g.A_ ?
							{x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
							{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
	var fn = function (f) {
		if (!f) {
			alert('w.query !this(f)')
		}
		if (f.of(o.k) && f.tP(o.x, o.y)) {
			fx = f;
			return false
		}
		return true
	}
	w.qA(fn, $AB(o.x, o.y))
	if (!fx) {
		return false
	}
	if (F(o.fn)) {
		_.b(o.fn, fx)(fx);
		return w
	}
	return fx
}
//END HACK//
w.QP = w.QPt = function (fn, vec) {
	this.QueryPoint(fn, vec);
	return this
}
w.QS = w.QH = function () {
	return this.QueryShape.apply(this, arguments)
}
w.qP = w.qPt = w.qPoint = function (fn, x, y) {
	return this.QP(fn, V(x, y, '-'))
} //w.queryPoint =
w.queryPoint = function (func, x, y) {
	this.QueryPoint(
			function (f) {
				_fixt = f
				_body = _fixt.GetBody()
				func(f)
			},
			V(x, y, '-')
	)
	return this
}
w.queryXY = function (func, x, y) {
	var w = this  //does not divide
	w.QueryAABB(func, b2d.AABB01(x, y))
	return w
}
w.getBodyAtPoint = function (x, y) {
	var body = null
	this.QueryAABB(function queryFunc(fxt) {
				if (!fxt.isStat() && fxt.test(
								mX * 30,
								mY * 30
						)) {
					body = fxt.body()
					return false
				}
				return true
			},
			b2d.AABB01(x, y))
	return body
}
w.bodyAt = w.bodyAtPoint = function (x, y, fn, k) {
	var w = this, b //does not div
	if (O(x)) {
		k = fn;
		fn = y;
		y = x.y;
		x = x.x
	}
	w.qXY(function (f) {
		if (U(k) || f.of(k)) {
			if (f.test(x, y)) {
				b = f.B()
				return false
			}
		}
		return true
	}, x, y)
	if (!b) {
		return false
	}
	if (F(fn)) {
		return fn(b) || w
	}
	return b
}
w.qXY = function (x, y, fn) {
	var w = this, v
	//function on TOPMOST fixt FIRST
	// then goes down, but only if function returns 'true'
	//great way to work with fixts/bods at a certain x,y point
	if (F(x)) {
		v = V(y, fn);
		fn = x
	}
	else if (O(x)) {
		fn = y;
		v = (V(x))
	}
	else(v = V(x, y))
	w.QueryAABB(fn, b2d.AABB01(v))
	return w
}
//query a point of specific kind,
// more options on fixts
w.XY = function (x, y, fn, k) {
	var w = this, fixt = false // - -> bottom, + all ? :)
	if (O(x)) {
		k = fn;
		fn = y;
		y = x.y;
		x = x.x
	}
	w.qXY(x, y, function (f) {
		if (f.ofClass(k) && f.test(x, y)) {  //k null -> true // doesnt need to div, because qXY will div
			fixt = f;
			return false
		}
		return true
	}) //stops at top most fixt
	if (fixt && F(fn)) {
		fn = _.bind(fn, fixt)
		return fn(fixt) || w
	} // or w? //makes sense actually
	return fixt
}
//query bodies
w.bXY = function (x, y, fn, k) {
	var w = this,
			b = false
	if (O(x)) {
		k = fn;
		fn = y;
		y = x.y;
		x = x.x
	}
	w.qXY(x, y, function (f) {
		if (f.ofClass(k) && f.test(x, y)) {
			b = f.B();
			return false
		} //cycles through all the fixts to find the first
		return true
	})
	if (F(fn)) {
		return _.bind(fn, b)(fn(b)) || w
	}
	return b
}//**
w.dynAt = w.at = w.bodyAtPoint = function (x, y) {
	var body = null, func
	func = function (f) {
		if (f.isDyn() && f.testPoint(x, y)) {
			body = f.B();
			return false
		}
		return true
	}
	this.queryXY(func, x, y)
	return body
}
w.QPt = function (fn, p) {
	this.QueryPoint(fn, p)
	return this
} //= w._qPoint
w.qPoint = function () {
	var w = this, g = G(arguments), o
	o = g.N_ ? {v: V(g.f, g.s), fn: g.t} : {v: g.f, fn: g.s}
	return w.QPt(function (f) {
		return o.fn(f, f.B(), f.B().W())
	}, o.v.d())
}
w._qPoint = function (fn, p) {
	this.QueryPoint(fn, p)
	return this
}
w.qPoint = function () {
	var g = G(arguments), o
	o = g.N_ ?
	{v: V(g.f, g.s), fn: g.t} :
	{v: g.f, fn: g.s}
	var fn = function (f) {
		var b = f.B(), w = b.W()
		return o.fn(f, b, w)
	}
	var point = o.v.div()
	this._qPoint(fn, point)
	return this
}
w.ray = function () {
	var w = this, g = G(arguments), o, arr
	o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
		x: g.f,
		y: g.s,
		x1: g.t,
		y1: g[3],
		fn: g[4]
	}
	arr = [];
	w.RayCast(function (f) {
		if (f.of(o.k)) {
			arr.push(f)
		}
	}, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
	if (!o.fn) {
		return arr
	}
	if (g.p) {
		o.fn(_.f(arr))
	}
	else if (g.n) {
		o.fn(_.l(arr))
	}
	else {
		_.e(arr, function (f) {
			o.fn(f)
		})
	}
	return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
}
w.rC1 = function () {
	var w = this
	w.RayCastOne
}
w.rCA = function () {
	var w = this
	w.RayCastAll
}
w.rC = function (fn, v1, v2) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
w._rC = function (v1, v2, fn) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
w.ray = function () {
	var w = this, g = G(arguments), o, arr
	o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
		x: g.f,
		y: g.s,
		x1: g.t,
		y1: g[3],
		fn: g[4]
	}
	arr = [];
	w.RayCast(function (f) {
		if (f.of(o.k)) {
			arr.push(f)
		}
	}, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
	if (!o.fn) {
		return arr
	}
	if (g.p) {
		o.fn(_.f(arr))
	}
	else if (g.n) {
		o.fn(_.l(arr))
	}
	else {
		_.e(arr, function (f) {
			o.fn(f)
		})
	}
	return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
}
w.rC1 = function () {
	var w = this
	w.RayCastOne
}
w.rCA = function () {
	var w = this
	w.RayCastAll
}
w.rC = function (fn, v1, v2) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
w._rC = function (v1, v2, fn) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}