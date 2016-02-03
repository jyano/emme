 
 function spriteSheetPt(){//methods
	 sS.cl = function () {
		 return this.clone.apply(this, arguments)
	 }
	 sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
		 return this.getAnimation.apply(this, arguments)
	 }
	 sS.fr = sS.getFr = function () {
		 return this.getFrame.apply(this, arguments)
	 }
	 sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
		 return this.getFrameBounds.apply(this, arguments)
	 }
	 sS.numFr = function () {
		 return this.getNumFrames.apply(this, arguments)
	 }
//Properties
	 sS.ans = sS.anims = function () {
		 return this.animations
	 }
	 sS.iC = function () {
		 return this.complete
	 }
	 sS.fR = sS.rate = sS.r = function (rate) {
		 var sS = this
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
//Events
	 sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
		 var sS = this
		 sS.on('complete', fn)
		 return sS
	 }
	 sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
		 /*
		
		  'getframe' event:
		  Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
		  Event Payload:
		
		  index Number
		  The frame index.
		  frame Object
		  The frame object that getFrame will return.
		  */
		 var sS = this
		 sS.on('getframe', fn)
		 return sS
	 }
//other:
	 sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
		 var sS = this
		 a = a || true
		 b = b || false
		 c = c || false
		 $SSU.aFF(sS, a, b, c)
		 return sS
	 }
	 sS = cjs.SpriteSheet.prototype
//methods
	 sS.cl = function () {
		 return this.clone.apply(this, arguments)
	 }
	 sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
		 return this.getAnimation.apply(this, arguments)
	 }
	 sS.fr = sS.getFr = function () {
		 return this.getFrame.apply(this, arguments)
	 }
	 sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
		 return this.getFrameBounds.apply(this, arguments)
	 }
	 sS.numFr = function () {
		 return this.getNumFrames.apply(this, arguments)
	 }
//Properties
	 sS.ans = sS.anims = function () {
		 return this.animations
	 }
	 sS.iC = function () {
		 return this.complete
	 }
	 sS.fR = sS.rate = sS.r = function (rate) {
		 var sS = this
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
//Events
	 sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
		 var sS = this
		 sS.on('complete', fn)
		 return sS
	 }
	 sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
		 /*
		
		  'getframe' event:
		  Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
		  Event Payload:
		
		  index Number
		  The frame index.
		  frame Object
		  The frame object that getFrame will return.
		  */
		 var sS = this
		 sS.on('getframe', fn)
		 return sS
	 }
//other:
	 sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
		 var sS = this
		 a = a || true
		 b = b || false
		 c = c || false
		 $SSU.aFF(sS, a, b, c)
		 return sS
	 }
//methods
	 sS.cl = function () {
		 return this.clone.apply(this, arguments)
	 }
	 sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
		 return this.getAnimation.apply(this, arguments)
	 }
	 sS.fr = sS.getFr = function () {
		 return this.getFrame.apply(this, arguments)
	 }
	 sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
		 return this.getFrameBounds.apply(this, arguments)
	 }
	 sS.numFr = function () {
		 return this.getNumFrames.apply(this, arguments)
	 }
//Properties
	 sS.ans = sS.anims = function () {
		 return this.animations
	 }
	 sS.iC = function () {
		 return this.complete
	 }
	 sS.fR = sS.rate = sS.r = function (rate) {
		 var sS = this
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
//Events
	 sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
		 var sS = this
		 sS.on('complete', fn)
		 return sS
	 }
	 sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
		 /*
		
		  'getframe' event:
		  Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
		  Event Payload:
		
		  index Number
		  The frame index.
		  frame Object
		  The frame object that getFrame will return.
		  */
		 var sS = this
		 sS.on('getframe', fn)
		 return sS
	 }
//other:
	 sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
		 var sS = this
		 a = a || true
		 b = b || false
		 c = c || false
		 $SSU.aFF(sS, a, b, c)
		 return sS
	 }
//
	 sS = cjs.SpriteSheet.prototype
//methods
	 sS.cl = function () {
		 return this.clone.apply(this, arguments)
	 }
	 sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
		 return this.getAnimation.apply(this, arguments)
	 }
	 sS.fr = sS.getFr = function () {
		 return this.getFrame.apply(this, arguments)
	 }
	 sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
		 return this.getFrameBounds.apply(this, arguments)
	 }
	 sS.numFr = function () {
		 return this.getNumFrames.apply(this, arguments)
	 }
//Properties
	 sS.ans = sS.anims = function () {
		 return this.animations
	 }
	 sS.iC = function () {
		 return this.complete
	 }
	 sS.fR = sS.rate = sS.r = function (rate) {
		 var sS = this
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
//Events
	 sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
		 var sS = this
		 sS.on('complete', fn)
		 return sS
	 }
	 sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
		 /*
		
		  'getframe' event:
		  Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
		  Event Payload:
		
		  index Number
		  The frame index.
		  frame Object
		  The frame object that getFrame will return.
		  */
		 var sS = this
		 sS.on('getframe', fn)
		 return sS
	 }
//other:
	 sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
		 var sS = this
		 a = a || true
		 b = b || false
		 c = c || false
		 $SSU.aFF(sS, a, b, c)
		 return sS
	 }
	 cjs.SS = cjs.SpriteSheet
	 sS = cjs.SS.prototype
	 sS = cjs.SpriteSheet.prototype
//methods
	 sS.cl = function () {
		 return this.clone.apply(this, arguments)
	 }
	 sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
		 return this.getAnimation.apply(this, arguments)
	 }
	 sS.fr = sS.getFr = function () {
		 return this.getFrame.apply(this, arguments)
	 }
	 sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
		 return this.getFrameBounds.apply(this, arguments)
	 }
	 sS.numFr = function () {
		 return this.getNumFrames.apply(this, arguments)
	 }
//Properties
	 sS.ans = sS.anims = function () {
		 return this.animations
	 }
	 sS.iC = function () {
		 return this.complete
	 }
	 sS.fR = sS.rate = sS.r = function (rate) {
		 var sS = this
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
//Events
	 sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
		 var sS = this
		 sS.on('complete', fn)
		 return sS
	 }
	 sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
		 /*
		
		  'getframe' event:
		  Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
		  Event Payload:
		
		  index Number
		  The frame index.
		  frame Object
		  The frame object that getFrame will return.
		  */
		 var sS = this
		 sS.on('getframe', fn)
		 return sS
	 }
//other:
	 sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
		 var sS = this
		 a = a || true
		 b = b || false
		 c = c || false
		 $SSU.aFF(sS, a, b, c)
		 return sS
	 }
//methods
	 sS.cl = function () {
		 return this.clone.apply(this, arguments)
	 }
	 sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
		 return this.getAnimation.apply(this, arguments)
	 }
	 sS.fr = sS.getFr = function () {
		 return this.getFrame.apply(this, arguments)
	 }
	 sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
		 return this.getFrameBounds.apply(this, arguments)
	 }
	 sS.numFr = function () {
		 return this.getNumFrames.apply(this, arguments)
	 }
//Properties
	 sS.ans = sS.anims = function () {
		 return this.animations
	 }
	 sS.iC = function () {
		 return this.complete
	 }
	 sS.fR = sS.rate = sS.r = function (rate) {
		 var sS = this
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
//Events
	 sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
		 var sS = this
		 sS.on('complete', fn)
		 return sS
	 }
	 sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
		 /*
		
		  'getframe' event:
		  Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
		  Event Payload:
		
		  index Number
		  The frame index.
		  frame Object
		  The frame object that getFrame will return.
		  */
		 var sS = this
		 sS.on('getframe', fn)
		 return sS
	 }
//other:
	 sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
		 var sS = this
		 a = a || true
		 b = b || false
		 c = c || false
		 $SSU.aFF(sS, a, b, c)
		 return sS
	 }}
	utils()
	builder()
