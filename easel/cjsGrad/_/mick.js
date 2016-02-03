ct.mick = function (x, y, lf) {
	var ct = this,
			h = ct.h(x, y).drag()
					.c({l: 20, C: 0, lf: lf || 1})
					.dc([50], [200, 0, 100], [100, 100, 100])
	ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1})
			.dc([50], [200, 0, 100], [100, 100, 100])
	return h
}