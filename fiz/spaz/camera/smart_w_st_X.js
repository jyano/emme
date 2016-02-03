function stageXYCap(){

	 _.cap = cjs.cap
	
	  _.capTop = $capTop = function (n, max) {
		 return _.cap(n, 0, max)
	 }

	 return zeroToMax(s, a * this.z - b)

	 subScDif = function (a, x, z) {
		 return a - x + a / z
	 }
	 zeroToMax = function (s, max) {
		 return _.cap(s, 0, max)
	 }
	 w.sXCap = function (x) {
		 var w = this, g = G(arguments)
		 var dif = w.z - w.W
		 var max = w.w * dif
		 return _.capTop(x, max)
	 }
	 
	 w.stgXCap = function (x) {
		 var w = this, g = G(arguments)
		 var dif = ( w.worldW() - w.gameW()  )
		 var max = dif / w._zoom
		 return _.capTop(x, max)
	 }
 

}

 
 
function stageXSet(){

	w._stgX = function (x) {
		var w = this, g = G(arguments)
		if (g.u) {
			return g.n ? -w.st.x : w.st.x
		}
		w.st.x = g.n ? -x : x
		return w
	}
	w.stgX = function (x) {
		var w = this;
		if (U(x)) {
			return w.st.x
		}
		w.st.x = x
		return w
	}
	w.stgX = function (x) {
		var w = this, g = G(arguments)
		if (g.u) {
			return -w.st.x
		}
		w.st.x = -w.stgXCap(x)
		return w
	}
	w.sX = function (x) {
		var w = this
		if (U(x)) {
			return -w.st.x
		}
		w.st.x = -w.sXCap(x)
		return w
	}

}