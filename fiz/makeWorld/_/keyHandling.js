$.K = function (o) {
	if (!O(o)) {
		return
	}
	if (F(o.u)) {
		$t(function () {
			if ($.K.u) {
				o.u($.K.u)
			}
		})
	}
	
	if (F(o.d)) {
		$t(function () {
			if ($.K.d) {
				o.d($.K.d)
			}
		})
	}
	if (F(o.l)) {
		$t(function () {
			if ($.K.l) {
				o.l($.K.l)
			}
		})
	}
	if (F(o.r)) {
		$t(function () {
			if ($.K.r) {
				o.r($.K.r)
			}
		})
	}
}

$.kD = $.k = $.key = function (k, fn) {
	if (O(k)) {
		_.e(k, function (fn, k) {
			if (s$(k).isUpper()) {
				$.kU(k.toLowerCase(), fn)
			}
			else {
				$.kD(k, fn)
			}
		})
		return
	}
	if (KEYOB[k]) {
		k = KEYOB[k]
	}
	$('body').on('keydown', function (e) {
		if (e.which == k) {
			fn(e, $.K)
		}
	})
}
$.kU = function (k, fn) {
	if (keyObj[k]) {
		k = keyObj[k]
	}
	$('body').on('keyup', function (e) {
		if (e.which == k) {
			fn(e, $.K)
		}
	})
}

K = function (k, fn) {
	
	var g = G(arguments), o, key
	
	if (g.u) {if (K._loaded) {return}
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			K.l = $.K.l = $.K.left = true
			$.K.dir = 'left'
			K.l = 1;
			K.L = 0
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			K.l = $.K.l = $.K.left = false
			K.l = 0;
			K.L = 1
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			K.r = $.K.r = $.K.right = true
			$.K.dir = 'right'
			K.r = 1;
			K.R = 0
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = $.K.right = false
			K.r = 0;
			K.R = 1
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = $.K.up = true
			K.u = 1;
			K.U = 0
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = $.K.up = false
			K.u = 0;
			K.U = 1
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = $.K.down = true
			K.d = 1;
			K.D = 0
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = $.K.down = false
			K.d = 0;
			K.D = 1
		})
		K._loaded = 1
		return
	}
	
	if (O(k)) {
		if (g.p) {
			if (F(k.u)) {
				z(function () {
					if (K.u) {
						k.u(K.u)
					}
				})
			}
			if (F(k.d)) {
				z(function () {
					if (K.d) {
						k.d(K.d)
					}
				})
			}
			if (F(k.l)) {
				z(function () {
					if (K.l) {
						k.l(K.l)
					}
				})
			}
			if (F(k.r)) {
				z(function () {
					if (K.r) {
						k.r(K.r)
					}
				})
			}
		}
		else {
			_.e(k, function (fn, k) {
				K(k, fn)
			})
		}
		return
	}
	
	o = s$(k).isUpper() ?
	{on: 'keyup', k: k.toLowerCase()} :
	{on: 'keydown', k: k}
	if (g.p) {
		return z(function () {
			if (K[k]) {fn()}})}
	key = Key(o.k)
	
	
	return $('body').on(o.on, function (e) {
		if (e.which == key) {
			fn(e)
		}
	})
}

function Key(k) {
	var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
	return ob[k] ? ob[k] : k
}//helper shortcut
