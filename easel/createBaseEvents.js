cj = cjs = createjs
T = cj.Tk = cj.Ticker
cj.Pt = cj.Point
cjs.R = cjs.Rectangle
cj.ED = cj.EventDispatcher
cj.DO = cj.DisplayObject
cj.Ct = cj.Container
cj.St = cj.Stage
cj.Gx = cj.Graphics
cj.H = cj.Sh = cj.Shape
cj.LQ = cj.LoadQueue
cj.M = cj.Mx = cj.Matrix2D
cj.Tx = cj.Text
cj.SS = cj.SpriteSheet
cj.MC = cj.MovieClip
cj.Sp = cj.Sprite
cj.SSB = cj.SpriteSheetBuilder
cj.Tl = cj.Timeline
window.$pt = window.$pt || {}
$L('proto', 'bool')
cj.PD = function () {
	eD = $pt.eD
	mx = $pt.mx
	tx = t = $pt.tx
	lQ = ld = $pt.ld
	dO = $pt.dO
	h = $pt.h
	ct = $pt.ct
	st = $pt.st
	gx = $pt.gx
}
cj.PD()
function proto() {
	$pt.eD = cj.ED.prototype
	$pt.gx = cj.Gx.prototype
	$pt.st = cj.St.prototype
	$pt.ct = cj.Ct.prototype
	$pt.h = cj.H.prototype
	$pt.dO = cj.DO.prototype
	q = ld = $pt.ld = $pt.lQ = cj.LQ.prototype
	$pt.ss = $pt.sS = cj.SS.prototype
	$pt.sp = cj.Sp.prototype
	$pt.ssB = $pt.sSB = cj.SSB.prototype
	$pt.tw = cj.Tween.prototype
	$pt.mc = cj.MovieClip.prototype
	$pt.tl = cj.Timeline.prototype
	$pt.mx = cjs.Matrix2D.prototype
	$pt.tx = cj.Tx.prototype
}
function bool() {
	cj.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	cj.iDO = cj.isDisplayOb = function (ob) {
		return O(ob) && F(ob.getStage)
	}
	cj.isCont = cj.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
		return O(ct) && ct.addChild
	}
	cj.iGx  = function (h) {
		return O(h) && h.beginStroke
	}
	
	cj.iH = cj.isShape = function (h) {
		return O(h) && h.graphics
	}
	cj.isCont = function (cont) {
		if (O(cont)) {
			if (cont.addContainer) {
				return true
			}
			else {
				return false
			}
		}
	}
	cj.isText = cj.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	cj.hasDim = function (bm) {
		return !cj.iH(bm) && !cj.iCt(bm)
	}
}
//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
cjs.testCanvas = function () {
	return $.c(960, 400).id("testCanvas").a2($.d())
}

