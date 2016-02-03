$.fn.bdC = $.fn.borCol = $.fn.bdC = $.fn.borderColor = function (a) {
	return this.css("border-color", oO('c', a || 'r'))
}
$.fn.bS = $.fn.borSty = $.fn.borderStyle = function (style) {
	this.css('border-style', style)
	return this
}
$.fn.borWidth = $.fn.bW = $.fn.borderWidth = function (w) {
	this.css('border-width', w)
	return this
}
$.fn.bor = function (border) {
	if (U(border)) {
		return this.css('border')
	}
	this.css('border', border);
	return this
}
$.fn.bdC = function (a) {
	return this.css("border-color", oO('c', a || 'r'))
}
$.fn.bgImg = $.fn.backgroundImage = $.fn.bg = function (bg) {
	if (U(bg)) {
		return this.css('background')
	}
	this.css('background', bg)
	return this
}
$.fn.bgP = function (bg) {
	if (U(bg)) {
		return this.css('backgroundPosition')
	}
	this.css('backgroundPosition', bg)
	return this
}
$.fn.bgI = function (url) {//set background image
	this.bgI('url("' + $.src(url) + '")');
	return this
}
$.fn.pBgI = $.fn.bp = function (x, y) {
	var g = G(arguments), x = g[0], y = g[1];
	x = N(x) ? x : 0;
	y = N(y) ? y : 0;
	this.css({backgroundPos: x + 'px ' + y + 'px'});
	return this
}
BGI = function () {
	$.fn.em = function (em) {
		em = N(em, 1)
		this.css('fontSize', '' + em + 'em')
		return this
	}
	$bgIUrl = function (i) {
		i = i || 'me'
		return 'url("/' + i + '.png")'
	}
	$s({
		bd: {
			'background-image': 'url("/me.png")',
			'background-repeat': 'repeat-x'
		},
		d: {
			'background-image': 'url("/chicks.png")',
			'background-repeat': 'repeat-y'
		}
	})
	$.d('r', 400, 500).dgb().em(4)
		//.css('fontSize','4em')
			.A("faaffffdfads").A($.i("me"))
}