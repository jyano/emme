$load()


BSHH = function () {__S()
	
	lib.bush = function () {
		this.initialize(
		images.bush)
	}
	
	lib.bush.prototype =  new cjs.Bitmap();
	lib.bush.prototype.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	
	
	lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		this.instance = new lib.bush();
		this.timeline.addTween(
				cjs.Tween.get(this.instance).wait(1).to({
					scaleX: 1.79,
					scaleY: 0.62,
					rotation: -30,
					x: -74.6,
					y: 88.8
				}, 0).wait(2));
	}
	
	lib.bush_1.prototype =   new cjs.MovieClip();
	lib.bush_1.prototype.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	
	loader.f(eachFile).m([{src: "/bush.png", id: "bush"}]).c(function () {
		b = new lib.bush_1().XY(200, 100)
		st.A(b)
	})
	
	
	
	
	 

}

CARSON=function(){

	
	__S()
	
	
	
	 lib.carson = function () {
			this.initialize(img.carson);
		}
		
		lib.carson.prototype = p = new cjs.Bitmap();
		
		
		p.nominalBounds = new cjs.Rectangle(0, 0, 221, 290);
		 lib.Tween2 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.carson();
			this.instance.setTransform(-45.5, -43, 0.412, 0.297);
			this.addChild(this.instance);
		}
		lib.Tween2.prototype = p = new cjs.Container();
			p.nominalBounds = new cjs.Rectangle(-45.5, -43, 91, 86);
		 lib.Tween1 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.carson();
			this.instance.setTransform(-48, -203, 0.434, 1.4);
			this.addChild(this.instance);
		}; lib.Tween1.prototype = p = new cjs.Container();
		p.nominalBounds = new cjs.Rectangle(-48, -203, 96, 406);
		lib.CarsonMC = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {a: 0, b: 1, c: 4, d: 19});
			// Layer 1
			this.instance = new lib.carson();
			this.instance_1 = new lib.Tween1("synched", 0);
			this.instance_1.setTransform(98.1, 145);
			this.instance_1._off = true;
			this.instance_2 = new lib.Tween2("synched", 0);
			this.instance_2.setTransform(97.6, 251);
			this.timeline.addTween(cjs.Tween.get({}).to({
				state: [{
					t: this.instance,
					p: {rotation: 0, x: 0, y: 0}
				}]
			}).to({
				state: [{
					t: this.instance,
					p: {rotation: -174.8, x: 178.5, y: 297.5}
				}]
			}, 1).to({state: [{t: this.instance_1}]}, 3).to({state: [{t: this.instance_2}]}, 15).wait(1));
			this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off: false}, 0).to({
				_off: true,
				x: 97.6,
				y: 251
			}, 15).wait(1));
		}
		lib.CarsonMC.prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(0, 0, 221, 290);
		
	loader.f(eachFile).m([{src: "/carson.png", id: "carson"}]).c(function () {
		b = new lib.CarsonMC().XY(200, 100)
		st.A(b)
		
		b.gotoAndStop()
	})
}


