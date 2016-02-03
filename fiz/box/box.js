 
b2d.polySens = function (kind) {
	
	var g=G(arguments)

	return b2d.poly.apply(null, g.r).sensor(true).K(kind)
}
 