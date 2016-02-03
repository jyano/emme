DESTROYJOINT = function () {
	w = b2d.W()
	//w.startKilling();
	w.floor.rest(0)
	y = w.ship().XY(400, 170).rot(265).stat()
	w.beg(function (cx) {
		cx.with('bul', function (f) {
			var b = f.B()
			this.B().kill()
			if (b != y) {
				b.kill()
			}
		})
	})
	base = w.S(255, 50, 'r', 60, 15)
	body = link(255, 60)
	base.rev(body)
	/*
	
	 prev= body
	
	 w.rev(prev, body= link(255,90)  ); prev=body
	 w.rev(prev, body= link(255,120)  ); prev=body
	
	 bef =  body = link( 255, 150,'b' )
	
	 w.rev(prev, body); prev=body
	
	
	 red = body = link( 255, 180,'r' )
	
	 j1= w.rev(prev, body); prev=body
	
	 aft = body = link( 255, 210 ,'a')
	
	 j2= w.rev(prev, body); prev=body
	
	
	
	 je = aft.GetJointList()
	
	 w.rev(prev, body=link(255,240)  ); prev=body
	 w.rev(prev, body=link(255,270)  ); prev=body
	 w.rev(prev, body=link(255,300)  ); prev=body
	 w.rev(prev, body=link(255,330)  ); prev=body
	 ball = w.circ(255, 330, 20, 'd').den(1).rest(0); w.rev(prev, ball)
	
	 */
	function link(x, y, col) {
		col = col || 'w'
		return w.B(x, y, col, 10, 15).den(1).fric(0).rest(0)
	}
}
 
	old = function () {
		w.dJtCl = w.distColl = function (a, b, b1OffV, b2OffV) {
			var os1, os2
			if (O(b1OffV)) {
				b1V = b1V.add(b1OffV)
			}
			if (O(b2OffV)) {
				b2V = b2V.add(b2OffV)
			}
			var os1 = a.worldCenter().m()
			var os2 = b.worldCenter().m()
			return w.CJ(
					$.dJD().init(a, b, os1.d(), os2.d()).cl1()
			)
		}
	}
	function haha() {
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level.. you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.  In otherwords, we can't jump!  It's a grave grave situation.  Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
	}
	
	function alpha() {
		w.tit = w.tightDist = function (b, b1) {
			return this.dJ(b, b1, 1, 1000, 1000)
		}
		b.l = function (n, lk) {
			var b = this, w = b.W()
			lk = lk || l
			_.t(N(n, 1), function () {
				w.rJ(lk, lk = w.lk(lk.X(), lk.Y() + 15))
			})
			return lk.K('leaf')
		}
		w.lk = w.lnk = w.link = function (x, y) {
			var w = this, g = G(arguments)
			var b = w.box(x, y, 4, 20).de(4).re(2)
			if (g.d) {
				b.stat()
			}
			return b
		}
		w.soft = w.softPlat = function (x, y) {
			var w = this;
			x = N(x, 300);
			y = N(y, 60)
			w.spg(
					w.bmp(x, y, 4).s1(),
					w.brk(x, y, 100, 30).fR1()
			).dm(1)
		}
		SPRINGS3 = SP3 = function () {
			W()
			w.soft(300, 100)
			w.soft(500, 80)
			w.soft(700, 40)
			w.soft(900, 120)
		}
		j.wnd = j.wind = function () {
			var j = this
			var wound
			$t(function () {
				j.l(j.l() * wound ? 1.01 : 0.99);  //j.W().st.pen('len: ' +j.l())
				wound = j.l() < 5 ? 1 : j.l() > 200 ? 0 : wound
			})
		}
		j.shr = j.shrink = function () {
			return this.l(0.97, '*')
		}
		WINDUP = WUP = function () {
			var wound = false
			W().p()
			j = w.dJtCl(
					w.bump(450, 40, 40),
					w.box(400, 200, 20, 60), 200
			)
			k = w.dJt(
					w.bump(450, 40, 40),
					w.box(400, 200, 20, 60), 200
			)
			//w.S(0, 40, $pF(400, 300).mS()  ) //can get triggered many many times?
			_.in(1, function (cx) {
				j.wind();
				k.wind()
			})
		}
	}
	
	DESTROYJOINT = function () {
		w = b2d.W()
		//w.startKilling();
		w.floor.rest(0)
		y = w.ship().XY(400, 170).rot(265).stat()
		w.beg(function (cx) {
			cx.with('bul', function (f) {
				var b = f.B()
				this.B().kill()
				if (b != y) {
					b.kill()
				}
			})
		})
		base = w.S(255, 50, 'r', 60, 15)
		body = link(255, 60)
		base.rev(body)
		/*
		
		 prev= body
		
		 w.rev(prev, body= link(255,90)  ); prev=body
		 w.rev(prev, body= link(255,120)  ); prev=body
		
		 bef =  body = link( 255, 150,'b' )
		
		 w.rev(prev, body); prev=body
		
		
		 red = body = link( 255, 180,'r' )
		
		 j1= w.rev(prev, body); prev=body
		
		 aft = body = link( 255, 210 ,'a')
		
		 j2= w.rev(prev, body); prev=body
		
		
		
		 je = aft.GetJointList()
		
		 w.rev(prev, body=link(255,240)  ); prev=body
		 w.rev(prev, body=link(255,270)  ); prev=body
		 w.rev(prev, body=link(255,300)  ); prev=body
		 w.rev(prev, body=link(255,330)  ); prev=body
		 ball = w.circ(255, 330, 20, 'd').den(1).rest(0); w.rev(prev, ball)
		
		 */
		function link(x, y, col) {
			col = col || 'w'
			return w.B(x, y, col, 10, 15).den(1).fric(0).rest(0)
		}
	}
	DESTROYJOINT = function () {
		w = b2d.W()
		//w.startKilling();
		w.floor.rest(0)
		y = w.ship().XY(400, 170).rot(265).stat()
		w.beg(function (cx) {
			cx.with('bul', function (f) {
				var b = f.B()
				this.B().kill()
				if (b != y) {
					b.kill()
				}
			})
		})
		base = w.S(255, 50, 'r', 60, 15)
		body = link(255, 60)
		base.rev(body)
		/*
		
		 prev= body
		
		 w.rev(prev, body= link(255,90)  ); prev=body
		 w.rev(prev, body= link(255,120)  ); prev=body
		
		 bef =  body = link( 255, 150,'b' )
		
		 w.rev(prev, body); prev=body
		
		
		 red = body = link( 255, 180,'r' )
		
		 j1= w.rev(prev, body); prev=body
		
		 aft = body = link( 255, 210 ,'a')
		
		 j2= w.rev(prev, body); prev=body
		
		
		
		 je = aft.GetJointList()
		
		 w.rev(prev, body=link(255,240)  ); prev=body
		 w.rev(prev, body=link(255,270)  ); prev=body
		 w.rev(prev, body=link(255,300)  ); prev=body
		 w.rev(prev, body=link(255,330)  ); prev=body
		 ball = w.circ(255, 330, 20, 'd').den(1).rest(0); w.rev(prev, ball)
		
		 */
		function link(x, y, col) {
			col = col || 'w'
			return w.B(x, y, col, 10, 15).den(1).fric(0).rest(0)
		}
	}
	REVJTLEASH = LEASH = LSH = function () {
		W()
		p = w.p(300, 200)
		base = link(300, 20).stat()
		l = base.rJ(10)
		w.rJ(l, p.XY(l.X(), l.Y()))
		base = link(100, 20).stat()
		l = base.rJ(10)
		w.rJ(l, p.XY(l.X(), l.Y()))
		function link(x, y) {
			var l = w.rJ(x, y, '+')
			l.l = function (n) {
				var lk;
				n = N(n) ? n : 1
				_.t(n, function () {
					lk = link(l.X(), l.Y() + 10)
					r = w.rJ(l, lk)
					l = lk
				})
				return l
			}
			return l
		}
		
		/*
		
		 w.link2 = function(x,y){var w=this,b
		
		 b=w.rJ(x,y,'+')
		
		 b.l=function(n){var b=this, w=b.W()
		 _.t(N(n,1), function(){
		 w.rJ(b, b=w.l(b.X(),b.Y()+15))
		 })
		 return b}
		
		 return b
		
		 }
		
		 link3 = function(x,y){
		 var l= w.D(x,y,'y', 5, 10).d(4).r(2)
		 l.l= function(n){
		 _.t(N(n,1), function(){
		 l = link3(l.X(),l.Y()+20)})
		 return l}
		 return l}
		
		 link0=function(x,y){return w.D(x,y, 'w', 3, 15).d(1).fr(0).r(0)}
		
		 p2= w.p(1000,200)
		 base2 = w.link2(1000,20).stat()
		 l2 =  base2.rJ(10)
		 w.rJ(l2,p2)
		
		
		 w.$(function(){
		 base3 = link3(600,20).stat()
		 l3 =  base3.l(10)
		 })
		
		
		
		 w.floor.r(0)
		 prev = top = w.S(400,50,'g', 60,15)
		 _.t(10, function(i){var next
		 next=link(255,(i+1)*30)
		 prev = prev.rJ(next)})
		 //body.rev(body2) returns body2 !!!!!
		 w.rJ(prev, w.D(400, 330, 'd',20).d(1).r(0))
		
		
		
		
		 y = w.y(600,170).rot(265).stat()
		 w.cl('bu',function(f){
		 if(!f.of(y)){f.B().kill()}
		 })
		
		 */
	}
	REVJTLEASH = LEASH = LSH = function () {
		W()
		p = w.p(300, 200)
		base = link(300, 20).stat()
		l = base.rJ(10)
		w.rJ(l, p.XY(l.X(), l.Y()))
		base = link(100, 20).stat()
		l = base.rJ(10)
		w.rJ(l, p.XY(l.X(), l.Y()))
		function link(x, y) {
			var l = w.rJ(x, y, '+')
			l.l = function (n) {
				var lk;
				n = N(n) ? n : 1
				_.t(n, function () {
					lk = link(l.X(), l.Y() + 10)
					r = w.rJ(l, lk)
					l = lk
				})
				return l
			}
			return l
		}
		
		/*
		
		 w.link2 = function(x,y){var w=this,b
		
		 b=w.rJ(x,y,'+')
		
		 b.l=function(n){var b=this, w=b.W()
		 _.t(N(n,1), function(){
		 w.rJ(b, b=w.l(b.X(),b.Y()+15))
		 })
		 return b}
		
		 return b
		
		 }
		
		 link3 = function(x,y){
		 var l= w.D(x,y,'y', 5, 10).d(4).r(2)
		 l.l= function(n){
		 _.t(N(n,1), function(){
		 l = link3(l.X(),l.Y()+20)})
		 return l}
		 return l}
		
		 link0=function(x,y){return w.D(x,y, 'w', 3, 15).d(1).fr(0).r(0)}
		
		 p2= w.p(1000,200)
		 base2 = w.link2(1000,20).stat()
		 l2 =  base2.rJ(10)
		 w.rJ(l2,p2)
		
		
		 w.$(function(){
		 base3 = link3(600,20).stat()
		 l3 =  base3.l(10)
		 })
		
		
		
		 w.floor.r(0)
		 prev = top = w.S(400,50,'g', 60,15)
		 _.t(10, function(i){var next
		 next=link(255,(i+1)*30)
		 prev = prev.rJ(next)})
		 //body.rev(body2) returns body2 !!!!!
		 w.rJ(prev, w.D(400, 330, 'd',20).d(1).r(0))
		
		
		
		
		 y = w.y(600,170).rot(265).stat()
		 w.cl('bu',function(f){
		 if(!f.of(y)){f.B().kill()}
		 })
		
		 */
	}
	w.dJRopeBall = function () {
		var w = this
		var b = w.brk(255, 50, 60, 15, 'g')
		var link = b
		for (var i = 1; i <= 10; i++) {
			b = w.brk(255, i * 30, 3, 15, 'w')
			w.rJ(link, b)
			link = b
		}
		w.rJ(link, w.bal(255, 330, 20, 'w'))
		return w
	}
	KILLEVERYTHING = function () {
		W( //[1200,600,1200,2000],
				{g: 30}
		)
		w.s.XY(120, 50).sXY(.8)
		body = w.rect(255, 50, 60, 15, 'g').stat()
		link = body
		for (var i = 1; i <= 10; i++) {
			body = w.rect(255, i * 30, 3, 15, 'w').den(1).fric(0).rest(0)
			w.rev(link, body)
			link = body
		}
		body = w.circ(255, 330, 20, 'd').den(1).fric(0).rest(2)
		w.rev(link, body)
		w.randRects()
		isHooked = false
		distJ = false
		hero = w.rect(320, 460, 20, 20, 'b')
		$can = superCanvas($(w.s.HUD.canvas))
		$can.MD(function (x, y) {
			w.QueryPoint(function (fixture) {
				var touchedBody = fixture.body()
				if (touchedBody.isStat()) {
					distJ = w.dist(hero, touchedBody, hero.GetWorldCenter(), V(x, y).div()) //collideConnected=true
					isHooked = true
				}
				return false
			}, V(x, y).div())
		}) //if(distJ){w.DestroyJoint(distJ)}
		$can.MU(function () {
			if (distJ) {
				w.DestroyJoint(distJ)
			}
		})   // if I release the mouse, I destroy the distance joint
		cjs.tick(function () {// as long as the hook is active, I shorten a bit joint distance
			if (isHooked) {
				hero.SetAwake(true) // BODY MUST BE AWAKE!!!!!!
				distJ.SetLength(distJ.GetLength() * 0.97)  //distJ.len(97,'%') //len('97%')
			}
		})
		_.times(8, function () {
			w.addMe().den(0).XY(700, 400)
		})
		_.times(4, function () {
			w.addMe().den(0).XY(700, 300)
		})
		_.times(1, function () {
			w.addMe().den(0).XY(700, 200)
		})
		y = w.ship().angDamp(1000)//.track()
		f = null
		w.beg(function (cx) {
			cx.with('bul', function (what) {
				if (what.B() != y) {
					what.B().kill()
				}
			})
		})
		cjs.tick(function () {
			//w.each(function(b){if(b.Y()>800){b.kill()}})
		})
		//w.show(function(){return w.GetBodyCount()})
	}
	w.link = function self(x, y) {
		var that = this, l
		l = this.rect(x, y, 4, 20).den(4).rest(2)
		l.l = function (num) {
			num = N(num) ? num : 1
			var lk
			_.times(num, function () {
				lk = self(l.X(), l.Y() + 15)
				that.rev(l, lk)
				l = lk
			})
			return l.K('leaf')
		}
		return l
	}
