//http://www.olivierpons.fr/createjs/EaselJS-master/examples/APITest.html#5


//... OK LETS MAKE: twirling star mask:
////http://www.olivierpons.fr/createjs/EaselJS-master/examples/Masks.html
TWIRL=function(){
	var img, star, stage;
	var scale;
	var angle;
	
	function init() {
		if (window.top != window) {
			document.getElementById("header").style.display = "none";
		}
		document.getElementById("loader").className = "loader";
		//wait for the image to load
		img = new Image();
		img.onload = handleImageLoad;
		img.src = "assets/photo-hires.jpg";
		angle = 0;
	}
	$.c().id('testCanvas')
	
	function handleImageLoad() {
		document.getElementById("loader").className = "";
		//find canvas and load images, wait for last image to load
		var canvas = document.getElementById("testCanvas");
		// create a new stage and point it at our canvas:
		stage = new createjs.Stage(canvas);
		// masks can only be shapes.
		star = new createjs.Shape();
		// the mask's position will be relative to the parent of its target:
		star.x = img.width / 2;
		star.y = img.height / 2;
		// only the drawPolyStar call is needed for the mask to work:
		star.graphics.beginStroke("#FF0").setStrokeStyle(5)
				.drawPolyStar(0, 0, img.height / 2 - 15, 5, 0.6)
				.closePath();
		var bg = new createjs.Bitmap(img);
	
			// blur and desaturate the background image:
		
		
		bg.filters = [new createjs.BlurFilter(2, 2, 2),
			new createjs.ColorMatrixFilter(new createjs.ColorMatrix(0, 0, -100, 0))
			]
			
		bg.cache(0, 0, img.width, img.height);
		stage.addChild(bg);
		var bmp = new createjs.Bitmap(img);
		
		stage.addChild(bmp);
		
		bmp.mask = star;
		// note that the shape can be used in the display list as well if you'd like, or
		// we can reuse the Graphics instance in another shape if we'd like to transform it differently.
		stage.addChild(star);
		createjs.Ticker.addEventListener("tick", tick);
	}
	
	
	function tick(event) {
		star.rotation += 5;
		star.scaleX = star.scaleY = 1.5 + Math.sin(angle) * 3;
		stage.update(event);
		angle += 0.025;
	}
}