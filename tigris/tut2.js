Cx=Context = {
	canvas: null,
	context: null,
	create: function (canvas_tag_id) {
		this.canvas = document.getElementById(canvas_tag_id)
		this.context = this.canvas.getContext('2d')
		return this.context
	}
}
cx = Cx.context


TUT2=function(){
	$.c().id('canvas')
	Cx.create('canvas')
	WALL = '/grass64.png'
	CRATE = '/wall64.jpeg'

	i=image = new Spite(WALL,false)
	i2=image2 = new Spite(CRATE, false)
	ptt = pattern = new Spite(CRATE, true)


	angle = 0

	setInterval(function () {
			Cx.context.f('z').fR(0, 0, 800, 800)
			i.draw(0, 0, 64, 64)//normal
			i.draw(0, 74, 256, 32) //streched one
			ptt.draw(160, 160, 256, 180) //pattern(larger than other sprites)
			i.rotate(115, 160, angle += 4)
			i2.rotate(115, 260, -angle / 2)
		}, 125)


	
	
}

PATT=function(){
	ctx= $.c(2000,1000).ctx()
	i= new Image()
	i.src = '/me.png'

	$(i).load(function(){
		pat = ctx.createPattern(i, "repeat");
		ctx.rect(0,0,2000,1000);
		ctx.fillStyle=pat;
		ctx.fill()
	})
	  //
	 // img= Im('me')


}

PATT=function(){

	Q(function(){


		ctx= $.c(2000,1000).ctx()
		i= Q.get('me')
		pat = ctx.createPattern(i, "repeat");
		ctx.rect(0,0,2000,1000);
		ctx.fillStyle=pat;
		ctx.fill()
	//
	// img= Im('me')


})

}

Spite2 =  function (filename, is_pattern) {
	this.image = null
	this.pattern = null
	this.TO_RADIANS = M.PI / 180
	if (filename) {

		f=filename
		if(O(filename)){

			$l("image")
			this.image = $(filename)[0]

		}

		else{
			$l("!image")
			this.image = new Image()
			this.image.src = filename


		}

		if (is_pattern) {
			$l('is pattern')

			this.pattern = Cx.context.createPattern(this.image, 'repeat')

		}



	}
	else {$l('unable to load sprite.');return}
	this.draw = function (x, y, w, h) {
		$l("draw")
		var cx = Cx.context
		var i

		if (this.pattern) {
			$l('jjjj')
			cx.f(this.pattern)
			cx.fR(x,y,w,h)
		}

		else {

			i = this.image
			w ? cx.dI(i, x, y, w, h) :
				cx.dI(i, x, y, i.width, i.height)
		}
	}
	this.rotate = function (x, y, angle) {
		var cx = Cx.context
		var i
		cx.save()
		cx.translate(x, y)
		cx.rotate(angle * this.TO_RADIANS)
		i = this.image
		cx.dI(i, -(i.width / 2), -(i.height / 2))
		cx.restore()
	}
}

TUT2=function(){
	$.c().id('canvas')
	Cx.create('canvas')

	angle = 0
	queue = new createjs.LoadQueue();
	queue.on("complete", handleComplete )
	queue.loadManifest([
		{
			id: "wall",
			src:"/grass64.png"
		},
		{
			id: "crate",
			src:"/wall64.jpeg"
		}
	])

	function handleComplete() {


		wall= queue.getResult("wall");
		crate= queue.getResult("crate");


		i=image = new Spite2(wall,false)
		i2=image2 = new Spite2(crate, false)
		 ptt =   new Spite2(crate, true)



		setInterval(function () {
	  	Cx.context.f('z').fR(0, 0, 800, 800)
			$l('about to draw')
			i.draw(0, 0, 64, 64)//normal
		 	i.draw(0, 74, 256, 32) //streched one
		 	ptt.draw(160, 160, 256, 180) //pattern(larger than other sprites)
		 	i.rotate(115, 160, angle += 4)
		 	i2.rotate(115, 260, -angle / 2)
		}, 125)
	}






}