function _pre(){
eachFile= function eachFile(e) {
	if (e.item.type == "image") {
		images[e.item.id] = e.result
	}
}
 

}
//////////////
BUSH = BUSHSPRITESHEET = function () {
	(function (window) {
		bush_instance_1 = function () {
			this.initialize();
		}
		bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
			images: ["Untitled-1.png"],
			frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
		});
		var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
		bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
		bush_instance_1_p.initialize = function () {
			this.Sprite_initialize(bush_instance_1._SpriteSheet);
			this.paused = false;
		}
		b = window.bush_instance_1 = bush_instance_1;
	}(window))
	//St()//st.A(b);st.u()
}
BSH = BUSHMC = function () {
	lib = {},
			img = {}
	ss = {}
	// shortcut to reference prototypes
// library properties:
	lib.properties = {
		width: 550,
		height: 400,
		fps: 24,
		color: "#FF66CC",
		manifest: [
			{src: "images/bush.png", id: "bush"}
		]
	};
// symbols:
	(lib.bush = function () {
		this.initialize(img.bush);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	(lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		// Layer 1
		this.instance = new lib.bush();
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
			scaleX: 1.79,
			scaleY: 0.62,
			rotation: -30,
			x: -74.6,
			y: 88.8
		}, 0).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
	(lib.Untitled1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
		// Layer 1
		this.instance = new lib.bush_1();
		this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
	$.C('#D4D4D4')
	$.cv(550, 400).C('#FF66CC').A()
	canvas = document.getElementById("canvas");
	images = images || {};
	loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest)
	function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	}
	
	function handleComplete(evt) {
		exportRoot = new lib.Untitled1();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
}
BUSH = BUSHSPRITESHEET = function () {
	(function (window) {
		bush_instance_1 = function () {
			this.initialize();
		}
		bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
			images: ["Untitled-1.png"],
			frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
		});
		var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
		bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
		bush_instance_1_p.initialize = function () {
			this.Sprite_initialize(bush_instance_1._SpriteSheet);
			this.paused = false;
		}
		b = window.bush_instance_1 = bush_instance_1;
	}(window))
	//St()//st.A(b);st.u()
}
BSH = BUSHMC = function () {
	lib = {},
			img = {}
	ss = {}
	// shortcut to reference prototypes
// library properties:
	lib.properties = {
		width: 550,
		height: 400,
		fps: 24,
		color: "#FF66CC",
		manifest: [
			{src: "images/bush.png", id: "bush"}
		]
	};
// symbols:
	(lib.bush = function () {
		this.initialize(img.bush);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	(lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		// Layer 1
		this.instance = new lib.bush();
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
			scaleX: 1.79,
			scaleY: 0.62,
			rotation: -30,
			x: -74.6,
			y: 88.8
		}, 0).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
	(lib.Untitled1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
		// Layer 1
		this.instance = new lib.bush_1();
		this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
	$.C('#D4D4D4')
	$.cv(550, 400).C('#FF66CC').A()
	canvas = document.getElementById("canvas");
	images = images || {};
	loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest)
	function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	}
	
	function handleComplete(evt) {
		exportRoot = new lib.Untitled1();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
}
BSH = function () {
	$l("BSH")
	cv = $.cv(550, 500).id('canvas');
	cv.A()
	ss = {}
	canvas = document.getElementById("canvas");
	loader = new createjs.LoadQueue(false);
	images = {}
	loader.addEventListener("fileload", function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	})
	loader.addEventListener("complete", function handleComplete(evt) {
		exportRoot = new lib.Untitled1();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	});
	lib = {}
	lib.bush = function () {
		this.initialize(images.bush)
	}
	lib.bush.prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		this.instance = new lib.bush();
		this.timeline.addTween(
				cjs.Tween.get(this.instance).wait(1).to({
					scaleX: 1.79,
					scaleY: 0.62,
					rotation: -30,
					x: -74.6,
					y: 88.8
				}, 0).wait(2));
	}
	lib.bush_1.prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	lib.Untitled1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
		// Layer 1
		this.instance = new lib.bush_1();
		this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
	}
	lib.Untitled1.prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
	lib.properties = {
		width: 550, height: 400, fps: 24,
		color: "#FF66CC", manifest: [{src: "/bush.png", id: "bush"}]
	};
	loader.loadManifest(lib.properties.manifest);
}
BSH = function () {
	$l("BSH")
	cv = $.cv(550, 500).id('canvas');
	cv.A()
	ss = {}
	canvas = document.getElementById("canvas");
	loader = new createjs.LoadQueue(false);
	images = {}
	loader.addEventListener("fileload", function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	})
	loader.addEventListener("complete", function handleComplete(evt) {
		exportRoot = new lib.Untitled1();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	});
	lib = {}
	lib.bush = function () {
		this.initialize(images.bush)
	}
	lib.bush.prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		this.instance = new lib.bush();
		this.timeline.addTween(
				cjs.Tween.get(this.instance).wait(1).to({
					scaleX: 1.79,
					scaleY: 0.62,
					rotation: -30,
					x: -74.6,
					y: 88.8
				}, 0).wait(2));
	}
	lib.bush_1.prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	lib.Untitled1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
		// Layer 1
		this.instance = new lib.bush_1();
		this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
	}
	lib.Untitled1.prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
	lib.properties = {
		width: 550, height: 400, fps: 24,
		color: "#FF66CC", manifest: [{src: "/bush.png", id: "bush"}]
	};
	loader.loadManifest(lib.properties.manifest);
}
////
eachFile = function eachFile(e) {
	if (e.item.type == "image") {
		images[e.item.id] = e.result
	}
}
BSHH = function () {
	__S()
	lib.bush = function () {
		this.initialize(
				images.bush)
	}
	lib.bush.prototype = new cjs.Bitmap();
	lib.bush.prototype.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		this.instance = new lib.bush();
		this.timeline.addTween(
				cjs.Tween.get(this.instance).wait(1).to({
					scaleX: 1.79,
					scaleY: 0.62,
					rotation: -30,
					x: -74.6,
					y: 88.8
				}, 0).wait(2));
	}
	lib.bush_1.prototype = new cjs.MovieClip();
	lib.bush_1.prototype.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	loader.f(eachFile).m([{src: "/bush.png", id: "bush"}]).c(function () {
		b = new lib.bush_1().XY(200, 100)
		st.A(b)
	})
}
CARSON = function () {
	__S()
	lib.carson = function () {
		this.initialize(img.carson);
	}
	lib.carson.prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 221, 290);
	lib.Tween2 = function () {
		this.initialize();
		// Layer 1
		this.instance = new lib.carson();
		this.instance.setTransform(-45.5, -43, 0.412, 0.297);
		this.addChild(this.instance);
	}
	lib.Tween2.prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-45.5, -43, 91, 86);
	lib.Tween1 = function () {
		this.initialize();
		// Layer 1
		this.instance = new lib.carson();
		this.instance.setTransform(-48, -203, 0.434, 1.4);
		this.addChild(this.instance);
	};
	lib.Tween1.prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-48, -203, 96, 406);
	lib.CarsonMC = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1, c: 4, d: 19});
		// Layer 1
		this.instance = new lib.carson();
		this.instance_1 = new lib.Tween1("synched", 0);
		this.instance_1.setTransform(98.1, 145);
		this.instance_1._off = true;
		this.instance_2 = new lib.Tween2("synched", 0);
		this.instance_2.setTransform(97.6, 251);
		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance,
				p: {rotation: 0, x: 0, y: 0}
			}]
		}).to({
			state: [{
				t: this.instance,
				p: {rotation: -174.8, x: 178.5, y: 297.5}
			}]
		}, 1).to({state: [{t: this.instance_1}]}, 3).to({state: [{t: this.instance_2}]}, 15).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off: false}, 0).to({
			_off: true,
			x: 97.6,
			y: 251
		}, 15).wait(1));
	}
	lib.CarsonMC.prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 221, 290);
	loader.f(eachFile).m([{src: "/carson.png", id: "carson"}]).c(function () {
		b = new lib.CarsonMC().XY(200, 100)
		st.A(b)
		b.gotoAndStop()
	})
}
function bush() {
	BUSH = BUSHSPRITESHEET = function () {
		(function (window) {
			bush_instance_1 = function () {
				this.initialize();
			}
			bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
				images: ["Untitled-1.png"],
				frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
			});
			var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
			bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
			bush_instance_1_p.initialize = function () {
				this.Sprite_initialize(bush_instance_1._SpriteSheet);
				this.paused = false;
			}
			b = window.bush_instance_1 = bush_instance_1;
		}(window))
		//St()//st.A(b);st.u()
	}
	BUSH = BUSHSPRITESHEET = function () {
		(function (window) {
			bush_instance_1 = function () {
				this.initialize();
			}
			bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
				images: ["Untitled-1.png"],
				frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
			});
			var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
			bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
			bush_instance_1_p.initialize = function () {
				this.Sprite_initialize(bush_instance_1._SpriteSheet);
				this.paused = false;
			}
			b = window.bush_instance_1 = bush_instance_1;
		}(window))
		//St()//st.A(b);st.u()
	}
	BSH = BUSHMC = function () {
		lib = {},
				img = {}
		ss = {}
		// shortcut to reference prototypes
// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FF66CC",
			manifest: [
				{src: "images/bush.png", id: "bush"}
			]
		};
