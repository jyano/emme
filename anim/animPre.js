cjs.C = cjs.Container
cjs.DO = cjs.DisplayObject
cjs.Sp = cjs.Sprite;
cjs.SS = cjs.SpriteSheet
sp = cjs.Sp.prototype
dO = cjs.DO.prototype
mc = cjs.MovieClip.prototype
tw = cjs.Tween.prototype
sS = cjs.SpriteSheet.prototype
$SSU = cjs.SSU = cjs.sSU = cjs.SpriteSheetUtils
Sprites =sprites = spriteSheets = {}
Sp = spriteQLoader = function (sS, fn, st) {
	return Ql({
		manfifest: makeManifest(sS),
		complete: function (i) {
			var sp = $Sp($SS(sS))
			if (fn) {
				fn(sp)
			}
			if (st) {
				st.A(sp)
			}
		}
	})
}
function bool() {
	cjs.iSp = function (sp) {
		return O(sp) && F(sp.toString) && sp.toString().indexOf('Sprite') != -1 && !cjs.iSS(sp)
	}
	cjs.iSS = function (sp) {
		return O(sp) && F(sp.toString)
				&& sp.toString().indexOf('SpriteSheet') != -1
	}
	cjs.toSS = function (sS) {
		if (U(sS)) {
			return
		}
		//call a spritesheet by name
		if (S(sS)) {
			sS = cjs._sp[sS]
		}
		//it if it is a sS literal, it makes it into a sS
		return sS.images || sS.i ? $SS(sS) : sS
	}
}
dO.nW = function () {
	return this.nominalBounds.width
}
$S.styCan = {canvas: {outline: 'red 10px dashed'}}
$.c2 = function (w, y) {
	var c = $.c(w || 960, h || 200)
	c.id('canvas')
	c.k('canvas can')
	return c
}
i = cjs.DisplayObject.prototype
i.tw = function () {
	var i = this, g = G(arguments), tw
	g.unshift(i)
	tw = _tw = $Tw.apply(null, g)
	return tw
}
tw = cjs.Tween.prototype
cjs.Tw = cjs.Tween;
cjs.Tw.g = cjs.Tw.get
tw = cjs.Tween.prototype
cjs.Tw = cjs.Tween;
mc = cjs.MovieClip.prototype
tl = cjs.Timeline.prototype
cjs.C = cjs.Container
cjs.DO = cjs.DisplayObject
dO = cjs.DO.prototype