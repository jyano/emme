ld.get = ld.g = ld.gR = ld.i = ld.r = function (i) {
	i = this.getResult(i);
	i.w = i.width;
	i.h = i.height;
	return i
}
ld.done = ld.rdy = ld.c = ld.complete = function (fn) {
	if (F(fn)) {
		this.on("complete", fn)
	}
	return this
}
ld.mf = function (mf) {
	// q.mf protosig: 
	// (1) 'me',..
	// (2)  {src:'me', id:'him'},.. 
	// (3) [ {src:*, id:*}, 'me',.. ]		
	mf = $its(A(mf) ? mf : G(arguments))
	this.loadManifest(mf)
	return this
}
_$Ld = function () {
	return new cjs.LoadQueue(true)
}
$Ld = $ld = cjs.lQ = Q = function () {


//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
	var g = G(arguments), o
	o = g.F_ ? {done: g.f, file: g.s} :
			(g.A_ || g.S_) ?
			{mf: g.f, done: g.s, file: g.t} :
					g.f
	o.mf = o.mf || _MF
	var ld = _$Ld()
	if (o.file) {
		ld.file(o.file)
	}
	if (o.done) {
		ld.done(function (e) {
			//o.done(function(i) {return ld.i(i)}, e)
			o.done(ld)
		})
	}
	if (o.mf) {
		ld.mf(o.mf)
	}
	Q = ld
	Q.ran = true
	return Q
}
Q.ran = false
ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
	var b, g = G(arguments)
	b = Q.bm(name)
			.XY(N(x, 0), N(y, 0))
			.sXY(N(sX, 1), N(sY, sX || 1))
			.rt(N(rt, 0))
	if (!g.n) {
		b.rC()
	}
	if (g.p) {
		b.drag()
	}
	this.A(b);
	return b
}
Q1 = function (imgs, fn) {
	var q = cjs.lq()
	mf = []
	_.e(imgs, function (v) {
		mf.push({
			src: cjs.src(v),
			id: v
		})
	})
	q.manifest(mf)
	q.complete(function () {
		fn(q)
	})
}
ld.jQuery = ld.$ = function (i) {
	return $(this.i(i))
}
ld.dfF = cjs.handleFileLoad = function (e) {
	alert('q.dfF = cjs.handleFileLoad in loaderProto.js')
	images = window['images'] || {}
	if (e.item.type == "image") {
		images[e.item.id] = e.result
	}
}
ld.file = ld.f = ld.l = ld.fl = ld.fileload = function (fn) {
	this.on("fileload", fn)
	return this
}
ld.bm = function (i, ct, x, y) {
	var ld = this
	var bm = $Bm(ld.get(i))
	if (N(ct)) {
		bm.XY(ct, x)
	}
	else if (O(ct)) {
		bm.a2(ct, x, y)
	}
	return bm
}
function manifest() {
	$Mf = function (mf, fn) {
		cjs.manifest = function (fn) {
			_manifest_ = [{
				id: "chicks", src: "/chicks.png"
			},
				{id: "me", src: "/me.png"},
				{id: "guy", src: "/guy.png"},
				{id: "sun", src: "/sun.png"}]
			var q = cjs.loadQueue()
			q.complete(function () {
				fn(function (getResult) {
					return q.getResult(getResult)
				})
			})
					.manifest(_manifest_)
		}
		return $Ld(fn).mf(mf)
	}
	_mf = [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}]
	_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
	_$it = function (i) {
		return {src: _.src(i), id: i}
	}
	$it = function (i) {
		return S(i) ? _$it(i) : i
	}
	$its = function (its) {
		return _.m(A(its) ? its : arguments, $it)
	}
}
manifest()
QU1 = function () {
	$St()
	Q(["me", {id: "guy", src: "/guy.png"}], function (q) {
		st.A(q.bm("me"))
		st.A(q.bm("guy", 300, 300))
	})
}
QU0 = function () {
	Q(['guy', 'me'], function () {
		$.A(Q.get('me'))
	})
}
QU = MF = MANIFEST = function () {
	Q(['me', 'guy'], function (q) {
		$St().A(q.bm('me'))
		st.A(q.bm('guy').dg())
	})
}
QU2 = function () {
	Q([{id: "myImage", src: "/me.png"}
	], function (q) {
		q.bm("myImage", $St())
	})
}
QU3 = function () {
	Q([$it("me"), $it({id: "guy", src: "/guy.png"})], function (q) {
		q.bm("me", $St());
		q.bm("guy", st)
	})
}
IT = QU4 = function () {
	Q(function () {
		Q.bm("me", $St());
		Q.bm("guy", st, 300, 300)
	}).mf("me", guyIt)
}
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
function later() {
	cjs.mf = cjs.manifest = function () {
		var g = G(arguments)
		var mf = []
		_.e(g, function (i) {
			mf.push($it(i))
		})
		return mf
	}
	cjs.handleFileLoad = function (e) {
		if (e.item.type == "image") {
			images[e.item.id] = e.result
		}
	}
	cjs.man = cjs.makeMan = cjs.makeManifest = function (a) {
		alert('manifest')
		return cjs.mf.apply(null, _.m(a.images, function (i) {
			return _.crs(i)
		}))
	}
}
guyIt = {id: "guy", src: "/guy.png"}
myIt = {id: "myImage", src: "/me.png"}
mf1 = [myIt, guyIt];
mf2 = [$it("me"), $it(guyIt)]
mf3 = ["me", guyIt];
mf4 = [myIt, guyIt];
mf5 = ['guy', 'me']
$.me = function (name, fn) {
	if (F(name)) {
		return $.i('me', name)
	}
	window[name] = function () {
		$.i('me', fn)
	}
}
meFunction()
function meFunction() {
	$.me('ME', function (me) {
		gx = $St().Gx()
				.SS().F().dc(200, 200, 200).S().dc(400, 400, 200)
				.S()._bf(me).dc(400, 400, 200)
	})
}
MATRIXMUG = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	$.div('b', 50, 50).A()
	$.div('blue', 50, 50)
	stage = s = $St(1600, 1000)
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('mouseenter', function () {
		$('body').C($r())
	})
	stage.A(container = c = new createjs.Container())
	container.bm('me', function (bm) {
		//b.sxy(.2).xy(100,80)
		//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
	})
	//make a container
	stage.ct(function (c, s) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
		c.bm('me', function (b) {
			b.sXY(.4).XY(100, 180)
			//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
		})
		c.bm('me', function (b) {
			b.sXY(1.5)
			// b.o('$',fL('big'))  //on click, log('big')
		})
		//on click, log('con')
		//c.o('$',  fL('con'))
	})
	stage.ct(function (c) {
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
		c.mug(
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
	stage.ct(function (c, s) {
		c.x(700)
		c.mug(function (b) {
			b.sxy(.8).xy(200, 80)
		})
		c.mug(function (b) {
			b.sxy(.8).xy(100, 280)
		})
		c.mug(function (b) {
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
	stage.ct(function (container, stage) {
		container.X(1400)
		container.bm('me', function (bm) {
			
			//make the little me slide the entire container
			//it acts as a handle! (for its container)
			lit = bm.sXY(.2).XY(100, 80)
			SL(bm, container)
			container.bm('me', function (bm) {
//big me will scale the little me
				big = bm.sXY(2).XY(100, 180)
				SC(bm, lit)
				container.bm('me', function (bm) {
					bm.sXY(.6).XY(150, 180)
					SL(bm)
					RT(bm, big)
				})
			})
		})
//guy slides stage
		container.bm('guy', function (bm) {
			bm.sXY(.4).XY(100, 180)
			createjs.bindSlide(bm, stage)
		})
	})
	stage = s = cjs.stage(1600, 1000).tick().A()
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('e', co)
	//make a container
	stage.ct(function (c, s) {
		
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
			bm.on('click', function () {
				$l('mid')
			}, '-')  //on click, log('mid'), and stop prop
		})
		c.bm('me', function (bm) {
			bm.sXY(1.5)
			bm.on('click', function () {
				$l('big')
			})  //on click, log('big')
		})
		//on click, log('con')
		c.on('click', function () {
			$l('con')
		})
	})
	stage.ct(function (c) {
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
		c.mug(
				function (b) {
					b.sXY(.8).XY(340, 180)
				})
		//this shows over/out vs rollover/rollout
		//over/out get retriggered when switching between connected sprites
		//rollover/rollout does not because it is still touching 'something'
		c.on('mouseover', function () {
			c.X(10, '+');
			$l('v: ' + vn++)
		})
		c.on('rollover', function () {
			c.X(20, '-');
			$l('rv: ' + rvn++)
		})
		c.on('mouseout', function () {
			c.Y(10, '+');
			$l('o: ' + on++)
		})
		c.on('rollout', function () {
			c.Y(20, '-');
			$l('ro: ' + ron++)
		})
	}).MV(40)
	stage.container(function (container, stage) {
		container.X(700)
		container.mug(function (bm) {
			bm.sXY(.8).XY(200, 80)
		})
		container.mug(function (bm) {
			bm.sXY(.8).XY(100, 280)
		})
		container.mug(function (bm) {
			bm.sXY(.8).XY(340, 180)
		})
		//this example shows which sprites are acted upon with over/rollover
		//over only affects one
		//rollover affects ALL
		//if you enter a sprite from outside, they all grow (via rollover),
		//and the one sprite grows double (via over)
		container.on('mouseover', function () {
			$l('mouseover')
			this.sXY(.01, '+')
		})
		container.on('rollover', function () {
			$l('rv')
			this.sXY(.01, '+')
		})
		container.on('mouseout', function () {
		})
		container.on('rollout', function () {
		})
		// in summary,
		// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
		// BUT, they will all recieve events separately
	}).MV(40) //??? mouse events? speed for some mouse checking thing
	stage.container(function (container, stage) {
		container.x = 1400
		container.bm('me', function (bm) {
			
			
			//make the little me slide the entire container
			//it acts as a handle! (for its container)
			lit = bm.sXY(.2).XY(100, 80)
			SL(bm, container)
			container.bm('me', function (bm) {
//big me will scale the little me
				big = bm.sXY(2).XY(100, 180)
				SC(bm, lit)
				container.bm('me', function (bm) {
					bm.sXY(.6).XY(150, 180)
					SL(bm)
					RT(bm, big)
				})
			})
		})
//guy slides stage
		container.bm('guy', function (bm) {
			bm.sXY(.4).XY(100, 180)
			SL(bm, stage)
		})
	})
}