$Ldr = function (name, fn) {
	return window[name] = function () {
		$Ld(fn)
	}
}
__$St = function (cv) {
	return new cj.St(O(cv) ? $0(cv) : cv)
}
St = $St = function () {

//_$StCv = function (cv) {var g=G(arguments); return __$St($.c0(g.A ? g.f : g))}
	var g = G(arguments)
	if (g.d) {
		$.E()
	}
	var cv = g.A ? g.f[0] :
			g.O || $.isCvId(g.f) ? g.f :
					$.c(g.f ? g : 'o')
	var st = __$St(cv)//get by canvas ID.. if in arr (but this depped)
//if you pass it a canvas OR a $canvas object
//	stage = new cjs.Stage($(a)[0])
//create a new canvas
//else {stage = new cjs.Stage($.c(a, b, c, d, e) [0])}
	$l('stage')
	if (!g.n) {
		st.t()
		st.cv = st.c = st.can = $(st.canvas)
		st.cv0 = st.cv[0]
		st.xc = st.cv0.getContext('2d')
		s = stage = window.st = st
		lib = {}
		images = img = {}
		loader = new cjs.LoadQueue(false);
		//h = $h(0,0).a2(st).drag()
		//h.graphics.C('r', 'b', 20)
	}
	if (g.m) {
		st.bm('me')
	}
	return st
	// = _$St = $StCv = cjs.stg = cjs.stage = St = St$ = $S$ = cjs.S = __St = __S
}
function events(){
	events1 = ['added',
		'mouseover', 'rollover', 'rollout', 'mouseout',
		'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
		'removed',
		'tick'
	]
	events = ['drawend',
		'drawstart',
		'mouseenter',
		'mouseleave',
		'stagemousedown',
		'stagemousemove',
		'stagemouseup',
		'tickend',
		'tickstart'
	]
	eD.aEL = eD.addEventListener
	eD.hEL = eD.hasEventListener
	eD.O = eD.off
	eD.o = eD.on
	eD.dE = eD.dispatchEvent
	eD.rAEL = eD.removeAllEventListeners
	eD.rEL = eD.removeEventListener
	eD.tS = eD.toString
	eD.wT = eD.willTrigger
	EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
	eD.init = function () {
		//note: 'initialize' is the only STATIC method of eventDispatcher
		this.initialize.apply(this, arguments)
		return this
	}
	dO.uM = dO.underMouse = function () {
		var dO = this, stg = dO.getStage()
		if (stg.mouseInBounds) {
			var pt = dO.gTL(stg.mouseX, stg.mouseY)
			return dO.hitTest(pt.x, pt.y)
			// alt : return hitTest( pt )
		}
	}
	dO.mouEn = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.mouseEnabled
		}
		dO.mouseEnabled = g.f ? true : false
		return dO
	}
	dO.$ = dO.click = function (fn) {
		return this.on('click', fn)
	}
	dO.$$ = dO.dblclick = function (fn) {
		return this.on('dblclick', fn)
	}
	st.hEv = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.handleEvent
		}
		st.handleEvent = g.f
		return st
	}
	st.eDE = function () {
		var st = this, g = G(arguments)
		st.enableDOMEvents.apply(st, arguments)
		return st
	}
	T.t = cjs.t = cjs.tick = function (fn) {
		var g = G(arguments)
		if (g.F_) {
			if (!g.n) {
				fn()
			}
			return T.on('tick', fn) // T.addEventListener? return T?
		}
		return g.n ? T.t('+') - T.t() :
				Number((T.getTime(g.p ? false : true) / 1000).toFixed(2))
	}
	$t = function (fn) {
		T.t(fn)
	}
	cj.t = cj.tick = function (func) {
		func();
		cjs.Ticker.on('tick', func)
	}
	cj.stop = function () {
		cjs.Ticker.removeAllEventListeners()
	}
	cj.stopListening = function () {
		cjs.Ticker.removeAllEventListeners()
	}
	T.p = function () {
		T.setPaused(false);
		return T
	}
	T.P = T.s = function () {
		T.setPaused(true);
		return T
	}
	T.s = cjs.xL = function () {
		T.removeAllEventListeners()
	}
	T.$ = function () {
		T.setPaused(T.getPaused() == false ? true : false)
		return T
	}
	T.i = function () {
		//indicates the target time (in ms) between ticks
		//default is 50 (20 fps)
		//Note: actual time between ticks may be more than specified,
		//  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
		return T.interval
	}
	T.f = function (numTicks) {
		var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
		if (N(numTicks)) {
			T.setFPS(numTicks);
			return T
		}
		return g.n ?
				T.getFPS() :
				T.getMeasuredFPS() //returns *ACTUAL* frames
		// / ticks per second//
		// Depending on performance,
		// this may differ from the target frames per second.
	}
	T.e = function (runTimePropReturnedInsteadOfTime) {
		//Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
		T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
	}
	T.m = function (ticks) {
		return T.getMeasuredTickTime(ticks)
	} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
	T.iP = function () {
		return T.getPaused()
	}
	ct.tkCh = function () {
		var ct = this, g = G(arguments)
		if (g.u) {
			return ct.tickChildren
		}
		ct.tickChildren = g.f ? true : false
		return ct
	}
	st.m = function (ob) {
		var st = this
		if (U(ob)) {
			//return $Pt(this.mX(), this.mY())
			return $Pt(st.mouseX, st.mouseY)
		}
		if (O(ob)) {
			if (ob.d) {
				st.MD(ob.d)
			}
			if (ob.u) {
				st.MU(ob.u)
			}
			if (ob.m) {
				st.MM(ob.m)
			}
		}
		return st
	}
	st.mX = st.mx = function () {
		return this.m().x
	}
	st.mY = st.my = function () {
		return this.m().y
	}
	ct.moCh = ct.muCh = ct.mouCh = function () {
		var ct = this, g = G(arguments)
		if (g.u) {
			return ct.mouseChildren
		}
		ct.mouseChildren = g.f ? true : false
		return ct
	}
	st.eMO = st.mO = function (ms) {
		var st = this, g = G(arguments)
		if (U(g[0]) || g[0]) {
			st.enableMouseOver(N(g[0]) ? g[0] : true)
		}
		else {
			st.enableMouseOver(g.f ? true : false)
		}
		return st
	}
	st.mMO = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.mouseMoveOutside
		}
		st.mouseMoveOutside = g.f ? true : false
		return st
	}
	st.mIB = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.mouseInBounds
		}
		st.mouseInBounds = g.f ? true : false
		return st
	}
	ct.gOUPs = function () {
		return this.getObjectsUnderPoint.apply(this, arguments)
	}
	ct.gOUP = function () {
		return this.getObjectUnderPoint.apply(this, arguments)
	}
	st.MD = function (fn) {
		return this.on('stagemousedown', fn)
	}
	st.MM = function (fn) {
		return this.on('stagemousemove', fn)
	}
	st.MU = function (fn) {
		return this.on('stagemouseup', fn)
	}
	dO.dg = dO.drag = dO.SL = function () {
		cjs.drag(this);
		return this
	}
	cjs.drag = cjs.SL = LS = cjs.bindSlide = SL = function () {
		var g = G(arguments)
		var b = g.f
		var b2 = g.s || b
		return b.on('mousedown', function (e) {
			var bx = b2.x - e.rawX
			var by = b2.y - e.rawY
			b.on('pressmove', function (e) {
				if (!g.p) {
					b2.x = bx + e.rawX
				}
				if (!g.n) {
					b2.y = by + e.rawY
				}
			})
		})
	}
	MU = HITC = HITCIRCLES = function () {
		st = $St(1000, '+') // look no .tick() necesary!! look below :)
		ct = $Ct()
		st.A(ct.XY(150))
		_.t(25, function () {
			$H().XY(rndLoc(), rndLoc()).f(rndHSL()).dc(30).a2(ct)
		})
		T.on("tick", function (e) {
			ct.rotation += 3
			n = ct.getNumChildren()
			ct.ch(function (ch) {
				uM = ch.uM()
				ch.alpha = ch.uM() ? 1 : 0.1
				pt = ch.globalToLocal(st.m().x, st.m().y)
				if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
					ch.al(1)
				}
			})
		})
		function rndLoc() {
			return M.r() * 300 - 150
		}
		
		function rndHSL() {
			return cjs.Graphics.getHSL(M.r() * 360, 100, 50)
		}
	}
	MU0 = ENTERST = function () {
		$St()
		st.bm('me')
		st.on('mouseenter', function () {
			$.br().A()
			$('body').A('once<br>')
		}, null, true)
		st.on('mouseenter', function () {
			$('body').A('many<br>')
		}, null, false)
	}//A-
	MU1 = MX2 = MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		st = $St(1600, 1000)
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		st.on('mouseenter', function () {
			$('body').C($r())
		})
		ct = (new cjs.Container().a2(st)).bm('me', function (bm) {
			bm.sXY(.2).XY(100, 80)
			bm.on('click', function () {
				$l('lit')
			}, this, true) //just once
		})
		//make a container
		st.ct(function (ct, st) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			// the middle size me demonstrates stopPropogation
			// if you click it, the container does not feel the click
			ct.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function (e) {
					$l('mid')
					e.stopPropagation()
				})
			})
			ct.bm('me', function (bm) {
				bm.sXY(1.5)
						.on('click', function () {
							$l('big')
						})
			})
			ct.on('click', function () {
				$l('con')
			})
		})
		function alt() {
			MU3 = MX0 = MATRIX0 = function () {
				st = $St(1600, 1000)
				// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
				// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
				$.d('b', 50, 50).A()
				// on stage enter, change background color, though you
				// cant see it here because stage fills screen
				// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
				st.on('mouseenter', function () {
					$('body').C($r())
				})
				st.A(ct = container = c = $Ct())
				ct.bm('me', function (bm) {
					//b.sxy(.2).xy(100,80)
					//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
				})
				//make a container
				st.ct(function (c, s) {
					
					//the little me clicks do not hit the 'big' me underneath it.  that's normal.
					//but it does hit the container.  but this example shows off 'remove', so it only hits once
					//however, it continues to propogate on to the container. hmmm..
					// the middle size me demonstrates stopPropogation
					// if you click it, the container does not feel the click
					ct.bm('me', function (b) {
						b.sXY(.4).XY(100, 180)
						//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
					})
					ct.b('me', function (b) {
						b.sXY(1.5)
						// b.o('$',fL('big'))  //on click, log('big')
					})
					//on click, log('con')
					//c.o('$',  fL('con'))
				})
				st.ct(function (c) {
					var vn = 0,
							rvn = 0,
							on = 0,
							ron = 0
					c.X(200)
					c.mug(
							function (b) {
								b.sXY(.8).XY(200, 80)
							})
					c.mug(
							function (b) {
								b.sXY(.8).XY(100, 280)
							})
					c.mg(
							function (b) {
								b.sXY(.8).XY(340, 180)
							})
					//this shows over/out vs rollover/rollout
					//over/out get retriggered when switching between connected sprites
					//rollover/rollout does not because it is still touching 'something'
					// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
					//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
					// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
					//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
				})//.MV(40)
				st.ct(function (c, s) {
					c.x(700)
					c.mg(function (b) {
						b.sxy(.8).xy(200, 80)
					})
					c.mg(function (b) {
						b.sxy(.8).xy(100, 280)
					})
					c.mg(function (b) {
						b.sxy(.8).xy(340, 180)
					})
					//this example shows which sprites are acted upon with over/rollover
					//over only affects one
					//rollover affects ALL
					//if you enter a sprite from outside, they all grow (via rollover),
					//and the one sprite grows double (via over)
					c.o('v', function (g, e) {
						$l('v')
						g.sxy(.01, '+')
					})
					c.o('rv', function (g, e) {
						$l('rv')
						g.sxy(.01, '+')
					})
					c.o('o', function (q, e, g) {
					})
					c.o('ro', function (q, e, g) {
					})
					// in summary,
					// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
					// BUT, they will all recieve events separately
				}).MV(40)
				st.ct(function (ct, st) {
					ct.X(1400)
					ct.bm('me', function (bm) {
						
						//make the little me slide the entire container
						//it acts as a handle! (for its container)
						lit = bm.sXY(.2).XY(100, 80)
						SL(bm, ct)
						ct.bm('me', function (bm) {
							//big me will scale the little me
							big = bm.sXY(2).XY(100, 180)
							SC(bm, lit)
							ct.bm('me', function (bm) {
								bm.sXY(.6).XY(150, 180)
								SL(bm)
								RT(bm, big)
							})
						})
					})
					//guy slides stage
					ct.bm('guy', function (bm) {
						bm.sXY(.4).XY(100, 180)
						SL(bm, stage)
					})
				})
			}
		}
	}
	MU2 = HAN = HANDEV = function () {
		$St()
		st.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		st.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
			}
			b.on('pressmove', b)
		})
		st.t()
		function alt() {
			MU6 = HANDLEEVENT = function () {
				St()
				s.bm('me', function (b) {
					me = b
					cb = b.on('pressmove', function () {
						this.x++
					})
				})
				s.bm('guy', function (b) {
					b.handleEvent = function () {
						this.y++
					}
					b.on('pressmove', b)
				})
			}
		}
	}//B+
	BUB = BUBBLE = function () {
		stage = $St()
		output = new createjs.Text(
				"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
				"13px courier").lWH(280, 13).XY(190, 10)
		background = new createjs.Shape().N("background")
		background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
		label = new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
				.N('label')
				.tA("center")
				.tB("middle")
		button = new createjs.Container().XY(20).N('button').A(background, label)
		// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
		// button.mouseChildren = false;
		stage.A(button, output)
		// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
		_.each([stage, button, label, background], function (target) {
			target.on("click", handleClick, false);
			target.on("click", handleClick, true)
		})
		stage.update()
	}
	MU3 = MOUSE = BUB8 = MOUSEVENTS = BUBBBLE = function () {
		St()
		output = $T(
				"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
				"13px courier").lWH(280, 13).XY(190, 10)
		bg = $H().n("background")
		bg.graphics.f("red").rr(0, 0, 150, 60, 10)
		lb = $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2).n('label').tA("center")//.tB("middle")
		// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
		// button.mouseChildren = false;
		st.A(bt = $Ct().XY(20).n('button').A(bg, lb), output)
		// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
		_.e([st, bt, lb, bg], function (tg) {
			tg.$(handleClick, false);
			tg.$(handleClick, true)
		})
		st.u()
		function handleClick(e) {
			if (e.currentTarget == st && e.eventPhase == 1) {
				output.text = "target : eventPhase : currentTarget\n"
			}// this is the first dispatch in the event life cycle, clear the output.
			output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
			if (e.currentTarget == st && e.eventPhase == 3) {
				st.u()
			}// this is the last dispatch in the event life cycle, render the stage.
		}
	}//B+
	MU4 = RMEVT8 = function () {
		function alt() {
			MU7 = REMOVEEVENT = function () {
				St()
				s.bm('me', function (b) {
					me = b
					cb = b.on('pressmove', function () {
						this.x++
					})
				})
				s.bm('guy', function (b) {
					b.handleEvent = function () {
						this.y++
						me.off('pressmove', cb)
					}
					b.on('pressmove', b)
				})
			}
		}
		
		St()
		st.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		st.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
				me.off('pressmove', cb)
			}
			b.on('pressmove', b)
		})
		///////
		s.can.P('a').XY(300)
		s.A(h = shape = $h())
		h.rec(100, 200, 0, 200, 'red')
				.rec(100, 100, 100, 20, 'green')
				.rec(145, 120, 10, 80, 'orange')
				.cir(105, 100, 20, 'blue')
				.cir(105, 100, 8, 'black')
				.cir(200, 100, 20, 'blue')
				.cir(200, 100, 8, 'black')
				.cir(100, 20, 100, 'green')
				.rXY(100, 300).XY(100, 300).drag()
		p = function () {
			shape.twL(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			shape.twL(
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
			)
		}
		p()
	}
	MU5 = MOUSEENTERSTAGE = function () {
		St()
		s.bm('me')
		s.on('mouseenter', function () {
			$('body').prepend('once<br>')
		}, null, true)
		s.on('mouseenter', function () {
			$('body').prepend('many<br>')
		}, null, false)
	}
	MOUSEENTERSTAGE = function () {
		z()
		stage = s = cjs.stage(500, 500).A().tick()
		s.bm('me')
		s.on('mouseenter', function () {
			$('body').prepend('once<br>')
		}, null, true)
		s.on('mouseenter', function () {
			$('body').prepend('many<br>')
		}, null, false)
	}
	HANDLEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
		s.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		s.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
			}
			b.on('pressmove', b)
		})
	}
	REMOVEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
		s.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		s.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
				me.off('pressmove', cb)
			}
			b.on('pressmove', b)
		})
	}
	testShape = function () {
		z()
		stage = createjs.stage(600).tick().A()
		shape = new createjs.Shape()
		stage.A(shape)
		shape.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
	}
	function handleClick(e) {
		if (e.currentTarget == stage && e.eventPhase == 1) {
			// this is the first dispatch in the event life cycle, clear the output.
			output.text = "target : eventPhase : currentTarget\n"
		}
		output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
		if (e.currentTarget == stage && e.eventPhase == 3) {
			// this is the last dispatch in the event life cycle, render the stage.
			stage.update()
		}
	}
	
	MOUSEENTERSTAGE = function () {
		z()
		stage = s = cjs.stage(500, 500).A().tick()
		s.bm('me')
		s.on('mouseenter', function () {
			$('body').prepend('once<br>')
		}, null, true)
		s.on('mouseenter', function () {
			$('body').prepend('many<br>')
		}, null, false)
	}
	HANDLEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
		s.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		s.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
			}
			b.on('pressmove', b)
		})
	}
	REMOVEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
		s.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		s.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
				me.off('pressmove', cb)
			}
			b.on('pressmove', b)
		})
	}
	$t = function (fn) {
		T.t(fn)
	}}
	events()