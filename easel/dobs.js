dobs()
function dobs(){

next()
CVTXX = TESTCANVAS = function () {
	return $.d().A($.c(960, 400)
			.id("testCanvas"))
}
st.aC = st.auCl = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.autoClear
	}
	st.autoClear = g.f ? true : false
	return st
}
st.tOU = st.tkOUpd = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.tickOnUpdate
	}
	st.tickOnUpdate = g.f ? true : false
	return st
}
st.tk = function (ms) {
	var st = this, g = G(arguments)
	st.tk.apply(st, g)
	return st
}
st.cc = function () {
	return this.cacheCanvas
}
st.du = st.tDU = function (ms) {
	var st = this,
			g = G(arguments)
	// same as? return this.canvas.toDataURL()
	st.toDataURL.apply(st, g)
	return st
}

st.snap = function (fn) {
	
	$.post('/cutout', {
		dU: this.toDataURL()//, dats: o.x.dats
	})
	
	_.in(fn)
	
	return this
}


st.cv = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.canvas
	}
	st.canvas = g.f
	return st
}
st.tabs = st.ab = st.abs = function (x, y) {
	this.can.abs(x, y);
	return this
}
st.sTPE = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.snapToPixelEnabled
	}
	st.snapToPixelEnabled = g.f ? true : false
	return st
}
 
ct.Sh = function () {
	return $Sh.apply(null, arguments).a2(this)
}
st.GX = function () {
	return this.Gx().FS()
}
st.Gx = function () {
	return $Sh.apply(null, arguments).drag()
			.a2(this).graphics
}
$rCt = function () {
	return 'this is a recGx in a container so it can be moved relative to something..' +
			'(its like a fx rel to a bd)'
}
TXSH = function () {
	$St()
	h = $H()
	st.A(h)
	h.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
}
MTLT = function () {
	$St()
	h.graphics.C('r', 'b')
	h.dg()
	h.lt(100, 100)
	h.lt(150, 190)
	h.lt(300, 300)
	h.lt(350, 1390)
	if (R()) {
		h.cp()
	}
	h.mt(240, 210)
	h.lt(450, 410)
	h.lt(600, 500)
	h.lt(500, 500)
	h.cp()
}
WACKY=STGG = function () {
	$.c('y', 300, 100).id('someId')
	$St('someId').bm('me')
	$St($.c('o', 400, 200)).bm('me')
	$St('z', 500, 300).bm('me').GX()._dc()
	$St(1000, 500)
			.bm('me', function (bm) {
				bm.spin().drag()
			})
			.bm('me', function (bm) {
				bm.sXY(0.5, 0.3).spin().drag()
			})
			.Sh().XY(200).graphics.FS()._dc(4)
	_.t(10, function () {
		$St($r(), 200, 200).bm('me', function (me) {
			me.drag()
		})
	})
}
INST = INSTAGE = GROWTWEEN = function () {
	$St().bm('me', function (me) {
		me.grow()
		$t(function () {
			me.x = me.x + 10;
			$l(me.inStage())
		})
	})
}

dO.a2 = function (ct, x, y) {
	var dO = this
	ct.A(dO)
	if (N(x)) {dO.X(x)}
	if (N(y)) {dO.Y(y)}
	return dO
}


function next() {
	st.pS = st.prevSel = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.preventSelection
		}
		st.preventSelection = g.f ? true : false
		return st
	}
	st.N = st.next = function (next) {
		if (U(next)) {
			return this.nextStage
		}
		this.nextStage = next
		return this
	}
}
 
