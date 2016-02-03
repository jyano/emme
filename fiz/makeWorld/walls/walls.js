//the walls themselves are made with w.BOX
w.wall = function (x, y, wd, ht) {
	var w = this
	var b = w.brick(x, y, wd, ht)
			.stat().fr(0).K('wall')
	return b
}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
w.thin = function () {
	var w = this, b
	return b
}
w.flat = function () {
	var w = this, b
	return b
}
W = function () {
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	b2d.world = function (g, sleep) {     //b2d.wor =  W ???
		g = U(g) ? V(0, 10) : N(g) ? V(0, g) : g
		s = U(sleep) ? true : sleep
		var w = new b2d.World(g, sleep)
		w.SCALE = 1
		return w
	}
	w = new b2d.World(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	dimensions()
	handling()
	//room()
	keys()
	mouse()
	T.t(enterFrame)
	if (o.t !== 0) {
		trackee()
	}
	w.o = o //w.stats()
	return w
}
W.U = function (g) {
	W().G(g).roof.kill()
	return w
}
W.L = function (g) {
	W().G(g)
	w.roof.kill()
	w.right.kill()
	return w
}
w.R = function (c, W, H, x, y) {
	alert('w.R')
	var w = this, g = G(arguments),
			wC = w.cen(),
			r
	if (!S(g.f)) {
		y = x;
		x = H;
		H = W;
		W = c;
		c = 'x'
	}
	if (U(W)) {
		W = 200
		H = 200
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(H)) {
		H = W
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(x)) {
		x = wC.x - W / 2;
		y = wC.y - H / 2
	}
	return w.S(
			x + W / 2,
			N(y, x) + H / 2,
			c,
			W, H
	)
	old = function () {
		/*
		 x=N(g[0])?g[0]:wC.x
		 y=N(y)?y:N(g[0])?N(g[0]):wC.y
		 W=N(W)?W:100
		 H=N(H)?H:W
		 */
	}
}
w.vW = function (col, H, x, y) {
	alert('w.vW')
	var w = this, g = G(arguments),
			cW = w.can.W(),
			cH = w.can.H()
	if (!S(col)) {
		y = x;
		x = H;
		H = col;
		col = 'x'
	}
	H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
	if (U(x)) {
		x = cW / 2;
		y = cH / 2 - H / 2
	}
	else if (U(y)) {
		x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
		y = cH / 2 - H / 2
	}
	//x-=10?
	return w.R(col, 20, H, x, y).bo(.2).K('wall')
}
w.walls = function (o) {
	var w = this,
			can = w.canvas,
			W = can.width,
			H = can.height,
			wa = o.w,
			col, h
	if (wa == 0) {
		return w
	}
	if (F(wa)) {
		wa()
	}
	else if (A(wa)) {
		col = wa[0]
		W = wa[1]
		h = wa[2]
		if (!S(col)) {
			h = W;
			W = col;
			col = 'o'
		}
		W = N(W) ? W : w.W()
		h = N(h) ? h : w.H()
		w.floor = w.R(col, W, 20, 0, h - 20)
		w.right = w.R(col, 20, h, W - 20, 0)
		w.roof = w.R(col, W, 20, 0, 0)
		w.left = w.R(col, 20, h, 0, 0)
	}
	else if (wa == '_') {
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else if (wa == 'L') {
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else if (wa == 'U') {
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else {
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
		w.roof = w.S(W / 2, 0, 'o', W, 40).K('wall roof')
	}
	w.$$(function () {
		w.S(w.mx, w.my, 'x', [[10, 10, '-']])
	})
	return w
}
// a tall is a canvas-heighted thin 
// a long is canvas-widthed flat
w.tall = function Side(x) {
	var ht = w.can.height
	return this.wall(x, ht / 2, 40, ht)
}
w.long = function Flat(y) {
	var wd = w.can.width
	return this.wall(wd / 2, y, wd, 40)
}
w.walls = function (wa) {
	var w = this;
	if (wa === 0) {
		return w
	}  //if (F(wa = S(wa) ? window[wa] : wa)) {wa();return}
	w.left = w.tall(0)
	w.right = w.tall(w.can.width)
	w.roof = w.long(0)
	w.floor = w.long(w.can.height)
	return w
}
//
w.vW = function (col, H, x, y) {
	var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
	if (!S(col)) {
		y = x;
		x = H;
		H = col;
		col = 'x'
	}
	H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
	if (U(x)) {
		x = cW / 2;
		y = cH / 2 - H / 2
	}
	else if (U(y)) {
		x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
		y = cH / 2 - H / 2
	}
	//x-=10?
	return w.R(col, 20, H, x, y).bo(.2).K('wall')
}
function more(){
//the walls themselves are made with w.BOX
	w.wall = function (x, y, wd, ht) {
		var w = this
		var b = w.brick(x, y, wd, ht).stat().fr(0).K('wall')
		return b
	}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
	w.thin = function () {
		var w = this, b
		return b
	}
	w.flat = function () {
		var w = this, b
		return b
	}
// a tall is a canvas-heighted thin 
// a long is canvas-widthed flat
	w.tall = function Side(x) {
		var ht = w.can.height
		return this.wall(x, ht / 2, 40, ht)
	}
	w.long = function Flat(y) {
		var wd = w.can.width
		return this.wall(wd / 2, y, wd, 40)
	}
	w.walls = function (wa) {
		var w = this;
		if (wa === 0) {
			return w
		}  //if (F(wa = S(wa) ? window[wa] : wa)) {wa();return}
		w.left = w.tall(0)
		w.right = w.tall(w.can.width)
		w.roof = w.long(0)
		w.floor = w.long(w.can.height)
		return w
	}
	w._walls = function (o) {
		var w = this
		if (o.w == '*') {
			sides();
			verSides()
		}
		if (o.w == '@') {
			w.warp();
			return w
		}
		if (o.w == '_') {
			bot()
		}
		if (o.w == '~') {
			top()
		}
		if (o.w == '[') {
			left()
		}
		if (o.w == ']') {
			right()
		}
		if (o.w == 'U') {
			sides();
			bot()
		}
		if (o.w == 'A') {
			sides();
			top()
		}
		if (o.w == 'C') {
			verSides();
			left()
		}
		if (o.w == 'L') {
			left();
			bot()
		}
		if (o.w == '=') {
			verSides()
		}
		if (o.w == '|') {
			sides()
		}
		if (o.w == '->') {
			verSides();
			left();
			right1()
		}
		if (o.w == '<-') {
			verSides();
			left1();
			right()
		}
		if (o.w == '<->') {
			verSides();
			left1();
			right1()
		}
		if (o.w == 'r2') {
			verSides();
			left();
			right2()
		}
		if (o.w == 'l2') {
			verSides();
			left2();
			right()
		}
		function sides() {
			right();
			left()
		}
		
		function verSides() {
			top();
			bot()
		}
		
		function left() {
			w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
			w.l_.SetBullet(true)
		}
		
		function right() {
			w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h)
					.K('wall side right');
			w.r_.SetBullet(true)
		}
		
		function right2() {
			w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
		}
		
		function right1() {
			w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
			w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
		}
		
		function left2() {
			w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
		}
		
		function left1() {
			w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
			w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
		}
		
		function top() {
			w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
			w.t_.SetBullet(true)
		}
		
		function bot() {
			w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
			w.b_.SetBullet(true)
		}
	}
	w.walls = function () {
		var w = this, g = G(arguments), o
		if (g.f === 0) {
			return
		}
		w._walls(wallOp(g))
	}
	w.walls = function (o) {
		var w = this,
				can = w.canvas,
				W = can.width,
				H = can.height,
				wa = o.w,
				col, h
		if (wa == 0) {
			return w
		}
		if (F(wa)) {
			wa()
		}
		else if (A(wa)) {
			col = wa[0]
			W = wa[1]
			h = wa[2]
			if (!S(col)) {
				h = W;
				W = col;
				col = 'o'
			}
			W = N(W) ? W : w.W()
			h = N(h) ? h : w.H()
			w.floor = w.R(col, W, 20, 0, h - 20)
			w.right = w.R(col, 20, h, W - 20, 0)
			w.roof = w.R(col, W, 20, 0, 0)
			w.left = w.R(col, 20, h, 0, 0)
		}
		else if (wa == '_') {
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else if (wa == 'L') {
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else if (wa == 'U') {
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		}
		else {
			w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
			w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
			w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
			w.roof = w.S(W / 2, 0, 'o', W, 40).K('wall roof')
		}
		w.$$(function () {
			w.S(w.mx, w.my, 'x', [[10, 10, '-']])
		})
		return w
	}
}
 
function clear(){
	w.clr = w.wXx = function () {
		var w = this
		w.e(function (b) {
			if (!w.isWall(b)) {
				b.kill()
			}
		})
		return w
	}
}
function bool(){
	w.isWall = function (b) {
		var w = this;
		return b == w.right || b == w.left || b == w.roof || b == w.floor
	}}
function wallOp(g) {
	var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
	o.c = o.c || 'o';
	o.w = o.w || '*';
	o.l = 40
	return o
}
w.vW = function (col, H, x, y) {
	var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
	if (!S(col)) {
		y = x;
		x = H;
		H = col;
		col = 'x'
	}
	H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
	if (U(x)) {
		x = cW / 2;
		y = cH / 2 - H / 2
	}
	else if (U(y)) {
		x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
		y = cH / 2 - H / 2
	}
	//x-=10?
	return w.R(col, 20, H, x, y).bo(.2).K('wall')
}