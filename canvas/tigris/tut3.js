BLOCK_W = 32
BLOCK_H = 32

gfx = ['background3.png', 'rock.png', 'me.png', 'water.png', 'metal.png']
animation_suspension_land_state = 0
animation_suspension_land_timer = 0



Player = function () {
	this.x = 400
	this.y = 200
	this.w = 32
	this.h = 32
	this.wheel_angle = 0
	this.falling = 1
	this.momentum = parseFloat(0)
	this.momentum_rate = .08
	this.momentum_max = 2.8
	this.last_direction = 0 //0-left; 1-right;
	this.speed = 1.5
}
Timer=function(){


}

function col(){

}

TUT3 = function () {
	world = null
	sprites = new Spite()
	man = new Spite()
	player = null
	collision = null
	wheel = new Spite()
	car = new Spite()
	accelerator = 0
	speed = 0

	collision = new Collision()
	player = new Player()
	Context.create('canvas')
	man.load('red.png')
	wheel.load('car.png')
	for (var i = 0; i < gfx.length; i++) {
		sprites[i] = new Spite()
		sprites[i].load(gfx[i])
	}
	world = new World(16, 16)
	world.mx = 150
	world.my = 300
	world.map = [
		1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, //1
		1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, //2
		1, 1, 1, 1, 4, 4, 4, 1, 1, 3, 3, 3, 3, 1, 1, 1,//3
		1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 1, 1, 1,//4
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//5
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//6
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//7
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//8
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//9
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//10
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//11
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//12
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//13
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//14
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//15
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1//16
	]
	_.ev(1, function () {
		
	})
}