cjs.Filter.prototype.bd = cjs.Filter.prototype.b = function () {
	var bd = this.getBounds()
	bd.w = bd.width
	bd.h = bd.height
	return bd
}
/*

 AlphaMapFilter : Map a greyscale image to the alpha channel of a display object
 AlphaMaskFilter: Map an image's alpha channel to the alpha channel of a display object
 BlurFilter: Apply vertical and horizontal blur to a display object
 ColorFilter: Color transform a display object
 ColorMatrixFilter: Transform an image using a ColorMatrix

 */
dO.aFl = function (fl) {
	var dO = this
	dO.filters = dO.filters || []
	dO.filters.push(fl)
	return dO
}
dO.gFl = function () {
	this.filters = this.filters || []
	return _.l(this.filters)
}
dO.fl = dO.Fl = function (fl, i) {
	var dO = this, g = G(arguments)
	if (g.A) {
		return dO.fl.apply(dO, g.f)
	}
	dO.filters = dO.filters || []
	if (U(fl)) {
		return _.l(dO.filters)
	}
	if (N(fl)) {
		return dO.filters[fl]
	} // filters are only displayed when the display object is cached
	// later, you can call updateCache() to update changes to your filters
	//	_.e(g, function (fl) {dO._fl(fl)}) 
	if (O(fl)) {
		dO.filters.push(fl)
	} //if (O(i)) {dO.ca(i)}
	//if (!g.n) {i = dO.image;dO.ca(0, 0, i.width, i.height)}
	return dO
}
dO.flBds = function () {
	return this.gFl().getBounds()
}
passTest = function (g) {
	return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
}
toObImg = function (i) {
	return $(i.image ? i.image : i)[0]
}
toImg = function (i) {
	return i.image ? i.image : $(i)[0];
}
updateCacheImage = function (upd) {
	if (upd) {
		h.updateCache()
	}
	else {
		h.ca(0, 0, i.width, i.height)
	}
	mskF = new cjs.AlphaMaskFilter(st.cacheCanvas)
	bm.filters = [mskF]
	if (upd) {
		bm.ca(i)
	}
	else {
		bm.ca(i)
	}
	st.u()
}
$L('alphaMapFilter', 'alphaMaskFilter', 'colorMatrixFilter', 
'colorFilter', 'blurFilter', 'cache', 'grad')
function alphaMapFilter() {
	dO.alMapFl = dO.aMF = function (a, b, c, d, e, f, g, h) {
		var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
	$AlMapFl = function (a, b, c, d, e) {
//Map a greyscale image to the alpha channel of a display object
		return new cjs.AlphaMapFilter(a, b, c, d, e)
	}
}
function alphaMaskFilter() {
	$AlMaskFl = function (a, b, c, d, e) {
		forMaskFilter = function trx(n) {
			var g = G(arguments)
			var a = []
			//for making mask filter
			if (g.n) {
				return 'rgba(0,0,0,' + g[0] || 0 + ')'
			}
			_.e(g, function (n) {
				a.push(trx(n, '-'))
			})
			return a
		}
		//Map an image's alpha channel to the alpha channel of a display object
		var fl//return new cjs.AlphaMaskFilter(a, b, c, d, e)
		if (O(a) && a.cacheCanvas) {
			a = a.cacheCanvas
		}
		fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
		return fl
	}
	dO.alMaskFl = dO.aF = function (a, b, c, d, e, f, g, h) {
		dO_aF = function (h) {
			var ob = this
			ob.fl($AlMaskFl(h))
			return ob
		}
		var bf
		bf = $AlMaskFl(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
	dO.aF2 = function (h) {
		var ob = this
		this.fl2($AlMaskFl(h))
		return ob
	}
}
function colorFilter() {
	$ColFl = function (a, b, c, d, e, f, g, h) {
		return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
	}
	dO.colFl = function (a, b, c, d, e, f, g, h) {
		var cf = $ColFl(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(cf)
		return cf
	}
}
function blurFilter() {
	_$BlurFl = _$Bfl = function (x, y, q) {
		return new cjs.BlurFilter(x, y, q)
	}
	$BlurFl = function () {
		var g = G(arguments), fl, o
		o = {x: g.f, y: g.s, q: g.t}
		o.y = N(o.y) ? o.y : o.x
		o.q = o.q || 1
		return _$Bfl(o.x, o.y, o.q)
	}
	dO.blurFl = dO.blFl = function (a, b, c, d, e, f, g, h) {
		var bf
		bf = $BlurFl(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
}
function colorMatrixFilter() {
	colorMatrix()
	function colorMatrix() {
		cM = cjs.ColorMatrix.prototype
		var m = cM
		cM.s = function (s) {
			this.adjustSaturation(s)
			return this
		}
		cM.h = function (c) {
			this.adjustHue(c)
			return this
		}
		cM.b = function (c) {
			this.adjustBrightness(c)
			return this
		}
		cM.co = function (c) {
			this.adjustContrast(c)
			return this
		}
		cM.c = m.adjustColor
		cM.cl = m.clone
		cM.cc = m.concat
		cM.m = m.copyMatrix
		cM.r = m.reset
		cM.A = m.toArray
		cM.S = m.toString
		$ColMx = _$ColMx = function (a, b, c, d) {
			return new cjs.ColorMatrix(a, b, c, d)
		}
		//$ColMx = function (a, b, c, d) {return _$ColMxFl(O(a) ? a : $ColMx(a, b, c, d))}
	}
	
	$ColMxFl = function (m) {
		var g = G(arguments)
		var colMxFl = new cjs.ColorMatrixFilter(m)
		return colMxFl
	}
	dO.colMxFl = function (cM) {
		this.filters = this.filters || []
		var cf = $ColMxFl(cM)
		this.filters.push(cf)
		return cf
	}
}
function cache() {
	dO.uCx = dO.updateContext
	dO.caCv = dO.cC = dO.cc = function () {
		return this.cacheCanvas
	}
	dO.gCDU = function (ca) {
		return this.getCacheDataURL(ca)
	}
	dO.uCa = dO.updCa = function (ca) {
		this.updateCache(ca);
		return this
	}
	dO.uc = dO.uncache = function (ca) {
		this.uncache(ca);
		return this
	}
	dO.__ca = function () {
		this.cache.apply(this, arguments);
		return this
	}
	dO._ca = function (x, y, w, h) {
		var dO = this
		x = N(x, 0)
		y = N(y, 0)
		w = N(w, dO.width)
		h = N(h, dO.height)
		dO.__ca(x, y, w, h)
		return dO
	}
	dO.ca = function () {
		var dO = this, g = G(arguments), o
		var st = dO.getStage()
		var op
		if (!g.n && !g.p && O(dO.image)) {
			dO._ca($(dO.image)[0])
		}
		if (passTest(g)) {
			op = g.f;
			dO.updCa(op);
			return dO
		}
		o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
		{x: g.f, y: g.s, w: g.t, h: g.f} :
				N(g.s) ? {w: g.f, h: g.s} : {}
		if (O(o.i)) {
			o.i = toImg(o.i)
			dO = toObImg(dO)
			if (!g.n) {
				dO._ca()
			}
		}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
				st ? st.W() : 0)
		o.h = N(o.h) ? o.h :
				O(o.i) ? o.i.height :
						st ? st.H() : 0
		return dO._ca(o.x, o.y, o.w, o.h)
	}
}
function mugFl() {
	MUGFL1 = function () {
		s = $St()
		s.mug(function (b) {
			b.XY(-100, -50)
			b.cc()
			b.clMF('a', '+')
			b.clMF('w', '+')
			cjs.bindSlide(b)
		})
		wMb(function (b) {
			b.xy(400, 0).cc()
			SL(b)
			b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
					.dr0(400).H().cc(400).cc('*'))
			]).cc(400)
		}, s)
		wMb(function (b) {
			b.xy(100, 300).cc()
			SL(b)
			b.cc().fl([
				clF(.3, 1, .3, 1, 0, 0, 0, 0)
			]).cc('+')
		}, s)
		wMb(function (b) {
			var ag = 0, rg = 20, sp = 0.04;
			b.xy(500, 300).cc();
			SL(b)
			//this has gotta just mean 'on tick'
			tt(function (e) {
				v = sin(ag += sp) * rg;
				b.cc('+').fl([blF(v, v, 2)])
			})
		}, s)
	}
	MUGFL = function () {
		$St()
		s.mug(function (b) {
			bb = b
			b.XY(-100, -50)
			b.cache(0, 0, b.W(), b.H())
			cM = new cjs.ColorMatrix()
			cM.adjustHue(-180)
			cM.adjustSaturation(100)
			cM.adjustBrightness(300)
			cM.adjustContrast(-600)
			b.filters = cM
			b.updateCache()
			cjs.bindSlide(b)
		})
	}
}
manyFilters = BLOB = function () {//https://www.youtube.com/watch?v=mU1JcPikdMs
	img = new Image();
	img.onload = handleImageLoad;
	img.src = "/me.png";
	function handleImageLoad() {
		$.c().id('testCanvas')
		var canvas = document.getElementById("testCanvas");
		// create a new stage and point it at our canvas:
		stage = new cjs.Stage(canvas);
		var bmp = new cjs.Bitmap(img).set({scaleX: 0.5, scaleY: 0.5});
		stage.addChild(bmp);
		var colorMatrix = new cjs.ColorMatrix();
		colorMatrix.adjustSaturation(-100);
		colorMatrix.adjustContrast(50);
		var blackAndWhiteFilter = new cjs.ColorMatrixFilter(colorMatrix);
		bmp = bmp.clone();
		// filters are only displayed when the display object is cached
		// later, you can call updateCache() to update changes to your filters
		bmp.filters = [blackAndWhiteFilter];
		bmp.cache(0, 0, img.width, img.height);
		bmp.x = 480;
		stage.addChild(bmp);
		var blurFilter = new cjs.BlurFilter(64, 0, 1);
		bmp = bmp.clone();
		bmp.filters = [blurFilter];
		bmp.cache(0, 0, img.width, img.height);
		bmp.y = 200;
		stage.addChild(bmp);
		var removeRedFilter = new cjs.ColorFilter(0.25, 0.75, 1, 1); // red, green, blue, alpha
		bmp = bmp.clone();
		bmp.filters = [removeRedFilter];
		bmp.cache(0, 0, img.width, img.height);
		bmp.x = 0;
		stage.addChild(bmp);
		var frame = new cjs.Shape();
		frame.graphics.setStrokeStyle(10).beginStroke("#000")
				.moveTo(480, 0).lineTo(480, 400)
				.moveTo(0, 200).lineTo(960, 200);
		frame.compositeOperation = "destination-out"; // punch the frame out.
		stage.addChild(frame);
		// draw to the canvas:
		stage.update();
	}
}
blurFilter = BLR = BLFL = function () {//http://jsfiddle.net/lannymcnie/BRrm5/
	BLRFL1 = BLURFILT = function () {
		st = $St('z', 800)
		h = $H().XY(100).a2(st).f('r').dc(50)
		fl = h.fl($BlurFl(50, 50, 10))
		bd = fl.getBounds()
		h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.width, 100 + bd.height)
		/*
		 h.startMoving()
		 h.vx = 1
		 h.vy = 1
		 */
	}
	BLRFL2 = function () {
		Q(function () {
			st = $St().t()
			h = st.h(100, 100, 'r').cir(50)
			_.in(1, function () {
				h.colFl(0, 0, 0, 1, 0, 0, 255, 0)
				h.ca(-50, -50, 100, 150)
			})
			_.in(2, function () {
				f = h.blFl(59, 59, 1)
				bd = f.b()
				h.ca(-50 + bd.x,
						-50 + bd.y,
						100 + bd.w,
						100 + bd.h)
			})
		})
	}
	BLRFL3 = function () {
		$St().bm('me', function (bm) {
			bm.dg()
			bm.alMapFl(_$BlurFl(20, 10))
			var b = bm.flBds()
			bm.cache(b.x - 50, b.y - 50, b.width + 400, b.height + 400)
		})
	}
	$.c().id('test').C('z')
	var stage = new cjs.Stage("test");
	var s = new cjs.Shape();
	var g = s.graphics;
	g.f("#FF0000").dc(0, 0, 75);
	s.x = 100;
	s.y = 100;
	s.filters = [new cjs.BlurFilter(65, 25, 3)];
	stage.addChild(s);
	s.cache(-100, -100, 200, 200);
	s.alpha = 0.5;
	stage.update();
}
blurFilter = ANIMBLUR = function () {
//http://www.olivierpons.fr/cjs/EaselJS-master/examples/Filters_simple.html
	var img;
	var stage;
	var angle;
	var canvas;
	var range;
	var speed;
	angle = 0;
	range = 30;
	speed = 0.1;
	img = new Image();
	img.onload = handleImageLoad;
	img.src = "/me.png";
	function handleImageLoad() {
		$.c().id('testCanvas')
		canvas = document.getElementById("testCanvas");
		stage = new cjs.Stage(canvas);
		bmp = new cjs.Bitmap(img);
		bmp.cache(0, 0, img.width, img.height);
		stage.addChild(bmp);
		cjs.Ticker.setFPS(15);
		cjs.Ticker.addEventListener("tick", tick);
	}
	
	function tick(event) {
		angle += speed;
		var value = Math.sin(angle) * range;
		bmp.updateCache();
		bmp.filters = [new cjs.BlurFilter(value, value, 2)];
		stage.update(event);
	}
}
colorFilter = CLFL = function () {
	COLF1 = function () {
		shape = new cjs.Shape().set({x: 100, y: 100});
		shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
		shape.filters = [$ColFl(0, 0, 0, 1, 0, 0, 255, 0)]
		shape.cache(-50, -50, 100, 100);
		$St().A(shape)
	}
//https://jsfiddle.net/mcfarljw/J4S3Z/
	$.c().id('demo').C('y')
	st = stage = new cjs.Stage("demo");
	$.i('me', function (i) {
		
		// shape.cache(-50, -50, 100, 100)
		var bmp = new cjs.Bitmap(i).X(100).Y(100)
		bmp.filters = [
			$ColFl(0, 0, 0, 1, 0, 0, 255, 0)
		]
		bmp.dg()
		bmp.cache(-200, -250, 600, 600)
		st.addChild(bmp);
	})
	cjs.Ticker.addEventListener('tick', tick);
	var container = new cjs.Container();
	var stroke = new cjs.Shape();
	stroke.graphics.f("black").p("AAeAKYgeAUAAAAAAAoYAAAoAKAeAoA8YAyBaAeBGAeBuYAUBGAAA8AKFKYAADcAKDSAAAoYAAAyAAD6gKD6YAAD6gKFeAAC0YAAH0geEOhkFKYgoCWAABkAyCCYBQDSAoA8AyAAYAyAABaigAKhaYAKgoAAqoAAsqYAKsgAAraAAhaYAKkYAyk2Ayh4YAKgeAKgoAAgUYAAgegKgKgygoYhQg8i+h4gogKYgygKgoAAgoAK").cp().ef();
	container.addChild(stroke);
	stage.addChild(container);
	stage.update();
	cjs.Tween.get(stroke).to({
		x: 500
	}, 2000).addEventListener("change", handleChange);
	function handleChange() {
		console.log('changing');
		if (container.cacheCanvas)
			container.updateCache();
	}
	
	setTimeout(function () {
		container.filters = [new cjs.ColorFilter(0, 0, 0, 1, 230, 142, 142, 1)];
		container.cache(0, 0, 600, 600);
	}, 1000);
	console.log(container);
	function tick() {
		stage.update();
	}
}
colorMatrixFilter = GREY = CLMXFL = function () {
	$St().bm('me', function (bm) {
		bm.dg()
		var matrix = $ColMx()
				.adjustHue(180)
				.adjustSaturation(-100);
		bm.filters = [
			$ColMxFl(matrix)
		]
		bm.cache(-200, -200, 800, 800);
	})
}
alphaMapFIlter = MAPF = ALMAPFL = function () {
	$St()
	$.i('me', function (i) {
		var box = new cjs.Shape();
		box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100)
		box.graphics.drawRect(0, 0, 100, 100);
		box.cache(0, 0, 100, 100);
		var bmp = new cjs.Bitmap(i);
		bmp.filters = [
			$AlMapFl(box.cacheCanvas)
		]
		bmp.cache(0, 0, 100, 100);
		st.addChild(bmp)
	})
}
   