// symbols:
		(lib.bush = function () {
			this.initialize(img.bush);
		}).prototype = p = new cjs.Bitmap();
		p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
		(lib.bush_1 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {a: 0, b: 1});
			// Layer 1
			this.instance = new lib.bush();
			this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
				scaleX: 1.79,
				scaleY: 0.62,
				rotation: -30,
				x: -74.6,
				y: 88.8
			}, 0).wait(2));
		}).prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
		(lib.Untitled1 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
			// Layer 1
			this.instance = new lib.bush_1();
			this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
			this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
		}).prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
		$.C('#D4D4D4')
		$.cv(550, 400).C('#FF66CC').A()
		canvas = document.getElementById("canvas");
		images = images || {};
		loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(lib.properties.manifest)
		function handleFileLoad(evt) {
			if (evt.item.type == "image") {
				images[evt.item.id] = evt.result;
			}
		}
		
		function handleComplete(evt) {
			exportRoot = new lib.Untitled1();
			stage = new createjs.Stage(canvas);
			stage.addChild(exportRoot);
			stage.update();
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
	}
	BUSH = BUSHSPRITESHEET = function () {
		(function (window) {
			bush_instance_1 = function () {
				this.initialize();
			}
			bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
				images: ["Untitled-1.png"],
				frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
			});
			var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
			bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
			bush_instance_1_p.initialize = function () {
				this.Sprite_initialize(bush_instance_1._SpriteSheet);
				this.paused = false;
			}
			b = window.bush_instance_1 = bush_instance_1;
		}(window))
		//St()//st.A(b);st.u()
	}
	BSH = BUSHMC = function () {
		lib = {},
				img = {}
		ss = {}
		// shortcut to reference prototypes
// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FF66CC",
			manifest: [
				{src: "images/bush.png", id: "bush"}
			]
		};
