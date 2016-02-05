// !!! https://www.youtube.com/watch?v=T4iPnh-qago interacrtive directory tut
Bb = bb = Backbone
Bb.U = Bb.Utility
Bb.S = Bb.Sync
Bb.M = Bb.Model;
md = Bb.M.prototype;
Bb.M._x = Bb.M.x = Bb.M.e = Bb.M.extend
Bb.C = Bb.Collection
cl = Bb.Collection.prototype
Bb.C._x = Bb.C.x = Bb.C.extend
Bb.V = Bb.View
vw = Bb.V.prototype
Bb.V._x = Bb.V.x = Bb.V.e = Bb.V.extend;
Bb.E = Bb.Ev = Bb.Events;
Eve = function () {
	var e = _({}).extend(Bb.Events)
	e.o = e.bind
	e.e = e.trigger
	return e
}
Bb.E.x = Bb.E.extend
Bb.E.b = Bb.E.bind;
Bb.E.tr = Bb.E.trg = Bb.E.trigger
Bb.x = Bb.e = function (ob) {
	ob = ob || {}
	var Ev = Bb.E.extend(ob)
	return function (a, b, c, d) {
		return new Ev(a, b, c, d)
	}
}
Bb.sEv = function (md) {
	md.b = md.bind
	md.O = md.o$ = md.oAl = function (fn) {
		return this.on('all', fn)
	}//passes event name as 1st ag
	md.oEr =md.oZ = md.oE =  function (a, b, c) {
		return this.on('error', a, b, c)
	} //"error" (model_or_collection, resp, options)
// — when model's or collection's request to remote server has failed.
	md.oA = function (fn) {
		return this.on('add', fn || function (m) {
			m.at = m.attributes
			$l('E$???????????? (in md.oA')//E$(m) // a.A(m)
		})
	}//when a md is "added" to cl (model, collection, options)
	 md.oCh = md.oC =function (n, fn) {
		var g = G(arguments), o
		o = g.F ? {fn: g.f} : {at: g.f, fn: g.s}
		// "change" (model, options)    "change:[attribute]" (model, value, options)
		return g.at ?
				this.on('change:' + o.at, o.fn) :
				this.on('change', o.fn)
	}//=md.$
	md.oRm = function (a, b, c) {
		return this.on('remove', a, b, c)
	}// "remove" (md, cl, ops)  — when md rmd from a collection.//=md.oH=md.o_
	 md.oRt =md.oR = function (n, f) {
		var o = this
		//"route:[name]" (params)
		// — Fired by the router when a specific route is matched.
		// "route" (route, params)
		// — Fired by the router when any route has been matched.
		//"route" (router, route, params)
		// — Fired by history when any route has been matched.
		if (U(f)) {
			return o.on('route', n)
		}
		return o.on('route:' + n, f)
	}
	md.oIv =md.oI =  function (a, b, c) {
		//"invalid" (model, error, options)
		// — when a model's validation fails on the client.
		return this.on('invalid', a, b, c)
	}
	md.oSo = function (a, b, c) {
		// "sort" (collection, options) — when the collection has been re-sorted.
		return this.on('sort', a, b, c)
	}
	md.oDs = md.oD = function (a, b, c) {
		// "destroy" (model, collection, options)
		// — when a model is destroyed.
		return this.on('destroy', a, b, c)
	}//=md.oX
	md.oS = md.oSy = function (a, b, c) {
		// "sync" (model_or_collection, resp, options)
		// — when a model or collection has been successfully synced with the server.
		return this.on('sync', a, b, c)
	}
	 md.oRq = md.oQ =function (a, b, c) {
		return this.on('request', a, b, c)
	}// "request" (model_or_collection, xhr, options)
// — when a model or collection has started a request to the server.
	md.oRs = function (fn, a, b, c) {
		// "reset" (collection, options)
		// — when the collection's entire contents have been replaced.
		return this.on('reset', fn, a, b, c)
	}
	md.tr = function (a, b) {
		this.trigger(a, b);
		return this
	}
	return md
};
Bb.sEv(cl)
Bb.sEv(md)
Bb.sEv(vw)

