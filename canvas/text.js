textAlign=cx.tA = function () {
}
textBaseline= cx.tB = cx.Bl = function () {
}
cx.sT= cx.strTxt = function (t, X, Y) {var cx=this, g = G(arguments)
	var t = g[0]
	var X = g[1] || 100
	var Y = g[2] || X
	cx.strokeText(t, X, Y)
	return cx
}

cx.fo = cx.F = function () {
	var g = G(arguments), o
	o = {f: g.f}
	if (g.N_) {
		o.f += 'px ' + (g.n ? 'Verdana' : 'Georgia')
	}
	this.font = o.f
	return this
}
cx.fo = function (font) {
	this.context.font = HTML5.font(font)
	return this
}
cx._fT = function () {
	this.fillText.apply(this, arguments);
	return this
}
cx.fT = function (x, y, t) {
	cx_fillText = function (t, X, Y) {
		var g = G(arguments),
				t = g[0],
				X = g[1] || 100,
				Y = g[2] || X
		if (g.p) {
			this.tx(t, X, Y, '-')
			this.tx(t, X, Y)
		}
		else this.context.fillText(t, X, Y)
		return this
	}
	var cx = this, g = G(arguments)
	g.N_ ?
			cx._fT(g.t, g.f, g.s) :
			cx._fT(g.t, cx.W() / 2, 200)
	return cx
}
cx.t = cx.T = function () {

//x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
	var g = G(arguments), x = this, o, t
	o = g.S ? {t: g.f, x: g.t, y: g[3]} : // ONLY a str (so not to be confused with color)
			S(g.t) ? {c: g.f, f: g.s, t: g.t, x: g[3], y: g[4]} :
					g.N_ ? {f: g.f, t: g.s, x: g.t, y: g[3]} :
							S(g.s) ? {c: g.f, t: g.s, x: g.t, y: g[3]} :
							{t: g.f, x: g.s, y: g.t}
	o.x = N(o.x, x.W() / 2)
	o.y = N(o.y, 200)
	if (o.c) {
		x.c(o.c, o.c)
	}
	if (o.f) {
		g.n ?
				x.F(o.f, '-') :
				x.F(o.f)
	}
	x.fT(o.t, o.x, o.y)
	return x
}


 
function alpha(){
	x.mL = cx.m = cx.meaTx = cx.measureText = el.measure = function (t) {
		return this.context.measureText(t)
	}
	cx.tW = cx.txtWd = function (t) {
		return parseInt(this.measureText(t).width)
	}
	cx.centerHorizontalText = function (text, hei) {
		var cx = this
		cx.fT(text,
				cx.W() / 2 - cx.tW(text) / 2,
				hei
		)
		return cx
	}
}
 