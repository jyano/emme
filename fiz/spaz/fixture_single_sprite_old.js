f.sp = f.Sp = function (sp) {
	var f = this
	if (U(sp)) {
		return f.sprite
	}
	f.sprite = sp
	return f
}