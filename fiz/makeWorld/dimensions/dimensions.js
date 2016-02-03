 
function old() {
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;
	w.H2 = w.HH = w.hH = w.H / 2;
	w.hH = w.h / w.H;
	w.Ww = w.W / w.w;
	w.wW = w.w / w.W;
	w.Hh = w.H / w.h;
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
	//scale
	w.z = w.SCALE = 1
}