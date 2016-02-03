$.fn.md = function (l) {
	var c = this
	c.mousedown(function (e) {
		l(e.clientX, e.clientY)
	})
	return c
}
$.fn.mu = function (l) {
	var c = this
	c.mouseup(function (e) {
		l(e.clientX, e.clientY)
	})
	return c
}
$.fn.mm = function (l) {
	$l('mU')
	var c = this
	c.mousemove(function (e) {
		l(e.clientX, e.clientY)
	})
	return c
}
$.fn.$$ = $.fn.dblclick
upStart()
downEnd()
move()
function upStart() {
	$.mu = function (fn) {
		$('body').on('mouseup', fn);
		return $
	}
	$.mu_ = function (fn) {
		$('body').off('mouseup', fn);
		return $
	}
	$.ts = function (fn) {
		$('body').on('touchstart', fn);
		return $
	}
	$.ts_ = function (fn) {
		$('body').off('touchstart', fn);
		return $
	}
	$.U = function (fn) {
		return $.mu(fn).ts(fn)
	}
	$.U_ = function (fn) {
		return $._mu(fn)._ts(fn)
	}
}
function downEnd() {
	$.md = function (fn) {
		$('body').on('mousedown', fn);
		return $
	}
	$.md_ = function (fn) {
		$('body').off('mousedown', fn);
		return $
	}
	$.te = function (fn) {
		$('body').on('touchend', fn);
		return $
	}
	$.te_ = function (fn) {
		$('body').off('touchend', fn);
		return $
	}
	$.D = function (fn) {
		return $.md(fn).te(fn)
	}
	$.D_ = function (fn) {
		return $.md_(fn).te_(fn)
	}
}
function move() {
	$.mm = function (fn) {
		$('body').on('mousemove', fn);
		return this
	}
	$.mm_ = function (fn) {
		$('body').off('mousemove', fn)
		return $
	}
	$.tm = function (fn) {
		$('body').on('touchmove', fn)
		return $
	}
	$.tm_ = function (fn) {
		$('body').off('touchmove', fn);
		return this
	}
	$.M = function (fn) {
		return $.mu(fn).tm(fn)
	}
	$.M_ = function (fn) {
		return $.mu_(fn).tm_(fn)
	}
}
clicks()
function clicks() {
	$.off = function () {
		var dc = $(document)
		dc.off.apply(dc, arguments)
		return $
	}
	$.$ = function (f) {
		return $(document).on('click', _v(f))
		/*
		 $.$=function(){
		 var b=$('html')
		 b.click.apply(b, arguments)
		 return $
		 }*/
	}
	$.click = m$ = function (f) {
		return $(document).on('click', _v(f))
	}
	$.dblclick = m$$ = function (f) {
		return $(document).on('dblclick', _v(f))
	}
	$.fn.mCl = $.fn.cl = $.fn.$ = function (fn) {
		return this.click(fn)
	}
	$.fn.m = function (o) {
		var e = this
		if (o.mD) {
			e.mD(o.mD)
		}
		if (o.mU) {
			e.mD(o.mU)
		}
		if (o.pM) {
			e.pM(o.pM)
		}
		return e
	}
	$.fn.xPrp = function () {
		this.on('mousedown', function (e) {
			e.stopPropagation()
		})
		return this
	}
}
$.on = function () {
	var dc = $(body) // document ???
	dc.on.apply(dc, arguments)
	return $
}
$.$$ = function (f) {
	return $(body).on('dblclick', _v(f)) // document??
	//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
}
function worldTouch() {
	$.ts(function (e) {
		w._mD = 1
		$mXY(e)
		$.touchmove($mXY)
		function $mXY(e) {
			$l('mXY')
			var touch = e.originalEvent.touches[0]
			mX = (touch.clientX - w.x) // / 30
			mY = (touch.clientY - w.y) // / 30
		}
	})
	$.te(function () {
		w._mD = 0
	})
}
$.fn.mU = function (l) {
	var q = this
	q.mouseup(function (e) {
		l(e.clientX, e.clientY)
	})
	return q
}
short()
function short() {
	$.oMM = $.fn.mM= function (fn) {
		$.mm(function (e) {
			fn(e.clientX, e.clientY, e)
		});
		return $
	}
	$.oMD = $.fn.mD = function (fn) {
		$.md(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return $
	}
	$.oMU = function (fn) {
		$.mu(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return $
	}
}
$.fn.pM = function (l) {
	var c = this
	c.pressmove(function (e) {
		l(e.clientX, e.clientY)
	})
	return c
}
$.fn.mp = $.fn.mousePoint = function (e, scale) {
	scale = N(scale) ? scale : 1
	return V(e.pageX / scale, e.pageY / scale)
}
$.fn.pm = $.fn.pressmove = function (func) {
	var mouse_pressed
	this.mousedown(function () {
		mouse_pressed = true
	})
	this.mouseup(function () {
		mouse_pressed = false
	})
	this.mousemove(function (e) {
		if (mouse_pressed) {
			func(e)
		}
	})
	return this
}
$.fn.pM = function (l) {
	var c = this
	c.pressmove(function (e) {
		l(e.clientX, e.clientY)
	})
	return c
}
$.fn.dg = $.fn.drag = function () {
	this.A()
	
	this.each(function () {
		$(this).css('top', $(this).position().top)
		$(this).css('left', $(this).position().left)
	})
	
	this.P('a')
	this.on('mousedown', function (e) {
		var el = $(this)
		var offset = el.offset(),
				deltaX = e.pageX - offset.left,
				deltaY = e.pageY - offset.top
		$('html').on('mousemove', function (e) {
			var x = e.pageX - deltaX,
					y = e.pageY - deltaY
			el.left(x)
			el.top(y)
		}).on('mouseup', function () {
			$(this).off()
		})
	})
	//touchDrg(element)
	return this
}

$.scroll = function (a) {
	return $(window).scroll(a || function () {
		$('body').C('*')
	})
}
$.fn.hv = $.fn.hover
$.tap = function (func) {
	this('body').on('keydown mousedown', func);
	return this
}
$.fn.fc = $.fn.focus
KEYOB = KEYOBJ = {
	up: 38, u: 38,
	down: 40, d: 40,
	left: 37, l: 37,
	right: 39, r: 39,
	space: 32, s: 32,
	enter: 13, e: 13
}
$.kD = function self(key, fn) {
	if (O(key)) {
		_.e(key, function (fn, k) {
			if (s$(k).isUpper()) {
				$.kU(k.toLowerCase(), fn)
			}
			else {
				$.kD(k, fn)
			}
		})
		return
	}
	if (KEYOB[key]) {
		key = KEYOB[key]
	}
	$('body').on('keydown', function (e) {
		if (e.which == key) {
			fn(e, $.K)
		}
	})
}
$.kU = function (key, funk) {
	if (KEYOBJ[key]) {
		key = KEYOBJ[key]
	}
	$('body').on('keyup', function (e) {
		if (e.which == key) {
			funk(e, $.K)
		}
	})
}
$.K = {}
$.space = function (fn) {
	return $.kD('space', fn)
}
KEYS = WHYQ = function () {
	cjs.Keys.l = cjs.Keys.left = false
	cjs.Keys.r = cjs.Keys.right = false
	cjs.Keys.u = cjs.Keys.up = false
	cjs.Keys.d = cjs.Keys.down = false
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		cjs.Keys.l = cjs.Keys.left = false
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		cjs.Keys.l = cjs.Keys.left = true
		cjs.Keys.dir = 'left'
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		cjs.Keys.l = cjs.Keys.left = true
		cjs.Keys.dir = 'left'
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		cjs.Keys.r = cjs.Keys.right = true
		cjs.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		cjs.Keys.r = cjs.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		cjs.Keys.u = cjs.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		cjs.Keys.u = cjs.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		cjs.Keys.d = cjs.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		cjs.Keys.d = cjs.Keys.down = false
	})
}
$.kD('l', function () {
	if ($.test) {
		$l('left pressed')
	}
	$.K.l = 1
	$.K.L = 0
	$.K.dir = 'left'
})
$.kU('l', function () {
	if ($.test) {
		$l('left lifted')
	}
	$.K.l = false
	$.K.l = 0;
	$.K.L = 1
})
$.kD('r', function () {
	if ($.test) {
		$l('right pressed')
	}
	$.K.r = 1
	$.K.dir = 'right'
	$.K.R = 0
})
$.kU('r', function () {
	if ($.test) {
		$l('right lifted')
	}
	$.K.r = 0;
	$.K.R = 1
})
$.kD('u', function () {
	if ($.test) {
		$l('up pressed')
	}
	$.K.u = 1;
	$.K.U = 0
})
$.kU('u', function () {
	if ($.test) {
		$l('up lifted')
	}
	$.K.u = 0;
	$.K.U = 1
})
$.kD('d', function () {
	if ($.test) {
		$l('down pressed')
	}
	$.K.d = 1;
	$.K.D = 0
})
$.kU('d', function () {
	if ($.test) {
		$l('down lifted')
	}
	$.K.d = 0;
	$.K.D = 1
})
$.wh = function (a, b) {
	return D(b) ? a.which == b : a.which
}
function keys1() {
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		$.K.l = 1
		$.K.L = 0
		$.K.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		$.K.l = false
		$.K.l = 0;
		$.K.L = 1
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		$.K.r = 1
		$.K.dir = 'right'
		$.K.R = 0
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		$.K.r = 0;
		$.K.R = 1
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		$.K.u = 1;
		$.K.U = 0
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		$.K.u = 0;
		$.K.U = 1
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		$.K.d = 1;
		$.K.D = 0
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		$.K.d = 0;
		$.K.D = 1
	})
}
	 