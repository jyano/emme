 
 
grad = setup = function () {
	cv = $('<canvas width=500 height=400 id="canvas">').a2($('body'))
	s = st = stage = new cjs.Stage("canvas", 420, 500, 30)
	h = new cjs.Shape().a2(st)
	g = h.graphics
	return g
}
  
  
gx.bLGF = function () {
	this.beginLinearGradientFill.apply(this, arguments)
	return this
}
gx.bRGF = function () {
	this.beginRadialGradientFill.apply(this, arguments)
	return this
}
