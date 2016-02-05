first()
function first() {
	COLOR = {
		b: "Blue",
		cB: "CadetBlue",
		aB: "AliceBlue",
		rB: "RoyalBlue",
		stB: "SteelBlue",
		slB: "SlateBlue",
		dB: "DodgerBlue",
		mB: "MediumBlue",
		cfB: "CornflowerBlue",
		mSB: "MediumSlateBlue",
		bA: "BlanchedAlmond",
		sB: "SkyBlue",
		_b: "LightBlue",
		dSB: "DeepSkyBlue",
		mnB: "MidnightBlue",
		nv: "Navy",
		B: "DarkBlue",
		pB: "PowderBlue",
		_stB: "LightSteelBlue",
		_sB: "LightSkyBlue",
		g: 'green',
		sG: "SeaGreen",
		hD: "HoneyDew",
		lC: "LightCyan",
		spG: "SpringGreen",
		lm: "Lime",
		G: "DarkGreen",
		fG: "ForestGreen",
		mSpG: "MediumSpringGreen",
		pG: "PaleGreen",
		_g: "LightGreen",
		yG: "YellowGreen",
		lnG: "LawnGreen",
		lmG: "LimeGreen",
		gY: "GreenYellow",
		mSG: "MediumSeaGreen",
		_sG: "LightSeaGreen",
		mAqM: "MediumAquaMarine",
		aqM: "Aquamarine",
		SG: "DarkSeaGreen",
		ol: "Olive",
		olDr: "OliveDrab",
		OG: "DarkOliveGreen",
		sv: "Silver",
		gr: "gray",
		Gr: "DarkGray",
		_gr: "LightGray",
		SlB: "DarkSlateBlue",
		SlG: "DarkSlateGray",
		_slG: "LightSlateGray",
		slG: "SlateGray",
		dmG: "DimGray",
		az: "Azure",
		co: "Coral",
		_co: "LightCoral",
		cy: "Cyan",
		Cy: "DarkCyan",
		tq: "Turquoise",
		mTq: "MediumTurquoise",
		pTq: "PaleTurquoise ",
		Tq: "DarkTurquoise",
		aq: "Aqua",
		gb: "Gainsboro",
		tl: "Teal",
		go: "Gold",
		X: "transparent",
		z: "Black",
		w: "White",
		k: "Khaki",
		K: "DarkKhaki",
		tn: "Tan",
		br: "Brown",
		mc: "Moccasin",
		ct: "Chartreuse",
		bW: "BurlyWood",
		o: "Orange",
		O: "DarkOrange",
		y: "Yellow",
		_y: "LightYellow",
		lmCh: "LemonChiffon",
		goR: "GoldenRod",
		GoR: "DarkGoldenRod",
		pGoR: "PaleGoldenRod",
		_goRY: "LightGoldenRodYellow",
		nvW: "NavajoWhite ",
		bq: "Bisque",
		bg: "Beige",
		wh: "Wheat",
		pP: "PeachPuff",
		u: "Purple", pu: 'Purple',
		ig: "Indigo",
		pl: "Plum",
		mPu: "MediumPurple",
		v: "Violet",
		bV: "BlueViolet",
		dV: "DarkViolet",
		vr: "MediumVioletRed",
		vrl: "PaleVioletRed",
		wS: "WhiteSmoke",
		fW: "FloralWhite",
		gW: "GhostWhite",
		wa: "Cornsilk",
		iv: "Ivory",
		ln: "Linen",
		mC: "MintCream",
		pW: "PapayaWhip",
		oL: "OldLace",
		aW: "AntiqueWhite",
		ss: "SeaShell",
		sn: "Snow",
		ch: "Chocolate",
		si: "Sienna",
		pe: "Peru",
		rBr: "RosyBrown",
		saBr: "SandyBrown",
		sBr: "SaddleBrown",
		l: 'Lavender',
		lB: "LavenderBlush",
		m: "Magenta",
		M: "DarkMagenta",
		or: "Orchid",
		mO: "MediumOrchid",
		fu: "Fuchsia",
		OR: "DarkOrchid",
		p: "Pink",
		_p: "LightPink",
		hP: "HotPink",
		mR: "MistyRose ",
		th: "Thistle",
		x: "DeepPink",
		r: "Red",
		mrn: "Maroon",
		rcr: "Crimson",
		R: "DarkRed",
		oR: "OrangeRed",
		ri: "IndianRed",
		rt: "Tomato",
		rfb: "FireBrick",
		s: "Salmon",
		_s: "LightSalmon",
		S: "DarkSalmon"
	}
	CSS = {
		d: "display", dp: "display", ds: "display", cl: "clear",
		ps: 'position', cu: 'cursor',
		al: 'opacity', vs: 'visibility',
		ct: 'content', //pseudoelements
		rs: 'resize' //resizable by user
	}
	_.x(CSS, {
		fl: 'flex', $: 'flex',
		dir: 'flex-direction',
		wr: 'flex-wrap',
		jC: 'justify-content',
		jfC: 'justify-content',
		aI: 'align-items', alI: 'align-items',
		aC: 'align-content', alC: 'align-content',
		ord: 'order',
		gr: 'flex-grow',
		shr: 'flex-shrink',
		bas: 'flex-basis',
		alS: 'align-self',
		flow: 'flex-flow',
	})
	_.x(CSS, {z: 'z-index', b: "bottom", l: 'left', r: 'right', t: 'top'})
	_.x(CSS, {
		cs: 'caption-side',
		ec: 'empty-cells',
		ly: 'table-layout',
		li: "list-style-image",
		lp: "list-style-position",
	})// lists
	_.x(CSS, {h: 'height', h_: 'min-height', _h: 'max-height', w: 'width', w_: 'min-width', _w: 'max-width'})
	_.x(CSS, {ov: 'overflow', ovX: "overflow-x", ovY: "overflow-y"}) //visible | hidden | scroll | auto | inherit
	_.x(CSS, {sd: "box-shadow", xs: "box-shadow"})
	_.x(CSS, {//transition/transform
		tr: "transition", ty: "transition-property",
		tu: "transition-duration", tt: "transition-timing-function",
		te: "transition-delay",
		tf: "transform",
		tfo: "transform-origin",
		ts: "transform-style",
		bv: "backface-visibility",
		ps: "perspective",
		po: "perspective-origin"
	})
	_.x(CSS, {//words/spacing
		lH: 'line-height',  //minimum distance between the baselines of adjacent lines of text
		lSp: 'letter-spacing',
		wSp: 'word-spacing',
		vA: 'vertical-align', //baseline,superscript,subscript,middle,text-top,text-bottom,top,bottom
		wsSp: 'white-space', //normal,nowrap,pre,pre-wrap,pre-line,inherit
		wBr: 'word-break', // normal|break-all|keep-all
		wWr: 'word-wrap',  //normal,break-word
		f: 'font',
		fF: 'font-family',
		$fF: '@font-face', // for font files
		fS: 'font-size',  //xx-small,x-small,small,medium,large,x-large,xx-large//smaller,larger
		sty: 'font-style', //normal,oblique,italic
		fV: 'font-variant', //normal,smallcaps
		fW: 'font-weight',//normal,bold,100-900
		str: 'font-stretch',
		c: 'color',
		tA: 'text-align',        //left, right, center and justify
		tD: 'text-decoration',     // underline, overline, line-through, blink
		tI: 'text-indent',    // indent for the first line of a block level element
		tTf: 'text-transform',   //none,uppercase,lowercase,capitalize
		tOl: 'text-outline',
		tOv: 'text-overflow',
		tSh: 'text-shadow'
	})
	_.x(CSS, {//background/image//borderImage
		bg: 'background',
		C: 'background-color',
		bgI: "background-image",
		bgA: "background-attachment",
		bgP: "background-position",
		bgR: "background-repeat",
		bgCl: "background-clip",
		bgOr: "background-origin",
		bgS: "background-size",
		clp: 'clip', crp: "crop", ft: 'fit', //replaced elements
		di: "border-image",
		dis: "border-image-source",
		dio: "border-image-outset",
		bir: "border-image-repeat",
		disl: "border-image-slice",
		diw: "border-image-width"
	})
	_.x(CSS, {//margin
		M: "margin", mar: "margin", m: "margin", mT: "margin-top", mR: "margin-right",
		mB: "margin-bottom", mL: 'margin-left',
		//outline
		o: "outline", oc: "outline-color", os: "outline-style",
		ow: 'outline-width', oo: 'outline-offset',
		//border
		rd: 'border-radius',
		bL: "border-left",
		dlc: "border-left-color",
		dls: "border-left-style",
		bLW: "border-left-width", bor: "border", B: "border", dc: "border-color",
		//ds:"border-style",
		borW: "border-width", co: 'border-collapse',
		sp: 'border-spacing',
		borT: "border-top", dtc: "border-top-color",
		borTS: "border-top-style", bTW: "border-top-width",
		bTW: "border-top-width",
		borB: "border-bottom", bBC: "border-bottom-color",
		bBS: "border-bottom-style", borBW: "border-bottom-width",
		bBW: "border-bottom-width", borR: "border-right",
		bRC: "border-right-color", borRS: "border-right-style",
		bRW: "border-right-width", borRW: "border-right-width",
		bRd: 'border-radius', borR: 'border-radius',
		//padding
		g: "padding", pad: "padding", P: 'padding',
		gt: "padding-top",
		//gr: "padding-right",
		gb: "padding-bottom",
		gl: "padding-left"
	})
	DOOR = CSS_TRANSFORM_PERSPECTIVE = function () {
		$s({
			$div1: {
				position: 'relative', h: 150, w: 150, M: 50, P: 10, bor: '1px solid black', perspective: 150
			},
			$div2: {
				P: 50, position: 'absolute', bor: '1px solid black', C: 'r', transform: 'rotateX(45deg)'
			}
		})
		$.dI('div1')
		$.dI('div2').A('HELLO')
	}
	
	FONTFAMILY = {
		u: "cursive", f: "fantasy", m: 'monospace', ss: 'sans-serif', s: 'serif',//generic
		t: 'times', c: 'courier', a: 'arial'
	}//nongeneric
	FONTVARIANT = {s: "small-caps"}
	FONTSTYLE = {"#": "inherit", n: "normal", i: "italic", o: "oblique"}
	FONTWIDTH = {
		n: "normal",
		"+": "bold",
		"++": "bolder",
		"-": "lighter",
		"*1": 100,
		"*2": 200,
		"*3": 300,
		"*4": 400,
		"*5": 500,
		"*6": 600,
		"*7": 700,
		"*8": 800,
		"*9": 900
	}
	TEXTTRANSFORM = {c: "capitalize", u: "uppercase", l: "lowercase"}
	FONTSTRETCH = {
		n: "normal",
		sC: "semi-condensed",
		c: "condensed",
		eC: "extra-condensed",
		u: "ultra-condensed",
		sE: "semi-expanded",
		e: "expanded",
		eE: "extra-expanded",
		uE: "ultra-expanded"
	}
	TEXTDECORATION = {
		u: "underline",
		o: "overline",
		l: "line-through",
		b: "blink"
	}
	TEXTALIGNMENT = {l: "left", r: "right", c: "center", j: "justify"}
	TEXTBASELINE = {s: 'sub', S: 'super', t: 'top', tt: 'text-top', m: 'middle', b: 'bottom', tb: 'text-bottom'}
}
FLOAT = {r: 'right', l: 'left', n: 'none', '#': 'inherit'}
DISPLAY = {
	i: "inline", b: "block", ib: "inline-block", t: "table",
	n: "none", '#': "inherit", it: "inline-table",
	l: "list-item", c: "table-column",
	r: "table-row",
	cg: "table-column-group", rg: "table-row-group", p: "table-caption",
	h: "table-header-group", f: "table-footer-group", e: "table-cell",
	$: 'flex', fl: 'flex'
}
OLSTYLE = {
	n: 'none', h: 'hidden', '.': 'dotted', '-': 'dashed',
	s: 'solid', d: 'double', g: 'groove',
	r: 'ridge', i: 'inset',
	o: 'outset', "#": 'inherit'
}
OLWIDTH = {'|': 'thin', '||': 'medium', '|||': 'thick', 's': 'thin', 'm': 'medium', 'b': 'thick'}
POSITION = {s: 'static', a: 'absolute', r: 'relative', f: 'fixed', '#': 'inherit'}
OVERFLOW = {v: 'visible', h: 'hidden', s: 'scroll', a: 'auto', '#': 'inherit'}
CURSOR = {
	d: 'default', p: 'pointer', m: 'move', w: 'wait', h: 'help', t: 'text',
	N: 'n-resize', E: 'e-resize', S: 's-resize', W: 'w-resize',
	NE: 'ne-resize', NW: 'nw-resize', SE: 'se-resize', SW: 'sw-resize'
}

