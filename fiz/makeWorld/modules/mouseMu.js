w.mouse = function () {
	
	//world mouse functions are great
	// they demonstrates md, q, m, and ofClass 
	// but it has a real purpose too!
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
}

w.logMXY = function (e) {
	var w = this,
			p = w.sToW(e.X, e.Y);
	w.mx = p.x;
	w.my = p.y
	return w
}
 