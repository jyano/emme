MICK = function () {
	$St()
	s.mick(500, 200)
	s.mick(700, 100, {c1: 'b', c2: 'X'})
	s.mick(700, 300, {c2: 'b'})
	s.mick(100, 100, {y2: 10})
	s.mick(100, 200, {y2: 200})
	s.mick(100, 300, {x2: 100})
}
DRAWSCIRCLESWORKS = RGB = function () {
	gx = $Gx().f(cjs.rgb(255, 0, 0)
	).ss(10).s('white')
	gx.dc(0, 0, 100).dc(100, 0, 100)
	gx.s('blue').f('green').dc(0, 300, 100)
	st = $St().A($Sh(gx).XY(300, 100)).u()
	h = $Sh()
	h.graphics.f('blue')
	//h.cir(100, 100, 100)
	//h.graphics.f('yellow')
	h.cir(200, 100, 100, 'r')
	st.A(h).u()
}
RG1221 = RADGRAD = function () {
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
RG11 = RADIALGRAD = function () {
	setup()
	h.g
		// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
			.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
			.drawRect(0, 0, 100, 100)
			.drawCircle(180, 180, 100, 100)
}
RG1441 = RADIALGRADRECT = function () {
	s = cjs.S()
	x1 = 100
	y1 = 150
	r1 = 20
	x2 = 100
	y2 = 150
	r2 = 100
	h = cjs.h(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.h(10, 10).a2(s).drag()
		h.graphics.beginRadialGradientFill(["red", 'blue', "yellow"], [0, .5, 1],
				x1,
				y1,
				r1,
				x2,
				y2,
				r2
		)
				.dr(0, 0, 400, 400)
				.endFill()
		// x--
		r1++
		r2++
	}
	setInterval(change, 1000)
	change()
}
RG11 = RADIALGRAD1 = function () {
	setup()
	h.x = 20
	h.y = 20
	st.addChild(h)
	h.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	)
	h.graphics.drawRect(0, 0, 100, 100)
	h.graphics.endFill()
	st.update()
}
RG161 = RADIALGRADFILL2 = function () {
	setup()
	h.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	).drawCircle(100, 100, 50)
	st.update()
}
RG151 = RADIALGRADFILL = function () {
	setup()
// 2 colors
	h.x = 20
	h.y = 20
	h.graphics.beginRadialGradientFill(
			[oC('b'), oC('r')],
			[.1, 1], 50, 50, 0, 50, 50, 50
	)
	h.graphics.drawRect(0, 0, 100, 100)
	h.graphics.endFill()
	st.addChild(h)
// 3 colors
	h = new cjs.Shape();
	h.x = 20;
	h.y = 140;
	h.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
	h.graphics.drawRect(0, 0, 100, 100);
	st.addChild(h);
// alpha
	h = new cjs.Shape();
	h.x = 20;
	h.y = 260;
	h.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
	h.graphics.drawRect(0, 0, 100, 100);
	h.graphics.endFill();
	st.addChild(h);
}
LR0 = LINGRAD = function () {
	c = $.c('y').drag()
	x = c.ctx()
	x = c.ctx()
	x.lg({
		x1: 50, y1: 500, y2: 100,
		cS: {o: .2, r: .6, g: .8}
	})
	x.fr(0, 0, 100, 100)
}
  
 