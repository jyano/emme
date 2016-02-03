getBodyAtMouse = function (mX, mY) {
	$l('getBodyAtMouse')
	return w.getBodyAtPoint(mX, mY)
}
handleJointsAlt = 0
handleJoints = function () {
	
	//if mouse is dont.. make a new mouse joint, if there is none
	if (_mouseIsDown) {
		$l('mouseIsDown')
		if (_mouseJoint) {
			mj = _mouseJoint
			//  _mouseJoint.SetTarget(V(mX, mY))
		}
		else {
			_mouseJoint = _mouseJoint || b2d.mouseJoint(w.getBodyAtPoint(mX, mY))
		}
	}
	else {
		$l('mouseIsDown')
		if (_mouseJoint) {
			_mouseJoint.destroy();
			_mouseJoint = null
		}
	}
}
checkMouseDown = function () {
}
handleJoints2 = function () {// so far unchanged.. need to think
	if (_mouseIsDown && !_mouseJoint) {
		var b = getBodyAtMouse(mX, mY)
		bb = b
		if (b) {
			_mouseJoint = mouseJoint(b.awake(1))
		}
		else {
			bb.aI(10000, 10000)
		}
	}
	if (_mouseJoint) {
		if (_mouseIsDown) {
			
			// _mouseJoint.sT(mX,mY)
		}
		else {
			bb.aI(
					bbb.x() - MX,
					bbb.y() - MY
			)
			w.dJ(_mouseJoint)
			_mouseJoint = null
		}
	}
}
makeWallsPinball = function () {
	bii(10, 300, 20, 1200) //left
	bii(990, 300, 20, 1200)//right
	bii(300, 0, 3000, 20)//top
	// bii(300, 590, 3000, 20)//bottom
}
	
 