USINGLAYERSINEASEL9 = function () {
	z()
	s = St(500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.sXY(3)
		drawCar()
		s.tick(function () {
			b.x(-1 * (g.x() * 2))
			b.y(-1 * (g.y() * 2))
		})
	})
	bt = $.button('safd', function () {
		s.sXY(2)
	}).A()
	function drawCar() {
		s.bm('guy', function (bm) {
			g = bm
			bm.sXY(.5)
			SL(bm)
		})
	}
}
LAYZ = PLAX = function () {
	st = $St(500)
	st.bm('me', function (bm) {
		me = bm.sXY(.5)
		st.bm('guy', function (bm1) {
			guy = bm1.sXY(.5).drag()//SL(bm)
			$t(function () {
				me.X(guy.X() * 1.6).Y(guy.Y() * 1.6)
			})
		})
	})
	$.bt('safd', function () {
		st.sXY(2)
	})
}
$Ldr('LAYS0', function (q) {
	me = q.bm('me', $St()).scXY(3);
	guy = q.bm('guy', st).scXY(.5).dg()
	$t(function () {
		me.X(guy.x * 2.2 - 140).Y(guy.y * .2)
	})
	$.bt('s.sXY(2)', function () {
		st.sXY(2)
	})
})
	add()
	kids()
	ct.t = ct.oT = ct.tick = function (fn) {
		//cjs.Ticker.addEventListener('tick', this); return this
		var g = G(arguments)
		if (F(fn)) {
			if (!g.n) {
				fn()
			}
			return this.on('tick', fn)
		}
		else {
			T.on('tick', this);
			return this
		}
	}
	ct.xT = function (fn) {
		this.off('tick', fn)
		return this
	}
	ct.au = function (au) {
		this.autoClear = au ? true : false;
		return this
	}
	ct.noAuCl = function () {
		this.autoClear = false;
		return this
	}
	ct.u = ct.upd = function () {
		this.update();
		return this
	}
	ct._A = function () {
		return this.addChild.apply(this, arguments)
	}
	ct.A = function (arg, y) {
		var ct = this, g = G(arguments)
		var bd = $('body')
		var st = ct.getStage()
		if (g.u) {
			if (g.u && st) {
				//must be stage??
				bd.A(st ? st.canvas : ct.canvas)
			}
		}
		else if (g.N_) {
			bd.A(ct.canvas).abs().XY(g.f, g.s)
		}
		else {
			_.e(g, function (ch) {
				ct._A(ch)
			})
		}
		return ct
	}
	cjs.rmOb = function (ob) {
		if (cjs.iDO(ob)) {
			ob.rm()
		}
	}
	ct.C = ct.bgC = function (c) {
		var ct = this
		$(ct.canvas).C(c)
		return ct
	}
	ct.gSt = ct.gS = ct.st = ct.St = ct.S = function () {
		return this.stage
	}
	ct.bgI = ct.bg = function (i) {
		var ct = this
		ct.bm(i, function (b) {
			ct.setChildIndex(b, 0) //ct.ch(b, 0)
		})
		return ct
	}
	ct.mc = function (x, y) {
		var ct = this, g = G(arguments), mc
		mc = cjs.MovieClip.apply(cjs, g)
		this.A(mc).XY(N(x, 100), N(y, 100))
		return mc
	}
	function kids() {
		ct.sort = ct.soCh = function () {
			this.sortChildren.apply(this, arguments)
			return this
		}
		ct.swap = ct.swCh = function () {
			this.swapChildren.apply(this, arguments)
			return this
		}
		ct.swapAt = ct.swChAt = function () {
			this.swapChildrenAt.apply(this, arguments)
			return this
		}
		ct.clr = ct.xCh = ct.removeAll = ct.E = function () {
			var ct = this
			ct.each(function (ch) {
				ch.remove()
			})
			return ct
		}
		ct.numCh = ct.num = ct.nCh = function () {
			return this.numChildren
		}
		ct._ch = function () {
			return this.children
		}
		ct.sCI = ct.sChIx = function () {
			this.setChildIndex.apply(this, arguments);
			return this
		}
		ct.ch = ct.e = ct.each = ct.ix = function (fn, n) {
			var ct = this, g = G(arguments)
			//1) set a child's index
			if (N(g.s)) {
				ct.sChIx(g.f, g.s)
				return ct
			}
			var CH = []
			// get... array of all children..
			_.e(ct._ch(), function (ch) {
				CH.push(ch)
			})
			// 2)iterate a fn over them
			if (g.F) {
				_.e(CH, function (ch) {
					fn(ch, CH)
				})
				return ct
			}
			// 3) just return the children
			return CH
		}
	}
	
	function add() {
		ct.ct = function (x, y) {
			var ct = this, g = G(arguments), o
			o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
			var ct1 = $Ct().a2(ct)
			if (o.fn) {
				o.fn(ct1, ct)
			}
			else if (N(o.x)) {
				ct1.XY(o.x, o.y)
			}
			if (g.p) {
				cjs.bindSlide(ct1)
			}
			return ct1
			function alt() {
				ct.addContainer = ct.ct = function (fn) {
					var ct = this, g = G(arguments)
					var f = g[0]
					var ct1 = new cjs.Container().a2(ct)
					if (fn) {
						fn(ct1, ct)
					}
					if (g.p) {
						cjs.bindSlide(ct1)
					}
					return ct
				}
			}
		}
		ct.Ct = function () {
			var ct = this
			ct.ct.apply(ct, arguments)
			return ct
		}
	}
	
	$Ct = cjs.container = cjs.ct = function (a) {
		return new cjs.Container(a)
	}
	ct.N = function (n) {
		var s = this;
		if (U(n)) {
			return s.nextStage
		}
		s.nextStage = n;
		return s
	}
	tx.tA = tx.align = tx.textA = function (textAlign) {
		if (U(textAlign)) {
			return this.textAlign
		}
		this.textAlign = textAlign
		return this
	}
	tx.mW = tx.measW = tx.measuredW = function () {
		return this.getMeasuredWidth()
	}
	tx.oL = tx.outL = tx.ol = function (outline) {
		if (U(outline)) {
			return this.outline
		}
		this.outline = outline
		return this
	}
	tx.bl = tx.textB = t.baseline = tx.tB = function (bl) {
		var g = G(arguments)
		if (g.p) {
			bl = 'bottom'
		}
		if (g.n) {
			bl = 'top'
		}
		if (bl === '') {
			bl = 'middle'
		}
		if (U(bl)) {
			return this.textBaseline
		}
		this.textBaseline = bl
		return this
	}
	tx.lH = tx.lineH = function (lH) {
		if (U(lH)) {
			return this.lineHeight
		}//o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
		this.lineHeight = lH
		return this
	}
	tx.lW = tx.lineW = function (lW) {
		if (U(lW)) {
			return this.lineWidth
		}
		this.lineWidth = lW
		return this
	}
	tx.lWH = function (w, h) {
		if (U(h)) {
			h = w
		}
		return this.lW(w).lH(h)
	}
	cj.chalk = function (text, color) {
		color = oO('c', color || 'white')
		if (O(text)) {
			text = 'x: ' + text.x + ', ' + 'y: ' + text.y
		}
		return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
	}
	cj.niceText = function (text, x, y) {
		var t = cjs.text(text, 'yellow', '40px Arial')
		if (N(x)) {
			t.XY(x, y)
		}
		return t.drag()
	}
	ct.Tx = ct.T = function () {
		var ct = this, g = G(arguments), o, t
		o = g.O ? g.f :
				g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
						N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
								_.x({t: g.f, f: g.s, c: g.t},
										N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
										{y: g[3]})
		o.f = N(o.f) ? o.f + 'px Arial' : o.f
		o.f = o.f || '50px Arial'
		o.c = oO('c', o.c || 'y')
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.t = String(o.t)
		t = $T(o.t, o.f, o.c).XY(o.x, o.y).a2(this).drag()
		if (g.n) {
			t.regX = t.W() / 2
		}
		t.bl('middle')
		if (g.p) {
			t.bl('alphabetic')
		}
		if (!g.n) {
			t.rX(t.mW() / 2)
		}
		return t
		//o.x = N(o.x, this.St().cen().x)
		/* if(g.p){
		 tO = cjs.T(g.f, 'y', '40px Arial')
		 if(N(g[3])){ tO.XY(g[3], g[4]) }
		 return tO
		 }*/
		old = function () {
			ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
				var ct = this, o, cX
				st = this.getStage()
				cX = st.cen().x
				o = (N(x) && U(y)) ? {y: x, x: cX} :
						U(x) ? {x: cX, y: 100} :
						{t: t, f: f, c: c, x: x, y: y}
				var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
				ct.A(t)
				return t
			}
		}
		ct.T = ct.Tx = function () {
			var ct = this, g = G(arguments), o, t
			o = g.O ? g.f :
					g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
							N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
									_.x({t: g.f, f: g.s, c: g.t},
											N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
											{y: g[3]})
			t = $T(String(o.t), (N(o.f) ? o.f + 'px Arial' : o.f) || '50px Arial', oO('c', o.c || 'y'))
			if (g.n) {
				t.regX = t.W() / 2
			}
			return g.p ? t.XY(N(o.x, 0), N(o.y, 0)).a2(ct).dg().bl('alphabetic') : !g.n ? t.rX(t.mW() / 2) : t.bl('middle')
		}
