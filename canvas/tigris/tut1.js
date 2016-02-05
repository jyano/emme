Context = {
	canvas: null,
	context: null,
	create: function (canvas_tag_id) {
		this.canvas = document.getElementById(canvas_tag_id)
		this.context = this.canvas.getContext('2d')
		return this.context
	}
}

TUT1=TIGRIS=function(){
	$.c('x', 640,480).id('canvas').bor('1px solid grey')
	
	Context.create('canvas')
	
	cx=Context.context
	
	cx.b()
	
	cx.rect(0,0,640,480)
	
	cx.f('z').f()
}