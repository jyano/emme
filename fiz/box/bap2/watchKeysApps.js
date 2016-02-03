TESTWATCHKEYS = function () {
	z()
	$.test = true
	cjs.watchKeys()
}
KEYWATCH = function () {
	J = cjs
	$.test = true
	J.Keys.l = J.Keys.left = false
	J.Keys.r = J.Keys.right = false
	J.Keys.u = J.Keys.up = false
	J.Keys.d = J.Keys.down = false
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		J.Keys.l = J.Keys.left = false
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		J.Keys.r = J.Keys.right = true
		J.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		J.Keys.r = J.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		J.Keys.u = J.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		J.Keys.u = J.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		J.Keys.d = J.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		J.Keys.d = J.Keys.down = false
	})
}
INPUTKEYS = function () {
	z()
	input = $.input().A()
	$.span('span ').C('y').A().id('spn')
	input.on('keypress', function (e) {
		$('#spn').text(
				$('#spn').text() + e.which
		)
	})
			.on('keyup', function (e) {
				if (e.which == 13) {
					$l('enter')
					$('body').C('*')
				}
			})
			.on('keydown', function (e) {
				var key = e.which, //why these nums?
						result = (key > 48 && key < 57) || ( key > 96 && key < 105) || (key == 8)
				$l('result: ' + result)
			})
}
INPUTUPDOWN = function () {
	$.input().A()
	onTextInputKeyup(function (e) {
		var dir = (parseInt(e.which) == 38) ? 'up'
				: (parseInt(e.which) == 40) ? 'down'
				: 'neither'
		$l(dir)
	})
	function onTextInputKeyup(func) {
		return $('input[type=text]').on('keyup', func)
	}
}
TESTWATCHKEYS = function () {
	z()
	$.test = true
	cjs.watchKeys()
}
TESTWATCHKEYS = function () {
	z()
	$.test = true
	cjs.watchKeys()
}
KEYWATCH = function () {
	J = cjs
	$.test = true
	J.Keys.l = J.Keys.left = false
	J.Keys.r = J.Keys.right = false
	J.Keys.u = J.Keys.up = false
	J.Keys.d = J.Keys.down = false
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		J.Keys.l = J.Keys.left = false
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		J.Keys.r = J.Keys.right = true
		J.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		J.Keys.r = J.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		J.Keys.u = J.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		J.Keys.u = J.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		J.Keys.d = J.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		J.Keys.d = J.Keys.down = false
	})
}
 