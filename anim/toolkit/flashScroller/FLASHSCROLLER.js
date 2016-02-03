FLASHSCROLLER = function () {
	W()
// ****  THIS WORKS!!!
	var p
	s = w.i
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>')
	)
	exportRoot = new lib.scroller2()
	//s=stage = cjs.stage(550,400).A().A( exportRoot )
	T.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	//$('canvas').click(function(){_vy=-20})
	processCollisions = function () {
		return
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	T.t(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//D
FLASHSCROLLER = function () {
	W()
// ****  THIS WORKS!!!
	var p
	s = w.i
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>')
	)
	exportRoot = new lib.scroller2()
	//s=stage = cjs.stage(550,400).A().A( exportRoot )
	T.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	//$('canvas').click(function(){_vy=-20})
	processCollisions = function () {
		return
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	T.t(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//D
FLASHSCROLLER1 = function () {
	z()
	// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().tf(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.bt('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = $St(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hd()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').$(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//f
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	W()
// ****  THIS WORKS!!!
	var p
	s = w.i
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>')
	)
	exportRoot = new lib.scroller2()
	//s=stage = cjs.stage(550,400).A().A( exportRoot )
	T.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	//$('canvas').click(function(){_vy=-20})
	processCollisions = function () {
		return
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	T.t(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//D
FLASHSCROLLER1 = function () {
	z()
	// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().tf(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.bt('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = $St(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hd()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').$(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//f
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}
FLASHSCROLLER1 = function () {
	z()
	// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().tf(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.bt('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = $St(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hd()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').$(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//f
FLASHSCROLLER = function () {
	W()
// ****  THIS WORKS!!!
	var p
	s = w.i
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>')
	)
	exportRoot = new lib.scroller2()
	//s=stage = cjs.stage(550,400).A().A( exportRoot )
	T.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	//$('canvas').click(function(){_vy=-20})
	processCollisions = function () {
		return
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	T.t(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//D
FLASHSCROLLER = function () {
	W()
// ****  THIS WORKS!!!
	var p
	s = w.i
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>')
	)
	exportRoot = new lib.scroller2()
	//s=stage = cjs.stage(550,400).A().A( exportRoot )
	T.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	//$('canvas').click(function(){_vy=-20})
	processCollisions = function () {
		return
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	T.t(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//D
FLASHSCROLLER1 = function () {
	z()
	// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().tf(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.bt('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = $St(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hd()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').$(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//f