sp = cjs.Sp.prototype
 
sp.adv = p.skip = sp.av = sp.N = function (num) {
	this.advance(num);
	return this
}
sp.play = sp.p = function (an) {
	var sp = this
	/*
	 sp.play = sp.p = function (a, b) {
	 var g = G(arguments),
	 a = g[0],
	 b = g[1],
	 l = g.f,
	 n
	 if (U(a)) {
	 sp.ob.play();
	 return o
	 }
	 if (U(b)) {
	 if (g.n) {
	 sp.next(a, false)
	 }
	 if (g.p) {
	 sp.next(a, a)
	 }
	 sp.ob.gotoAndPlay(a)
	 return o
	 }
	 _.each(g.r, function (a) {
	 sp.next(l, a)
	 l = a
	 })
	 sp.next(g.l, g.isPlaying ? false : g.f)
	 sp.play(g.f)
	 }
	 */
	if (U(an)) {
		sp.play()
	}
	else {
		sp.gotoAndPlay(an)
	}
	return sp
}
sp.stop = sp.s = sp.P = function (an) {
	var sp = this
	if (U(an)) {
		sp.stop()
	}
	else {
		sp.gotoAndStop(an)
	}
	return sp
}
sp.playing = sp.iPl = sp.isPlaying = sp.iP = function () {
	return !this.paused
}
sp.iP = function () {
	return this.paused
}
sp.numFr = sp.numFrames = sp.nF = function () {
	return sp.sS.getNumFrames()
}
sp.fr = sp.frame = sp.currentFrame = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
	var sp = this, g = G(arguments)
	/*
	 var args = G(arguments), num = args[0]
	 if (args.p) {
	 return sp.frame(
	 sp.frame() + ( N(num) ? num : 1 )
	 )
	 }
	 if (args.n) {
	 return sp.frame(
	 sp.frame() - ( N(num) ? num : 1 )
	 )
	 }
	 if (U(num)) {
	 return sp.ob.currentFrame
	 }
	 $l(num)
	 return sp.isPlaying() ? sp.play(num) : sp.stop(num)
	 */
	if (g.u) {
		return sp.currentFrame
	}
	sp.currentFrame = g.f
	return sp
}
sp.an = sp.anim = sp.cA = sp.ca = sp.a = sp.cA = sp.cAn = function (a) {
	if (a) {
		return sp.isPlaying() ?
				sp.play(a) :
				sp.stop(a)
	}
	return this.currentAnimation
}
sp.anFr = sp.cAnFr = sp.cAF = sp.caf = function (fr) {
	if (U(fr)) {
		return this.currentAnimationFrame
	}
	this.currentAnimationFrame = fr
	return this
}
sp.getAn = sp.gAn = sp.getAnim = sp.ans = sp.as = sp.gA = function (a) {
	return U(a) ? sp.spriteSheet.getAnimations() :
			sp.spriteSheet.getAnimation(a)
}
sp.rate = sp.r = sp.fR = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
// events
sp.load = sp.ready = sp.done = sp.complete = sp.oC = sp.cm = function (a) {
	sp.ob.on('complete', a)
}
sp.end = sp.onEnd = sp.e = sp.oAe = sp.ae = function (fn) {
	fn = fn || function () {
		n = N(window['n'], 0);
		$l('frame! ' + n++)
	}
	this.on('animationend', fn)
	return this
}
//  animNext:  set/get NEXT animation on an animation
sp._anNext = sp._animNext = function (anim, nx) {
	var sp = this
	var anim = sp.getAnim(anim)
	if (anim) {
		if (U(nx)) {
			return anim.next
		}
		anim.next = nx
	}
	return sp
}
sp.anNoNext = function (an) {
	return this._anNext(an, false)
}
sp.anSelfNext = function (an) {
	var sp = this
	return sp._anNext(an, sp.getAn(an))
}
sp.anNext = sp.animNext = sp.next = sp.gAN = function () {
	var sp = this, g = G(arguments)
	//1) can just pass in the anim string
	//2) can pass anim string and what to set its 'next' property to
	return U(g.s) ? (g.p ? sp.anSelfNext(g.f) : g.n ? sp.anNoNext(g.f) : sp.anNext(g.f)) :
			g.p ? sp._anNext(g.f, g.s)._anNext(sp._anNext(g.f)) : sp._anNext(g.f, g.s)
}
 