Bb.R = Bb.Router
Bb.setId = function () {
	Bb.M.prototype.idAttribute = '_id'//md.idAttribute = '_id'
}
Bb.R = Bb.Router
Bb.R.x = Bb.R.extend


bbLStore()



function bbLStore(){
	bbLocStorPLUG = function () {
		bbLocStorPLUG1 = function () {
			(function (root, factory) {
				if (typeof exports === 'object' && typeof require === 'function') {
					module.exports = factory(require("backbone"));
				} else if (typeof define === "function" && define.amd) {
					// AMD. Register as an anonymous module.
					define(["backbone"], function (bb) {
						// Use global variables if the locals are undefined.
						return factory(bb || root.bb);
					});
				} else {
					factory(bb);
				}
			}(this, function (bb) {
// A simple module to replace `bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.
// Generate four random hex digits.
				function S4() {
					return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
				};
// Generate a pseudo-GUID by concatenating random hexadecimal.
				function guid() {
					return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
				};
				function isObject(item) {
					return item === Object(item);
				}
				
				function contains(array, item) {
					var i = array.length;
					while (i--) if (array[i] === item) return true;
					return false;
				}
				
				function extend(obj, props) {
					for (var key in props) obj[key] = props[key]
					return obj;
				}
				
				function result(object, property) {
					if (object == null) return void 0;
					var value = object[property];
					return (typeof value === 'function') ? object[property]() : value;
				}

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use bb.LocalStorage instead
				bb.LocalStorage = window.Store = function (name, serializer) {
					if (!this.localStorage) {
						throw "bb.localStorage: Environment does not support localStorage."
					}
					this.name = name;
					this.serializer = serializer || {
						serialize: function (item) {
							return isObject(item) ? JSON.stringify(item) : item;
						},
						// fix for "illegal access" error on Android when JSON.parse is passed null
						deserialize: function (data) {
							return data && JSON.parse(data);
						}
					};
					var store = this.localStorage().getItem(this.name);
					this.records = (store && store.split(",")) || [];
				};
				extend(bb.LocalStorage.prototype, {
					// Save the current state of the **Store** to *localStorage*.
					save: function () {
						this.localStorage().setItem(this.name, this.records.join(","));
					},
					// Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
					// have an id of it's own.
					create: function (model) {
						if (!model.id && model.id !== 0) {
							model.id = guid()
							model.set(model.idAttribute, model.id)
						}
						this.localStorage().setItem(this._itemName(model.id),
								this.serializer.serialize(model))
						this.records.push(model.id.toString())
						this.save();
						return this.find(model)
					},
					// Update a model by replacing its copy in `this.data`.
					update: function (model) {
						this.localStorage().setItem(this._itemName(model.id),
								this.serializer.serialize(model))
						var modelId = model.id.toString()
						if (!contains(this.records, modelId)) {
							this.records.push(modelId)
							this.save()
						}
						return this.find(model)
					},
					// Retrieve a model from `this.data` by id.
					find: function (model) {
						return this.serializer.deserialize(
								this.localStorage().getItem(this._itemName(model.id)))
					},
					// Return the array of all models currently in storage.
					findAll: function () {
						var result = []
						for (var i = 0, id, data; i < this.records.length; i++) {
							id = this.records[i]
							data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
							if (data != null) result.push(data)
						}
						return result
					},
					// Delete a model from `this.data`, returning it.
					destroy: function (model) {
						this.localStorage().removeItem(this._itemName(model.id));
						var modelId = model.id.toString();
						for (var i = 0, id; i < this.records.length; i++) {
							if (this.records[i] === modelId) {
								this.records.splice(i, 1);
							}
						}
						this.save();
						return model;
					},
					localStorage: function () {
						return localStorage;
					},
					// Clear localStorage for specific collection.
					_clear: function () {
						var local = this.localStorage(),
								itemRe = new RegExp("^" + this.name + "-");
						// Remove id-tracking item (e.g., "foo").
						local.removeItem(this.name);
						// Match all data items (e.g., "foo-ID") and remove.
						for (var k in local) {
							if (itemRe.test(k)) {
								local.removeItem(k);
							}
						}
						this.records.length = 0;
					},
					// Size of localStorage.
					_storageSize: function () {
						return this.localStorage().length;
					},
					_itemName: function (id) {
						return this.name + "-" + id;
					}
				})
// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
				bb.LocalStorage.sync = window.Store.sync = bb.localSync = function (method, model, options) {
					var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
					var resp, errorMessage;
					//If $ is having Deferred - use it.
					var syncDfd = bb.$ ?
							(bb.$.Deferred && bb.$.Deferred()) :
							(bb.Deferred && bb.Deferred());
					try {
						switch (method) {
							case "read":
								resp = model.id != undefined ? store.find(model) : store.findAll();
								break;
							case "create":
								resp = store.create(model);
								break;
							case "update":
								resp = store.update(model);
								break;
							case "delete":
								resp = store.destroy(model);
								break;
						}
					} catch (error) {
						if (error.code === 22 && store._storageSize() === 0)
							errorMessage = "Private browsing is unsupported";
						else
							errorMessage = error.message;
					}
					if (resp) {
						if (options && options.success) {
							if (bb.VERSION === "0.9.10") {
								options.success(model, resp, options);
							} else {
								options.success(resp);
							}
						}
						if (syncDfd) {
							syncDfd.resolve(resp);
						}
					} else {
						errorMessage = errorMessage ? errorMessage
								: "Record Not Found";
						if (options && options.error)
							if (bb.VERSION === "0.9.10") {
								options.error(model, errorMessage, options);
							} else {
								options.error(errorMessage);
							}
						if (syncDfd)
							syncDfd.reject(errorMessage);
					}
					// add compatibility with $.ajax
					// always execute callback for success and error
					if (options && options.complete) options.complete(resp);
					return syncDfd && syncDfd.promise();
				};
				bb.ajaxSync = bb.sync
				bb.getSyncMethod = function (model, options) {
					forceAjaxSync = options && options.ajaxSync
					if (!forceAjaxSync && (result(model, 'localStorage') ||
							result(model.collection, 'localStorage'))) {
						return bb.localSync
					}
					return bb.ajaxSync
				}
// Override 'bb.sync' to default to localSync,
// the original 'bb.sync' is still available in 'bb.ajaxSync'
				bb.sync = function (met, md, op) {
					return bb.getSyncMethod(md, op).apply(this, [met, md, op])
				}
				return bb.LocalStorage
			}))
		}
		(function (root, factory) {
			if (typeof exports === 'object' && typeof require === 'function') {
				module.exports = factory(require("backbone"));
			} else if (typeof define === "function" && define.amd) {
				// AMD. Register as an anonymous module.
				define(["backbone"], function (Bb) {
					// Use global variables if the locals are undefined.
					return factory(Bb || root.Bb);
				});
			} else {
				factory(Bb);
			}
		}(this, function (Bb) {
// A simple module to replace `Bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.
// Generate four random hex digits.
			function S4() {
				return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			};
// Generate a pseudo-GUID by concatenating random hexadecimal.
			function guid() {
				return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
			};
			function isObject(item) {
				return item === Object(item);
			}
			
			function contains(array, item) {
				var i = array.length;
				while (i--) if (array[i] === item) return true;
				return false;
			}
			
			function extend(obj, props) {
				for (var key in props) obj[key] = props[key]
				return obj;
			}
			
			function result(object, property) {
				if (object == null) return void 0;
				var value = object[property];
				return (typeof value === 'function') ? object[property]() : value;
			}

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use Bb.LocalStorage instead
			Bb.LocalStorage = window.Store = function (name, serializer) {
				if (!this.localStorage) {
					throw "Bb.localStorage: Environment does not support localStorage."
				}
				this.name = name;
				this.serializer = serializer || {
					serialize: function (item) {
						return isObject(item) ? JSON.stringify(item) : item;
					},
					// fix for "illegal access" error on Android when JSON.parse is passed null
					deserialize: function (data) {
						return data && JSON.parse(data);
					}
				};
				var store = this.localStorage().getItem(this.name);
				this.records = (store && store.split(",")) || [];
			};
			extend(Bb.LocalStorage.prototype, {
				// Save the current state of the **Store** to *localStorage*.
				save: function () {
					this.localStorage().setItem(this.name, this.records.join(","));
				},
				// Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
				// have an id of it's own.
				create: function (model) {
					if (!model.id && model.id !== 0) {
						model.id = guid()
						model.set(model.idAttribute, model.id)
					}
					this.localStorage().setItem(this._itemName(model.id),
							this.serializer.serialize(model))
					this.records.push(model.id.toString())
					this.save();
					return this.find(model)
				},
				// Update a model by replacing its copy in `this.data`.
				update: function (model) {
					this.localStorage().setItem(this._itemName(model.id),
							this.serializer.serialize(model))
					var modelId = model.id.toString()
					if (!contains(this.records, modelId)) {
						this.records.push(modelId)
						this.save()
					}
					return this.find(model)
				},
				// Retrieve a model from `this.data` by id.
				find: function (model) {
					return this.serializer.deserialize(
							this.localStorage().getItem(this._itemName(model.id)))
				},
				// Return the array of all models currently in storage.
				findAll: function () {
					var result = []
					for (var i = 0, id, data; i < this.records.length; i++) {
						id = this.records[i]
						data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
						if (data != null) result.push(data)
					}
					return result
				},
				// Delete a model from `this.data`, returning it.
				destroy: function (model) {
					this.localStorage().removeItem(this._itemName(model.id));
					var modelId = model.id.toString();
					for (var i = 0, id; i < this.records.length; i++) {
						if (this.records[i] === modelId) {
							this.records.splice(i, 1);
						}
					}
					this.save();
					return model;
				},
				localStorage: function () {
					return localStorage;
				},
				// Clear localStorage for specific collection.
				_clear: function () {
					var local = this.localStorage(),
							itemRe = new RegExp("^" + this.name + "-");
					// Remove id-tracking item (e.g., "foo").
					local.removeItem(this.name);
					// Match all data items (e.g., "foo-ID") and remove.
					for (var k in local) {
						if (itemRe.test(k)) {
							local.removeItem(k);
						}
					}
					this.records.length = 0;
				},
				// Size of localStorage.
				_storageSize: function () {
					return this.localStorage().length;
				},
				_itemName: function (id) {
					return this.name + "-" + id;
				}
			})
// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and Bb.localSync is deprecated, use Bb.LocalStorage.sync instead
			Bb.LocalStorage.sync = window.Store.sync = Bb.localSync = function (method, model, options) {
				var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
				var resp, errorMessage;
				//If $ is having Deferred - use it.
				var syncDfd = Bb.$ ?
						(Bb.$.Deferred && Bb.$.Deferred()) :
						(Bb.Deferred && Bb.Deferred());
				try {
					switch (method) {
						case "read":
							resp = model.id != undefined ? store.find(model) : store.findAll();
							break;
						case "create":
							resp = store.create(model);
							break;
						case "update":
							resp = store.update(model);
							break;
						case "delete":
							resp = store.destroy(model);
							break;
					}
				} catch (error) {
					if (error.code === 22 && store._storageSize() === 0)
						errorMessage = "Private browsing is unsupported";
					else
						errorMessage = error.message;
				}
				if (resp) {
					if (options && options.success) {
						if (Bb.VERSION === "0.9.10") {
							options.success(model, resp, options);
						} else {
							options.success(resp);
						}
					}
					if (syncDfd) {
						syncDfd.resolve(resp);
					}
				} else {
					errorMessage = errorMessage ? errorMessage
							: "Record Not Found";
					if (options && options.error)
						if (Bb.VERSION === "0.9.10") {
							options.error(model, errorMessage, options);
						} else {
							options.error(errorMessage);
						}
					if (syncDfd)
						syncDfd.reject(errorMessage);
				}
				// add compatibility with $.ajax
				// always execute callback for success and error
				if (options && options.complete) options.complete(resp);
				return syncDfd && syncDfd.promise();
			};
			Bb.ajaxSync = Bb.sync
			Bb.getSyncMethod = function (model, options) {
				forceAjaxSync = options && options.ajaxSync
				if (!forceAjaxSync && (result(model, 'localStorage') ||
						result(model.collection, 'localStorage'))) {
					return Bb.localSync
				}
				return Bb.ajaxSync
			}
// Override 'Bb.sync' to default to localSync,
// the original 'Bb.sync' is still available in 'Bb.ajaxSync'
			Bb.sync = function (met, md, op) {
				return Bb.getSyncMethod(md, op).apply(this, [met, md, op])
			}
			return Bb.LocalStorage
		}))
	}
	$store = function (name) {
		return new Backbone.LocalStorage(name)
	}
	Storage = function (name) {
		return $C({
			localStorage: new Bb.LocalStorage(name)
		})
	}
// extending Bb? -> https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}




RecV = bb.V.x({
	tagName: 'div',
	className: 'rec',
	events: {'click': 'move'},
	move: function () {
		this.$el.css('left', this.$el.position().left + 10)
	},
	rr: function () {
		return this.sDims().sPos().sCol()
	},
	sDims: function () {
		this.$el.WH(this.model.get('w'), this.model.get('h'))
		return this
	},
	sPos: function () {
		this.$el.ab().LR(
			this.model.get('pos').x, this.model.get('pos').y)
		return this
	},
	sCol: function () {
		this.$el.C(this.model.get('C'))
		return this
	}
})



//events
BB5 = SAMP = function () {
 
	d = $.d()
	Rec = bb.M.x()
	RecV = bb.V.x({
		tagName: 'div', className: 'rec',
		events: {'click': 'move'},
		move: function () {
			$l('click so move')
		$l('left: '+ this.$el.css('left'))
			$l('position peft: ')
			$l( this.$el.position().left )
			this.$el.css('left', this.$el.position().left + 10)

		},
		R: function () {return this.sDims().sPos().sCol()},
		sDims: function () {
			this.$el.WH(this.model.get('w'), this.model.get('h'))
			return this
		},
		sPos: function () {
			$l('sPos')
			this.$el.ab().XY(
					this.g('pos').x,
				this.g('pos').y
			)
			return this
		},
		sCol: function () {
			this.$el.C(this.g('C'))
			return this
		}
	})
	_.e([
		new Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		new Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		new Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		var r = new RecV({model: md})
		r.R().$el.a2(d)
	})
}

BB8 = EVENTS = BEAUTY = function () {
	dv = $.d('r', 200).A($.h1('hello'), bt = $.bt('-------'))
	Vw = Bb.V.x({events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'R',
			'mouseover': function () {
				dv.C($r())
			}
		}, R: function () {$.C($r())}})

	new Vw({I: 1, el: dv})
}

$.bd=function(){return $('body')}

function old(){
	Bb.eParse = function (e) {
		e = e || {}
		_.e(e, function (v, k) {
			if (k == '$') {
				e['click'] = v
			}
			if (k == '$$') {
				e['dblclick'] = v
			}
		})
		return e
	}
	M$D = function (md) {return new Div_({model: md})}}

Bb.M.prototype.idAttribute = '_id' // very important for server (mongo) apps