  


w.dumbZoom= w.ZOOM = function (zm) {
	var w = this
	var stg = w.stage
	if (U(zm)) {//return stg.scaleX
		return $N(w._zoom)
	}
	w._zoom = zm
	stg.scaleX = zm
	stg.scaleY = zm
	return w
}
 

 

w.smartZoom = w.zoom = function (zm) {
	var w = this; if (U(s)) {return w._zoom}
	
	// w.Z = (w.z)
		//w._zoom = (s == '-') ? w.mS : _.cap(s, w.mS)
	//w.st.sXY(w.z)
	w.dumbZoom(
			
			cjs.cap(zm, w.minScale, 4)
	)
	
	return w
}


	
//get/set zoom.. ok cool :)