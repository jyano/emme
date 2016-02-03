//  globComp 
x.globalCompOp = x.o = x.op = x.cO = function (o) {
	this.globalCompositeOperation = o;
	return this
}
x.dsO = function () {
	this.o('destination-out');
	return this
}
x.dsI = function () {

// = x.dI CLASH WITH DRAWIMAGE
	return this.o('destination-in')
}
x.srI = function () {
	this.o('source-in');
	return this
}
x.Sd = x.sO = function () {
	this.o('source-out');
	return this
} // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
x.ds = x.dV = function () {
	this.o('destination-over');
	return this
}
x.srA = function () {
	this.o('source-atop');
	return this
}
x.dsA = function () {
	this.o('destination-atop');
	return this
}
x.li = function () {
	this.o('lighter');
	return this
}
x.co = function () {
	this.o('copy');
	return this
}
x.xo = function () {
	this.o('xor');
	return this
}
//
_canGlobComp = function (el) {
	el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
		if (U(compOp)) {
			return this.context.globalCompositeOperation
		}
		this.context.globalCompositeOperation = oO('g', compOp)
		return this
	}
	return el
} 