function utils() {
	$SSU = cjs.SSU = cjs.sSU = cjs.SpriteSheetUtils
	$SSU.aFF = function () {
		/*
		 addFlippedFrames ( spriteSheet  horizontal  vertical  both ) deprecated static
		 Defined in addFlippedFrames:76
		 Deprecated: Modern browsers perform better when flipping via a transform (ex. scaleX=-1) rendering this obsolete.
		 This is an experimental method, and may be buggy. Please report issues.
		
		 Extends the existing sprite sheet by flipping the original frames horizontally, vertically, or both, and adding appropriate animation & frame data. The flipped animations will have a suffix added to their names (_h, _v, _hv as appropriate). Make sure the sprite sheet images are fully loaded before using this method. 
		
		 For example:
		 SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true); The above would add frames that are flipped horizontally AND frames that are flipped vertically. 
		
		 Note that you can also flip any display object by setting its scaleX or scaleY to a negative value. On some browsers (especially those without hardware accelerated canvas) this can result in slightly degraded performance, which is why addFlippedFrames is available.
		 Parameters:
		
		 spriteSheet SpriteSheet
		 horizontal Boolean
		 If true, horizontally flipped frames will be added.
		 vertical Boolean
		 If true, vertically flipped frames will be added.
		 both Boolean
		 If true, frames that are flipped both horizontally and vertically will be added.
		
		 */
		$SSU.addFlippedFrames.apply($SSU, arguments)
	}
	$SSU.exFr = function () {
		/*
		
		 extractFrame ( spriteSheet  frameOrAnimation ) HTMLImageElement static
		 Defined in extractFrame:106
		 Returns a single frame of the specified sprite sheet as a new PNG image. An example of when this may be useful is to use a spritesheet frame as the source for a bitmap fill.
		 WARNING: In almost all cases it is better to display a single frame using a Sprite with a gotoAndStop call than it is to slice out a frame using this method and display it with a Bitmap instance. You can also crop an image using the Bitmap/sourceRect property of Bitmap.
		 The extractFrame method may cause cross-domain warnings since it accesses pixels directly on the canvas.
		 Parameters:
		
		 spriteSheet SpriteSheet
		 The SpriteSheet instance to extract a frame from.
		 frameOrAnimation Number | String
		 The frame number or animation name to extract. If an animation name is specified, only the first frame of the animation will be extracted.
		 Returns:
		
		 HTMLImageElement: a single frame of the specified sprite sheet as a new PNG image.
		 */
		return this.exactFrame.apply(this, arguments)
	}
	$SSU.mer = function () {
		/*
		
		
		 mergeAlpha ( rbgImage  alphaImage  canvas ) HTMLCanvasElement deprecated static
		 Defined in mergeAlpha:139
		 Deprecated: Tools such as ImageAlpha generally provide better results. This will be moved to sandbox in the future.
		 Merges the rgb channels of one image with the alpha channel of another. This can be used to combine a compressed JPEG image containing color data with a PNG32 monochromatic image containing alpha data. With certain types of images (those with detail that lend itself to JPEG compression) this can provide significant file size savings versus a single RGBA PNG32. This method is very fast (generally on the order of 1-2 ms to run).
		 Parameters:
		
		 rbgImage HTMLImageElement
		 The image (or canvas) containing the RGB channels to use.
		 alphaImage HTMLImageElement
		 The image (or canvas) containing the alpha channel to use.
		 canvas HTMLCanvasElement
		 Optional. If specified, this canvas will be used and returned. If not, a new canvas will be created.
		 Returns:
		
		 HTMLCanvasElement: A canvas with the combined image data. This can be used as a source for Bitmap or SpriteSheet.
		 */
		return this.merge.apply(this, arguments)
	}
//
	$SSU.aFF = function () {
		/*
		 addFlippedFrames ( spriteSheet  horizontal  vertical  both ) deprecated static
		 Defined in addFlippedFrames:76
		 Deprecated: Modern browsers perform better when flipping via a transform (ex. scaleX=-1) rendering this obsolete.
		 This is an experimental method, and may be buggy. Please report issues.
		
		 Extends the existing sprite sheet by flipping the original frames horizontally, vertically, or both, and adding appropriate animation & frame data. The flipped animations will have a suffix added to their names (_h, _v, _hv as appropriate). Make sure the sprite sheet images are fully loaded before using this method. 
		
		 For example:
		 SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true); The above would add frames that are flipped horizontally AND frames that are flipped vertically. 
		
		 Note that you can also flip any display object by setting its scaleX or scaleY to a negative value. On some browsers (especially those without hardware accelerated canvas) this can result in slightly degraded performance, which is why addFlippedFrames is available.
		 Parameters:
		
		 spriteSheet SpriteSheet
		 horizontal Boolean
		 If true, horizontally flipped frames will be added.
		 vertical Boolean
		 If true, vertically flipped frames will be added.
		 both Boolean
		 If true, frames that are flipped both horizontally and vertically will be added.
		
		 */
		$SSU.addFlippedFrames.apply($SSU, arguments)
	}
	$SSU.exFr = function () {
		/*
		
		 extractFrame ( spriteSheet  frameOrAnimation ) HTMLImageElement static
		 Defined in extractFrame:106
		 Returns a single frame of the specified sprite sheet as a new PNG image. An example of when this may be useful is to use a spritesheet frame as the source for a bitmap fill.
		 WARNING: In almost all cases it is better to display a single frame using a Sprite with a gotoAndStop call than it is to slice out a frame using this method and display it with a Bitmap instance. You can also crop an image using the Bitmap/sourceRect property of Bitmap.
		 The extractFrame method may cause cross-domain warnings since it accesses pixels directly on the canvas.
		 Parameters:
		
		 spriteSheet SpriteSheet
		 The SpriteSheet instance to extract a frame from.
		 frameOrAnimation Number | String
		 The frame number or animation name to extract. If an animation name is specified, only the first frame of the animation will be extracted.
		 Returns:
		
		 HTMLImageElement: a single frame of the specified sprite sheet as a new PNG image.
		 */
		return this.exactFrame.apply(this, arguments)
	}
	$SSU.mer = function () {
		/*
		
		
		 mergeAlpha ( rbgImage  alphaImage  canvas ) HTMLCanvasElement deprecated static
		 Defined in mergeAlpha:139
		 Deprecated: Tools such as ImageAlpha generally provide better results. This will be moved to sandbox in the future.
		 Merges the rgb channels of one image with the alpha channel of another. This can be used to combine a compressed JPEG image containing color data with a PNG32 monochromatic image containing alpha data. With certain types of images (those with detail that lend itself to JPEG compression) this can provide significant file size savings versus a single RGBA PNG32. This method is very fast (generally on the order of 1-2 ms to run).
		 Parameters:
		
		 rbgImage HTMLImageElement
		 The image (or canvas) containing the RGB channels to use.
		 alphaImage HTMLImageElement
		 The image (or canvas) containing the alpha channel to use.
		 canvas HTMLCanvasElement
		 Optional. If specified, this canvas will be used and returned. If not, a new canvas will be created.
		 Returns:
		
		 HTMLCanvasElement: A canvas with the combined image data. This can be used as a source for Bitmap or SpriteSheet.
		 */
		return this.merge.apply(this, arguments)
	}
	//
	$SSU = cjs.SSU = cjs.sSU = cjs.SpriteSheetUtils
	$SSU.aFF = function () {
		/*
		 addFlippedFrames ( spriteSheet  horizontal  vertical  both ) deprecated static
		 Defined in addFlippedFrames:76
		 Deprecated: Modern browsers perform better when flipping via a transform (ex. scaleX=-1) rendering this obsolete.
		 This is an experimental method, and may be buggy. Please report issues.
		
		 Extends the existing sprite sheet by flipping the original frames horizontally, vertically, or both, and adding appropriate animation & frame data. The flipped animations will have a suffix added to their names (_h, _v, _hv as appropriate). Make sure the sprite sheet images are fully loaded before using this method. 
		
		 For example:
		 SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true); The above would add frames that are flipped horizontally AND frames that are flipped vertically. 
		
		 Note that you can also flip any display object by setting its scaleX or scaleY to a negative value. On some browsers (especially those without hardware accelerated canvas) this can result in slightly degraded performance, which is why addFlippedFrames is available.
		 Parameters:
		
		 spriteSheet SpriteSheet
		 horizontal Boolean
		 If true, horizontally flipped frames will be added.
		 vertical Boolean
		 If true, vertically flipped frames will be added.
		 both Boolean
		 If true, frames that are flipped both horizontally and vertically will be added.
		
		 */
		$SSU.addFlippedFrames.apply($SSU, arguments)
	}
	$SSU.exFr = function () {
		/*
		
		 extractFrame ( spriteSheet  frameOrAnimation ) HTMLImageElement static
		 Defined in extractFrame:106
		 Returns a single frame of the specified sprite sheet as a new PNG image. An example of when this may be useful is to use a spritesheet frame as the source for a bitmap fill.
		 WARNING: In almost all cases it is better to display a single frame using a Sprite with a gotoAndStop call than it is to slice out a frame using this method and display it with a Bitmap instance. You can also crop an image using the Bitmap/sourceRect property of Bitmap.
		 The extractFrame method may cause cross-domain warnings since it accesses pixels directly on the canvas.
		 Parameters:
		
		 spriteSheet SpriteSheet
		 The SpriteSheet instance to extract a frame from.
		 frameOrAnimation Number | String
		 The frame number or animation name to extract. If an animation name is specified, only the first frame of the animation will be extracted.
		 Returns:
		
		 HTMLImageElement: a single frame of the specified sprite sheet as a new PNG image.
		 */
		return this.exactFrame.apply(this, arguments)
	}
	$SSU.mer = function () {
		/*
		
		
		 mergeAlpha ( rbgImage  alphaImage  canvas ) HTMLCanvasElement deprecated static
		 Defined in mergeAlpha:139
		 Deprecated: Tools such as ImageAlpha generally provide better results. This will be moved to sandbox in the future.
		 Merges the rgb channels of one image with the alpha channel of another. This can be used to combine a compressed JPEG image containing color data with a PNG32 monochromatic image containing alpha data. With certain types of images (those with detail that lend itself to JPEG compression) this can provide significant file size savings versus a single RGBA PNG32. This method is very fast (generally on the order of 1-2 ms to run).
		 Parameters:
		
		 rbgImage HTMLImageElement
		 The image (or canvas) containing the RGB channels to use.
		 alphaImage HTMLImageElement
		 The image (or canvas) containing the alpha channel to use.
		 canvas HTMLCanvasElement
		 Optional. If specified, this canvas will be used and returned. If not, a new canvas will be created.
		 Returns:
		
		 HTMLCanvasElement: A canvas with the combined image data. This can be used as a source for Bitmap or SpriteSheet.
		 */
		return this.merge.apply(this, arguments)
	}
	$SSU = cjs.SSU = cjs.sSU = cjs.SpriteSheetUtils
	$SSU.aFF = function () {
		/*
		 addFlippedFrames ( spriteSheet  horizontal  vertical  both ) deprecated static
		 Defined in addFlippedFrames:76
		 Deprecated: Modern browsers perform better when flipping via a transform (ex. scaleX=-1) rendering this obsolete.
		 This is an experimental method, and may be buggy. Please report issues.
		
		 Extends the existing sprite sheet by flipping the original frames horizontally, vertically, or both, and adding appropriate animation & frame data. The flipped animations will have a suffix added to their names (_h, _v, _hv as appropriate). Make sure the sprite sheet images are fully loaded before using this method. 
		
		 For example:
		 SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true); The above would add frames that are flipped horizontally AND frames that are flipped vertically. 
		
		 Note that you can also flip any display object by setting its scaleX or scaleY to a negative value. On some browsers (especially those without hardware accelerated canvas) this can result in slightly degraded performance, which is why addFlippedFrames is available.
		 Parameters:
		
		 spriteSheet SpriteSheet
		 horizontal Boolean
		 If true, horizontally flipped frames will be added.
		 vertical Boolean
		 If true, vertically flipped frames will be added.
		 both Boolean
		 If true, frames that are flipped both horizontally and vertically will be added.
		
		 */
		$SSU.addFlippedFrames.apply($SSU, arguments)
	}
	$SSU.exFr = function () {
		/*
		
		 extractFrame ( spriteSheet  frameOrAnimation ) HTMLImageElement static
		 Defined in extractFrame:106
		 Returns a single frame of the specified sprite sheet as a new PNG image. An example of when this may be useful is to use a spritesheet frame as the source for a bitmap fill.
		 WARNING: In almost all cases it is better to display a single frame using a Sprite with a gotoAndStop call than it is to slice out a frame using this method and display it with a Bitmap instance. You can also crop an image using the Bitmap/sourceRect property of Bitmap.
		 The extractFrame method may cause cross-domain warnings since it accesses pixels directly on the canvas.
		 Parameters:
		
		 spriteSheet SpriteSheet
		 The SpriteSheet instance to extract a frame from.
		 frameOrAnimation Number | String
		 The frame number or animation name to extract. If an animation name is specified, only the first frame of the animation will be extracted.
		 Returns:
		
		 HTMLImageElement: a single frame of the specified sprite sheet as a new PNG image.
		 */
		return this.exactFrame.apply(this, arguments)
	}
	$SSU.mer = function () {
		/*
		
		
		 mergeAlpha ( rbgImage  alphaImage  canvas ) HTMLCanvasElement deprecated static
		 Defined in mergeAlpha:139
		 Deprecated: Tools such as ImageAlpha generally provide better results. This will be moved to sandbox in the future.
		 Merges the rgb channels of one image with the alpha channel of another. This can be used to combine a compressed JPEG image containing color data with a PNG32 monochromatic image containing alpha data. With certain types of images (those with detail that lend itself to JPEG compression) this can provide significant file size savings versus a single RGBA PNG32. This method is very fast (generally on the order of 1-2 ms to run).
		 Parameters:
		
		 rbgImage HTMLImageElement
		 The image (or canvas) containing the RGB channels to use.
		 alphaImage HTMLImageElement
		 The image (or canvas) containing the alpha channel to use.
		 canvas HTMLCanvasElement
		 Optional. If specified, this canvas will be used and returned. If not, a new canvas will be created.
		 Returns:
		
		 HTMLCanvasElement: A canvas with the combined image data. This can be used as a source for Bitmap or SpriteSheet.
		 */
		return this.merge.apply(this, arguments)
	}
}
function builder() {
	cjs.sSB = cjs.builder = cjs.spriteSheetBuilder = cjs.ssB = cjs.ssb = function (mc) {
		var sSB = new cjs.SpriteSheetBuilder()
	}
	cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function (mc) {
		ssb = new createjs.SpriteSheetBuilder()
		if (mc) {
			ssb.A(mc)
		}
		return ssb
	}
	SPM = SPRITEMOVIE = SSBUILDER = function () {
		cjs.testCanvas()
		//canvas=document.getElementById("testCanvas")
		s = stage = $St(["testCanvas"]).tick()
		cjs.Ticker.setFPS(30)
		scale = 0.4
		mc = cjs.gunner().drag()
		w = mc.nominalBounds.width * scale
		mc.tf(100 + w / 2, 100, scale, scale).a2(s)
		label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
		label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
		b = builder = cjs.builder(mc)
		b.Z(scale).maxW(1024)
		b.async(function (ev) {
			sprite = cjs.sprite(ev.target.spriteSheet)
			sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
			mc.gotoAndPlay(0)
			sprite.gotoAndPlay(0)
		})
		img = builder._data.images[0]
		$('body').A(img)
	}//B+
//////////
	cjs.sSB = cjs.builder = cjs.spriteSheetBuilder = cjs.ssB = cjs.ssb = function (mc) {
		var sSB = new cjs.SpriteSheetBuilder()
	}
	cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function (mc) {
		ssb = new createjs.SpriteSheetBuilder()
		if (mc) {
			ssb.A(mc)
		}
		return ssb
	}
	cjs.sSB = cjs.builder = cjs.spriteSheetBuilder = cjs.ssB = cjs.ssb = function (mc) {
		var sSB = new cjs.SpriteSheetBuilder()
	}
	cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function (mc) {
		ssb = new createjs.SpriteSheetBuilder()
		if (mc) {
			ssb.A(mc)
		}
		return ssb
	}
	cjs.sSB = cjs.builder = cjs.spriteSheetBuilder = cjs.ssB = cjs.ssb = function (mc) {
		var ssb = new cjs.SpriteSheetBuilder()
		ssb = new createjs.SpriteSheetBuilder()
		if (mc) {
			ssb.A(mc)
		}
		return ssb
	}
//https://www.youtube.com/watch?v=HaJ615V6qLk 
	proto()
	apps()
	function proto() {
		sSB = cjs.SpriteSheetBuilder.prototype
		sSB.sc = sSB.Z = function (sc) {
			if (U(sc)) {
				return this.scale
			}
			this.scale = sc;
			return this
		}
		sSB.maxW = function (sc) {
			if (U(sc)) {
				return this.maxWidth
			}
			this.maxWidth = sc;
			return this
		}
		sSB.oRd = sSB.oC = sSB.complete = function (fn) {
			this.on("complete", fn)
			return this
		}
		sSB.bA = function (a) {
			this.buildAsync(a)
			return this
		}
		sSB.oRdA = sSB.loadA = sSB.async = function () {
			var sSB = this, g = G(arguments), o
			o = g.F_ ? {readyFn: g.f, build: g.s} : {build: g.f}
			if (o.readyFn) {
				sSB.oRd(o.readyFn)
			}
			return sSB.bA(o.build)
		}
		sSB.aMC = sSB.A = function (mc) {
			this.addMovieClip(mc)
			return this
		}
		sSB = cjs.SpriteSheetBuilder.prototype
		sSB.sc = sSB.Z = function (sc) {
			if (U(sc)) {
				return this.scale
			}
			this.scale = sc;
			return this
		}
		sSB.maxW = function (sc) {
			if (U(sc)) {
				return this.maxWidth
			}
			this.maxWidth = sc;
			return this
		}
		sSB.oRd = sSB.oC = sSB.complete = function (fn) {
			this.on("complete", fn)
			return this
		}
		sSB.oRdA = sSB.loadA = sSB.async = function () {
			var sSB = this, g = G(arguments), o
			o = g.F_ ? {readyFn: g.f, build: g.s} : {build: g.f}
			if (o.readyFn) {
				sSB.oRd(o.readyFn)
			}
			return sSB.bA(o.build)
		}
		sSB.aMC = sSB.A = function (mc) {
			this.addMovieClip(mc)
			return this
		}
		sSB.bA = function (a) {
			this.buildAsync(a)
			return this
		}
	}
	
	function apps() {//official examples:
		SSBUILDER = function () {
			z();
			cjs.testCanvas()
			//canvas=document.getElementById("testCanvas")
			s = stage = cjs.stage(["testCanvas"]).tick()
			cjs.Ticker.setFPS(30)
			scale = 0.4
			mc = cjs.gunner().drag()
			w = mc.nominalBounds.width * scale
			mc.transform(100 + w / 2, 100, scale, scale).a2(s)
			label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
			label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
			b = builder = cjs.builder(mc)
			b.Z(scale).maxW(1024)
			b.async(function (ev) {
				sprite = cjs.sprite(ev.target.spriteSheet)
				sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
				mc.gotoAndPlay(0)
				sprite.gotoAndPlay(0)
			})
			img = builder._data.images[0]
			$('body').A(img)
		}
		SSBUILDER = function () {
			z();
			cjs.testCanvas()
			//canvas=document.getElementById("testCanvas")
			s = stage = cjs.stage(["testCanvas"]).tick()
			cjs.Ticker.setFPS(30)
			scale = 0.4
			mc = cjs.gunner().drag()
			w = mc.nominalBounds.width * scale
			mc.transform(100 + w / 2, 100, scale, scale).a2(s)
			label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
			label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
			b = builder = cjs.builder(mc)
			b.Z(scale).maxW(1024)
			b.async(function (ev) {
				sprite = cjs.sprite(ev.target.spriteSheet)
				sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
				mc.gotoAndPlay(0)
				sprite.gotoAndPlay(0)
			})
			img = builder._data.images[0]
			$('body').A(img)
		}
		SSBUILDER = function () {
			cjs.testCanvas()
			//canvas=document.getElementById("testCanvas")
			s = stage = cjs.stage(["testCanvas"]).tick()
			cjs.Ticker.setFPS(30)
			scale = 0.4
			mc = cjs.gunner().drag()
			w = mc.nominalBounds.width * scale
			mc.transform(100 + w / 2, 100, scale, scale).a2(s)
			label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
			label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
			b = builder = cjs.builder(mc)
			b.Z(scale).maxW(1024)
			b.async(function (ev) {
				sprite = cjs.sprite(ev.target.spriteSheet)
				sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
				mc.gotoAndPlay(0)
				sprite.gotoAndPlay(0)
			})
			img = builder._data.images[0]
			$('body').A(img)
		}
		SSBUILDER = function () {
			z();
			cjs.testCanvas()
			//canvas=document.getElementById("testCanvas")
			s = stage = cjs.stage(["testCanvas"]).tick()
			cjs.Ticker.setFPS(30)
			scale = 0.4
			mc = cjs.gunner().drag()
			w = mc.nominalBounds.width * scale
			mc.transform(100 + w / 2, 100, scale, scale).a2(s)
			label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
			label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
			b = builder = cjs.builder(mc)
			b.Z(scale).maxW(1024)
			b.async(function (ev) {
				sprite = cjs.sprite(ev.target.spriteSheet)
				sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
				mc.gotoAndPlay(0)
				sprite.gotoAndPlay(0)
			})
			img = builder._data.images[0]
			$('body').A(img)
		}
		SSBUILDER = function () {
			z();
			cjs.testCanvas()
			//canvas=document.getElementById("testCanvas")
			s = stage = cjs.stage(["testCanvas"]).tick()
			cjs.Ticker.setFPS(30)
			scale = 0.4
			mc = cjs.gunner().drag()
			w = mc.nominalBounds.width * scale
			mc.transform(100 + w / 2, 100, scale, scale).a2(s)
			label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
			label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
			b = builder = cjs.builder(mc)
			b.Z(scale).maxW(1024)
			b.async(function (ev) {
				sprite = cjs.sprite(ev.target.spriteSheet)
				sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
				mc.gotoAndPlay(0)
				sprite.gotoAndPlay(0)
			})
			img = builder._data.images[0]
			$('body').A(img)
		}
		SSBUILDER = function () {
			z();
			cjs.testCanvas()
			//canvas=document.getElementById("testCanvas")
			s = stage = cjs.stage(["testCanvas"]).tick()
			cjs.Ticker.setFPS(30)
			scale = 0.4
			mc = cjs.gunner().drag()
			w = mc.nominalBounds.width * scale
			mc.transform(100 + w / 2, 100, scale, scale).a2(s)
			label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
			label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
			b = builder = cjs.builder(mc)
			b.Z(scale).maxW(1024)
			b.async(function (ev) {
				sprite = cjs.sprite(ev.target.spriteSheet)
				sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
				mc.gotoAndPlay(0)
				sprite.gotoAndPlay(0)
			})
			img = builder._data.images[0]
			$('body').A(img)
		}
	}
}
_$SS = cjs._spriteSheet = _$spriteSheet = function (sS) {
	return new cjs.SS(sS)
}
$SS = cjs.spriteSheet = $spriteSheet = function (sS) {
	sS.images = sS.images || sS.i
	sS.animations = sS.animations || sS.a
	sS.frames = sS.frames || sS.f
	sS.framerate = sS.framerate || sS.r
	//fix source (needs a '/')
	//sS.images[ 0 ] = _.ensureSlash( sS.images[0] )
	//set next to false, on all anims
	// _.e(sS.animations, function(an){an.next = false})
	//to do: parse it! (get rid of unnecessary json strings in keys)
	return _$SS(sS)
}
function runningMan() {

/////////////////////////////////////////
// https://www.youtube.com/watch?v=KwCSmOvOgDc
	RUNNINGMAN = function () {
		s = stage = cjs.S()
		$.img("/MonsterAIdle.png", function (i) {
			imgMonsterAIdle = i[0]
		})
		$.img("/MonsterARun.png", function (i) {
			imgMonsterARun = i[0]
		})
		$.button('start', startGame).A()
		$.button('reset', function () {
			s.removeAllChildren()
			cjs.Ticker.removeAllListeners()
			// stage.update()
		}).A()
		function startGame() {
			screen_width = s.W()
			screen_height = s.H()
//Idle sequence of the monster
			spriteIdle = new cjs.Sprite(new cjs.SpriteSheet({
				images: [imgMonsterAIdle],
				frames: {width: 64, height: 64, regX: 32, regY: 32},
				animations: {idle: [0, 10, "idle", 4]}
			}))
			spriteIdle.name = "monsteridle1"
			spriteIdle.XY(16, 32)
			// create sprite.. and set the registration point (the point it will be positioned and rotated around) to the center of the frame dimensions:
			sprite = new cjs.Sprite(
					new cjs.SpriteSheet({
						images: [imgMonsterARun],
						frames: {width: 64, height: 64, regX: 32, regY: 32},
						animations: {walk: [0, 9, "walk", 4]}// To slow down the animation loop of the sprite, we set the frequency to 4 to slow down by a 4x factor
					}).addFlipped(true, false, false))
			//sprite.regX = sprite.spriteSheet.frameWidth/2 || 0
			//sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
			// start playing the first sequence: walk_h has been generated by addFlippedFrames and  contained the right facing animations
			sprite.p("walk_h") 	//walking from left to right
			//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
			sprite.name = "monster1"
			sprite.direction = 90
			sprite.XY(16, 32).vXY(1, 0).a2(s)
			sprite.currentFrame = 10
			// we want to do some work before we update the canvas,  // otherwise we could use Ticker.addListener(stage);
			cjs.Ticker.setFPS(40)
		}
		
		// cjs.tick(onTick)
		onTick = function () {
			if (sprite.x >= screen_width - 16) {
				sprite.direction = -90;
				sprite.gotoAndPlay("walk")
			} // Hit testing the screen width, otherwise our sprite would disappear // We've reached the right side of our screen   // We need to walk left now to go back to our initial position
			if (sprite.x < 16) {   // We've reached the left side of our screen // We need to walk right now
				sprite.direction = 90
				sprite.gotoAndStop("walk")
				s.removeChild(sprite)
				spriteIdle.gotoAndPlay("idle")
				stage.addChild(spriteIdle)
			}
			// Moving the sprite based on the direction & the speed
			if (sprite.direction == 90) {
				sprite.x += sprite.vX;
				sprite.y += sprite.vY
			}
			else {
				sprite.x -= sprite.vX;
				sprite.y -= sprite.vY
			}
		}
	}
	RUNNINGMAN = function () {
		s = stage = $St()
		$.i("/MonsterAIdle.png", function (i) {
			imgMonsterAIdle = i[0]
		})
		$.i("/MonsterARun.png", function (i) {
			imgMonsterARun = i[0]
		})
		$.bt('start', startGame).A()
		$.bt('reset', function () {
			s.removeAllChildren()
			cjs.Ticker.removeAllListeners()
			// stage.update()
		}).A()
		function startGame() {
			screen_width = s.W()
			screen_height = s.H()
			//Idle sequence of the monster
			spriteIdle = new cjs.Sprite(new cjs.SpriteSheet({
				images: [imgMonsterAIdle],
				frames: {width: 64, height: 64, regX: 32, regY: 32},
				animations: {idle: [0, 10, "idle", 4]}
			}))
			spriteIdle.name = "monsteridle1"
			spriteIdle.XY(16, 32)
			// create sprite.. and set the registration point (the point it will be positioned and rotated around) to the center of the frame dimensions:
			sprite = new cjs.Sprite(
					new cjs.SpriteSheet({
						images: [imgMonsterARun],
						frames: {width: 64, height: 64, regX: 32, regY: 32},
						animations: {walk: [0, 9, "walk", 4]}// To slow down the animation loop of the sprite, we set the frequency to 4 to slow down by a 4x factor
					}).addFlipped(true, false, false))
			//sprite.regX = sprite.spriteSheet.frameWidth/2 || 0
			//sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
			// start playing the first sequence: walk_h has been generated by addFlippedFrames and  contained the right facing animations
			sprite.p("walk_h") 	//walking from left to right
			//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
			sprite.name = "monster1"
			sprite.direction = 90
			sprite.XY(16, 32).vXY(1, 0).a2(s)
			sprite.currentFrame = 10
			// we want to do some work before we update the canvas,  // otherwise we could use Ticker.addListener(stage);
			T.setFPS(40)
		}
		
		_.ev(.1, function onTick() {
			if (sprite.x >= screen_width - 16) {
				sprite.direction = -90;
				sprite.gotoAndPlay("walk")
			} // Hit testing the screen width, otherwise our sprite would disappear // We've reached the right side of our screen   // We need to walk left now to go back to our initial position
			if (sprite.x < 16) {   // We've reached the left side of our screen // We need to walk right now
				sprite.direction = 90
				sprite.gotoAndStop("walk")
				s.removeChild(sprite)
				spriteIdle.gotoAndPlay("idle")
				stage.addChild(spriteIdle)
			}
			// Moving the sprite based on the direction & the speed
			if (sprite.direction == 90) {
				sprite.x += sprite.vX;
				sprite.y += sprite.vY
			}
			else {
				sprite.x -= sprite.vX;
				sprite.y -= sprite.vY
			}
		})
	}//f 
	RUNNINGMAN = function () {
		s = stage = cjs.S()
		$.img("/MonsterAIdle.png", function (i) {
			imgMonsterAIdle = i[0]
		})
		$.img("/MonsterARun.png", function (i) {
			imgMonsterARun = i[0]
		})
		$.button('start', startGame).A()
		$.button('reset', function () {
			s.removeAllChildren()
			cjs.Ticker.removeAllListeners()
			// stage.update()
		}).A()
		function startGame() {
			screen_width = s.W()
			screen_height = s.H()
//Idle sequence of the monster
			spriteIdle = new cjs.Sprite(new cjs.SpriteSheet({
				images: [imgMonsterAIdle],
				frames: {width: 64, height: 64, regX: 32, regY: 32},
				animations: {idle: [0, 10, "idle", 4]}
			}))
			spriteIdle.name = "monsteridle1"
			spriteIdle.XY(16, 32)
			// create sprite.. and set the registration point (the point it will be positioned and rotated around) to the center of the frame dimensions:
			sprite = new cjs.Sprite(
					new cjs.SpriteSheet({
						images: [imgMonsterARun],
						frames: {width: 64, height: 64, regX: 32, regY: 32},
						animations: {walk: [0, 9, "walk", 4]}// To slow down the animation loop of the sprite, we set the frequency to 4 to slow down by a 4x factor
					}).addFlipped(true, false, false))
			//sprite.regX = sprite.spriteSheet.frameWidth/2 || 0
			//sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
			// start playing the first sequence: walk_h has been generated by addFlippedFrames and  contained the right facing animations
			sprite.p("walk_h") 	//walking from left to right
			//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
			sprite.name = "monster1"
			sprite.direction = 90
			sprite.XY(16, 32).vXY(1, 0).a2(s)
			sprite.currentFrame = 10
			// we want to do some work before we update the canvas,  // otherwise we could use Ticker.addListener(stage);
			cjs.Ticker.setFPS(40)
		}
		
		// cjs.tick(onTick)
		onTick = function () {
			if (sprite.x >= screen_width - 16) {
				sprite.direction = -90;
				sprite.gotoAndPlay("walk")
			} // Hit testing the screen width, otherwise our sprite would disappear // We've reached the right side of our screen   // We need to walk left now to go back to our initial position
			if (sprite.x < 16) {   // We've reached the left side of our screen // We need to walk right now
				sprite.direction = 90
				sprite.gotoAndStop("walk")
				s.removeChild(sprite)
				spriteIdle.gotoAndPlay("idle")
				stage.addChild(spriteIdle)
			}
			// Moving the sprite based on the direction & the speed
			if (sprite.direction == 90) {
				sprite.x += sprite.vX;
				sprite.y += sprite.vY
			}
			else {
				sprite.x -= sprite.vX;
				sprite.y -= sprite.vY
			}
		}
	}
	RUNNINGMAN = function () {
		s = stage = cjs.S()
		$.img("/MonsterAIdle.png", function (i) {
			imgMonsterAIdle = i[0]
		})
		$.img("/MonsterARun.png", function (i) {
			imgMonsterARun = i[0]
		})
		$.button('start', startGame).A()
		$.button('reset', function () {
			s.removeAllChildren()
			cjs.Ticker.removeAllListeners()
			// stage.update()
		}).A()
		function startGame() {
			screen_width = s.W()
			screen_height = s.H()
//Idle sequence of the monster
			spriteIdle = new cjs.Sprite(new cjs.SpriteSheet({
				images: [imgMonsterAIdle],
				frames: {width: 64, height: 64, regX: 32, regY: 32},
				animations: {idle: [0, 10, "idle", 4]}
			}))
			spriteIdle.name = "monsteridle1"
			spriteIdle.XY(16, 32)
			// create sprite.. and set the registration point (the point it will be positioned and rotated around) to the center of the frame dimensions:
			sprite = new cjs.Sprite(
					new cjs.SpriteSheet({
						images: [imgMonsterARun],
						frames: {width: 64, height: 64, regX: 32, regY: 32},
						animations: {walk: [0, 9, "walk", 4]}// To slow down the animation loop of the sprite, we set the frequency to 4 to slow down by a 4x factor
					}).addFlipped(true, false, false))
			//sprite.regX = sprite.spriteSheet.frameWidth/2 || 0
			//sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
			// start playing the first sequence: walk_h has been generated by addFlippedFrames and  contained the right facing animations
			sprite.p("walk_h") 	//walking from left to right
			//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
			sprite.name = "monster1"
			sprite.direction = 90
			sprite.XY(16, 32).vXY(1, 0).a2(s)
			sprite.currentFrame = 10
			// we want to do some work before we update the canvas,  // otherwise we could use Ticker.addListener(stage);
			cjs.Ticker.setFPS(40)
		}
		
		// cjs.tick(onTick)
		onTick = function () {
			if (sprite.x >= screen_width - 16) {
				sprite.direction = -90;
				sprite.gotoAndPlay("walk")
			} // Hit testing the screen width, otherwise our sprite would disappear // We've reached the right side of our screen   // We need to walk left now to go back to our initial position
			if (sprite.x < 16) {   // We've reached the left side of our screen // We need to walk right now
				sprite.direction = 90
				sprite.gotoAndStop("walk")
				s.removeChild(sprite)
				spriteIdle.gotoAndPlay("idle")
				stage.addChild(spriteIdle)
			}
			// Moving the sprite based on the direction & the speed
			if (sprite.direction == 90) {
				sprite.x += sprite.vX;
				sprite.y += sprite.vY
			}
			else {
				sprite.x -= sprite.vX;
				sprite.y -= sprite.vY
			}
		}
	}
}
function stick() {
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
	STK = function () {
		stick = function () {
			this.initialize()
		}
		stick._SpriteSheet = new createjs.SpriteSheet({
			images: ["/stik.png"],
			frames: [[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
				[0, 0, 250, 347, 0, 99.94999999999999, 70.55], [0, 0, 250, 347, 0, 99.94999999999999, 70.55],
				[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
				[250, 0, 240, 347, 0, 108.94999999999999, 70.55],
				[250, 0, 240, 347, 0, 108.94999999999999, 70.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55],
				[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [490, 0, 253, 347, 0, 119.94999999999999, 77.55],
				[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
				[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
				[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [291, 696, 285, 299, 0, 189.95, 65.55], [291, 696, 285, 299, 0, 189.95, 65.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55]]
		})
		stick_p = stick.prototype = new createjs.Sprite();
		stick_p.Sprite_initialize = stick_p.initialize;
		stick_p.initialize = function () {
			this.Sprite_initialize(stick._SpriteSheet);
			this.paused = false;
		}
		st = __$St()
		p = new stick()
		st.A(p)
		p.XY(300, 100)
		p.S()
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
	STK = function () {
		stick = function () {
			this.initialize()
		}
		stick._SpriteSheet = new createjs.SpriteSheet({
			images: ["/stik.png"],
			frames: [[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
				[0, 0, 250, 347, 0, 99.94999999999999, 70.55], [0, 0, 250, 347, 0, 99.94999999999999, 70.55],
				[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
				[250, 0, 240, 347, 0, 108.94999999999999, 70.55],
				[250, 0, 240, 347, 0, 108.94999999999999, 70.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55],
				[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [490, 0, 253, 347, 0, 119.94999999999999, 77.55],
				[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
				[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
				[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [291, 696, 285, 299, 0, 189.95, 65.55], [291, 696, 285, 299, 0, 189.95, 65.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55]]
		})
		stick_p = stick.prototype = new createjs.Sprite();
		stick_p.Sprite_initialize = stick_p.initialize;
		stick_p.initialize = function () {
			this.Sprite_initialize(stick._SpriteSheet);
			this.paused = false;
		}
		st = __$St()
		p = new stick()
		st.A(p)
		p.XY(300, 100)
		p.S()
	}
}
function spryShip() {
	$$ship = {
		framerate: 24,
		images: ["thrusty.png"],
		frames: [
			[0, 0, 512, 512, 0, -53, -36],
			[512, 0, 512, 512, 0, -53, -36],
			[1024, 0, 512, 512, 0, -53, -36],
			[0, 512, 512, 512, 0, -53, -36],
			[512, 512, 512, 512, 0, -53, -36],
			[1024, 512, 512, 512, 0, -53, -36],
			[0, 1024, 512, 512, 0, -53, -36],
			[512, 1024, 512, 512, 0, -53, -36],
			[1024, 1024, 512, 512, 0, -53, -36],
			[0, 1536, 512, 512, 0, -53, -36],
			[512, 1536, 512, 512, 0, -53, -36]],
		animations: {
			die: {speed: 1, frames: [8, 9, 10], next: false},
			shoot: {speed: 1, frames: [1, 2, 3, 4, 0], next: false},
			thrust: {speed: 1, frames: [5, 6, 7, 0], next: false}
		}
	}
	$$ship.key = {  //takes a spritebox!//uses cjs.watchKeys()
		d: function () {
			y.p('shoot')
		},
		u: function () {
			y.p('thrust')
		}
	}
	$$ship = {
		framerate: 24,
		images: ["thrusty.png"],
		frames: [
			[0, 0, 512, 512, 0, -53, -36],
			[512, 0, 512, 512, 0, -53, -36],
			[1024, 0, 512, 512, 0, -53, -36],
			[0, 512, 512, 512, 0, -53, -36],
			[512, 512, 512, 512, 0, -53, -36],
			[1024, 512, 512, 512, 0, -53, -36],
			[0, 1024, 512, 512, 0, -53, -36],
			[512, 1024, 512, 512, 0, -53, -36],
			[1024, 1024, 512, 512, 0, -53, -36],
			[0, 1536, 512, 512, 0, -53, -36],
			[512, 1536, 512, 512, 0, -53, -36]],
		animations: {
			die: {speed: 1, frames: [8, 9, 10], next: false},
			shoot: {speed: 1, frames: [1, 2, 3, 4, 0], next: false},
			thrust: {speed: 1, frames: [5, 6, 7, 0], next: false}
		}
	}
	$$ship = {
		framerate: 24,
		images: ["thrusty.png"],
		frames: [
			[0, 0, 512, 512, 0, -53, -36],
			[512, 0, 512, 512, 0, -53, -36],
			[1024, 0, 512, 512, 0, -53, -36],
			[0, 512, 512, 512, 0, -53, -36],
			[512, 512, 512, 512, 0, -53, -36],
			[1024, 512, 512, 512, 0, -53, -36],
			[0, 1024, 512, 512, 0, -53, -36],
			[512, 1024, 512, 512, 0, -53, -36],
			[1024, 1024, 512, 512, 0, -53, -36],
			[0, 1536, 512, 512, 0, -53, -36],
			[512, 1536, 512, 512, 0, -53, -36]],
		animations: {
			die: {speed: 1, frames: [8, 9, 10], next: false},
			shoot: {speed: 1, frames: [1, 2, 3, 4, 0], next: false},
			thrust: {speed: 1, frames: [5, 6, 7, 0], next: false}
		}
	}
	$$ship.key = {  //takes a spritebox!//uses cjs.watchKeys()
		d: function () {
			y.p('shoot')
		},
		u: function () {
			y.p('thrust')
		}
	}
	$$ship.key = {  //takes a spritebox!//uses cjs.watchKeys()
		d: function () {
			y.p('shoot')
		},
		u: function () {
			y.p('thrust')
		}
	}
	$$ship = {
		framerate: 24,
		images: ["thrusty.png"],
		frames: [
			[0, 0, 512, 512, 0, -53, -36],
			[512, 0, 512, 512, 0, -53, -36],
			[1024, 0, 512, 512, 0, -53, -36],
			[0, 512, 512, 512, 0, -53, -36],
			[512, 512, 512, 512, 0, -53, -36],
			[1024, 512, 512, 512, 0, -53, -36],
			[0, 1024, 512, 512, 0, -53, -36],
			[512, 1024, 512, 512, 0, -53, -36],
			[1024, 1024, 512, 512, 0, -53, -36],
			[0, 1536, 512, 512, 0, -53, -36],
			[512, 1536, 512, 512, 0, -53, -36]],
		animations: {
			die: {speed: 1, frames: [8, 9, 10], next: false},
			shoot: {speed: 1, frames: [1, 2, 3, 4, 0], next: false},
			thrust: {speed: 1, frames: [5, 6, 7, 0], next: false}
		}
	}
	$$ship.key = {  //takes a spritebox!//uses cjs.watchKeys()
		d: function () {
			y.p('shoot')
		},
		u: function () {
			y.p('thrust')
		}
	}
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
}
PACK = function () {
	stage = $St(800)
	//stage.op(.7)
	sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()
	stage.A(sprite)
	//.rgc()
	sprite.framerate = 6
	sprite.play()
}
Pack = {
	"framerate": 24,
	"images": [
		"/pack_0.png",
		"/pack_1.png",
		"/pack_2.png",
		"/pack_3.png",
		"/pack_4.png",
		"/pack_5.png",
		"/pack_6.png",
		"/pack_7.png",
		"/pack_8.png",
		"/pack_9.png",
		"/pack_10.png",
		"/pack_11.png",
		"/pack_12.png",
		"/pack_13.png",
		"/pack_14.png",
		"/pack_15.png",
		"/pack_16.png",
		"/pack_17.png",
		"/pack_18.png"
	],
	"frames": [
		[2, 2, 512, 512, 0, -3, -1],
		[518, 2, 512, 512, 0, -3, -1],
		[1034, 2, 512, 512, 0, -3, -1],
		[2, 518, 512, 512, 0, -3, -1],
		[518, 518, 512, 512, 0, -3, -1],
		[1034, 518, 512, 512, 0, -3, -1],
		[2, 1034, 512, 512, 0, -3, -1],
		[518, 1034, 512, 512, 0, -3, -1],
		[1034, 1034, 512, 512, 0, -3, -1],
		[2, 2, 512, 512, 1, -3, -1],
		[518, 2, 512, 512, 1, -3, -1],
		[1034, 2, 512, 512, 1, -3, -1],
		[2, 518, 512, 512, 1, -3, -1],
		[518, 518, 512, 512, 1, -3, -1],
		[1034, 518, 512, 512, 1, -3, -1],
		[2, 1034, 512, 512, 1, -3, -1],
		[518, 1034, 512, 512, 1, -3, -1],
		[1034, 1034, 512, 512, 1, -3, -1],
		[2, 2, 512, 512, 2, -3, -1],
		[518, 2, 512, 512, 2, -3, -1],
		[1034, 2, 512, 512, 2, -3, -1],
		[2, 518, 512, 512, 2, -3, -1],
		[518, 518, 512, 512, 2, -3, -1],
		[1034, 518, 512, 512, 2, -3, -1],
		[2, 1034, 512, 512, 2, -3, -1],
		[518, 1034, 512, 512, 2, -3, -1],
		[1034, 1034, 512, 512, 2, -3, -1],
		[2, 2, 512, 512, 3, -3, -1],
		[518, 2, 512, 512, 3, -3, -1],
		[1034, 2, 512, 512, 3, -3, -1],
		[2, 518, 512, 512, 3, -3, -1],
		[518, 518, 512, 512, 3, -3, -1],
		[1034, 518, 512, 512, 3, -3, -1],
		[2, 1034, 512, 512, 3, -3, -1],
		[518, 1034, 512, 512, 3, -3, -1],
		[1034, 1034, 512, 512, 3, -3, -1],
		[2, 2, 512, 512, 4, -3, -1],
		[518, 2, 512, 512, 4, -3, -1],
		[1034, 2, 512, 512, 4, -3, -1],
		[2, 518, 512, 512, 4, -3, -1],
		[518, 518, 512, 512, 4, -3, -1],
		[1034, 518, 512, 512, 4, -3, -1],
		[2, 1034, 512, 512, 4, -3, -1],
		[518, 1034, 512, 512, 4, -3, -1],
		[1034, 1034, 512, 512, 4, -3, -1],
		[2, 2, 512, 512, 5, -3, -1],
		[518, 2, 512, 512, 5, -3, -1],
		[1034, 2, 512, 512, 5, -3, -1],
		[2, 518, 512, 512, 5, -3, -1],
		[518, 518, 512, 512, 5, -3, -1],
		[1034, 518, 512, 512, 5, -3, -1],
		[2, 1034, 512, 512, 5, -3, -1],
		[518, 1034, 512, 512, 5, -3, -1],
		[1034, 1034, 512, 512, 5, -3, -1],
		[2, 2, 512, 512, 6, -3, -1],
		[518, 2, 512, 512, 6, -3, -1],
		[1034, 2, 512, 512, 6, -3, -1],
		[2, 518, 512, 512, 6, -3, -1],
		[518, 518, 512, 512, 6, -3, -1],
		[1034, 518, 512, 512, 6, -3, -1],
		[2, 1034, 512, 512, 6, -3, -1],
		[518, 1034, 512, 512, 6, -3, -1],
		[1034, 1034, 512, 512, 6, -3, -1],
		[2, 2, 512, 512, 7, -3, -1],
		[518, 2, 512, 512, 7, -3, -1],
		[1034, 2, 512, 512, 7, -3, -1],
		[2, 518, 512, 512, 7, -3, -1],
		[518, 518, 512, 512, 7, -3, -1],
		[1034, 518, 512, 512, 7, -3, -1],
		[2, 1034, 512, 512, 7, -3, -1],
		[518, 1034, 512, 512, 7, -3, -1],
		[1034, 1034, 512, 512, 7, -3, -1],
		[2, 2, 512, 512, 8, -3, -1],
		[518, 2, 512, 512, 8, -3, -1],
		[1034, 2, 512, 512, 8, -3, -1],
		[2, 518, 512, 512, 8, -3, -1],
		[518, 518, 512, 512, 8, -3, -1],
		[1034, 518, 512, 512, 8, -3, -1],
		[2, 1034, 512, 512, 8, -3, -1],
		[518, 1034, 512, 512, 8, -3, -1],
		[1034, 1034, 512, 512, 8, -3, -1],
		[2, 2, 512, 512, 9, -3, -1],
		[518, 2, 512, 512, 9, -3, -1],
		[1034, 2, 512, 512, 9, -3, -1],
		[2, 518, 512, 512, 9, -3, -1],
		[518, 518, 512, 512, 9, -3, -1],
		[1034, 518, 512, 512, 9, -3, -1],
		[2, 1034, 512, 512, 9, -3, -1],
		[518, 1034, 512, 512, 9, -3, -1],
		[1034, 1034, 512, 512, 9, -3, -1],
		[2, 2, 512, 512, 10, -3, -1],
		[518, 2, 512, 512, 10, -3, -1],
		[1034, 2, 512, 512, 10, -3, -1],
		[2, 518, 512, 512, 10, -3, -1],
		[518, 518, 512, 512, 10, -3, -1],
		[1034, 518, 512, 512, 10, -3, -1],
		[2, 1034, 512, 512, 10, -3, -1],
		[518, 1034, 512, 512, 10, -3, -1],
		[1034, 1034, 512, 512, 10, -3, -1],
		[2, 2, 512, 512, 11, -3, -1],
		[518, 2, 512, 512, 11, -3, -1],
		[1034, 2, 512, 512, 11, -3, -1],
		[2, 518, 512, 512, 11, -3, -1],
		[518, 518, 512, 512, 11, -3, -1],
		[1034, 518, 512, 512, 11, -3, -1],
		[2, 1034, 512, 512, 11, -3, -1],
		[518, 1034, 512, 512, 11, -3, -1],
		[1034, 1034, 512, 512, 11, -3, -1],
		[2, 2, 512, 512, 12, -3, -1],
		[518, 2, 512, 512, 12, -3, -1],
		[1034, 2, 512, 512, 12, -3, -1],
		[2, 518, 512, 512, 12, -3, -1],
		[518, 518, 512, 512, 12, -3, -1],
		[1034, 518, 512, 512, 12, -3, -1],
		[2, 1034, 512, 512, 12, -3, -1],
		[518, 1034, 512, 512, 12, -3, -1],
		[1034, 1034, 512, 512, 12, -3, -1],
		[2, 2, 512, 512, 13, -3, -1],
		[518, 2, 512, 512, 13, -3, -1],
		[1034, 2, 512, 512, 13, -3, -1],
		[2, 518, 512, 512, 13, -3, -1],
		[518, 518, 512, 512, 13, -3, -1],
		[1034, 518, 512, 512, 13, -3, -1],
		[2, 1034, 512, 512, 13, -3, -1],
		[518, 1034, 512, 512, 13, -3, -1],
		[1034, 1034, 512, 512, 13, -3, -1],
		[2, 2, 512, 512, 14, -3, -1],
		[518, 2, 512, 512, 14, -3, -1],
		[1034, 2, 512, 512, 14, -3, -1],
		[2, 518, 512, 512, 14, -3, -1],
		[518, 518, 512, 512, 14, -3, -1],
		[1034, 518, 512, 512, 14, -3, -1],
		[2, 1034, 512, 512, 14, -3, -1],
		[518, 1034, 512, 512, 14, -3, -1],
		[1034, 1034, 512, 512, 14, -3, -1],
		[2, 2, 512, 512, 15, -3, -1],
		[518, 2, 512, 512, 15, -3, -1],
		[1034, 2, 512, 512, 15, -3, -1],
		[2, 518, 512, 512, 15, -3, -1],
		[518, 518, 512, 512, 15, -3, -1],
		[1034, 518, 512, 512, 15, -3, -1],
		[2, 1034, 512, 512, 15, -3, -1],
		[518, 1034, 512, 512, 15, -3, -1],
		[1034, 1034, 512, 512, 15, -3, -1],
		[2, 2, 512, 512, 16, -3, -1],
		[518, 2, 512, 512, 16, -3, -1],
		[1034, 2, 512, 512, 16, -3, -1],
		[2, 518, 512, 512, 16, -3, -1],
		[518, 518, 512, 512, 16, -3, -1],
		[1034, 518, 512, 512, 16, -3, -1],
		[2, 1034, 512, 512, 16, -3, -1],
		[518, 1034, 512, 512, 16, -3, -1],
		[1034, 1034, 512, 512, 16, -3, -1],
		[2, 2, 512, 512, 17, -3, -1],
		[518, 2, 512, 512, 17, -3, -1],
		[1034, 2, 512, 512, 17, -3, -1],
		[2, 518, 512, 512, 17, -3, -1],
		[518, 518, 512, 512, 17, -3, -1],
		[1034, 518, 512, 512, 17, -3, -1],
		[2, 1034, 512, 512, 17, -3, -1],
		[518, 1034, 512, 512, 17, -3, -1],
		[1034, 1034, 512, 512, 17, -3, -1],
		[2, 2, 512, 512, 18, -3, -1],
		[518, 2, 512, 512, 18, -3, -1],
		[1034, 2, 512, 512, 18, -3, -1],
		[2, 518, 512, 512, 18, -3, -1],
		[518, 518, 512, 512, 18, -3, -1],
		[1034, 518, 512, 512, 18, -3, -1],
		[2, 1034, 512, 512, 18, -3, -1],
		[518, 1034, 512, 512, 18, -3, -1]
	],
	"animations": {
		"b1": {"frames": [1, 2, 3, 4], "speed": 1},
		"b2": {"frames": [5, 6, 7, 8, 9], "speed": 1},
		"b3": {"frames": [10, 11, 12, 13, 14], "speed": 1},  //15
		"c1": {"frames": [16, 17, 18], "speed": 1},
		"c2": {"frames": [19, 20, 21, 22], "speed": 1},
		"c3": {"frames": [23, 24, 25, 26, 27], "speed": 1},
		"c4": {"frames": [28, 29, 30], "speed": 1},
		"s1": {"frames": [96, 97, 98, 99, 100, 101, 102, 103, 104], "speed": 1},
		"s2": {"frames": [105, 106, 107, 108, 109, 110, 111, 112, 113], "speed": 1},
		"s3": {"frames": [114, 115, 116, 117, 118, 119, 120, 121, 122], "speed": 1},
		"s4": {"frames": [123, 124, 125, 126, 127, 128, 129, 130, 131], "speed": 1},
		"e1": {"frames": [132, 133, 134, 135, 136, 137, 138, 139, 140, 141], "speed": 1},
		"e2": {"frames": [142, 143, 144, 145, 146, 147, 148, 149], "speed": 1},
		"e3": {"frames": [150, 151, 152, 153, 154, 155, 156, 157, 158, 159], "speed": 1},
		"e4": {"frames": [160, 161, 162, 163, 164, 165, 166, 167, 168, 169], "speed": 1},
		"f1": {"frames": [31, 32, 33, 34, 35], "speed": 1},
		"f2": {"frames": [36, 37, 38, 39, 40, 41, 42, 43], "speed": 1},
		"f3": {"frames": [44, 45, 46, 47, 48, 49], "speed": 1},
		"f4": {
			"frames": [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
			"speed": 1
		},
		"p1": {"frames": [77, 78, 79, 80, 81], "speed": 1},
		"p2": {"frames": [82, 83, 84, 85], "speed": 1},
		"p3": {"frames": [86, 87, 88, 89, 90], "speed": 1},
		"p4": {"frames": [91, 92, 93, 94, 95], "speed": 1}
	}
}
Smoke = {
	"framerate": 24,
	"images": ["/electric_0.png", "/electric_1.png", "/electric_2.png"],
	"frames": [
		[2, 2, 512, 512, 0, -58, -117],
		[518, 2, 512, 512, 0, -58, -117],
		[1034, 2, 512, 512, 0, -58, -117],
		[2, 518, 512, 512, 0, -58, -117],
		[518, 518, 512, 512, 0, -58, -117],
		[1034, 518, 512, 512, 0, -58, -117],
		[2, 1034, 512, 512, 0, -58, -117],
		[518, 1034, 512, 512, 0, -58, -117],
		[1034, 1034, 512, 512, 0, -58, -117],
		[2, 2, 512, 512, 1, -58, -117],
		[518, 2, 512, 512, 1, -58, -117],
		[1034, 2, 512, 512, 1, -58, -117],
		[2, 518, 512, 512, 1, -58, -117],
		[518, 518, 512, 512, 1, -58, -117],
		[1034, 518, 512, 512, 1, -58, -117],
		[2, 1034, 512, 512, 1, -58, -117],
		[518, 1034, 512, 512, 1, -58, -117],
		[1034, 1034, 512, 512, 1, -58, -117],
		[2, 2, 512, 512, 2, -58, -117]
	],
	"animations": {
		"sizzle": {"frames": [10, 11, 12, 13, 14, 15, 16, 17, 18], "speed": 1},
		"warp": {"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "speed": 1}
	}
}
PACK = function () {
	stage = cjs.stage(800).A()
	//stage.op(.7)
	sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()
	stage.A(sprite)
	//.rgc()
	sprite.framerate = 6
	sprite.play()
}
function mummy() {
	Mummy = {
		"framerate": 24,
		"images": ["/assets/sprites/metalslug_mummy37x45.png"],
		"frames": [
			[0, 0, 40, 45, 0, 0, 0],
			[37, 0, 40, 45, 0, 0, 0],
			[74, 0, 40, 45, 0, 0, 0],
			[111, 0, 40, 45, 0, 0, 0],
			[148, 0, 40, 45, 0, 0, 0],
			[0, 46, 40, 45, 0, 0, 0],
			[37, 46, 40, 45, 0, 0, 0],
			[74, 46, 40, 45, 0, 0, 0],
			[111, 46, 40, 45, 0, 0, 0],
			[148, 46, 40, 45, 0, 0, 0],
		],
		"animations": {
			"walk": {"frames": [0, 1, 2, 3, 4, 5], "speed": .5}
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
}
KEYBOARDWALK = SID = SIDE = function () {
	$sideSp = side = function () {
		this.initialize();
	}
	$sideSp.prototype = $Sp()
	$sideSp.prototype.Sprite_initialize = side_p.initialize;
	$sideSp.prototype.initialize = function () {
		this.Sprite_initialize(side._SpriteSheet);
		this.paused = false;
	}
	$sideSp.prototype.walkLeft = function () {
		this.gotoAndPlay("walkLeft");
	}
	$sideSp.prototype.takeoff = function () {
		this.gotoAndPlay("takeoff");
	}
	$sideSp._SpriteSheet = $SS({
		images: ["side.png"],
		frames: [[0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [0, 297, 352, 315, 0, 253.95, 49.5], [0, 297, 352, 315, 0, 253.95, 49.5], [352, 297, 383, 326, 0, 186.95, 79.5], [352, 297, 383, 326, 0, 186.95, 79.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 1494, 543, 552, 0, 330.95, 226.5]],
		animations: {walkLeft: [0, 9, true], takeoff: [10, 11, true]}
	})
	st = $St()
	sp = new $sideSp().XY(400, 200).a2(st).walkLeft().sXY(.5).gotoAndStop()
	var lfHeld
	var rtHeld
	var upHeld
	var dnHeld
	var keyDn = false
	document.onkeydown = handleKeyDown
	document.onkeyup = handleKeyUp
	$t(function () {
		if (lfHeld) {
			sp.x -= 15
		}
		if (rtHeld) {
			sp.x += 15
		}
		if (upHeld) {
			sp.y -= 4
		}
		if (dnHeld) {
			sp.y += 4
		}
		if (lfHeld && !keyDn) {
			sp.scX(.5).p('walkLeft')
			keyDn = true
		}
		if (rtHeld && !keyDn) {
			sp.scX(-.5).p('walkLeft')
			keyDn = true
		}
		if (upHeld && !keyDn) {
			sp.p('takeoff')
			keyDn = true
		}
	})
	function handleKeyDown(e) {
		switch (e.keyCode) {
			case 37:
				lfHeld = true;
				break
			case 39:
				rtHeld = true;
				break
			case 38:
				upHeld = true;
				break
			case 40:
				dnHeld = true;
				break
		}
	}
	
	function handleKeyUp(e) {
		switch (e.keyCode) {
			case 37:
				sp.gotoAndStop('walkLeft')
				keyDn = false;
				lfHeld = false;
				break
			case 39:
				sp.gotoAndStop('walkLeft')
				keyDn = false;
				rtHeld = false;
				break
			case 38:
				sp.gotoAndStop('takeoff')
				keyDn = false
				upHeld = false;
				break
			case 40:
				sp.gotoAndStop('takeoff')
				keyDn = false
				dnHeld = false;
				break
		}
	}
}
KEYBOARDWALK = SID = SIDE = function () {
	$sideSp = side = function () {
		this.initialize();
	}
	$sideSp.prototype = $Sp()
	$sideSp.prototype.Sprite_initialize = side_p.initialize;
	$sideSp.prototype.initialize = function () {
		this.Sprite_initialize(side._SpriteSheet);
		this.paused = false;
	}
	$sideSp.prototype.walkLeft = function () {
		this.gotoAndPlay("walkLeft");
	}
	$sideSp.prototype.takeoff = function () {
		this.gotoAndPlay("takeoff");
	}
	$sideSp._SpriteSheet = $SS({
		images: ["side.png"],
		frames: [[0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [0, 297, 352, 315, 0, 253.95, 49.5], [0, 297, 352, 315, 0, 253.95, 49.5], [352, 297, 383, 326, 0, 186.95, 79.5], [352, 297, 383, 326, 0, 186.95, 79.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 1494, 543, 552, 0, 330.95, 226.5]],
		animations: {walkLeft: [0, 9, true], takeoff: [10, 11, true]}
	})
	st = _$St().t()
	sp = new $sideSp().XY(400, 200).a2(st).walkLeft().sXY(.5).gotoAndStop()
	var lfHeld
	var rtHeld
	var upHeld
	var dnHeld
	var keyDn = false
	document.onkeydown = handleKeyDown
	document.onkeyup = handleKeyUp
	$t(function () {
		if (lfHeld) {
			sp.x -= 15
		}
		if (rtHeld) {
			sp.x += 15
		}
		if (upHeld) {
			sp.y -= 4
		}
		if (dnHeld) {
			sp.y += 4
		}
		if (lfHeld && !keyDn) {
			sp.scX(.5).p('walkLeft')
			keyDn = true
		}
		if (rtHeld && !keyDn) {
			sp.scX(-.5).p('walkLeft')
			keyDn = true
		}
		if (upHeld && !keyDn) {
			sp.p('takeoff')
			keyDn = true
		}
	})
	function handleKeyDown(e) {
		switch (e.keyCode) {
			case 37:
				lfHeld = true;
				break
			case 39:
				rtHeld = true;
				break
			case 38:
				upHeld = true;
				break
			case 40:
				dnHeld = true;
				break
		}
	}
	
	function handleKeyUp(e) {
		switch (e.keyCode) {
			case 37:
				sp.gotoAndStop('walkLeft')
				keyDn = false;
				lfHeld = false;
				break
			case 39:
				sp.gotoAndStop('walkLeft')
				keyDn = false;
				rtHeld = false;
				break
			case 38:
				sp.gotoAndStop('takeoff')
				keyDn = false
				upHeld = false;
				break
			case 40:
				sp.gotoAndStop('takeoff')
				keyDn = false
				dnHeld = false;
				break
		}
	}
	
	function alt() {
		KEYBOARDWALK = SID = SIDE = function () {
			$sideSp = side = function () {
				this.initialize();
			}
			$sideSp.prototype = $Sp()
			$sideSp.prototype.Sprite_initialize = side_p.initialize;
			$sideSp.prototype.initialize = function () {
				this.Sprite_initialize(side._SpriteSheet);
				this.paused = false;
			}
			$sideSp.prototype.walkLeft = function () {
				this.gotoAndPlay("walkLeft");
			}
			$sideSp.prototype.takeoff = function () {
				this.gotoAndPlay("takeoff");
			}
			$sideSp._SpriteSheet = $SS({
				images: ["side.png"],
				frames: [[0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [0, 297, 352, 315, 0, 253.95, 49.5], [0, 297, 352, 315, 0, 253.95, 49.5], [352, 297, 383, 326, 0, 186.95, 79.5], [352, 297, 383, 326, 0, 186.95, 79.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 1494, 543, 552, 0, 330.95, 226.5]],
				animations: {walkLeft: [0, 9, true], takeoff: [10, 11, true]}
			})
			st = _$St().t()
			sp = new $sideSp().XY(400, 200).a2(st).walkLeft().sXY(.5).gotoAndStop()
			var lfHeld
			var rtHeld
			var upHeld
			var dnHeld
			var keyDn = false
			document.onkeydown = handleKeyDown
			document.onkeyup = handleKeyUp
			$t(function () {
				if (lfHeld) {
					sp.x -= 15
				}
				if (rtHeld) {
					sp.x += 15
				}
				if (upHeld) {
					sp.y -= 4
				}
				if (dnHeld) {
					sp.y += 4
				}
				if (lfHeld && !keyDn) {
					sp.scX(.5).p('walkLeft')
					keyDn = true
				}
				if (rtHeld && !keyDn) {
					sp.scX(-.5).p('walkLeft')
					keyDn = true
				}
				if (upHeld && !keyDn) {
					sp.p('takeoff')
					keyDn = true
				}
			})
			function handleKeyDown(e) {
				switch (e.keyCode) {
					case 37:
						lfHeld = true;
						break
					case 39:
						rtHeld = true;
						break
					case 38:
						upHeld = true;
						break
					case 40:
						dnHeld = true;
						break
				}
			}
			
			function handleKeyUp(e) {
				switch (e.keyCode) {
					case 37:
						sp.gotoAndStop('walkLeft')
						keyDn = false;
						lfHeld = false;
						break
					case 39:
						sp.gotoAndStop('walkLeft')
						keyDn = false;
						rtHeld = false;
						break
					case 38:
						sp.gotoAndStop('takeoff')
						keyDn = false
						upHeld = false;
						break
					case 40:
						sp.gotoAndStop('takeoff')
						keyDn = false
						dnHeld = false;
						break
				}
			}
		}
	}
}
function spriteME(){
	meSprite = function () {
		return $sprite(SS).XY(10).drag()
	}
	meSprite = function () {
		meSS = $SS(MeSprite)
		meSp = $Sp(meSS)
		meSp.XY(10)
		meSp.drag()
		return meSp
	}
	meSprite = function () {
		MeSprite = $sprite(MeSprite).XY(10).drag()
		meSS = $SS(MeSprite)
		meSp = $Sp(meSS).XY(10).drag()
		return meSp
	}
	MeSprite = {framerate: 24, images: meSpriteImgs, frames: meSpriteFrames, animations: meSpriteAnims}
	MeSprite = {
		"framerate": 24, "images": ["/guy_0.png", "/guy_1.png"], "frames": [
			[2, 2, 1024, 512, 0, 0, 0],
			[1030, 2, 1024, 512, 0, 0, 0],
			[2058, 2, 1024, 512, 0, 0, 0],
			[2, 518, 1024, 512, 0, 0, 0],
			[1030, 518, 1024, 512, 0, 0, 0],
			[2058, 518, 1024, 512, 0, 0, 0],
			[2, 1034, 1024, 512, 0, 0, 0],
			[1030, 1034, 1024, 512, 0, 0, 0],
			[2058, 1034, 1024, 512, 0, 0, 0],
			[2, 1550, 1024, 512, 0, 0, 0],
			[1030, 1550, 1024, 512, 0, 0, 0],
			[2058, 1550, 1024, 512, 0, 0, 0],
			[2, 2066, 1024, 512, 0, 0, 0],
			[1030, 2066, 1024, 512, 0, 0, 0],
			[2058, 2066, 1024, 512, 0, 0, 0],
			[2, 2582, 1024, 512, 0, 0, 0],
			[1030, 2582, 1024, 512, 0, 0, 0],
			[2058, 2582, 1024, 512, 0, 0, 0],
			[2, 3098, 1024, 512, 0, 0, 0],
			[1030, 3098, 1024, 512, 0, 0, 0],
			[2058, 3098, 1024, 512, 0, 0, 0],
			[2, 2, 1024, 512, 1, 0, 0],
			[1030, 2, 1024, 512, 1, 0, 0],
			[2058, 2, 1024, 512, 1, 0, 0],
			[2, 518, 1024, 512, 1, 0, 0],
			[1030, 518, 1024, 512, 1, 0, 0],
			[2058, 518, 1024, 512, 1, 0, 0],
			[2, 1034, 1024, 512, 1, 0, 0],
			[1030, 1034, 1024, 512, 1, 0, 0],
			[2058, 1034, 1024, 512, 1, 0, 0],
			[2, 1550, 1024, 512, 1, 0, 0],
			[1030, 1550, 1024, 512, 1, 0, 0],
			[2058, 1550, 1024, 512, 1, 0, 0],
			[2, 2066, 1024, 512, 1, 0, 0],
			[1030, 2066, 1024, 512, 1, 0, 0],
			[2058, 2066, 1024, 512, 1, 0, 0],
			[2, 2582, 1024, 512, 1, 0, 0],
			[1030, 2582, 1024, 512, 1, 0, 0],
			[2058, 2582, 1024, 512, 1, 0, 0],
			[2, 3098, 1024, 512, 1, 0, 0]], "animations": {
			"explode": {"frames": [34, 35, 36, 37, 38, 39], "speed": 0.1},
			"spin": {"frames": [25, 26, 27, 28, 29, 30, 31, 32, 33], "speed": 1},
			"jump": {
				"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
					15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "speed": 1
			}
		}
	}
	meSpriteFrames = [
		[2, 2, 1024, 512, 0, 0, 0],
		[1030, 2, 1024, 512, 0, 0, 0],
		[2058, 2, 1024, 512, 0, 0, 0],
		[2, 518, 1024, 512, 0, 0, 0],
		[1030, 518, 1024, 512, 0, 0, 0],
		[2058, 518, 1024, 512, 0, 0, 0],
		[2, 1034, 1024, 512, 0, 0, 0],
		[1030, 1034, 1024, 512, 0, 0, 0],
		[2058, 1034, 1024, 512, 0, 0, 0],
		[2, 1550, 1024, 512, 0, 0, 0],
		[1030, 1550, 1024, 512, 0, 0, 0],
		[2058, 1550, 1024, 512, 0, 0, 0],
		[2, 2066, 1024, 512, 0, 0, 0],
		[1030, 2066, 1024, 512, 0, 0, 0],
		[2058, 2066, 1024, 512, 0, 0, 0],
		[2, 2582, 1024, 512, 0, 0, 0],
		[1030, 2582, 1024, 512, 0, 0, 0],
		[2058, 2582, 1024, 512, 0, 0, 0],
		[2, 3098, 1024, 512, 0, 0, 0],
		[1030, 3098, 1024, 512, 0, 0, 0],
		[2058, 3098, 1024, 512, 0, 0, 0],
		[2, 2, 1024, 512, 1, 0, 0],
		[1030, 2, 1024, 512, 1, 0, 0],
		[2058, 2, 1024, 512, 1, 0, 0],
		[2, 518, 1024, 512, 1, 0, 0],
		[1030, 518, 1024, 512, 1, 0, 0],
		[2058, 518, 1024, 512, 1, 0, 0],
		[2, 1034, 1024, 512, 1, 0, 0],
		[1030, 1034, 1024, 512, 1, 0, 0],
		[2058, 1034, 1024, 512, 1, 0, 0],
		[2, 1550, 1024, 512, 1, 0, 0],
		[1030, 1550, 1024, 512, 1, 0, 0],
		[2058, 1550, 1024, 512, 1, 0, 0],
		[2, 2066, 1024, 512, 1, 0, 0],
		[1030, 2066, 1024, 512, 1, 0, 0],
		[2058, 2066, 1024, 512, 1, 0, 0],
		[2, 2582, 1024, 512, 1, 0, 0],
		[1030, 2582, 1024, 512, 1, 0, 0],
		[2058, 2582, 1024, 512, 1, 0, 0],
		[2, 3098, 1024, 512, 1, 0, 0]
	]
	meSpriteImgs = ["/guy_0.png", "/guy_1.png"]
	meSpriteAnims = {
		explode: $An([34, 35, 36, 37, 38, 39], 0.1),
		spin: $An([25, 26, 27, 28, 29, 30, 31, 32, 33]),
		jump: $An([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])
	}
	MESP = function () {
		st = _$St().t()
		sp = meSprite().a2(st)
		sp.p('jump')
	}
	SPRITE = function (sprite) {
		sprite = $sprite(sprite || SS).XY(10).dg()
		stage = $St('o', 400).dg()//.op(.7),
		stage.A(sprite)
		controls = {
			jump: function () {
				sprite.gotoAndPlay('jump')
			},
			explode: function () {
				sprite.gotoAndPlay('explode')
			},
			spin: function () {
				sprite.gotoAndPlay('spin')
			},
			stop: function () {
				sprite.stop()
			},
			play: function () {
				sprite.play()
			}
		}
		$.d('y', 460, 89).css({
			position: 'absolute',
			top: 200, left: 300,
			padding: 20, opacity: .9
		}).dg().A(
				$.sp(' '),
				$.bt('spin', function () {
					controls.spin()
				}), $.sp(' '),
				$.bt('jump', function () {
					controls.jump()
				}), $.sp(' '),
				$.bt('explode', function () {
					controls.explode()
				}), $.sp(' '),
				$.bt('play', function () {
					controls.play()
				}), $.sp(' '),
				$.bt('stop', function () {
					controls.stop()
				}), $.sp(' '),
				$.bt('meta', function () {
					SPRITE()
				})
		)
		s = sprite
		return controls
	}
	SPRITE = function (sprite) {
		sprite = $sprite(sprite || SS).XY(10).drag()
		stage = $St().dg().al(.5)
		stage.A(sprite)
		controls = {
			jump: function () {
				sprite.gotoAndPlay('jump')
			},
			explode: function () {
				sprite.gotoAndPlay('explode')
			},
			spin: function () {
				sprite.gotoAndPlay('spin')
			},
			stop: function () {
				sprite.stop()
			},
			play: function () {
				sprite.play()
			}
		}
		$.div('yellow', 460, 89).css({
			position: 'absolute',
			top: 200,
			left: 300,
			padding: 20,
			opacity: .9
		}).A().drag().A(
				$.sp(' '),
				$.bt('spin', function () {
					controls.spin()
				}), $.sp(' '),
				$.bt('jump', function () {
					controls.jump()
				}), $.sp(' '),
				$.bt('explode', function () {
					controls.explode()
				}), $.sp(' '),
				$.bt('play', function () {
					controls.play()
				}), $.sp(' '),
				$.bt('stop', function () {
					controls.stop()
				}), $.sp(' '),
				$.bt('meta', function () {
					SPRITE()
				})
		)
		s = sprite
		return controls
	}
	SPRITE = function (sprite) {
		sprite = $sprite(sprite || SS).XY(10).drag()
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite)
		controls = {
			jump: function () {
				sprite.gotoAndPlay('jump')
			},
			explode: function () {
				sprite.gotoAndPlay('explode')
			},
			spin: function () {
				sprite.gotoAndPlay('spin')
			},
			stop: function () {
				sprite.stop()
			},
			play: function () {
				sprite.play()
			}
		}
		$.div('yellow', 460, 89).css({
			position: 'absolute',
			top: 200,
			left: 300,
			padding: 20,
			opacity: .9
		}).A().drag().A(
				$.span(' '),
				$.button('spin', function () {
					controls.spin()
				}), $.span(' '),
				$.button('jump', function () {
					controls.jump()
				}), $.span(' '),
				$.button('explode', function () {
					controls.explode()
				}), $.span(' '),
				$.button('play', function () {
					controls.play()
				}), $.span(' '),
				$.button('stop', function () {
					controls.stop()
				}), $.span(' '),
				$.button('meta', function () {
					SPRITE()
				})
		)
		s = sprite
		return controls
	}
	SPRITE2 = function () {
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite = $sprite(MeSprite).XY(10).drag())
	}
	meSprite = function () {
		return $sprite(SS).XY(10).drag()
	}
	SPRITE = function (sprite) {
		sprite = $sprite(sprite || SS).XY(10).drag()
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite)
		controls = {
			jump: function () {
				sprite.gotoAndPlay('jump')
			},
			explode: function () {
				sprite.gotoAndPlay('explode')
			},
			spin: function () {
				sprite.gotoAndPlay('spin')
			},
			stop: function () {
				sprite.stop()
			},
			play: function () {
				sprite.play()
			}
		}
		$.div('yellow', 460, 89).css({
			position: 'absolute',
			top: 200,
			left: 300,
			padding: 20,
			opacity: .9
		}).A().drag().A(
				$.span(' '),
				$.button('spin', function () {
					controls.spin()
				}), $.span(' '),
				$.button('jump', function () {
					controls.jump()
				}), $.span(' '),
				$.button('explode', function () {
					controls.explode()
				}), $.span(' '),
				$.button('play', function () {
					controls.play()
				}), $.span(' '),
				$.button('stop', function () {
					controls.stop()
				}), $.span(' '),
				$.button('meta', function () {
					SPRITE()
				})
		)
		s = sprite
		return controls
	}
	SPRITE2 = function () {
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite = $sprite(SS).XY(10).drag())
	}
	meSprite = function () {
		return $sprite(SS).XY(10).drag()
	}
	SPRITE = function (sprite) {
		sprite = $sprite(sprite || SS).XY(10).drag()
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite)
		controls = {
			jump: function () {
				sprite.gotoAndPlay('jump')
			},
			explode: function () {
				sprite.gotoAndPlay('explode')
			},
			spin: function () {
				sprite.gotoAndPlay('spin')
			},
			stop: function () {
				sprite.stop()
			},
			play: function () {
				sprite.play()
			}
		}
		$.div('yellow', 460, 89).css({
			position: 'absolute',
			top: 200,
			left: 300,
			padding: 20,
			opacity: .9
		}).A().drag().A(
				$.span(' '),
				$.button('spin', function () {
					controls.spin()
				}), $.span(' '),
				$.button('jump', function () {
					controls.jump()
				}), $.span(' '),
				$.button('explode', function () {
					controls.explode()
				}), $.span(' '),
				$.button('play', function () {
					controls.play()
				}), $.span(' '),
				$.button('stop', function () {
					controls.stop()
				}), $.span(' '),
				$.button('meta', function () {
					SPRITE()
				})
		)
		s = sprite
		return controls
	}
	SPRITE2 = function () {
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite = $sprite(SS).XY(10).drag())
	}}
	function zoee(){
		cjs.parseZoe = function (sprObj) {
			
			
			//fix source (needs a '/')
			sprObj.images[0] = S.eL(sprObj.images[0])
			//set next to false, on all anims
			//_.e(sprObj.animations, function(anim){anim.next = false})
			//to do: parse it! (get rid of unnecessary json strings in keys)
			return sprObj
		}
		cjs.zoeSp = cjs.zoeSprite = cjs.sprite = $sprite = function (sS) {
			if (sS.images) {
				sS = cjs.parseZoe(sS)
				sS = $SS(sS)
			}
			return $Sp(sS)
		}
		cjs.parseZoe = function (sprObj) {
			//fix source (needs a '/')
			sprObj.images[0] = S.eL(sprObj.images[0])
			//set next to false, on all anims
			//_.e(sprObj.animations, function(anim){anim.next = false})
			//to do: parse it! (get rid of unnecessary json strings in keys)
			return sprObj
		}
		$sprite = cjs.zoeSp = cjs.zoeSprite = cjs.sprite = function (sS) {
			if (sS.images) {
				sS = cjs.parseZoe(sS)
				sS = $SS(sS)
			}
			return $Sp(sS)
		}
		SPRITE = function (sprite) {
			sprite = $sprite(sprite || SS).XY(10).dg()
			stage = $St('o', 400).dg()//.op(.7),
			stage.A(sprite)
			controls = {
				jump: function () {
					sprite.gotoAndPlay('jump')
				},
				explode: function () {
					sprite.gotoAndPlay('explode')
				},
				spin: function () {
					sprite.gotoAndPlay('spin')
				},
				stop: function () {
					sprite.stop()
				},
				play: function () {
					sprite.play()
				}
			}
			$.d('y', 460, 89).css({
				position: 'absolute',
				top: 200, left: 300,
				padding: 20, opacity: .9
			}).dg().A(
					$.sp(' '),
					$.bt('spin', function () {
						controls.spin()
					}), $.sp(' '),
					$.bt('jump', function () {
						controls.jump()
					}), $.sp(' '),
					$.bt('explode', function () {
						controls.explode()
					}), $.sp(' '),
					$.bt('play', function () {
						controls.play()
					}), $.sp(' '),
					$.bt('stop', function () {
						controls.stop()
					}), $.sp(' '),
					$.bt('meta', function () {
						SPRITE()
					})
			)
			s = sprite
			return controls
		}
		cjs.sprite100 = function (a) {
			return cjs.zoeSp(a).rXY(50).al(.8)
		}
		ZFR = ZOEFRAMES = function () {
			spr = $Sp({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = $St(1000)
			s.A(spr.drag())
			ZOEFRAMES = function () {
				z()
				spr = cjs.sprite({
					"framerate": 24,
					"images": ["/sprite2.png"],
					"frames": [
						[0, 0, 128, 128, 0, -176, -161],
						[128, 0, 128, 128, 0, -176, -161],
						[256, 0, 128, 128, 0, -176, -161]
					],
					"animations": {
						"weird": {"speed": 1, "frames": [2]},
						"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
					}
				})
				anis = spr.spriteSheet._animations
				// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
				s = cjs.stg(1000).A()
				s.A(spr.drag())
			}
		}
		ZNA = ZOENOANIM = function () {
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/zoetest.png"],
				"frames": [
					[0, 0, 512, 256, 0, -133, -143],
					[512, 0, 512, 256, 0, -133, -143],
					[1024, 0, 512, 256, 0, -133, -143]
				],
				"animations": {}
			})
			s = $St(1000).A()
			s.A(spr)
		}
		ZFR = ZOEFRAMES = function () {
			spr = $Sp({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = $St(1000)
			s.A(spr.drag())
			ZOEFRAMES = function () {
				z()
				spr = cjs.sprite({
					"framerate": 24,
					"images": ["/sprite2.png"],
					"frames": [
						[0, 0, 128, 128, 0, -176, -161],
						[128, 0, 128, 128, 0, -176, -161],
						[256, 0, 128, 128, 0, -176, -161]
					],
					"animations": {
						"weird": {"speed": 1, "frames": [2]},
						"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
					}
				})
				anis = spr.spriteSheet._animations
				// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
				s = cjs.stg(1000).A()
				s.A(spr.drag())
			}
		}
		ZFR = ZOEFRAMES = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = cjs.stg(1000).A()
			s.A(spr.drag())
			ZOEFRAMES = function () {
				spr = cjs.sprite({
					"framerate": 24,
					"images": ["/sprite2.png"],
					"frames": [
						[0, 0, 128, 128, 0, -176, -161],
						[128, 0, 128, 128, 0, -176, -161],
						[256, 0, 128, 128, 0, -176, -161]
					],
					"animations": {
						"weird": {"speed": 1, "frames": [2]},
						"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
					}
				})
				anis = spr.spriteSheet._animations
				// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
				s = cjs.stg(1000).A()
				s.A(spr.drag())
			}
		}
		ZNA = ZOENOANIM = function () {
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/zoetest.png"],
				"frames": [
					[0, 0, 512, 256, 0, -133, -143],
					[512, 0, 512, 256, 0, -133, -143],
					[1024, 0, 512, 256, 0, -133, -143]
				],
				"animations": {}
			})
			s = cjs.stg(1000).A()
			s.A(spr)
		}
		ZOENOANIM = function () {
			z()
			spr = $Sp({
				"framerate": 24,
				"images": ["/zoetest.png"],
				"frames": [
					[0, 0, 512, 256, 0, -133, -143],
					[512, 0, 512, 256, 0, -133, -143],
					[1024, 0, 512, 256, 0, -133, -143]
				],
				"animations": {}
			})
			s = $St(1000).A()
			s.A(spr)
			// spr.p()
		}//F
		ZOENOANIM = function () {
			z()
			spr = $Sp({
				"framerate": 24,
				"images": ["/zoetest.png"],
				"frames": [
					[0, 0, 512, 256, 0, -133, -143],
					[512, 0, 512, 256, 0, -133, -143],
					[1024, 0, 512, 256, 0, -133, -143]
				],
				"animations": {}
			})
			s = $St(1000).A()
			s.A(spr)
			// spr.p()
		}//F
		ZOEFRAMES = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = $St(1000).A()
			s.A(spr.drag())
		}//F
		ZOENOANIM = function () {
			z()
			spr = $Sp({
				"framerate": 24,
				"images": ["/zoetest.png"],
				"frames": [
					[0, 0, 512, 256, 0, -133, -143],
					[512, 0, 512, 256, 0, -133, -143],
					[1024, 0, 512, 256, 0, -133, -143]
				],
				"animations": {}
			})
			s = $St(1000).A()
			s.A(spr)
			// spr.p()
		}//F
		ZOEFRAMES = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = $St(1000).A()
			s.A(spr.drag())
		}//F
		ZOENOANIM = function () {
			z()
			spr = $Sp({
				"framerate": 24,
				"images": ["/zoetest.png"],
				"frames": [
					[0, 0, 512, 256, 0, -133, -143],
					[512, 0, 512, 256, 0, -133, -143],
					[1024, 0, 512, 256, 0, -133, -143]
				],
				"animations": {}
			})
			s = $St(1000).A()
			s.A(spr)
			// spr.p()
		}//F
		ZOEFRAMES = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = $St(1000).A()
			s.A(spr.drag())
		}//F
		ZOENOANIM = function () {
			z()
			spr = $Sp({
				"framerate": 24,
				"images": ["/zoetest.png"],
				"frames": [
					[0, 0, 512, 256, 0, -133, -143],
					[512, 0, 512, 256, 0, -133, -143],
					[1024, 0, 512, 256, 0, -133, -143]
				],
				"animations": {}
			})
			s = $St(1000).A()
			s.A(spr)
			// spr.p()
		}//F
		ZOEFRAMES = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = $St(1000).A()
			s.A(spr.drag())
		}//F
		ZOEFRAMES = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = $St(1000).A()
			s.A(spr.drag())
		}//F
		cjs.parseZoe = function (sprObj) {
			
			
			//fix source (needs a '/')
			sprObj.images[0] = S.eL(sprObj.images[0])
			//set next to false, on all anims
			//_.e(sprObj.animations, function(anim){anim.next = false})
			//to do: parse it! (get rid of unnecessary json strings in keys)
			return sprObj
		}
		cjs.zoeSp = cjs.zoeSprite = cjs.sprite = $sprite = function (sS) {
			if (sS.images) {
				sS = cjs.parseZoe(sS)
				sS = $SS(sS)
			}
			return $Sp(sS)
		}
		cjs.parseZoe = function (sprObj) {
			
			
			//fix source (needs a '/')
			sprObj.images[0] = S.eL(sprObj.images[0])
			//set next to false, on all anims
			//_.e(sprObj.animations, function(anim){anim.next = false})
			//to do: parse it! (get rid of unnecessary json strings in keys)
			return sprObj
		}
		cjs.zoeSp = cjs.zoeSprite = cjs.sprite = $sprite = function (sS) {
			if (sS.images) {
				sS = cjs.parseZoe(sS)
				sS = $SS(sS)
			}
			return $Sp(sS)
		}
		$sprite = cjs.zoeSp = cjs.zoeSprite = cjs.sprite = function (sS) {
			if (sS.images) {
				sS = cjs.parseZoe(sS)
				sS = $SS(sS)
			}
			return $Sp(sS)
		}
		cjs.sprite100 = function (a) {
			return cjs.zoeSp(a).rXY(50).al(.8)
		}
		cjs.sprite100 = function (a) {
			return cjs.zoeSp(a).rXY(50).al(.8)
		}
		cjs.sprite100 = function (a) {
			return cjs.zoeSp(a).rXY(50).al(.8)
		}
		cjs.sprite100 = function (a) {
			return cjs.zoeSp(a).rXY(50).al(.8)
		}
		cjs.sprite100 = function (a) {
			return cjs.zoeSp(a).rXY(50).al(.8)
		}}
		zoee()