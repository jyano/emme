function checkAKeycode(){
	$('body').keyup(function (e) {
		$l("e.keyCode = " + e.keyCode)
	})}
KEY_LEFT = 37
KEY_UP = 38
KEY_RIGHT=39
KEY_DOWN = 40
KEY_W = 87
KEY_S = 83
KEY_A = 65
KEY_D = 68


Keyboard = function(){
	this.left= false
	this.right = false
	this.up = false
	this.down = false
	//this.w=false
	//this.s=false
	//this.a=false
	//this.d=false
	
}
disableScrollbar = function () {

// at 25ish
}
//kstate = key = [false, false, false, false] // left,right,up,down
 
InitializeKeyboard=function(){
	key = new Keyboard()
	$(document).keydown(function (e) {
		if(e.keyCode == KEY_LEFT){
			key.left=true
		}
		if (e.keyCode == KEY_RIGHT) {
			key.right = true
		}
		if (e.keyCode == KEY_UP) {
			key.up = true
		}
		if (e.keyCode == KEY_DOWN) {
			key.down = true
		}
	})
	$(document).keyup(function (e) {
		if (e.keyCode == KEY_LEFT) {
			key.left = false
		}
		if (e.keyCode == KEY_RIGHT) {
			key.right = false
		}
		if (e.keyCode == KEY_UP) {
			key.up = false
		}
		if (e.keyCode == KEY_DOWN) {
			key.down = false
		}
	})
}
 
TUT8 = function () {
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
	InitializeKeyboard()
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
						else if (tileType == 1) {
							tile = wall
						}
						if (tile) {
							tile.draw(tile_x, tile_y)
						}
					}
				}
			}

			if(key.right){dog_x += 1}
			if (key.left) {dog_x -= 1}
			if (key.up) {dog_y += 1}
			if (key.down) {dog_y -= 1}
			 
			dog.drawAnimated(dog_x, dog_y, [0, 7])
			
			
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

TUUT8=function(){

	$.c().id('canvas')
	Cx.create('canvas')
	DisableScrollbars()
	InitializeKeyboard()
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

	DrawMap=function(){mapIndex=0
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

		}}
	function handleComplete() {



		wall= queue.getResult("wall");
		girl= queue.getResult("girl");
		crate= queue.getResult("crate");
		dogg= queue.getResult("dog");

		grass = new Spite7(wall,false)
		wall =   new Spite7(crate, false)
		dog = new Spite7(dogg, false)


		dog_x=50
		dog_y=50
		setInterval(function () {
			 DrawMap()

			if(key.right){dog_x += 4}
			if (key.left) {dog_x -= 4}
			if (key.up) {dog_y -= 4}
			if (key.down) {dog_y += 4}

			dog.drawAnimated(dog_x, dog_y, [1,2,3,4])

		}, 10)
	}
}
DisableScrollbars=function(){

	document.documentElement.style.overflow='hidden'
}