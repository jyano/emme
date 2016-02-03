ScrollW = function (W, H, wW, wH) {

//cjs.Ticker.removeAllEventListeners() 

// w.show(function(){})//not working with scroll

	var o = bx.oParse(W,H,wW,wH)
	
	w.initialDimensions()

	cjs.watchKeys()

	w = b2d.world(o.g)
	
	w.o = o
	if (o.z != false) {z()}
	w.gx(o).setBg(o).dd(o).db().startListening()
	.wMouse().wMouseJ(o).walls(o).u(o)
	w.scrollDimensions(o)
	return w
}
 