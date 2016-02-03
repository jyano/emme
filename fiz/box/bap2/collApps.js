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
VORTEX = function () {
	w = b2d.W()
	y = w.ship()
	w.rectStat(200, 250, 400, 20)
	w.rectStat(400, 250, 20, 40)
	_.times(20, function () {
		w.ball(100, 100, 10)
	})
	vort = w.stat(600, 200, b2d.circ(200).sensor(true)).K('vortex')
	func = function () {
		w.each('ball', function (b) {
			b.towards(600, 200)
		})
	}
	//w.while('vortex', 'ship', func)
	y.while('vortex', func)
}
KINGOFMES = function () {
	w = b2d.W({g: 10}).debug()
	//all jumping together???!
	w.roof.kill()
	w.left.kill()
	w.right.kill()
	w.s.sXY(.8).X(100)
	_.times(15, function () {
		w.addMe(900, 100, 5).trig('feet', function () {
					var p = this
					p.B().rot(0).lV(-2, -10)
				}
		).angDamp(50)//.fixRot()
		w.addMe(300, 100, 5).trig('feet', function () {
			this.B().rot(0).lV(2, -10)
		}).angDamp(50)//.fixRot()
	})
	w.C('r')
}
HAT = function () {   // could i automatically have body listen to their sensors?
	w = b2d.W()
	w.ball().rest(.3)
	p = w.addMe(400, 150, 5)
	p.trig('right')
	p.trig('left')
	$.space(function () {
		if (p.trig.right) {
			p.I(100, -400)
		}
		if (p.trig.left) {
			p.I(-100, -400)
		}
	})
	p.trig('hat',
			function () {
				p.bindSprite('guy')
			})
}
WHEN = function () {
	W('A').G(1)
	r = w.S(500, 300, 'r', 500, 300, '-').K('r')
	y = w.y(1100, 300)
	//work
	y.cl(function () {
		w.D(600, 300, $r(), 22)
	})
	y.lD(30)
	// y.cl('r', function(){w.C('q') })
	//dont work
	//y.cl(r, function(){w.C('q') })
	//w.cl(y, function(){ w.C('z')    })
}
KING = function () {
	W({g: 12}).Y()
	w.S(200, 250, 'r', 900, 20);
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
	vor = w.S(600, 200).K('vor')
	vor.cir({s: 1, c: 'z', r: 340, o: .2, C: 'z', l: 20})
	y.wl(vor, function () {
		alert('y.wl(vor,fn)')
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
VEL = function () {
	W({g: 0}).Y()
	b = w.ball()
	r = w.S(300, 300, 'r', 30).K('r')
	w.cl('r', function (other, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = b1.lVW(pt)
		w.D(600, 300, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
}
NOTSUREVEL = function () {
	W({g: 0}).Y()
	b = w.ball()
	b1 = w.ball(300, 300)
	w.b(function (cx) {
		var p, v1, v2, temp, i
		cx.w(b, b1, function (b1, cx) {
			var b = this
			pt = cx.cen()
			v1 = b.lVW(pt);
			v2 = b1.lVW(pt)
			temp = w.D(600, 300, 'r', 10);
			$.in(.5, function () {
				temp.kill()
			})
			i = temp.I(v1.x - v2.x, v1.y - v2.y)
		})
	})
}
GHOSTS = function () {
	W({g: 2});
	b = w.D(100, 100, 'b', 50).d(1);
	r = w.ball(400, 400, 'r', 80).d(1)
	z(function () {
		var v = b.lVW(b).div(10);
		r.lV(v)
	})  // set b2's linVel to b's linWorVel (scaled down by 20) // $l(b.lV());   //b3= w.ball(100,100,10); $l('vel: ' + b3.lV().x); $l('velW: ' + b3.lVW().x); $l('velL: ' + b3.lVL().x)
}
CENPTS = function () {
	W(0).C('z')
	//technically.. this is all depped by cx.cen
	w.bump(50, 550, 200)
	w.bump(800, 300, 80)
	w.brick(750, 300, 150, 100)
	w.ball(300, 300, 80)
	w.beg(function (cx) {
		var a = cx.A(), b = cx.B()
		markAABB(a);
		markAABB(b) // dot both upper and lower bounds of AABB of both fixts
		a.dot('g');
		b.dot('r')  //dot center of both fixts
		w.dot('y', M.lC(a.cen(), b.cen()))//dot center of their centers
		//2do:draw line to connect these pts..
	})
	w.chalk('here you can clearly see that the center of the two fixtures',
			'is not necessarily the same as the contact point,',
			'and can only represent collision center if fixtures are similar size.',
			'..perhaps halfway between this and the actual contact point would be nice')
	function markAABB(f) {
		ab = f.GetAABB()
		lb = ab.lowerBound
		up = ab.upperBound
		lx = lb.x * 30
		ly = lb.y * 30
		ux = up.x * 30
		uy = up.y * 30
		dx = ux - lx
		dy = uy - ly
		w.dot('w', ux, uy)
		w.dot('p', lx, ly)
	}
}
later = function () {
	old = function () {
		HAT = function () {
			W()
// could i automatically have body listen to their sens?
			w.ball().r(.3)
			p = w.me(400, 150, 5)
			p.my('hat', function () {
				p.bS('guy')
			})
			p.my('right');
			p.my('left')
			$.space(function () {
				if (p.trg.right) {
					p.I(100, -400)
				}
				if (p.trg.left) {
					p.I(-100, -400)
				}
			})
		}
		CONTACTS = function () {
			W()
			var centerFx = b2d.cir(80).K('center')
			b = w.D(500, 300, 'r', [
				centerFx,
				b2d.rec(60, 90, 0, 40, 10).sen(1).K('sen1')
			]).aV(100)
			//wow!  no friction?? ..b and floor both hav fr .2!
			w.D(700, 300, 'p', [
				centerFx,
				b2d.cir(100).sen(1).K('sen2')
			]).aV(100)
			w.col('s1', 's2',
					function () {
						w.D(100, 100, 'w', 100)
					})
			w.b(function (cx) {
				if (cx.w('s1', 's2')) {
					w.flag('new')
				}
			}) //w.on('new', function(){w.ball()})
		}
		THROTTLE = function () {
			W()
			b = w.ball(300, 300, 100)
			b1 = w.brick(300, 500)
			time = 0
			$.ev(1, function () {
				time++
			})
			cjs.t(function () {
				if (w.flagged('moveBrick')) {
					b1.X(20, '+')
				}
			})
			lastTime = 0
			change = 0
			w.b(function (cx) {
				if (cx.w('brick')) {
					if (lastTime != time) {
						lastTime = time;
						w.flag('moveBrick')
					}
				}
			})
		}
		b.when1 = function () {
			var b = this, w = b.W(), ob = {}
			ob.cxs = function (k, fn) {
				w.beg(k, fn)
				return {
					after: function (fn) {
						w.end(k, fn)
					}
				}
			}
			return ob
		}
		rM = function () {
			cx.rM = cx.manifold = cx.gM = function () {
				var cx = this;
				return cx.GetManifold()
			}
			cx.lN = cx.localPlaneNormal = cx.lPN = function () {
				var cx = this
				return cx.rM().m_localPlaneNormal
			}
			cx.lP = cx.localPoint = function () {
				var cx = this;
				return cx.rM().m_localPoint
			}
			cx.n = cx.pointCount = cx.pC = function () {
				var cx = this
				return cx.rM().m_pointCount
			}
			cx.ps = cx.points = cx.p = function () {
				var cx = this
				return cx.rM().m_points
			}
		}; //rM()
		PRE = function () {
			W()
			w.D(200, 300, 'r', 50)
			STATE = {}
			cjs.t(function () {
				if (STATE.newBall) {
					w.D(200, 300, 'b', 50)
				}
				STATE.newBall = false
			})
			w.pre(function (cx, mf) {
				c = cx;
				m = mf
			})
			//second pam is really info about previous collision manfest?  may be usesless?!!!!
		}
		cx.cen = cx.mid = cx.center = function () {
			var cx = this
			return M.lC(
					cx.A().cen(),
					cx.B().cen())
		}
		/*
		 w.when = function(k, k2, oB, oE){var w=this,g=G(arguments)
		
		
		 //instructions:
		 //
		
		 if (F(g[0])){
		
		 oE=k2; oB=k
		 w.beg(g[1])
		 if (g[2]) { w.end(g[]) }
		 }
		
		
		 else if (F(what2)) {
		 eFn = bFn
		 bFn = what2
		 w.beg(what, oB)
		 if (eFunc) { w.end(what, eFn) }}
		
		 else if (F(oB)){
		 w.beg(what, what2, bFn)
		 if (eFn) {w.end(what, what2, eFn)}}
		
		
		
		 return w
		
		 }*/
		//cx.excludes=function(u){return !this.includes(u)}
		/*
		 cx.destroy = cx.destroyBoth = function () {
		 this.a().setDestroy()
		 this.b().setDestroy()
		 return this
		 }
		
		 cx.destroyIf = function (kind) {
		 this.a().setDestroyIf(kind);
		 this.b().setDestroyIf(kind)
		 }
		
		 cx.destroyOtherIf = function (k) {
		 var a = this.a(), b = this.b()
		 if (a.is(k)) {
		 b.setDestroy()
		 }
		 else if (b.is(k)) {
		 a.setDestroy()
		 }
		
		 }
		
		 */
		w.collx = function (k1, k2, fn) {
			var w = this,
					n = k1 + k2,
					cx
			if (F(k2)) {
				return w.collideAny(k1, k2)
			}
			else {
				w.beg(function (cx) {
					if (cx.with(k1, k2)) {
						w.flag(n, cx)
					}
				})
				cjs.t(function () {
					if (cx = w.flagged(n)) {
						fn(cx)
					}
				})
			}
		}
		w.classx = function (k) {
			var w = this,
					ob = {class: k, k: k, world: w, w: w}
			ob.with = ob.collWith = function (k, fn) {
				var ob = this
				if (O(k)) {
					_.e(k, function (fn, k) {
						ob.with(k, fn)
					})
				}
				else {
					w.with(w.class, k, fn)
				}
				return w
			}
			return ob
		}
		w.collideAny = function (a, fn) {
			var w = this
			w.beg(a, function (cx) {
				$.do(function () {
					fn(cx)
				})
			})
			return w
		}
		w.flagx = function (flag, val) {
			var w = this
			w.flags = w.flags || {}
			if (U(val)) {
				val = true
			}
			w.flags[flag] = val
			return w
		}
		w.flaggedx = function (flag) {
			var w = this, wasFlagged
			w.flags = w.flags || {}
			wasFlagged = w.flags[flag]
			if (wasFlagged) {
				w.flags[flag] = false
			}
			return wasFlagged
		}
		w.onx = function (onWhat, fn) {
			var w = this, val
			//this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)
			//interesting default !!!!!!!
			//func=func||function(val){val()}
			cjs.t(function () {
				val = w.flagged(onWhat)
				if (val) {
					fn(val)
				}
			})
			return w
		}
		b2d.superManifold = function (m) {//used????
			m.lPN = m.m_localPlaneNormal
			m.lP = m.m_localPoint
			m.pC = m.m_pointCount
			m.p = m.m_points
			m.t = m.m_type
			return m
		}
		function SuperImpulses(impulses) {
			impulses.n = impulses.nI = function () {
				return impulses.normalImpulses
			}
			impulses.t = impulses.tI = function () {
				return impulses.tangentImpulses
			}
			return impulses
		}

//do any of these get used? i think filterData does
		b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
			var m = new BXD.b2ContactManager
			m.c = m.cl = m.Collide
			m.a = m.aP = m.AddPair
			m.f = m.fNC = m.FindNewContacts
			m.d = m.ds = m.Destroy
			return m
		}
		b2d.cxFilt = b2d.filter = function () {//used?
			var f = new b2d.b2ContactFilter
			f.rC = f.RayCollide
			f.sC = f.ShouldCollide
			return f
		}
		b2d.neither = function (b1, b2) {//d~data
			return {
				is: function (d) {
					return !b1.is(d) && !b2.is(d)
				}
			}
		}
		b2d.either = function (b1, b2) {
			return {
				is: function (d) {
					return b1.is(d) || b2.is(d)
				}
			}
		}
		b2d.either1 = function (ob1, ob2, is1, is2) {
			return (ob1.is(is1) && ob2.is(is2)) ||
					(ob1.is(is2) && ob2.is(is1))
		}
		//Array.prototype.sen=function(k){var arr=this; arr.isSensor=k||true; return arr}
	}
///////
///////  lVW
///////
//from tx:
	/*
	 w.l(1000,200,100,900,'-')
	 w.l (600,0,700,500)
	 w.l(200,200,500,500,'+')
	 w.dr(350,260, 200,200,'-')
	 w.dr( 500,240, 160,160,'+')
	 w.dr( 400,200, 100,100)
	 b= w.D(100, 200, 'y', 150, 100).d(.5).$(function(){this.B().I(0,-50)})
	 w.D(500, 400, 'y', 50, 100).d(.5).$(function(){this.B().I(0,-50)})
	 */
	bits = function () {
		f.grp = function (grpIx) {
			var f = this,
					fl = f.GetFilterData()
			if (U(grpIx)) {
				return fl.groupIndex
			}
			fl.groupIndex = grpIx
			f.SetFilterData(fl)
			return f //get/set for groupIndex
		}
		fd.grp = fd.group = fd.index = fd.gI = function (a) {
			if (U(a)) {
				return this.filter.groupIndex
			}
			this.filter.groupIndex = a;
			return this
		}
		fd.cat = fd.category = fd.cB = function (cB) {
			var fd = this
			if (U(cB)) {
				return fd.filter.categoryBits
			}
			fd.filter.categoryBits = cB
			return fd
		}
		fd.msk = function (mB) {
			var fd = this,
					fl = fd.filter, n
			if (U(mB)) {
				return fl.maskBits
			}
			if (A(mB)) {
				n = 0
				_.e(mB, function (b) {
					n += b
				})
				mB = n
			}
			fl.maskBits = mB
			return fd
		}
		fd.bit = function (cat, msk) {
			var fd = this
			fd.cat(cat).msk(msk)
			return fd
		}
		w.sCF = w.setContactFilter = w.SetContactFilter
		cx.fl = cx.filtering = cx.fFF = function () {
			var cx = this//whats the point?
			cx.FlagForFiltering()
			return cx
		}// Flag this contact for filtering.
// Filtering will occur the next time step.
		b2d.fl = b2d.filt = b2d.filterData = function () {
			var d = new b2d.Dynamics.b2FilterData
			d.gI = function (a) {
				if (U(a)) {
					return d.groupIndex
				}
				d.groupIndex = a;
				return d
			}
			d.cat = function (a) {
				if (U(a)) {
					return d.categoryBits
				}
				d.categoryBits = a;
				return d
			}
			d.mask = function (a) {
				if (U(a)) {
					return d.maskBits
				}
				d.maskBits = a;
				return d
			}
			return d
		}
		f.fil = function (d) {
			var f = this
			if (U(d)) {
				return f.GetFilterData()
			}
			f.SetFilterData(d)
			return f
		}
		f.grp = function (i) {
			var f = this, fl = f.fil()
			if (U(i)) {
				return fl.groupIndex
			}
			fl.groupIndex = i
			return f.fil(fl)
		}
		f.cat = function (cB) {
			var f = this,
					d = f.fil()
			if (U(cB)) {
				return d.categoryBits
			}
			d.categoryBits = cB
			return f.fil(d)  //get/set for groupIndex
		}
		f.msk = function (m) {
			var f = this,
					fl = f.fil(), n
			if (U(m)) {
				return fl.maskBits
			}
			if (A(m)) {
				n = 0
				_.e(m, function (b) {
					n += b
				})
				m = n
			}
			fl.maskBits = m
			return f.fil(fl)
		}
		f.bit = function (cat, msk) {
			var f = this
			f.cat(cat).msk(msk)
			return f
		}
		b.bit = function (cat, msk) {
			var b = this
			b.cat(cat).msk(msk)
			return b
		}
		b.grp = function (i) {
			var b = this
			if (U(i)) {
				return b.f().grp()
			}
			b.fs(function (f) {
				f.grp(i)
			})
			return b
		}
		b.cat = function (cat) {
			var b = this
			b.fs(function (f) {
				f.cat(cat)
			})
			return b
		}
		b.grp = function (grp) {
			var b = this
			b.fs(function (f) {
				f.grp(grp)
			})
			return b
		}
		b.msk = function (m) {
			var b = this
			b.fs(function (f) {
				f.msk(m)
			})
			return b
		}
		GRP = function () {
			W(30).Y();
			w.pop('b and r')
			w.right.grp(-1)
			y.grp(-1)
			w.D(600, 400, 'r', 30).grp(-1)
			w.D(600, 400, 'r', 40).grp(-1)
			w.D(600, 400, 'r', 50).grp(-1)
			w.D(600, 400, 'b', 50, 50).grp(-2)
			w.D(600, 400, 'b', 60, 60).grp(-2)
			w.D(600, 400, 'b', 70, 70).grp(-2)
		}
		CAT = function () {
			W(40)
			b = w.D(300, 300, 'b', 200).r(1).I(100, 0)
			$.in(1, function () {
				w.pop('catbits=0');
				b.cat(0)
			})
			w.D(400, 300, 'b', 80).cat(2).grp(-3)
			w.D(400, 300, 'g', 60, 90, 0, 40, 10).grp(-3)
			w.D(300, 300, 'r', 80).bit(2, [1, 4])
			w.D(300, 300, 'y', 60, 90, 0, 40, 10).bit(8, [1, 2])
		}
		BIT = function () {
			W(2)
			w.D(300, 300, 'r', 80).bit(2, [1, 4])
			w.D(400, 30, 'b', 80).bit(2, [1, 4])
			w.D(300, 300, 'y', 60, 90).bit(4, [1, 2, 4])
			w.D(400, 300, 'g', 60, 90).bit(4, [1, 2, 4])
			w.pop('cirs are ghosts to each other')
		}
		FIL = function () {
			W(0).Y()
			w.D(700, 200, 'o', [
				[40],
				b2d.cir(5).bit(1, 2), //cat is 1, but will only collide with 2's
				b2d.cir(10, 100, 100, '-'),
				['w', b2d.cir(10, 100, -100)],
				b2d.rec(10, 300, '-'), //sets as sensor
				['b', b2d.rec(300, 10)],
				['w', [100, 0], [150, -100], [200, 20]],
				[[200, 0], [250, -100], [300, 20], 'arr'], ['p', 50]
			])
			b = w.D(300, 400, 'r', [
				b2d.rec(200, 100),
				['g', b2d.cir(40, 100, 100).K('excited'), 'oook'],
				[5, 100, 200, 0, 'orgasmic excited']
			])
			/*
			 f = b.f().K('happy')  //apparently b.fixt is LIFO
			 f.W().dot('b')
			 $l('f is f: ' + f.is(f))
			 $l('f is happy: ' + f.is('happy'))
			 f.N().K('excited')// bug: k not getting communicated above (in the b def func)
			 $l('f.N is excited: ' + f.N().is('excited'))
			 $l('f is orgasmic: ' + f.is('orgasmic'))
			 */
		}
	};
	bits()
}