//wait for the image to load
// *** masks can only be shapes.
// *** the mask's position will be relative to the parent
// of its target:
// only the drawPolyStar call is needed for the mask to work:
// blur and desaturate the background image:
//find canvas and load images, wait for last image to load
// create a new st and point it at our canvas:
TWIRL = function () {
	doc = document
	if (window.top != window) {doc.getElementById("header").style.display = "none"}
	doc.getElementById("loader").className = "loader";
	$.c().id('testCanvas')
	var img, star, st, scale, angle
	 
	img = new Image();
	img.onload = handleImageLoad;
	img.src = "assets/photo-hires.jpg";
	angle = 0;

	function handleImageLoad() {
	
		doc.getElementById("loader").className = "";
		cv=canvas = doc.getElementById("testCanvas");
	 	st = $St(cv);
	
			
	
		
		
		$Bm(img).filters(
			$BlurFl(2, 2, 2),
			$ColMxFl($ColMx(0, 0, -100, 0))
		).cache(0, 0, img.width, img.height)
		
		
		star = st.h( img.width / 2, img.height / 2)
		star.graphics.s("#FF0").setStrokeStyle(5)
				.drawPolyStar(0, 0, img.height / 2 - 15, 5, 0.6)
				.closePath()
	

		st.Bm(img).mask = star 
		
		
		 
		$t(function tick(ev) {
			star.rotation += 5;
			star.scaleX = star.scaleY = 1.5 + M.sin(angle) * 3;
			st.update(ev)
			angle += 0.025;
		})
		
		
		
		
		
	}
	
 
}
// note that the shape can be used in the display list
// as well if you'd like,
// or
// we can reuse the Graphics instance in another shape
// if we'd like to transform it differently.
		