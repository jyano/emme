f.spritePush = function (j) {
	this.sprites = this.sprites || []
	this.sprites.push(j)
	return this
}
f.sp = function () {
	return this.sprites[0]
}
 

f.cSp = function (o) {
	var f = this, b = f.B(), w = b.W()
	var cir = w.g.h().cir(o)
	f.bS(cir)
	f.g = cir
	return f
}



$transform = $bindOnce = function (sp, b, o) {
	sp.XY(b.X() + o.x, b.Y() + o.y)
	.rt(b.rt() + o.rt)
}


$bindTransform = function (sp, b, o) {
	$t(function () {
		$transform(sp, b, o)
	})
	return sp
}

f.ctDob = f.ctSprite = f.ctSp = function (sp) {
	var f = this

	sp.XY(f.pos().x, f.pos().y).rC()
	
	f.bS(  $Ct().A(sp)  )

	return this
}





f.bindLoaderSprite = function (j) {//= f.bSQ 
	var f = this
	
	Q(function () {

		f.ctSp(Q.b(j))
	
	})
	
	return f
}




f.bS = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o, sp;

	
	f.sprites = f.sprites || []
	
	
	if (S(g.f)) {
	
		return f.bindLoaderSprite(g.f)
	}
	
	o = cjs.iDO(g.f) ? {j: g.f, rt: g.s, x: g.t, y: g.fo, o: g.fi} : g.f
	
	var sp = o.j.al(N(o.al, 1))
	
	
	sp = $bindTransform(sp, b, $df.bsDF(o))
	
	return f.spritesPush(sp.a2(w.gx))

}



//higher level.. can handle obs AND !!!  Q-strings
function more(){
	f.bindSprite = f.gx = f.spr = f.bindSprite2 = function (obj, startingRotation, x, y, alpha) {
		var g = G(arguments)
		gg = g
		alpha = N(alpha) ? alpha : 1
		obj.opacity(alpha)
		//takes any display object.  right now, just used for shapes
		//because bindSprite fetches the bm's by string.
		//but when i set up preloader, then i would use this i suppose :)
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var f = this,
				body = this.body(),
				stage = body.wor().s
		startingRotation = N(startingRotation) ? startingRotation : 0
		//f.sprite = obj
		//f.sprite.a2(stage)
		o = obj.a2(stage)
		f.sprites = f.sprites || []
		f.sprites.push(obj)
		//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
		cjs.tick(function () {//if(!f.sprite){return}
			obj.XY(body.X() + (x || 0), body.Y() + (y || 0))
			obj.rotation = body.rot() + startingRotation
		})
		return this
	}
	f.bS = f.bindSprite = function (j, a, x, y, al) {//f.gx= f.spr= f.bindSprite2=
		var f = this, b = f.B(), s = b.wor().s, g = G(arguments), o
		f.sprites = f.sprites || []
		o = cjs.isDisplayOb(j) ? {j: j, a: a, x: x, y: y, o: al}
				: O(j) ? j : {}
		o.x = _.tN(o.x)
		o.y = _.tN(o.y)
		o.a = _.tN(o.a)
		o.o = _.tN(o.o, 1)
		f.sprites.push(o.j.op(o.o).a2(s))
		//takes any display object.  right now, just used for shapes//because bindSprite fetches the bm's by string. //but when i set up preloader, then i would use this i suppose :)                                                 //f.sprite = obj  //f.sprite.a2(stage)                                                 //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
		cjs.tick(function () {
			o.j.XY(b.X() + o.x, b.Y() + o.y)
					.rot(b.rot() + o.a)
		})                                    //if(!f.sprite){return}
		return f
	}
}