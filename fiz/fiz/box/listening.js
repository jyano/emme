Wor = b2d.W = b2d.mW = b2d.makeWorld = makeWorld = mW = function (ops) {
	var width, height
	if (!O(ops)) {
		ops = {}
	}
	width = ops.W || 1200;
	height = ops.H || 600
	w = b2d.world(V(0, 0))
	cjs.watchKeys()
	w.st = w.stage = w.s = cjs.tripleStage('r', width, height)
	w.stage.back.A()
	w.stage.A()
	w.stage.HUD.A()
	w.canvas = w.stage.canvas;
	w.c = w.can = $(w.canvas)
	canvas = $(w.canvas).id('canvas')
	w.context = w.canvas.getContext('2d')
	setInterval(function () {
		w.step(1 / 60, 10, 10).clearForces()
		w.stage.update()
	}, 1000 / 60)
	w.gameW = w.st.canvas.width
	w.gameH = w.st.canvas.height
	return w
}
W = b2d.W = function (W, H, wW, wH) {
//cjs.Ticker.removeAllEventListeners() 
// w.show(function(){})//not working with scroll
	var o = N(H) ? {W: W, H: H, wW: wW, wH: wH} :
			N(W) ? {g: W} :
					A(W) ? _.x(H, {W: W[0], H: W[1], wW: W[2], wH: W[3]}) :
							O(W) ? W : {}
	o.W = o.W || 1200
	o.H = o.H || 600
	o.wW = o.wW || o.W
	o.wH = o.wH || o.H
	o.w = o.w == 0 ? 0 : o.w ? o.w : ['o', o.wW, o.wH]
	o.g = N(o.g) ? V(0, o.g) : o.g ? V(o.g) : V(0, 300)
	cjs.watchKeys()
	w = b2d.world(o.g);
	w.o = o
	if (o.z != false) {
		z()
	}
	w.gx(o).setBg(o)
			.dd(o).db()
			.startListening()
			.wMouse().wMouseJ(o)
			.walls(o)
			.u(o)
	w.worldW = w.w = o.wW
	w.worldH = w.h = o.wH
	w.gameW = w.W = o.W
	w.gameH = w.H = o.H
	w.wRatio = w.Ww = w.gameW / w.worldW
	w.hRatio = w.Hh = w.gameH / w.worldH
	w.wMultiple = 1 / w.wRatio
	w.hMultiple = 1 / w.hRatio
	function higher(a, b) {
		return a > b ? a : b
	}
	
	function lower(a, b) {
		return a > b ? b : a
	}
	
	w.minScale = w.minZoom = w.mS = 1 / lower(w.wMultiple, w.hMultiple);
	w._zoom = w._scale = 1;
	w.z = w._zoom
	w.halfW = w.hW = w.W / 2
	w.halfH = w.hH = w.H / 2
	return w
}
cjs.Keys = function (o) {
	alert('cjs.Keys')
	if (O(o)) {
		if (F(o.u)) {
			cjs.tick(function () {
				if (cjs.Keys.u) {
					o.u(cjs.Keys.u)
				}
			})
		}
		if (F(o.d)) {
			cjs.tick(function () {
				if (cjs.Keys.d) {
					o.d(cjs.Keys.d)
				}
			})
		}
		if (F(o.l)) {
			cjs.tick(function () {
				if (cjs.Keys.l) {
					o.l(cjs.Keys.l)
				}
			})
		}
		if (F(o.r)) {
			cjs.tick(function () {
				if (cjs.Keys.r) {
					o.r(cjs.Keys.r)
				}
			})
		}
	}
}
cjs.watchKeys = function () {
	alert('cjs.watchKeys')
	cjs.Keys.l = cjs.Keys.left = false
	cjs.Keys.r = cjs.Keys.right = false
	cjs.Keys.u = cjs.Keys.up = false
	cjs.Keys.d = cjs.Keys.down = false
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		cjs.Keys.l = cjs.Keys.left = true
		cjs.Keys.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		cjs.Keys.l = cjs.Keys.left = false
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
TESTWATCHKEYS = function () {
	z()
	$.test = true
	cjs.watchKeys()
}
KEYWATCH = function () {
	J = cjs
	$.test = true
	J.Keys.l = J.Keys.left = false
	J.Keys.r = J.Keys.right = false
	J.Keys.u = J.Keys.up = false
	J.Keys.d = J.Keys.down = false
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		J.Keys.l = J.Keys.left = false
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		J.Keys.r = J.Keys.right = true
		J.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		J.Keys.r = J.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		J.Keys.u = J.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		J.Keys.u = J.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		J.Keys.d = J.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		J.Keys.d = J.Keys.down = false
	})
}
 
