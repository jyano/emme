DOMEL=function(){
	//http://www.olivierpons.fr/createjs/EaselJS-master/examples/HtmlElements.html
			
		/*
		 <!DOCTYPE html>
		 <html>
		 <head>
		 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		 <title>EaselJS Example: DOMElement Example</title>
		
		 <link href="assets/demoStyles.css" rel="stylesheet" type="text/css" />
		
		 <!-- Note: All core EaselJS classes are listed here: -->
		 <script type="text/javascript" src="../src/createjs/events/Event.js"></script>
		 <script type="text/javascript" src="../src/createjs/events/EventDispatcher.js"></script>
		 <script type="text/javascript" src="../src/createjs/utils/IndexOf.js"></script>
		 <script type="text/javascript" src="../src/easeljs/utils/UID.js"></script>
		 <script type="text/javascript" src="../src/easeljs/utils/Ticker.js"></script>
		 <script type="text/javascript" src="../src/easeljs/geom/Matrix2D.js"></script>
		 <script type="text/javascript" src="../src/easeljs/geom/Point.js"></script>
		 <script type="text/javascript" src="../src/easeljs/geom/Rectangle.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/Shadow.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/SpriteSheet.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/Graphics.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/DisplayObject.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/Container.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/Stage.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/Bitmap.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/Sprite.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/BitmapAnimation.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/BitmapText.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/Shape.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/Text.js"></script>
		 <script type="text/javascript" src="../src/easeljs/display/DOMElement.js"></script>
		 <script type="text/javascript" src="../src/easeljs/events/MouseEvent.js"></script>
		 <script type="text/javascript" src="../src/easeljs/filters/Filter.js"></script>
		 <script type="text/javascript" src="../src/easeljs/ui/ButtonHelper.js"></script>
		 <script type="text/javascript" src="../src/easeljs/ui/Touch.js"></script>
		 <script type="text/javascript" src="../src/easeljs/utils/SpriteSheetUtils.js"></script>
		 <script type="text/javascript" src="../src/easeljs/utils/SpriteSheetBuilder.js"></script>
		
		 <!-- We also provide hosted minified versions of all CreateJS libraries.
		 http://code.createjs.com -->
		
		 <script>
		 var stage, container;
		
		 function init() {
		 // create a new stage and point it at our canvas:
		 canvas = document.getElementById("testCanvas");
		 stage = new createjs.Stage(canvas);
		
		 container = new createjs.Container();
		 stage.addChild(container);
		
		 var frame = new createjs.Shape();
		 frame.graphics.beginFill("#FF0").drawRect(0,0,340,280);
		 frame.regX = 170;
		 frame.regY = 140;
		
		 var content = new createjs.DOMElement("foo");
		 content.regX = 165;
		 content.regY = 135;
		 //content.visible = false;
		
		
		 container.addChild(frame, content);
		 container.x = 300; container.y = 200;
		 container.alpha = 0.8;
		 container.rotation = 25;
		 container.scaleX = 1.5;
		 //container.visible = false;
		
		 createjs.Ticker.addEventListener("tick", tick);
		 }
		
		 function tick(event) {
		 container.rotation++;
		 container.alpha = 0.5*(1+Math.sin(container.rotation*0.01));
		 stage.update(event);
		 }
		
		 </script>
		 </head>
		
		 <body onload="init();">
		
		 <header id="header" class="EaselJS">
		 <h1><span class="text-product">Easel<strong>JS</strong></span> HTML Elements</h1>
		 <p>Simple example of using <strong>DOMElement</strong> to position HTML content within the EaselJS display list. Note how the blue <strong>DOMElement</strong> can display outside the canvas boundaries, whereas the yellow <strong>Shape</strong> cannot.</p>
		 </header>
		
		 <div class="canvasHolder">
		 <div id="foo" style="z-index: 1; position: absolute; background-color: #00F; color:#FFF; width:320px; height:260px; padding: 5px; visibility: hidden;">
		 <b>Hello! I'm an HTML div.</b><br/><br/>
		 I am not rendered to the canvas, but I can be included in the display list for positioning and transformations.<br/><br/>
		 This means I can contain any HTML content (rich text, forms, video, etc), but I'm not a full part of the EaselJS display list.<br/><br/>
		 <button id="btn" width="100" onclick="alert('hello')">This is a button!</button>
		 <a href="http://easeljs.com/">This is a link</a>
		 </div>
		 <canvas id="testCanvas" width="960" height="300"></canvas>
		 </div>
		
		
		 </body>
		 </html>
		
		 */
}