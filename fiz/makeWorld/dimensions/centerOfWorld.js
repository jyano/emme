w.cen = w.cent = function () {


	var w = this, g = G(arguments),
			v = V(
			w.st.W() / 2,
			 w.st.H() / 2)

	if (g.p) {w.dot(v)}
	return v
}