AMR = alphaMaskFilter = ALMSFL = ALPHAMASKREVEAL = function () {
	
	/*
	
	 This example demonstrates revealing an image using another image as the
	 mask. The mask is created by drawing a
	 shape, and then caching the shape to make an image with an alpha
	 channel. It is then applied to the image as
	 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
	
	 */
	cjs.testCanvas()//  cjs.sharedCode()
	var st, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
			image, bm, maskFilter, cursor, text, blur
	examples.showDistractor()
	image = new Image();
	image.onload = handleComplete
	image.src = "/chicks.png"
	st = $St("testCanvas");
	text = $Tx("Loading...", "20px Arial", "#FFF")
	text.set({x: st.canvas.width / 2, y: st.canvas.height - 40})
	text.textAlign = "center"
	function handleComplete() {
		examples.hideDistractor()
		cjs.Touch.enable(st)
		st.enableMouseOver()
		st.on("stagemousedown", handleMouseDown)
		st.on("stagemouseup", handleMouseUp)
		st.on("stagemousemove", handleMouseMove)
		drawingCanvas = $h()
		bm = $Bm(image)
		blur = $Bm(image)
		blur.filters = [$BlurFl(24, 24, 2), $ColMxFl($ColMx(60))]
		blur.cache(0, 0, 960, 400)
		text.text = "Click and Drag to Reveal the Image."
		st.A(blur, text, bm)
		updateCacheImage(false)
		cursor = $H($Gx().f("#FFFFFF").dc(0, 0, 25))
		cursor.cursor = "pointer"
		st.A(cursor)
	}
	
	function handleMouseDown(event) {oldPt = new cjs.Point(st.mouseX, st.mouseY);oldMidPt = oldPt;isDrawing = true}
	
	function handleMouseMove(event) {
		cursor.x = st.mouseX;cursor.y = st.mouseY
		if (!isDrawing) {st.update();return}
		var midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
		drawingCanvas.graphics.ss(40, "round", "round")
				.s("rgba(0,0,0,0.2)")
				.moveTo(midPoint.x, midPoint.y)
				.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
		oldPt.x = st.mouseX;oldPt.y = st.mouseY;
		oldMidPt.x = midPoint.x;oldMidPt.y = midPoint.y;
		updateCacheImage(true)}
	
	
	function handleMouseUp(event) {updateCacheImage(true);isDrawing = false}
	
	function updateCacheImage(update) {
		if (update) {drawingCanvas.updateCache()} 

		else {drawingCanvas.cache(0, 0, image.width, image.height)}
		maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas)
		
		bm.filters = [maskFilter]
		
		if (update) {bm.updateCache(0, 0, image.width, image.height)}
		else {bm.cache(0, 0, image.width, image.height)}
		
		st.update()
	}
}