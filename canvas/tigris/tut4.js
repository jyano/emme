 $HTML  = function(canvasId,width,height){
	 this.width=width
	 this.height=height
	 this.canvas=null
	 this.context=null
	 this.canvas=document.getElementById(canvasId)
	 this.context = this.canvas.getContext('2d')
	 $(this.canvas).attr({width:this.width, height:this.height})
	// $(this.canvas).attr({style: 'width: '+ this.width + 'px;' + ' height: '+  this.height+'px;'})
 
 }

 BLOCK_H = 32
 BLOCK_W = 32
 Draw = Spite = Stamp = Brush = function (filename, is_pattern) {
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
	 //normal draw
	 this.draw = function (x, y) {

		 cx = Context.context
		 
		 Context.context.drawImage(this.image, x, y, BLOCK_W, BLOCK_H)
	 }
	 //stretched draw
	 this.draw2 = function () {
		 //video has it.. please come back!
		 //just pause at ,7:15 exactly, easey enough for u?
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
	 if (filename) {
		 this.image = new Image()
		 this.image.src = filename
	 }
	 else {
		 $l('unable to load sprite.');
		 return
	 }
	 if (is_pattern) {

		 cx = Cx.context
		 im = this.image
		 this.pattern = cx.createPattern(im, 'repeat')
		 pt = this.pattern
	 }
 }


 TUT4_PART1=function(){
	 $.c().id('game')

Cx=Context=	new $HTML('game', 640,480)

	 wall = new Spite('/fish.png')
	 water = new Spite('/knight.png')
	 
	 $(window).load(function(){
		 wall.draw(0, 0)
		 water.draw(32, 0)
		 //Context = new $HTML('game', 640, 480);for (var y = 0; y < 10; y++) {for (var x = 0; x < 10; x++) {var tile_x = x * BLOCK_W;var tile_y = y * BLOCK_H
		 //	 if (M.floor){wall.draw(tile_x, tile_y)}}}
	 
 })
	
 
 }
 
 TUT444 = PART2= function () {
	 $.c().id('game')
	 Cx = Context = new $HTML('game', 640, 480)
	 wall = new Spite('/fish.png')
	 water = new Spite('/knight.png')
	 $(window).load(function () {
		 
	 for (var y = 0; y < 10; y++) {
		 
		 for (var x = 0; x < 10; x++) {
			 var tile_x = x * BLOCK_W;
			 var tile_y = y * BLOCK_H
			 	 if (M.floor){wall.draw(tile_x, tile_y)} 
			
		 }}
	 })
 }
 TUT44 = PART3 = function () {
	 $.c().id('game')
	 Cx = Context = new $HTML('game', 640, 480)
	 wall = new Spite('/me.png')
	 water = new Spite('/water.jpg')
	 $(window).load(function () {
		 for (var y = 0; y < 10; y++) {
			 for (var x = 0; x < 10; x++) {
				 var tile_x = x * BLOCK_W;
				 var tile_y = y * BLOCK_H
				 if (M.floor) {
					 M.fl(M.r() * 2)?
					 wall.draw(tile_x, tile_y):
							 water.draw(tile_x, tile_y)
				 }
			 }
		 }
	 })
 }


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

 TUUT4=function(){
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


		wall = new Spite2(wall,false)

		grass =   new Spite2(crate, false)



		  setInterval(function () {

			 for (var y = 0; y < 10; y++) {
				 for (var x = 0; x < 10; x++) {
					 var tile_x = x * BLOCK_W;
					 var tile_y = y * BLOCK_H
					 if (M.floor) {
						 M.fl(M.r() * 2)?
							 wall.draw(tile_x, tile_y):
							 grass.draw(tile_x, tile_y)
					 }
				 }
			 }
		  }, 125)
	 }






 }
