BIG = function () {
	w = b2d.W({g: 300, w: 0})
	w.platform = function (x, y, W, H) {//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		pd = b2.polyDef(W, H).r(0)
		pd.restitution = .3
		return this.A(
				b2.staticDef(x, y), pd
		).K('platform')
	}
	w.platform(800, 500, 600, 100)
	w.platform(300, 530, 100, 100)
	w.platform(1400, 300, 600, 100)
	w.platform(1800, 500, 1000, 100)
	w.platform(1900, 200, 600, 100)
	//w.footListener()
	//w.startKilling()
	p = w.addMe().XY(300, -300).angDamp(10000)
	cjs.tick(function () {
		p.rot(0)
		w.left(4)
		if (p.Y() > 2000) {
			p.XY(300, -300)
		} //comeback
		if (b2d.onGround) {
			if (cjs.Keys.up) {
				p.jumping(180, 30)
			} else {
				p.byVel(40)
			}
		}
		else {
			p.byImp(10)
		}
	})
	w.box(800, 100).bindSprite('guy')
}
w.platform2 = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.S(x, y, W, H).r(0).K('platform')
}
w.plat = w.platform = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.body(b2d.stat(x, y), b2d.poly(W, H).r(.3)
	).K('plat platform')
}
JUMPER = function () {
	w = b2d.W({g: 300})
	// cliff jump... feet dont cover entire bottom of player
	w.platform(800, 300, 100)
	w.platform(260, 240, 60)
	w.platform(550, 250, 100)
	w.platform(1350, 550, 100)
	w.platform(300, 200, 100)
	w.platform(300, 500, 60, 30)
	w.platform(150, 400, 60, 30)
	p = w.jumper()
	cjs.tick(function () {
		$l(p.onGround)
	})
}
BOXPACK = BXP = function () {
	w = b2d.mW({
		//debug:false
	})
	w.platform(500, 300, 200, 200)
	pack = function (anim) {
		anim = anim || 'f1'
		var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
		spr.gotoAndPlay(anim)
		return w.ball(Math.random() * 1000, Math.random() * 500, 40).bindSprite2(spr)
	}
	b = pack('f1')
	anims = _.keys(Pack.animations)
	//  _.each(  _.first( , 4) ,   function(anim){pack(anim)})
	// cjs.tick(function(){ b.rot(0) })
	change = function () {
		anim = anims[_.random(23)]
		$l('changed to ' + anim)
		b.sprite.gotoAndPlay(anim)
	}
	w.begin(function (cx) {
		if (cx.with('platform')) {
			change()
		}
	})
}
PACKE4 = PK4 = function () {
	w = b2d.mW({
		//debug:false,
		grav: 0
	})
	p = w.player('thrust')
	var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
	spr.p('e4')
	b = w.bumper(
			Math.random() * 1000,
			Math.random() * 500, 45
	).bindSprite2(spr)
	// cjs.tick(function(){ b.rot(0) })
	w.begin(function (cx) {
		if (cx.with('bumper')) {
			p.I(1000, 1000)
		}
	})
}
}
COLL = function () {
	W().platform(400, 500, 400, 20).K('platform')
	w.roof.kill()
	w.ba(440, 100, 50).K('dot')
	w.ba(440, 200, 20).K('ball')
	w.cl('ball', 'platform', function () {
		w.box(20, 20, 20, 20).K('box')
	})
	w.cl('box', 'platform', function () {
		w.ba(300, 20).K('ball')
	})
	w.cl('dot', function (cx) {
		collX = cx.b().X()
		collY = cx.b().Y()
		w.stage.dot('r', collX, collY)
	})
	// w.collide('box', 'platform')
	//  cjs.tick(function(){if(w.flagged('boxplatform')){ $l('boxHit');w.box(300,40,20,20)}})
}
ONEWAYPLATFORM = function () {
	w = b2d.W()
	//  Both PreSolve and PostSolve give you a b2Contact pointer,
	// so we have access to the same points and normal information we just looked at for BeginContact.
	// PreSolve gives us a chance to change the characteristics of the contact before the collision response is calculated,
	// or even to cancel the response altogether,
	// and from PostSolve we can find out what the collision response was.
	//     Here are the alterations you can make to the contact in PreSolve:
	//  c.SetFriction( friction)  // persists for duration of contact
	//  c.SetRestitution(  restitution)   //persists for duration of contact
	//  c.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
	// will disable the contact,
	// meaning that the collision response that normally would have been applied will be skipped.
	// You can use this to temporarily allow objects to pass through each other
	// . A classic example of this is the one-way wall or platform,
	// where the player is able to pass through an otherwise solid object,
	// depending on various criteria that can only be checked at runtime,
	// like the position of the player and which direction direction they are heading, etc.
	// It's important to note that the contact will revert back to being enabled in the next time step,
	// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
	pf = w.platform(300, 300, 500, 40)
	p = w.player('symmetrical').fixRot()
	w.ball()
	w.pre(function (cx) {
		if (cx.with('platform', 'player')) {
			if (p.Y() > pf.Y()) {
				cx.SetEnabled(false)
			}
		}
	})
}
JUMPERGRAPHICS = function () {
	w = b2d.W({g: 300})
	w.platform(800, 300, 100)
	w.platform(260, 240, 40)
	w.platform(550, 250, 100)
	w.platform(1350, 550, 100)
	w.platform(300, 200, 100).bindSprite('guy', [.4, 1.2])
	w.platform(300, 500, 60, 30).bindSprite('guy', [.4, 1.2])
	w.platform(150, 400, 60, 30).bindSprite('guy')
	p = w.jumper()//w.player('slidey').angDamp(10000)
	w.s.bm('sun', function (sun) {
		cjs.tick(function () {
			sun.X(450 - p.X())
		})
	})
}