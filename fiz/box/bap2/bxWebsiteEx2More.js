BXEX2 = function () {
	var mX, mY, isMDown, selB
	var mJt
	
	function makeMJt() {
		$l('makeMJt')
		var b = getBodyAtM()
		if (U(b)) {
			return
		}
		var mJD = new bx.MJD()
		//b.wake()
		mJD.bA(w.GGB()).bB(b)
		//mJD.cC(1).mF(300 * b.GM()).ST(mX, mY)
		return w.CJ(mJD)
	}
	
	function getBodyAtM() {
		$l('getBodyAtM')
		var selB
		w.QAB(qFn, $AB().LB(mX - .1, mY - .1).UB(mX + .1, mY + .1))
		return selB
		function qFn(f) {
			var hit = (f.bTy() == bx.dB) && f.TP(f.tf(), V(mX, mY))
			if (!hit) {
				return 1
			}
			selB = f.B()
		}
	}
	
	cv = l({l: 'c', W: 800, H: 500, a2: 1})
	cv._ps = cv.os()
	w = new bx.W(V(0, 10), true)  //allow sleep
	w.SDD($dD().SS(cv.gC()).SDS(30)
			.SFA(0.5).SLT(1).SF(bx.hBit | bx.jBit))
	_.ev(1 / 60, function () {
		handleMJt();
		w.step(1 / 60, 10, 10).DDD().CF()
	})
	$.D(function (e) {
		$l('U')
		isMDown = true
		logXY(e)
		$.mm(logXY).tm(logXY)
	}).U(function () {
		$l('U')
		$.mm_(logXY).tm_(logXY)
		isMDown = mX = mY = undefined;
	})
	bD = $bD().ty(bx.sB)
	fD = $fD().de(1).fr(.5).re(.2)
			.H($pH().SAB(20, 2))
	// walls 
	w.CB(bD.Set(10, 400 / 30 + 1.8)).stat().CF(fD)
	w.CB(bD.Set(10, -1.8)).stat().CF(fD)
	w.CB(bD.Set(-1.8, 13)).stat().CF(fD.SAB(2, 14))
	w.CB(bD.Set(21.8, 13)).stat().CF(fD)
	//  balls 
	bD.ty(bx.dB)
	_.t(10, function (i) {
		w.CB(bD._X(M.r() * 10)._Y(M.r() * 10))
				.CF(fD.H((M.r() > 0.5) ?
						$pH().SAB(M.r() + 0.1, M.r() + 0.1) :
						$cH(M.r() * 30 + 3)))
	})
	function handleMJt() {
		if (!mJt) {
			if (!isMDown) {
				$l('mouse UP (no mouse joint')
				return
			}
			;
			$l('mouse down but still no mouse joint')
			mJt = makeMJt()
		}
		else if (isMDown) {
			$l('mouse DOWN, has mouse joint')
			//	mJt.ST( V(mX, mY) )
		} // (  mX, mY ) ok, too
		else {
			$l('mouse NOT down, but has mouse joint - error!!')
			w.DJ(mJt);
			mJt = null
		}
	}
	
	function logXY(e) {
		$l('logXY')
		$.pD(e)
		if (e.clientX) {
			clX = e.clientX
			clY = e.clientY
		}
		else if (e.changedTouches && e.changedTouches.length > 0) {
			var touch = e.changedTouches[e.changedTouches.length - 1]
			clX = touch.clientX;
			clY = touch.clientY
		}
		else {
			return
		}
		// bx x,y !!! (not page/web/$ (px) x,y)
		mX = (clX - cv._ps.x) / 30;
		mY = (clY - cv._ps.y) / 30
	}
	
	function videoTut() {
// https://www.youtube.com/watch?v=Ubfqc983jN8
// video note: he only uses one body.. so joint is global ('spring')
// transform of box is just x,y,r (see setTransform)
// explains why b2d teleportation is bad
// remember: 'mouse' in mouse joint is JUST an x and y .. 
// (can use perlin noise random walk.. ?)
// 1:50 starts mouse jt
// tug body with string, like dJt with body and mouse
// mouse 'tugs' body around (as it (is) moves(ed))
// destroy jt and set ref to null
// START 3:10
// mouse is ground body
// 7:42 code
// END 10:17 'aha!'
// -> KIN..also cool
	}
}
EX5 = function () {
	var mouseX, mouseY,
			mousePVec, isMouseDown,
			selectedBody, mouseJoint
	var canvasPosition
	$.c().id('canvas')
	w = new b2World(new b2Vec2(0, 10), true) //gravity //allow sleep
	fD = new b2FixtureDef
	fD.density = 1.0
	fD.friction = 0.5
	fD.restitution = 0.2
	bD = new b2BodyDef
	//create ground
	bD.type = b2Body.b2_staticBody
	fD.shape = new b2PolygonShape
	fD.shape.SetAsBox(20, 2)
	bD.position.Set(10, 400 / 30 + 1.8)
	w.CreateBody(bD).CreateFixture(fD)
	bD.position.Set(10, -1.8)
	w.CreateBody(bD).CreateFixture(fD)
	fD.shape.SetAsBox(2, 14)
	bD.position.Set(-1.8, 13)
	w.CreateBody(bD).CreateFixture(fD)
	bD.position.Set(21.8, 13)
	w.CreateBody(bD).CreateFixture(fD)
	bD.type = b2Body.b2_dynamicBody
	for (var i = 0; i < 10; ++i) {
		if (M.r() > 0.5) {
			fD.shape = new b2PolygonShape;
			fD.shape.SetAsBox(
					M.r() + 0.1 //half width
					, M.r() + 0.1 //half height
			)
		} else {
			fD.shape = new b2CircleShape(
					M.r() + 0.1 //radius
			)
		}
		bD.position.x = M.r() * 10
		bD.position.y = M.r() * 10
		w.CreateBody(bD).CreateFixture(fD)
	}
	dD = new b2DebugDraw();
	dD.SetSprite(document.getElementById("canvas").getContext("2d"))
	dD.SetDrawScale(30)
	dD.SetFillAlpha(0.5)
	dD.SetLineThickness(1)
	dD.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit)
	w.SetDebugDraw(dD)
	window.setInterval(update, 1000 / 60)
	//mouse
	canvasPosition = getElementPosition(document.getElementById("canvas"));
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	document.addEventListener("mouseup", handleMouseUp, true);
	document.addEventListener("touchend", handleMouseUp, true);
	function handleMouseDown(e) {
		isMouseDown = true;
		handleMouseMove(e);
		document.addEventListener("mousemove", handleMouseMove, true)
		document.addEventListener("touchmove", handleMouseMove, true)
	}
	
	function handleMouseUp() {
		document.removeEventListener("mousemove", handleMouseMove, true)
		document.removeEventListener("touchmove", handleMouseMove, true)
		isMouseDown = false
		mouseX = undefined
		mouseY = undefined
	}
	
	function handleMouseMove(e) {
		var clientX, clientY
		if (e.clientX) {
			clientX = e.clientX
			clientY = e.clientY
		}
		else if (e.changedTouches && e.changedTouches.length > 0) {
			var touch = e.changedTouches[e.changedTouches.length - 1]
			clientX = touch.clientX
			clientY = touch.clientY
		}
		else {
			return;
		}
		mouseX = (clientX - canvasPosition.x) / 30
		mouseY = (clientY - canvasPosition.y) / 30
		e.preventDefault();
	}
	
	function getBodyAtMouse() {
		mousePVec = new b2Vec2(mouseX, mouseY)
		var aabb = new b2AABB()
		aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001)
		aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001)
		// Query the w for overlapping shapes.
		selectedBody = null;
		w.QueryAABB(getBodyCB, aabb)
		return selectedBody;
	}
	
	function getBodyCB(fixture) {
		if (fixture.GetBody().GetType() != b2Body.b2_staticBody) {
			if (fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
				selectedBody = fixture.GetBody()
				return false
			}
		}
		return true;
	}
	
	function update() {
		if (isMouseDown && (!mouseJoint)) {
			var body = getBodyAtMouse();
			if (body) {
				var md = new b2MouseJointDef()
				md.bodyA = w.GetGroundBody()
				md.bodyB = body
				md.target.Set(mouseX, mouseY)
				md.collideConnected = true
				md.maxForce = 300.0 * body.GetMass()
				mouseJoint = w.CreateJoint(md)
				body.SetAwake(true)
			}
		}
		if (mouseJoint) {
			if (isMouseDown) {
				mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY))
			}
			else {
				w.DestroyJoint(mouseJoint)
				mouseJoint = null
			}
		}
		w.Step(1 / 60, 10, 10)
		w.DrawDebugData()
		w.ClearForces()
	}
	
	function getElementPosition(element) {
		var elem = element, tagname = "", x = 0, y = 0
		while ((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
			y += elem.offsetTop
			x += elem.offsetLeft
			tagname = elem.tagName.toUpperCase()
			if (tagname == "BODY")
				elem = 0;
			if (typeof(elem) == "object") {
				if (typeof(elem.offsetParent) == "object")
					elem = elem.offsetParent
			}
		}
		return {x: x, y: y}
	}

//https://www.youtube.com/watch?v=Ubfqc983jN8
// remember: 'mouse' in mouse joint is JUST an x and y .. (can use random walk.. ?)
}
EX6 = function () {
	$.c().id('canvas')
	w = new b2World(new b2Vec2(0, 10), true) //gravity //allow sleep
	fD = new b2FixtureDef;
	fD.density = 1.0;
	fD.friction = 0.5;
	fD.restitution = 0.2;
	bD = new b2BodyDef;
	//create ground
	bD.type = b2Body.b2_staticBody;
	fD.shape = new b2PolygonShape;
	fD.shape.SetAsBox(20, 2);
	bD.position.Set(10, 400 / 30 + 1.8);
	w.CreateBody(bD).CreateFixture(fD);
	bD.position.Set(10, -1.8);
	w.CreateBody(bD).CreateFixture(fD);
	fD.shape.SetAsBox(2, 14);
	bD.position.Set(-1.8, 13);
	w.CreateBody(bD).CreateFixture(fD);
	bD.position.Set(21.8, 13);
	w.CreateBody(bD).CreateFixture(fD);
	//create some objects
	bD.type = b2Body.b2_dynamicBody;
	for (var i = 0; i < 10; ++i) {
		if (M.r() > 0.5) {
			fD.shape = new b2PolygonShape;
			fD.shape.SetAsBox(
					M.r() + 0.1 //half width
					, M.r() + 0.1 //half height
			);
		} else {
			fD.shape = new b2CircleShape(
					M.r() + 0.1 //radius
			);
		}
		bD.position.x = M.r() * 10;
		bD.position.y = M.r() * 10;
		w.CreateBody(bD).CreateFixture(fD);
	}
	//setup debug draw
	dD = new b2DebugDraw();
	dD.SetSprite(document.getElementById("canvas").getContext("2d"));
	dD.SetDrawScale(30.0);
	dD.SetFillAlpha(0.5);
	dD.SetLineThickness(1.0);
	dD.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
	w.SetDebugDraw(dD);
	window.setInterval(update, 1000 / 60);
	//mouse
	var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
	var canvasPosition = getElementPosition(document.getElementById("canvas"));
	
	function handleMouseDown(e) {
		isMouseDown = true;
		handleMouseMove(e);
		document.addEventListener("mousemove", handleMouseMove, true);
		document.addEventListener("touchmove", handleMouseMove, true);
	}
	
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	function handleMouseUp() {
		document.removeEventListener("mousemove", handleMouseMove, true);
		document.removeEventListener("touchmove", handleMouseMove, true);
		isMouseDown = false;
		mouseX = undefined;
		mouseY = undefined;
	}
	
	document.addEventListener("mouseup", handleMouseUp, true);
	document.addEventListener("touchend", handleMouseUp, true);
	function handleMouseMove(e) {
		var clientX, clientY;
		if (e.clientX) {
			clientX = e.clientX;
			clientY = e.clientY;
		}
		else if (e.changedTouches && e.changedTouches.length > 0) {
			var touch = e.changedTouches[e.changedTouches.length - 1];
			clientX = touch.clientX;
			clientY = touch.clientY;
		}
		else {
			return;
		}
		mouseX = (clientX - canvasPosition.x) / 30;
		mouseY = (clientY - canvasPosition.y) / 30;
		e.preventDefault();
	};
	function getBodyAtMouse() {
		mousePVec = new b2Vec2(mouseX, mouseY);
		var aabb = new b2AABB();
		aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
		aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);
		// Query the w for overlapping shapes.
		selectedBody = null;
		w.QueryAABB(getBodyCB, aabb);
		return selectedBody;
	}
	
	function getBodyCB(fixture) {
		if (fixture.GetBody().GetType() != b2Body.b2_staticBody) {
			if (fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
				selectedBody = fixture.GetBody();
				return false;
			}
		}
		return true;
	}
	
	//update
	function update() {
		if (isMouseDown && (!mouseJoint)) {
			var body = getBodyAtMouse();
			if (body) {
				var md = new b2MouseJointDef();
				md.bodyA = w.GetGroundBody();
				md.bodyB = body;
				md.target.Set(mouseX, mouseY);
				md.collideConnected = true;
				md.maxForce = 300.0 * body.GetMass();
				mouseJoint = w.CreateJoint(md);
				body.SetAwake(true);
			}
		}
		if (mouseJoint) {
			if (isMouseDown) {
				mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
			} else {
				w.DestroyJoint(mouseJoint);
				mouseJoint = null;
			}
		}
		w.Step(1 / 60, 10, 10);
		w.DrawDebugData();
		w.ClearForces();
	};
	//helpers
	//http://js-tut.aardon.de/js-tut/tutorial/position.html
	function getElementPosition(element) {
		var elem = element, tagname = "", x = 0, y = 0;
		while ((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
			y += elem.offsetTop;
			x += elem.offsetLeft;
			tagname = elem.tagName.toUpperCase();
			if (tagname == "BODY")
				elem = 0;
			if (typeof(elem) == "object") {
				if (typeof(elem.offsetParent) == "object")
					elem = elem.offsetParent;
			}
		}
		return {x: x, y: y};
	}
}
EX7 = sumplifiedButNotYetScaled = function () {
	function makeMJt() {
		var b = getBodyAtM()
		if (!b) {
			return
		}
		b.wake()
		var md = new bx.MJD()
		md.bodyA = w.GGB()
		md.bodyB = b
		md.target.Set(mX, mY)
		md.collideConnected = true
		md.maxForce = 300.0 * b.GM()
		return w.CJ(md)
	}
	
	var mX, mY, isMDown, selB, mJt
	cv = l({l: 'c', W: 800, H: 500, a: 1})
	cv._ps = cv.os()
	w = new bx.W(V(0, 10), true)  //allow sleep
	w.SDD($dD().SS(cv.gC()).SDS(30)
			.SFA(0.5).SLT(1).SF(bx.hBit | bx.jBit))
	_.ev(1 / 60, function () {
		handleMJt();
		w.step(1 / 60, 10, 10).DDD().CF()
	})
	$.D(function (e) {
		isMDown = true
		onMove(e)
		$.mm(onMove).tm(onMove)
	}).U(function () {
		$.mm_(onMove).tm_(onMove)
		isMDown = mX = mY = undefined;
	})
	bD = $bD().ty(bx.sB)
	fD = $fD().de(1).fr(.5).re(.2).H($pH().SAB(20, 2))
	// walls 
	w.CB(bD.Set(10, 400 / 30 + 1.8)).CF(fD)
	w.CB(bD.Set(10, -1.8)).CF(fD)
	w.CB(bD.Set(-1.8, 13)).CF(fD.SAB(2, 14))
	w.CB(bD.Set(21.8, 13)).CF(fD)
	//  balls 
	bD.ty(bx.dB)
	_.t(10, function (i) {
		w.CB(bD._X(M.r() * 10)._Y(M.r() * 10))
				.CF(fD.H((M.r() > 0.5) ?
						$pH().SAB(M.r() + 0.1, M.r() + 0.1) :
						$cH(M.r() * 30 + 3)))
	})
	function handleMJt() {
		if (!mJt) {
			if (!isMDown) {
				return
			}
			;
			mJt = makeMJt()
		}
		else if (isMDown) {
			mJt.SetTarget(V(mX, mY))
		}
		else {
			w.DJ(mJt);
			mJt = null
		}
	}
	
	function getBodyAtM() {
		var selB
		w.QAB(qFn, $AB().LB(mX - .1, mY - .1).UB(mX + .1, mY + .1))
		return selB
		function qFn(f) {
			var hit = (f.bTy() == bx.dB) && f.TP(f.tf(), V(mX, mY))
			if (!hit) {
				return 1
			}
			selB = f.B()
		}
	}
	
	function onMove(e) {
		$.pD(e)
		if (e.clientX) {
			clX = e.clientX
			clY = e.clientY
		}
		else if (e.changedTouches && e.changedTouches.length > 0) {
			var touch = e.changedTouches[e.changedTouches.length - 1]
			clX = touch.clientX;
			clY = touch.clientY
		}
		else {
			return
		}
		// bx x,y !!! (not page/web/$ (px) x,y)
		mX = (clX - cv._ps.x) / 30;
		mY = (clY - cv._ps.y) / 30
	}
	
	function videoTut() {
// https://www.youtube.com/watch?v=Ubfqc983jN8
// video note: he only uses one body.. so joint is global ('spring')
// transform of box is just x,y,r (see setTransform)
// explains why b2d teleportation is bad
// remember: 'mouse' in mouse joint is JUST an x and y .. 
// (can use perlin noise random walk.. ?)
// 1:50 starts mouse jt
// tug body with string, like dJt with body and mouse
// mouse 'tugs' body around (as it (is) moves(ed))
// destroy jt and set ref to null
// START 3:10
// mouse is ground body
// 7:42 code
// END 10:17 'aha!'
// -> KIN..also cool
	}
}
EX2 = function () {
	$.c().id('canvas')
	world = new b2World(
			new b2Vec2(0, 10)    //gravity
			, true                 //allow sleep
	);
	var fixDef = new b2FixtureDef;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 0.2;
	var bodyDef = new b2BodyDef;
	//create ground
	bodyDef.type = b2Body.b2_staticBody;
	fixDef.shape = new b2PolygonShape;
	fixDef.shape.SetAsBox(20, 2);
	bodyDef.position.Set(10, 400 / 30 + 1.8);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	bodyDef.position.Set(10, -1.8);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	fixDef.shape.SetAsBox(2, 14);
	bodyDef.position.Set(-1.8, 13);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	bodyDef.position.Set(21.8, 13);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	//create some objects
	bodyDef.type = b2Body.b2_dynamicBody;
	for (var i = 0; i < 10; ++i) {
		if (Math.random() > 0.5) {
			fixDef.shape = new b2PolygonShape;
			fixDef.shape.SetAsBox(
					Math.random() + 0.1 //half width
					, Math.random() + 0.1 //half height
			);
		} else {
			fixDef.shape = new b2CircleShape(
					Math.random() + 0.1 //radius
			);
		}
		bodyDef.position.x = Math.random() * 10;
		bodyDef.position.y = Math.random() * 10;
		world.CreateBody(bodyDef).CreateFixture(fixDef);
	}
	//setup debug draw
	var debugDraw = new b2DebugDraw();
	debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
	debugDraw.SetDrawScale(30.0);
	debugDraw.SetFillAlpha(0.5);
	debugDraw.SetLineThickness(1.0);
	debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
	world.SetDebugDraw(debugDraw);
	window.setInterval(update, 1000 / 60);
	//mouse
	var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
	var canvasPosition = getElementPosition(document.getElementById("canvas"));
	
	function handleMouseDown(e) {
		isMouseDown = true;
		handleMouseMove(e);
		document.addEventListener("mousemove", handleMouseMove, true);
		document.addEventListener("touchmove", handleMouseMove, true);
	}
	
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	function handleMouseUp() {
		document.removeEventListener("mousemove", handleMouseMove, true);
		document.removeEventListener("touchmove", handleMouseMove, true);
		isMouseDown = false;
		mouseX = undefined;
		mouseY = undefined;
	}
	
	document.addEventListener("mouseup", handleMouseUp, true);
	document.addEventListener("touchend", handleMouseUp, true);
	function handleMouseMove(e) {
		var clientX, clientY;
		if (e.clientX) {
			clientX = e.clientX;
			clientY = e.clientY;
		}
		else if (e.changedTouches && e.changedTouches.length > 0) {
			var touch = e.changedTouches[e.changedTouches.length - 1];
			clientX = touch.clientX;
			clientY = touch.clientY;
		}
		else {
			return;
		}
		mouseX = (clientX - canvasPosition.x) / 30;
		mouseY = (clientY - canvasPosition.y) / 30;
		e.preventDefault();
	};
	function getBodyAtMouse() {
		mousePVec = new b2Vec2(mouseX, mouseY);
		var aabb = new b2AABB();
		aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
		aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);
		// Query the world for overlapping shapes.
		selectedBody = null;
		world.QueryAABB(getBodyCB, aabb);
		return selectedBody;
	}
	
	function getBodyCB(fixture) {
		if (fixture.GetBody().GetType() != b2Body.b2_staticBody) {
			if (fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
				selectedBody = fixture.GetBody();
				return false;
			}
		}
		return true;
	}
	
	//update
	function update() {
		if (isMouseDown && (!mouseJoint)) {
			var body = getBodyAtMouse();
			if (body) {
				var md = new b2MouseJointDef();
				md.bodyA = world.GetGroundBody();
				md.bodyB = body;
				md.target.Set(mouseX, mouseY);
				md.collideConnected = true;
				md.maxForce = 300.0 * body.GetMass();
				mouseJoint = world.CreateJoint(md);
				body.SetAwake(true);
			}
		}
		if (mouseJoint) {
			if (isMouseDown) {
				mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
			} else {
				world.DestroyJoint(mouseJoint);
				mouseJoint = null;
			}
		}
		world.Step(1 / 60, 10, 10);
		world.DrawDebugData();
		world.ClearForces();
	};
	//helpers
	//http://js-tut.aardon.de/js-tut/tutorial/position.html
	function getElementPosition(element) {
		var elem = element, tagname = "", x = 0, y = 0;
		while ((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
			y += elem.offsetTop;
			x += elem.offsetLeft;
			tagname = elem.tagName.toUpperCase();
			if (tagname == "BODY")
				elem = 0;
			if (typeof(elem) == "object") {
				if (typeof(elem.offsetParent) == "object")
					elem = elem.offsetParent;
			}
		}
		return {x: x, y: y};
	}
}