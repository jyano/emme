w.stats = function (n) {
	var w = this
	_d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
	w.mdq(function (fx) {
		_f = _d._fix = fx;
		_b = _f.B()
	})
	if (n == 0) {
		z(upd)
	}
	else {
		_.ev(N(n, .2), upd)
	}
	return w
}
function upd() {
	var f, b;
	if (_d._fix) {
		f = _d._fix
		b = f.B()
		_d.T(
				'ty: ' + (b.iD() ? 'dyn' : 'stat'),
				'x: ' + b.X(),
				'y: ' + b.Y(),
				'fK: ' + f.K(), 'bK: ' + b.K(),
				'sen: ' + f.sen(),
				'd: ' + f.d(),
				'fr: ' + f.fr(),
				'r: ' + f.r(),
				'bMass:' + parseInt(f.B().mass()),
				'bNum:' + f.B().n()
		)
	}
}
function upd() {
	var f, b;
	if (_d._fix) {
		f = _d._fix
		b = f.B()
		_d.T(
				'ty: ' + (b.iD() ? 'dyn' : 'stat'),
				'x: ' + b.X(),
				'y: ' + b.Y(),
				'fK: ' + f.K(), 'bK: ' + b.K(),
				'sen: ' + f.sen(),
				'd: ' + f.d(),
				'fr: ' + f.fr(),
				'r: ' + f.r(),
				'bMass:' + parseInt(f.B().mass()),
				'bNum:' + f.B().n()
		)
	}
}
w.stats = function (n) {
	var w = this
	_d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
	w.mdq(function (fx) {
		_f = _d._fix = fx;
		_b = _f.B()
	})
	if (n == 0) {
		z(upd)
	}
	else {
		_.ev(N(n, .2), upd)
	}
	return w
}