function keys() {
	dO.keyControls = function (num) {
		var args = G(arguments),
				that = this
		if (args.P) {
			$.kD('left', function () {
				that.toL(num)
			})
			$.kD('right', function () {
				that.toR(num)
			})
		}
		if (args.N) {
			$.kD('up', function () {
				that.toU(num)
			})
			$.kD('down', function () {
				that.toD(num)
			})
		}
	}
	$.k = $.key = $.kD = function self(k, fn) {
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
	$.spc = function (fn) {
		return $.kD('space', fn)
	}
	K = function (k, fn) {
		var g = G(arguments), o, key
		if (g.u) {
			if (K._loaded) {
				return
			}
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
		o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
		if (g.p) {
			return z(function () {
				if (K[k]) {
					fn()
				}
			})
		}
		key = Key(o.k)
		return $('body').on(o.on, function (e) {
			if (e.which == key) {
				fn(e)
			}
		})
		function Key(k) {
			var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
			return ob[k] ? ob[k] : k
		}
	}
	$.K = function (o) {
		alert('$.K')
		if (!O(o)) {
			return
		}
		if (F(o.u)) {
			cjs.tick(function () {
				if ($.K.u) {
					o.u($.K.u)
				}
			})
		}
		if (F(o.d)) {
			cjs.tick(function () {
				if ($.K.d) {
					o.d($.K.d)
				}
			})
		}
		if (F(o.l)) {
			cjs.tick(function () {
				if ($.K.l) {
					o.l($.K.l)
				}
			})
		}
		if (F(o.r)) {
			cjs.tick(function () {
				if ($.K.r) {
					o.r($.K.r)
				}
			})
		}
	}
	cjs.watchKeys = function () {
		alert('cjs.watchKeys')
		$.K.l = $.K.left = false
		$.K.r = $.K.right = false
		$.K.u = $.K.up = false
		$.K.d = $.K.down = false
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = $.K.left = true
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = $.K.left = false
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = $.K.right = true
			$.K.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = $.K.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = $.K.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = $.K.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = $.K.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = $.K.down = false
		})
//$.space = function (fn) {return $.kD('space', fn)}
	}
	events = ['added',
		'mouseover', 'rollover', 'rollout', 'mouseout',
		'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
		'removed',
		'tick'
	]
	function KEYCONTROLSOB() {
		ob.keyControls = function (num) {
			var args = G(arguments),
					that = this
			if (args.P) {
				$.kD('left', function () {
					that.toL(num)
				})
				$.kD('right', function () {
					that.toR(num)
				})
			}
			if (args.N) {
				$.kD('up', function () {
					that.toU(num)
				})
				$.kD('down', function () {
					that.toD(num)
				})
			}
		}
	}
	
	function prevKeyFns() {
		$.k = $.key = $.kD = function self(k, fn) {
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
		$.spc = function (fn) {
			return $.kD('space', fn)
		}
		K = function (k, fn) {
			var g = G(arguments), o, key
			if (g.u) {
				if (K._loaded) {
					return
				}
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
			o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
			if (g.p) {
				return z(function () {
					if (K[k]) {
						fn()
					}
				})
			}
			key = Key(o.k)
			return $('body').on(o.on, function (e) {
				if (e.which == key) {
					fn(e)
				}
			})
			function Key(k) {
				var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
				return ob[k] ? ob[k] : k
			}
		}
	}
	
	$.K = function (o) {
		alert('$.K')
		if (!O(o)) {
			return
		}
		if (F(o.u)) {
			cjs.tick(function () {
				if ($.K.u) {
					o.u($.K.u)
				}
			})
		}
		if (F(o.d)) {
			cjs.tick(function () {
				if ($.K.d) {
					o.d($.K.d)
				}
			})
		}
		if (F(o.l)) {
			cjs.tick(function () {
				if ($.K.l) {
					o.l($.K.l)
				}
			})
		}
		if (F(o.r)) {
			cjs.tick(function () {
				if ($.K.r) {
					o.r($.K.r)
				}
			})
		}
	}
//alert
	cjs.watchKeys = function () {
		alert('cjs.watchKeys')
		$.K.l = $.K.left = false
		$.K.r = $.K.right = false
		$.K.u = $.K.up = false
		$.K.d = $.K.down = false
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = $.K.left = true
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = $.K.left = false
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = $.K.right = true
			$.K.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = $.K.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = $.K.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = $.K.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = $.K.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = $.K.down = false
		})
	}
//$.space = function (fn) {return $.kD('space', fn)}
}
function keyy() {
	cjs.Keys = function (o) {
		alert('cjs.Keys')
		if (O(o)) {
			if (F(o.u)) {
				cjs.tick(function () {
					if (cjs.Keys.u) {
						o.u(cjs.Keys.u)
					}
				})
			}
			if (F(o.d)) {
				cjs.tick(function () {
					if (cjs.Keys.d) {
						o.d(cjs.Keys.d)
					}
				})
			}
			if (F(o.l)) {
				cjs.tick(function () {
					if (cjs.Keys.l) {
						o.l(cjs.Keys.l)
					}
				})
			}
			if (F(o.r)) {
				cjs.tick(function () {
					if (cjs.Keys.r) {
						o.r(cjs.Keys.r)
					}
				})
			}
		}
	}
	cjs.watchKeys = function () {
		alert('cjs.watchKeys')
		cjs.Keys.l = cjs.Keys.left = false
		cjs.Keys.r = cjs.Keys.right = false
		cjs.Keys.u = cjs.Keys.up = false
		cjs.Keys.d = cjs.Keys.down = false
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			cjs.Keys.l = cjs.Keys.left = false
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
	TESTWATCHKEYS = function () {
		z()
		$.test = true
		cjs.watchKeys()
	}
	KEYWATCH = function () {
		J = cjs
		$.test = true
		J.Keys.l = J.Keys.left = false
		J.Keys.r = J.Keys.right = false
		J.Keys.u = J.Keys.up = false
		J.Keys.d = J.Keys.down = false
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			J.Keys.l = J.Keys.left = false
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			J.Keys.l = J.Keys.left = true
			J.Keys.dir = 'left'
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			J.Keys.l = J.Keys.left = true
			J.Keys.dir = 'left'
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			J.Keys.r = J.Keys.right = true
			J.Keys.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			J.Keys.r = J.Keys.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			J.Keys.u = J.Keys.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			J.Keys.u = J.Keys.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			J.Keys.d = J.Keys.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			J.Keys.d = J.Keys.down = false
		})
	}
	INPUTKEYS = function () {
		z()
		input = $.input().A()
		$.span('span ').C('y').A().id('spn')
		input.on('keypress', function (e) {
			$('#spn').text(
					$('#spn').text() + e.which
			)
		})
				.on('keyup', function (e) {
					if (e.which == 13) {
						$l('enter')
						$('body').C('*')
					}
				})
				.on('keydown', function (e) {
					var key = e.which, //why these nums?
							result = (key > 48 && key < 57) || ( key > 96 && key < 105) || (key == 8)
					$l('result: ' + result)
				})
	}
	INPUTUPDOWN = function () {
		$.input().A()
		onTextInputKeyup(function (e) {
			var dir = (parseInt(e.which) == 38) ? 'up'
					: (parseInt(e.which) == 40) ? 'down'
					: 'neither'
			$l(dir)
		})
		function onTextInputKeyup(func) {
			return $('input[type=text]').on('keyup', func)
		}
	}
	TESTWATCHKEYS = function () {
		z()
		$.test = true
		cjs.watchKeys()
	}
 

}
function listening() {
	w.startListening = function () {
		var w = this
		w.listen = w.sCL = w.SetContactListener
		b2d.listener = function () {
			return new b2.Dynamics.b2ContactListener
		}
		w.listener = w.listener || b2d.listener()
		w.beginHandlers = w.beginHandlers || []
		w.endHandlers = w.endHandlers || []
		w.listener.BeginContact = function (cx) {
			_.each(w.beginHandlers,
					function (func) {
						func(cx)
					})
		}
		w.listener.EndContact = function (cx) {
			_.each(w.endHandlers,
					function (func) {
						func(cx)
					})
		}
		w.listen(w.listener)
	}
	w.startKilling = function () {
		var w = this
		$t(function () {
			w.each(function (b) {
				if (b.is('destroy')) {
					b.K('destroyed')
					b.kill()
				}
			})
		})
		return w
	}
}
function collide() {
	b2d.world = b2d.W = function (a, b) {
		var w = new b2d.World(a, D(b) ? b : false)
		w.startListening()
		return w
	}
}
function dimensions() {
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;
	w.H2 = w.HH = w.hH = w.H / 2;
	w.hH = w.h / w.H;
	w.Ww = w.W / w.w;
	w.wW = w.w / w.W;
	w.Hh = w.H / w.h;
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
	//scale
	w.z = w.SCALE = 1
}
PRESOLVE = function () {
	b2d.mW()
	w.ba()
	cjs.tick(
			function () {
				if (STATE.newBall) {
					w.ba()
				}
				STATE.newBall = false
			})
	w.pre(function (contact, manifest) {
		c = contact;
		m = manifest
	})
	//second pam is really info about previous collision manfest?  may be usesless?!!!!
}
FIXROT = JUMP = CEN = LVW = SMASH = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b');
	var b1, b2
	// y and remote control fireball
	var y = w.y(300, 100, '+')
	farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
	nearMoon = w.D(400, 200, 'y', 100)
	T.t(function () {
		var lV = y.lVW(y.X(), y.Y()).mult(20)
		nearMoon.lV(lV.x, lV.y)
	})
	p = w.p(900, 400).cn('jump').cl(_.m(function () {
		w.D(300, 100, 'r', 5)
	}))
	sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
	sun.cl(function (f, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
		w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
}
PLAT = DOODLE = function () {
	W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
	var b1, b2
	plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
	pf = plat(900, 1700)
	// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
	function plat(x, y) {
		var g = G(arguments)
		if (g.O_) {
			g.e(function (g) {
				plat(g[0], g[1])
			});
			return
		}
		return w.S(x, y, 'o', 500, 40).K('pf')
	}
	
	p.K('p').tr()//.cl($.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
	p.cl(w._t, //when player coll roof,
			function () {
				w.C('z');
				w.G(1000)
			})
	//one way wall
	w.pre('pf', function (f, cx) {
		if (p.Y() - this.B().Y() > 10) {
			cx.en(0)
		}
	})
}
PRE = ONEWAYPLATFORM = OWP = ONE = function () {
	W(50).ball()
	p = w.p().con('thrust')
	pf = w.brick(300, 300, 500, 40).K('platform')
	$t(function () {
		p.rt(0)
	})
	//	w.pre(function (cx) {if (cx.w('platform', 'player')) {if (p.Y() > pf.Y()) {cx.disable()}}})
	w.preCl('platform', 'player', function (f1, cx) {
		if (p.Y() > pf.Y()) {
			cx.disable()
		}
	})
}
PRESOLVE = function () {
	W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
	var b1, b2
	plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
	pf = plat(900, 1700)
	// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
	function plat(x, y) {
		var g = G(arguments)
		if (g.O_) {
			g.e(function (g) {
				plat(g[0], g[1])
			});
			return
		}
		return w.S(x, y, 'o', 500, 40).K('pf')
	}
	
	p.K('p').tr()//.cl(_.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
	p.cl(w._t, //when player coll roof,
			function () {
				w.C('z');
				w.G(1000)
			})
	//one way wall
	w.pre('pf', function (f, cx) {
		if (p.Y() - this.B().Y() > 10) {
			cx.en(0)
		}
	})
}
PRESOLVE = function () {
	W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
	w.G(-100)
	var b1, b2
	plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1500])
	pf = plat(900, 1800)
	// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
	function plat(x, y) {
		var g = G(arguments)
		if (g.O_) {
			g.e(function (g) {
				plat(g[0], g[1])
			});
			return
		}
		return w.S(x, y, 'o', 500, 40).K('pf')
	}
	
	p.K('p').tr()//.cl(_.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
	p.cl(w._t, //when player coll roof,
			function () {
				w.C('z');
				w.G(1000)
			})
	//one way wall
	w.pre('pf', function (f, cx) {
		if (p.Y() - this.B().Y() > 10) {
			cx.en(0)
		}
	})
}
NORMAL = function () {
	W({W: 1500, H: 1200, g: 0}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 50),
			function (f, cx) {
				w.D(600, 300, 'g', 20).K('g').I(-cx.nX(300), cx.nY(300))
			})
	y.cl(w.S(900, 300, 'o', 50), function (f, cx) {
		w.D(600, 300, 'o', 20).K('o')
				.I(-cx.nX(300), cx.nY(300))
	})
	y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
	y1.cir('y', 40).r(.8)
	Ball = _.mo(.5, function (n) {
		w.D(600, 200, 'o', 5).bit(0)
				.K('o').r(.9).I(n.x, n.y)
	})
	w.D(600, 300, 'o', 70).r(.8)
			.cl(function (f, cx) {
				if (cx.nX() || cx.nY()) {
					if (O(cx) && F(cx.n)) {
						Ball(cx.n(10000))
					}
				}
			})
	/*
	 //just copies lV
	 b=w.D(500,300,'b',50).d(1).K('b')
	 r = w.D(700,300,'r', 80).d(1)
	 w.b( function(cx){ cx.w('b', function(f){
	 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
	 else {r.lV( cx.lV(cx.b()))}})})
	 */