ooo = {
	c: COLOR,
	s: CSS,// a: ATTRIBUTE,o: PROPERTY,
	olS: OLSTYLE, 
	olW: OLWIDTH,
	ov: OVERFLOW,
	cu: CURSOR,
	w: OLWIDTH, 
	ps: POSITION,
	dp: DISPLAY,
	fF: FONTFAMILY, 
	sty: FONTSTYLE,
	str: FONTSTRETCH,
	fW: FONTWIDTH, 
	fV: FONTVARIANT,
	tTf: TEXTTRANSFORM, 
	tD: TEXTDECORATION,
	tA: TEXTALIGNMENT,
	tBl: TEXTBASELINE
}

ooo.R = {
	C: 'c', f: 'c', s: 'c', dc: 'c',
	
	t: 'i', //type->input
	
	borS: 'os'
}

_oO = function (a, b) {
	return oO[a] && oO[a][b] ? oO[a][b] : b
}
oO = function (a, b, c) {
	var val = U(a) ? _.k(ooo)
			: '*' == b ? $r(a)
			: D(c) ? oO(oO(c, a), b)
			: U(b) ? _.df(function (x, y) {
		return oO(a, x, y)
	}, ooo[a] || {})
			: ooo[a] && ooo[a][b] ? ooo[a][b]
			: b
	return val
}

