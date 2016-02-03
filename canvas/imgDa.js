cx.gD = cx.getData = function (x, y, w, h) {
	//historic.. dont delete ! data = x('G', X, Y, w, h).res
	var g = G(arguments),
			x = g[0] || 0,
			y = g[1] || 0,
			w = g[2] || this.W(),
			h = g[3] || this.H(),
			data = this.context.getImageData(x, y, w, h)
	// data.h = data.height
	// data.w = data.width
	// data.d = data.data
	return data
}
cx.pD = cx.putData = function (data, x, y) {
	x = x || 0
	y = y || 0
	this.context.putImageData(data, x, y)
	return this
}
cx.gP = cx.getPut = function (a, x, y) {
	var g = G(arguments),
			a = g[0],
			x = g[1],
			y = g[2],
			data = this.gD.apply(this.context, a)
	if (g.n) {
		this.clear()
	}
	return x.pD(data, x, y)
}
cx.pixelsNegative = function () {
	var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
			data = imgData.data
	for (var i = 0; i < data.length; i += 4) {
		data[i] = 255 - data[i];
		data[i + 1] = 255 - data[i + 1]
		data[i + 2] = 255 - data[i + 2]
		data[i + 3] = 255
	}
	this.pD(imgData) //  this.pD(data,0,0)
}
cx.pixelsInvert = function () {
	var imgData = this.gD(),
			data = imgData.data
	for (var i = 0; i < data.length; i += 4) {
		data[i] = 225 - data[i];
		data[i + 1] = 225 - data[i + 1]
		data[i + 2] = 225 - data[i + 2]
	}
	this.pD(imgData)
}
cx.pixelsGrayscale = function () {
	var imgData = this.gD(),
			data = imgData.data
	for (var i = 0; i < data.length; i += 4) {
		var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
		data[i] = avg
		data[i + 1] = avg
		data[i + 2] = avg
	}
	this.pD(imgData) //  this.pD(data,0,0)
}
cx.pixelsFade = function () {
	var imgData = this.gD(),
			data = imgData.data
	for (var i = 7; i < _.size(data); i += 4) {
		data[i] = 90
	}
	this.pD(imgData)
	return el
}
cx.cID = function () {
	var x = this
	return x.createImageData.apply(x, arguments)
}
cx.gID = function () {
	var x = this
	return x.getImageData.apply(x, arguments)
}
cx.pID = function () {
	var x = this
	x.putImageData.apply(x, arguments)
	return x
}
cx.cD = function () {
	this.cID()
	return this
}
cx.gD = function () {
	var g = G(arguments), o, d
	o = {x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	d = this.gID(o.x, o.y, o.w, o.h)
	d.h = d.height
	d.w = d.width
	d.d = d.data
	return d
}
cx.pD = function (d, x, y) {
	return this.pID(d, N(x, 0), N(y, 0))
}
_canPixel = function (cv) {
	cv.gD =cv.getData = function (x, y, w, h) {
		//historic.. dont delete ! data = x('G', X, Y, w, h).res
		var g = G(arguments),
				x = g[0] || 0,
				y = g[1] || 0,
				w = g[2] || this.W(),
				h = g[3] || this.H(),
				data = this.context.getImageData(x, y, w, h)
		// data.h = data.height
		// data.w = data.width
		// data.d = data.data
		return data
	}
	cv.pD = cv.putData = function (data, x, y) {
		x = x || 0
		y = y || 0
		this.context.putImageData(data, x, y)
		return this
	}
	cv.gP = cv.getPut = function (a, x, y) {
		var g = G(arguments),
				a = g[0],
				x = g[1],
				y = g[2],
				data = this.gD.apply(this.context, a)
		if (g.n) {
			this.clear()
		}
		return x.pD(data, x, y)
	}
	cv.pixelsNegative = function () {
		var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 255 - data[i];
			data[i + 1] = 255 - data[i + 1]
			data[i + 2] = 255 - data[i + 2]
			data[i + 3] = 255
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	cv.pixelsInvert = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 225 - data[i];
			data[i + 1] = 225 - data[i + 1]
			data[i + 2] = 225 - data[i + 2]
		}
		this.pD(imgData)
	}
	cv.pixelsGrayscale = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
			data[i] = avg
			data[i + 1] = avg
			data[i + 2] = avg
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	cv.pixelsFade = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 7; i < _.size(data); i += 4) {
			data[i] = 90
		}
		this.pD(imgData)
		return el
	}
	return cv
}
PXXX = CANPOL = CVL = function () {
	__C()
	Q(['me'], function (q) {
		$.cx().d(Q.i('me')).pol(flatTri)
		me = Q.i('me')
		c.drawImage(me, 100, 100)
		c.pD(c.gD(100, 100, 500, 500), 120, 120)
		c.f("r").fr(10, 10, 50, 50)
		imgData = c.gD(10, 10, 50, 50)
		c.pD(imgData, 10, 70)
	})
}
CLD = CANVASQLOADER = function () {
	__C();
	$Ld(['me'], function (q) {
				me = q.get('me')
				c.drawImage(me, 100, 100)
				c.pD(c.gD(100, 100, 500, 500), 120, 120)
				c.f("red").fr(10, 10, 50, 50)
				imgData = c.gD(10, 10, 50, 50)
				c.pD(imgData, 10, 70)
			}
	)
}
CPX = PIXEL = function () {
	cv = c = $.c()
	$Ld(['me'], function (ld) {
		me = ld.get('me')
		cv.drawImage(me, 100, 100)
		cv.pD(d = cv.gD(100, 100, 500, 500), 120, 120)
		zeros = nums = 0
		_.e(d.data, function (d) {
			if (d == 0) {
				zeros++
			} else {
				nums++
			}
		})
		$l('zeros: ' + zeros + ' - nums: ' + nums)
	})
}
cx.crop = function (x1, y1, x2, y2) {
	var cx = this, cv = cx.canvas, $cv = cx.$cv()
	if (A(x1)) {
		return cx.crop(x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1])
	}
	cx.dI(cv.toDataURL(), x1, y1, x2, y2, 0, 0, cv.width, cv.height)
	//cx.dI(x, x1, y1, x2, y2, 0, 0, cv.width, cv.height)
	return cx
}
CANS = THREECANS = FIT = CANFIT = CV4 = function () {
	c1 = $.can('r', 800, 400)
	c2 = $.can('b', 800, 400)
	c3 = $.can('X', 800, 400)
	c3.css('outline', '34px dotted green')
	_.in(2, function () {
		C1 = $.c('r', 200, 400)
		C2 = $.c('b', 50, 50)
		C4 = $.c('y', 100, 10)
		d = $.d().C('o')
		d.A(C1, C2, C4).css({
			'display': 'flex',
			'justify-items': 'center'
		})
		$('canvas').attr({
			width: 'auto', height: 'auto'
		}).css({
			width: 'auto', height: 'auto',
			'flex-grow': 1,
			'flex-shrink': 1
		})
		$('canvas').e(function () {
			$(this).ctx().jD('me')
		})
	})
	_.in(4, function () {
		c = __C();
		c.fit('me')
		m = $.c(800).fit('me')
		g = $.c('b', 600).fit('guy')
	})
}
BCA = BIGCANAPP = BIGCANDEMOAPP = SHOWEDITATONEANDONLYGAMEDEVMEETUP = function () {
	var picHolder
	$.format()
	picHolder = $.sp().id('pics')
	s2.A(picHolder)
	var picHolder
	$.fm()
	s2.A(picHolder = $.sp().id('pics'))
	$.getJSON('/img', function (i) {
		_.e(i, withImage)
	})
	function withImage(img) {
		dataUrl = img.d
		can = $.c(100, 100)
		can.click(
				function () {
					var mouse = $('#mouse')
					mouse.val('click')
					mouse.change()
					mug = img.d
				}
		)
		picHolder.A(can)
		can.fit(dataUrl)
	}
	
	s2.A(
			x = canvas = $.c('yellow', 1000, 800)
	)
	setInterval(
			function () {
				//  x.bc()
			}, 10000
	)
	$.getJSON('/img', function (i) {
		_.e(i, withImage)
	})
	function withImage(img) {
		dataUrl = img.d
		can = $.c(100, 100)
		can.click(function () {
			var mouse = $('#mouse')
			mouse.val('click')
			mouse.change()
			mug = img.d
		})
		picHolder.A(can)
		can.fit(dataUrl)
	}
	
	s2.A(
			c = cv = x = canvas = $.c('y', 1000, 800))
	//  _.ev(10, function(){x.bc()})
	s1.A($.lb('mouse'),
			/*
			 $.scv('none','click','enter','leave','move').id('mouse').o(
			 function(s){
			 x.q.ub()
			 if(s=='click'){
			 x.$(function(X,Y){
			 x.Cd(mug,X,Y)
			 })}
			
			
			 if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
			 if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
			 if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})
			
			 x.MU(function(){x.q.ub('mousemove')})}
			
			
			 }),
			
			
			 */
			$.lb('global comp'),
			//scv.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
			//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
			$.bt('SAVE(sv)', function () {
				x.sv()
			}), $.br(2),
			$.bt('CUT(dots)', function () {
				x.q.q.unbind()
				qi('mouse').v('none')
				x.dots()
			}), $.br(2),
			$.bt('RESTORE(R)', function () {
				x.R()
			}), $.br(2),
			$.bt('bc:change background color', function () {
				x.bc()
			}), $.br(2),
			$.bt('cir:make circle', function () {
				x.cir(100, 100, 100)
			}), $.br(2),
			$.bt('d:draw', function () {
				c.dr(
						$w['mug'] || 'me'
				)
			}), $.br(2),
			$.bt('dC:draw center', function () {
				cv.dC(window['mug'] || 'me')
			}), $.br(2),
			$.bt('me', function () {
				x.me()
			}), $.br(2),
			$.bt('sh1', function () {
				x.ln(sh1)
			}), $.br(2),
			$.bt('sh2', function () {
				x.ln(sh2)
			}), $.br(2),
			$.bt('tictactoe',
					function () {
						x.ln(tictactoe)
					}), $.br(4),
			$.bt('sampLinGrad',
					function () {
						x.sampLinGrad()
					}), $.br(2),
			$.bt('sampRadGrad',
					function () {
						x.sampRadGrad()
					}), $.br(2),
			$.bt('ctxx',
					function () {
						xxx('barney')
					}), $.br(2),
			$.bt('bads',
					function () {
						bad(x, 200, 8)
					}), $.br(2),
			$.bt('coins',
					function () {
						coin(x, 200, 8)
					}), $.br(2)
	)
	s1(
			$.lb('mouse'),
			$.sl('none', 'click', 'enter', 'leave', 'move').id('mouse').o(
					function (s) {
						x.q.ub()
						if (s == 'click') {
							x.$(
									function (X, Y) {
										x.Cd(mug, X, Y)
									}
							)
						}
						if (s == 'enter') {
							x.ME(function (X, Y) {
								x.Cd(mug, X, Y)
							})
						}
						if (s == 'leave') {
							x.ML(function (X, Y) {
								x.Cd(mug, X, Y)
							})
						}
						if (s == 'move') {
							x.MD(function () {
								x.MM(function (X, Y) {
									x.Cd(mug, X, Y)
								})
							})
							x.MU(function () {
								x.q.ub('mousemove')
							})
						}
					}
			),
			$.lb('global comp'),
			$.sl.apply(this, V(oO('g'))).$(function (v) {
				x.gc(v)
			}),
			//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
			$.bt(
					'SAVE(sv)', function () {
						x.sv()
					}
			), $.br(2),
			$.bt(
					'CUT(dots)', function () {
						x.q.q.unbind()
						qi('mouse').v('none')
						x.dots()
					}
			), $.br(2),
			$.bt('RESTORE(R)', function () {
				x.R()
			}), $.br(2),
			$.bt('bc:change background color', function () {
				x.bc()
			}), $.br(2),
			$.bt('cir:make circle', function () {
				x.cir(100, 100, 100)
			}), $.br(2),
			$.bt('d:draw', function () {
				x.d($w['mug'] || 'me')
			}), $.br(2),
			$.bt('dC:draw center', function () {
				x.dC($w['mug'] || 'me')
			}), $.br(2),
			$.bt('me', function () {
				x.me()
			}), $.br(2),
			$.bt('sh1', function () {
				x.ln(sh1)
			}), $.br(2),
			$.bt('sh2', function () {
				x.ln(sh2)
			}), $.br(2),
			$.bt(
					'tictactoe', function () {
						x.ln(tictactoe)
					}
			), $.br(4),
			$.bt(
					'sampLinGrad', function () {
						x.sampLinGrad()
					}
			),
			$.br(2),
			$.bt(
					'sampRadGrad', function () {
						x.sampRadGrad()
					}
			),
			$.br(2),
			$.bt(
					'xxx', function () {
						xxx('barney')
					}
			), $.br(2),
			$.bt(
					'bads', function () {
						bad(x, 200, 8)
					}
			), $.br(2),
			$.bt(
					'coins', function () {
						coin(x, 200, 8)
					}
			), $.br(2)
	)
}
FAN = CV6 = function () {
	Q(function () {
		me = Q.get('me')
		x = $.cx('y', 1000, 800)
		_.in(function () {
			x.f('b').fillText('haffasfsf', 400, 500)
		})
		$cv = $(x.canvas)
		$cv.$$(function () {
			x.fit(me)
		})
		x.fit(me)
		guidewires = false
		dragging = false
		mousedown = {}
		loc = {}
		restoreDrawingSurface = function () {
		}
		updateRubberband = function (m) {
			x.ln(
					mousedown.x,
					mousedown.y,
					m.x,
					m.y
			)
		}
		drawGuidewires = function () {
		}
		$cv.mD(function (X, Y) {
			dragging = true
			mousedown = {x: X, y: Y}
		})
		$cv.mM(function (X, Y) {
			if (dragging) {
				restoreDrawingSurface()
				updateRubberband({x: X, y: Y})
			}
			if (guidewires) {
				drawGuidewires(loc.x, loc.y)
			}
		})
		$cv.mU(function (X, Y) {
			dragging = false
			restoreDrawingSurface()
			updateRubberband({x: X, y: Y})
		})
	})
}
RUB = function () {
	Q(function () {
		me = Q.get('me')
		can = $.c('y', 1000, 800)
		cx = can.gC()
		can.$$(function () {
			cx.fit(me)
		})
		cx.fit(me)
		guidewires = false
		dragging = false
		mousedown = {}
		loc = {}
		rr = null
		data = null
		can.MD(function (x, y) {
			data = cx.gD()
			dragging = true
			mousedown = {x: x, y: y}
		})
		can.MM(function (X, Y) {
			var m = {x: X, y: Y}, d = mousedown
			if (dragging) {
				cx.pD(data)
				cx.ln(d.x, d.y, d.x, m.y)
				cx.ln(d.x, d.y, m.x, d.y)
				cx.ln(m.x, m.y, m.x, d.y)
				cx.ln(m.x, m.y, d.x, m.y)
			}
		})
		can.MU(function (X, Y) {
			dragging = false
			var d = mousedown, x1, x2, y1, y2
			if (X > d.x) {
				x1 = d.x;
				x2 = X
			} else {
				x1 = X;
				x2 = d.x
			}
			if (Y > d.y) {
				y1 = d.y;
				y2 = Y
			} else {
				y1 = Y;
				y2 = d.y
			}
			rr = [x1, y1, x2, y2]
			cx.pD(data)
			cx.crop(rr)
			//    data=can.gD()
		})
	})
}