cxI.n = cxI.nI = function (n) {
	var I = this,
			nI = _.m(I.normalImpulses, M.fl)
	return N(n) ? nI[n] : nI
}
cxI.t = cxI.tI = function (n) {
	var I = this,
			tI = _.m(I.tangentImpulses, M.fl)
	return N(n) ? tI[n] : tI
}
cxI.nX = function () {
	var I = this;
	return I.nI(0)
}
cxI.nY = function () {
	var I = this;
	return I.nI(1)
}
cxI.tX = function () {
	var I = this;
	return I.tI(0)
}
cxI.tY = function () {
	var I = this;
	return I.tI(1)
}
b2d.superManifold = function (m) {
	alert('superManifold')
//used????
	m.lPN = m.m_localPlaneNormal
	m.lP = m.m_localPoint
	m.pC = m.m_pointCount
	m.p = m.m_points
	m.t = m.m_type
	return m
}
function SuperImpulses(impulses) {
	$l('SuperImpulses')
	impulses.n = impulses.nI = function () {
		return impulses.normalImpulses
	}
	impulses.t = impulses.tI = function () {
		return impulses.tangentImpulses
	}
	return impulses
}