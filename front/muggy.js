$.myMug = function (fn) {
	$.get('/myMug', fn)
}
$.fn.snap = function (fn) {
	var dU = this[0].toDataURL()
	$.post('/cutout', {
		dU: dU
		//, dats: this.dats //vestige from phaser physics?
	}, fn)
}
SNAP = function () {
	Q(function () {
		chicks = Q.get('chicks')
		me = Q.get('me')
		c = $.c()
		c.ctx().d(chicks).d(me)
		$.bt(function () {
			c.snap()
		})
	})
}
$.dragStage = function (x, y) {
	$.dragStage1 = function (x, y) {
		$.dragStage = function (x, y) {
			c = $.canvas('g', 400)
			s = new cjs.Stage(c[0]).tick()
			dragFrame(c).A()
			return s
		}
		var can = $.c('g', 400)
		$St(can[0])
		$.dragFrame(can)
		return st
	}
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
IX1 = INDEX = DRAGSTAGETRANSFORM = function () {
	s = $.dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.t(10, function () {
			s.bm('guy', SL)
		})
		s.ch(b, 3)
	})
}
INDEXX = function () {
	s = $.dragStage().bm('me', function (bm) {
		bm.dg()
		_.t(10, function () {
			s.bm('guy', cjs.SL)
		})
		s.ix(bm, 3)
	})
}
CV20 = DRAGSTG = function () {
	Q(function () {
		c = $.c('g', 600, 300)
		f = $.dragFrame(c)
		x = c.ctx()
		x.d('me', 100, 100)
		c.$(function (x1, y1) {
			x.a(x1, y1, 2).s()
		})
	})
}
$.fn.selectCutout = function () {
	$('.cutout').each(function () {
		$(this).C('b')
	})
	this.parent().C('y')
}
YellowDif = function () {
	var d = $.divA(500).C('y')(
			$.bt('freeze', createjs.Tween.removeAllTweens),
			$.bt('right', function () {
				bitmap.x(bitmap.x() + 10)
			}),
			$.bt('left', function () {
				bitmap.x(bitmap.x() - 10)
			}),
			$.bt('up', function () {
				bitmap.y(bitmap.y() - 10)
			}),
			$.bt('down', function () {
				bitmap.y(bitmap.y() + 10)
			}),
			$.br(),
			//fix
			$.bt('bigger', function () {
				bitmap.sxy(1.1, '*')
			}),
			$.bt('smaller', function () {
				bitmap.sxy(.9, '*')
			}),
			//
			$.bt('wider', function () {
				bitmap.sx(bitmap.sx() * 1.1)
			}),
			$.bt('thinner', function () {
				bitmap.sx(bitmap.sx() * .9)
			}),
			$.bt('taller', function () {
				bitmap.sy(bitmap.sy() * 1.1)
			}),
			$.bt('shorter', function () {
				bitmap.sy(bitmap.sy() * .9)
			}),
			$.br(),
			$.bt('CW', function () {
				bitmap.rt(bitmap.rt() + 10)
			}),
			$.bt('CCW', function () {
				bitmap.rt(bitmap.rt() - 10)
			}),
			$.br(),
			$.bt('get index', function () {
				pop('index: ' + st.ix(bitmap))
			}),
			$.bt('set index to 3', function () {
				st.ix(bitmap, 3)
				pop('index: ' + st.ix(bitmap))
			}),
			$.bt('z-up', function () {
				st.ix(bitmap, st.ix(bitmap) + 1)
			}),
			$.bt('z-down', function () {
				st.ix(bitmap, st.ix(bitmap) - 1)
			}),
			$.bt('remove', function () {
				st.rm(bitmap)
			}),
			$.bt('clone', function () {
				st.a(
						EaselContainer().a(
								SuperDisplayObject(bitmap.ob.clone())
						)
				)
			}),
			$.br(),
			$.bt('save', function () {
				st.sv(function () {
					loadImagesDiv()
				})
			}),
			$.bt('paint', function () {
				stPainter(st)
			}),
			$.bt('', function () {
			}),
			///////////
			$.bt('freeze', createjs.Tween.removeAllTweens),
			$.bt('right', function () {
				bitmap.x(bitmap.x() + 10)
			}),
			$.bt('left', function () {
				bitmap.x(bitmap.x() - 10)
			}),
			$.bt('up', function () {
				bitmap.y(bitmap.y() - 10)
			}),
			$.bt('down', function () {
				bitmap.y(bitmap.y() + 10)
			}),
			$.br(),
			//fix
			$.bt('bigger', function () {
				bitmap.sxy(1.1, '*')
			}),
			$.bt('smaller', function () {
				bitmap.sxy(.9, '*')
			}),
			//
			$.bt('wider', function () {
				bitmap.sx(bitmap.sx() * 1.1)
			}),
			$.bt('thinner', function () {
				bitmap.sx(bitmap.sx() * .9)
			}),
			$.bt('taller', function () {
				bitmap.sy(bitmap.sy() * 1.1)
			}),
			$.bt('shorter', function () {
				bitmap.sy(bitmap.sy() * .9)
			}),
			$.br(),
			$.bt('CW', function () {
				bitmap.rt(bitmap.rt() + 10)
			}),
			$.bt('CCW', function () {
				bitmap.rt(bitmap.rt() - 10)
			}),
			$.br(),
			$.bt('get index', function () {
				pop('index: ' + st.ix(bitmap))
			}),
			$.bt('set index to 3', function () {
				st.ix(bitmap, 3)
				pop('index: ' + st.ix(bitmap))
			}),
			$.bt('z-up', function () {
				st.ix(bitmap, st.ix(bitmap) + 1)
			}),
			$.bt('z-down', function () {
				st.ix(bitmap, st.ix(bitmap) - 1)
			}),
			$.bt('remove', function () {
				st.rm(bitmap)
			}),
			$.bt('clone', function () {
				st.a(
						EaselContainer().a(
								SuperDisplayObject(bitmap.ob.clone())
						)
				)
			}),
			$.br(),
			$.bt('save', function () {
				st.sv(function () {
					loadImagesDiv()
				})
			}),
			$.bt('paint', function () {
				stPainter(st)
			}),
			$.bt('', function () {
			})
	)
	return d
}
SELECTED = function () {
	st = $.dragStage()
	/*
	 st.bm('coin', function (bm) {
	 coin = bm;
	 SL(coin)
	 selected(bm)
	 })
	 st.bm('sun', function (bm) {
	 sun = bm;
	 SL(bm)
	 selected(bm)
	 })*/
	TextAdder(st)
	st.bm('me', function (bm) {
		me = bitmap = bm
		SL(bm)
		bm.rgc('+')
		/*
		 cjs.scaleShake(bm)
		 //rotateShake(bm)
		 selected(bm)
		
		 st.bm('flame', function (bm) {
		 flame = bm;
		 SL(bm);
		 selected(bm)
		 })
		 st.bm('guy', function (bm) {
		 guy = bm;
		 SL(bm);
		 selected(bm)
		 })*/
	})
	d = $.d('y', '+')
	d.E()
	$.eG('cutouts', function (cutout) {
		d.A($.imageSizeFuncCan(cutout.dU, 1, function () {
			st.bm(cutout.dU, function (bm) {
				//SL(bm.sXY(.4)); bm.rgc('+')
				//selected(bm)
				function selected(bm) {//SL(bm)
					bm.$(function () {
						cjs.Tween.removeAllTweens()
						bitmap = bm
						cjs.scaleShake(bm.dO)
					})
				}
			})
		}))
	})
	d = YellowDiv()
}
$.fn.dots = function () {
	var el = this
	el.img = el.copy()
	// el.img = $.img()
	// el.img.src(el.toDataURL())
	//el.copy()
	el.DOTS = []
	el.dats = []
	el.$(function (x, y) {
		x = parseInt(x)
		y = parseInt(y)
		$l('click:' + x + ', ' + y)
		el.cir(x, y)
		el.DOTS.push([x, y])
		el.dats.push(x);
		el.dats.push(y) //vestige from phaser physics?
		el.line(el.DOTS)
	})
	el.$$(function (X, Y) {
		var du
		//el.C('X')
		el.off('click')
		el.closePath()  //el.paste() // el.copy()  //el.save()
		du = el.toDataURL()
		//el.clear()
		//	el.clip()
		//	el.paste() 
		//	el.fit(du)
	})
	return el
}
$.cut = function (m) {
	z();
	m = m || 'me'
	$('body').A(
			$.bt('save sprite', function () {
				c.snap(CUTOUTS)//; EDIT()
			}), $.br(2),
			$.bt('start cut', function () {
				c.dots()
			}), $.br(2),
			$.bt('restart cut', function () {
				$.cut(m)
			}), $.br(2),
			c = $.c('r', 500, 500).A().fit(m)
	)
} // $.bt('file uploads', function () {window.location = '/wap/uploads'}),
CHECKMUG = function () {
	$.myMug(function (mug) {
		m = mug
		i = new Image()
		i.src = mug
		$(i).A()
	})
}
$mug = function (un, fn) {
	//make default un YOU (_username)
	$.get('/mugByUn/' + un, function (mug) {
		if (mug) {
			fn(mug)
		}
	})
}

