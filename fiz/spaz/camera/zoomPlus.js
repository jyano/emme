w.pan = function (o) {
	var w = this, g = G(arguments), o = g[0],
			mZ = w.mZ,
			MZ = mZ * 3,
			z = w.mZ * 3, up = true,
			l
	if (g.m) {
		l = function () {
			up = z > w.mZ * 3 ? false :
					z < w.mZ ? true :
							up
			z *= up ? 1.01 : .9
			w.Z(z / w.mZ)
		}
	}
	else {
		l = function () {
			up = z > w.mZ * 3 ? false : z < mZ ? true : up
			z += up ? .03 : -.03
			w.Z(z / w.mZ)
		}
	}
	w.track.cb = l
	return w
}
w.zoomIn = function () {
	var w = this
	w.tCb = function () {
		w.Z(_.cap(w.z *= 1.02, 0, 4))
	}
	return w
}
w.zout = function () {
	this.zoomOut();
	_.in(10, this.zin)
	return this
}
w.zoomIn = function () {
	var w = this
	w.trackeeCb = function () {
		w.zoom(_.capTop(w._zoom *= 1.02, 4))
	}
	return w
}
w.panZoomIn = w.zoomIn = function () {
	var w = this
	w.tCb = function () {
		w.zoom(w.zoom() * 1.02)
	}
	return w
}
w.zoomOut = function () {
	var w = this
	//knows when to stop :)
	w.setTrackeeCallback(function () {
		w.zoom(_.cap(w._zoom *= .98, w.maxZoom))
	})
	return w
}
w.zoomOut = function () {
	var w = this //knows when to stop :)
	w.tCb = function () {
		w.Z(_.cap(w.z *= .98, w.mS))
	}
	return w
}
w.panZoomOut = w.zoomOut = function () {
	var w = this
	w.tCb = function () {
		w.zoom(w.zoom() * .98)
	}
	return w
}
w.inout = function () {
	var w = this, // now it works!!!!
			s = 1,
			up = true
	w.trackee.cb = function () {
		if (up) {
			if (s < 2) {
				s += .2;
			}
			else {
				up = false
			}
			w.zoom(s)
		}
		else {
			if (s > .8) {
				s -= .2
			}
			else {
				up = true
			}
			w.zoom(s)
		}
	}
	return w
}
w.showOff = w.zin = function () {
	this.zoomIn();
	_.in(4, this.zout)
	return this
}
w.inout = function () {
	var w = this, // now it works!!!!
			s = 1,
			up = true
	w.t.cb = function () {
		if (up) {
			if (s < 2) {
				s += .2;
			}
			else {
				up = false
			}
			w.Z(s)
		}
		else {
			if (s > .8) {
				s -= .2
			}
			else {
				up = true
			}
			w.Z(s)
		}
	}
	return w
}
w.zoomAlt = function () {
	var w = this, g = G(arguments)
	w.setZoom = w.setZ = function () {
		w.updateStageZoomScale = w.updStgZoom = function () {
			var w = this
			w.st.scaleX = w._zoom
			w.st.scaleY = w._zoom
			return w
		}
		var w = this, g = G(arguments)
		var zoom = g.f
		//zoom = g.n ? w.mZ : _.capTop(zoom, w.mZ)
		w._setZoom = w._setZ = function (zoom) {
			var w = this, g = G(arguments)
			w._zoom = zoom
			return w.updateStageZoomScale()
		}
		return w._setZoom(zoom)
	}
	w.getZoom = w.getZ = function () {
		return this._zoom
	}
	return g.u ? w.getZoom() : w.setZoom(g.f)
	//
	//if (g.u) {return w.z}
	//w.z = g.n ? w.mS : _.cap(g.f, w.mS)
	//w.st.sXY( w.z )
	//return w // get/set zoom.. ok cool :)
} 