GRAD = function () {
	ob = {}
	ob.linkedCirs = function () {
		h = w.i.h().dc(100, 100, 50)
		h1 = w.i.h(-100, -100, '+').c('b', 'r', 10)
		h1.dc(200, 200, 50)
		h1.dc(400, 200, 50)
		h1.dc(600, 200, 50)
		h1.dc(300, 300, 50)
		h1.c('r', 'b', 30).dc(400, 400, 50).dc(500, 500, 50).f().dc(600, 600, 50)
	}
	ob.candy = function () {
		//the most beautiful orange candy ball!!
		// linear stroke, radial fill !!! and orange :)
		w.i.h(200, 200, '+').cir({
			r: 50,
			C: ['y', 10],
			lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
			ls: {c1: 'u', c2: 'o'}
		})
		w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	}
	ob.mick = function () {
		w.mick(700, 100, {c1: 'b', c2: 'X'})
		w.mick(700, 300, {c2: 'b'})
		w.mick(100, 100, {y2: 10})
		w.mick(100, 200, {y2: 200})
		w.mick(100, 300, {x2: 100})
		b = w.D(300, 200)
		b.cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
		b.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
		b.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	}
	ob.greyScale = function () {
		w.i.h(1000, 300).pol({v: v1, lf: 1})
		w.bg.h(900, 300).pol({v: v1, rf: 1})
		w.D(600, 200).pol({v: verts, c: 'y', C: 'y', l: 5, rf: 1})
		w.D(700, 200).pol({v: verts, c: 'y', C: 'y', l: 5, lf: 1})
		function tween() {
			h = w.s.h()
			h.dc(50).dc(200, 0, 100).dc(100, 100, 100)
			h.c({l: 20, C: 0, ls: 1})
			h.dc(50).dc(200, 0, 100).dc(100, 100, 100)
			h.twL(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			h.twL(
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
		
		tween()
	}
	ob.tetris = function () {
		w.i.h(100, 100, '+')
				.c({l: 20, C: 'y', lf: {c1: 'b'}})
				.dc(100)
				.dr(300, 100)
		w.$h(200, 450, 'w', 20, '+')
				.lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		w.gx.ct(600, 200).rec(
				{w: 300, h: 200, c: 'r', C: 'o', l: 10, a: -5},
				{w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20})
				.rec({w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20}).XY(50, 50)// c: {l:20, C:'y'},, lf:{c1:'b',c2:'z'}  //lf:{c1:'r', c2:'b'}//lf:['r','b']//,  bf:1
		w.gx.ct(600, 450)
				.rec({w: 200, h: 100, c: 'r', C: 'o', l: 10, a: -5})
				.rec({w: 100, h: 200, c: 'r', C: 'o', l: 10, a: 5})
		w.$h(900, 200, '+').lf(['b', 'y'])
				.dr2({w: 200, h: 200})
		w.$h(900, 400, '+')
				.lf({c1: 'r', c2: 'y', x1: -100})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		b = w.D(800, 300)
		b.rec({w: 250, h: 300, bm: 'me'})
		b.rec({w: 200, h: 200, lf: 1, l: 2})
		w.gx.rec(145, 120, 10, 80, 'o')
		w.$h(200, 200, '+')
				.rec(145, 120, 100, 200, 'u', 'y', 20)
	}
	ob.gradPoly = function () {
		//two ways to make the same thing
		lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
		v = [[300, 300], [320, 200], [640, 400], [280, 650]]
		w.bg.h().pol({lf: lf, v: v})
		w.bg.h(200, 0).lf(lf).mt(v)
	}
	W.btns(ob)
}
ROPE = function () {
	var canvas_width, canvas_height, mouse_x, mouse_y, canvas_width_m, canvas_height_m
	mouse_pressed = false
	mouse_joint = false
	scale = 30
//Draw a w, this method is called in a loop to redraw the w
	function draw_w(w, context) {
		//convert the canvas coordinate directions to cartesian coordinate direction by translating and scaling
		ctx.save()
		ctx.translate(0, canvas_height)
		ctx.scale(1, -1)
		w.DrawDebugData()
		ctx.restore()
		//write some text
		ctx.textAlign = 'right'
		ctx.fillStyle = '#fff'
		ctx.font = 'bold 15px arial'
		ctx.fillText('Rope using box2d',
				canvas_width - 10, canvas_height - 10)
	}
	
	function createWorld() {
		w = bW(gravity = bV(0, -10), true)
		w.SetDebugDraw(new b2DebugDraw().sS(document.getElementById("canvas").getContext("2d"));
	.
		sDS(scale).sFA(0.5).sLT(1.0).sF(b2DebugDraw.e_shapeBit);
	)
		
		
		//ceiling
		ground = ceiling = createBox(w, canvas_width_m / 2, canvas_height_m - 0.5, 16, 1, {type: b2Body.b2_staticBody});
		var last_link = ceiling,
				last_anchor_point = bV(0, -.5),
				revolute_joint = rev(),
				r_height = 1.1 //height of rope elements, in metres ofcourse
		//rope
		for (var i = 1; i <= 10; i++) {
			var body = createBox(w, canvas_width_m / 2, canvas_height_m - 1 - i * 1.5, 0.25, r_height);
			revolute_joint.A(last_link).B(body).lAA(last_anchor_point)
					.lAB(bV(0, r_height / 2))
			last_anchor_point = bV(0, -1 * r_height / 2);
			w.cJ(revolute_joint)
			last_link = body
		}
		var body = createBox(w, canvas_width_m / 2, canvas_height_m - 1 - i * 1.5, r_height, r_height, {density: 5.0});
		revolute_joint.A(last_link).B(body).lAA(last_anchor_point).lAB(bV(0, r_height / 2))
		last_anchor_point = bV(0, -1 * r_height / 2)
		w.cJ(revolute_joint)
		return w
	}

//Create standard boxes of given height , width at x,y
	function createBox(w, x, y, width, height, options) {
		//default setting
		options = $.extend(true, {
					'density': 1.0, 'friction': 1.0, 'restitution': 0.5,
					'type': b2Body.b2_dynamicBody
				},
				options)
		return w.cB(
				bDf().ps(x, y).t(options.type).uD(options.user_data),
				fDf().d(options.density).f(options.friction)
						.r(options.restitution).s(pSh().sAB(width / 2, height / 2)))
	}
	
	function step() {
		w.s(1 / (fps * .8), 8, 3).clF()
		draw_w(w, ctx) //redraw the w
		sT(step, 1000 / 60) //call this function again after 1/60 seconds or 16.7ms
	}
	
	//Convert coordinates in canvas to box2d w
	function get_real(p) {
		return bV(p.x + 0, canvas_height_m - p.y)
	}
	
	function GetBodyAtMouse(includeStatic) {
		var mouse_p = bV(mouse_x, mouse_y);
		var aabb = new b2AABB();
		aabb.lowerBound.Set(mouse_x - 0.001, mouse_y - 0.001);
		aabb.upperBound.Set(mouse_x + 0.001, mouse_y + 0.001);
		var body = null;
		// Query the w for overlapping shapes.
		function GetBodyCallback(fixture) {
			var shape = fixture.GetShape();
			if (fixture.GetBody().GetType() != b2Body.b2_staticBody || includeStatic) {
				var inside = shape.TestPoint(fixture.GetBody().GetTransform(), mouse_p);
				if (inside) {
					body = fixture.GetBody()
					return false
				}
			}
			return true;
		}
		
		w.QueryAABB(GetBodyCallback, aabb);
		return body
	}

// main entry point
	$(function () {
		var canvas = $('#canvas');
		ctx = canvas.get(0).getContext('2d');
		//get internal dimensions of the canvas
		canvas_width = pI(canvas.attr('width'))
		canvas_height = pI(canvas.attr('height'))
		canvas_height_m = canvas_height / scale
		canvas_width_m = canvas_width / scale
		//first create the w
		w = createWorld()
		//If mouse is moving over the thing
		$(canvas).mousemove(function (e) {
			var p = get_real(bV(e.pageX / scale, e.pageY / scale))
			mouse_x = p.x
			mouse_y = p.y
			if (mouse_pressed && !mouse_joint) {
				var body = GetBodyAtMouse()
				if (body) { //if joint exists then create
					mouse_joint = w.cJ(
							new b2MouseJointDef().A(ground).B(body).tg(p).cC(1)
									.mF(1000 * body.GetMass()).dR(0))
					body.aw(1)
				}
			}
			if (mouse_joint) {
				mouse_joint.sT(p)
			}
		})
		$(canvas).mousedown(function () { //flag to indicate if mouse is pressed or not
			mouse_pressed = true
		})
		/*
		 When mouse button is release, mark pressed as false and delete the mouse joint if it exists
		 */
		$(canvas).mouseup(function () {
			mouse_pressed = false;
			if (mouse_joint) {
				w.dJ(mouse_joint)
				mouse_joint = false
			}
		})
		step()
	})
}
