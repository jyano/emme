_$Sp = function (sS, x, y) {

	var sp = new cjs.Sp(sS)
	
	sp.XY(N(x, 0), N(y, 0))
	
	return sp
}

$Sp = function (sS, x, y) {
	var sp = _$Sp(
	
			cjs.toSS(sS), x, y)
	sp.sS = sp.ss = sp.spriteSheet

	return sp
}