getMug = function () {
	$mug(function (mug) {
		_userMug = mug
	})

}

MYMUG=function(){

	$.i(defaultMug)
	
	$.myMug(function(mg){
		$l(m =mg)
		$.i(mg)
		i = new Image()
		$i = $(i)
		$i.A()
		i.src = mg
	})
	
	$.bt('CHANGEMUGTX', function () {
		//it automatically changes your userMug to the defaultMug
		$.post('/changeMug',
				{dU: defaultMug},
				function () {
					 $l("ffg")
					//TWEEN()
				})
	})
}
 
SETMUG=function(){

Q(function(){
	me= Q.get('me')
	x=$.c().ctx()
	x.d( me, 0,0 )
	_.in(function(){
		dU = x.dU()
		$l(dU)
	})
	
	
})

	
}
sav = function (stage, a) {
	return function () {
		stage.sv(a)
	}
}
eachImage = eaI = function (f) {
	$.getJSON('/img',
			function (i) {
				_.each(i, f)
			})
}
EDIT = function () {
	$St()
	$St()
	container = $.d()
	imgHolder = $.d()
	container.A(imgHolder, st.canvas)
	ct = $.d().id('ct').A(d = $.d(), st.canvas)
	container = $.d()
	imgHolder = $.d()
	container.A(imgHolder, st.canvas)
	$.eJ('/cutouts', function (i) {
		c = d.Can('o', 40, 40)
		c.fit(i.d)
		c.$(function () {
			st.bm(i.d, function (bm) {
				bm.rC(200, 200)
						.XY(200, 300)
						.TR()
			})
		})
		c.mar(20).C('r')
		// d.A($.btX('/img', i, '-'))
	})
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			c = can
			can.click(function () {
				stage.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
//    return stage
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	$.$$(function () {
		$.post('/cutout', {
					dU: st.dU()
				}, $.rl
		)
	})
	d.C('b').al(.6).W(400).H(100)
	d.overflow('scroll').css('overlflow-y', 'auto')
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.c('X', 100, 100)
					.fit(img.d) // must be in body in order to use FIT!
			c = can
			can.$(function () {
				st.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
	container.dblclick(function () {
		$.post('/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
}
EDITOR = function () {
	var r = '#0FF', size = 2, oX = 0, oY = 0, shape,
			st = $.dragStage(),
			imgHolder = $.d('y', '+')
	$.eG('img', function (i) {
		imgHolder($.imgSizeFnCan(
				i.d, 1, function () {
					st.bm(i.d, function (bm) {
						SL(bm.sxy(.4))
					}, '+')
				}))
	})
	TextAdder2(st)
}
EDIT1 = function () {
	setup()
	container.A(imgHolder, st.canvas)//.$$(sav(st, 'edit'))
	$.getJSON('/img', function (i) {
		imgHolder.A(
				$.c('X', 100, 100).fit(img.d).click(function () {
					stage.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
		_.e(i, function (img) {
			var can = $.c('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			can.click(function () {
				stage.bm(img.d, function (bm) {
					bm.rCenter().X(400).Y(400)
					TR(bm)
				})
			})
			imgHolder.A(can)
		})
	})
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	return st
}
function onDblClk() {
	$.post('/img',
			{d: st.canvas.toDataURL()},  //, dats: x.dats
			function () {
				window.location = window.location
			})
}
function onEachImg(img) {
	var can = $.c('X', 100, 100).fit(img.d) // must be in body in order to use FIT!
	can.$(function () {
		st.bm(img.d, function (bm) {
			bm.rCenter().X(400).Y(400)
			TR(bm)
		})
		st.bm(img.d, function (bm) {
			bm.rCenter().X(400).Y(400)
			TR(bm)
		})
	})
	imgHolder.A(can)
	imgHolder.A($.c('X', 100, 100).fit(img.d))
	imgHolder.$(function () {
		st.bm(img.d, function (bm) {
			bm.rCenter('+');
			TR(bm)
		})
	})
}
function shake() {
}
function setup() {//the challenge here is to make the stage draggable
// but still usable, by dragging it by a wrapper div
	$St()
	container = $.d()
	imgHolder = $.d()
}
AVATAR = function () {
	st = $.dragStage().t()
	//d = qq( st.ob.canvas )
	//d2=$.d().drg().w(500).h(500).c('o')
	//CT(d, st).o('$$',  sav(st,'avatar') )
	st.$$(function () {
		st.snap('avatar')
	})
	d = $.d('x', '+')
	$.Gj('img', function (i) {
		_.e(i, eachI)
	})
	//d2( st )
}
function ct_mug() {
	ct._mug = function (sc, fn) {
		var ct = this
		$.get('/myMug', function (mug) {
			ct.bm(mug, sc, fn)
		})
		return ct
	}
	ct.mug = function () {
		var ct = this, g = G(arguments), o
		o = g.N_ ? {sc: g.f, fn: g.s} : {fn: g.f}
		o.sc = N(o.sc) ? o.sc : 1
		o.fn = o.fn || function () {
		}
		$.myMug(function (m) {
			ct.bm(m, o.sc, o.fn)
		})
		return ct
	}
}
ct_mug()
LDTX = function () {
	St()
	$Ld([{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}],
			function (ld) {
				st.A($Bm(ld.get("myImage")))
			}
	)
}
MUG = function () {
	St().mug(function (mug) {
		m = mug
	})
}
HITCIRCLES = function () {
	//beautiful demo i stole! :)
	holder = $St().drag() // look no .tick() necesary!! look below :)
	ct = $Ct().a2(st).XY(150)
	_.t(25, function () {
		var sh = $Sh(), gx = sh.graphics
		gx.f(randomHSL()).dc(0, 0, 30)
		holder.A(sh.XY(randomLocation(), randomLocation()))
	})
	$t(tick)
	function randomLocation() {
		return M.r() * 300 - 150
	}
	
	function tick(event) {
		holder.rt(3, '+')
		var numChildren = holder.getNumChildren()
		_.e(holder.children, function (ch) {
			ch.al(child.underMouse() ? 1 : 0.1)
		})
		/*
		 for(var i = 0; i < numChildren; i++){  //for each child
		
		 var child = holder.getChildAt(i)
		 child.alpha = 0.1
		 var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
		 if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)){
		 child.alpha = 1}
		 }
		 */
		st.u(event)
	}
}
HIT = function () {
	St()
	st.mug(function (mug) {
		mug.dg()
		st.bm('flame', function (flame) {
			/*
			 flame.drag()
			 flame.scaleX = .1
			 flame.scaleY = .1
			 flame.regX = flame.getBounds().width / 2
			 flame.regY = 500
			 flame.x = 400
			 flame.y = 400
			 stage.on('dblclick', function (e) {
			 flame.x = e.rawX;
			 flame.y = e.rawY
			 })
			 stage.on('stagemousedown', function (e) {
			 localCoords = mug.globalToLocal(e.rawX, e.rawY)
			 hit = mug.hitTest(localCoords.x, localCoords.y)
			 if ($l(hit)) { //$l('hit')
			 stage.backgroundColor('red'); //$l( e.X+ ' '+ e.Y )
			 }
			 else {
			 $l('no hit')
			 stage.backgroundColor('yellow')
			 }
			 })
			 stage.on('stagemousemove', function (e) {
			 localCoords = mug.globalToLocal(flame.x, flame.y)
			 hit = mug.hitTest(localCoords.x, localCoords.y)
			 if ($l(hit)) {
			 $l('HIT')
			 stage.backgroundColor('red')
			 $l(e.rawX + ' ' + e.rawY)
			 }
			 else {
			 $l('NO HIT')
			 stage.backgroundColor('yellow')
			 }
			 })
			 */
			b = flame
			b.dg()
			b.sXY(.1)
					.rXY(flame.getBounds().width / 2, 500).XY(400, 400)
			//st.$$(  function(e){flame.x= e.rawX;  flame.y= e.rawY  })
			st.MD(function (e) {
				localCoords = mug.globalToLocal(e.rawX, e.rawY)
				hit = mug.hitTest(localCoords.x, localCoords.y)
				if ($l(hit)) {
					$l('hit');
					st.bgC('red')
				} //;$l( e.X+ ' '+ e.Y )
				else {
					$l('no hit');
					st.bgC('yellow')
				}
			})
			st.MM(function (e) {
				localCoords = mug.globalToLocal(b.x, b.y)
				hit = mug.hitTest(localCoords.x, localCoords.y)
				if (hit) {  //$l('HIT: '+ e.rawX+ ', '+ e.rawY);
					st.bgC('red')
				}
				else {
					$l('NO HIT');
					st.bgC('yellow')
				}
			})
		})
	})
}
randomHSL = function () {
	return cjs.Graphics.getHSL(M.r() * 360, 100, 50)
}
TRANSF = function () {
	stage = St()
	degToRad = Math.PI / 180;
	//cjs.sharedCode()
	// cjs.utils()
	cjs.slider()
	stage.enableMouseOver();
	//cjs.Touch.enable(stage);
	stage.mouseMoveOutside = true;
	var img = new Image()
	img.onload = handleImageLoad;
	img.src = "/chicks.png";
	function handleImageLoad(evt) {
		var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
		sliceWidth = imgWidth / sliceCount;
		sliceContainer = $Ct()
		sliceContainer.x = st.canvas.width / 2;
		for (var i = 0; i < sliceCount; i++) {
			var slice = $Bm(img)
			slice.sourceRect = new cjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
			slice.cache(0, 0, sliceWidth, imgHeight);
			slice.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix())];
			sliceContainer.A(slice);
		}
		slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
		slider.on("change", handleSliderChange, this);
		st.A(sliceContainer, slider);
		updateEffect(slider.value);
	}
	
	function handleSliderChange(evt) {
		updateEffect(evt.target.value);
	}
	
	function updateEffect(value) {
		var l = sliceContainer.getNumChildren();
		for (var i = 0; i < l; i++) {
			var slice = sliceContainer.getChildAt(i);
			slice.y = M.sin(value * degToRad) * -sliceWidth / 2;
			if (i % 2) {
				slice.skewY = value
			}
			else {
				slice.skewY = -value;
				slice.y -= sliceWidth * M.sin(slice.skewY * degToRad);
			}
			slice.x = sliceWidth * (i - l / 2) * M.cos(slice.skewY * degToRad);
			slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
			slice.ca()
		}
		st.u();
	}
}
TRANSFORM = function () {
	$.fm()
	s = $St()
	s.mug(function (b) {
		st = s
		b.XY(0, 0)
		b.rgc('+')
		TR(b)
		s.mug(function (b) {
			b.XY(50, 50).rgc('+');
			TR(b)
		})
		/*
		 wMb(function (b) {
		 b.XY(100, 100).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(200, 200).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(300, 300).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(400, 400).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(150, 150).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(250, 250).rgc('+');
		 TR(b)
		 }, s)
		 wMb(function (b) {
		 b.XY(350, 350).rgc('+');
		 TR(b)
		 }, s)
		 */
	}, '-')
	s1.A($.bt('rotate', function () {
				s.ch('-')
				s.mug(function (b) {
					s.M(50); //b=Do(bj(b))
					RT(b.XY(400))
					s.mug(function (b) {
								b.XY(300).al(.5)
								RT(b, '-')
							}
					)
					s.mug(function (b) {
						KK(b.XY(200).sXY(1.4), '+')
					})
					s.mug(function (b) {
								KK(b.XY(100).sXY(.6))
							}
					)
				})
			}), $.br(2),
			$.bt('skew', function () {
				s.ch('-')
				s.mug(function (b) {
					s.mug(function (b) {
						SK(b.XY(300).rgc('+').sXY(1.5))
						s.W(2000).H(2000)
					})
					//b.XY(500,400).rgc('+').sXY(1.5);RT(b);SK(b)
				})
			}), $.br(2),
			$.bt('register', function () {
				s.rm()
				s.mug(function (b) {
					TR(b);
					rg1(b);
					reggy(b)
				})
				s.mug(function (b) {
					TR(b);
					b.rgc();
					rg1(b);
					reggy(b)
				})
			}),
			$.br(2))
}
function bods() {
	Bod2 = function () {
		var c1 = new createjs.Container(),
				cL = new createjs.Container()
		c1.mug(function (m) {
			SL(m, c1)
			m.sXY(.4)
			// c1.cI(m, 0)
		})
		c1.bm('arm', function (b) {//arm=b;
			b.name = 'arm';
			b.sX(-.8).X(140).Y(100).rX(200).rY(80)
			RT(b)
			b.on('dblclick', function () {
				tweens.rpunch(b)
			})
		})
		cL.bm('uparm',
				function (b) {//lu=b
					b.name = ('lu')
					RT(b, cL)
					b.sX(.8).X(80).Y(180).rX(200).rY(80)
					cL.on('dblclick',
							function () {
								tweens.lpunch(cL)
							})
					cL.X(140).Y(100).rX(100).rY(100)
				})
		cL.bm('forearm',
				function (b) {//lf=b
					b.name = ('lf')
					b.sX(.8).X(-100).Y(140).rX(20).rY(120)
					RT(b)
				})
		return c1.A(cL)
	}
	Bod1 = function () {
		var outerCont = new createjs.Container().drag()
		var innerCont = new createjs.Container()
		outerCont.A(innerCont)
		outerCont.mug(
				function (m) {
					m.sXY(.4)
					createjs.bindSlide(m, outerCont)
					outerCont.bm('arm', function (b) {
						b.name = 'arm'
						b.sX(-.8).XY(140, 100).rXY(200, 80)
						createjs.bindRotate(b)
						b.on('dblclick', function () {
							tweens.rpunch(b)
						})
					})
					innerCont.XY(40, 120).rXY(40, 100)
					innerCont.bm('uparm', function (b) {
						b.name = 'lu'
						b.sX(.8).XY(80, 180).rXY(200, 80)
						createjs.bindRotate(b, innerCont)
					})
					innerCont.bm('forearm', function (b) {
						b.name = 'lf'
						b.XY(-100, 140).sX(.8).rXY(20, 120)
						createjs.bindRotate(b)
						innerCont.on('dblclick', function () {
							tweens.lpunch(b)
						})
					})
				})
		return b = outerCont
	}
	BODS = function () {
		z()
		createjs.stage(800, 800).A().tick()
				.A(Bod1(), Bod2())
	}
	BOD = function () {
		z()
		s = createjs.stage(800, 800).A().tick()
		var b1 = Bod1(), b2 = Bod2().XY(300),
				f = Flame1().XY(300, 500),
				cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
		s.A(b1, f, b2, cyc, cyc2)
	}
	Bod2 = function () {
		var c1 = new createjs.Container(),
				cL = new createjs.Container()
		c1.mug(function (m) {
			SL(m, c1)
			m.sXY(.4)
			// c1.cI(m, 0)
		})
		c1.bm('arm', function (b) {//arm=b;
			b.name = 'arm';
			b.sX(-.8).X(140).Y(100).rX(200).rY(80)
			RT(b)
			b.on('dblclick', function () {
				tweens.rpunch(b)
			})
		})
		cL.bm('uparm',
				function (b) {//lu=b
					b.name = ('lu')
					RT(b, cL)
					b.sX(.8).X(80).Y(180).rX(200).rY(80)
					cL.on('dblclick',
							function () {
								tweens.lpunch(cL)
							})
					cL.X(140).Y(100).rX(100).rY(100)
				})
		cL.bm('forearm',
				function (b) {//lf=b
					b.name = ('lf')
					b.sX(.8).X(-100).Y(140).rX(20).rY(120)
					RT(b)
				})
		return c1.A(cL)
	}
	Bod1 = function () {
		var outerCont = new createjs.Container().drag()
		var innerCont = new createjs.Container()
		outerCont.A(innerCont)
		outerCont.mug(
				function (m) {
					m.sXY(.4)
					createjs.bindSlide(m, outerCont)
					outerCont.bm('arm', function (b) {
						b.name = 'arm'
						b.sX(-.8).XY(140, 100).rXY(200, 80)
						createjs.bindRotate(b)
						b.on('dblclick', function () {
							tweens.rpunch(b)
						})
					})
					innerCont.XY(40, 120).rXY(40, 100)
					innerCont.bm('uparm', function (b) {
						b.name = 'lu'
						b.sX(.8).XY(80, 180).rXY(200, 80)
						createjs.bindRotate(b, innerCont)
					})
					innerCont.bm('forearm', function (b) {
						b.name = 'lf'
						b.XY(-100, 140).sX(.8).rXY(20, 120)
						createjs.bindRotate(b)
						innerCont.on('dblclick', function () {
							tweens.lpunch(b)
						})
					})
				})
		return b = outerCont
	}
	BODS = function () {
		z()
		createjs.stage(800, 800).A().tick()
				.A(Bod1(), Bod2())
	}
	BOD = function () {
		z()
		s = createjs.stage(800, 800).A().tick()
		var b1 = Bod1(), b2 = Bod2().XY(300),
				f = Flame1().XY(300, 500),
				cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
		s.A(b1, f, b2, cyc, cyc2)
	}
	Bod2 = function () {
		var c1 = new createjs.Container(),
				cL = new createjs.Container()
		c1.mug(function (m) {
			SL(m, c1)
			m.sXY(.4)
			// c1.cI(m, 0)
		})
		c1.bm('arm', function (b) {//arm=b;
			b.name = 'arm';
			b.sX(-.8).X(140).Y(100).rX(200).rY(80)
			RT(b)
			b.on('dblclick', function () {
				tweens.rpunch(b)
			})
		})
		cL.bm('uparm',
				function (b) {//lu=b
					b.name = ('lu')
					RT(b, cL)
					b.sX(.8).X(80).Y(180).rX(200).rY(80)
					cL.on('dblclick',
							function () {
								tweens.lpunch(cL)
							})
					cL.X(140).Y(100).rX(100).rY(100)
				})
		cL.bm('forearm',
				function (b) {//lf=b
					b.name = ('lf')
					b.sX(.8).X(-100).Y(140).rX(20).rY(120)
					RT(b)
				})
		return c1.A(cL)
	}
	Bod1 = function () {
		var outerCont = new cjs.Container().drag()
		var innerCont = new cjs.Container()
		outerCont.A(innerCont)
		outerCont.mug(function (m) {
			cjs.bindSlide(m.scXY(.4), outerCont)
			outerCont.bm('arm', function (b) {
				b.name = 'arm'
				cjs.bindRotate(b.sX(-.8).XY(140, 100).rXY(200, 80))
				b.on('dblclick', function () {
					tweens.rpunch(b)
				})
			})
			innerCont.XY(40, 120).rXY(40, 100)
			innerCont.bm('uparm', function (b) {
				b.name = 'lu'
				b.sX(.8).XY(80, 180).rXY(200, 80)
				cjs.bindRotate(b, innerCont)
			})
			innerCont.bm('forearm', function (b) {
				b.name = 'lf'
				cjs.bindRotate(b.XY(-100, 140).sX(.8).rXY(20, 120))
				innerCont.on('dblclick', function () {
					tweens.lpunch(b)
				})
			})
		})
		return b = outerCont
	}
	BODS = function () {
		z()
		createjs.stage(800, 800).A().tick()
				.A(Bod1(), Bod2())
	}
	BOD = function () {
		z()
		s = cjs.stage(800, 800).A().tick()
		var b1 = Bod1(), b2 = Bod2().XY(300),
				f = Flame1().XY(300, 500),
				cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
		s.A(b1, f, b2, cyc, cyc2)
	}
	function cycle() {
		Cycle1 = function () {
			var cont = new createjs.Container()
			cont.mug(function (mug) {
				mug.sXY(.4)
				cont.bm('uni', function (bitmap) {
					bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
					bitmap.name = 'uni'
					createjs.bindTransform(mug, cont)
					createjs.bindRotate(bitmap, cont)
				})
			})
			return cont
		}
		Cycle2 = function () {
			var cont = new createjs.Container()
			var qu = new createjs.LoadQueue().complete(graphics).manifest([
				{id: "mug", src: "/getMug"},
				{id: "uni", src: "/uni.png"}
			])
			
			function graphics() {
				cont.bm(
						qu.getResult("uni"),
						function (b) {
							bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
							bitmap.name = ('uni')
						})
				cont.bm(
						$.img($.parseJSON(qu.getResult("mug"))),
						function (b) {
							mug = b.sXY(.4)
						})
				SL(mug, cont)
				cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
			}
			
			return cont
		}
		CYCLE = function () {
			z()
			s = $stage(800, 800).A().tick()
			c1 = Cycle1()
			c2 = Cycle2()
			s.A(c1, c2)
		}
		Cycle1 = function () {
			var cont = new createjs.Container()
			cont.mug(function (mug) {
				mug.sXY(.4)
				cont.bm('uni', function (bitmap) {
					bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
					bitmap.name = 'uni'
					createjs.bindTransform(mug, cont)
					createjs.bindRotate(bitmap, cont)
				})
			})
			return cont
		}
		Cycle2 = function () {
			var cont = new createjs.Container()
			var qu = new createjs.LoadQueue().complete(graphics).manifest([
				{id: "mug", src: "/getMug"},
				{id: "uni", src: "/uni.png"}
			])
			
			function graphics() {
				cont.bm(
						qu.getResult("uni"),
						function (b) {
							bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
							bitmap.name = ('uni')
						})
				cont.bm(
						$.img($.parseJSON(qu.getResult("mug"))),
						function (b) {
							mug = b.sXY(.4)
						})
				SL(mug, cont)
				cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
			}
			
			return cont
		}
		CYCLE = function () {
			z()
			s = $stage(800, 800).A().tick()
			c1 = Cycle1()
			c2 = Cycle2()
			s.A(c1, c2)
		}
	}
	
	function flame() {
		Flame1 = function () {
			var c = new cjs.Container().drag()
			c.bm('flame', function (b) {
				tweens.shakeY(b)
				c.mug(function (b) {
					b.rCenter()
					tweens.shakeX(tweens.rott(b))
					c.bm('flame', tweens.shakeX)
				})
				c.on('dblclick', function () {
					c.bm('flame',
							function (b) {
								b.sXY(.2)
								tweens.prod1(b)
							})
					c.bm('flame',
							function (b) {
								b.sXY(.2)
								tweens.prod2(b)
							})
				})
			})
			return c
		}
		FLAME = function () {
			s = $stage(800, 800).A().tick()
			f = Flame1().X(300)
			s.A(f)
		}
		Flame1 = function () {
			var c = new cjs.Container().drag()
			c.bm('flame', function (b) {
				tweens.shakeY(b)
				c.mug(function (b) {
					b.rCenter()
					tweens.shakeX(tweens.rott(b))
					c.bm('flame', tweens.shakeX)
				})
				c.on('dblclick', function () {
					c.bm('flame',
							function (b) {
								b.sXY(.2)
								tweens.prod1(b)
							})
					c.bm('flame',
							function (b) {
								b.sXY(.2)
								tweens.prod2(b)
							})
				})
			})
			return c
		}
		FLAME = function () {
			s = $stage(800, 800).A().tick()
			f = Flame1().X(300)
			s.A(f)
		}
		Flame1 = function () {
			var c = new cjs.Container().drag()
			c.bm('flame', function (b) {
				tweens.shakeY(b)
				c.mug(function (b) {
					b.rCenter()
					tweens.shakeX(tweens.rott(b))
					c.bm('flame', tweens.shakeX)
				})
				c.on('dblclick', function () {
					c.bm('flame', function (b) {
						b.sXY(.2)
						tweens.prod1(b)
					})
					c.bm('flame', function (b) {
						tweens.prod2(b.sXY(.2))
					})
				})
			})
			return c
		}
		FLAME = function () {
			s = $stage(800, 800).A().tick()
			f = Flame1().X(300)
			s.A(f)
		}
	}
	
	function more() {
		BOD = function () {
			z()
			s = $St(800, 800).A(
					b1 = Bod1(),
					b2 = Bod2().XY(300),
					cyc = Cycle(500),
					f = Flame(200)
			)
			function Cycle(x, y, rt) {
				ct = $Ct().mug(function (mug) {
					mug.sXY(.4)
					ct.bm('uni', function (b) {
						b.sX(-.8).XY(-20, 200).rXY(240, 80)
						b.n('uni')
						cjs.TR(mug, ct)
						cjs.RT(b, ct)
					})
				})
				if (N(x)) {
					ct.X(x)
				}
				if (N(y)) {
					ct.Y(y)
				}
				if (N(rt)) {
					ct.rt(rt)
				}
				return ct
			}
			
			function Flame(x, y) {
				var c
				c = $Ct().dg()
				c.bm('flame', function (b) {
					tweens.shakeY(b)
					c.mug(function (b) {
						b.rC()
						tweens.shakeX(tweens.rott(b))
						c.bm('flame', tweens.shakeX)
					})
					c.$$(function () {
						c.bm('flame', function (b) {
							tweens.prod1(b.sXY(.2))
						})
						c.bm('flame', function (b) {
							tweens.prod2(b.sXY(.2))
						})
					})
				})
				if (N(x)) {
					c.X(x)
				}
				if (N(y)) {
					c.Y(y)
				}
				return c
			}
			
			function Bod1() {
				var outerCont = $Ct().dg()
				var innerCont = $Ct()
				outerCont.A(innerCont)
				outerCont.mug(
						function (m) {
							m.sXY(.4)
							cjs.bindSlide(m, outerCont)
							outerCont.bm('arm', function (b) {
								b.name = 'arm'
								b.sX(-.8).XY(140, 100).rXY(200, 80)
								cjs.bindRotate(b)
								b.$$(function () {
									tweens.rpunch(b)
								})
							})
							innerCont.XY(40, 120).rXY(40, 100)
							innerCont.bm('uparm', function (b) {
								b.sX(.8).XY(80, 180).rXY(200, 80)
								cjs.bindRotate(b, innerCont)
							})
							innerCont.bm('forearm', function (b) {
								b.name = 'lf'
								b.XY(-100, 140).sX(.8).rXY(20, 120)
								cjs.bindRotate(b)
								innerCont.$$(function () {
									tweens.lpunch(b)
								})
							})
						})
				return b = outerCont
			}
			
			function Bod2(x, y) {
				var c1 = $Ct(), cL = $Ct()
				c1.mug(function (m) {
					SL(m.sXY(.4), c1)
				})
				c1.bm('arm', function (b) {
					b.sX(-.8).X(140).Y(100).rX(200).rY(80)
					RT(b);
					b.$$(function () {
						tweens.rpunch(b)
					})
				})
				cL.bm('uparm', function (b) {
					RT(b, cL)
					b.sX(.8).XY(80, 180).rXY(200, 80)
					cL.$$(function () {
						tweens.lpunch(cL)
					})
					cL.XY(140, 100).rXY(100, 100)
				})
				cL.bm('forearm', function (b) {
					b.name = ('lf')
					b.sX(.8).XY(-100, 140).rXY(20, 120)
					RT(b)
				})
				return c1.A(cL)
			}
		}
		BOD = function () {
			z()
			s = $St(800, 800).A(
					b1 = Bod1(),
					b2 = Bod2().XY(300),
					cyc = Cycle(500),
					f = Flame(200)
			)
			function Cycle(x, y, rt) {
				ct = $Ct().mug(function (mug) {
					mug.sXY(.4)
					ct.bm('uni', function (b) {
						b.sX(-.8).XY(-20, 200).rXY(240, 80)
						b.n('uni')
						cjs.TR(mug, ct)
						cjs.RT(b, ct)
					})
				})
				if (N(x)) {
					ct.X(x)
				}
				if (N(y)) {
					ct.Y(y)
				}
				if (N(rt)) {
					ct.rt(rt)
				}
				return ct
			}
			
			function Flame(x, y) {
				var c
				c = $Ct().dg()
				c.bm('flame', function (b) {
					tweens.shakeY(b)
					c.mug(function (b) {
						b.rC()
						tweens.shakeX(tweens.rott(b))
						c.bm('flame', tweens.shakeX)
					})
					c.$$(function () {
						c.bm('flame', function (b) {
							tweens.prod1(b.sXY(.2))
						})
						c.bm('flame', function (b) {
							tweens.prod2(b.sXY(.2))
						})
					})
				})
				if (N(x)) {
					c.X(x)
				}
				if (N(y)) {
					c.Y(y)
				}
				return c
			}
			
			function Bod1() {
				var outerCont = $Ct().dg()
				var innerCont = $Ct()
				outerCont.A(innerCont)
				outerCont.mug(
						function (m) {
							m.sXY(.4)
							cjs.bindSlide(m, outerCont)
							outerCont.bm('arm', function (b) {
								b.name = 'arm'
								b.sX(-.8).XY(140, 100).rXY(200, 80)
								cjs.bindRotate(b)
								b.$$(function () {
									tweens.rpunch(b)
								})
							})
							innerCont.XY(40, 120).rXY(40, 100)
							innerCont.bm('uparm', function (b) {
								b.sX(.8).XY(80, 180).rXY(200, 80)
								cjs.bindRotate(b, innerCont)
							})
							innerCont.bm('forearm', function (b) {
								b.name = 'lf'
								b.XY(-100, 140).sX(.8).rXY(20, 120)
								cjs.bindRotate(b)
								innerCont.$$(function () {
									tweens.lpunch(b)
								})
							})
						})
				return b = outerCont
			}
			
			function Bod2(x, y) {
				var c1 = $Ct(), cL = $Ct()
				c1.mug(function (m) {
					SL(m.sXY(.4), c1)
				})
				c1.bm('arm', function (b) {
					b.sX(-.8).X(140).Y(100).rX(200).rY(80)
					RT(b);
					b.$$(function () {
						tweens.rpunch(b)
					})
				})
				cL.bm('uparm', function (b) {
					RT(b, cL)
					b.sX(.8).XY(80, 180).rXY(200, 80)
					cL.$$(function () {
						tweens.lpunch(cL)
					})
					cL.XY(140, 100).rXY(100, 100)
				})
				cL.bm('forearm', function (b) {
					b.name = ('lf')
					b.sX(.8).XY(-100, 140).rXY(20, 120)
					RT(b)
				})
				return c1.A(cL)
			}
		}
	}
}
SHOOTY = INVADERS = function () {
	$St().dg()
	st.mug(function (mug) {
		key(mug.XY(100, 100).WH(150).SL(), '-')
		// ugun(mug)
	})
	cv = ghostMe().A().dg().XY(10)
}
SPACE = function () {
	//wMs(function (b, st) {st.WH(2000,2000).bgi('/space.jpg'); b.sxy(.2); b.fn(RT, SL)})
	$St().bgI('/space.jpg').mug(function (m) {
		m.sXY(.2).dg().rt().RT().SL()
	})
}
function solar() {
	dO = cjs.DisplayObject.prototype
	dO.warpX = function (low, high, cush) {
		var ob = this,
				warp = M.warp(low, high, cush)
		cjs.t(function () {
			ob.x = warp(ob.x)
		})
		return ob
	}//wrx
	dO.warpY = function (low, high, cush) {
		var ob = this,
				warp = Math.warp(low, high, cush)
		cjs.t(function () {
			ob.y = warp(ob.y)
		})
		return this
	}//wry
	dO.warp = function (n) {
		n = n || 0
		var stage = this.getStage()
		this.warpX(0, stage.W(), n)
		this.warpY(0, stage.H(), n)
		return this
	}//wr
	dO.go = dO.startMoving = function (x, y) {
		if (x) {
			this.vX(x)
		}
		if (y) {
			this.vY(y)
		}
		var ob = this
		T.on('tick', function () {
			ob.X(ob.X() + (ob.vx || 0))
			ob.Y(ob.Y() + (ob.vy || 0))
		})
		return this
	}
	dO.bounce = function (n) {
		n = N(n) ? n : 0
		var ob = this, st = this.st(), h = st.H(), w = st.W()
		cjs.t(
				function () {
					var x = ob.x, y = ob.y
					if (x > w - ob.W() - n || x < (n )) {
						ob.vX('-')
					}
					if (y > h - ob.H() - n || y < (n )) {
						ob.vY('-')
					}
				})
		return st
	}
	dO.vX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	dO.vY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	dO.vXY = function (x, y) {
		return this.vX(x).vY(y)
	}
	SOLAR = function () {
		$St().bm('guy', function (bm) {
			guy = bm
			bm.dg()
			bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
			bm.startMoving()
			bm.warp()
			st.bm('sun', 0.2, function (bm) {
				sun = bm
				sun = bm
				bm.drag().startMoving(4, 10)
				bm.warp()
				setInterval(
						function () {
							if (
									cjs.bulletHit(sun, guy)) {
								sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
								sun.vx += .2
								sun.vy += .2
							}
						}, 100)
			})
			bm.dg()
			bm.startMoving(4, 10)
			bm.warp()
			_.ev(.1, function () {
				if (cjs.bulletHit(sun, guy)) {
					sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
					sun.vx += .2;
					sun.vy += .2
				}
			})
		})
		st.mug(0.4, function (bm) {
			mug = bm
			bm.X(400).dg().bounce(0)
			bm.startMoving(10, 10)
		})
		st.bgImg('/space.jpg')
	}
	cjs.bulletHit = function (bu, inWhat) { //used in solar
		var res
		res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
		if (res == true) {
			$l('hit!')
		}
		return res
	}
}
function ghostMe() {// how cool.. it 'steals' the drag because its on top but looks like its below
	return $.c('X', 500, 500).fit('me').al(.1)
}
function mugQueue() {
	QUEUE = function () {
		s = cjs.stage(500).tick().A()
		queue = new cjs.LoadQueue()
		queue.on("complete", handleComplete, this)
		queue.loadManifest(
				[{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}])
		function handleComplete() {
			image = queue.getResult("myImage")
			s.A(cjs.bm(image))
		}
	}
	QUEUE = function () {
		s = cjs.stage(500).tick().A()
		queue = new createjs.LoadQueue()
		queue.on("complete", handleComplete, this)
		queue.loadManifest(
				[{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}])
		function handleComplete() {
			image = queue.getResult("myImage")
			s.A(cjs.bm(image))
		}
	}
	QUEUEMUG = function () {
		s = cjs.stage(500, 500).tick().A()
		qu = Ql().c(graphics, this).l([
			{id: "mug", src: "/getMug"},
			{id: "me", src: "/me.png"}
		])
		////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
		function graphics() {
			
			// mug= s.bData( qu.gR("mug") ).drag()
			me = cjs.bm(qu.gR("me")).drag()
			s.A(me)
		}
	}
	QU6 = QUEUEMUG = QM = function () {
		s = new cjs.Stage($.c('b', 500, 500)[0])
		Q([{id: "mug", src: "/myMug"}],
				function () {
					mug = new cjs.Bitmap($.i(Q.i('mug'))).dg()
					s.A(mug)
				})
	}
	QU9 = QUEUEMUG = QM = function () {
		s = new cjs.Stage($.c('b', 500, 500)[0])
		Q([{id: "mug", src: "/myMug"}],
				function () {
					mug = $Bm($.i(Q.i('mug'))).dg()
					s.A(mug)
				})
	}
	QUEUEMUG = function () {
		s = cjs.stage(500, 500).tick().A()
		qu = Ql().c(graphics, this).l([
			{id: "mug", src: "/getMug"},
			{id: "me", src: "/me.png"}
		])
		////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
		function graphics() {
			
			// mug= s.bData( qu.gR("mug") ).drag()
			me = cjs.bm(qu.gR("me")).drag()
			s.A(me)
		}
	}//// ***
	Cycle1 = function () {
		var cont = new cjs.Container()
		cont.mug(function (mug) {
			mug.sXY(.4)
			cont.bm('uni', function (bitmap) {
				bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
				bitmap.name = 'uni'
				cjs.bindTransform(mug, cont)
				cjs.bindRotate(bitmap, cont)
			})
		})
		return cont
	}
	Cycle2 = function () {
		var cont = new cjs.Container()
		var qu = new cjs.LoadQueue()
				.complete(graphics).manifest([
					{id: "mug", src: "/getMug"},
					{id: "uni", src: "/uni.png"}
				])
		
		function graphics() {
			cont.bm(
					qu.getResult("uni"),
					function (b) {
						bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
						bitmap.name = ('uni')
					})
			cont.bm(
					$.img($.parseJSON(qu.getResult("mug"))),
					function (b) {
						mug = b.sXY(.4)
					})
			SL(mug, cont)
			cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
		}
		
		return cont
	}
	CYCLE = function () {
		s = $stage(800, 800).A().tick()
		c1 = Cycle1()
		c2 = Cycle2()
		s.A(c1, c2)
	}
	MX1 = MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		stage = St()
		$.d('b', 50, 50).A()
		//stage = s = cjs.stage(1600,1000).tick().A()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		st.on('e', co)
		//make a container
		st.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			c.bm('me',
					function (b) {
						b.sXY(.2).XY(100, 80)
						b.on(click, function () {
							$l('lit')
						}, '/')  //on click, log('lit'), just once (remove listener)!
					})
			// the middle size me demonstrates stopPropogation
			// if you click it, the container does not feel the click
			c.bm('me', function (bm) {
				bm.sXY(.4).XY(100, 180)
				bm.$(function () {
					$l('mid')
				}, '-')  //on click, log('mid'), and stop prop
			})
			c.bm('me', function (bm) {
				bm.sXY(1.5)
				bm.on('click', function () {
					$l('big')
				})  //on click, log('big')
			})    //on click, log('con')
			c.on('click', function () {
				$l('con')
			})
		})
		st.ct(function (ct) {
			c = ct
			var vn = 0, rvn = 0, on = 0, ron = 0
			ct.X(200)
			ct.mug(function (b) {
				b.sXY(.8).XY(200, 80)
			})
			ct.mug(function (b) {
				b.sXY(.8).XY(100, 280)
			})
			ct.mg(function (b) {
				b.sXY(.8).XY(340, 180)
			})
			//this shows over/out vs rollover/rollout
			//over/out get retriggered when switching between connected sprites
			//rollover/rollout does not because it is still touching 'something'
			ct.on('mouseover', function () {
				c.X(10, '+');
				$l('v: ' + vn++)
			})
			ct.on('rollover', function () {
				c.X(20, '-');
				$l('rv: ' + rvn++)
			})
			ct.on('mouseout', function () {
				c.Y(10, '+');
				$l('o: ' + on++)
			})
			ct.on('rollout', function () {
				c.Y(20, '-');
				$l('ro: ' + ron++)
			})
		}).MV(40)
		st.ct(function (ct, st) {
			ct.X(700)
			ct.mug(function (bm) {
				bm.sXY(.8).XY(200, 80)
			})
			ct.mug(function (bm) {
				bm.sXY(.8).XY(100, 280)
			})
			ct.mug(function (bm) {
				bm.sXY(.8).XY(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			ct.on('mouseover', function () {
				$l('mouseover');
				this.sXY(.01, '+')
			})
			ct.on('rollover', function () {
				$l('rv');
				this.sXY(.01, '+')
			})
			ct.on('mouseout', function () {
			})
			ct.on('rollout', function () {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40) //??? mouse events? speed for some mouse checking thing
		st.ct(function (ct, st) {
			ct.x = 1400
			ct.bm('me', function (bm) {
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, ct)
				ctr.bm('me', function (bm) {
					//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					ct.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180).SL();
						RT(bm, big)
					})
				})
			})
			//guy slides stage
			ct.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180);
				SL(bm, st)
			})
		})
	}
	SOY = SHOOTY = function () {
		St()
		$.ghost = function () {
			return $.c('X', 500, 500).fit('me').al(.1)
		} // how cool.. it 'steals' the drag because its on top but looks like its below
		st.mug(function (m) {
			m.XY(100, 100).WH(150)
			SL(m)
			//key(m, '-')
			// ugun(mug)
		})
		c = $.ghost().XY(10, 10).A().dg()
	}//C-
	QMUG = function () {
		$Ld([{id: "mug", src: "/getMug"}, {id: "me", src: "/me.png"}], function (ld) {
			// mug= s.bData( qu.gR("mug") ).drag()
			St().A($Bm(ld.get("me")).drag())
		})
		///// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
	}
	function mugSuit() {
		mugCont = function (stage) {
			cont = cjs.container()
			cont.flame = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('flame', function (flame) {
						})
				)
			}
			cont.uni = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('uni', function (uni) {
							uni.x(200).y(200)
							cont.mug.sxy(.2).x(300)
						}))
			}
			cont.guy = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('guy', function (guy) {
							guy.spin()
							cont.spin()
						})
				)
			}
			cont.desuit = function () {
				cont.mug.sXY(1).XY(200)
				if (cont.suit) {
					cont.suit.remove()
					cont.suit = null
				}
			}
			qu = new cjs.LoadQueue().complete(onMug)
					.manifest([{id: "mug", src: "/myMug"}])
			function onMug() {
				mug = qu.getResult("mug")
				// cont.bData( mug )//.rgc('+')
				cont.A(cont.mug = cjs.bm(mug))
			}
			
			return cont
		}
		CONTMUG = function () {
			z()
			s = cjs.stage(1000).A()
			s.A(m = mugCont())//.rgc('+')
			// SL(m)
		}