//o.x = N(o.x, this.St().cen().x)
		/* if(g.p){
		 tO = cjs.T(g.f, 'y', '40px Arial')
		 if(N(g[3])){ tO.XY(g[3], g[4]) }
		 return tO
		 }*/
//o.x = N(o.x, this.St().cen().x)
		/* if(g.p){
		 tO = cjs.T(g.f, 'y', '40px Arial')
		 if(N(g[3])){ tO.XY(g[3], g[4]) }
		 return tO
		 }*/
		old = function () {
			ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
				var ct = this, o, cX
				st = this.getStage()
				cX = st.cen().x
				o = (N(x) && U(y)) ? {y: x, x: cX} :
						U(x) ? {x: cX, y: 100} :
						{t: t, f: f, c: c, x: x, y: y}
				var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
				ct.A(t)
				return t
			}
		}
	}
	ct.chalk = function () {
		var ht = 50, g = G(arguments), ct = this, tx
		_.e(g, function (t) {
			tx = cjs.chalk(t).Y(ht).X(50 - ct.X())
			ht += 40
			ct.A(tx)
		})
		ct.chalk1 = function () {
			var ct = this, g = G(arguments), h = 0
			g.e(function (t) {
				ct.T(t, 26, 'w', 475, h += 35)
			})
			return ct
		}
		return tx
	}
	ct.text = function (text, font, color, x, y) {
		var centX = this.stg().center().x
		//this.A(_$Tx(text, font, color).XY(x, y))
		if (N(x) && U(y)) {
			y = x;
			x = centX
		}
		else if (U(x)) {
			x = centX;
			y = 100
		}
		this.A(cjs.text(text, font, color).XY(x, y))
		return text
	}
	ct.pen = function self(arg) {
		var ct = this
		if (O(self.text)) {
			self.text.rm()
		}
		self.text = cjs.chalk(arg).Y(50).X(50 - ct.X())
		ct.A(self.text)
		return self.text
	}
	tx.F = tx.fo = function (font) {
		if (U(font)) {
			return this.font
		}
		if (N(font)) {
			font += 'px Arial'
		}
		this.font = font
		return this
		t.F1 = t.fo1 = function (f) {
			if (U(f)) {
				return this.font
			}
			this.font = N(f) ? f + 'px Arial' : f
			return this
		}
	}
	tx.C = tx.col = function (color) {
		if (U(color)) {
			return this.color
		}
		this.color = oO('c', color)
		return this
	}
	tx.Tx = tx.tx = tx.T = function (text) {
		if (U(text)) {
			return this.text
		}
		this.text = text
		return this
	}
	TX1 = BAS = BASELINE = function () {
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
			s.dot(300, 300)
		})
		s.A(t = $Tx('baseline: top').XY(300).sXY(4).drag())
		s.A(t2 = $Tx('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $Tx('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		s.A(t = $T('baseline: top').XY(300).sXY(4).drag())
		s.A(t2 = $T('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
	}
	TX2 = LINEH = function () {
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.A(
				t = $T('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
		)
		s.A(
				t2 = $T('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
		)
		s.A(
				t3 = $T('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
		)
	}
	TX3 = LINEW = function () {
		z()
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.A(t = $T('linewidth 0').XY(300).sXY(4).drag().lineW(0))
		s.A(t2 = $T('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
	}
	TX4 = ALIGN = function () {
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.bm('me', function (bm) {
			b = bm
			bm.XY(500).sXY(.2)
		})
		//textAlign
		s.A(t = $T('linealign left').XY(300).sXY(4).drag()) //default
		s.A(t2 = $T('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
		s.A(t3 = $T('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
		//textBaseline
		s.A(t = $T('baseline: top').XY(500).sXY(4).drag())
		s.A(t2 = $T('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
	}
	$Tx = $T = function (a, b, c, d, e) {
		_$Tx = function (a, b, c, d, e, f) {
			return new cj.Tx(a, b, c, d, e, f)
			cjs.text = function (text, color, font, x, y) {
				//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
				return _$Tx(text,
						N(font || '20px Arial') ? font + 'px Arial' : font
						, oO('c', color || 'z')).XY(N(x, 100), N(y, 100))
			}
			cjs.T = cjs.Tx = function (text, font, color, x, y) {//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
				if (N(font)) {
					font = font + 'px Arial'
				}
				textOb = _$Tx(text, font || '50px Arial', oO('c', color || 'y'))
				textOb.regX = textOb.W() / 2
				return textOb.XY(N(x, 100), N(y, 100))
			}
			cjs.T = cjs.Tx = function (text, font, color, x, y) {
				//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
				if (N(font)) {
					font = font + 'px Arial'
				}
				textOb = _$Tx(text, font || '50px Arial', oO('c', color || 'y'))
				textOb.regX = textOb.W() / 2
				return textOb.XY(N(x, 100), N(y, 100))
			}
			$Tx1 = function (a, f, c, x, y) {
				var t
				if (N(f)) {
					f = String(f) + "px Arial"
				}
				if (S(c)) {
					c = oO('c', c)
				}
				t = _$Tx(a, f, c)
				if (O(x)) {
					if (F(x.cen)) {
						x = x.cen()
					}
					y = x.y
					x = x.x
				}
				if (N(x)) {
					t.X(x)
				}
				if (N(y)) {
					t.Y(y)
				}
				return t
			}
			$T1 = function (a, f, c, x, y) {
				var t
				if (N(f)) {
					f = String(f) + "px Arial"
				}
				if (S(c)) {
					c = oO('c', c)
				}
				t = _$Tx(a, f, c)
				if (O(x)) {
					if (F(x.cen)) {
						x = x.cen()
					}
					y = x.y
					x = x.x
				}
				if (N(x)) {
					t.X(x)
				}
				if (N(y)) {
					t.Y(y)
				}
				return t
			}
		}
		var g = G(arguments), o, t, tx
		o = g.O ? g.f : {t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}
		tx = _$Tx(o.t, (N(o.f) ? o.f + 'px Arial' : o.f) || '50px Arial', o.c || 'y').XY(N(o.x, 600), N(o.y, 100)).dg()
		if (g.n) {
			t.regX = t.W() / 2
		}
		if (g.p) {
			tx.bl('alphabetic')
		}
		return tx.bl('middle')
	}
}
function dobProto(){
	dO.X = function (x, duration) {//can add easing :)
		var g = G(arguments)
		if (U(x)) {
			return this.x
		}
		if (g.p) {
			x = this.x + x
		}
		else if (g.n) {
			x = this.x - x
		}
		else if (g.m) {
			x = this.x * x
		}
		else if (g.d) {
			x = this.x / x
		}
		if (N(duration)) {
			tw([this], [{x: x}, duration])
		}
		//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
		else {
			this.x = x
		}
		return this
		dO.XAlt = function (x, dur) {
			var i = this, g = G(arguments)
			if (U(x)) {
				return i.x
			}
			i.x = g.p ? i.x + x
					: g.n ? i.x - x
					: g.m ? i.x * x
					: g.d ? i.x / x
					: x
			if (N(dur)) {
				$tw([i], [{x: x}, dur]);
				return i
			}
			return i
		}
	}
	dO.Y = function (y, dur) {
		var i = this, g = G(arguments)
		if (U(y)) {
			return this.y
		}
		if (g.p) {
			y = this.y + y
		}
		else if (g.n) {
			y = this.y - y
		}
		else if (g.m) {
			y = this.y * y
		}
		else if (g.d) {
			y = this.y / y
		}
		if (N(dur)) {
			tw([this], [{y: y}, duration])
		}
		else {
			this.y = y
		}
		return this
	}
	dO.XY = function (x, y) {
		var i = this, g = G(arguments), v
		if (g.u) {
			return {x: i.x, y: i.y}
		}
		v = V(g.f, g.s)
		x = v.x
		y = N(v.y, v.x)
		return i.X(x).Y(y)
		dO.XYalt = function (x, y) {
			if (U(x)) {
				return {x: this.x, y: this.y}
			}
			if (O(x)) {
				y = x.y
				x = x.x
			}
			if (U(y)) {
				y = x
			}
			return this.X(x).Y(y)
		}
	}
	dO.W = function (a) {
		var i = this
		if (U(a)) {
			var bds = i.getBounds()
			if (bds) {
				return bds.width * i.scaleX
			}
			return
		}
		i.sX(i.scaleX * a / i.W())
		return i
	}
	dO.H = function (a) {
		var i = this
		if (U(a)) {
			if (this.getBounds()) {
				return this.getBounds().height * this.scaleY
			}
			return
		}
		this.sY(this.scaleY * a / this.H())
		return this
	}
	dO.WH = function (w, h) {
		var i = this
		return this.W(w).H(h || w)
	}
	ct.W = function (w) {
		var st = this.stage
		var can = st.canvas
		if (U(w)) {
			return can.width
		}
		can.width = w
		return this
	}
	ct.H = function (w) {
		var can = this.getStage().canvas
		if (U(w)) {
			return can.height
		}
		can.height = w
		return this
	}
	st.W = function (a) {
		if (U(a)) {
			return this.canvas.width
		}
		this.canvas.width = a
		return this
	}
	st.H = function (a) {
		if (U(a)) {
			return this.canvas.height
		}
		this.canvas.height = a
		return this
	}
	st.WH = function (w, h) {
		var st = this;
		if (U(w)) {
			return V(st.W(), st.H())
		}
		if (N(w)) {
			st.W(w)
		}
		if (N(h)) {
			st.H(h)
		}
		;
		return st
	}
	st.hW = function () {
		return this.W() / 2
	}
	st.hH = function () {
		return this.H() / 2
	}
	dO.toFront = function () {
		return this.ix(this.sib().length - 1)
		toFront = function () {
			numChildren = this.parent.children.length
			this.parent.setChildIndex(this, numChildren - 1)
			return this
		}
		dO.toFrontAlt = function () {
			numChildren = this.parent.children.length
			this.parent.setChildIndex(this, numChildren - 1)
			return this
		}
	}
	dO.in = dO.within = dO.inStage = function () {
		var ob = this,
				st = ob.st(),
				g = G(arguments),
				x = ob.x,
				y = ob.y,
				w = st.W() - 100,
				h = st.H() - 100,
				inn = x > 0 && x < w && y > 0 && y < h
		if (g.n) {
			if (!inn) {
				ob.rm()
			}
		}
		return inn
		function inStage() {
			var args = G(arguments),
					x = this.x,
					y = this.y,
					stg = this.stg(),
					w = stg.W() - 100,
					h = stg.H() - 100,
					withinStage = x > 0 && x < w && y > 0 && y < h
			if (args.n) {
				if (!withinStage) {
					this.remove()
				}
			}
			return withinStage
			var i = this
			var s = i.S(), wthnS
			wthnS = i.x > 0 && i.y > 0
			&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
			if (g.n && !wthnS) {
				s.rm()
			}
			return wthnS
		}
	}
	dO._hT = function () {
		return this.hitTest.apply(arguments, this)
	}
	dO.hT = function (x, y) {
		function alt() {
			dO._hT = function () {
				return this.hitTest.apply(arguments, this)
			}
			dO.hT = function (x, y) {
				var dO = this
				if (cjs.iDO(x)) {
					return dO.hT(
							dO.gTL(x)
					)
				}
				if (O(x)) {
					y = x.y;
					x = x.x
				}
				return dO._hT(x, y)
			} //= dO.test
		}
		
		var dO = this
		if (cjs.iDO(x)) {
			return dO.hT(
					dO.gTL(x)
			)
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		return dO._hT(x, y)
	}
	dO.lTL = function () {
		return this.localToLocal.apply(this, arguments)
	}
	dO.lTG = function () {
		return this.localToGlobal.apply(this, arguments)
	}
	st.trDr = function () {
		var st = this
		st._md = 0
		st.MD(function () {
			st._md = 1
		})
		st.MU(function () {
			st._md = 0
		})
		return this
	}
	dO.cl = function () {
		return this.clone.apply(this, arguments)
	}
	dO.pa = dO.P = function () {
		return this.parent
	}
	dO.sib = function () {
		return this.P().ch()
	}
	dO.s2p = dO.snap2px = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.snapToPixel
		}
		dO.snapToPixel = g.f ? true : false
		return dO
	}
	dO.dr = function () {
		this.draw.apply(this, arguments)
		return this
	}
	dO.nm = dO.n = dO.N = function (name) {
		if (U(name)) {
			return this.name
		}
		this.name = name;
		return this
	}
	dO.ix = function (n) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return
		}
		dO.parent.sChIx(dO, n)
		return dO
	}
	dO.belowStg = function () {
		return this.y > this.getStage().H()
	}
	dO.s = function () {
		return this.set.apply(this, arguments)
	}
	dO.rm = dO.remove = function () {
		var dO = this
		if (O(dO) && O(dO.parent)) {
			dO.parent.removeChild(dO)
		}
		return dO
	}
	dO.hd = dO.hide = function () {
		return this.vsb(0)
	}
	dO.vis = dO.vsb = function (vsb) {
		var dO = this
		if (U(vsb)) {
			return dO.visible
		}
		dO.visible = vsb ? true : false
		return dO
	}
	dO.St = dO.S = dO.st = dO.stg = function () {
		return this.getStage()
	}
	dO.gTL = function (x, y) {
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		return this.globalToLocal(x, y)
	}
	dO.tkEn = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.tickEnabled
		}
		dO.tickEnabled = g.f ? true : false
		return dO
	}
	dO.cX = dO.centerX = function (a) {
		if (U(a)) {
			return this.x + this.W() / 2
		}
		return this.X(a - this.W() / 2)
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
		}
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
		}
	}
	dO.cY = dO.centerY = function (a) {
		if (U(a)) {
			return this.y + this.H() / 2
		}
		return this.Y(a - this.H() / 2)
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
		}
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
		}
	}
	dO.mdX = dO.cenX = dO.cX = function (a) {
		var dO = this
		if (U(a)) {
			return dO.x + dO.W() / 2
		}
		return dO.X(a - dO.W() / 2)
	}
	dO.mdY = dO.cenY = dO.cY = function (a) {
		var dO = this,
				hH = dO.H() / 2
		return U(a) ? dO.y + hH : dO.Y(a - hH)
	}
	ct.cX = function () {
		return this.St().cen().x
	}
	ct.cY = function () {
		return this.St().cen().y
	}
	ct.cen = ct.pt = ct.center = function () {
		return V(this.W() / 2, this.H() / 2)
	}
	dO.setNomBds = dO.bds = dO.bounds = dO.bd = function (a, b, c, d) {
		var dO = this, g = G(arguments)
		dO.nominalBounds = $Rec(a, b, c, d)
		return dO
	}
	dO.setBds = dO.sBd = dO.gTB = function () {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.getTransformedBounds()
		}
		dO.setBounds.apply(dO, g)
		return dO
	}
	dO.nW = function () {
		return this.nominalBounds.width
	}
	dO.rgX = dO.rX = function () {
		var dO = this, g = G(arguments), rX = g[0]
		if (U(rX)) {
			return dO.regX
		}
		dO.regX = g.p ?
		dO.regX + rX : rX
		return dO
	}
	dO.rgY = dO.rY = function () {
		var dO = this, g = G(arguments), rY = g[0]
		if (g.p) {
			dO.Y(dO.y + (rY - dO.regY))
		}
		if (U(rY)) {
			return dO.regY
		}
		dO.regY = rY
		return dO
	}
	dO.rXY = dO.rgXY = function () {
		var i = this, g = G(arguments),
				x = N(g.f, 0),
				y = N(g.s, x)
		return i.rX(x).rY(y)
		function alt() {
			dO.rXY = function () {
				var dO = this, g = G(arguments),
						x = _.tN(g[0]),
						y = _.tN(g[1], x)
				return dO.rX(x).rY(y)
			}
		}
	}
	dO.rgc = function () {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g[0] === 0) {
			if (g.p) {
				this.rXY(0, 0, '+')
			}
			else {
				this.rXY(0, 0)
			}
		}
		else {
			if (g.p) {
				this.rXY(x, y, '+')
			}
			else {
				this.rXY(x, y)
			}
		}
		return this
		function alt() {
			dO.rgc = function () {
				var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
				return (g[0] === 0) ?
						i.rXY(0, 0, (g.p ? '+' : null))
						: i.rXY(x, y, (g.p ? '+' : null))
			}
		}
	}
	dO.rZero = function (a) {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g.p) {
			this.rX(0, '+')
			//this.X(a, this.regX()-a, '+')
			this.rY(0, '+')
		}
		else {
			this.rX(0)
			this.rY(0)
		}
		return this
	}
	dO.rCenter = function () {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g.p) {
			this.rX(x, '+')
			this.rY(y, '+')
		}
		else {
			this.rX(x)
			this.rY(y)
		}
		return this
	}
	dO.rC = function () {
		var i = this, g = G(arguments), x, y, hW, hH
		x = i.W() / 2
		hW = x
		y = i.H() / 2
		hH = y
		return (g.p) ? i.rX(hW, '+').rY(hH, '+') :
				i.rXY(hW, hH)
	}
	cjs.reggy = reggy = function (o, s) {
		s = s || o.parent
		s.bm('me', function (b) {
			b.W(40).H(40)
			I(function () {
				b.XY(o.x + o.regX, o.y + o.regY)
			}, 100)
		})
	}
	REG = testImgRegCenter = function () {
		mockStage()
		s.bm('me', function (bm) {
			b1 = bm
			bm.spin().drag()
		})
		s.bm('me', function (bm) {
			b2 = bm
			bm.sXY(0.5, 0.3).spin().drag()
		})
		s.A(c = cjs.circle(4).XY(200))
	}
	cjs.bindSlide = cjs.SL = SL = function (b, b2) {
		var g = G(arguments),
				b = g[0], b2 = g[1] || b
		return b.on('mousedown',
				function (e) {
					var bx = b2.x - e.rawX, by = b2.y - e.rawY
					b.on('pressmove', function (e) {
						if (!g.p) {
							b2.x = bx + e.rawX
						}
						if (!g.n) {
							b2.y = by + e.rawY
						}
					})
				}
		)
	}
	dO.SL = function () {
		SL(this)
		return this
	}
	cjs.bindScale = cjs.SC = SC = function (b, b2) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = 'mousedown', pm = 'pressmove', b2 = b2 || b,
				cp = function (n) {
					return n < .2 ? .2 : n > 2 ? 2 : n
				}
		return b.on(d,
				function (e) {
					var X = e.rawX, Y = e.rawY,
							sx = b2.scaleX,
							sy = b2.scaleY
					b.on(pm,
							function (e) {
								if (g.n) {
									b2.sXY(cp(sx + (
											(e.rawX - X) / 200)),
											cp(sy - ((e.rawX - X) / 200))
									)
								}
								else if (g.p) {
									cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
									cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
								}
								else {
									b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
								}
							})
				}
		)
		function alt() {
			cjs.SC = function (b, b2) {
				var g = G(arguments), b = g[0], b2 = g[1],
						d = 'mousedown', pm = 'pressmove', b2 = b2 || b,
						cp = function (n) {
							return n < .2 ? .2 : n > 2 ? 2 : n
						}
				return b.on(d,
						function (e) {
							var X = e.rawX, Y = e.rawY,
									sx = b2.scaleX,
									sy = b2.scaleY
							b.on(pm,
									function (e) {
										if (g.n) {
											b2.sXY(cp(sx + (
													(e.rawX - X) / 200)),
													cp(sy - ((e.rawX - X) / 200))
											)
										}
										else if (g.p) {
											cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
											cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
										}
										else {
											b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
										}
									})
						}
				)
			}
			cjs.bindScale = SC = function (b, b2) {
				var g = G(arguments), b = g[0], b2 = g[1],
						d = 'mousedown', pm = 'pressmove', b2 = b2 || b,
						cp = function (n) {
							return n < .2 ? .2 : n > 2 ? 2 : n
						}
				return b.on(d,
						function (e) {
							var X = e.rawX, Y = e.rawY,
									sx = b2.scaleX,
									sy = b2.scaleY
							b.on(pm,
									function (e) {
										if (g.n) {
											b2.sXY(cp(sx + (
													(e.rawX - X) / 200)),
													cp(sy - ((e.rawX - X) / 200))
											)
										}
										else if (g.p) {
											cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
											cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
										}
										else {
											b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
										}
									})
						}
				)
			}
		}
	}
	cjs.bindSkew = cjs.SK = SK = function (b) {
		var g = G(arguments), b = g[0], b2 = g[1], d = 'mousedown', pm = 'pressmove', b2 = b2 || b
		return b.on(d,
				function (e) {
					var X = e.rawX, Y = e.rawY
					b.on(pm, function (e) {
						b2.kXY(
								(e.rawY - Y) * .5, (e.rawX - X) * .5
						)
					})
				})
	}
	cjs.bindRotate = cjs.RT = RT = function (b, b2) {
		function alt() {
			RT = function () {
				RT(this);//cjs.RT(i);
				return this
			}
			cjs.RT = function (b, b2) {//b = what the control is //b2 what it should control (default = itself!)
				var g = G(arguments), b = g[0], b2 = g[1] || b
				if (g.p) {
					alert('g.p')
					b.rgc('+')
				}
				return b.on('mousedown', function (e) {
					var X = e.rawX, Y = e.rawY, r = b2.rotation
					b.on('pressmove', function (e) {
						b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
					})
				})
			}
			cjs.RT2 = cjs.bindRotate2 = RTT = function (b, b2) {
				
				
				//b = what the control is
				//b2 what it should control (default = itself!)
				var g = G(arguments), b = g[0], b2 = g[1] || b
				if (g.p) {  // b.rgc( '+' )
				}
				return b.on('mousedown',
						function (e) {
							var X = e.rawX, Y = e.rawY, r = b2.rotation
							b.on('pressmove', function (e) {
								b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
							})
						})
			}
		}
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		//if(g.p){  //b.rgc( '+' )   }
		var g = G(arguments), b = g[0], b2 = g[1] || b
		return b.on('mousedown', function (e) {
			var X = e.rawX, Y = e.rawY, r = b2.rotation
			b.on('pressmove', function (e) {
				b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
			})
		})
	}
	cjs.bindTransform = cjs.TR = TR = function TR(b, b2, m) {
		var g = G(arguments),
				b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
		if (m == 'SL') {
			cjs.SL(b, b2);
			m = 'SC'
		}
		else if (m == 'SC') {
			cjs.SC(b, b2);
			m = 'RT'
		}
		else if (m == 'RT') {
			cjs.RT(b, b2);
			m = 'SL'
		}
		return b.on('pressup', function (e) {
			b.removeAllEventListeners();
			TR(b, b2, m)
		})
		function alt() {
			cjs.TR = function TR(b, b2, m) {
				var g = G(arguments),
						b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
				if (m == 'SL') {
					cjs.SL(b, b2);
					m = 'SC'
				}
				else if (m == 'SC') {
					cjs.SC(b, b2);
					m = 'RT'
				}
				else if (m == 'RT') {
					cjs.RT(b, b2);
					m = 'SL'
				}
				return b.on('pressup', function (e) {
					b.removeAllEventListeners();
					TR(b, b2, m)
				})
			}
			cjs.bindTransform = TR = function TR(b, b2, m) {
				var g = G(arguments),
						b = g[0],
						b2 = g[1],
						b2 = b2 || b, m = g[2] || 'SL'
				if (m == 'SL') {
					cjs.bindSlide(b, b2);
					m = 'SC'
				}
				else if (m == 'SC') {
					cjs.bindScale(b, b2);
					m = 'RT'
				}
				else if (m == 'RT') {
					cjs.bindRotate(b, b2);
					m = 'SL'
				}
				return b.on('pressup', function (e) {
					b.removeAllEventListeners();
					TR(b, b2, m)
				})
			}
		}
	}
	dO.TR = function () {
		TR(this);
		return this
	}
	dO.scX = dO.sX = function (n) {
		var dO = this
		if (U(n)) {
			return dO.scaleX
		}
		dO.scaleX = n
		return dO
	}
	dO.scY = dO.sY = function (n) {
		var dO = this
		if (U(n)) {
			return dO.scaleY
		}
		dO.scaleY = n
		return dO
	}
	dO.scXY = dO.sXY = function (x, y) {
		function alt() {
			dO.scX = dO.sX = function (n) {
				var dO = this
				if (U(n)) {
					return dO.scaleX
				}
				dO.scaleX = n
				return dO
			}
			dO.scY = dO.sY = function (n) {
				var dO = this
				if (U(n)) {
					return dO.scaleY
				}
				dO.scaleY = n
				return dO
			}
			dO.scXY = dO.sXY = function (x, y) {
				var dO = this,
						g = G(arguments), v
				if (U(g[0])) {
					return dO
					return {x: dO.sX(), y: dO.sY()}
				}
				v = V(g[0], g[1])
				x = _.tN(v.x)
				y = _.tN(v.y, v.x)
				dO.sX(x)
				dO.sY(y)
				return dO
			}
		}
		
		var dO = this,
				g = G(arguments), v
		if (U(g[0])) {
			return dO
			return {x: dO.sX(), y: dO.sY()}
		}
		v = V(g[0], g[1])
		x = _.tN(v.x)
		y = _.tN(v.y, v.x)
		dO.sX(x)
		dO.sY(y)
		return dO
	}
	dO.skX = dO.kX = function (skewX) {
		if (U(skewX)) {
			return this.skewX
		}
		this.skewX = skewX;
		return this
	}
	dO.skY = dO.kY = function (skewY) {
		if (U(skewY)) {
			return this.skewY
		}
		this.skewY = skewY;
		return this
	}
	dO.skXY = dO.kXY = function (x, y) {
		function alt() {
			dO.skX = dO.kX = function (skewX) {
				if (U(skewX)) {
					return this.skewX
				}
				this.skewX = skewX;
				return this
			}
			dO.skY = dO.kY = function (skewY) {
				if (U(skewY)) {
					return this.skewY
				}
				this.skewY = skewY;
				return this
			}
			dO.skXY = dO.kXY = function (x, y) {
				y = N(y) ? y : x
				return this.kX(x).kY(y)
			}
		}
		
		y = N(y) ? y : x
		return this.kX(x).kY(y)
	}
	dO.rt = dO.rot = function (rotation) {
		function alt() {
			dO.rt = dO.rot = function (rotation) {
				var args = G(arguments);
				rotation = args[0]
				if (args.p) {
					rotation = N(rotation) ? rotation : 1
					return this.rt(this.rotation + rotation)
				}
				if (args.n) {
					rotation = N(rotation) ? rotation : 1
					return this.rt(this.rotation - rotation)
				}
				if (U(rotation)) {
					return this.rotation
				}
				this.rotation = rotation
				return this
				dO.rtAlt = function () {
					var dO = this, g = G(arguments), a = g[0]
					if (g.p) {
						return dO.rt(dO.rotation + _.tN(a, 1))
					}
					if (g.n) {
						return dO.rt(dO.rotation - _.tN(a, 1))
					}
					if (U(a)) {
						return dO.rotation
					}
					dO.rotation = a
					return dO
				}
				dO.rotAlt = function (rotation) {
					var args = G(arguments);
					rotation = args[0]
					if (args.p) {
						rotation = N(rotation) ? rotation : 1
						return this.rt(this.rotation + rotation)
					}
					if (args.n) {
						rotation = N(rotation) ? rotation : 1
						return this.rt(this.rotation - rotation)
					}
					if (U(rotation)) {
						return this.rotation
					}
					this.rotation = rotation
					return this
				}
			}
		}
		
		var args = G(arguments);
		rotation = args[0]
		if (args.p) {
			rotation = N(rotation) ? rotation : 1
			return this.rt(this.rotation + rotation)
		}
		if (args.n) {
			rotation = N(rotation) ? rotation : 1
			return this.rt(this.rotation - rotation)
		}
		if (U(rotation)) {
			return this.rotation
		}
		this.rotation = rotation
		return this
		dO.rtAlt = function () {
			var dO = this, g = G(arguments), a = g[0]
			if (g.p) {
				return dO.rt(dO.rotation + _.tN(a, 1))
			}
			if (g.n) {
				return dO.rt(dO.rotation - _.tN(a, 1))
			}
			if (U(a)) {
				return dO.rotation
			}
			dO.rotation = a
			return dO
		}
		dO.rotAlt = function (rotation) {
			var args = G(arguments);
			rotation = args[0]
			if (args.p) {
				rotation = N(rotation) ? rotation : 1
				return this.rt(this.rotation + rotation)
			}
			if (args.n) {
				rotation = N(rotation) ? rotation : 1
				return this.rt(this.rotation - rotation)
			}
			if (U(rotation)) {
				return this.rotation
			}
			this.rotation = rotation
			return this
		}
	}
	dO.sTf = dO.setTransform
	dO.tf = dO.transform = function () {
		var dO = this, g = G(arguments)
		dO.setTF = dO.sTf = function () {
			var dO = this, g = G(arguments)
			dO.setTransform.apply(g.O && F(g.f.gTf) ? g.f.gTf() : g.f, g)
			return dO
		}
		dO.getTf = dO.gTf = dO.getTransform = function () {
			var dO = this
			return [
				dO.x, dO.y, dO.scaleX, dO.scaleY,
				dO.rotation, dO.skewX, dO.skewY,
				dO.regX, dO.regY
			]
		}
		return g.f ?
				dO.sTf.apply(dO, g.A_ ? g.f : g) :
				dO.gTf()
		function alt() {
			dO.tf = function () {
				var i = this, g = G(arguments)
				if (U(g[0])) {
					return [
						i.x,
						i.y,
						i.scaleX,
						i.scaleY,
						i.rotation,
						i.skewX,
						i.skewY,
						i.regX,
						i.regY
					]
				}
				if (O(g[0]) && F(g[0].getTransform)) {
					g[0] = g[0].getTransform()
				}
				i.setTransform.apply(i, A(g[0]) ? g[0] : g)
				return i
			}
		}
	}
	TRF = TRANSF = function () {
		degToRad = Math.PI / 180;
		cjs.testCanvas()
		//cjs.sharedCode()
		cjs.utils()
		cjs.slider()
		examples.showDistractor()
		stage = new createjs.Stage("testCanvas")
		stage.enableMouseOver();
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		var img = new Image();
		img.onload = handleImageLoad;
		img.src = "/chicks.png";
		function handleImageLoad(evt) {
			examples.hideDistractor();
			var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
			sliceWidth = imgWidth / sliceCount;
			sliceContainer = new createjs.Container();
			sliceContainer.x = stage.canvas.width / 2;
			for (var i = 0; i < sliceCount; i++) {
				var slice = new createjs.Bitmap(img);
				slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
				slice.cache(0, 0, sliceWidth, imgHeight);
				slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
				sliceContainer.addChild(slice);
			}
			var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
			slider.on("change", handleSliderChange, this);
			stage.addChild(sliceContainer, slider);
			updateEffect(slider.value);
		}
		
		function handleSliderChange(evt) {
			updateEffect(evt.target.value);
		}
		
		function updateEffect(value) {
			var l = sliceContainer.getNumChildren();
			for (var i = 0; i < l; i++) {
				var slice = sliceContainer.getChildAt(i);
				slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
				if (i % 2) {
					slice.skewY = value;
				} else {
					slice.skewY = -value;
					slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
				}
				slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
				slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
				slice.updateCache();
			}
			stage.update();
		}
	}
	GROW = function () {
		$St(500, 500).bm('me', function (bm) {
			bm.grow().dg()
		})
	}
	STF = SETTRANSFORM = function () {
		s = $St(800).A()
		s.bm('me', function (me) {
			b = me
			b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
			m = b.getMatrix()
			function tf(a, b, c, d, e, f, g, h, i) {
				return this.x = a || 0,
						this.y = b || 0,
						this.scaleX = null == c ? 1 : c,
						this.scaleY = null == d ? 1 : d,
						this.rotation = e || 0,
						this.skewX = f || 0,
						this.skewY = g || 0,
						this.regX = h || 0,
						this.regY = i || 0,
						this
			}
		})
	}
	TFSP = TFSPIN = TRANSFORMSIMPLE = NOTWORKING = function () {
		angle = 0
		img = $.img('me', handleImageLoad)[0]
		function stop() {
			cjs.Ticker.removeEventListener("tick", tick)
		}
		
		function handleImageLoad() {
			canvas = $.canvas('p', 960, 400).id("testCanvas").A()
			stage = $St(canvas)
			stage.autoClear = true;
			bmp = new createjs.Bitmap(img)
					.rXY(img.width >> 1, img.height >> 1)
					.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
			stage.A(bmp).update();
			cjs.Ticker.timingMode = cjs.Ticker.RAF
			cjs.tick(tick)
		}
		
		function tick(event) {
			angle += 0.01
			var value = Math.sin(angle) * 360
			bmp.rot(value).sXY(value / 360)
			stage.update(event)
		}
		
		/*
		 TFR2 = TRANSFORMSIMPLE = function () {
		 z()
		 angle = 0
		 img = $.img('me', handleImageLoad)[0]
		 function stop() {
		 cjs.Ticker.removeEventListener("tick", tick)
		 }
		 function handleImageLoad() {
		 canvas = $.canvas('p', 960, 400).id("testCanvas").A()
		 stage = cjs.stage(canvas)
		 stage.autoClear = true;
		 bmp = new createjs.Bitmap(img)
		 .rXY(img.width >> 1, img.height >> 1)
		 .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
		 stage.A(bmp).update();
		 cjs.Ticker.timingMode = cjs.Ticker.RAF
		 cjs.tick(tick)
		 }
		
		 function tick(event) {
		 angle += 0.01
		 var value = Math.sin(angle) * 360
		 bmp.rot(value).sXY(value / 360)
		 stage.update(event)
		 }
		 }
		 */
	}
}
dobProto()
function domElOb(){
	ELM = ELEMENTS = function () {
		z()
		div = $.div('red', 400, 400).P('a').A().A($.input())
		s = stage = createjs.stage('yellow', 1000).tick().A()
		elem = new createjs.DOMElement(div[0])
		//stage.A(el)
		// tw(el, [{x:300,y:300},2000])
		// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
	}
	MENTS = function () {
		z()
		div = $.div('red', 400, 400).P('a').A().A($.input())
		s = stage = createjs.stage('yellow', 1000).tick().A()
		elem = new createjs.DOMElement(div[0])
		//stage.A(el)
		// tw(el, [{x:300,y:300},2000])
		// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
	}
	EASELPHYS = function () {
		i = cjs.DisplayObject.prototype
		i.vX = function (a) {
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
		i.vY = function (a) {
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
		i.jX = function (a) {
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
		i.jY = function (a) {
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
		i.move = function () {
			return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
		}
		i.go = function () {
			$t(this.move())
		}
		$St().bm('me', function (b) {
			b.go(10, 10)
			$.t(function () {
				$l(b.inStage())
			})
		})
	}
	createjs.element = function (a) {
		return new createjs.DOMElement(a)
	}
	ELEMENTS = function () {
		z()
		div = $.div('red', 400, 400).P('a').A().A($.input())
		s = stage = createjs.stage('yellow', 1000).tick().A()
		elem = new createjs.DOMElement(div[0])
		//stage.A(el)
		// tw(el, [{x:300,y:300},2000])
		// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
	}
	createjs.element = function (a) {
		return new createjs.DOMElement(a)
	}

}
domElOb()