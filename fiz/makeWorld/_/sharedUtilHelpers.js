higher = function (a, b) {
	return a > b ? a : b
}
lower = function (a, b) {
	return a > b ? b : a
}
setFixtures = function () {
	bD = $sB()
	fD = $fD().de(1).fr(.5).re(.8).H($pF())
}
makeShapeOnDblClk = function () {


//DEMO: add a 'fix' on $$ //DEMO: add 10 dynamic sq or cir to world
	x.$$(function (x, y) {
		world.a(
				yn() ? DynamicBodyDef(x, y) : StaticBodyDef(x, y), fix()
		)
	})
}