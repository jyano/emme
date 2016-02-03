TOOLKITBRITNEY = function () {
	
	//ok an export using toolkit!
	z()
	var stage, exportRoot, lib, images
	flashFunction = function (lib, img, cjs) {
		var p; // shortcut to reference prototypes
		// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FFFFFF",
			manifest: [{src: "/britney.jpeg", id: "britney"}, {src: "/gaga.jpeg", id: "gaga"}]
		};
		// symbols:
		lib.britney = function () {
			this.initialize(img.britney)
		}
		lib.britney.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194)
		lib.gaga = function () {
			this.initialize(img.gaga)
		}
		lib.gaga.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208);
		lib.gaga_1 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.gaga()
			this.addChild(this.instance)
		}
		lib.gaga_1.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)
		lib.brit = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.britney()
			this.A(this.instance)
		}
		lib.brit.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194);
		lib.Tween2 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.brit()
			this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1()
			this.instance_1.setTransform(-148.9, 33, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.A(
					this.instance_1,
					this.instance
			)
		}
		lib.Tween2.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(-263.5, -206.5, 527, 413);
		lib.Tween1 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.brit().transform(-57.6, 52.6, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1();
			this.instance_1.setTransform(72.5, 0.1, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.addChild(this.instance_1, this.instance)
		}
		lib.Tween1.prototype = p = new cjs.Container();
		p.nominalBounds = new cjs.Rectangle(-187.1, -173.5, 374.2, 347.1)
		// stage content:
		lib.Untitled3 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {})
			// Layer 1
			this.instance = new lib.gaga_1()
			this.instance.setTransform(275, 200.5, 1, 1, 0, 0, 0, 121, 104)
			this.instance_1 = new lib.Tween1("synched", 0)
			this.instance_1.setTransform(202.6, 200.5)
			this.instance_1._off = true
			this.instance_2 = new lib.Tween2("synched", 0)
			this.instance_2.setTransform(301.9, 206.5)
			this.timeline.addTween(
					cjs.Tween.get({})
							.to({state: [{t: this.instance}]})
							.to({state: [{t: this.instance_1}]}, 19)
							.to({state: [{t: this.instance_2}]}, 10)
							.wait(1))
			this.timeline.addTween(cjs.Tween.get(this.instance).to({
				_off: true,
				regX: 0,
				regY: 0,
				x: 202.6,
				mode: "synched",
				startPosition: 0
			}, 19).wait(11));
			this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: false}, 19).to({
				_off: true,
				x: 301.9,
				y: 206.5
			}, 10).wait(1))
		}
		lib.Untitled3.prototype = p = new cjs.MovieClip()
		p.nominalBounds = new cjs.Rectangle(429, 296.5, 242, 208)
	}
	flashFunction(lib = lib || {}, images = images || {}, createjs = createjs || {})
	$.c('y', 550, 400).id('canvas').A()
	canvas = document.getElementById("canvas")
	images = images || {}
	loader = new createjs.LoadQueue(false)
	loader.addEventListener("fileload",
			handleFileLoad = function (evt) {
				if (evt.item.type == "image") {
					images[evt.item.id] = evt.result
				}
			})
	loader.addEventListener("complete", function () {
		exportRoot = new lib.Untitled3();
		stage = new createjs.Stage(canvas)
		stage.addChild(exportRoot)
		stage.update()
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage)
	})
	loader.loadManifest(lib.properties.manifest)
}//f
TKBRIT = function () {

//ok an export using toolkit!
	z()
	var stage, exportRoot, lib, images
	flashFunction = function (lib, img, cjs) {
		var p; // shortcut to reference prototypes
// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FFFFFF",
			manifest: [{src: "/britney.jpeg", id: "britney"}, {src: "/gaga.jpeg", id: "gaga"}]
		};
// symbols:
		lib.britney = function () {
			this.initialize(img.britney)
		}
		lib.britney.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194)
		lib.gaga = function () {
			this.initialize(img.gaga)
		}
		lib.gaga.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208);
		lib.gaga_1 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.gaga()
			this.addChild(this.instance)
		}
		lib.gaga_1.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)
		lib.brit = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.britney()
			this.A(this.instance)
		}
		lib.brit.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194);
		lib.Tween2 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.brit()
			this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1()
			this.instance_1.setTransform(-148.9, 33, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.A(
					this.instance_1,
					this.instance
			)
		}
		lib.Tween2.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(-263.5, -206.5, 527, 413);
		lib.Tween1 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.brit().transform(-57.6, 52.6, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1();
			this.instance_1.setTransform(72.5, 0.1, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.addChild(this.instance_1, this.instance)
		}
		lib.Tween1.prototype = p = new cjs.Container();
		p.nominalBounds = new cjs.Rectangle(-187.1, -173.5, 374.2, 347.1)
// stage content:
		lib.Untitled3 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {})
			// Layer 1
			this.instance = new lib.gaga_1()
			this.instance.setTransform(275, 200.5, 1, 1, 0, 0, 0, 121, 104)
			this.instance_1 = new lib.Tween1("synched", 0)
			this.instance_1.setTransform(202.6, 200.5)
			this.instance_1._off = true
			this.instance_2 = new lib.Tween2("synched", 0)
			this.instance_2.setTransform(301.9, 206.5)
			this.timeline.addTween(
					cjs.Tween.get({})
							.to({state: [{t: this.instance}]})
							.to({state: [{t: this.instance_1}]}, 19)
							.to({state: [{t: this.instance_2}]}, 10)
							.wait(1))
			this.timeline.addTween(cjs.Tween.get(this.instance).to({
				_off: true,
				regX: 0,
				regY: 0,
				x: 202.6,
				mode: "synched",
				startPosition: 0
			}, 19).wait(11));
			this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: false}, 19).to({
				_off: true,
				x: 301.9,
				y: 206.5
			}, 10).wait(1))
		}
		lib.Untitled3.prototype = p = new cjs.MovieClip()
		p.nominalBounds = new cjs.Rectangle(429, 296.5, 242, 208)
	}
	flashFunction(lib = lib || {}, images = images || {}, createjs = createjs || {})
	$.c('y', 550, 400).id('canvas').A()
	canvas = document.getElementById("canvas")
	images = images || {}
	loader = new createjs.LoadQueue(false)
	loader.addEventListener("fileload",
			handleFileLoad = function (evt) {
				if (evt.item.type == "image") {
					images[evt.item.id] = evt.result
				}
			})
	loader.addEventListener("complete", function () {
		exportRoot = new lib.Untitled3();
		stage = new createjs.Stage(canvas)
		stage.addChild(exportRoot)
		T.setFPS(lib.properties.fps);
		T.addEventListener("tick", stage)
	})
	loader.loadManifest(lib.properties.manifest)
}//
function brit() {
	TKBRIT = function () {

//ok an export using toolkit!
		z()
		var stage, exportRoot, lib, images
		flashFunction = function (lib, img, cjs) {
			var p; // shortcut to reference prototypes
// library properties:
			lib.properties = {
				width: 550,
				height: 400,
				fps: 24,
				color: "#FFFFFF",
				manifest: [{src: "/britney.jpeg", id: "britney"}, {src: "/gaga.jpeg", id: "gaga"}]
			};
// symbols:
			lib.britney = function () {
				this.initialize(img.britney)
			}
			lib.britney.prototype = p = new cjs.Bitmap()
			p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194)
			lib.gaga = function () {
				this.initialize(img.gaga)
			}
			lib.gaga.prototype = p = new cjs.Bitmap()
			p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208);
			lib.gaga_1 = function () {
				this.initialize()
				// Layer 1
				this.instance = new lib.gaga()
				this.addChild(this.instance)
			}
			lib.gaga_1.prototype = p = new cjs.Container()
			p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)
			lib.brit = function () {
				this.initialize()
				// Layer 1
				this.instance = new lib.britney()
				this.A(this.instance)
			}
			lib.brit.prototype = p = new cjs.Container()
			p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194);
			lib.Tween2 = function () {
				this.initialize()
				// Layer 1
				this.instance = new lib.brit()
				this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0, 129.5, 97);
				this.instance_1 = new lib.gaga_1()
				this.instance_1.setTransform(-148.9, 33, 1.537, 0.24, 60, 0, 0, 121, 104.1);
				this.A(
						this.instance_1,
						this.instance
				)
			}
			lib.Tween2.prototype = p = new cjs.Container()
			p.nominalBounds = new cjs.Rectangle(-263.5, -206.5, 527, 413);
			lib.Tween1 = function () {
				this.initialize();
				// Layer 1
				this.instance = new lib.brit().transform(-57.6, 52.6, 1, 1, 0, 0, 0, 129.5, 97);
				this.instance_1 = new lib.gaga_1();
				this.instance_1.setTransform(72.5, 0.1, 1.537, 0.24, 60, 0, 0, 121, 104.1);
				this.addChild(this.instance_1, this.instance)
			}
			lib.Tween1.prototype = p = new cjs.Container();
			p.nominalBounds = new cjs.Rectangle(-187.1, -173.5, 374.2, 347.1)