Oo = function (a, b) {
	return ooo[a] && ooo[a][b]
}
$r = function (a, b) {
	var vals = _.v(oO(a = a || 'c'))
	return Oo(a, b) || vals[_.r(_.s(vals) - 1)]
}
oO.c = function (c) {
	return oO('c', c)
}
oO.k =  function (a) {
	return oO('k', a)
}
oO.t =   function (a) {
	return oO('t', a)
}
oO.e =   function (a) {
	return oO('e', a)
}
oO.i =   function (a) {
	return oO('i', a)
}
oO.s =  function (a) {
	return oO('s', a)
}
oO.q = function (f, m) {
	$(function () {
		Q(m || mf, f)
	})
}
oO.V = function (a) {
	return _.v(S(a) ? oO(a) : a)
}
oOo = function (a, b) {
	if (U(b)) {
		return _I(lC(V(oO(a))))
	}
	if (oOo(a)[lC(b)]) {
		return b
	}
}
$L('traverse', 'manip',  'text', 'ajax', 'fnCol', 'move')
function traverse() {
//_.ex = $ext = ext = function (o) {o.e = o.extend;return o}	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
	$.tK = function (k, toAdd) {
		var g = G(arguments),
				t = $.t()
		t.K(k)
		if (A(toAdd)) {
			_.e(toAdd, function (q) {
				t.A(q)
			})
		}
		return t
	}
	$.ipI = function (id, arr) {
		var q = $.ip().id(id)
		if (A(arr)) {
			_.e(arr, function (qq) {
				q.A(qq)
			})
		}
		else if (arr) {
			q.A(arr)
		}
		return q
	}
	$.ulI = function (id, arr) {
		var q = $.ul().id(id)
		if (A(arr)) {
			_.e(arr, function (qq) {
				q.A(qq)
			})
		}
		else if (arr) {
			q.A(arr)
		}
		return q
	}
	$.fn.oh = function () {
		return this[0].outerHTML
	}
	$.fn.h = $.fn.ht = $.fn.html
	$.fn.t = $.fn.tx = $.fn.text
	$.fn.e = $.fn.ea = $.fn.each
	$.fn.f = $.fn.fi = $.fn.find
	$.fn.hd = $.fn.hide
	$.fn.sh = $.fn.show
	$.fn.gg = $.fn.toggle
	$.fn.osP = function () {
		return this.offsetParent
	}
	$.fn.g = function (ix) {
		if (U(ix)) {
			return this[0]
		}
		return this.eq(ix)
	}
	$.fn.ch = function () {
		return this.children()
	}
	$.fn._ = $.fn.closest
	$.fn.__ = $.fn.pa = $.fn.pr = $.fn.parent
	$.fn.sib = function () {
		var g = G(arguments);
		return this.sib.apply(this.g)
	}
	$.fn.N = $.fn.next
	$.fn.r = $.fn.rm = $.fn.xx = function () {
		var e = this
		e.remove()
		return e
	}
	$.fn.fRm = function (a) {
		return this.fi(a).rm()
	}
	$.fn.E = function (html) {
		var $el = this, g = G(arguments)
		//$l('$.fn.E in web.js (betweetn fRm and rp')
		$el.empty() //if (S(html)) {this.h(html); return this}
		g.A ? _.e(g.f, add) :
				g.e(add)
		return $el
		function add(q) {
			A(q) ? _.e(q, add) :
					$el.A(q)
		}
	}
	$.fn.rp + $.fn.replace
	$.fn.A = function (stuff) {
		if (U(stuff)) {
			$('body').append(this);
			return this
		}
		this.append.apply(this, arguments)
		return this
	}
	$.fn.a2 = function (a) {
		a.A(this);
		return this
	}
	$.fn.pp = function (a) {
		this.pp(a);
		return this
	}
	$.fn.p2 = $.fn.pp2 = function (a) {
		this.prependTo(a);
		return this
	}
	$.fn.bf = $.fn.iBf = $.fn.iB = $.fn.insertBefore
	$.fn.iA = $.fn.insertAfter
	$.fn.wr = $.fn.wrap
	$.fn.fCt = function (str) {
		return this.fi(":contains(" + str + ")")
	}
	$.ct = $.cts = $.contains
	function root() {
		$.bd = function () {
			var bd = $('body')
			return bd
		}
		$bd = function () {
			var g = G(arguments),
					bd = $('body')
			if (g.f) {
				bd.css.apply(bd, g)
			}
			return bd
		}
		$.A = function () {
			var g = G(arguments),
					bd = $('body')
			$.fn.A.apply(bd, g)
			return $
		}
		$.E = function () {
			$.bd().E()
		}
		$.H = function (html) {
			$(html).A()
			return $
		}
	}
	
	attributes()
	function attributes() {
		$.fn.at = $.fn.attr
		$.fn.foc = $.fn.focus
		$.iI = function (i) {
			if (O(i)) {
				return S($(i)[0].src)
			}
		}
		$.src = function f(e) {
			if (e.image) {
				e = e.image
			}
			if ($.tCan(e)) {
				e = $.tCan(e)
			}
			if (e.src) {
				e = e.src
			}
			if (e.toDataURL) {
				e = _.tDU(e)
			}
			return s$(e).contains('data:') ? e
					: S(e) ? _.src(e)
					: 0
		}
		$.fn.ed = function (ed) {
			if (U(ed)) {
				return this.attr('contenteditable')
			}
			this.attr('contenteditable', ed ? true : false)
			return this
		}
		$.fn.rmAt = $.fn.removeAttr
		$.fn.edFoc = function () {
			return this.ed(1).foc()
		}
		$.fn.nm = $.fn.name = function (name) {
			return name ? this.at('name', name) :
					this.at('name')
		}
		$.fn.idNm = function (id, nm) {
			this.id(id)
			this.nm(nm || id)
			return this
		}
	 
		$.fn.n = function (name) {
			if (U(name)) {
				return this.attr('name')
			}
			this.attr('name', name);
			return this
		}
		$.fn.ml = $.fn.mlt = function (m) {
			return this.at('multiple', true)
		}
		$.fn.ph = $.fn.placeholder = function (forWhat) {
			return this.attr('placeholder', forWhat)
		}
		$.fn.ck = $.fn.chk = function () {
			this.at('checked', true)
		}
		$.fn.ty = $.fn.type = function (type) {
			if (U(type)) {
				return this.attr('type')
			}
			this.attr('type', type);
			return this
		}
		$.fn.id = function (id) {
			if (U(id)) {
				return this.attr('id')
			}
			;
			this.attr('id', id);
			return this
		}
		$.fn.hr = $.fn.hf = $.fn.href = function (href) {
			if (U(href)) {
				return this.attr('href')
			}
			this.attr('href', href);
			return this
		}
		$.fn.fr = $.fn.for = function (forWhat) {
			return this.attr('for', forWhat)
		}
		$.fn.ro = $.fn.role = function (role) {
			if (U(role)) {
				return this.attr('role')
			}
			this.attr('role', role)
			return this
		}
		$.fn.tt = $.fn.ti = function (a) {
			this.at('title', a)
			return this
		}
		$.fn.d = $.fn.da = $.fn.data
		$.fn.v = function (newVal) {
			var g = G(arguments)
			if (U(newVal)) {
				var v = this.val()
				if (g.n) {
					this.val('')
				}
				return v
			}
			this.val(newVal);
			return this
		}
		$.fn.V = function (newVal) {
			var g = G(arguments)
			if (U(newVal)) {
				var v = this.val()
				this.val('')
				return v
			}
			this.val(newVal);
			return this
		}
		$.fn.v = $.fn.val
		$.fn.v_ = function () {
			var val = this.val();
			this.val('');
			return val
		}
		$.v = function (id) {
			return $('#' + id).val()
		}
		$.V = function (id) {
			var $el = $('#' + id)
			var val = $el.val()
			$el.val('')
			return val
		}
	}
}
function manip() {
}
 
