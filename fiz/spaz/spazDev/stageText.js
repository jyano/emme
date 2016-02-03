w.pen = function () {
	this.st.pen.apply(this.st, arguments)
	return this
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.pen = function (t, f, c) {
	var g = G(arguments), o
	if (this._T) {
		this._T.rm();
		this._T = null
	}
	o = {y: 100}
	o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
	this._T = this.i.T(t, f, c)
	this._T.XY(o.x, o.y)
	return this._T
}
w.pen = function (t, f, c) {
	var g = G(arguments), o
	if (this._T) {
		this._T.rm();
		this._T = null
	}
	o = {y: 100}
	o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
	this._T = this.i.T(t, f, c)
	this._T.XY(o.x, o.y)
	return this._T
}
w.pen = function () {
	this.st.pen.apply(this.st, arguments)
	return this
	
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.pen = function (t, f, c) {
	var g = G(arguments), o
	if (this._T) {
		this._T.rm();
		this._T = null
	}
	o = {y: 100}
	o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
	this._T = this.i.T(t, f, c)
	this._T.XY(o.x, o.y)
	return this._T
}

w.chalk = function () {
	var w = this, g = G(arguments)
	w.i.chalk.apply(w.i, g)
	return w
}
w.ch = w.chalk = function () {
	this.st.chalk.apply(this.st, arguments)
	return this
}
w.chalk = function () {
	var w = this, g = G(arguments)
	w.i.chalk.apply(w.i, g)
	return w
}
w.chalk = function () {
	var w = this, g = G(arguments)
	w.i.chalk.apply(w.i, g)
	return w
}

w.l = w.dl = function () {
	var w = this, g = G(arguments), o, i
	o = S(g[0]) ?
	{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
			:
	{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
	i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
	o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
	return i.h()
			.c(10, o.c)
			.mt(o.x1, o.y1)
			.lt(o.x2, o.y2).K('dev line')
}
w.l = w.dl = function () {
	var w = this, g = G(arguments), o, i
	o = S(g[0]) ?
	{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
			:
	{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
	i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
	o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
	return i.h()
			.c(10, o.c)
			.mt(o.x1, o.y1)
			.lt(o.x2, o.y2).K('dev line')
}
w.l = w.dl = function () {
	var w = this, g = G(arguments), o, i
	o = S(g[0]) ?
	{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
			:
	{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
	i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
	o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
	return i.h()
			.c(10, o.c)
			.mt(o.x1, o.y1)
			.lt(o.x2, o.y2).K('dev line')
}

w.fl = w.flash = function () {
	this.st.flash.apply(this.st, arguments)
	return this
}
w.flash = function () {
	var w = this, s = w.s
	s.flash.apply(s, arguments)
	return w
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.fl = w.flash = function () {
	this.st.flash.apply(this.st, arguments)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.flash = function () {
	var w = this, s = w.s
	s.flash.apply(s, arguments)
	return w
}
w.flash = function () {
	var w = this, s = w.s
	s.flash.apply(s, arguments)
	return w
}
w.pop = function (t) {
	var w = this
	t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
	t.tw([{a: .5, sxy: .5}, 4000])
	_.in(4, function () {
		t.rm()
	})
	return this
}
w.pop = function (t) {
	var w = this
	t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
	t.tw([{a: .5, sxy: .5}, 4000])
	_.in(4, function () {
		t.rm()
	})
	return this
}
w.pop = function (t) {
	var w = this
	t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
	t.tw([{a: .5, sxy: .5}, 4000])
	_.in(4, function () {
		t.rm()
	})
	return this
}
w.show = function (fn) {
	var w = this, g = G(arguments)
	_.ev(.2, function () {
		w.pen(S(fn) ? window[fn] : fn())
	})
	return w
} 