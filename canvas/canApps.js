$L('grad', 'bmap', 'globComp', 'paths', 'shad', 'text', 'transf')
function text() {
	XP2 = DRAWAPP = CV19 = TEXTTX = function () {
		cx = x = $.cx()
		cv = c = $(cx.canvas)
		cx.b('b', 'g', 30)
		cx.T(100, 'Jason Yanofski', 10, 150)
		cx.lg({
			x1: 0, y1: 0, x2: x.W(),
			y1: 0, cS: {m: 0, b: .5, r: 1}
		})
		cx.T('Jason Yanofski', 10, 290, '-')
		cv.W(window.innerWidth)
		cv.H(window.innerHeight)
		_.in(function () {
			x.t('hello', 100, 100)
		})
		function draw() {
			x.s('r').f('o')
			x.fR(400, 300, 100, 220)
			x.f('b').fR(0, 0, 100, 220)
			x.f('r').fr2(0, 0, 100, 220)
			x.jD('me', 400, 500)
			// x.jD('me', 200, 400,800,300)
		}
		
		draw()
		_.in(first)
		function first() {
			x.S()
			x.rt(10)
			draw()
			x.R()
			_.in(then)
		}
		
		function then() {
			x.S()
			x.tl(200, 200);
			draw()
			x.R()
			x.tl(20, 20);
			draw()
		}
	}
	CV18 = TXTT = function () {
		cx = $.cx('y')
		cx.b('b', 'g', 30)
		cx.T(100, 'Jason Yanofski', 10, 150)
		cx.lg({x1: 0, y1: 0, x2: cx.W(), y1: 0, cS: {m: 0, b: .5, r: 1}})
		cx.T('Jason Yanofski', 10, 290, '-')
	}
	NEW1 = function () {
		cx = $.cx()
		cx.font = '32px Arial'
		cx.f('g').s('o')
		cx.strokeText('I love html5', 45, 150)
		cx.font = '92px sans-serif'
		cx.f('g').s('y')
		cx.fillText('I hove html5', 345, 450)
		cx.strokeText('I hove html5', 345, 450)
	}
	
	NEW = function () {
		cx = $.cx()
		cx.font = '32px Arial'
		cx.lineCap='butt'
		cx.f('g').s('o').sT('I love html6', 45, 150).fR(300, 400, 500, 200).lW(33)
		cx.rect(400,300,200,2000)
		cx.s()
	}
}


