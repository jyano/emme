$.k=function(k){
	return $.sp().K(k)
}

$.fn.T = function () {
	var g = G(arguments)
	if (g.u) {
		return this.text()
	}
	this.text(g.f)
	return this
}
$.fn.tA = $.fn.textAlign = function (z) {
	this.css('text-align', z)
	return this
}
$.fn.T0 = function () {
	var d = this, g = G(arguments)
	d.E()
	g.e(function (str) {
		d.A($.h3(str))
	})
	return d
}
$.fn.fS = $.fn.fZ = $.fn.fontSize = function (z) {
	this.css('font-size', z)
	return this
}

$.Fo = $.font = $f = function (a, b) {

	var g = G(arguments)

	if (O(a)) {
		//return ss(oB(b), {fz: a || 50})
	}
	
	a = N(a) ? _S(a) : U(a) ? '' : a;

	var F = 'fantasy', W = 'normal', S = 'normal', Z = px(100);

	_.e(a.split(' '), function (p) {
				if (M(p[0])) {
					p = p.split('/')
					Z = p[0] + 'px' + (p[1] ?
					 '/' + p[1] + 'px' : '')
				}
				
				F = Oo('fF', p) || F
				W = Oo('fW', p) || W
				S = Oo('fS', p) || S
				
			}
	)
	
	return [W, S, Z, F].join(' ')
}

FAM = FONTFAMILY = FONTSTYLE = ITALIC =function(){

	
	$s({

		bd: {C: 'o', dp:'fl'},
		$:{fS: '1.2em'},
		_fantasy: {'font-family': 'fantasy'},
		_serif: {'font-family': 'serif'},
		_sansSerif: {'font-family': 'sans-serif'},
		_monospace: {'font-family': 'monospace'},
		_cursive: {'font-family': 'cursive'},
		_weight: {'font-weight': 'bolder'},
		_variant: {'font-variant': 'small-caps'},
		_decor: {'text-decoration': 'underline'},
		_title: {C:'y', fS:'1.25em'},
		_ital: {'font-style': 'italic'},
		 i: {bor: 'red 15px dotted'}
		 
	})
	fontFamImgUrl = 'http://www.faqs.org/docs/htmltut/graphics/styles.fontfam.gif'
	$.i(function (image) {
		i = image
		$i = $(image)
	}).dgb()[0].src = fontFamImgUrl
	sp = $.sp().C('w').A($.sp('default').K('title'),
			$.d().A('serif') ,
			$.d().A('sans-serif') ,
			$.d().A('monospace') ,
			$.d().A('cursive') ,
			$.d().A('fantasy') 
	)
	d = $.d().A(sp).C('w').W(200).XY(160, 100)
	d.dgb()
	sp = $.sp().C('w').A($.sp('fam').K('title'),
			$.d().A('serif').K('serif'), 
			$.d().A('sans-serif').K('sansSerif'),
			$.d().A('monospace').K('monospace'), 
			$.d().A('cursive').K('cursive'), 
			$.d().A('fantasy').K('fantasy').tA('c')
	)
	d = $.d().A(sp).C('w').W(200).XY(160, 100)
	d.dgb()
	
	//STYLE
	sp = $.sp().C('a').A(
	
			$.k('title').A(" ( / ) 'font-style': 'italic'"),
			$.d().A('serif').K('serif').K('ital'),
			$.d().A('sans-serif').K('sansSerif').K('ital'),
			$.d().A('monospace').K('monospace').K('ital'),
			$.d().A('default').K('ital'),
			$.d().A('cursive').K('cursive').K('ital'),
			$.d().A('fantasy').K('fantasy').K('ital').tA('c')
	)
	d = $.d().A(sp).C('w').W(200)
	d.dgb().XY(140, 100)
	
	//WIEGHT
	sp = $.sp().C('a').A($.sp(' ( + ) font-weight : bolder').K('title'),
			$.d().A('serif').K('serif').K('weight'),
			$.d().A('sans-serif').K('sansSerif').K('weight'),
			$.d().A('monospace').K('monospace').K('weight'),
			$.d().A('default').K('weight'),
			$.d().A('cursive').K('cursive').K('weight'),
			$.d().A('fantasy').K('fantasy').K('weight').tA('c')
	)
	d = $.d().A(sp).C('w').W(200)
	d.dgb().XY(120, 100)
	//variant
	//WIEGHT
	sp = $.sp().C('a').A($.sp(' ( * ) font-variant : small-caps').K('title'),
			$.d().A('serif').K('serif').K('variant'),
			$.d().A('sans-serif').K('sansSerif').K('variant'),
			$.d().A('monospace').K('monospace').K('variant'),
			$.d().A('default').K('variant'),
			$.d().A('cursive').K('cursive').K('variant'),
			$.d().A('fantasy').K('fantasy').K('variant').tA('c')
	)
	d = $.d().A(sp).C('w').W(200)
	d.dgb().XY(100,100)
	
	sp = $.sp().C('a').A($.sp('( - ) text-decoration: underline ').K('title'),
			$.d().A('serif').K('serif').K('decor'),
			$.d().A('sans-serif').K('sansSerif').K('decor'),
			$.d().A('monospace').K('monospace').K('decor'),
			$.d().A('default').K('decor'),
			$.d().A('cursive').K('cursive').K('decor'),
			$.d().A('fantasy').K('fantasy').K('decor').tA('c')
	)
	d = $.d().A(sp).C('w').W(200)
	d.dgb().XY(100, 100)
}

 
 /*
 FONT SHORT HAND RULES: 
 
  body {
  font: font-style font-variant font-weight font-size/line-height font-family;
  }
  In Use

  body {
  font: italic small-caps normal 13px/150% Arial, Helvetica, sans-serif;
  }
  You need to supply at least font-size and font-family for the shorthand to work, otherwise it'll just be a syntax error and do nothing.
  */
 