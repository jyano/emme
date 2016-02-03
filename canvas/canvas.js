cx = x = ctx = CanvasRenderingContext2D.prototype
cv=el = $.fn
_canText = function (el) {
	el.font = function (font) {
		this.context.font = HTML5.font(font)
		return this
	}
	el.strokeText = function (t, X, Y) {
		var g = G(arguments),
				t = g[0],
				X = g[1] || 100,
				Y = g[2] || X
		this.context.strokeText(t, X, Y)
		return this
	}
	el.fillText = function (t, X, Y) {
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
	el.measureText = el.measure = function (t) {
		return this.context.measureText(t)
	}
	el.textWidth = function (t) {
		return parseInt(this.measureText(t).width)
	}
	el.centerHorizontalText = function (text, height) {
		this.fillText(text,
				this.W() / 2 - this.textWidth(text) / 2,
				height
		)
		return this
	}
	return el
}
$.fn.ctx = $.fn.cx = function () {
	return this[0].getContext('2d')
}
$.cx = function () {
	return $.c.apply($, arguments).ctx()
}
 
$.fn.Cv = $.fn.Can = function () {
	var c
	c = $.c.apply($, G(arguments))
	this.A(c)
	return c
}
$.c = $.can = function (c, width, h, x, y) {
	var g = G(arguments), o, el
	o = g.S_ ?
	{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
	{w: g.f, h: g.s, x: g.t, y: g[3]}
	o.w = o.w || 1200
	o.h = o.h || 600
	o.c = o.c || 'x'
	el = $('<canvas>')
	el.attr({width: o.w, height: o.h})
	el.C(o.c)
	if (N(o.x)) {
		el.abs(o.x, o.y)
	}
	if (g.p) {
		el.drag()
	}
	el.A().al(.8)
	el = $superCan(el)
	return el
}
$superCan = function (el) {
	var cv = el
	//superCanvas =
	el = $(el) //to be called internally by $.c //works on FIRST canvas in jquery obj
	var $cv = el
	el.canvas = el[0]
	el.context = el.canvas.getContext('2d')
	//if (O(window['cjs'])) {el.stage = new cjs.Stage(el.canvas)}
	_canBasic(el)
	_canIndex(el)
	return el
}
__C = function () {
	cv = $.c('y').drag()
	x = cv.ctx()
	return c = cv
}
_canIndex = function (el) {
	_canDrawImg(el)
	_canGrad(el)
	_canEvents(el)
	_canShadow(el)
	_canPixel(el)
	_canText(el)
	_canTransform(el)
	//_canDraw(el)
	//_canMug(el)
	return el
}

_canBasic = function (el) {
	el.cx = function () {
		return this[0].getContext('2d')
	}
	el.W = function (width) {
		var args = G(arguments)
		width = args[0]
		if (U(width)) {
			return this.attr('width')
		}
		if (args.N) {
			var dataUrl = this.toDataURL()
		}
		this.attr('width', width)
		if (args.N) {
			this.fit(dataUrl)
		}
		return this
	}
	el.H = function (height) {
		var args = G(arguments)
		height = args[0]
		if (U(height)) {
			return this.attr('height')
		}
		if (args.N) {
			var dataUrl = this.toDataURL()
		}
		this.attr('height', height)
		if (args.N) {
			this.fit(dataUrl)
		}
		return this
	}
	el.WH = function (w, h) {
		if (U(w)) {
			var width = this.W(),
					height = this.H()
			return {
				width: width, w: width,
				height: height, h: height
			}
		}
		h = h || w
		return this.W(w).H(h)
	}
	el.Z = function (d) {
		d = d || 5;
		return this.WH(d * 100, d * 100)
	}
	el.osL = el.offsetLeft = el.l = function (theOffset) {
		if (!theOffset) {
			return offsetLeft(x.q)
		}
		return parseInt(theOffset - x.offsetLeft())
	};
	//  el.ox=function(){return x.q.q.offset().left}
	el.osT = el.offsetTop = el.t = function (y) {
		if (!y) {
			return offsetTop(y.q)
		}
		;
		return parseInt(y - x.offsetTop())
	};
	//  el.oy=function(){return x.q.q.offset().top}
	el.img = $('<img>')
	el.cp = el.copy = function () {
		el.img.src(el.toDataURL())
		return el
	}
	el.ps = el.paste = function () {
		var g = G(arguments)
		if (!g.n) {
			el.clearRect()
		}
		if (g.p) {
			el.fit(el.img)
		}
		else {
			el.draw(el.img.src())
		}
	}
	el.S = el.save = function () {
		el.context.save()
		return el
	}
	el.R = el.restore = function () {
		el.context.restore()
		return el
	}
	el.al = el.globalAlpha = el.alpha = el.op = function (alpha) {
		//dont mix up with element/jquery alpha //maybe opacity for element and alpha for canvas?
		if (U(alpha)) {
			return this.context.globalAlpha
		}
		this.context.globalAlpha = alpha
		return this
	}
	return el
}
$.tEl = function (a, b, c) {
	if (O(a)) {
		a = O(a.e) ? a.e : O(a.c) ? a.c : a
		a = $(a)[0]
		if (_.isElement(a)) {
			return a
		}
	}
}
$.tC = $.tCan = function (a) {
	if (_.isObject(a = $.tEl(a) || a)) {
		return a.canvas ? a.canvas :
				s$(a.toString()).contains('Canvas') ? Q(a)[0] : 0
	}
}
$.iC = $.isCan = function (can) {
	if (O(can)) {
		return $(can)[0].constructor.name == "HTMLCanvasElement"
	}
}
//can apps
cx = x = ctx = CanvasRenderingContext2D.prototype
cx._ = x.temp = function (fn) {
	this.S();
	_.b(fn, this)();
	return this.R()
}
// ctx canvas
cx.cv = x.cv0 = function () {
	return this.canvas
}
cx.$cv = x.$ = function () {
	return $(this.cv())
}
cx.dU = x.tDU = x.u = function () {
	return this.cv().toDataURL()
}
cx.H = function () {
	return this.canvas.height
}
cx.W = function () {
	return this.canvas.width
}
//  color 
cx.b=cx.bP=function(){
this.beginPath()
return this
}

x.S = function () {
	this.save();
	return this
}
x.R = function () {
	this.restore();
	return this
}
_canEvents = function (el) {
	el.$ = function (func) {
		el.click(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.$$ = function (func) {
		el.dblclick(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.over = el.MV = function (func) {
		el.mouseover(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.out = el.MO = function (func) {
		el.mouseout(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.enter = el.ME = function (func) {
		el.mouseenter(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.leave = el.ML = function (func) {
		el.mouseleave(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.up = el.MU = function (func) {
		el.mouseup(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.move = el.MM = function (func) {
		el.mousemove(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.down = el.MD = function (func) {
		el.mousedown(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	return el
}
$.fn.drag = $.fn.drag || function () {
	return this
}
function plus() {
	el.tick = function () {
		var ctx = this.ctx()
		ctx.tick.apply(ctx, arguments)
		return this
	}
	x.jD = function (img, p1, p2, p3, p4) {
		var x = this, i = new Image
		$(i).load(function (i) {
			D(p4) ? x.drawImage(i.target, p1, p2, p3, p4) :
					D(p3) ? x.drawImage(i.target, p1, p2, p3, p3) :
							x.drawImage(i.target, p1 || 0, p2 || 0)
		})
		i.src = _.src(img)
		return i
	}
	el.mugX = function (m) {
		qP('/mug', {u: m}, function (m) {
			x.fit(m)
		})
		return x
	}
	$S.styCan = {canvas: {outline: 'red 10px dashed'}}
	$.c2 = function (w, y) {
		var c = $.c(w || 960, h || 200)
		c.id('canvas')
		c.k('canvas can')
		return c
	}
}
plus()
$cx$ = function (fn) {
	var cx = $.cx()
	Q(function () {
		var me = Q.get('me')
		var chicks = Q.get('chicks')
		var guy = Q.get('guy')
		fn(cx, me, guy, chicks)
	})
}

 CWS = CANWINDOWSIZED = function(){
	
	 cv= $.cv('r', window.innerWidth, window.innerHeight)
	
	cx = cv.gC() 
	 $s({bd: {M: 0}})
	 rad = 10
	cv.on('mousedown', function(e){
		var x = e.clientX //better than offsetX!
		var y = e.clientY 
		cx.dot(x, y )
		cx.f('y')
		cx.f()
	})
	 //cx.arc(100,100,50,0,2* M.PI)
}

cx.cir=function(x,y,rad){var cx=this
	cx.b()
	rad = N(rad,50)
	cx.arc(x, y, rad, 0, 2 * M.PI)
}
cx.dot=function(x,y,rad){
	rad = N(rad, 8)
	return this.cir(x,y,rad)
} 