// symbols:
		(lib.bush = function () {
			this.initialize(img.bush);
		}).prototype = p = new cjs.Bitmap();
		p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
		(lib.bush_1 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {a: 0, b: 1});
			// Layer 1
			this.instance = new lib.bush();
			this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
				scaleX: 1.79,
				scaleY: 0.62,
				rotation: -30,
				x: -74.6,
				y: 88.8
			}, 0).wait(2));
		}).prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
		(lib.Untitled1 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
			// Layer 1
			this.instance = new lib.bush_1();
			this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
			this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
		}).prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
		$.C('#D4D4D4')
		$.cv(550, 400).C('#FF66CC').A()
		canvas = document.getElementById("canvas");
		images = images || {};
		loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(lib.properties.manifest)
		function handleFileLoad(evt) {
			if (evt.item.type == "image") {
				images[evt.item.id] = evt.result;
			}
		}
		
		function handleComplete(evt) {
			exportRoot = new lib.Untitled1();
			stage = new createjs.Stage(canvas);
			stage.addChild(exportRoot);
			stage.update();
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
	}
	BSH = BUSHMC = function () {
		lib = {},
				img = {}
		ss = {}
		// shortcut to reference prototypes
// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FF66CC",
			manifest: [
				{src: "images/bush.png", id: "bush"}
			]
		};
// symbols:
		(lib.bush = function () {
			this.initialize(img.bush);
		}).prototype = p = new cjs.Bitmap();
		p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
		(lib.bush_1 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {a: 0, b: 1});
			// Layer 1
			this.instance = new lib.bush();
			this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
				scaleX: 1.79,
				scaleY: 0.62,
				rotation: -30,
				x: -74.6,
				y: 88.8
			}, 0).wait(2));
		}).prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
		(lib.Untitled1 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
			// Layer 1
			this.instance = new lib.bush_1();
			this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
			this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
		}).prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
		$.C('#D4D4D4')
		$.cv(550, 400).C('#FF66CC').A()
		canvas = document.getElementById("canvas");
		images = images || {};
		loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(lib.properties.manifest)
		function handleFileLoad(evt) {
			if (evt.item.type == "image") {
				images[evt.item.id] = evt.result;
			}
		}
		
		function handleComplete(evt) {
			exportRoot = new lib.Untitled1();
			stage = new createjs.Stage(canvas);
			stage.addChild(exportRoot);
			stage.update();
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
	}
	BUSH = BUSHSPRITESHEET = function () {
		(function (window) {
			bush_instance_1 = function () {
				this.initialize();
			}
			bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
				images: ["Untitled-1.png"],
				frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
			});
			var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
			bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
			bush_instance_1_p.initialize = function () {
				this.Sprite_initialize(bush_instance_1._SpriteSheet);
				this.paused = false;
			}
			b = window.bush_instance_1 = bush_instance_1;
		}(window))
		//St()//st.A(b);st.u()
	}
	BSH = BUSHMC = function () {
		lib = {},
				img = {}
		ss = {}
		// shortcut to reference prototypes
// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FF66CC",
			manifest: [
				{src: "images/bush.png", id: "bush"}
			]
		};
// symbols:
		(lib.bush = function () {
			this.initialize(img.bush);
		}).prototype = p = new cjs.Bitmap();
		p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
		(lib.bush_1 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {a: 0, b: 1});
			// Layer 1
			this.instance = new lib.bush();
			this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
				scaleX: 1.79,
				scaleY: 0.62,
				rotation: -30,
				x: -74.6,
				y: 88.8
			}, 0).wait(2));
		}).prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
		(lib.Untitled1 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
			// Layer 1
			this.instance = new lib.bush_1();
			this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
			this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
		}).prototype = p = new cjs.MovieClip();
		p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
		$.C('#D4D4D4')
		$.cv(550, 400).C('#FF66CC').A()
		canvas = document.getElementById("canvas");
		images = images || {};
		loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(lib.properties.manifest)
		function handleFileLoad(evt) {
			if (evt.item.type == "image") {
				images[evt.item.id] = evt.result;
			}
		}
		
		function handleComplete(evt) {
			exportRoot = new lib.Untitled1();
			stage = new createjs.Stage(canvas);
			stage.addChild(exportRoot);
			stage.update();
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
	}
}