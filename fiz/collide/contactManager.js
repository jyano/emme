b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
	alert('b2d.manager')
	var m = new BXD.b2ContactManager
	m.c = m.cl = m.Collide
	m.a = m.aP = m.AddPair
	m.f = m.fNC = m.FindNewContacts
	m.d = m.ds = m.Destroy
	return m
}