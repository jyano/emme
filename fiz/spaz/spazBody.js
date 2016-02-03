b.stg = function () {
	return this.wor().s
}
b.click = function (func) {
	var b = this, w = this.wor()
	w.s.on('stagemouseup', function (e) {
		w.queryPoint(function (f) {
					if (b == f.B()) {
						_.bind(func, b)(f)
					}
				},
				e.rawX, e.rawY)
	})
}
b.img = b.bindSprite = function (img, scale, startingRotation) { //img is an image name  //rotation is in degerees!
	var body = this, stage = body.wor().s
	scale = scale || .4
	startingRotation = N(startingRotation) ? startingRotation : 6 // why not zero ?????
	stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
		if (A(scale)) {
			bm.sXY(scale[0], scale[1])
		} else {
			bm.sXY(scale)
		}
		body.sprite = bm  //only one???
		updateSprite()
		cjs.tick(updateSprite)
		function updateSprite() {
			bm.XY(body.X(), body.Y()) //can simplify?
			bm.rotation = body.rot() + startingRotation
		}
	}, '-') // what is this negative doing ?????
	return body
}
b.mid = function () {
	var b = this, w = b.W()
	return b.XY(
			w.w / 2,
			w.h / 2
	)
	function alt() {
		b.mid = function () {
			var b = this, w = b.wor()
			return b.XY(w.w / 2, w.h / 2)
		}
	}
}
b.bindSprite2 = function (obj, startingRotation, x, y) {
	//takes any display object.  right now, just used for shapes
	//because bindSprite fetches the bm's by string.
	//but when i set up preloader, then i would use this i suppose :)
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var body = this,
			stage = body.GetWorld().stage
	//  stage.A( displayObject = obj )
	startingRotation = N(startingRotation) ? startingRotation : 0
	body.sprites = body.sprites || []
	body.sprites.push(obj)
	body.sprite = obj
	body.sprite.a2(stage)
	//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
	cjs.tick(function () {
		if (!body.sprite) {
			return
		}
		_.each(body.sprites, function (sprite) {
			sprite.XY(
					body.X() + (x || 0),
					body.Y() + (y || 0)
			)
			sprite.rotation = body.rot() + startingRotation
		})
	})
	return body
}
b.p = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.p(a, b, c, d)
	}
	return this
}
b.s = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.s(a, b, c, d)
	}
	return this
}
b.centerScale = function (scale) {
	var body = this
	body.stg().sXY(scale)
			.X(300 - ((body.X() - 300) * scale))
			.Y(150 - ((body.Y() - 150)) * scale)
	return this
}
b.color = function (c1, c2) {
	c1 = c1 || 'b';
	c2 = c2 || c1
	_.each(this.fixts(), function (f) {
		f.color(c1, c2)
	})
}
b.constF = function (x, y) {
	var b = this
	$t(function () {
		b.F(x, y)
	})
	return b
}
b.warp = function (p) {
	var p = this
	$t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return this
}
b.H = function (arg) {
	var g = G(arguments),
			arg = g[0],
			b = this,
			len = length(g)
	if (U(arg)) {
		return b
	}
	if (A(g[0]) && U(g[1])) {                                       //passing a single array, suggest MULTIPLE fixts //[f1,f2,..]
		_.e(g[0], function (a) {
			if (g.n) {
				a.push('-')
			}
			b.H.apply(b, a)
		})
	}
	else if (S(g[0]) && A(g[1]) && U(g[2])) {                                             //[col,[f1,f2,..]]
		_.each(g[1], function (f) {
			if (b2d.isFD(f)) {
				b.f(f).C(g[0])
			}
			else {
				if (!S(f[0])) {
					f.unshift(g[0])
				}                                     //f= _.map(f, function(a){return a})
				if (b2d.isFD(f[1])) {
					b.f(f[1]).C(f[0])
				} else {
					b.H.apply(b, f)
				}
			}
		})
	}
	else if (b2d.isFD(g[0])) {
		b.f(g[0])
	}                                                   //fixtDef
	else if (S(g[0]) && b2d.isFD(g[1])) {
		b.f(g[1]).C(g[0])
	}                               //['color', fixtDef]
	else if (O(g[1])) {  //  if(g.n){g.push('-')}  //  b.fig(g)
		o = S(g[0]) ? {c: _.f(g), v: _.r(g)} : {v: g}
		if (g.n) {
			o.s = 1
		}
		b.fig(o)
	}
	
	// else if(O(g[0])){$l('o');o=g[0]
	//    if(o.t=='c'){  b.cir(o) }}
	else if (len == 1 || len == 3) {
		o = {c: g[0], r: g[1], x: g[2], y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	else {
		if (g.n) {
			g.push('-')
		}
		;
		b.RECT.apply(b, g)
	}//rect
	function length(arr) {
		var len = arr.length
		if (S(_.first(arr))) {
			len--
		}
		if (S(_.last(arr))) {
			len--
		}
		return len
	}
	
	return b
}
b.$h = function () {
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}