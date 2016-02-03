w.dbX = function () {
	var w = this
	w.line(0, 0, w.W(), w.H(), '+')
	w.line(0, w.W(), w.H(), 0, '+')
	if (N(w.w) && N(w.h)) {
		w.line(0, 0, w.w, w.h)
		w.line(0, w.W(), w.H(), 0)
	}
}
ct.reset = function () {
	alert('ct.reset')
	this.St().removeAllChildren()
	T.removeAllListeners()
}
w.dbCross = function (x, y) {
	var w = this, c = w.cent()
	x = N(x) ? x : c.x
	y = N(y) ? y : c.y
	w.dr('t', -10 + x, -140 + y, 20, 300, '-')
	w.dr('t', -150 + x, -10 + y, 300, 20, '-')
	w.dot('r', x, y)
	cross = function () {
		r = w.S(600, 300, 'r', 300, 100, 0, 0, 30)
		b = w.S(600, 300, 'b', 300, 100).rt(-35)
	}
	return w
}   

w.devGrid = function () {
	var w = this
	_.t(12, function (i) {
		w.l(i * 200, 0, i * 200, w.h)
		w.l(i * 200, 0, i * 200, w.h, '-')
		w.l(0, i * 200, w.w, i * 200)
		w.l(0, i * 200, w.w, i * 200, '-')
	})
	return w
}

w.show = function (fn) {
	var w = this, g = G(arguments)
	_.ev(.2, function () {
		w.pen(S(fn) ? window[fn] : fn())
	})
	return w
}
w.dev = function () {
	var w = this,
			d = $.div('t', 400, 600).abs(1200, 0).A(),
			d1 = $.div('x', 400, 600).abs(1600, 0).A()
	d.A($.h1('world stats'))
	d1.A($.h1('body stats'))
	return w
}

w.mark = function () {
	var w = this
	w.C('z')
	_.times(50, function (i) {
		w.S(i * 200, 0, 'w', 1, 10000).sensor(true)
	})
	_.times(50, function (i) {
		w.S(0, i * 200, 'w', 10000, 1).sensor(true)
	})
	return w
}
w.back = function () {
	var w = this,
			back = w.s.back
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}


b.horizCenter = function () {
	return this.X(this.wor().s.W() / 2)
}
 