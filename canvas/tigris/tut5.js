TUT5_PART1=   function () {
	$.c().id('game')
	Cx = Context = new $HTML('game', 640, 480)
	wall = new Spite('/me.png')
	water = new Spite('/sun.png')
	$(window).load(function () {
	
	
		
		setInterval(function(){
			for (var y = 0; y < 10; y++) {
				for (var x = 0; x < 10; x++) {
					var tile_x = x * BLOCK_W;
					var tile_y = y * BLOCK_H
					if (M.floor) {
						M.fl(M.r() * 2) ?
								wall.draw(tile_x, tile_y) :
								water.draw(tile_x, tile_y)
					}
				}
			}
		},100)

	})
}
TUT5 =PART2= function () {

	$.c().id('game')
	Cx = Context = new $HTML('game', 640, 480)
	wall = new Spite('/me.png')
	water = new Spite('/water.jpg')
	
	
	$(window).load(function () {
		setInterval(function () {
		
		mapIndex=0
		
		
			for (var y = 0; y < 10; y++) {
				for (var x = 0; x < 10; x++, mapIndex++) {
					var tile_x = x * BLOCK_W;
					var tile_y = y * BLOCK_H
					if (M.floor) {
						var tile 
						var tileType= map[mapIndex]
						if(tileType == 0){
							 
							tile=water
					}
						else if (tileType == 1) {
						 
							tile = wall
						}
						
						if(tile){
							tile.draw(tile_x, tile_y)
						}
					}
				}}
			
			
			
		}, 100)
	})
	
	
	
}

map = [
	1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
	0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
	0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
	0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
	0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
	1, 0, 1, 0, 1, null, 1, 0, 1, 0,
	1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
	1, 1, 1, 0,0,0, 1, 0, 1,
]

Spite2 =  function (filename, is_pattern) {
	this.image = null
	this.pattern = null
	this.TO_RADIANS = M.PI / 180
	if (filename) {

		f=filename
		if(O(filename)){

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

		var cx = Cx.context
		var i

		if (this.pattern) {

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

TUUT5=function(){
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


		grass = new Spite2(wall,false)


		wall =   new Spite2(crate, false)



		 setInterval(function () {
			 mapIndex=0
			for (var y = 0; y < 10; y++) {
				for (var x = 0; x < 10; x++, mapIndex++) {
					var tile_x = x * BLOCK_W;
					var tile_y = y * BLOCK_H
					var tile
					var tileType= map[mapIndex]
					if(tileType == 0){tile=wall}
					else if (tileType == 1) {tile = grass}
					if(tile){tile.draw(tile_x, tile_y)}

				}

			}
		 	}, 125)
	}
}