//w.pop('me absorbs energy of tims collision!'); $.in(4, function(){w.pop('gets actual v of bA')}); $.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
	NL0 = function () {
		W({W: 900, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40)
		y.fR().cn('thrust').warp().bS('me').cir('g', 50)
		w.S(200, 300, 'g', 100).cl(function (f, cx) {
			w.D(600, 300, 'g', 20).I(-cx.nX(300),
					cx.nY(300))
		})
	}
	NL = function () {
		W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
		y.cir('y', 50)
		y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
			w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
			w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
			w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
		})
	}
}
SICK = BBALL = MOONSOCCER = function () {
	W({W: 1500, H: 1200, g: 0, w: ''}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	greenBall = w.S(300, 300, 'g', 50)
	y.cl(
			greenBall,
			function (f, cx) {
				var bullet = w.D(600, 300, 'g', 20)
				bullet.K('g').I(
						-cx.nX(300),
						cx.nY(300)
				)
			}
	)
	y.cl(
			w.S(900, 300, 'o', 50), function (f, cx) {
				w.D(600, 300, 'o', 20).K('o').I(-cx.nX(300), cx.nY(300))
			})
	y.warp()
}
//y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
//y1.cir('y', 40).r(.8)
/*	Ball = _.m(.5, function (n) {
 w.D(600, 200, 'o', 5).bit(0)
 .K('o').r(.9).I(n.x, n.y)
 })
 w.D(600, 300, 'o', 70).r(.8)
 .cl(function (f, cx) {
 if (cx.nX() || cx.nY()) {
 if (O(cx) && F(cx.n)) {
 Ball(cx.n(10000))
 }
 }
 })
 /*
 //just copies lV
 b=w.D(500,300,'b',50).d(1).K('b')
 r = w.D(700,300,'r', 80).d(1)
 w.b( function(cx){ cx.w('b', function(f){
 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
 else {r.lV( cx.lV(cx.b()))}})})
 */
//w.pop('me absorbs energy of tims collision!'); _.in(4, function(){w.pop('gets actual v of bA')}); _.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
NL0 = function () {
	W({W: 900, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40)
	y.fR().cn('thrust').warp().bS('me').cir('g', 50)
	w.S(200, 300, 'g', 100).cl(function (f, cx) {
		w.D(600, 300, 'g', 20).I(-cx.nX(300),
				cx.nY(300))
	})
}
NL = function () {
	W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
		w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
		w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
		w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
	})
}
ERR = LCNOTFUNC = PT = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}
WCPT = WCP = MANIF = MNF = WORLDMANIFOLD = WMF = function () {
//WORLDCONTACTPOINT =
	W(40).st.chalk('world contact eazy')
	w.box(200, 500, 200, 50).K('x')
	w.box(200, 500, 200, 50).K('x')
	w.brick(200, 500, 200, 50).K('x')
	w.b(function (cx) {
		if (cx.w('x')) {
			w.st.dot(cx.pt())
		}
	})
	// cx.wM().m_points[0].m()
	// cx.w('x','x') works too
	//normal manifold contains all info...
	//...world manifold is helpful for getting locations	 
	// $l('num pts: ' + _.size(pts)) numPoints = 1000000; _.ev(function () {$l(numPoints)})// always 2
}
NORMAL = NML = function () {
	W({g: 0}).b(
			bgFn)
			.chalk('m:  worlManifold', 'n:  m.m_normal', 'p:  m.m_points[0].mult()')
	function bgFn(cx) {
		if (cx.w('tim', 'ball')) {
			w.dot('g', cx.wCxPt())
			worMan = cx.wM()
			norm = cx.no()
			collV = cx.V()
			w.dot('w', collV)
			//a3.I(n.x*10, n.y*10  )
			//a2.I(-n.x*20, -n.y*10  )
			//a1.I(-n.x*200, -n.y*100)
			M.abs(collV.x *= 30)
			M.abs(collV.y *= 30)
			//this gets th actual velocity of body A
			//at moment of collision !!!!!!!
			v = cx.a().lVW(cx.pt())
			$l(v)
			// w.dot(  v )
			me.lV(v.x, v.y)  // HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!
		}
	}
	
	w.bump(300, 300, 60).K('ball')
	a1 = w.bump(50, 545).K('ball')
	a2 = w.bump(1150, 50).K('ball')
	tim = w.ba(500, 300).bS('guy').K('tim').con('thrust')
	me = w.ba(700, 300).bS('me').K('me')
}
CXS = function () {
	W()
	var cenFx = $cF(80).K('cen')
	w.A($dB(500, 300), [
		cenFx,
		$rF(60, 290, 0, 40, 10).mS().K('sen1')
	]).aV(100)
	w.A($dB(700, 300), [cenFx, $rF(100, 200).mS().K('sen2')]).aV(100)
	w.cl('sen1', 'sen2', function () {
		w.ba()
	})
	//w.b(function(cx){if(cx.w('sen1','sen2')){w.flag('new')}}) 
	//w.on('new', function(){w.ball()})
}
WITH = WIT = function () {
	W()
	w.ba().K('ball')
	w.brik(500)
	w.b(function (cx) {
		if (cx.w('ball', 'brick')) {
			$l('hit')
		}
	})
}
POSTSOLVE = function () {
	W([1200, 600], {
		g: 10//g:50//,w:'='
	})
	// I want the dir of the tangent and its ratio to the impulse part!!!
	//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
	w.b_.fr(100000000000)
	w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
	y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
	w.D(200, 200, 'b', 20).r(1)
	w.D(900, 200, 'r', 100).r(1)
	//JASON YANOFSKI LISTEN TO YOU:
	//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
	// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
	// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
	//BUT YOU MAY HAVE REASON TO WANT TO
	//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
	imp = 0;
	tang = 0;
	sum = 0
	w.po(function (cx, i, t) {
		imp = i;
		tang = t
		if (first && M.avg(i + t) > 5) {
			sum = M.avg(i + t)
			first = 0
		}
	})
	w.b(function () {
		first = 1
	})
	w.show(function () {
		return imp + ' + ' + tang + ' = ' + sum
	})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
	w.D(400, 200, 'y', 50).d(.1).lV(10)
	w.D(200, 500, 'r', 40).d(1)
	w.D(200, 500, 'b', 25).d(100)
	w.D(800, 200, 'p', 10).d(1000).lV(-10)
}
POST = SMASHOUT = function () {
	W([1200, 600], {
		g: 10//g:50//,w:'='
	})
	// I want the dir of the tangent and its ratio to the impulse part!!!
	//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
	w.b_.fr(100000000000)
	w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
	y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
	w.D(200, 200, 'b', 20).r(1)
	w.D(900, 200, 'r', 100).r(1)
	//JASON YANOFSKI LISTEN TO YOU:
	//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
	// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
	// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
	//BUT YOU MAY HAVE REASON TO WANT TO
	//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
	imp = 0;
	tang = 0;
	sum = 0
	w.po(function (cx, i, t) {
		imp = i;
		tang = t
		if (first && M.avg(i + t) > 5) {
			sum = M.avg(i + t)
			first = 0
		}
	})
	w.b(function () {
		first = 1
	})
	w.show(function () {
		return imp + ' + ' + tang + ' = ' + sum
	})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
	w.D(400, 200, 'y', 50).d(.1).lV(10)
	w.D(200, 500, 'r', 40).d(1)
	w.D(200, 500, 'b', 25).d(100)
	w.D(800, 200, 'p', 10).d(1000).lV(-10)
}
ERR = LCNOTFUNC = PT = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}
//
IMPACTVELSTAT = function () {
	w = b2d.W({g: 0}).startKilling()
	n = V()
	b = w.ball()
	b1 = w.ball(300, 300).K('stat').stat()
	w.beg(function (cx) {
		if (cx.with('stat')) {
			m = cx.man()
			n = m.m_normal
			p = cx.point()
			v1 = b.GetLinearVelocityFromWorldPoint(p)
			v2 = b1.GetLinearVelocityFromWorldPoint(p)
			impactVelocity = V(
					v1.x - v2.x,
					v1.y - v2.y
			)
			setTimeout(function () {
				w.ball(600, 300, 10).I(impactVelocity)
			}, 100)
		}
	})
}
IMPACTVEL = function () {
	w = b2d.W({g: 0}).startKilling()
	n = V()
	b = w.ball()
	b1 = w.ball(300, 300)
	w.beg(function (cx) {
		if (cx.with(b, b1)) {
			m = cx.man()
			n = m.m_normal
			p = cx.point()
			v1 = b.GetLinearVelocityFromWorldPoint(p)
			v2 = b1.GetLinearVelocityFromWorldPoint(p)
			impactVelocity = V(
					v1.x - v2.x,
					v1.y - v2.y
			)
			setTimeout(function () {
				var temp = w.ball(600, 300, 10).I(impactVelocity)
				setTimeout(function () {
					temp.kill()
				}, 500)
			}, 100)
		}
	})
}
POSTSOLVE = POS = function () {
	https://www.youtube.com/watch?v=GM6s8v7_oA8
			W()//only breaks at high impulse
	b = w.A($dB(300, 400), [$cF(40)]).re(.6).de(1)
	$t(function () {
		if (w.flagged('newBall')) {
			w.BALL(200, 200, 50, 'y')
		}
	})
	w.post(
			function (cX, imp) { //second arg??
				nImps = imp.normalImpulses
				nX = nImps[0]
				nY = nImps[1]
				tImps = imp.tangentImpulses
				tX = tImps[0]
				tY = tImps[1]
				$l('normal: ' + nX + ' tangent: ' + tX)
				if (nX > 100) {
					w.flag('newBall')
				}
				else {
					//	$l('missed it by thiiiis much: ' + (100-nY))
				}
			}
	)
	//we can get the 'normal vector' of the contact btwn fixtures
}
POSTSOLVE = function () {//only breaks at high impulse
	w = b2d.mW()
	b = w.ball()
	cjs.tick(function () {
		if (w.flagged('newBall')) {
			w.ball()
		}
	})
	w.post(
			function (contact, contactImpulse) { //second arg??
				d = contactImpulse
				n = normalImpulses = contactImpulse.normalImpulses
				nX = Math.floor(normalImpulses[0])
				nY = Math.floor(normalImpulses[1])
				t = tangentImpulses = contactImpulse.tangentImpulses
				tX = Math.floor(t[0])
				tY = Math.floor(t[1])
				$l('normal: ' + tX + ', ' + tY + ' tangent: ' + nX + ', ' + nY)
				if (nX > 200) {
					w.flag('newBall')
				}
			}
	)
	//we can get the 'normal vector' of the contact btwn fixtures
}
POSTSOLVE = function () {
	W([1200, 600], {
		g: 10//g:50//,w:'='
	})
	// I want the dir of the tangent and its ratio to the impulse part!!!
	//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
	w.b_.fr(100000000000)
	w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
	y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
	w.D(200, 200, 'b', 20).r(1)
	w.D(900, 200, 'r', 100).r(1)
	//JASON YANOFSKI LISTEN TO YOU:
	//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
	// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
	// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
	//BUT YOU MAY HAVE REASON TO WANT TO
	//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
	imp = 0;
	tang = 0;
	sum = 0
	w.po(function (cx, i, t) {
		imp = i;
		tang = t
		if (first && M.avg(i + t) > 5) {
			sum = M.avg(i + t)
			first = 0
		}
	})
	w.b(function () {
		first = 1
	})
	w.show(function () {
		return imp + ' + ' + tang + ' = ' + sum
	})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
	w.D(400, 200, 'y', 50).d(.1).lV(10)
	w.D(200, 500, 'r', 40).d(1)
	w.D(200, 500, 'b', 25).d(100)
	w.D(800, 200, 'p', 10).d(1000).lV(-10)
}
SMASHOUT = function () {
	W([1200, 600], {
		g: 10//g:50//,w:'='
	})
	// I want the dir of the tangent and its ratio to the impulse part!!!
	//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
	w.b_.fr(100000000000)
	w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
	y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
	w.D(200, 200, 'b', 20).r(1)
	w.D(900, 200, 'r', 100).r(1)
	//JASON YANOFSKI LISTEN TO YOU:
	//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
	// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
	// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
	//BUT YOU MAY HAVE REASON TO WANT TO
	//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
	imp = 0;
	tang = 0;
	sum = 0
	w.po(function (cx, i, t) {
		imp = i;
		tang = t
		if (first && M.avg(i + t) > 5) {
			sum = M.avg(i + t)
			first = 0
		}
	})
	w.b(function () {
		first = 1
	})
	w.show(function () {
		return imp + ' + ' + tang + ' = ' + sum
	})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
	w.D(400, 200, 'y', 50).d(.1).lV(10)
	w.D(200, 500, 'r', 40).d(1)
	w.D(200, 500, 'b', 25).d(100)
	w.D(800, 200, 'p', 10).d(1000).lV(-10)
}
BEGIN = BEG = function () {
	W().ba()
	w.ship()
	w.roof.kill()
	w.on('new', function () {
		w.ba(300, 100, 2)
	})
	w.b(function () {
		w.flag('new')
	})
}
FLAGTHROTTLE = THO = function () {
	W().ball(300, 300, 100)
	brick = w.brick(300, 500)
	w.st.squareDot(400, 100)
	$t(function () {
		if (w.flagged('moveBrick')) {
			brick.X(brick.X() + 20)
		}
	})
	time = 0
	lastTime = 0
	_.ev(1, function () {
		time++
	})
	w.b(function (cx) {
		if (cx.w('brick')) {
			if (lastTime != time) {
				lastTime = time;
				w.flag('moveBrick')
			}
		}
	})
}
AUTOFLAGCHECKER = AFC = FLAG = FLG = function () {
	W()
	p = w.p('hoppy')
	$flag({
		warp: function (p) {
			p.XY(200, 100)
		},
		log: function () {
			$l('haha')
		}
	})
}
VORTEX = VOX = function () {
	$l('game: get rid of balls.  u can leave nest, but must return to claim victory')
	b2d.levelJet()
	w.rectStat(200, 250, 200, 20)
	floor.kill()
	_.t(20, function () {
		w.ba(100, 100, 10).K('ball')
	})
	vort = w.stat(600, 200, $cF(200).mS()).K('vortex')
	w.while('vortex', 'player', function () {
		w.eB('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
VORTEXOK = VOK = function () {
	W({W: 600, H: 300, g: 10})
	p = w.p(2.5).con('thrust')
	moveB = function () {
		b.lV(0, -5)
	}
	moveX = function () {
		bx.lV(0, -5)
	}
	b = w.ball(100, 100, 10).K('ball')
	bx = w.box(50, 100, 14)
	w.stat(600, 200, $cF(200).mS()).K('vortex')
	//this happens every RE-ENTRY into sensor (when)
	w.when('vortex', 'player', moveX)
	//this happens repeadly until sensor exited
	w.while('vortex', moveB)
	$l('right now ball goes up on coll with vortex.  but what about continued pressure?',
			'something with trig?', 'fixed.. (see code)')
}
KINGOFMES = MES = function () {
	
	//all jumping together???!
	//w= b2d.mW()
	$levelWalls()
	_.t(5, function () {
		w.me(2.5).X(400)
				.trig('foot', function () {
					this.I(20, -40)
				}).re(1)
		w.me(2.5).X(100)
				.trig('foot', function () {
					this.I(-20, -40)
				})
	})
}
HAT = function () {
	// could i automatically have body listen to their sensors?
	$levelWalls()
	w.ball().re(.3)
	p.XY(400, 150).trig('right').trig('left')
			.trig('head', function () {
				this.bS('guy')
			})
	$.space(function () {
		if (p.trig.right) {
			p.I(100, -400)
		}
		if (p.trig.left) {
			p.I(-100, -400)
		}
	})
}
VORTEX1 = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
	cir.sp().al(.5)
	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
MES = FEET = function () {
	W()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
}
TETHER1 = function () {
	W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
	b = w.D(100, 100, 'b', 40).warp()
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
	y.warp()
			.wl('vor', function () {
				b.vY(-20)
			})
			.wn('vor', function () {
				x.vY(-20)
			}, function () {
				w.C($r())
			})
}
PLAT1 = function () {
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
VORTEX = LEDGE = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
	w.ledge()
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	}).warp().wl('vor', function () {
		b.vY(-20)
	}).wn('vor', function () {
		x.vY(-20)
	}, function () {
		w.C($r())
	})
}
DIVEBALL = DOT = PLAT = function () {
	W()
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
	W([1200, 800], {g: 8, w: '='}).Y()
	w.y().warp()
	b = w.D(100, 100, 'b', 40).warp()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
	w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	w.D(500, 200, 'z', 30).K('z');
	w.wn('z', function () {
		$l('beg')
	}, function () {
		$l('end')
	})
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	b = w.S(1000, 200)
	b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
	b.f().sprites[0].al(.8)
}
WCIR = WBALL = WCIRC = ALPHA = MY = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
VORTEX1 = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
	cir.sp().al(.5)
	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
MES = FEET = function () {
	W(30)
	_.t(3, function () {
		w.me(900, 100, 5).fR()
				.my('feet', function () {
					//if(K.u){
					this.lV(-2, -10)
					//}
				})
		w.me(700, 100, 5).fR().my('feet', function () {
			if (K.u) {
				this.lV(2, -10)
			}
		})
	})
}
TETHER1 = function () {
	W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
	b = w.D(100, 100, 'b', 40).warp()
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
	y.warp()
			.wl('vor', function () {
				b.vY(-20)
			})
			.wn('vor', function () {
				x.vY(-20)
			}, function () {
				w.C($r())
			})
}
PLAT1 = function () {
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
VORTEX = LEDGE = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
	w.ledge()
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	}).warp().wl('vor', function () {
		b.vY(-20)
	}).wn('vor', function () {
		x.vY(-20)
	}, function () {
		w.C($r())
	})
}
DIVEBALL = DOT = PLAT = function () {
	W()
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
	W([1200, 800], {g: 8, w: '='}).Y()
	w.y().warp()
	b = w.D(100, 100, 'b', 40).warp()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
	w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	w.D(500, 200, 'z', 30).K('z');
	w.wn('z', function () {
		$l('beg')
	}, function () {
		$l('end')
	})
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	b = w.S(1000, 200)
	b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
	b.f().sprites[0].al(.8)
}
WCIR = WBALL = WCIRC = ALPHA = MY = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
WLMY = function () {
	W(20)//.roof.kill()
	_.t(10, function () {
		var p = w.p(R(500, 50), R(300, 100))//.re(1)
		p.fK('hat')//.C($r())
		p.clMy('hat', function (f) {
			
			
			//this.C($r());
			//f.B().C('w');f.C('z')
			var b0 = this.B()
			b0.rt(-180);
			_.in(1, function () {
				b0.stat()//kill()
			})
			var b = f.B()
			if (b.of('player')) {
				b.I(R() ? -200 : 200, -200)
				ff = b.fK('hat')
				ff.C($r())
				//b.rt(10, '+')
			}
			//this.B().kill()
		})
		//p.wlMy('foot', function(f){p.X(10, '+');_f = f;f.C('w')})
	})
	b = w.D(300, 400)
	b.cir('r', 40)
	f = b.cir('b', 20, 80, 0).K('hand')
	b.aV(20).lV(20, 20)
	//f = b.rec( 'w', 300, 20, 150,0,22).K('rec')
	//good:
	//b.clMy('hand', function(f){this.C($r());f.B().C('w');f.C('z')})
}
WHEN = function () {
	w = b2d.W()
	b = w.ball(500, 200, 30).K('z')
	b.when('z',
			function () {
				$l('beg')
			},
			function () {
				$l('end')
			}
	)
}
WHILE = function () {
	w = b2d.W({g: 0}).debug()
	y = w.ship()
	//  w.beg(y, function(){$l('aha')}
	y.while(function () {
		$l('aha')
	})
}
ONEWAY = function () {
	W([1200, 600, 1200, 2000], {}).stats()
			.P(600, 1800).ball()
	w.D(300, 100, 'y', 10)
	w.b(
			_.th(function () {
						w.D(300, 100, 'r', 5)
					},
					500
			)
	)
	p.tr()
	var b1, b2
	w.b(
			b = w.D(500, 300, 'w', 50),
			function () {
				if (b2) {
					b2 = null;
					b2.kill()
				}
				b1 = w.S(R(1000, 50), R(500, 50), 'y', 500).r(.8)
			})
	w.end(b,
			function () {
				if (b1) {
					b1 = null;
					b2.kill()
				}
				b2 = w.S(R(1000, 50), R(500, 50), 'x', 500).r(.8)
			})
	/*
	 plat(300, 300);plat(900, 600);plat(300, 900);plat(300, 1000);plat(1000, 1200);plat(500, 1400);
	 function plat(x,y){return w.S(x,y,'o', 500, 40).K('pf')}
	 pf = plat(900, 1700)
	
	 w.pre(function(cx){
	 //$!!! cx.w(b, 'b', fn)
	 cx.w(p, 'pf', function(pf){
	
	 if(isBel(p,y)){cx.en(0)}
	 })
	 //$ pre, if(cx.w('b'))
	 if(!cx.w('wall')){
	 // if(isBel(p,y)){cx.en(0)}
	 }}
	 )
	
	 */
}
POST = function () {
	W()//only breaks at high impulse
	//what works: w.post
	b = w.D(600, 300, 'r', 30).K('ball')
	//
	w.post(function (cx, I) {
		if (I.nX() > 200) {
			w.D(600, 300, 'r', 30)
		}   // $l('n:'+I.tX()+','+I.tY()+'|t:'+I.nX()+','+I.nY()) //second arg! //we can get the 'normal vector' of the contact btwn fixtures
	})
}
KING1 = function () {
	W({g: 12}).Y()
	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
	y.wl(
			w.S(600, 200).K('vor').cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20}),
			function () {
				w.e('ball', function (b) {
					b.tow(600, 200)
				})
			}
	)
}
NORM = function () {
	W({g: 0})
	//$ b.cl
	r = w.S(300, 300, 'x', 40)
	b = w.D(300, 300, 'b', 40)
	r.cl(function (f, cx) {
		var r1 = w.D(600, 300, 'x', 30).K('r')
		r1.I(cx.norm())
	})
	/*
	
	 b.cl(function(f,cx){
	 var b1= w.D(600,300,'b',30)
	 b1.I(cx.norm())
	
	 })
	 */
	// w.show(function(){return 'norm: '+ n.x.toFixed(1) + ', ' + n.y.toFixed(1)   })
}
ENERGY = function () {
	W({g: 1})
	b = w.D(500, 300, 'b', 50).d(1).K('b')
	r = w.D(700, 300, 'r', 80).d(1)
	w.b(function (cx) {
		cx.w('b', function (f) {
			if (cx.a().of('b')) {
				r.lV(
						cx.lV(cx.a())
				)
			}
			else {
				r.lV(cx.lV(cx.b()))
			}
		})
	})
	w.pop('me absorbs energy of tims collision!')
	$.in(4, function () {
		w.pop('gets actual v of bA')
	})
	$.in(8, function () {
		w.pop('at moment of col!')
	})
}
CXCN = function () {
	W() // w.chalk('so finding the actual contact point aint hard after all..')
	_.t(5, function () {
		w.D(200, 400, $r(), 120)
	})
	w.S(200, 500, 'r', 200, 50)
	w.b(function (cx) {
		var pt = cx.cen();
		w.dot(pt.x, pt.y)
	})
}
WWW = function () {
	W({g: 20}).Y() //w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	w.plat(400, 500, 40, 20).K('pf')
	w.D(500, 200, 'z', 30).K('z')
	w.D(440, 100, 'y', 50).K('ball dot')
	w.S(1000, 200).cir({
		r: 500,
		c: 'w', C: 'o', l: 10, o: 0.2,
		s: 1
	}).K('vor')
	y.f().grp(-1)
	y.warp().wn('vor', function () {
		x.vY(-20)
	}, function () {
		x.vX(8)
	}).wl(function () {
		$l('aha')
	})
	b = w.D(100, 100, 'b', 40).grp(-1).warp()
	x = w.D(50, 100, 'x', 60, 60).grp(-1).warp()
	w.wn('z', function () {
		$l('beg')
	}, function () {
		$l('end')
	})
	w.cl('pf', 'ball', function () {
		w.D(300, 20, 'w', 40, 40).K('box')
	})
	w.cl('pf', 'box', function () {
		w.D(300, 20, 'b', 40).K('ball')
	})
	w.cl('dot', function (cx) {
		this.B().dot()
	})
	w.wl('ship', 'vor', function () {
		b.vY(-20)
	})
}
FREEZE = function () {
	W(10).C('z').Y()
	_.t(10, function () {
		w.D(100, 100, 'r', 20).K('b')
	})
	b = w.S(400, 300, 's', 20).K('b')
	y.cl('b', function (f) {
		var x, y, c
		x = f.B().X();
		y = f.B().Y()
		c = f.of('side') ? 'x' : 'y'
		w.dot(c, x, y) //   if(f!==y){  f.D().dot('r') } else {   f.D().dot('w')  }
	})
}
NORM = function () {
	w = b2d.W({g: 0}).startKilling()
	n = V()
	w.ball(300, 300).K('stat').stat()
	w.ball()
	w.box()
	w.beg(function (cx) {
		if (cx.with('stat')) {
			m = cx.man()
			n = m.m_normal
			setTimeout(function () {
				w.ball(600, 300, 10).I(n)
			}, 100)
		}
	})
	//  w.show(function(){return 'norm: '+ n.x.toFixed(1) + ', ' + n.y.toFixed(1)   })
}
NORMAL = function () {
	W({W: 1500, H: 1200, g: 0}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 50),
			function (f, cx) {
				w.D(600, 300, 'g', 20).K('g').I(-cx.nX(300), cx.nY(300))
			})
	y.cl(w.S(900, 300, 'o', 50), function (f, cx) {
		w.D(600, 300, 'o', 20).K('o')
				.I(-cx.nX(300), cx.nY(300))
	})
	y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
	y1.cir('y', 40).r(.8)
	Ball = _.mo(.5, function (n) {
		w.D(600, 200, 'o', 5).bit(0)
				.K('o').r(.9).I(n.x, n.y)
	})
	w.D(600, 300, 'o', 70).r(.8)
			.cl(function (f, cx) {
				if (cx.nX() || cx.nY()) {
					if (O(cx) && F(cx.n)) {
						Ball(cx.n(10000))
					}
				}
			})
	/*
	 //just copies lV
	 b=w.D(500,300,'b',50).d(1).K('b')
	 r = w.D(700,300,'r', 80).d(1)
	 w.b( function(cx){ cx.w('b', function(f){
	 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
	 else {r.lV( cx.lV(cx.b()))}})})
	 */
