W = function (a, b) {
	var w = new b2d.World(a, D(b) ? b : false)
	w.startListening()
	return w
}