function grad() {
	LGR = Z2W = function () {
		var c = $.c('y', 500, 500).dgb()
		var x = c.ctx()

		x = c.gC()

		x.lg({
			cS: {z: 0, w: 1},
			x2: x.W(),
			y2: x.H() / 4
		}).fr()

		return $.d().A(
				$.h1('ctx lg black2white'), c)
	}

	LGR1 = function () {
		var c = $.c('y', 500, 500)
		var x = c.gC()
		var lg = x.cLG(50, 0, 500, 100)
				.cS([.2, 'o'], [.6, 'r'], [.8, 'g'])
		x.f(lg).fR()
	}
	LGR2 = function () {
		var c = $.c('y', 500, 500).drag()
		var x = c.gC()
		x.lg({
			cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
			x1: 50, x2: 500, y2: 100
		}).fR(0, 0, 300)

		x.lg({cS: {o: .2, r: .6, g: .8},
			x1: 50, x2: 500, y2: 100
		})
				.fr(300, 0, 300)
	}
	RGR = function () {
		cx = $.cx('y', 500, 500)
		gr = cx.cRG(100, 100, 100, 100, 100, 500)
		gr.aCS(0, 'r')
		gr.aCS(.15, 'b')
		gr.aCS(.2, 'r')
		gr.aCS(.5, 'y')
		gr.aCS(1, 'b')
		cx.s(gr).f(gr)
		cx.sR()
		cx.fR()
	}
}
function bmap() {
	DIM = function () {
		Q(function () {
			me = Q.get('me')
			guy = Q.get('guy')
			chicks = Q.get('chicks')
			cx = $.cx()
			cx.dI(guy, 0, 0, cx.canvas.width, cx.canvas.height)
			cx.dI(me, 100, 100)
			cx.dI(guy)
			cx.dI(me, 400, 200, 100, 100)
			cx.dI(chicks, 100, 200, 300, 300, 500, 20, 400, 120)
		})
	}
	LIT = PATTERN = function () {
		$s({$: {C: 'z', M: 1, border: 'yellow 8px dashed'}})
		//one
		clrRect = $.c('u', 100, 100)
				.gC().f('o').fR(60, 60)
				.cR(30, 30, 20, 20)
		$(clrRect.canvas).dgb().al(.5)
		//two
		alph = $.c('r', 300, 300).gC()
				.f('o')
				.fR(30, 30, 100, 50)
		alph.fillStyle = 'rgba(0,200,0,.6)'
		alph.fR(50, 40, 50, 190)
		//three
		grad = $.c('v', 400, 200).gC()
		g1 = grad.cLG(0, 0, 400, 0)
		g1.aCS(0, 'm').aCS(0.5, 'z').aCS(1, 'y')
		grad.f(g1).fR(10, 10, 400, 400)
		//four
		patt = $.c('o', 600, 200).gC()
		Q(function () {
			me = Q.get('me')
			patt.f(patt.createPattern(me, 'repeat'))
					.fR(2000, 200)
		})
		//five
		lineSty = miter = $.c('y', 300, 200).gC()
		lineSty.lW(16).lC('round')//.mL(10) //round|butt|square
		lineSty.lineJoin = 'miter'
		lineSty.miterLimit = 1
		lineSty.b().mT(90, 50)
				.lT(100, 120)
				.lT(250, 20)
				.s()
		strRect = $.c('o', 300, 600).gC()
		lnDash = $.c('v', 400, 200).gC()
		lnDash.lW(16)
		lnDash.setLineDash([20, 50, 40])
		lnDash.b().mT(50, 50)
				.lT(100, 120)
				.lT(250, 20)
				.s()
		//lnDasho
	}
}
$Ol = function () {
	var str = '', g = G(arguments), o
	o = {style: g.f, color: g.s, size: g.t}
	o.style = o.style || 'dashed'
	o.color = oO('c', o.color || 'red')
	o.size = S(o.size) ? o.size : $S(N(o.size, 20)) + 'px'
	str = o.style + ' ' + o.color + ' ' + o.size
	$l(str)
	return str
}
function globComp() {
	GCO = XORCX = GCOMP = SHADOW = DRI = DRAWIMAGE = function () {
		$s({
			bd: {C: 'o'},
			d: {
				C: 'r', P: 10,
				M: 10, B: 10,
			},
			canvas: {
				outline: 'dashed black 20px'
			}
		})
		
		__C()
		$Im('chicks').ld(function () {
			x.dI(this, 100, 100)
			x.dI(this, 400, 100, 500, 200)
			
			x.xShadow = 3
			
			x.yShadow = 3
			x.shadowBlur = 10
			x.shadowStyle = 'red'
			x.r(188, 40, 200, 100).f('r')
					.shdC('b').shdB(20).shdX(15).shdY(15).f()
			Q(function () {
				x.d('me', 300, 300)
				//  x.sO(); x.dO()
				x.xo()
				c.$(function () {
					/*
					 cv.on('click', function (ev) {
					 x = ev.pageX
					 y = ev.pageY
					 cv.draw('me', x - 120, y - 150)
					 })
					 */
					var g = G(arguments), o
					o = {x: g.f, y: g.s}
					x.d('guy', o.x, o.y)
				})
			})
		})
	}
}
function paths() {
	CWS = JARED_DRAWING_APPLICATION_TUT2of6 = function () {
		cv = $.cv('r', window.innerWidth, window.innerHeight).dp('block')
		cx = cv.gC()
		$s({bd: {M: 0}})
		rad = 10
		cx.f('y')
		function putPoint(e) {
			if (dragging) {
				var x = e.clientX
				var y = e.clientY
				cx.lW(8).lT(e.clientX, e.clientY).s('z').s()
				cx.dot(x, y)
				cx.f()
				cx.b().mT(e.clientX, e.clientY)
			}
		}
		
		cv.on('mousemove', putPoint)
		cv.on('mousedown', engage)
		cv.on('mouseup', disengage)
		function engage(e) {
			dragging = true
			putPoint(e)
			cx.f($r())
		}
		
		function disengage() {
			dragging = false
			cx.b()
		}
		
		dragging = false
	}
	CWS = JARED_DRAWING_APPLICATION_TUT3of6 = function () {
		$s({
			bd: {M: 0},
			$decrad: {},
			$incrad: {},
			_radcontrol: {
				tA: 'c',
				w: 30, h: 20,
				C: '_b',
				dp: 'inline-block', M: 4
			},
			$: {
				'font-family': 'san-serif',
				'box-sizing': 'border-box'
			},
			$toolbar: {position: 'fixed', top: 0, C: 'B', c: 'w', P: 10, h: 50, w: '100%'}
		})
		cv = $.cv('r', window.innerWidth, window.innerHeight).dp('block')
		cx = cv.gC()
		$.d().id('toolbar').A(
				$.d().id('rad').A(
						'Radius: ',
						$.sp(rad).id('radval'),
						$.d().id('decrad').K('radcontrol').A('(-)'),
						$.d().id('incrad').K('radcontrol').A('(+)')
				)
		)
		minRad = 1
		maxRad = 100
		dfRad = 20
		radSpan = $('#radval')[0]
		decRad = $('#decrad')[0]
		incRad = $('#incrad')[0]
		rad = 10
		dragging = false
		cx.f('B')
		cv.on('mousemove', putPoint)
		cv.on('mousedown', engage)
		cv.on('mouseup', disengage)
		$('#decrad').click(function () {
			$l('decrad')
			setRad(rad - 1)
		})
		$('#incrad').click(function () {
			$l('incrad')
			setRad(rad + 1)
		})
		function putPoint(e) {
			if (dragging) {
				var x = e.clientX
				var y = e.clientY
				cx.lT(e.clientX, e.clientY).s('z').s()
				cx.cir(x, y, rad)
				cx.f()
				cx.b().mT(e.clientX, e.clientY)
			}
		}
		
		function engage(e) {
			dragging = true
			putPoint(e)
			cx.f($r())
		}
		
		function disengage() {
			dragging = false
			cx.b()
		}
		
		function setRad(newRad) {
			newRad = newRad < minRad ? minRad : newRad > maxRad ? maxRad : newRad
			rad = newRad
			cx.lW(rad * .8)
			$l('rad: ' + rad)
			$(radSpan).T(rad)
		}
	}
	CWS = JARED_DRAWING_APPLICATION_TUT5of6 = function () {
		$s({
			bd: {M: 0},
			$decrad: {},
			$incrad: {},
			_radcontrol: {
				tA: 'c',
				w: 30, h: 20,
				C: '_b',
				dp: 'inline-block', M: 4
			},
			$: {
				'font-family': 'san-serif',
				'box-sizing': 'border-box'
			},
			$toolbar: {position: 'fixed', top: 0, C: 'B', c: 'w', P: 10, h: 50, w: '100%'}
		})
		cv = $.cv('r', window.innerWidth, window.innerHeight).dp('block')
		cx = cv.gC()
		$.d().id('toolbar').A(
				$.d().id('rad').A(
						'Radius: ',
						$.sp(rad).id('radval'),
						$.d().id('decrad').K('radcontrol').A('(-)'),
						$.d().id('incrad').K('radcontrol').A('(+)')
				)
		)
		minRad = 1
		maxRad = 100
		dfRad = 20
		radSpan = $('#radval')[0]
		decRad = $('#decrad')[0]
		incRad = $('#incrad')[0]
		rad = 10
		dragging = false
		cx.f('B')
		cv.on('mousemove', putPoint)
		cv.on('mousedown', engage)
		cv.on('mouseup', disengage)
		$('#decrad').click(function () {
			$l('decrad')
			setRad(rad - 1)
		})
		$('#incrad').click(function () {
			$l('incrad')
			setRad(rad + 1)
		})
		function putPoint(e) {
			if (dragging) {
				var x = e.clientX
				var y = e.clientY
				cx.lT(e.clientX, e.clientY).s('z').s()
				cx.cir(x, y, rad)
				cx.f()
				cx.b().mT(e.clientX, e.clientY)
			}
		}
		
		function engage(e) {
			dragging = true
			putPoint(e)
			cx.f($r())
		}
		
		function disengage() {
			dragging = false
			cx.b()
		}
		
		function setRad(newRad) {
			newRad = newRad < minRad ? minRad : newRad > maxRad ? maxRad : newRad
			rad = newRad
			cx.lW(rad * .8)
			$l('rad: ' + rad)
			$(radSpan).T(rad)
		}
		
		$.bt('SAVE', function () {
			data = cx.dU()
			$l(data)
			window.open(data, '_blank', 'location=0, menubar=0')
		})
	}
	clipping()
	function clipping() { /*
	 If we compare clipping paths to the globalCompositeOperation property we've seen above, 
	 we see two compositing modes that achieve more or less the same effect in source-in and source-atop. 
	 The most important differences between the two are that clipping paths are never actually drawn to the canvas 
	 and the clipping path is never affected by adding new shapes. 
	 This makes clipping paths ideal for drawing multiple shapes in a restricted area.
	 */
		CST = CLIPSTARS = function () {
			Q(function (ld) {
				x.tl(75, 75).ac(60).clp()
				x.Star = function (r) {
					var ctx = this
					r = N(r, R(4, 2))
					ctx.b(r, 0, 'w') // first point drawn is the right most point
					_.t(9, function (i) {
						x.rt(36).lt(i % 2 == 0 ? (r / 0.5) * 0.2 : r, 0)
					})
					return x.f()
				}
				x.lg({cS: {g: 0, z: 1}, y1: -75, y2: 75})
						.fr(-75, -75, 250)
				_.t(10, function () {
					x._(function () {
						x.tl(R(150, -75),
								R(150, -75)).Star()
					})
				})
			})
			// http://jsfiddle.net/shiyam/w63z4hs6/
			canvas = $.c(600, 400).id('myCanvas')[0]
			var x = canvas.getContext('2d');
			var xx = canvas.width / 2;
			var y = canvas.height / 2;
			var clipx = canvas.width / 2;
			var clipy = canvas.height / 2;
			var radius = 75;
			var offset = 50;
			clipFunction();
			function clipFunction() {
				
				/*
				 * save() allows us to save the canvas context before
				 * defining the clipping region so that we can return
				 * to the default state later on
				 */
				x.save();
				x.beginPath();
				x.arc(clipx, clipy, radius, 0, 2 * Math.PI, false);
				x.clip();
				// draw blue circle inside clipping region
				x.beginPath();
				x.arc(xx - offset, y - offset, radius, 0, 2 * Math.PI, false);
				x.fillStyle = 'blue';
				x.fill();
				// draw yellow circle inside clipping region
				x.beginPath();
				x.arc(xx + offset, y, radius, 0, 2 * Math.PI, false);
				x.fillStyle = 'yellow';
				x.fill();
				// draw red circle inside clipping region
				x.beginPath();
				x.arc(xx, y + offset, radius, 0, 2 * Math.PI, false);
				x.fillStyle = 'red';
				x.fill();
				/*
				 * restore() restores the canvas context to its original state
				 * before we defined the clipping region
				 */
				x.restore();
				/*x.beginPath();
				 x.arc(x, y, radius, 0, 2 * Math.PI, false);
				 x.lineWidth = 10;
				 x.strokeStyle = 'blue';
				 x.stroke();*/
			}
			
			$("#myCanvas").on("mousedown", function () {
				$("#myCanvas").on("mousemove", function (e) {
					var mousePos = getMousePos(canvas, e);
					clipx = mousePos.x;
					clipy = mousePos.y;
					clipFunction();
				});
			});
			$("#myCanvas").on("mouseup", function () {
				$("#myCanvas").off("mousemove");
			});
			function getMousePos(canvas, evt) {
				var rect = canvas.getBoundingClientRect();
				return {
					x: evt.clientX - rect.left,
					y: evt.clientY - rect.top
				};
			}
		}
		//tit = $.cx('o', 200, 200)
		//tit.fillText('ok...', 30, 30)
		FIDL = function () {
			xT = $.cx('o', 200, 200)._fT('kjjkkjjk', 55, 55)
			x = $.cx('b', 200, 200)
			img = Im()
			img.onload = function () {
				x.b().mt([[10, 10], [100, 30], [180, 10], [200, 60]])
						.ac2(160, 70, 120, 0, 10)
						.lt([200, 180], [100, 150], [70, 180], [[20, 130], [50, 70]])
						.cP()
				x.clp().d(img)
			}
			img.src = "http://i.imgur.com/gwlPu.jpg"
		}
	}
}
function shad() {
	CANSHAD = function () {
		c = $.c('b', 700)
		x = c.cx()
		c.draw('me', 100, 100)
		c.shdC('y').shdB(100).shdX(300).shdY(100)
		c.draw('me', 200, 200)
		c.shdC('y').shdB(100).shdX(200).shdY(100)
		c.shdC('g')
		c.draw('me', 0, 300)
		c.shd('p', 30, 200, 20)
		c.draw('guy', 400, 200)
		//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
		// c.roundRect(100,50,100,100,50).stroke()//.fill()
		_.in(function () {
			c.ctx().col('y').lW(30)
			c.line(10, 10, 50, 500).stroke()
			c.line([
				[[100, 100], [200, 200], [140, 900]]
				// ,  [[150,150],[250,250], [20,300]]
			]).stroke();
			//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
			//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()}
		})
	}
}
function transf() {
	TFMF = function () {
		cx = $.cx()
		Q(function () {
			me = Q.get('me')
			cx.dI(me).sc(3, .5).dI(me)
			cx.rt(30).dI(me)
		})
	}
	FIT = function () {
		$cx$(function (cx, me) {
			cx.fit(me)
			$.fit(me)
		})
	}
	FIDLL = function () {
//http://jsfiddle.net/jimrhoskins/dDUC3/1/
		x = $.cx('p', 200, 200)
		// Create an image element
		img = Im()
		img.onload = function () {
			x.S()	// Save the state, so we can undo the clipping
			x.b()
			x.mt([[10, 10], [100, 30], [180, 10], [200, 60]])
					.ac2(160, 70, 120, 0, 10)
					.lt([200, 180], [100, 150], [70, 180], [[20, 130], [50, 70]])
					.cP()
			x.clp().d(img)
			x.R()	// Undo the clipping
		}
		img.src = "http://i.imgur.com/gwlPu.jpg"
		x1 = $.cx('v', 400, 300)
		x1.S()
		x1.fR(0, 0, 250, 100)
		x1.sTf(3, 2, -2, 1, 400, 10)
				.f('r').fR(0, 0, 250, 100)
		x1.sTf(1, .5, -.5, 1, 30, 10)
				.f('b').fR(0, 0, 250, 100)
		x1.R()
	}
}