sp.adv = p.skip = sp.av = sp.N = function (num) {
	this.advance(num);
	return this
}
sp.play = sp.p = function (an) {
	var sp = this
	/*
	 sp.play = sp.p = function (a, b) {
	 var g = G(arguments),
	 a = g[0],
	 b = g[1],
	 l = g.f,
	 n
	 if (U(a)) {
	 sp.ob.play();
	 return o
	 }
	 if (U(b)) {
	 if (g.n) {
	 sp.next(a, false)
	 }
	 if (g.p) {
	 sp.next(a, a)
	 }
	 sp.ob.gotoAndPlay(a)
	 return o
	 }
	 _.each(g.r, function (a) {
	 sp.next(l, a)
	 l = a
	 })
	 sp.next(g.l, g.isPlaying ? false : g.f)
	 sp.play(g.f)
	 }
	 */
	if (U(an)) {
		sp.play()
	}
	else {
		sp.gotoAndPlay(an)
	}
	return sp
}
sp.stop = sp.s = sp.P = function (an) {
	var sp = this
	if (U(an)) {
		sp.stop()
	}
	else {
		sp.gotoAndStop(an)
	}
	return sp
}
sp.playing = sp.iPl = sp.isPlaying = sp.iP = function () {
	return !this.paused
}
sp.iP = function () {
	return this.paused
}
sp.numFr = sp.numFrames = sp.nF = function () {
	return sp.sS.getNumFrames()
}
sp.fr = sp.frame = sp.currentFrame = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
	var sp = this, g = G(arguments)
	/*
	 var args = G(arguments), num = args[0]
	 if (args.p) {
	 return sp.frame(
	 sp.frame() + ( N(num) ? num : 1 )
	 )
	 }
	 if (args.n) {
	 return sp.frame(
	 sp.frame() - ( N(num) ? num : 1 )
	 )
	 }
	 if (U(num)) {
	 return sp.ob.currentFrame
	 }
	 $l(num)
	 return sp.isPlaying() ? sp.play(num) : sp.stop(num)
	 */
	if (g.u) {
		return sp.currentFrame
	}
	sp.currentFrame = g.f
	return sp
}
sp.an = sp.anim = sp.cA = sp.ca = sp.a = sp.cA = sp.cAn = function (a) {
	if (a) {
		return sp.isPlaying() ?
				sp.play(a) :
				sp.stop(a)
	}
	return this.currentAnimation
}
sp.anFr = sp.cAnFr = sp.cAF = sp.caf = function (fr) {
	if (U(fr)) {
		return this.currentAnimationFrame
	}
	this.currentAnimationFrame = fr
	return this
}
sp.getAn = sp.gAn = sp.getAnim = sp.ans = sp.as = sp.gA = function (a) {
	return U(a) ? sp.spriteSheet.getAnimations() :
			sp.spriteSheet.getAnimation(a)
}
sp.rate = sp.r = sp.fR = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
// events
sp.load = sp.ready = sp.done = sp.complete = sp.oC = sp.cm = function (a) {
	sp.ob.on('complete', a)
}
sp.end = sp.onEnd = sp.e = sp.oAe = sp.ae = function (fn) {
	fn = fn || function () {
		n = N(window['n'], 0);
		$l('frame! ' + n++)
	}
	this.on('animationend', fn)
	return this
}
//  animNext:  set/get NEXT animation on an animation
sp._anNext = sp._animNext = function (anim, nx) {
	var sp = this
	var anim = sp.getAnim(anim)
	if (anim) {
		if (U(nx)) {
			return anim.next
		}
		anim.next = nx
	}
	return sp
}
sp.anNoNext = function (an) {
	return this._anNext(an, false)
}
sp.anSelfNext = function (an) {
	var sp = this
	return sp._anNext(an, sp.getAn(an))
}
sp.anNext = sp.animNext = sp.next = sp.gAN = function () {
	var sp = this, g = G(arguments)
	//1) can just pass in the anim string
	//2) can pass anim string and what to set its 'next' property to
	return U(g.s) ? (g.p ? sp.anSelfNext(g.f) : g.n ? sp.anNoNext(g.f) : sp.anNext(g.f)) :
			g.p ? sp._anNext(g.f, g.s)._anNext(sp._anNext(g.f)) : sp._anNext(g.f, g.s)
}
//https://www.youtube.com/watch?v=HaJ615V6qLk
sp.numFr = sp.numFrames = sp.nF = function () {
	return sp.sS.getNumFrames()
}
sp.fr = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
	var sp = this, g = G(arguments)
	/*
	 var args = G(arguments), num = args[0]
	 if (args.p) {
	 return sp.frame(
	 sp.frame() + ( N(num) ? num : 1 )
	 )
	 }
	 if (args.n) {
	 return sp.frame(
	 sp.frame() - ( N(num) ? num : 1 )
	 )
	 }
	 if (U(num)) {
	 return sp.ob.currentFrame
	 }
	 $l(num)
	 return sp.isPlaying() ? sp.play(num) : sp.stop(num)
	 */
	if (g.u) {
		return sp.currentFrame
	}
	sp.currentFrame = g.f
	return sp
	//= sp.frame = sp.currentFrame
}
sp.an = sp.anim = sp.cA = sp.ca = sp.a = sp.cA = sp.cAn = function (a) {
	if (a) {
		return sp.isPlaying() ?
				sp.play(a) :
				sp.stop(a)
	}
	return this.currentAnimation
}
sp.anFr = sp.cAnFr = sp.cAF = sp.caf = function (fr) {
	if (U(fr)) {
		return this.currentAnimationFrame
	}
	this.currentAnimationFrame = fr
	return this
}
sp.getAn = sp.gAn = sp.getAnim = sp.ans = sp.as = sp.gA = function (a) {
	return U(a) ? sp.spriteSheet.getAnimations() :
			sp.spriteSheet.getAnimation(a)
}
sp.rate = sp.r = sp.fR = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
// events
sp.load = sp.ready = sp.done = sp.complete = sp.oC = sp.cm = function (a) {
	sp.ob.on('complete', a)
}
sp.adv = p.skip = sp.av = sp.N = function (num) {
	this.advance(num);
	return this
}
sp.numFr = sp.numFrames = sp.nF = function () {
	return sp.sS.getNumFrames()
}
sp.fr = sp.frame = sp.currentFrame = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
	var sp = this, g = G(arguments)
	/*
	 var args = G(arguments), num = args[0]
	 if (args.p) {
	 return sp.frame(
	 sp.frame() + ( N(num) ? num : 1 )
	 )
	 }
	 if (args.n) {
	 return sp.frame(
	 sp.frame() - ( N(num) ? num : 1 )
	 )
	 }
	 if (U(num)) {
	 return sp.ob.currentFrame
	 }
	 $l(num)
	 return sp.isPlaying() ? sp.play(num) : sp.stop(num)
	 */
	if (g.u) {
		return sp.currentFrame
	}
	sp.currentFrame = g.f
	return sp
}
sp.adv = p.skip = sp.av = sp.N = function (num) {
	this.advance(num);
	return this
}
sp.an = sp.anim = sp.cA = sp.ca = sp.a = sp.cA = sp.cAn = function (a) {
	if (a) {
		return sp.isPlaying() ?
				sp.play(a) :
				sp.stop(a)
	}
	return this.currentAnimation
}
sp.anFr = sp.cAnFr = sp.cAF = sp.caf = function (fr) {
	if (U(fr)) {
		return this.currentAnimationFrame
	}
	this.currentAnimationFrame = fr
	return this
}
sp.getAn = sp.gAn = sp.getAnim = sp.ans = sp.as = sp.gA = function (a) {
	return U(a) ? sp.spriteSheet.getAnimations() :
			sp.spriteSheet.getAnimation(a)
}
sp.rate = sp.r = sp.fR = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
// events
sp.load = sp.ready = sp.done = sp.complete = sp.oC = sp.cm = function (a) {
	sp.ob.on('complete', a)
}
function playing() {
	sp.play = sp.p = function (an) {
		var sp = this
		/*
		 sp.play = sp.p = function (a, b) {
		 var g = G(arguments),
		 a = g[0],
		 b = g[1],
		 l = g.f,
		 n
		 if (U(a)) {
		 sp.ob.play();
		 return o
		 }
		 if (U(b)) {
		 if (g.n) {
		 sp.next(a, false)
		 }
		 if (g.p) {
		 sp.next(a, a)
		 }
		 sp.ob.gotoAndPlay(a)
		 return o
		 }
		 _.each(g.r, function (a) {
		 sp.next(l, a)
		 l = a
		 })
		 sp.next(g.l, g.isPlaying ? false : g.f)
		 sp.play(g.f)
		 }
		 */
		if (U(an)) {
			sp.play()
		}
		else {
			sp.gotoAndPlay(an)
		}
		return sp
	}
	sp.stop = sp.s = sp.P = function (an) {
		var sp = this
		if (U(an)) {
			sp.stop()
		}
		else {
			sp.gotoAndStop(an)
		}
		return sp
	}
	sp.playing = sp.iPl = sp.isPlaying = sp.iP = function () {
		return !this.paused
	}
	sp.iP = function () {
		return this.paused
	}
	sp.play = sp.p = function (an) {
		var sp = this
		/*
		 sp.play = sp.p = function (a, b) {
		 var g = G(arguments),
		 a = g[0],
		 b = g[1],
		 l = g.f,
		 n
		 if (U(a)) {
		 sp.ob.play();
		 return o
		 }
		 if (U(b)) {
		 if (g.n) {
		 sp.next(a, false)
		 }
		 if (g.p) {
		 sp.next(a, a)
		 }
		 sp.ob.gotoAndPlay(a)
		 return o
		 }
		 _.each(g.r, function (a) {
		 sp.next(l, a)
		 l = a
		 })
		 sp.next(g.l, g.isPlaying ? false : g.f)
		 sp.play(g.f)
		 }
		 */
		if (U(an)) {
			sp.play()
		}
		else {
			sp.gotoAndPlay(an)
		}
		return sp
	}
	sp.stop = sp.s = sp.P = function (an) {
		var sp = this
		if (U(an)) {
			sp.stop()
		}
		else {
			sp.gotoAndStop(an)
		}
		return sp
	}
	sp.playing = sp.iPl = sp.isPlaying = sp.iP = function () {
		return !this.paused
	}
	sp.iP = function () {
		return this.paused
	}
}
function next() {
	sp.end = sp.onEnd = sp.e = sp.oAe = sp.ae = function (fn) {
		fn = fn || function () {
			n = N(window['n'], 0);
			$l('frame! ' + n++)
		}
		this.on('animationend', fn)
		return this
	}
//  animNext:  set/get NEXT animation on an animation
	sp._anNext = sp._animNext = function (anim, nx) {
		var sp = this
		var anim = sp.getAnim(anim)
		if (anim) {
			if (U(nx)) {
				return anim.next
			}
			anim.next = nx
		}
		return sp
	}
	sp.anNoNext = function (an) {
		return this._anNext(an, false)
	}
	sp.anSelfNext = function (an) {
		var sp = this
		return sp._anNext(an, sp.getAn(an))
	}
	sp.anNext = sp.animNext = sp.next = sp.gAN = function () {
		var sp = this, g = G(arguments)
		//1) can just pass in the anim string
		//2) can pass anim string and what to set its 'next' property to
		return U(g.s) ? (g.p ? sp.anSelfNext(g.f) : g.n ? sp.anNoNext(g.f) : sp.anNext(g.f)) :
				g.p ? sp._anNext(g.f, g.s)._anNext(sp._anNext(g.f)) : sp._anNext(g.f, g.s)
	}
	sp.end = sp.onEnd = sp.e = sp.oAe = sp.ae = function (fn) {
		fn = fn || function () {
			n = N(window['n'], 0);
			$l('frame! ' + n++)
		}
		this.on('animationend', fn)
		return this
	}
//  animNext:  set/get NEXT animation on an animation
	sp._anNext = sp._animNext = function (anim, nx) {
		var sp = this
		var anim = sp.getAnim(anim)
		if (anim) {
			if (U(nx)) {
				return anim.next
			}
			anim.next = nx
		}
		return sp
	}
	sp.anNoNext = function (an) {
		return this._anNext(an, false)
	}
	sp.anSelfNext = function (an) {
		var sp = this
		return sp._anNext(an, sp.getAn(an))
	}
	sp.anNext = sp.animNext = sp.next = sp.gAN = function () {
		var sp = this, g = G(arguments)
		//1) can just pass in the anim string
		//2) can pass anim string and what to set its 'next' property to
		return U(g.s) ? (g.p ? sp.anSelfNext(g.f) : g.n ? sp.anNoNext(g.f) : sp.anNext(g.f)) :
				g.p ? sp._anNext(g.f, g.s)._anNext(sp._anNext(g.f)) : sp._anNext(g.f, g.s)
	}
//https://www.youtube.com/watch?v=HaJ615V6qLk
}
playing()
next()
sp = cjs.Sp.prototype
sp.adv = p.skip = sp.av = sp.N = function (num) {
	this.advance(num);
	return this
}
sp.play = sp.p = function (an) {
	var sp = this
	/*
	 sp.play = sp.p = function (a, b) {
	 var g = G(arguments),
	 a = g[0],
	 b = g[1],
	 l = g.f,
	 n
	 if (U(a)) {
	 sp.ob.play();
	 return o
	 }
	 if (U(b)) {
	 if (g.n) {
	 sp.next(a, false)
	 }
	 if (g.p) {
	 sp.next(a, a)
	 }
	 sp.ob.gotoAndPlay(a)
	 return o
	 }
	 _.each(g.r, function (a) {
	 sp.next(l, a)
	 l = a
	 })
	 sp.next(g.l, g.isPlaying ? false : g.f)
	 sp.play(g.f)
	 }
	 */
	if (U(an)) {
		sp.play()
	}
	else {
		sp.gotoAndPlay(an)
	}
	return sp
}
sp.stop = sp.s = sp.P = function (an) {
	var sp = this
	if (U(an)) {
		sp.stop()
	}
	else {
		sp.gotoAndStop(an)
	}
	return sp
}
sp.playing = sp.iPl = sp.isPlaying = sp.iP = function () {
	return !this.paused
}
sp.iP = function () {
	return this.paused
}
sp.numFr = sp.numFrames = sp.nF = function () {
	return sp.sS.getNumFrames()
}
sp.fr = sp.frame = sp.currentFrame = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
	var sp = this, g = G(arguments)
	/*
	 var args = G(arguments), num = args[0]
	 if (args.p) {
	 return sp.frame(
	 sp.frame() + ( N(num) ? num : 1 )
	 )
	 }
	 if (args.n) {
	 return sp.frame(
	 sp.frame() - ( N(num) ? num : 1 )
	 )
	 }
	 if (U(num)) {
	 return sp.ob.currentFrame
	 }
	 $l(num)
	 return sp.isPlaying() ? sp.play(num) : sp.stop(num)
	 */
	if (g.u) {
		return sp.currentFrame
	}
	sp.currentFrame = g.f
	return sp
}
sp.an = sp.anim = sp.cA = sp.ca = sp.a = sp.cA = sp.cAn = function (a) {
	if (a) {
		return sp.isPlaying() ?
				sp.play(a) :
				sp.stop(a)
	}
	return this.currentAnimation
}
sp.anFr = sp.cAnFr = sp.cAF = sp.caf = function (fr) {
	if (U(fr)) {
		return this.currentAnimationFrame
	}
	this.currentAnimationFrame = fr
	return this
}
sp.getAn = sp.gAn = sp.getAnim = sp.ans = sp.as = sp.gA = function (a) {
	return U(a) ? sp.spriteSheet.getAnimations() :
			sp.spriteSheet.getAnimation(a)
}
sp.rate = sp.r = sp.fR = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
// events
sp.load = sp.ready = sp.done = sp.complete = sp.oC = sp.cm = function (a) {
	sp.ob.on('complete', a)
}
sp.end = sp.onEnd = sp.e = sp.oAe = sp.ae = function (fn) {
	fn = fn || function () {
		n = N(window['n'], 0);
		$l('frame! ' + n++)
	}
	this.on('animationend', fn)
	return this
}
//  animNext:  set/get NEXT animation on an animation
sp._anNext = sp._animNext = function (anim, nx) {
	var sp = this
	var anim = sp.getAnim(anim)
	if (anim) {
		if (U(nx)) {
			return anim.next
		}
		anim.next = nx
	}
	return sp
}
sp.anNoNext = function (an) {
	return this._anNext(an, false)
}
sp.anSelfNext = function (an) {
	var sp = this
	return sp._anNext(an, sp.getAn(an))
}
sp.anNext = sp.animNext = sp.next = sp.gAN = function () {
	var sp = this, g = G(arguments)
	//1) can just pass in the anim string
	//2) can pass anim string and what to set its 'next' property to
	return U(g.s) ? (g.p ? sp.anSelfNext(g.f) : g.n ? sp.anNoNext(g.f) : sp.anNext(g.f)) :
			g.p ? sp._anNext(g.f, g.s)._anNext(sp._anNext(g.f)) : sp._anNext(g.f, g.s)
}
sp.adv = p.skip = sp.av = sp.N = function (num) {
	this.advance(num);
	return this
}
sp.play = sp.p = function (an) {
	var sp = this
	/*
	 sp.play = sp.p = function (a, b) {
	 var g = G(arguments),
	 a = g[0],
	 b = g[1],
	 l = g.f,
	 n
	 if (U(a)) {
	 sp.ob.play();
	 return o
	 }
	 if (U(b)) {
	 if (g.n) {
	 sp.next(a, false)
	 }
	 if (g.p) {
	 sp.next(a, a)
	 }
	 sp.ob.gotoAndPlay(a)
	 return o
	 }
	 _.each(g.r, function (a) {
	 sp.next(l, a)
	 l = a
	 })
	 sp.next(g.l, g.isPlaying ? false : g.f)
	 sp.play(g.f)
	 }
	 */
	if (U(an)) {
		sp.play()
	}
	else {
		sp.gotoAndPlay(an)
	}
	return sp
}
sp.stop = sp.s = sp.P = function (an) {
	var sp = this
	if (U(an)) {
		sp.stop()
	}
	else {
		sp.gotoAndStop(an)
	}
	return sp
}
sp.playing = sp.iPl = sp.isPlaying = sp.iP = function () {
	return !this.paused
}
sp.iP = function () {
	return this.paused
}
sp.numFr = sp.numFrames = sp.nF = function () {
	return sp.sS.getNumFrames()
}
sp.fr = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
	var sp = this, g = G(arguments)
	/*
	 var args = G(arguments), num = args[0]
	 if (args.p) {
	 return sp.frame(
	 sp.frame() + ( N(num) ? num : 1 )
	 )
	 }
	 if (args.n) {
	 return sp.frame(
	 sp.frame() - ( N(num) ? num : 1 )
	 )
	 }
	 if (U(num)) {
	 return sp.ob.currentFrame
	 }
	 $l(num)
	 return sp.isPlaying() ? sp.play(num) : sp.stop(num)
	 */
	if (g.u) {
		return sp.currentFrame
	}
	sp.currentFrame = g.f
	return sp
	//= sp.frame = sp.currentFrame
}
sp.an = sp.anim = sp.cA = sp.ca = sp.a = sp.cA = sp.cAn = function (a) {
	if (a) {
		return sp.isPlaying() ?
				sp.play(a) :
				sp.stop(a)
	}
	return this.currentAnimation
}
sp.anFr = sp.cAnFr = sp.cAF = sp.caf = function (fr) {
	if (U(fr)) {
		return this.currentAnimationFrame
	}
	this.currentAnimationFrame = fr
	return this
}
sp.getAn = sp.gAn = sp.getAnim = sp.ans = sp.as = sp.gA = function (a) {
	return U(a) ? sp.spriteSheet.getAnimations() :
			sp.spriteSheet.getAnimation(a)
}
sp.rate = sp.r = sp.fR = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
// events
sp.load = sp.ready = sp.done = sp.complete = sp.oC = sp.cm = function (a) {
	sp.ob.on('complete', a)
}
sp.end = sp.onEnd = sp.e = sp.oAe = sp.ae = function (fn) {
	fn = fn || function () {
		n = N(window['n'], 0);
		$l('frame! ' + n++)
	}
	this.on('animationend', fn)
	return this
}
//  animNext:  set/get NEXT animation on an animation
sp._anNext = sp._animNext = function (anim, nx) {
	var sp = this
	var anim = sp.getAnim(anim)
	if (anim) {
		if (U(nx)) {
			return anim.next
		}
		anim.next = nx
	}
	return sp
}
sp.anNoNext = function (an) {
	return this._anNext(an, false)
}
sp.anSelfNext = function (an) {
	var sp = this
	return sp._anNext(an, sp.getAn(an))
}
sp.anNext = sp.animNext = sp.next = sp.gAN = function () {
	var sp = this, g = G(arguments)
	//1) can just pass in the anim string
	//2) can pass anim string and what to set its 'next' property to
	return U(g.s) ? (g.p ? sp.anSelfNext(g.f) : g.n ? sp.anNoNext(g.f) : sp.anNext(g.f)) :
			g.p ? sp._anNext(g.f, g.s)._anNext(sp._anNext(g.f)) : sp._anNext(g.f, g.s)
}
function needsWorld() {
	SPRY = function () {
		W([1200, 600, 2400, 1200], {g: 20})//.chalk('spritebox example')
//for 400 x 400 flash squares !!!
		//w.s.bm('earth', function(me){me.XY(400,400)fn()})
		//function fn(){
		y = w.spBox($$ship).track()
		$.K($$ship.key)
		$.K({  //takes a spritebox!//uses cjs.watchKeys()
			l: function () {
				y.rot(8, '-')
			},
			r: function () {
				y.rot(8, '+')
			},
			u: function () {
				y.I(0, -10)
			}
		})
		y.aD(.5)
//}
	}
	CHAR = function () {
		w = b2d.W().debug()
		w.begin(function (cx) {
			if (cx.with('hurt')) {
				b.p('hurt').I(100, -200)
			}
			if (cx.with('fly')) {
				b.p('fly').I(-100, -200)
			}
		})
		b = w.ball(200, 200, 60).bindSprite2(cjs.sprite(Sprites.char).rXY(275, 220))
		guyBrick(100).K('hurt')
		guyBrick(500).K('fly')
		function guyBrick(x) {
			return w.brick(x, 500, 100, 100).bindSprite('guy', .6)
		}
	}
	MUMMYFLIP = function () {
		w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
		b = b2d.box(100, 100, 50, 88).K('mummy').bindSprite2(
				cjs.sprite(Mummy).a2(w.s).drag()
						.rXY(20, 22).sXY(2).XY(200))
		b.coll(function () {
			b.linVel(0)
		})
		b.sprite.p('walk')
		cjs.tick(function () {
			b.rT(0)
			if (b.direction == 'right') {
				b.I(4, -2)
			}
			else if (b.direction == 'left') {
				b.I(-4, -2)
			}    // direction='neither' // <-- demumify (doesnt keep walking
			//if(jumpButton is pressed){jump()}
		})
		$.kD({
			u: function () {
				//jumpButtonPressed = true
				if (b.Y() > 530) {
					b.I(0, -80)
				}
			},
			U: function () {
				//jumpButtonPressed = false
			},
			l: function () {
				b.sprite.sX(-2)
				b.direction = 'left'
			},
			r: function () {
				b.sprite.sX(2)
				b.direction = 'right'
			}
		})
	}
	STICK = function () {
		w = b2d.W({grav: 3})
				.chalk('spritebox example').debug()
		w.spriteBox({
			"framerate": 4,
			"images": ["stick.png"],
			"frames": [
				[0, 0, 512, 512, 0, -22, -2],
				[512, 0, 512, 512, 0, -22, -2],
				[1024, 0, 512, 512, 0, -22, -2],
				[0, 512, 512, 512, 0, -22, -2],
				[512, 512, 512, 512, 0, -22, -2],
				[1024, 512, 512, 512, 0, -22, -2],
				[0, 1024, 512, 512, 0, -22, -2],
				[512, 1024, 512, 512, 0, -22, -2],
				[1024, 1024, 512, 512, 0, -22, -2],
				[0, 1536, 512, 512, 0, -22, -2],
				[512, 1536, 512, 512, 0, -22, -2],
				[1024, 1536, 512, 512, 0, -22, -2]
			],
			"animations": {
				"die": {"frames": [8, 9, 10], "speed": .1, next: false},
				"walk": {"frames": [1, 2, 3, 4], "speed": .1},
				"jump": {"frames": [5, 6, 7, 0], "speed": .1, next: false}
			}
		}, 300, 200, .25).mario()
		w.rect(600, 200, 50, 50, 'p')
		w.circ(600, 100, 40, 'b')
	}
}
function apps() {
	STAGE = function () {
		z()
		m$$("location=location")
		s = St(600).a().rgc().drg().xy(300)
		s.bm('chicks')
		s.bm('me', function (mm) {
			m = mm
			m.rgc()
			m.xy(300)
			cjs.tween(s, [{r: -10000}, 300000])
			cjs.tween(m, [{r: 100000}, 300000])
		})
		s.bm('guy', function () {
		})
	}
	STAGE = function () {
		z()
		m$$("location=location")
		s = St(600).a().rgc().drg().xy(300)
		s.bm('chicks')
		s.bm('me', function (mm) {
			m = mm
			m.rgc()
			m.xy(300)
			cjs.tween(s, [{r: -10000}, 300000])
			cjs.tween(m, [{r: 100000}, 300000])
		})
		s.bm('guy', function () {
		})
	}
 
	RECTS = function () {
		z()
		x = 20
		y = 20
		s = cjs.stage(500).A()//.drag()
		h0 = cjs.shape().rect(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
		h1 = cjs.shape().rect(-10, -10, x + 20, y + 20, 'red', 'pink')
		h2 = cjs.shape().rect(0, 0, x, y, 'orange', 'black')
		s.A(h0, h1, h2)
		SL(h2)
		SL(h2, h1)
		SL(h2, h0)
		RT(h1)
		RT(h1, h2)
		RT(h1, h0)
		SC(h0)
		SC(h0, h2)
		SC(h0, h1)
		a = function () {
			x += 20;
			y += 20
			h1.clear()
			h2.clear()
			h1.rect(-10, -10, x + 20, y + 20, 'black', 'pink')
			h2.rect(0, 0, x, y, 'orange', 'transparent')
		}
		// h0.rect(50,50,30,30,'black','orange')
	}
	RECTS = function () {
		z()
		x = 20
		y = 20
		s = cjs.stage(500).A()//.drag()
		h0 = cjs.shape().rect(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
		h1 = cjs.shape().rect(-10, -10, x + 20, y + 20, 'red', 'pink')
		h2 = cjs.shape().rect(0, 0, x, y, 'orange', 'black')
		s.A(h0, h1, h2)
		SL(h2)
		SL(h2, h1)
		SL(h2, h0)
		RT(h1)
		RT(h1, h2)
		RT(h1, h0)
		SC(h0)
		SC(h0, h2)
		SC(h0, h1)
		a = function () {
			x += 20;
			y += 20
			h1.clear()
			h2.clear()
			h1.rect(-10, -10, x + 20, y + 20, 'black', 'pink')
			h2.rect(0, 0, x, y, 'orange', 'transparent')
		}
		// h0.rect(50,50,30,30,'black','orange')
	}
	RECTS = function () {
		z()
		x = 20
		y = 20
		s = cjs.stage(500).A()//.drag()
		h0 = cjs.shape().rect(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
		h1 = cjs.shape().rect(-10, -10, x + 20, y + 20, 'red', 'pink')
		h2 = cjs.shape().rect(0, 0, x, y, 'orange', 'black')
		s.A(h0, h1, h2)
		SL(h2)
		SL(h2, h1)
		SL(h2, h0)
		RT(h1)
		RT(h1, h2)
		RT(h1, h0)
		SC(h0)
		SC(h0, h2)
		SC(h0, h1)
		a = function () {
			x += 20;
			y += 20
			h1.clear()
			h2.clear()
			h1.rect(-10, -10, x + 20, y + 20, 'black', 'pink')
			h2.rect(0, 0, x, y, 'orange', 'transparent')
		}
		// h0.rect(50,50,30,30,'black','orange')
	}
}
$An = $Anim = function (frames, speed) {
	return {frames: frames, speed: N(speed, 1)}
}
 