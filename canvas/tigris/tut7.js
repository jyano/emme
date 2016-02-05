i2xy = function (index, mapWidth) {
	var x = index % mapWidth
	var y = M.floor(index / mapWidth)
	return [x, y]
}

xy2i=function(x,y,mapWidth){
	return y * mapWidh + x
} 


Spite =Draw =  function (filename, is_pattern) {
this.animationDelay=0

this.animationIndexCounter=0

this.animationCurrentFrame=0

	this.image = null
	this.pattern = null
	this.TO_RADIANS = M.PI / 180
	this.draw = function (x, y, w, h) {
		var cx = Cx.context
		var i
		if (this.pattern) {
			 
			cx.f(this.pattern)
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
	
	this.drawAnimated = function (x, y, spriteSheetIndex) {
		if (this.animationDelay++ >= 3) {
			this.animationIndexCounter++
			if (this.animationIndexCounter >= spriteSheetIndex.length) {this.animationIndexCounter = 0}
			this.animationCurrentFrame = spriteSheetIndex[this.animationIndexCounter]
			this.animationDelay = 0
		}
		
		var res = i2xy(this.animationCurrentFrame, 8)// previously before shortening: var spriteSheetX = this.animationCurrentFrame % 8,var  spriteSheetY = M.fl(this.animationCurrentFrame / 8)
		Context.context.drawImage(
				this.image,
				res[0] * 32,
				res[1] * 64,
				 32, 64,
				  x, y, 32, 64)}
	
	this.draw2 = function (x, y, w, h) {
		if (this.is_pattern) {
		}
	}
	if (filename) {
		this.image = new Image()
		this.image.src = filename
	}
	else {
		$l('unable to load sprite.');
		return
	}
	if (is_pattern) {
		$l('is pattern!')
		cx = Cx.context
		im = this.image
		this.pattern = cx.createPattern(im, 'repeat')
		pt = this.pattern
	}
}

TUT7 = function () {
	map = [
		1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
		1, 1, 1, 0, 0, 0, 1, 0, 1,
	]
	$.c().id('game')
	Cx = Context = new $HTML('game', 640, 480)
	wall = new Spite('/me.png')
	water = new Spite('/water.jpg')
	dog = new Spite('/girlSS.jpg') // <- we have succesfully loaded the spriteSheet into our engine!
	
	$(window).load(function () {
		setInterval(function () {
			mapIndex = 0
			for (var y = 0; y < 10; y++) {
				for (var x = 0; x < 10; x++, mapIndex++) {
					var tile_x = x * BLOCK_W;
					var tile_y = y * BLOCK_H
					if (M.floor) {
						var tile
						var tileType = map[mapIndex]
						if (tileType == 0) {
							tile = water
						}
						else if (tileType == 1
					)
						{
							tile = wall
						}
						if (tile) {
							tile.draw(tile_x, tile_y)
						}
					}
				}
			}
		
			
		dog.drawAnimated(64,64, [0,7
		])
		
		}, 100)
		
		
	})
}

Spite7 =  function (filename, is_pattern) {
	this.animationDelay=0

	this.animationIndexCounter=0

	this.animationCurrentFrame=0

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

	this.drawAnimated = function (x, y, spriteSheetIndex) {
		if (this.animationDelay++ >= 3) {
			this.animationIndexCounter++
			if (this.animationIndexCounter >= spriteSheetIndex.length) {this.animationIndexCounter = 0}
			this.animationCurrentFrame = spriteSheetIndex[this.animationIndexCounter]
			this.animationDelay = 0
		}

		var res = i2xy(this.animationCurrentFrame, 8)// previously before shortening: var spriteSheetX = this.animationCurrentFrame % 8,var  spriteSheetY = M.fl(this.animationCurrentFrame / 8)

		 	Context.context.drawImage(this.image, res[0] * 32, res[1] *32,32, 32,x, y,32,32)
	}

}

TUUT7=function(){
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
		},
		{
			id: "girl",
			src:"/girlSS.jpg"
		},
		{
			id: "dog",
			src:"/dog-sprite-sheet.png"
		}
	])
	function handleComplete() {



		wall= queue.getResult("wall");
		girl= queue.getResult("girl");
		crate= queue.getResult("crate");
		dogg= queue.getResult("dog");

		grass = new Spite7(wall,false)
		wall =   new Spite7(crate, false)
		dog = new Spite7(dogg, false)

		dog1 = new Spite7(dogg, false)

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

			dog.drawAnimated(64, 32,[1,2,3,4])
				//	dog.drawAnimated(64,64,[17,18,19,20]) "turns other dog the same way, as well"
			 dog1.drawAnimated(64,64,[17,18,19,20])
		}, 125)
	}
}
