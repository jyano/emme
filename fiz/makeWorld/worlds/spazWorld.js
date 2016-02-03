//make world
// can set stage width/height and world width/height
//W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U')
W = function () {
 
	

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
	room()
	keys()
	mouse()
	$t(enterFrame)
	if (o.t !== 0) {
		trackee()
	}
	w.o = o //w.stats()
	return w
}