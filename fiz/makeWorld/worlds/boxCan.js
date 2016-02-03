 
$worSt = function() {
	var g = G(arguments), o
	o=	bx.makeWorldObjParse(o)
	//make the world
	w = bx.theWorld(o)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {$('body').empty()}
	w.cjsStage()
	w.widthHeight()
	return w
}

WORST=function(){$worSt()}

 