//w.pop('me absorbs energy of tims collision!'); $.in(4, function(){w.pop('gets actual v of bA')}); $.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
	NL0 = function () {
		W({W: 900, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40)
		y.fR().cn('thrust').warp().bS('me').cir('g', 50)
		w.S(200, 300, 'g', 100).cl(function (f, cx) {
			w.D(600, 300, 'g', 20).I(-cx.nX(300),
					cx.nY(300))
		})
	}
	NL = function () {
		W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
		y.cir('y', 50)
		y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
			w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
			w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
			w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
		})
	}
}
SICK = BBALL = MOONSOCCER = function () {
	W({W: 1500, H: 1200, g: 0, w: ''}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	greenBall = w.S(300, 300, 'g', 50)
	y.cl(
			greenBall,
			function (f, cx) {
				var bullet = w.D(600, 300, 'g', 20)
				bullet.K('g').I(
						-cx.nX(300),
						cx.nY(300)
				)
			}
	)
	y.cl(
			w.S(900, 300, 'o', 50), function (f, cx) {
				w.D(600, 300, 'o', 20).K('o').I(-cx.nX(300), cx.nY(300))
			})
	y.warp()
}
//y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
//y1.cir('y', 40).r(.8)
/*	Ball = _.m(.5, function (n) {
 w.D(600, 200, 'o', 5).bit(0)
 .K('o').r(.9).I(n.x, n.y)
 })
 w.D(600, 300, 'o', 70).r(.8)
 .cl(function (f, cx) {
 if (cx.nX() || cx.nY()) {
 if (O(cx) && F(cx.n)) {
 Ball(cx.n(10000))
 }
 }
 })
 /*
 //just copies lV
 b=w.D(500,300,'b',50).d(1).K('b')
 r = w.D(700,300,'r', 80).d(1)
 w.b( function(cx){ cx.w('b', function(f){
 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
 else {r.lV( cx.lV(cx.b()))}})})
 */
//w.pop('me absorbs energy of tims collision!'); _.in(4, function(){w.pop('gets actual v of bA')}); _.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
NL0 = function () {
	W({W: 900, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40)
	y.fR().cn('thrust').warp().bS('me')
	y.cir('g', 50)
	b = w.S(200, 300, 'g', 100)
	b.cl(function (f, cx) {
		var b1 = w.D(600, 300, 'g', 20)
		b1.I(-cx.nX(300), cx.nY(300))
	})
}
NL = function () {
	W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
		w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
		w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
		w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
	})
}
LVW = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b');
	var b1, b2
	// y and remote control fireball
	var y = w.y(300, 100, '+')
	farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2)
			.lV(200, 0).cn('thrust').fR()
	nearMoon = w.D(400, 200, 'y', 100)
	$t(function () {
		var lV = y.lVW(y.X(), y.Y()).mult(20)
		nearMoon.lV(lV.x, lV.y)
	})
	p = w.p(900, 400).cn('jump')
	p.cl(_.mo(function () {
		w.D(300, 100, 'r', 5)
	}))
	sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
	sun.cl(function (f, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
		w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
}
VEL = function () {
	w = b2d.W({g: 1})
	w.ball(500, 300, 10).K('tim').den(1)
	me = w.ball(700, 300, 80).K('me').den(1)
	w.beg(function (cx) {
		cx.with('tim', function (other, cx) {
			if (cx.a().is('tim')) {
				me.linVel(cx.vA())
			}
			else {
				me.linVel(cx.vB())
			}
		})
		//this gets th actual velocity of body A at moment of collision !!!!!!!
		// HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!
	})
}
VEL1 = function () {
	b2d.W({g: 2})
	b = w.ball(100, 100).den(1)
	b.poly(20, 100).den(1)
	b2 = w.ball(400, 400).den(1)
	b3 = w.ball(100, 100, 10)
	cjs.tick(function () {
		v = b.linVelWor(b)
		b2.linVel(v.div(10))
		//$l(b.linVel())
		//  v = b3.linVel()
		//  vw = b3.linVelWor()
		//   vl = b3.GetLinearVelocityFromLocalPoint()
		//$l('vel: ' + v.x)
		//$l('velW: ' + vw.x)
		// $l('velL: ' + vl.x)
	})
}
CONTACTS = function () {
	makeWorld()
	var centerFx = b2d.circ(80).K('center')
	w.dyn(500, 300, [
		centerFx,
		b2d.poly(60, 90, 0, 40, 10).sensor(true).K('sensor1')
	]).angVel(100)
	w.dyn(700, 300, [
		centerFx,
		b2d.circ(100).sensor(true).K('sensor2')
	]).angVel(100)
	w.coll('sensor1', 'sensor2',
			function () {
				w.ball(100, 100, 100)
			})  //w.begin(function(cx){if(cx.with('sensor1','sensor2')){w.flag('new')}}) //w.on('new', function(){w.ball()})
}
BCOL2 = function () {
	w = b2d.W().startKilling()
	y = w.ship()
	_.times(10, function () {
		w.ball(100, 100, 20).K('ball')
	})
	b = w.ball(400, 300, 20).K('ball').stat()
	y.coll('ball', function (b) {
		$l('coll with ball')
		y.col2(function (a) {
			if (a != b) {
				a.B().dot()
			}
		})
	})
	// cjs.tick(function(){ y.col2( function(a){    a.B().setDestroy()   })  })
}
THROTTLE = function () {
	w = b2d.W()
	ball = w.ball(300, 300, 100)
	brick = w.brick(300, 500)
	time = 0
	setInterval(function () {
		time++
	}, 1000)
	cjs.tick(function () {
		if (w.flagged('moveBrick')) {
			brick.X(20, '+')
		}
	})
	lastTime = 0
	change = 0
	w.begin(function (con) {
		if (con.with('brick')) {
			if (lastTime != time) {
				lastTime = time;
				w.flag('moveBrick')
			}
		}
	})
}
WORLDVEL = function () {
	w = wor({
		mJ: false,
		g: 0
	})
	b = w.ball(300, 300, 150).den(1)
	b2 = w.ball(300, 300, 10)
	w.rev(b, b2
	)
	p1 = V(300, 300)
	p2 = V(360, 360)
	p3 = V(450, 450)
	w.dot(p1)
	w.dot(p2)
	w.dot(p3)
	//  b.ApplyTorque(10)
	//  b.linVel(.2,0)
	w.click(function (x, y) {
		v = b.linVelWor(x, y)
		$l(v.x + ' ' + v.y)
	})
	b.angVel(1)
}
LVW = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b');
	var b1, b2
	// y and remote control fireball
	var y = w.y(300, 100, '+')
	farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
	nearMoon = w.D(400, 200, 'y', 100)
	T.t(function () {
		var lV = y.lVW(y.X(), y.Y()).mult(20)
		nearMoon.lV(lV.x, lV.y)
	})
	p = w.p(900, 400).cn('jump').cl(_.mo(function () {
		w.D(300, 100, 'r', 5)
	}))
	sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
	sun.cl(function (f, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
		w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
} 