TWEEN4 = function (a) {
	st = $St(500, 500)
	st.mug(function (bm) {
		b = bm
		TR(bm)
		$Tw(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	st.mug(function (bm) {
		bm.TR()
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
	$.A('hahaahah')
}
TWEEN3 = function (a) {
	st = $St(500, 500)
	st.mug(function (bm) {
		b = bm
		TR(bm)
		$Tw(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	st.mug(function (bm) {
		bm.TR()
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
	$.A('hahaahah')
}
TWEEN2 = function (a) {//combo/complex/anim/tween
	//wMs looks like it makes/appends a stage, gives it a bitmap
	//based on your mug, and pass it to a callback
	s = createjs.stage('y', 500, 500).tick().A()
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
}
TWEEN1 = function (a) {//combo/complex/anim/tween
	//wMs looks like it makes/appends a stage, gives it a bitmap
	//based on your mug, and pass it to a callback
	s = createjs.stage('y', 500, 500).tick().A()
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
}
TWEEN = function (a) {//combo/complex/anim/tween
	//wMs looks like it makes/appends a stage, gives it a bitmap
	//based on your mug, and pass it to a callback
	s = createjs.stage('y', 500, 500).tick().A()
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
}
function twx() {
	EAART = function () {
		z()
		s = stage = cjs.stage(500, 600).A()
		s.can.P('a').XY(300)
		s.A(h = shape = cjs.shape())
		h.rect(100, 200, 0, 200, 'red')
				.rect(100, 100, 100, 20, 'green')
				.rect(145, 120, 10, 80, 'orange')
				.circ(105, 100, 20, 'blue')
				.circ(105, 100, 8, 'black')
				.circ(200, 100, 20, 'blue')
				.circ(200, 100, 8, 'black')
				.circ(100, 20, 100, 'green')
				.rXY(100, 300).XY(100, 300).drag()
		p = function () {
			shape.tweenLoop(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			shape.tweenLoop(
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
//this returns tween-get on a display obj
//you can optionally pass an array (ob, op1, op2..)
//old:
//w.psv=function(){ return w.passive}
//Read-only. Indicates the tween's current position is within a passive wait.
//tw.tkXXX = function (a) {		this.tick(a);return this	}
//A Tween instance tweens properties for a single target. Instance methods can be chained for easy construction and sequencing:
	TWEX = function () {
		target.alpha = 1;
		createjs.Tween.get(target)
				.wait(500)
				.to({alpha: 0, visible: false}, 1000)
				.call(handleComplete);
		function handleComplete() {
			//Tween complete
		}
	}
//w.target
//use when returned
// w.play  = w.P=w.p=function(){ w.setPaused(false);return w}
// w.stop  = w.S=w.s=function(){ w.setPaused(true);return w}
//use in queue}
	TWEX = NOTFINISHED = function () {
		target.alpha = 1;
		cj.Tween.get(target)
				.wait(500)
				.to({alpha: 0, visible: false}, 1000)
				.call(handleComplete);
		function handleComplete() {
			alert('Tween complete')
		}
	}
}
function wapTw() {
	WAPTWEEN = function (a) {
		WAPTWEEN = function (a) {
//combo/complex/anim/tween
			//wMs looks like it makes/appends a stage, gives it a bitmap
			//based on your mug, and pass it to a callback
			Q(['me', 'chicks', 'guy'], function () {
				W()
				me = w.i.qB('me')
				$Tw(
						[me, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
				)
				TR(me)
				$Tw([me, 'l'],
						{x: 0, sxy: .7, r: -2},
						[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
						[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
						[{rx: 100}, 1000],
						[{ry: 100}, 1000],
						[{r: 50, x: 1400, y: 300}, 3000],
						[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
						[{r: 100, x: 300, ky: -100}, 1000],
						[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
						[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
						[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
			})
			//$.ev(2, function(){ tweens.rpunch(g) } )
		}//B+++++
//combo/complex/anim/tween
		//wMs looks like it makes/appends a stage, gives it a bitmap
		//based on your mug, and pass it to a callback
		Q(['me', 'chicks', 'guy'], function () {
			W()
			me = w.i.qB('me')
			$Tw(
					[me, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			)
			TR(me)
			$Tw([me, 'l'],
					{x: 0, sxy: .7, r: -2},
					[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
					[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
					[{rx: 100}, 1000],
					[{ry: 100}, 1000],
					[{r: 50, x: 1400, y: 300}, 3000],
					[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
					[{r: 100, x: 300, ky: -100}, 1000],
					[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
					[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
					[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
		})
		//$.ev(2, function(){ tweens.rpunch(g) } )
	}//B+++++
	WAPTWEEN = function (a) {
		WAPTWEEN = function (a) {
//combo/complex/anim/tween
			//wMs looks like it makes/appends a stage, gives it a bitmap
			//based on your mug, and pass it to a callback
			Q(['me', 'chicks', 'guy'], function () {
				W()
				me = w.i.qB('me')
				$Tw(
						[me, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
				)
				TR(me)
				$Tw([me, 'l'],
						{x: 0, sxy: .7, r: -2},
						[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
						[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
						[{rx: 100}, 1000],
						[{ry: 100}, 1000],
						[{r: 50, x: 1400, y: 300}, 3000],
						[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
						[{r: 100, x: 300, ky: -100}, 1000],
						[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
						[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
						[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
			})
			//$.ev(2, function(){ tweens.rpunch(g) } )
		}//B+++++
//combo/complex/anim/tween
		//wMs looks like it makes/appends a stage, gives it a bitmap
		//based on your mug, and pass it to a callback
		Q(['me', 'chicks', 'guy'], function () {
			W()
			me = w.i.qB('me')
			$Tw(
					[me, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			)
			TR(me)
			$Tw([me, 'l'],
					{x: 0, sxy: .7, r: -2},
					[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
					[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
					[{rx: 100}, 1000],
					[{ry: 100}, 1000],
					[{r: 50, x: 1400, y: 300}, 3000],
					[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
					[{r: 100, x: 300, ky: -100}, 1000],
					[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
					[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
					[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
		})
		//$.ev(2, function(){ tweens.rpunch(g) } )
	}//B+++++
	WAPTWEEN = function (a) {
		WAPTWEEN = function (a) {
//combo/complex/anim/tween
			//wMs looks like it makes/appends a stage, gives it a bitmap
			//based on your mug, and pass it to a callback
			Q(['me', 'chicks', 'guy'], function () {
				W()
				me = w.i.qB('me')
				$Tw(
						[me, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
				)
				TR(me)
				$Tw([me, 'l'],
						{x: 0, sxy: .7, r: -2},
						[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
						[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
						[{rx: 100}, 1000],
						[{ry: 100}, 1000],
						[{r: 50, x: 1400, y: 300}, 3000],
						[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
						[{r: 100, x: 300, ky: -100}, 1000],
						[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
						[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
						[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
			})
			//$.ev(2, function(){ tweens.rpunch(g) } )
		}//B+++++
//combo/complex/anim/tween
		//wMs looks like it makes/appends a stage, gives it a bitmap
		//based on your mug, and pass it to a callback
		Q(['me', 'chicks', 'guy'], function () {
			W()
			me = w.i.qB('me')
			$Tw(
					[me, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			)
			TR(me)
			$Tw([me, 'l'],
					{x: 0, sxy: .7, r: -2},
					[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
					[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
					[{rx: 100}, 1000],
					[{ry: 100}, 1000],
					[{r: 50, x: 1400, y: 300}, 3000],
					[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
					[{r: 100, x: 300, ky: -100}, 1000],
					[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
					[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
					[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
		})
		//$.ev(2, function(){ tweens.rpunch(g) } )
	}//B+++++
	WAPTWEEN = function (a) {
		WAPTWEEN = function (a) {
//combo/complex/anim/tween
			//wMs looks like it makes/appends a stage, gives it a bitmap
			//based on your mug, and pass it to a callback
			Q(['me', 'chicks', 'guy'], function () {
				W()
				me = w.i.qB('me')
				$Tw(
						[me, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
				)
				TR(me)
				$Tw([me, 'l'],
						{x: 0, sxy: .7, r: -2},
						[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
						[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
						[{rx: 100}, 1000],
						[{ry: 100}, 1000],
						[{r: 50, x: 1400, y: 300}, 3000],
						[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
						[{r: 100, x: 300, ky: -100}, 1000],
						[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
						[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
						[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
			})
			//$.ev(2, function(){ tweens.rpunch(g) } )
		}//B+++++
//combo/complex/anim/tween
		//wMs looks like it makes/appends a stage, gives it a bitmap
		//based on your mug, and pass it to a callback
		Q(['me', 'chicks', 'guy'], function () {
			W()
			me = w.i.qB('me')
			$Tw(
					[me, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			)
			TR(me)
			$Tw([me, 'l'],
					{x: 0, sxy: .7, r: -2},
					[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
					[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
					[{rx: 100}, 1000],
					[{ry: 100}, 1000],
					[{r: 50, x: 1400, y: 300}, 3000],
					[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
					[{r: 100, x: 300, ky: -100}, 1000],
					[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
					[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
					[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
		})
		//$.ev(2, function(){ tweens.rpunch(g) } )
	}//B+++++
}
function art() {
	EASELART8 = TWEEN = function () {
		stage = $St(500, 600)
		shape = stage.Sh()
		gx = shape.graphics.FS()
		shape.rec(100, 200, 0, 200, 'a')
		shape.rec(100, 100, 100, 20, 'g')
		shape.rec(145, 120, 10, 80, 'o')
		shape.cir(105, 100, 20, 'b')
		shape.cir(105, 100, 8, 'x')
		shape.cir(200, 100, 20, 'b')
		shape.cir(200, 100, 8, 'x')
		//shape.circle(100,20,100,'g')
		SL(shape)
		shape.rx(100).ry(300).x(100).y(300)
		p = function () {
			EaselTween([shape, {l: 1}],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
			)
			EaselTween([shape, {l: 1}],
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
	EAART = function () {
		z()
		s = stage = cjs.stage(500, 600).A()
		s.can.P('a').XY(300)
		s.A(h = shape = cjs.shape())
		h.rect(100, 200, 0, 200, 'red')
				.rect(100, 100, 100, 20, 'green')
				.rect(145, 120, 10, 80, 'orange')
				.circ(105, 100, 20, 'blue')
				.circ(105, 100, 8, 'black')
				.circ(200, 100, 20, 'blue')
				.circ(200, 100, 8, 'black')
				.circ(100, 20, 100, 'green')
				.rXY(100, 300).XY(100, 300).drag()
		p = function () {
			shape.tweenLoop(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			shape.tweenLoop(
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
		EASELART9 = function () {
			z()
			stage = St(500, 600).A()
			shape = stage.Shape()
			shape.rectangle(100, 200, 0, 200, 'a')
			shape.rectangle(100, 100, 100, 20, 'g')
			shape.rectangle(145, 120, 10, 80, 'o')
			shape.circle(105, 100, 20, 'b')
			shape.circle(105, 100, 8, 'x')
			shape.circle(200, 100, 20, 'b')
			shape.circle(200, 100, 8, 'x')
			//shape.circle(100,20,100,'g')
			SL(shape)
			shape.rx(100).ry(300).x(100).y(300)
			p = function () {
				EaselTween([shape, {l: 1}],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
				)
				EaselTween([shape, {l: 1}],
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
	}
	EASELART9 = function () {
		z()
		stage = St(500, 600).A()
		shape = stage.Shape()
		shape.rectangle(100, 200, 0, 200, 'a')
		shape.rectangle(100, 100, 100, 20, 'g')
		shape.rectangle(145, 120, 10, 80, 'o')
		shape.circle(105, 100, 20, 'b')
		shape.circle(105, 100, 8, 'x')
		shape.circle(200, 100, 20, 'b')
		shape.circle(200, 100, 8, 'x')
		//shape.circle(100,20,100,'g')
		SL(shape)
		shape.rx(100).ry(300).x(100).y(300)
		p = function () {
			EaselTween([shape, {l: 1}],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
			)
			EaselTween([shape, {l: 1}],
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
	EASELART9 = function () {
		z()
		stage = St(500, 600).A()
		shape = stage.Shape()
		shape.rectangle(100, 200, 0, 200, 'a')
		shape.rectangle(100, 100, 100, 20, 'g')
		shape.rectangle(145, 120, 10, 80, 'o')
		shape.circle(105, 100, 20, 'b')
		shape.circle(105, 100, 8, 'x')
		shape.circle(200, 100, 20, 'b')
		shape.circle(200, 100, 8, 'x')
		//shape.circle(100,20,100,'g')
		SL(shape)
		shape.rx(100).ry(300).x(100).y(300)
		p = function () {
			EaselTween([shape, {l: 1}],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
			)
			EaselTween([shape, {l: 1}],
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
	EASELART9 = function () {
		z()
		stage = St(500, 600).A()
		shape = stage.Shape()
		shape.rectangle(100, 200, 0, 200, 'a')
		shape.rectangle(100, 100, 100, 20, 'g')
		shape.rectangle(145, 120, 10, 80, 'o')
		shape.circle(105, 100, 20, 'b')
		shape.circle(105, 100, 8, 'x')
		shape.circle(200, 100, 20, 'b')
		shape.circle(200, 100, 8, 'x')
		//shape.circle(100,20,100,'g')
		SL(shape)
		shape.rx(100).ry(300).x(100).y(300)
		p = function () {
			EaselTween([shape, {l: 1}],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
			)
			EaselTween([shape, {l: 1}],
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
	EASELART8 = TWEEN = function () {
		stage = $St(500, 600)
		shape = stage.Sh()
		gx = shape.graphics.FS()
		shape.rec(100, 200, 0, 200, 'a')
		shape.rec(100, 100, 100, 20, 'g')
		shape.rec(145, 120, 10, 80, 'o')
		shape.cir(105, 100, 20, 'b')
		shape.cir(105, 100, 8, 'x')
		shape.cir(200, 100, 20, 'b')
		shape.cir(200, 100, 8, 'x')
		//shape.circle(100,20,100,'g')
		SL(shape)
		shape.rx(100).ry(300).x(100).y(300)
		p = function () {
			EaselTween([shape, {l: 1}],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
			)
			EaselTween([shape, {l: 1}],
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
	EASELART8 = TWEEN = function () {
		stage = $St(500, 600)
		shape = stage.Sh()
		gx = shape.graphics.FS()
		shape.rec(100, 200, 0, 200, 'a')
		shape.rec(100, 100, 100, 20, 'g')
		shape.rec(145, 120, 10, 80, 'o')
		shape.cir(105, 100, 20, 'b')
		shape.cir(105, 100, 8, 'x')
		shape.cir(200, 100, 20, 'b')
		shape.cir(200, 100, 8, 'x')
		//shape.circle(100,20,100,'g')
		SL(shape)
		shape.rx(100).ry(300).x(100).y(300)
		p = function () {
			EaselTween([shape, {l: 1}],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
			)
			EaselTween([shape, {l: 1}],
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
	EAART = function () {
		z()
		s = stage = cjs.stage(500, 600).A()
		s.can.P('a').XY(300)
		s.A(h = shape = cjs.shape())
		h.rect(100, 200, 0, 200, 'red')
				.rect(100, 100, 100, 20, 'green')
				.rect(145, 120, 10, 80, 'orange')
				.circ(105, 100, 20, 'blue')
				.circ(105, 100, 8, 'black')
				.circ(200, 100, 20, 'blue')
				.circ(200, 100, 8, 'black')
				.circ(100, 20, 100, 'green')
				.rXY(100, 300).XY(100, 300).drag()
		p = function () {
			shape.tweenLoop(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			shape.tweenLoop(
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
		EASELART9 = function () {
			z()
			stage = St(500, 600).A()
			shape = stage.Shape()
			shape.rectangle(100, 200, 0, 200, 'a')
			shape.rectangle(100, 100, 100, 20, 'g')
			shape.rectangle(145, 120, 10, 80, 'o')
			shape.circle(105, 100, 20, 'b')
			shape.circle(105, 100, 8, 'x')
			shape.circle(200, 100, 20, 'b')
			shape.circle(200, 100, 8, 'x')
			//shape.circle(100,20,100,'g')
			SL(shape)
			shape.rx(100).ry(300).x(100).y(300)
			p = function () {
				EaselTween([shape, {l: 1}],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
				)
				EaselTween([shape, {l: 1}],
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
	}
	EAART = function () {
		z()
		s = stage = cjs.stage(500, 600).A()
		s.can.P('a').XY(300)
		s.A(h = shape = cjs.shape())
		h.rect(100, 200, 0, 200, 'red')
				.rect(100, 100, 100, 20, 'green')
				.rect(145, 120, 10, 80, 'orange')
				.circ(105, 100, 20, 'blue')
				.circ(105, 100, 8, 'black')
				.circ(200, 100, 20, 'blue')
				.circ(200, 100, 8, 'black')
				.circ(100, 20, 100, 'green')
				.rXY(100, 300).XY(100, 300).drag()
		p = function () {
			shape.tweenLoop(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			shape.tweenLoop(
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
	EAART = function () {
		s = stage = $St(500, 600).A()
		s.can.P('a').XY(300)
		s.A(h = shape = cjs.shape())
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
			shape.tweenLoop(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			shape.tweenLoop(
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
	EASELART8 = TWEEN = function () {
		stage = $St(500, 600)
		shape = stage.Sh()
		gx = shape.graphics.FS()
		shape.rec(100, 200, 0, 200, 'a')
		shape.rec(100, 100, 100, 20, 'g')
		shape.rec(145, 120, 10, 80, 'o')
		shape.cir(105, 100, 20, 'b')
		shape.cir(105, 100, 8, 'x')
		shape.cir(200, 100, 20, 'b')
		shape.cir(200, 100, 8, 'x')
		//shape.circle(100,20,100,'g')
		SL(shape)
		shape.rX(100).rY(300).X(100).Y(300)
		p = function () {
			$Tw([shape, {l: 1}],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
			)
			$Tw([shape, {l: 1}],
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
	EASELART8 = TWEEN = function () {
		stage = $St(500, 600)
		shape = stage.Sh()
		gx = shape.graphics.FS()
		shape.rec(100, 200, 0, 200, 'a')
		shape.rec(100, 100, 100, 20, 'g')
		shape.rec(145, 120, 10, 80, 'o')
		shape.cir(105, 100, 20, 'b')
		shape.cir(105, 100, 8, 'x')
		shape.cir(200, 100, 20, 'b')
		shape.cir(200, 100, 8, 'x')
		//shape.circle(100,20,100,'g')
		SL(shape)
		shape.rx(100).ry(300).x(100).y(300)
		p = function () {
			EaselTween([shape, {l: 1}],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
			)
			EaselTween([shape, {l: 1}],
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
	TWEENART = function (a) {
		
		
		//wMb makes bitmap mug and passes it to a callback
		//optionally? can pass a stage to append it to before the callback runs
		wMb(
				function (b, s) {
					b.xy(300);
					b.rgc(); //centers it's reg point?
					SK(b)
					cjs.tween(
							[b, 'l'],
							{sxy: .5},
							[{sxy: .7}, 500],
							[{sxy: .5}, 500]
					)
					wMb(function (b) {
						s.a(b)//manual add necessary?
						b.xy(200);
						b.rgc();
						b.wh(200);
						SL(b);
						cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
						wMb(function (b) {
							s.a(b);
							b.rgc();
							b.xy(600);
							SC(b)
							cjs.tween([b, 'l'], {kxy: 0},
									[{kxy: 20}, 500],
									[{kxy: 0}, 500])
						})
					})
				}, EDIT()
		)
	}
	TWEENART = function (a) {
		
		
		//wMb makes bitmap mug and passes it to a callback
		//optionally? can pass a stage to append it to before the callback runs
		wMb(
				function (b, s) {
					b.xy(300);
					b.rgc(); //centers it's reg point?
					SK(b)
					cjs.tween(
							[b, 'l'],
							{sxy: .5},
							[{sxy: .7}, 500],
							[{sxy: .5}, 500]
					)
					wMb(function (b) {
						s.a(b)//manual add necessary?
						b.xy(200);
						b.rgc();
						b.wh(200);
						SL(b);
						cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
						wMb(function (b) {
							s.a(b);
							b.rgc();
							b.xy(600);
							SC(b)
							cjs.tween([b, 'l'], {kxy: 0},
									[{kxy: 20}, 500],
									[{kxy: 0}, 500])
						})
					})
				}, EDIT()
		)
	}
	TWEENART = function (a) {
		
		
		//wMb makes bitmap mug and passes it to a callback
		//optionally? can pass a stage to append it to before the callback runs
		wMb(function (b, s) {
					b.xy(300);
					b.rgc(); //centers it's reg point?
					SK(b)
					cjs.tween(
							[b, 'l'],
							{sxy: .5},
							[{sxy: .7}, 500],
							[{sxy: .5}, 500])
					wMb(function (b) {
						s.a(b)//manual add necessary?
						b.xy(200);
						b.rgc();
						b.wh(200);
						SL(b);
						cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
						wMb(function (b) {
							s.a(b);
							b.rgc();
							b.xy(600);
							SC(b)
							cjs.tween([b, 'l'], {kxy: 0},
									[{kxy: 20}, 500],
									[{kxy: 0}, 500])
						})
					})
				}, EDIT()
		)
	}
	TWEENART = function (a) {
		//wMb makes bitmap mug and passes it to a callback
		//optionally? can pass a stage to append it to before the callback runs
		s = $St()
		s.mug(function (b) {
					b.XY(300);
					b.rC(); //centers it's reg point?
					SK(b)
					$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
					s.mug(function (b) {
						b.XY(200);
						b.rC();
						b.WH(200);
						SL(b);
						$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
						s.mug(function (b) {
							b.rC();
							b.XY(600);
							SC(b)
							$Tw([b, 'l'], {kxy: 0},
									[{kxy: 20}, 500],
									[{kxy: 0}, 500])
						})
					})
				},
				EDIT()
		)
	}
	TWEENART = function (a) {
		//wMb makes bitmap mug and passes it to a callback
		//optionally? can pass a stage to append it to before the callback runs
		s = $St()
		s.mug(function (b) {
					b.XY(300);
					b.rC(); //centers it's reg point?
					SK(b)
					$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
					s.mug(function (b) {
						b.XY(200);
						b.rC();
						b.WH(200);
						SL(b);
						$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
						s.mug(function (b) {
							b.rC();
							b.XY(600);
							SC(b)
							$Tw([b, 'l'], {kxy: 0},
									[{kxy: 20}, 500],
									[{kxy: 0}, 500])
						})
					})
				},
				EDIT()
		)
	}
	TWEENART = function (a) {
		//wMb makes bitmap mug and passes it to a callback
		//optionally? can pass a stage to append it to before the callback runs
		s = $St()
		s.mug(function (b) {
					b.XY(300);
					b.rC(); //centers it's reg point?
					SK(b)
					$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
					s.mug(function (b) {
						b.XY(200);
						b.rC();
						b.WH(200);
						SL(b);
						$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
						s.mug(function (b) {
							b.rC();
							b.XY(600);
							SC(b)
							$Tw([b, 'l'], {kxy: 0},
									[{kxy: 20}, 500],
									[{kxy: 0}, 500])
						})
					})
				},
				EDIT()
		)
	}
	TWEENART = function (a) {
		//wMb makes bitmap mug and passes it to a callback
		//optionally? can pass a stage to append it to before the callback runs
		s = $St()
		s.mug(function (b) {
					b.XY(300);
					b.rC(); //centers it's reg point?
					SK(b)
					$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
					s.mug(function (b) {
						b.XY(200);
						b.rC();
						b.WH(200);
						SL(b);
						$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
						s.mug(function (b) {
							b.rC();
							b.XY(600);
							SC(b)
							$Tw([b, 'l'], {kxy: 0},
									[{kxy: 20}, 500],
									[{kxy: 0}, 500])
						})
					})
				},
				EDIT()
		)
	}
}
function twPos() {
	TWEENPOS = function () {
		TWEENPOS = function () {
			z()
			s = $St(500).t().A()
			s.bm('me', function (bm) {
				b = bm
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = $Tw(guy, [{r: 3000}, 100000])
					w = $Tw(bm, [{sx: 3}, 1000])
							.wait(1000).pause(w0).then({sy: 3}, 4000)
							.play(w0).then({sy: .3}, 4000)
				})
			})
		}///B
		TWEENPOS = function () {
			z()
			s = cjs.stage(500).A()
			s.bm('me', function (bm) {
				b = bm;
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = cjs.tween(guy, [{r: 90}, 100]).pause().then({r: 3000}, 100000)
					w = cjs.tween(bm, [{sx: 3}, 10000]).play(w0)
				})
				setInterval(function () {
					tweens.rpunch(g)
				}, 2000)
			})
		}
		z()
		s = $St(500).t().A()
		s.bm('me', function (bm) {
			b = bm
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = $Tw(guy, [{r: 3000}, 100000])
				w = $Tw(bm, [{sx: 3}, 1000])
						.wait(1000).pause(w0).then({sy: 3}, 4000)
						.play(w0).then({sy: .3}, 4000)
			})
		})
	}///B
	TWEENPOS1 = function () {
		_$St().t().bm('me', function (me) {
			st.bm('guy', function (guy) {
				guy.XY(200)
				cjs.tween(me, [{sx: 3}, 1000]).wait(1000).pause(
						w0 = cjs.tween(guy, [{r: 3000}, 100000]))
						.then({sy: 3}, 4000).play(w0).then({sy: .3}, 4000)
			})
		})
	}
	TWEENPOS = function () {
		TWEENPOS = function () {
			z()
			s = $St(500).t().A()
			s.bm('me', function (bm) {
				b = bm
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = $Tw(guy, [{r: 3000}, 100000])
					w = $Tw(bm, [{sx: 3}, 1000])
							.wait(1000).pause(w0).then({sy: 3}, 4000)
							.play(w0).then({sy: .3}, 4000)
				})
			})
		}///B
		TWEENPOS = function () {
			z()
			s = cjs.stage(500).A()
			s.bm('me', function (bm) {
				b = bm;
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = cjs.tween(guy, [{r: 90}, 100]).pause().then({r: 3000}, 100000)
					w = cjs.tween(bm, [{sx: 3}, 10000]).play(w0)
				})
				setInterval(function () {
					tweens.rpunch(g)
				}, 2000)
			})
		}
		z()
		s = $St(500).t().A()
		s.bm('me', function (bm) {
			b = bm
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = $Tw(guy, [{r: 3000}, 100000])
				w = $Tw(bm, [{sx: 3}, 1000])
						.wait(1000).pause(w0).then({sy: 3}, 4000)
						.play(w0).then({sy: .3}, 4000)
			})
		})
	}///B
	TWEENPOS = function () {
		TWEENPOS = function () {
			z()
			s = $St(500).t().A()
			s.bm('me', function (bm) {
				b = bm
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = $Tw(guy, [{r: 3000}, 100000])
					w = $Tw(bm, [{sx: 3}, 1000])
							.wait(1000).pause(w0).then({sy: 3}, 4000)
							.play(w0).then({sy: .3}, 4000)
				})
			})
		}///B
		TWEENPOS = function () {
			z()
			s = cjs.stage(500).A()
			s.bm('me', function (bm) {
				b = bm;
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = cjs.tween(guy, [{r: 90}, 100]).pause().then({r: 3000}, 100000)
					w = cjs.tween(bm, [{sx: 3}, 10000]).play(w0)
				})
				setInterval(function () {
					tweens.rpunch(g)
				}, 2000)
			})
		}
		s = $St(500).t().A()
		s.bm('me', function (bm) {
			b = bm
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = $Tw(guy, [{r: 3000}, 100000])
				w = $Tw(bm, [{sx: 3}, 1000])
						.wait(1000).pause(w0).then({sy: 3}, 4000)
						.play(w0).then({sy: .3}, 4000)
			})
		})
	}///B
	TWEENPOS1 = function () {
		_$St().t().bm('me', function (me) {
			st.bm('guy', function (guy) {
				guy.XY(200)
				cjs.tween(me, [{sx: 3}, 1000]).wait(1000).pause(
						w0 = cjs.tween(guy, [{r: 3000}, 100000]))
						.then({sy: 3}, 4000).play(w0).then({sy: .3}, 4000)
			})
		})
	}
	TWEENPOS1 = function () {
		_$St().t().bm('me', function (me) {
			st.bm('guy', function (guy) {
				guy.XY(200)
				cjs.tween(me, [{sx: 3}, 1000]).wait(1000).pause(
						w0 = cjs.tween(guy, [{r: 3000}, 100000]))
						.then({sy: 3}, 4000).play(w0).then({sy: .3}, 4000)
			})
		})
	}
	TWEENPOS = function () {
		TWEENPOS = function () {
			z()
			s = $St(500).t().A()
			s.bm('me', function (bm) {
				b = bm
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = $Tw(guy, [{r: 3000}, 100000])
					w = $Tw(bm, [{sx: 3}, 1000])
							.wait(1000).pause(w0).then({sy: 3}, 4000)
							.play(w0).then({sy: .3}, 4000)
				})
			})
		}///B
		TWEENPOS = function () {
			z()
			s = cjs.stage(500).A()
			s.bm('me', function (bm) {
				b = bm;
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = cjs.tween(guy, [{r: 90}, 100]).pause().then({r: 3000}, 100000)
					w = cjs.tween(bm, [{sx: 3}, 10000]).play(w0)
				})
				setInterval(function () {
					tweens.rpunch(g)
				}, 2000)
			})
		}
		z()
		s = $St(500).t().A()
		s.bm('me', function (bm) {
			b = bm
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = $Tw(guy, [{r: 3000}, 100000])
				w = $Tw(bm, [{sx: 3}, 1000])
						.wait(1000).pause(w0).then({sy: 3}, 4000)
						.play(w0).then({sy: .3}, 4000)
			})
		})
	}///B
	TWEENPOS1 = function () {
		_$St().t().bm('me', function (me) {
			st.bm('guy', function (guy) {
				guy.XY(200)
				cjs.tween(me, [{sx: 3}, 1000]).wait(1000).pause(
						w0 = cjs.tween(guy, [{r: 3000}, 100000]))
						.then({sy: 3}, 4000).play(w0).then({sy: .3}, 4000)
			})
		})
	}
	TWEENPOS = function () {
		TWEENPOS = function () {
			z()
			s = $St(500).t().A()
			s.bm('me', function (bm) {
				b = bm
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = $Tw(guy, [{r: 3000}, 100000])
					w = $Tw(bm, [{sx: 3}, 1000])
							.wait(1000).pause(w0).then({sy: 3}, 4000)
							.play(w0).then({sy: .3}, 4000)
				})
			})
		}///B
		TWEENPOS = function () {
			z()
			s = cjs.stage(500).A()
			s.bm('me', function (bm) {
				b = bm;
				s.bm('guy', function (guy) {
					g = guy
					guy.XY(200)
					w0 = cjs.tween(guy, [{r: 90}, 100]).pause().then({r: 3000}, 100000)
					w = cjs.tween(bm, [{sx: 3}, 10000]).play(w0)
				})
				setInterval(function () {
					tweens.rpunch(g)
				}, 2000)
			})
		}
		z()
		s = $St(500).t().A()
		s.bm('me', function (bm) {
			b = bm
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = $Tw(guy, [{r: 3000}, 100000])
				w = $Tw(bm, [{sx: 3}, 1000])
						.wait(1000).pause(w0).then({sy: 3}, 4000)
						.play(w0).then({sy: .3}, 4000)
			})
		})
	}///B
}
function balls() {
	TWEENBALLS = function () {
		TWEENBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				w.p(0, 0, 10).stat()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 30)
				})
				w.$$(function () {
					_.t(8, function () {
						var b = w.D(R(100, 50), R(100, 50), 'b', 30)
						b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
					})
				})
				w.i.T(200, 100, '$$ me')
			})
		}//world//A-----
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}//world//A-----
	TWEENBALLS = function () {
		TWEENBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				w.p(0, 0, 10).stat()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 30)
				})
				w.$$(function () {
					_.t(8, function () {
						var b = w.D(R(100, 50), R(100, 50), 'b', 30)
						b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
					})
				})
				w.i.T(200, 100, '$$ me')
			})
		}//world//A-----
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}//world//A-----
	TWEENBALLS = function () {
		TWEENBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				w.p(0, 0, 10).stat()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 30)
				})
				w.$$(function () {
					_.t(8, function () {
						var b = w.D(R(100, 50), R(100, 50), 'b', 30)
						b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
					})
				})
				w.i.T(200, 100, '$$ me')
			})
		}//world//A-----
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}//world//A-----
	TWEENBALLS = function () {
		TWEENBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				w.p(0, 0, 10).stat()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 30)
				})
				w.$$(function () {
					_.t(8, function () {
						var b = w.D(R(100, 50), R(100, 50), 'b', 30)
						b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
					})
				})
				w.i.T(200, 100, '$$ me')
			})
		}//world//A-----
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}//world//A-----
}
function twBox() {
	TWEENBOX = DRAGSTAGE = function () {
		stage = $.dragStage()
		stage.bm('me', function (bm) {
			SL(bm)
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100],
					[{x: 0, sxy: .7, r: -30, a: .5}, 100])
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		$.dragStage().t().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}
	TWEENBOX = function () {
		TWEENBOX = function () {
			z()
			stage = $.dragStage()
			stage.bm('me', function (bm) {
				SL(bm)
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
				)
				//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
			})
			$.dragStage().t().bm('me', function (bm) {
				b = bm
				SL(bm)
				bm.rgc('+')
				scaleShake(bm)
				rotateShake(bm)
			})
		}//A--------
		TWEENBOX = function () {
			z()
			stage = $.dragStage()
			stage.bm('me', function (bm) {
				SL(bm)
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
				)
				//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
			})
			$.dragStage().t().bm('me', function (bm) {
				b = bm
				SL(bm)
				bm.rgc('+')
				scaleShake(bm)
				rotateShake(bm)
			})
		}//A--------
		z()
		stage = dragStage().tick()
		stage.bm('me', function (bm) {
			SL(bm)
			cjs.tween(
					[bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			cjs.tween(
					[bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		dragStage().tick().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}
	TWEENBOX = function () {
		TWEENBOX = function () {
			z()
			stage = $.dragStage()
			stage.bm('me', function (bm) {
				SL(bm)
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
				)
				//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
			})
			$.dragStage().t().bm('me', function (bm) {
				b = bm
				SL(bm)
				bm.rgc('+')
				scaleShake(bm)
				rotateShake(bm)
			})
		}//A--------
		TWEENBOX = function () {
			z()
			stage = $.dragStage()
			stage.bm('me', function (bm) {
				SL(bm)
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
				)
				//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
			})
			$.dragStage().t().bm('me', function (bm) {
				b = bm
				SL(bm)
				bm.rgc('+')
				scaleShake(bm)
				rotateShake(bm)
			})
		}//A--------
		z()
		stage = dragStage().tick()
		stage.bm('me', function (bm) {
			SL(bm)
			cjs.tween(
					[bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			cjs.tween(
					[bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		dragStage().tick().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}
	TWEENBOX = function () {
		TWEENBOX = function () {
			z()
			stage = $.dragStage()
			stage.bm('me', function (bm) {
				SL(bm)
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
				)
				//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
			})
			$.dragStage().t().bm('me', function (bm) {
				b = bm
				SL(bm)
				bm.rgc('+')
				scaleShake(bm)
				rotateShake(bm)
			})
		}//A--------
		TWEENBOX = function () {
			z()
			stage = $.dragStage()
			stage.bm('me', function (bm) {
				SL(bm)
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
				)
				//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
			})
			$.dragStage().t().bm('me', function (bm) {
				b = bm
				SL(bm)
				bm.rgc('+')
				scaleShake(bm)
				rotateShake(bm)
			})
		}//A--------
		z()
		stage = dragStage().tick()
		stage.bm('me', function (bm) {
			SL(bm)
			cjs.tween(
					[bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			cjs.tween(
					[bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		dragStage().tick().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}
	TWEENBOX = function () {
		TWEENBOX = function () {
			z()
			stage = $.dragStage()
			stage.bm('me', function (bm) {
				SL(bm)
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
				)
				//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
			})
			$.dragStage().t().bm('me', function (bm) {
				b = bm
				SL(bm)
				bm.rgc('+')
				scaleShake(bm)
				rotateShake(bm)
			})
		}//A--------
		TWEENBOX = function () {
			z()
			stage = $.dragStage()
			stage.bm('me', function (bm) {
				SL(bm)
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
				$Tw([bm, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
				)
				//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
			})
			$.dragStage().t().bm('me', function (bm) {
				b = bm
				SL(bm)
				bm.rgc('+')
				scaleShake(bm)
				rotateShake(bm)
			})
		}//A--------
		z()
		stage = dragStage().tick()
		stage.bm('me', function (bm) {
			SL(bm)
			cjs.tween(
					[bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			cjs.tween(
					[bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		dragStage().tick().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}
}
function tweener() {
	TWEENER = function () {
		TWEENER = function () {
			z()
			s = createjs.stage(500).tick().A()
			s.bm('me', function (bm) {
				s.bm('guy', function (guy) {
					g = guy
					b = bm
					tween = cjs.tween(bm,
							//pass in objects and they are 'to', 'to', etc..
							[{sx: 2, sy: 2}, 3000], [{a: 0}, 300],
							//make it wait
							1000,
							//pass in a function and it will run when it's its turn
							function () {
								s.bm('chicks', function (b) {
									cjs.tween(b, [{sxy: .2}, 2000])
								})
							}
					).then({x: 200}, 1000).to({alpha: 1, visible: true}, 30000)
					tween3 = cjs.tween(g, [{r: 20}, 10000], [{r: 0}, 3000])
					stop = function () {
						tween.stop();
						tween2.stop()
					}
				})
			})
		}
		TWEENER = function () {
			Q(['me', 'chicks', 'guy'], function () {
				W()
				guy = w.i.qB('chicks', 300, 300)
				me = w.i.qB('me')
				w0 = $Tw(guy, 200, [{r: 3000}, 100000])
				$Tw(me,
						[{sx: 3}, 1000])
						.wait(1000)
						.pause(w0)
						.then({sy: 3}, 4000)
						.play(w0)
						.then({sy: .3},
						4000)
				/*     .wait(1000).pause(w0).then({sy:3}, 4000)
				 .play(w0).then({sy:.3},4000)
				
				
				 tw =$Tw(
				 w.i.qB('me'),
				 [{sx:2,sy:2}, 3000],
				 [{a:0},300],
				 1000,
				 function(){$Tw(w.i.qB('chicks').spin(),
				 [{sxy:.2}, 2000])
				 }
				
				 )
				
				 */
				//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
				//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
			})
		}//B+++++
		Q(['me', 'chicks', 'guy'], function () {
			W()
			guy = w.i.qB('chicks', 300, 300)
			me = w.i.qB('me')
			w0 = $Tw(guy, 200, [{r: 3000}, 100000])
			$Tw(me,
					[{sx: 3}, 1000])
					.wait(1000)
					.pause(w0)
					.then({sy: 3}, 4000)
					.play(w0)
					.then({sy: .3},
					4000)
			/*     .wait(1000).pause(w0).then({sy:3}, 4000)
			 .play(w0).then({sy:.3},4000)
			
			
			 tw =$Tw(
			 w.i.qB('me'),
			 [{sx:2,sy:2}, 3000],
			 [{a:0},300],
			 1000,
			 function(){$Tw(w.i.qB('chicks').spin(),
			 [{sxy:.2}, 2000])
			 }
			
			 )
			
			 */
			//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
			//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
		})
	}//B+++++
	TWEENER = function () {
		TWEENER = function () {
			z()
			s = createjs.stage(500).tick().A()
			s.bm('me', function (bm) {
				s.bm('guy', function (guy) {
					g = guy
					b = bm
					tween = cjs.tween(bm,
							//pass in objects and they are 'to', 'to', etc..
							[{sx: 2, sy: 2}, 3000], [{a: 0}, 300],
							//make it wait
							1000,
							//pass in a function and it will run when it's its turn
							function () {
								s.bm('chicks', function (b) {
									cjs.tween(b, [{sxy: .2}, 2000])
								})
							}
					).then({x: 200}, 1000).to({alpha: 1, visible: true}, 30000)
					tween3 = cjs.tween(g, [{r: 20}, 10000], [{r: 0}, 3000])
					stop = function () {
						tween.stop();
						tween2.stop()
					}
				})
			})
		}
		TWEENER = function () {
			Q(['me', 'chicks', 'guy'], function () {
				W()
				guy = w.i.qB('chicks', 300, 300)
				me = w.i.qB('me')
				w0 = $Tw(guy, 200, [{r: 3000}, 100000])
				$Tw(me,
						[{sx: 3}, 1000])
						.wait(1000)
						.pause(w0)
						.then({sy: 3}, 4000)
						.play(w0)
						.then({sy: .3},
						4000)
				/*     .wait(1000).pause(w0).then({sy:3}, 4000)
				 .play(w0).then({sy:.3},4000)
				
				
				 tw =$Tw(
				 w.i.qB('me'),
				 [{sx:2,sy:2}, 3000],
				 [{a:0},300],
				 1000,
				 function(){$Tw(w.i.qB('chicks').spin(),
				 [{sxy:.2}, 2000])
				 }
				
				 )
				
				 */
				//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
				//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
			})
		}//B+++++
		Q(['me', 'chicks', 'guy'], function () {
			W()
			guy = w.i.qB('chicks', 300, 300)
			me = w.i.qB('me')
			w0 = $Tw(guy, 200, [{r: 3000}, 100000])
			$Tw(me,
					[{sx: 3}, 1000])
					.wait(1000)
					.pause(w0)
					.then({sy: 3}, 4000)
					.play(w0)
					.then({sy: .3},
					4000)
			/*     .wait(1000).pause(w0).then({sy:3}, 4000)
			 .play(w0).then({sy:.3},4000)
			
			
			 tw =$Tw(
			 w.i.qB('me'),
			 [{sx:2,sy:2}, 3000],
			 [{a:0},300],
			 1000,
			 function(){$Tw(w.i.qB('chicks').spin(),
			 [{sxy:.2}, 2000])
			 }
			
			 )
			
			 */
			//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
			//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
		})
	}//B+++++
	TWEENER = function () {
		TWEENER = function () {
			z()
			s = createjs.stage(500).tick().A()
			s.bm('me', function (bm) {
				s.bm('guy', function (guy) {
					g = guy
					b = bm
					tween = cjs.tween(bm,
							//pass in objects and they are 'to', 'to', etc..
							[{sx: 2, sy: 2}, 3000], [{a: 0}, 300],
							//make it wait
							1000,
							//pass in a function and it will run when it's its turn
							function () {
								s.bm('chicks', function (b) {
									cjs.tween(b, [{sxy: .2}, 2000])
								})
							}
					).then({x: 200}, 1000).to({alpha: 1, visible: true}, 30000)
					tween3 = cjs.tween(g, [{r: 20}, 10000], [{r: 0}, 3000])
					stop = function () {
						tween.stop();
						tween2.stop()
					}
				})
			})
		}
		TWEENER = function () {
			Q(['me', 'chicks', 'guy'], function () {
				W()
				guy = w.i.qB('chicks', 300, 300)
				me = w.i.qB('me')
				w0 = $Tw(guy, 200, [{r: 3000}, 100000])
				$Tw(me,
						[{sx: 3}, 1000])
						.wait(1000)
						.pause(w0)
						.then({sy: 3}, 4000)
						.play(w0)
						.then({sy: .3},
						4000)
				/*     .wait(1000).pause(w0).then({sy:3}, 4000)
				 .play(w0).then({sy:.3},4000)
				
				
				 tw =$Tw(
				 w.i.qB('me'),
				 [{sx:2,sy:2}, 3000],
				 [{a:0},300],
				 1000,
				 function(){$Tw(w.i.qB('chicks').spin(),
				 [{sxy:.2}, 2000])
				 }
				
				 )
				
				 */
				//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
				//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
			})
		}//B+++++
		Q(['me', 'chicks', 'guy'], function () {
			W()
			guy = w.i.qB('chicks', 300, 300)
			me = w.i.qB('me')
			w0 = $Tw(guy, 200, [{r: 3000}, 100000])
			$Tw(me,
					[{sx: 3}, 1000])
					.wait(1000)
					.pause(w0)
					.then({sy: 3}, 4000)
					.play(w0)
					.then({sy: .3},
					4000)
			/*     .wait(1000).pause(w0).then({sy:3}, 4000)
			 .play(w0).then({sy:.3},4000)
			
			
			 tw =$Tw(
			 w.i.qB('me'),
			 [{sx:2,sy:2}, 3000],
			 [{a:0},300],
			 1000,
			 function(){$Tw(w.i.qB('chicks').spin(),
			 [{sxy:.2}, 2000])
			 }
			
			 )
			
			 */
			//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
			//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
		})
	}//B+++++
	TWEENER = function () {
		TWEENER = function () {
			z()
			s = createjs.stage(500).tick().A()
			s.bm('me', function (bm) {
				s.bm('guy', function (guy) {
					g = guy
					b = bm
					tween = cjs.tween(bm,
							//pass in objects and they are 'to', 'to', etc..
							[{sx: 2, sy: 2}, 3000], [{a: 0}, 300],
							//make it wait
							1000,
							//pass in a function and it will run when it's its turn
							function () {
								s.bm('chicks', function (b) {
									cjs.tween(b, [{sxy: .2}, 2000])
								})
							}
					).then({x: 200}, 1000).to({alpha: 1, visible: true}, 30000)
					tween3 = cjs.tween(g, [{r: 20}, 10000], [{r: 0}, 3000])
					stop = function () {
						tween.stop();
						tween2.stop()
					}
				})
			})
		}
		TWEENER = function () {
			Q(['me', 'chicks', 'guy'], function () {
				W()
				guy = w.i.qB('chicks', 300, 300)
				me = w.i.qB('me')
				w0 = $Tw(guy, 200, [{r: 3000}, 100000])
				$Tw(me,
						[{sx: 3}, 1000])
						.wait(1000)
						.pause(w0)
						.then({sy: 3}, 4000)
						.play(w0)
						.then({sy: .3},
						4000)
				/*     .wait(1000).pause(w0).then({sy:3}, 4000)
				 .play(w0).then({sy:.3},4000)
				
				
				 tw =$Tw(
				 w.i.qB('me'),
				 [{sx:2,sy:2}, 3000],
				 [{a:0},300],
				 1000,
				 function(){$Tw(w.i.qB('chicks').spin(),
				 [{sxy:.2}, 2000])
				 }
				
				 )
				
				 */
				//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
				//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
			})
		}//B+++++
		Q(['me', 'chicks', 'guy'], function () {
			W()
			guy = w.i.qB('chicks', 300, 300)
			me = w.i.qB('me')
			w0 = $Tw(guy, 200, [{r: 3000}, 100000])
			$Tw(me,
					[{sx: 3}, 1000])
					.wait(1000)
					.pause(w0)
					.then({sy: 3}, 4000)
					.play(w0)
					.then({sy: .3},
					4000)
			/*     .wait(1000).pause(w0).then({sy:3}, 4000)
			 .play(w0).then({sy:.3},4000)
			
			
			 tw =$Tw(
			 w.i.qB('me'),
			 [{sx:2,sy:2}, 3000],
			 [{a:0},300],
			 1000,
			 function(){$Tw(w.i.qB('chicks').spin(),
			 [{sxy:.2}, 2000])
			 }
			
			 )
			
			 */
			//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
			//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
		})
	}//B+++++}
}
function spin(){
	POPSPIN = function () {
		angle = 0
		img = $.img('me', handleImageLoad)[0]
		function stop() {
			cjs.Ticker.removeEventListener("tick", tick)
		}
		
		function handleImageLoad() {
			canvas = $.c('p', 960, 400).id("testCanvas").A()
			stage = $St(canvas)
			stage.autoClear = true;
			bmp = new cjs.Bitmap(img)
					.rXY(img.width >> 1, img.height >> 1)
					.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
			stage.A(bmp).update();
			cjs.Ticker.timingMode = cjs.Ticker.RAF
			cjs.tick(tick)
		}
		
		function tick(event) {
			angle += 0.01
			var value = Math.sin(angle) * 360
			bmp.rt(value).sXY(value / 360)
			stage.update(event)
		}
	}
	
	$Ldr('TIMSPIN', function () {
		$St().qB('guy').scXY(.5, .3).XY(300, 300).spin()
		_.in(3, function () {
			T.f(1)
		});
		_.in(9, function () {
			T.f(1000)
		})
	})
	
	CJSSPINNER = function () {
		z()
		s = cjs.stage('purple', 1000).A().rCenter()
		cjs.tween(s, [{r: -10000}, 300000])
		s.bm('me', function (bm) {
			m = bm.XY(500)
			SL(bm)
		})
		s.A(r = cjs.rectangle(400, 400, 'orange', 'red').XY(1200))
		s.A(r2 = cjs.rectangle(300, 300, 'pink', 'red').XY(800))
		s.A(r3 = cjs.rectangle(300, 300, 'green', 'green').XY(0))
	}
}
function needsWorld() {
	TWEENER = NEEDSWORLD = function () {
		TWEENER = function () {
			z()
			s = createjs.stage(500).tick().A()
			s.bm('me', function (bm) {
				s.bm('guy', function (guy) {
					g = guy
					b = bm
					tween = cjs.tween(bm,
							//pass in objects and they are 'to', 'to', etc..
							[{sx: 2, sy: 2}, 3000], [{a: 0}, 300],
							//make it wait
							1000,
							//pass in a function and it will run when it's its turn
							function () {
								s.bm('chicks', function (b) {
									cjs.tween(b, [{sxy: .2}, 2000])
								})
							}
					).then({x: 200}, 1000).to({alpha: 1, visible: true}, 30000)
					tween3 = cjs.tween(g, [{r: 20}, 10000], [{r: 0}, 3000])
					stop = function () {
						tween.stop();
						tween2.stop()
					}
				})
			})
		}
		TWEENER = function () {
			Q(['me', 'chicks', 'guy'], function () {
				W()
				guy = w.i.qB('chicks', 300, 300)
				me = w.i.qB('me')
				w0 = $Tw(guy, 200, [{r: 3000}, 100000])
				$Tw(me,
						[{sx: 3}, 1000])
						.wait(1000)
						.pause(w0)
						.then({sy: 3}, 4000)
						.play(w0)
						.then({sy: .3},
						4000)
				/*     .wait(1000).pause(w0).then({sy:3}, 4000)
				 .play(w0).then({sy:.3},4000)
				
				
				 tw =$Tw(
				 w.i.qB('me'),
				 [{sx:2,sy:2}, 3000],
				 [{a:0},300],
				 1000,
				 function(){$Tw(w.i.qB('chicks').spin(),
				 [{sxy:.2}, 2000])
				 }
				
				 )
				
				 */
				//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
				//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
			})
		}//B+++++
		Q(['me', 'chicks', 'guy'], function () {
			W()
			guy = w.i.qB('chicks', 300, 300)
			me = w.i.qB('me')
			w0 = $Tw(guy, 200, [{r: 3000}, 100000])
			$Tw(me,
					[{sx: 3}, 1000])
					.wait(1000)
					.pause(w0)
					.then({sy: 3}, 4000)
					.play(w0)
					.then({sy: .3},
					4000)
			/*     .wait(1000).pause(w0).then({sy:3}, 4000)
			 .play(w0).then({sy:.3},4000)
			
			
			 tw =$Tw(
			 w.i.qB('me'),
			 [{sx:2,sy:2}, 3000],
			 [{a:0},300],
			 1000,
			 function(){$Tw(w.i.qB('chicks').spin(),
			 [{sxy:.2}, 2000])
			 }
			
			 )
			
			 */
			//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
			//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
		})
	}//B+++++
	WAPTWEEN = NEEDSWORLD = function (a) {
		WAPTWEEN = function (a) {
//combo/complex/anim/tween
			//wMs looks like it makes/appends a stage, gives it a bitmap
			//based on your mug, and pass it to a callback
			Q(['me', 'chicks', 'guy'], function () {
				W()
				me = w.i.qB('me')
				$Tw(
						[me, 'l'],
						{x: 0, sxy: .7, r: 0},
						[{x: 300, sxy: 2.3, r: 0}, 1000],
						[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
				)
				TR(me)
				$Tw([me, 'l'],
						{x: 0, sxy: .7, r: -2},
						[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
						[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
						[{rx: 100}, 1000],
						[{ry: 100}, 1000],
						[{r: 50, x: 1400, y: 300}, 3000],
						[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
						[{r: 100, x: 300, ky: -100}, 1000],
						[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
						[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
						[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
			})
			//$.ev(2, function(){ tweens.rpunch(g) } )
		}//B+++++
//combo/complex/anim/tween
		//wMs looks like it makes/appends a stage, gives it a bitmap
		//based on your mug, and pass it to a callback
		Q(['me', 'chicks', 'guy'], function () {
			W()
			me = w.i.qB('me')
			$Tw(
					[me, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			)
			TR(me)
			$Tw([me, 'l'],
					{x: 0, sxy: .7, r: -2},
					[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
					[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
					[{rx: 100}, 1000],
					[{ry: 100}, 1000],
					[{r: 50, x: 1400, y: 300}, 3000],
					[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
					[{r: 100, x: 300, ky: -100}, 1000],
					[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
					[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
					[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
		})
		//$.ev(2, function(){ tweens.rpunch(g) } )
	}//B+++++
	TWEENBALLS = function () {
		TWEENBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				w.p(0, 0, 10).stat()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 30)
				})
				w.$$(function () {
					_.t(8, function () {
						var b = w.D(R(100, 50), R(100, 50), 'b', 30)
						b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
					})
				})
				w.i.T(200, 100, '$$ me')
			})
		}//world//A-----
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}//world//A-----}
}