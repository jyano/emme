dog_is_moving = false
 dog_x=0
 dog_y=0
 DIR_N = 4
DIR_S = 64
DIR_W = 16
DIR_E= 1
 
TUT10 = function () {
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
			if (key.right) {
				dog_x += 1
			}
			if (key.left) {
				dog_x -= 1
			}
			if (key.up) {
				dog_y += 1
			}
			if (key.down) {
				dog_y -= 1
			}
			
			dog_sq=0
			if (dog_is_moving) {
				if(dog_direction & DIR_W){dog_seq = [23,24,25,26]}
				 
				dog.drawAnimated(dog_x, dog_y, [0, 7])
			}
			
			else {
				dog.draw(dog_x, dog_y, 0) //FRAME 0
			}
			
		}, 100)
	})
}