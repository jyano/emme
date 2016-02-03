function tween() {
	w.iGP = tw.ignore
}
w.ps = tw.pos
b.p = b.play = function (a, b, c, d) {
	var bd = this
	if (O(bd.sp())) {
		bd.sp().p(a, b, c, d)
	}
	return bd
}
b.p = b.play = function (a, b, c, d) {
	if (O(this.sp())) {
		this.sp().p(a, b, c, d)
	}
	return this
}
b.s = b.stop = function (a, b, c, d) {
	if (O(this.sp())) {
		this.sp().s(a, b, c, d)
	}
	return this
}
//sprote
b.sp = function () {
	//!!!$l('b.sp')
	var b = this, g = G(arguments), ch
	if (b.gx && b.gx.children) {
		ch = g.p ? b.gx.children : g.n ? b.gx.children[0] : _.l(b.gx.children)
		if (g.u) {
			return ch
		}
		if (g.F_) {
			_.e(ch, g.f);
			return this
		}
	}
}
b.s = b.stop = function (a, b, c, d) {
	if (O(this.sp())) {
		this.sp().s(a, b, c, d)
	}
	return this
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
w.pack = w.PackThruster = function (ani) {
	var th = w.th(600, 500, 'b', 100).C("X").r(1).fR()
	th.Sp(Pack, 0, 0, .8)
	return th.p(ani || 'f1')
}
b._BOX_ = function (wd, ht, x, y) {
	var b = this
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var f = b.f($rF(wd, ht, x, y)).mS().de(.00000001)
	var r = f.sprite = $r2Gx(wd, ht, x, y)
			.XY(b.X(), b.Y()).al(.3).a2(w.st)
	$t(function () {
		r.rt(b.rt()).XY(b.X(), b.Y())
	})
	return f
}//b.rSn = b.recSen = b.rectSensor = b.RECTSEN =
//specific to talkjs
w.spB = w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!
	x = N(x) ? x : 300;
	y = N(y) ? y : x //weird defaults - not intuitive
	var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.st)
	if (N(scale)) {
		sprite.sXY(scale)
	}
	return this.box(x, y, 100, 100).bindSprite2(
			sprite
	)
}
w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!
	x = N(x) ? x : 300;
	y = N(y) ? y : x //weird defaults - not intuitive
	var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.s)
	if (N(scale)) {
		sprite.sXY(scale)
	}
	return this.box(x, y, 100, 100).bindSprite2(
			sprite
	)
}