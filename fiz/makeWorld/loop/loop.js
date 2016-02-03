w.DDD = function () {
	this.DrawDebugData();
	return this
}
w.SDD = function (dD) {
	this.SetDebugDraw(dD);
	return this
}
w.step = function (time, a, b) {
	var w = this
	w._step = function () {
		var args = G(arguments)
		this.Step.apply(this, args)
		return this
	}
	return this._step(time, N(a, 8), N(b, 5))
}
w.draw = w.stepDraw = function (time, a, b) {
	// = w.N = w.go
	time = N(time, 1 / 60)
	return this.step(time, a, b).DDD().CF()
}
w.bug = function (id) {
	var can, ctx
	can = id ? $("#" + id)[0] : $0("#canvas")
	ctx = can.getContext("2d")
	return this.SDD(
			$dD().ctx(ctx).sc(20).fAl(0.5).lT(1).SF(bx.DD.hBit))
}
w.loop = function (time, b, c) {
	//= w.ev
	var w = this, g = G(arguments)
	_.ev(time = N(time, 1 / 60), function () {
		w.stepDraw(time, b, c)
	})
	return w
}
w.CF = function () {
	this.ClearForces();
	return this
}
w.step = function (time, a, b) {
	var w = this
	w._step = function () {
		var args = G(arguments)
		this.Step.apply(this, args)
		return this
	}
	return this._step(time, N(a, 8), N(b, 5))
}
w.draw = w.stepDraw = function (time, a, b) {
	// = w.N = w.go
	time = N(time, 1 / 60)
	return this.step(time, a, b).DDD().CF()
}
w.loop = function (time, b, c) {
	//= w.ev
	var w = this, g = G(arguments)
	_.ev(time = N(time, 1 / 60), function () {
		w.stepDraw(time, b, c)
	})
	return w
}
w.u = function (o) {
	var w = this
	setInterval(function () {
		w.draw(1 / 60)
		if (F(o.cb)) {
			o.cb()
		}
		w.s.update()
	}, 1000 / 60)
	return w
}
  