// stage content:
			lib.Untitled3 = function (mode, startPosition, loop) {
				this.initialize(mode, startPosition, loop, {})
				// Layer 1
				this.instance = new lib.gaga_1()
				this.instance.setTransform(275, 200.5, 1, 1, 0, 0, 0, 121, 104)
				this.instance_1 = new lib.Tween1("synched", 0)
				this.instance_1.setTransform(202.6, 200.5)
				this.instance_1._off = true
				this.instance_2 = new lib.Tween2("synched", 0)
				this.instance_2.setTransform(301.9, 206.5)
				this.timeline.addTween(
						cjs.Tween.get({})
								.to({state: [{t: this.instance}]})
								.to({state: [{t: this.instance_1}]}, 19)
								.to({state: [{t: this.instance_2}]}, 10)
								.wait(1))
				this.timeline.addTween(cjs.Tween.get(this.instance).to({
					_off: true,
					regX: 0,
					regY: 0,
					x: 202.6,
					mode: "synched",
					startPosition: 0
				}, 19).wait(11));
				this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: false}, 19).to({
					_off: true,
					x: 301.9,
					y: 206.5
				}, 10).wait(1))
			}
			lib.Untitled3.prototype = p = new cjs.MovieClip()
			p.nominalBounds = new cjs.Rectangle(429, 296.5, 242, 208)
		}
		flashFunction(lib = lib || {}, images = images || {}, createjs = createjs || {})
		$.c('y', 550, 400).id('canvas').A()
		canvas = document.getElementById("canvas")
		images = images || {}
		loader = new createjs.LoadQueue(false)
		loader.addEventListener("fileload",
				handleFileLoad = function (evt) {
					if (evt.item.type == "image") {
						images[evt.item.id] = evt.result
					}
				})
		loader.addEventListener("complete", function () {
			exportRoot = new lib.Untitled3();
			stage = new createjs.Stage(canvas)
			stage.addChild(exportRoot)
			T.setFPS(lib.properties.fps);
			T.addEventListener("tick", stage)
		})
		loader.loadManifest(lib.properties.manifest)
	}//
	TOOLKITBRITNEY = function () {
		
		//ok an export using toolkit!
		z()
		var stage, exportRoot, lib, images
		flashFunction = function (lib, img, cjs) {
			var p; // shortcut to reference prototypes
			// library properties:
			lib.properties = {
				width: 550,
				height: 400,
				fps: 24,
				color: "#FFFFFF",
				manifest: [{src: "/britney.jpeg", id: "britney"}, {src: "/gaga.jpeg", id: "gaga"}]
			};
			// symbols:
			lib.britney = function () {
				this.initialize(img.britney)
			}
			lib.britney.prototype = p = new cjs.Bitmap()
			p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194)
			lib.gaga = function () {
				this.initialize(img.gaga)
			}
			lib.gaga.prototype = p = new cjs.Bitmap()
			p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208);
			lib.gaga_1 = function () {
				this.initialize()
				// Layer 1
				this.instance = new lib.gaga()
				this.addChild(this.instance)
			}
			lib.gaga_1.prototype = p = new cjs.Container()
			p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)
			lib.brit = function () {
				this.initialize()
				// Layer 1
				this.instance = new lib.britney()
				this.A(this.instance)
			}
			lib.brit.prototype = p = new cjs.Container()
			p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194);
			lib.Tween2 = function () {
				this.initialize()
				// Layer 1
				this.instance = new lib.brit()
				this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0, 129.5, 97);
				this.instance_1 = new lib.gaga_1()
				this.instance_1.setTransform(-148.9, 33, 1.537, 0.24, 60, 0, 0, 121, 104.1);
				this.A(
						this.instance_1,
						this.instance
				)
			}
			lib.Tween2.prototype = p = new cjs.Container()
			p.nominalBounds = new cjs.Rectangle(-263.5, -206.5, 527, 413);
			lib.Tween1 = function () {
				this.initialize();
				// Layer 1
				this.instance = new lib.brit().transform(-57.6, 52.6, 1, 1, 0, 0, 0, 129.5, 97);
				this.instance_1 = new lib.gaga_1();
				this.instance_1.setTransform(72.5, 0.1, 1.537, 0.24, 60, 0, 0, 121, 104.1);
				this.addChild(this.instance_1, this.instance)
			}
			lib.Tween1.prototype = p = new cjs.Container();
			p.nominalBounds = new cjs.Rectangle(-187.1, -173.5, 374.2, 347.1)
			// stage content:
			lib.Untitled3 = function (mode, startPosition, loop) {
				this.initialize(mode, startPosition, loop, {})
				// Layer 1
				this.instance = new lib.gaga_1()
				this.instance.setTransform(275, 200.5, 1, 1, 0, 0, 0, 121, 104)
				this.instance_1 = new lib.Tween1("synched", 0)
				this.instance_1.setTransform(202.6, 200.5)
				this.instance_1._off = true
				this.instance_2 = new lib.Tween2("synched", 0)
				this.instance_2.setTransform(301.9, 206.5)
				this.timeline.addTween(
						cjs.Tween.get({})
								.to({state: [{t: this.instance}]})
								.to({state: [{t: this.instance_1}]}, 19)
								.to({state: [{t: this.instance_2}]}, 10)
								.wait(1))
				this.timeline.addTween(cjs.Tween.get(this.instance).to({
					_off: true,
					regX: 0,
					regY: 0,
					x: 202.6,
					mode: "synched",
					startPosition: 0
				}, 19).wait(11));
				this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: false}, 19).to({
					_off: true,
					x: 301.9,
					y: 206.5
				}, 10).wait(1))
			}
			lib.Untitled3.prototype = p = new cjs.MovieClip()
			p.nominalBounds = new cjs.Rectangle(429, 296.5, 242, 208)
		}
		flashFunction(lib = lib || {}, images = images || {}, createjs = createjs || {})
		$.c('y', 550, 400).id('canvas').A()
		canvas = document.getElementById("canvas")
		images = images || {}
		loader = new createjs.LoadQueue(false)
		loader.addEventListener("fileload",
				handleFileLoad = function (evt) {
					if (evt.item.type == "image") {
						images[evt.item.id] = evt.result
					}
				})
		loader.addEventListener("complete", function () {
			exportRoot = new lib.Untitled3();
			stage = new createjs.Stage(canvas)
			stage.addChild(exportRoot)
			stage.update()
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage)
		})
		loader.loadManifest(lib.properties.manifest)
	}//f
}