function text() {
	$.fn.tt = function (t, c) {
		var p = $.p(t).mH(10).pH(30)
				.fS(24).K('text-center')
		this.A(p,
				$.hr().fS(10))
		return this
	}//name conflict?
}
function ajax() {
	$.pD = function (ev) {
		ev.preventDefault()
		return ev
	}
	$.iQ = function (o) {
		return O(o) && F(o.ajaxStart)
	}
	$.iO$ = function (o) {
		return O$(o) && !$.iQ(o)
	}
	$.g = $.G = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.G, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.get(S.eL(o.p), o.d || {},
				function (d) {
					o.fn = o.fn || function () {
						return 'boo ya!'
					};
					o.fn(d)
				})
	}
	$.eG = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eG, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.G(o.p, o.d || {},
				function (dd) {
					_.e(dd, function (d) {
						o.fn(d)
					})
				});
		return $
	}
	$.txG = function (url) {
		$.get('/' + url, function (aa) {
			a = aa
		})
	}
	$.j = $.gJ = $.Gj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.Gj, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		$.getJSON(
				S.eL(o.p),
				o.d || {},
				function (d) {
					o.fn(d)
				});
		return $
	}
	$.eJ = $.eGj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eJ, g[0])
		}
		o = F(g[1]) ?
		{p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.Gj(o.p, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.po = $.P = function () {
		var g = G(arguments), o;
		o = F(g.s) ?
		{url: g.f, fn: g.s} :
		{url: g.f, da: g.s, fn: g.t};
		o.da = O(o.da) ? o.da : D(o.da) ? {da: o.da} : {}
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		o.url = S.eL(o.url)
		$.post(o.url, o.da, function (d) {
			o.fn(o.da, o)
		})
		return $
	}
	$.eP = $.ePo = function () {
		var g = G(arguments);
		if (U(g[1])) {
			return _.p($.eP, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.P(o.u, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.aj = function (ob) {
		return $.ajax(ob)
	}
	$.XML = function () {
		alert('$.XML!');
		return new XMLHttpRequest()
	}
}
function fnCol() {
	$.red = function () {
		return $.d().C('r')
	}
	$.blue = function () {
		return $.d().C('b')
	}
	$.green = function () {
		return $.d().C('g')
	}
}
function move() {
	$.fn.toR = $.fn.moveRight = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) + num)
		return this
	}
	$.fn.toL = $.fn.moveLeft = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) - num)
		return this
	}
	$.fn.toU = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() - num)
		return this
	}
	$.fn.toD = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() + num)
		return this
	}
}
$.isCvId = $.iCI = function (id) {
	return S(id) && $('#' + id).length
}
$.c0 = function () {
	var g = G(arguments)
	$.c.apply($, g.A ? g.f : g)[0]
}
$0 = function () {
	return $.apply(null, arguments)[0]
}
$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
TANGLE1 = function () {
	a = $.divA('r', 50, 50).XY(50).A().pad(10)
	b = $.divA('b', 100, 100).XY(100).A().pad(10)
	c = $.divA('g', 200, 200).XY(200).A().pad(10)
	d = $.divA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}