//// ***
//// ***
		mugCont = function (stage) {
			qu = new cjs.LoadQueue().complete(onMug).manifest([{id: "mug", src: "/myMug"}])
			cont = cjs.container()
			cont.flame = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('flame', function (flame) {
						})
				)
			}
			cont.uni = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('uni', function (uni) {
							uni.x(200).y(200)
							cont.mug.sxy(.2).x(300)
						}))
			}
			cont.guy = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('guy', function (guy) {
							guy.spin()
							cont.spin()
						})
				)
			}
			cont.desuit = function () {
				cont.mug.sXY(1).XY(200)
				if (cont.suit) {
					cont.suit.remove()
					cont.suit = null
				}
			}
			function onMug() {
				mug = qu.getResult("mug")
				// cont.bData( mug )//.rgc('+')
				cont.A(cont.mug = cjs.bm(mug))
			}
			
			return cont
		}
		CONTMUG = function () {
			s = cjs.stage(1000).A()
			s.A(m = mugCont())//.rgc('+')
			// SL(m)
		}
		//// ***
		CONTMUG = function () {
			z()
			s = cjs.stage(1000).A()
			s.A(m = mugCont())//.rgc('+')
			// SL(m)
		}
		SUIT = function (st) {
			alert('mugCont')
			qu = new cjs.LoadQueue().complete(onMug)
					.manifest([{id: "mug", src: "/myMug"}])
			cont = $Ct()
			cont.flame = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('flame', function (flame) {
						})
				)
			}
			cont.uni = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('uni', function (uni) {
							uni.x(200).y(200)
							cont.mug.sxy(.2).x(300)
						}))
			}
			cont.guy = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('guy', function (guy) {
							guy.spin()
							cont.spin()
						})
				)
			}
			cont.desuit = function () {
				cont.mug.sXY(1).XY(200)
				if (cont.suit) {
					cont.suit.remove()
					cont.suit = null
				}
			}
			function onMug() {
				mug = qu.getResult("mug")
				// cont.bData( mug )//.rgc('+')
				cont.A(cont.mug = $Bm(mug))
			}
			
			mugCont = function (stage) {
				qu = $Ld([{id: "mug", src: "/myMug"}], function (l) {
					var mug = l.get("mug")
					// cont.bData( mug )//.rgc('+')
					ct.A(ct.mug = cjs.bm(mug))
				})
				ct = cjs.container()
				ct.flame = function () {
					ct.desuit()
					ct.A(
							cont.suit = cjs.container().bm('flame', function (flame) {
							})
					)
				}
				cont.uni = function () {
					cont.desuit()
					cont.A(
							cont.suit = cjs.container().bm('uni', function (uni) {
								uni.x(200).y(200)
								cont.mug.sxy(.2).x(300)
							}))
				}
				cont.guy = function () {
					cont.desuit()
					cont.A(
							cont.suit = cjs.container().bm('guy', function (guy) {
								guy.spin()
								cont.spin()
							})
					)
				}
				cont.desuit = function () {
					cont.mug.sXY(1).XY(200)
					if (cont.suit) {
						cont.suit.remove()
						cont.suit = null
					}
				}
				return cont
			}
			return cont
		}
	}
}
PAINT = function () {
	_paintColor = 'blue'
	_paintSize = 10
	canvas = $.canvas('r', 400, 400).A().P('a', 100, 50)
	stage = canvas.stage.tick()
	shape = new createjs.Shape()
	stage.mug(function (mug) {
		mug.sXY(.4)
		stage.A(shape)
	})
	graphics = shape.graphics
	graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
			.setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
	stage.on('stagemousedown', function (e) {
		graphics.beginStroke(_paintColor)
		stage.on('stagemousemove', function (e) {
			graphics.lineTo(e.stageX, e.stageY)
		})
	})
	stage.on('stagemouseup', function () {
		stage.removeAllEventListeners('stagemousemove')
	})
	div = $.dK('controls')
	div.a2($('body'))
	colorPicker = $(' <input   type="color">')
	div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))
	colorPicker.on('input', function () {
		_paintColor = $l(colorPicker.val())
		graphics.beginStroke(_paintColor)
	})
	span = $('.controls span')
	if (span && F(span.$$)) {
		span.$$(function () {
			graphics.setStrokeStyle(parseInt($(this).T()))
		})
	}
} 