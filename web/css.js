styles()
rules()
flex()
function styles() {
	$.fn.s = $.fn.ss = function (css, val) {
		if (S(css)) {
			css = Ob(css, val)
		}
		css = $sty(css)
		return this.css(css)
	}
	$.fn.k = $.fn.K = function () {
		$.fn.addClass.apply(this, arguments);
		return this
	}
	$.fn.tK = $.fn.ggK = $.fn.toggleClass
	$.fn.rK = $.fn.rmK = $.fn.xK = $.fn.removeClass
	$.fn.dp = $.fn.display = function (v) {
		var q = this, g = G(arguments)
		return U(v) ? q.css('display') :
				q.css('display', v)
	}
	$.fn.ps = $.fn.pos = $.fn.P = $.fn.p = function (pos, x, y) {
		var q = this, g = G(arguments)
		if (g.u) {
			return q.css('position')
		}
		q.css('position', oO('p', pos))
		if (N(g.s)) {
			q.X(g.s)
		}
		if (g.t) {
			q.Y(g.t)
		}
		return q
	}
	$.fn.psA = $.fn.ab = $.fn.abs = function (x, y) {
		return this.P('a', x, y)
	}
	$.fn.none = function () {
		return this.css('display', 'none')
	}
	$.fn.ov = $.fn.overflow = function (overflow) {
		var q = this, g = G(arguments)
		if (U(overflow)) {
			return q.css('overflow')
		}
		q.css('overflow', overflow);
		return q
	}
	$.toColor = function (n1, n2, n3, n4) {
		return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")" : $r('c', n1)
	}
	$.fn.al = function (z) {
		if (U(z)) {
			return this.css('opacity')
		}
		this.css('opacity', z)
		return this
	}
	$.fn.col = function (col) {
		return this.css('color', oO('c', col))
	}
	$.fn.C = function (col, c2) {
		if (c2) {
			return this.C(col).col(c2)
		}
		if (col == '*') {
			col = Yano.random()
		}
		return this.css('backgroundColor', oO('c', col))
	}
	$.C = function (Col, col) {
		var bd = $('body')
		bd.C(Col)
		if (col) {
			bd.col(col)
		}
		return $
	}
 
	$.fn.pad = function (padding) {
		if (U(padding)) {
			return this.css('padding')
		}
		this.css('padding', padding);
		return this
	}
	$.fn.pad = function (a) {
		return this.css("padding", a || 0)
	}
	$.fn.padTop = function (padding) {
		if (U(padding)) {
			return this.css('paddingTop')
		}
		this.css('paddingTop', padding);
		return this
	}
	$.fn.pT = $.fn.padTop = function (padding) {
		if (U(padding)) {
			return this.css('paddingTop')
		}
		this.css('paddingTop', padding);
		return this
	}
	$.fn.padLeft = function (padding) {
		if (U(padding)) {
			return this.css('paddingLeft')
		}
		this.css('paddingLeft', padding);
		return this
	}
	$.fn.pL = $.fn.padLeft = function (padding) {
		if (U(padding)) {
			return this.css('paddingLeft')
		}
		this.css('paddingLeft', padding);
		return this
	}
	$.fn.pR = $.fn.padRight = function (padding) {
		if (U(padding)) {
			return this.css('paddingRight')
		}
		this.css('paddingRight', padding);
		return this
	}
	$.fn.padRight = function (padding) {
		if (U(padding)) {
			return this.css('paddingRight')
		}
		this.css('paddingRight', padding);
		return this
	}
	$.fn.pad = function (a) {
		return this.css("padding", a || 0)
	}
	$.fn.pdB = function (a) {
		return this.css("padding-bottom", a || 0)
	}
	$.fn.pB = $.fn.padBottom = function (padding) {
		if (U(padding)) {
			return this.css('paddingBottom')
		}
		this.css('paddingBottom', padding);
		return this
	}
	$.fn.pH = $.fn.padHor = function (a) {
		return this.padLeft(a).padRight(a)
	}
	$.fn.pV = $.fn.padVer = function (a) {
		return this.padTop(a).padBottom(a)
	}
	$.fn.mgT = function (a) {
		return this.css("margin-top", a || 0)
	}
	$.fn.marTop = $.fn.mT = $.fn.marTop = function (margin) {
		if (U(margin)) {
			return this.css('marginTop')
		}
		this.css('marginTop', margin);
		return this
	}
	$.fn.marLeft = $.fn.mL = $.fn.marLeft = function (margin) {
		if (U(margin)) {
			return this.css('marginLeft')
		}
		this.css('marginLeft', margin);
		return this
	}
	$.fn.marRight = $.fn.mR = $.fn.marRight = function (margin) {
		if (U(margin)) {
			return this.css('marginRight')
		}
		this.css('marginRight', margin);
		return this
	}
	$.fn.marBottom = $.fn.mB = $.fn.marBottom = function (margin) {
		if (U(margin)) {
			return this.css('marginBottom')
		}
		this.css('marginBottom', margin);
		return this
	}
	$.fn.marHor = $.fn.mH = $.fn.marHor = function (a) {
		return this.marLeft(a).marRight(a)
	}
	$.fn.mV = $.fn.marVer = $.fn.marVer = function (a) {
		return this.marTop(a).marBottom(a)
	}
	$mar = $.mar = function () {
		var g = G(arguments), o
		o = N(g[3]) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g[3] + 'px' :
				N(g.t) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g.f + 'px' :
						N(g.s) ? g.f + 'px ' + g.s + 'px ' + g.s + 'px ' + g.f + 'px' :
								N(g.f) ? g.f + 'px ' + g.f + 'px ' + g.f + 'px ' + g.f + 'px' :
										'10px 10px 10px 10px'
		return o
	}
	$.mar = function (num) {
		$s({$: {M: N(num, 10)}})
		return $
	}
	$.fn.mar = function (margin) {
		if (U(margin)) {
			return this.css('margin')
		}
		this.css('margin', margin);
		return this
	}
 
	function size() {
		$.fn.getPosition = $.fn.getTotalOffset = function () {
			alert('$.fn.getPosition')
			var e = this, x = 0, y = 0
			while ($.tEl(e) && e.tagName) {
				y += e.offsetTop
				x += e.offsetLeft
				if (isBodyElement(e)) {
					e = 0
				}
				e = e.offsetParent || e
			}
			return {x: x, y: y}//just gets the TOTAL offset of ANY element
		}
		$.fn.X = function (l) {
			var q = this, g = G(arguments)
			if (N(l)) {
				q.css(
						'left',
						g.p ? q.X() + l :
								l
				)
				return q
			}
			l = q.css('left')
			return l == 'auto' ? 'auto' : parseInt(l)
			/*
			 $.fn.X = $.fn.left = function (left) {
			 if (N(left)) {
			 return this.css('left', left)
			 }
			 var left = this.css('left')
			 if (left == 'auto') {
			 return 'auto'
			 }
			 return parseInt(left)
			 }
			 */
		}
		$.fn.Y = $.fn.top = function (top) {
			if (N(top)) {
				return this.css('top', top)
			}
			var top = this.css('top')
			if (top == 'auto') {
				return 'auto'
			}
			return parseInt(top)
			/*
			 $.fn.Y = $.fn.top = function (top) {
			 if (N(top)) {
			 return this.css('top', top)
			 }
			 var top = this.css('top')
			 if (top == 'auto') {
			 return 'auto'
			 }
			 return parseInt(top)
			 }
			 */
		} //$.fn.t
		$.fn.XY = function (x, y) {
			x = N(x) ? x : 0
			if (U(y)) {
				y = x
			}
			return this.X(x).Y(y)
			/*
			 $.fn.XY = function (x, y) {
			 x = N(x) ? x : 0
			 if (U(y)) {
			 y = x
			 }
			 return this.X(x).Y(y)
			 }
			 */
		}
		$.fn.L = $.fn.l = $.fn.left = function (l) {
			var q = this, g = G(arguments)
			if (N(l)) {
				q.css('left', l)
				return q
			}
			l = q.css('left')
			return l == 'auto' ? 'auto' : q.position().left
			function old() {
				$.fn.L = function (n) {
					if (U(n)) {
						return this.css('left')
					}
					this.css('left', n)
					return this
				}
			}
		}
		$.fn.right = $.fn.R = $.fn.rit = function (right) {
			if (U(right)) {
				return this.css('right')
			}
			this.css('right', right)
			return this
		}
		$.fn.LR = function (l, r) {
			var q = this
			if (O(l)) {
				r = l.r;
				l = l.l
			}
			if (N(l)) {
				q.L(l)
			}
			if (N(r)) {
				q.R(r)
			}
			return q
		}
		$.fn.bottom = $.fn.bot = $.fn.B = function (bottom) {
			if (U(bottom)) {
				return this.css('bottom')
			}
			this.css('bottom', bottom)
			return this
		}
		$.fn.zi = $.fn.zIndex = function (z) {
			if (U(z)) {
				return this.css('z-index')
			}
			this.css('z-index', z);
			return this
		}
		$.fn.os = function () {
			var os = this.offset()
			return os
		}
		$.fn.sz = function (sz) {
			return this.at('size', sz)
		}
		$.fn.ouH = $.fn.outerHeight
		$.fn.W = function (w) {
			return w ? this.width(w) : this.width()
		}
		$.fn.H = function (h) {
			return h ? this.height(h) : this.height()
		}
		
		  $.fn.WH = function (w, h) {
			h = h || w;
			
			return this.W(w).H(h)
		}
		
		$.fn.MW = $.fn.maxW = function (a) {
			return this.css('max-width', a)
		}
		$.fn.mW = $.fn.minW = function (a) {
			return this.css('min-width', a)
		}
		$.fn.mH = $.fn.minH = function (a) {
			return this.css('min-height', a)
		}
		$.fn.maxH = function (a) {
			return this.css('max-height', a)
		}
	 
		$.fn.oH = $.fn.outerHeight
		$.fn.long = function () {
			return this.css({width: '100%'})
		}
		
		$.fn.z =  function (z, y) {
			
			
			z = N(z,0)
			y = N(y,z)
			
			z *= 100
			y *=100
			return this.W(z).H(y)
		}
		
	}
	
	size()
}
function rules() {
	$s = function () {
		var g = G(arguments), rulesOb
		if (g.u) {
			return $l($('style').oh())
		}
		if (g.O) {
			rulesOb = g.f
		}
		else if (g.s) {
			rulesOb = {}
			rulesOb[g.f] = g.s
		}
		var rulesStr = $rules(rulesOb)
		$('head').A($.sty(rulesStr))
		return rulesStr
	}
	$.sty = $.Sty = function (h) {
		var g = G(arguments)
		var styleTag = $('<style>')
				.at({type: 'text/css'});
		styleTag.h(h)
		if (!g.n) {
			styleTag.A()
		}
		return styleTag
	}
	$sel = function (sel) {
		if (A(sel)) {
			sel = '{' + sel[0] + ':' + sel[1] + '; ' + '}'
		}
		if (sel == '$') {
			return '*'
		}
		sel = sel.replace('_', '.')
				.replace('$', '#')
		_.e({
			bd: 'body', sp: 'span',
			bt: 'button',
			sc: 'section', nv: 'nav',
			d: 'div',
			i: 'img', ip: 'input', hdr: 'header', n: 'nav'
		}, function (v, k) {
			if (sel == k) {
				sel = v
			}
		})
		return sel
	}
	$rule = function (sel, decs, rulesOb) {
		return $sel(sel) + ' ' + $decBlk(decs, rulesOb)
	}
	$decBlk = function (decs, ob) {
		_dec = function (v, k) {
			return k + ':' + v + '; '
		}
		ob = ob || {}
		var decBlk = ' ',
				Decs = {}
		if (S(decs)) {
			return decs
		} //for @media ??
		$plugin(decs)
		$mixin(decs, ob)
		_.e(decs, function (v, k) {
			if (k == 'mixins' || k == 'plugins') {
				return
			}
			$setPropVal = function (ob, key, val) {
				ob[key] = $val(val, key)
			}
			Decs[oO('s', k)] = $val(v, k)
		})
		_.e(Decs, function (v, k) {
			var dec = _dec(v, k)
			//$l('dec: ' + dec)
			decBlk += dec
		})
		//$l('decBlk: ' + decBlk)
		_brace = function (str) {
			return '{' + (str || '') + '}'
		}
		return _brace(decBlk)
	}
	$val = function (v, k) {
		if (A(v)) {
			return $helperValue(v, k)
		}
		return N(v) && v > 10 ? $S(v) + 'px' :
				oO(k, v, 'R')
	}
	$sty = function (sty, styVal) {
		//= $decs = $css
		_$sty = function (o, a, b) {
			//= addSty
			if (N(b) && M.abs(b) > 10) {
				b = $S(b) + 'px'
			}
			o[oO('s', a)] = oO(a, b, 'R')
			return o
		}
		var o = {}
		if (S(sty)) {
			_$sty(o, sty, styVal)
		}
		else {
			_.e(sty, function (styVal, sty) {
				_$sty(o, sty, styVal)
			})
		}
		return o
		//= $.qs
	}
	$rules = function (rulesOb) {
		var rulesStr = '\n\n'
		_.e(rulesOb, function (decs, sel) {
			rulesStr += $rule(sel, decs, rulesOb) + '\n'
		})
		return rulesStr + '\n'
	}
	plugs()
	mixs()
	helps()
	function plugs() {
// PLUGINS ARE FUNCTIONS THAT EXTEND THE CSS OBJECT
		$s.plugins = {
			// these are functions that take pams
			// and ctx-bound to the dec obj
			// so its main use is to add decs directly on it
			// but one function can add multiple decs
			//(plugins)
		}
		/*
		
		 example:
		 {	
		 d: {C:'r'},
		 plugins : {	doSomething : ['red', 6]	}
		 }
		
		 $s.doSomething = function(color, num){
		 this.somethingElse = color + num
		 }
		
		 */
		$plugin = function (decs) {
			if (decs.plugins) {
				_.e(decs.plugins, function (pams, pluginName) {
					var plugin = $s.plugins[pluginName]
					if (F(plugin)) {
						A(pams) ? plugin.apply(decs, pams) :
								_.b(plugin, decs)(pams)
					}
				})
			}
		}
	}
	
	function mixs() {
// MIXINS ARE OBJECTS THAT EXTEND THE CSS OBJECT
		$s.mixins = $s.mx = {
			// this lets you associate a selector with a bunch
			// of declarations at once, and you can add more, too
		}
		$s.mixins.icon = {
			transition: 'background-color ease .2s',
			margin: '0 .5em'
		}
		$mixin = function (decs, rules) {
			_.e(decs.mixins || {}, function (mixin) {
				_.x(decs, rules && rules[mixin] ?
						rules[mixin] : ($s.mixins[mixin] || {}))
			})
			//tries to extend from one of its own first
			//then goes to global ($S.mx)
		}
	}
	
	function helps() {
// HELPERS ARE FUNCTIONS THAT RETURN VALUES FOR CSS PROPERTIES
		$s.helpers = $s.fn = {
			// (value-)helper functions:
			// lets you write/call functions that
			//produce a complicated value to a
			// particular property,
			// so you don't have to write out
			// the full location of the function
			// -helps with namespacing
		}
		$s.helpers.B = $s.fn.bor = function (c) {
			return '8px solid ' + oO('c', c || 'z')
		}
		FL2 = BASIS = function () {
			str = 'This is a bit longer lineThis is a bit longer lineThis is a bit longer' + ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer' +
			' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis ' + 'is a bit longer lineThis is a bit longer lineThis is a bit longer line'
			// http://jsfiddle.net/jakub_g/s5jAB/
			// Both items have flex-basis: 200px defined.
// In 'equilibrium situation' they'll get those widths exactly.
			$s({
				_ch: {c: 'w', P: 10, M: 10},
				_ct: {
					C: 'y', P: 10,
					d: '$'
				},
				_ch1: {
					C: "u",
					fl: '8 1 600px'
				},// If there's more space, the first one grows 5x faster than the second.
				_ch2: {
					C: 'g',
					dp: 'fl',
					fl: '1 2 400px',
					wr: 'w'
				}, // If there's less space, the second one shrinks 3x faster than the first.
				d: {Bor: ['bor', 'b']}
			})
			$.dK('ct').A(
					$.dK('ch ch1').A($.h3('Child One'), $.p('Lorem ipsum'), $.p('dolor sit amet'), $.p(str)),
					div = $.dK('ch ch2').A('Two')
			)
			_.t(20, function () {
				$.d($r(), 40, 40).K('ch1').a2(div)
			})
			$s()
			/*
			
			 div { border:8px solid Blue; }
			 .ct { display:flex; padding:10px; background-color:Yellow; }
			 .ch { padding:10px; margin:10px; color:White; }
			 .ch1 { flex:8 1 600px; background-color:Purple; }
			 .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
			
			
			
			 */
		}
		$s.helpers.bpLarge = function (cont) {
			return ['@media only screen and (max-width: 400px)', cont]
		}
		$s.helpers.bpMid = function (cont) {
			return ['@media only screen and (max-width: 600px)', cont
			]
		}
		$s.helpers.bpSmall = function (cont) {
			return [
				'@media only screen and (max-width: 800px)', cont
			]
		}
		$helperValue = function (v, k) {
			if (F($s.helpers[_.f(v)])) {
				return $s.helpers[_.f(v)].apply(null, _.r(v))
			}
			return $default(v, k)
		}
	}

//The document element is available in the head of the document before loading any other HTML
}
function flex() {
	$.fn.flx = $.fn.flex = $.fn.fl = function () {
		return this.css('display', 'flex')
	}
	$.fn.jfC = $.fn.jC = $.fn.$J = function (a) {
		return this.css('justify-content', a)
	}
	$.fn.alI = $.fn.$I = function (a) {
		return this.css('align-items', a)
	}
	$.fn.alC = $.fn.$C = function (a) {
		return this.css('align-content', a)
	}
	function more() {
		$.flexy = function () {
			$s.d({	// cool: $s.d('margin', 10)
				margin: 10, display: 'flex',
				'justify-content': 'center',
				'flex-wrap': 'wrap'
			})
		}
		flxCt = function (css) {
			if (css) {
				$s(css)
			}
			return $.dK('flex-container')
					.A(Item(1), Item(2), Item(3), Item(4), Item(5))
			function Item(n) {
				return $.dK('.flex-item-' + (n || 1)).A(
						$.i('me')
				).css({margin: 20}).C('b')
			}
		}
		$cssApp = function (name, cssOb, fn) {
			return window[name] = function () {
				$s(cssOb)
				fn()
			}
		}
		$.fn.insertBts = function () {
			var el = this
			_.e([1, 2, 3, 4, 5, 6], function (num) {
				var name = 'button ' + num
				var bt = $.bt(name, function () {
					$l('clicked: ' + name)
				})
				bt.C('y').a2(el)
				bt.css({
					'font-size': 20,
					margin: 4,
					height: 40,
					width: 180
					//, width : '100%'
				})
			})
			return el
		}
		/*
		 $s({
		 _ct: {
		 d: '$',
		 //  define  flow dir
		 // and
		 // if we allow the items to wrap
		 //  Remember this is the same as:
		 $D: 'r',
		 $W: 'w',
		 //      'flex-flow' : 'row wrap',
		 // Then we define how is distributed the remaining space
		 flJC: 'space-around'
		 }
		 })
		 */
		css = {
			//_ct:{dp:'fl'},
			'.flex-container': {
				display: 'flex', 'flex-direction': 'row',
				$W: 'w', 'justify-content': 'space-around',
				'align-content': 'flex-start', 'align-items': 'stretch'
			},
			'.flex-items-default': {
				width: '300px', height: '250px',
				'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0
			},
			'.flex-item-1': {
				width: '100px',
				height: '100px',
				'flex-grow': 1,
				'flex-shrink': 0,
				'flex-basis': '98%'
			},
			'.flex-item-2': {
				width: '100px', height: '100px',
				'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'
			},
			'.flex-item-3': {
				width: '100px', height: '100px',
				'flex-grow': 1, 'flex-shrink': 0,
				'flex-basis': '200px'
			},
			'.flex-item-4': {
				width: '100px', height: '100px',
				'flex-grow': 1, 'flex-shrink': 0,
				'flex-basis': '200px'
			},
			'.flex-item-5': {
				width: '100px', height: '100px',
				'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'
			}
		}
		$.k = function (k) {
			var q = $.sp()
			q.K(k)
			return q
		}
	}
	
	function media() {
		phone()
		tablet()
		cutoffs()
		$subRules = function (rulesOb) {
			return _brace($rules(rulesOb))
			//for meta (see Grail)
		}
		function cutoffs() {
			minW = above = greaterThan = atLeast = min = function (num, str) {
				return '@media all and (min-width: ' + num + 'px) ' + (str || '')
			}
			maxW = below = lessThan = max = function (num, str) {
				return '@media all and (max-width: ' + num + 'px) ' + (str || '')
			}
			between = within = function (n1, n2, str) {
				maxMin = function (n1, n2, str) {
					return max(n1) + ' and (min-width: ' + n2 + 'px)' + (str || '')
				}
				return maxMin(n2, n1, str)
			}
		}
		
		function phone() {
			_$phone = function (ob) {
				return _phone + $rules(ob)
			}
			$phone = function (ob) {
				$.Sty(_$phone(ob))
			}
		}
		
		function tablet() {
			_$tablet = function (ob) {
				return _tablet + $rules(ob)
			}
			$tablet = function (ob) {
				$.Sty(_$tablet(ob))
			}
		}
	}
}