TNGL = TANGLE = function () {
	z()
	a = $.dA('r', 50, 50).XY(50).A().pad(10)
	b = $.dA('b', 100, 100).XY(100).A().pad(10)
	c = $.dA('g', 200, 200).XY(200).A().pad(10)
	d = $.dA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}
MGA = MARGINAUTO = function () {
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
$.fn.ps = function () {//rel to document
	return this.position()
}

$.fn.tN = function () {
	return this[0].tagName
}
function offst(){$.fn._os = function () {
	return this.offset() //rel to offset parent
}
	$.fn.os = function () {
		var os = this.offset()
		return {x: os.left, y: os.top}
	}
	$.fn.osP = function () {
		return this[0].offsetParent
	}
	$.fn.osT = function () {
		return this[0].offsetTop
	}
	$.fn.osT = function () {
		return this[0].offsetLeft
	}}
offst()
//i$ = function (id) {return $('#' + id)}
//k$ = function (k) {return $('.' + k)}
i$0 = function (id) {
	return $0('#' + id)
}
k$0 = function (k) {
	return $0('.' + k)
}
$.fn.gC = function (context) {
	return this[0].getContext(context || '2d')
}
$.rulers = function () {
	$.d('b', 100, 100).al(.3).dg()
	$.d('r', 100, 300).al(.3).dg()
}
 
jQAnim()

 
function jQAnim() {
	$.fn.st = $.fn.stop
	$.fn.fdT = $.fn.fd2 = $.fn.f2 = $.fn.fT = $.fn.fadeTo
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
	//// 
	an = function (q, a) {
		alert('an')
		if (q.han) {
			_.xI(q.han)
		}
		if (a.u) {
			q.bi(a.u)
		}
		if (a.n > 1) {
			q.han = _.sI(function () {
				a.c++
				if (!a.l && a.c > a.n) {
					_.xI(q.han);
					q.han = false
				}
				else {
					a.c %= a.n
				}
				q.sFr(a)
			}, a.r)
		}
	}
	$.an = function () {
		var bd = $.bd();
		return bd.j.apply(
				bd, G(arguments))
	}
	$.aF = $.anFr = $.anf = function (n, w) {
		var c = 0;
		n = n || 10;
		w = w || 20;
		$.ev(function () {
			q.sFr(c, w)
			c = (c + 1) % n
		})
	}
	$.notAn = function (a) { // sel
		return a.filter(':not(:animated)')
	}
	$.fn.a = function (a, b, c, d) {
		ANob = {
			B: 'bottom', L: 'left', R: 'right', T: 'top',
			b: 'borderWidth', bb: 'borderBottomWidth',
			bl: 'borderLeftWidth', br: 'borderRightWidth',
			bt: 'borderTopWidth', bs: 'borderSpacing',
			C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
			mh: 'minHeight', mw: 'minWidth',
			i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
			m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
			mt: 'marginTop', o: ' outlineWidth',
			p: ' padding', pb: 'paddingBottom',
			pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
			ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
		}
		var g = G(arguments), o
		o = g.f
		var q = this
		if (O(a)) {
			if (a.c) {
				a.color = oO('c', a.c)
			}
			if (a.C) {
				a.backgroundColor = oO('c', a.C)
			}
		}
		q.animate(a, b, c, d)
		return q
		if (o.C) {//$l(o.C+'-->');
			o.C = oO('c', o.C);
			//$l(o.C)
		}
		_.e(o, function (v, k) {
			if (ANob[k]) {
				o[ANob[k]] = v
			}
		})
		if (N(g.s)) {
			g.s *= 1000
		}
		_p = o
		this.an(o, g.s, g.t, g[3], g[4])
		return this
		$.an = $.j = function () {
			var bd = $.bd();
			return bd.j.apply(bd, G(arguments))
		}
	}
	$.fn.an = function (a, b, c, d) {
		var g = G(arguments), q = this
		//if (N(g.s)) {g.s *= 1000}
		this.animate($sty(g.f), g.s, g.t, g[3], g[4])
		return this
	}
	$.fn.anFr = $.fn.animateFrames
	$.fn.qu = $.fn.queue
	$.fn.cQ = $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
	$.fn.animloop = function () {
		var that = this
		this.show("slow")
		this.animate({"marginLeft": "300px"}, 2000)
				.animate({"marginLeft": "0px"}, 2000)
		this.hide("slow", function () {
			that.animloop()
		})
	}
}

$.H=$.html=function(){var bd = $('body')
	bd.html.apply(bd, arguments)
	return $
}
 
z=function(){$('body').E()} 