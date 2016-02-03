var mX, mY, mPVec, isMDown, selB, mJt, canPs
function gElPs(l, x, y) {
	x = 0
	y = 0
	while (l) {
		y += l.offsetTop;
		x += l.offsetLeft
		l = l.tagName.toUpperCase() == "BODY" ? null :
				l.offsetParent
	}
	return {x: x, y: y}
}
EX3 = function () {
	
	$.c().id('canvas')
	
	w = new b2World(V(0, 10), true) //gravity //allow sleep


	fD = $fD().de(1).fr(0.5).re(0.2).H($pH().SAB(20, 2))

	bD = $sB()
 
	

	walls()
	setDD()
	balls()
	_.ev(1 / 60, update)
	
	canPs = gElPs($0("#canvas"))
	
	$(document).on({
		mousedown: handleMDown,
		mouseup: handleMUp//, touchstart: handleMDown, touchend: handleMUp
	})
	
	
	

}

function update() {
	handleMJt()
	w.step(1 / 60, 10, 10).DDD().CF()
}


function handleMJt() {
	if (isMDown && !mJt) {
		makeMJt()
	}
	if (mJt) {
		if (isMDown) {
			mJt.ST(new b2Vec2(mX, mY))
		}
		else {
			w.DJ(mJt);
			mJt = null
		}
	}
}


function makeMJt(b, md) {
	if (b = getBodyAtM()) {
	
		md = new b2MouseJointDef()
		md.bA(w.GGB())
		md.bodyB = b
		md.target.Set(mX, mY)
		md.cC(1)
		md.maxForce = 300.0 * b.GetMass()
		mJt = w.CJ(md)
		b.SetAwake(true)
	}
}

function walls() {
	bD.Set(10, 400 / 30 + 1.8);
	w.CB(bD).CF(fD);
	bD.Set(10, -1.8);
	w.CB(bD).CF(fD);
	fD.shape.SAB(2, 14);
	bD.Set(-1.8, 13);
	w.CB(bD).CF(fD)
	bD.Set(21.8, 13);
	w.CB(bD).CF(fD)
}
function balls() {
	bD.type = b2Body.b2_dynamicBody
	_.t(10, function (i) {
		if (M.r() > 0.5) {
			fD.shape = new b2PolygonShape;
			fD.shape.SetAsBox(M.r() + 0.1, M.r() + 0.1)
		}
		else {
			fD.H(new b2CircleShape(M.r() + 0.1))
		}
		bD.position.x = M.r() * 10;
		bD.position.y = M.r() * 10
		w.CB(bD).CF(fD)
	})
}
function setDD(dD) {
	dD = $dD().SS(
			$("#canvas").gC()).SDS(30).SFA(0.5).SLT(1).SF(bx.hBit | bx.jBit)
	w.SDD(dD)
}
function handleMDown(e) {
	isMDown = true
	handleMMove(e)
	$(document).on("mousemove", handleMMove)//$(document).on("touchmove", handleMMove)
}
function handleMUp() {
	$(document).off("mousemove", handleMMove)
	//$(document).off("touchmove", handleMMove)
	isMDown = false;
	mX = undefined;
	mY = undefined
}
function handleMMove(e, clientX, clientY) {
	$.pD(e)
	//if (e.clientX) {
	clientX = e.clientX;
	clientY = e.clientY
	//} 
	/*
	 else if (e.changedTouches && e.changedTouches.length > 0) {
	 var touch = e.changedTouches[e.changedTouches.length - 1]
	 clientX = touch.clientX;
	 clientY = touch.clientY
	
	
	 }	
	 else {return}
	 */
	// bx x,y !!! (not page/web/$ (px) x,y)
	mX = (clientX - canPs.x) / 30;
	mY = (clientY - canPs.y) / 30
}
function getBodyAtM(aabb, selB) {
	mPVec = V(mX, mY)
	aabb = new b2AABB()
	aabb.lowerBound.Set(mX - 0.001, mY - 0.001)
	aabb.upperBound.Set(mX + 0.001, mY + 0.001)
	selB = null
	w.QAB(function (f) {
		if (f.B().GT() == bx.dB &&
				f.H().TP(
						f.B().GTf(), mPVec)) {
			selB = f.B()
		} else {
			return true
		}
	}, aabb)
	return selB
}