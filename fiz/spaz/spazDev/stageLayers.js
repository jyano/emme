w.HUD = function () {
	var w = this,
			back = w.s.HUD
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}//move to x-middle of stage
w.dbLayers = function () {
	var w = this
	w.dr(75, 75, 150, 150, '-')
	w.dr(140, 0, 20, 300)
	w.dr(0, 150, 300, 20)
	w.dr(100, 100, 100, 100, '+')
	return w
}
w.lay = function () {
	var w = this
	w.back().HUD().db()
	return w
}