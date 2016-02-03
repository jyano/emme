w.keys = function () {
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		$.K.l = 1
		$.K.L = 0
		$.K.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		$.K.l = false
		$.K.l = 0;
		$.K.L = 1
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		$.K.r = 1
		$.K.dir = 'right'
		$.K.R = 0
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		$.K.r = 0;
		$.K.R = 1
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		$.K.u = 1;
		$.K.U = 0
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		$.K.u = 0;
		$.K.U = 1
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		$.K.d = 1;
		$.K.D = 0
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		$.K.d = 0;
		$.K.D = 1
	})
}