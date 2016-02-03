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
	md.oZ = md.oE = md.oEr = function (a, b, c) {
		return this.on('error', a, b, c)
	} //"error" (model_or_collection, resp, options)
// — when model's or collection's request to remote server has failed.
	md.oA = function (fn) {
		return this.on('add', fn || function (m) {
			m.at = m.attributes
			$l('E$???????????? (in md.oA')//E$(m) // a.A(m)
		})
	}//when a md is "added" to cl (model, collection, options)
	md.oC = md.oCh = function (n, fn) {
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
	md.oR = md.oRt = function (n, f) {
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
	md.oI = md.oIv = function (a, b, c) {
		//"invalid" (model, error, options)
		// — when a model's validation fails on the client.
		return this.on('invalid', a, b, c)
	}
	md.oSo = function (a, b, c) {
		// "sort" (collection, options) — when the collection has been re-sorted.
		return this.on('sort', a, b, c)
	}
	md.oD = md.oDs = function (a, b, c) {
		// "destroy" (model, collection, options)
		// — when a model is destroyed.
		return this.on('destroy', a, b, c)
	}//=md.oX
	md.oS = md.oSy = function (a, b, c) {
		// "sync" (model_or_collection, resp, options)
		// — when a model or collection has been successfully synced with the server.
		return this.on('sync', a, b, c)
	}
	md.oQ = md.oRq = function (a, b, c) {
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
Bb.R = Bb.Router
Bb.setId = function () {
	Bb.M.prototype.idAttribute = '_id'//md.idAttribute = '_id'
}
Bb.R = Bb.Router
Bb.R.x = Bb.R.extend
Bb.M.ob = function (ob) {
	ob = ob || {} // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s} //o=o||{}
	ob.initialize = ob.initialize || ob.i || function () {
	}
	function init() {
		if (ob.fn) {
			ob.i = o.fn
		}
		ob._i = ob.initialize
		if (!F(ob.initialize) && F(ob.i)) {
			ob.initialize = ob.i
		}
		ob.initializeX = function (op) {
			this.q = this.$el
			this.a2 = function (a) {
				return this.q.a2(a)
			}
			//$l('gen init..')
			this.g = function (a) {
				if (a) {
					return this.model.get(a)
				}
			}
			this.A = function (ob) {
				var g = G(arguments),
						q = this.q
				if (S(ob)) {
					ob = this.g(ob)
				}
				if (ob) {
					q.A(ob)
				}
				if (U(ob) || g.p) {
					q.A()
				}
				return q
			}
			_.b(ob._i, this)(op)
		}
	}
	
	ob.className = ob.className || ob.k
	ob.defaults = ob.defaults || ob.df || ob.d
	ob.events = ob.events || ob.ev || ob.e
	ob.id = D(ob.id) ? ob.id : ob.x
	ob.idAttribute = ob.idAttribute || ob._id
	ob.model = ob.model || ob.md || ob.m
	ob.collection = ob.collection || ob.cl || ob.c
	ob.render = ob.render || ob.rr || ob.rn || ob.r
	ob.tagName = ob.tagName || ob.tn || ob.t
	ob.validate = ob.validate || ob.v
	return ob
}
M$ = Bb.M.x = function (ob) {
	return Bb.M._x(Bb.M.ob(ob))
}
$m = function (ob, ob2) {
	var Md = M$(ob)
	return new Md(Bb.M.ob(ob2))
}
_m = $$m = function () {
	var Md = M$()
	return new Md(Bb.M.ob(ob))
}
M_ = function (ob) {
	return _M()(ob)
}
$M = function (ob, ob2) {
	return _M(ob)(ob2)
}
_M = $$M = function (ob) {
	var g = G(arguments)
	var Md = M$(ob)
	var fn = function (ob, q) {
		var md = new Md(ob || {})
		if (q) {
			md.a2(q)
		}
		return md
	}
	fn.M = Md // = fn.md = fn.Md
	fn.C = function (ob) {
		return _C(_.x({model: Md}, ob || {}))
	}
	return fn
}
M$D = function (md) {
	return new Div_({model: md})
}
md.h1 = function (val) {
	var h1 = $.h1(this.get(val))
	return h1
}
md.sp = function (val) {
	return $.sp().A(this.get(val))
}
md.d = function (val) {
	return $.d().A(this.get(val))
}
md.g = md.get;
md.s = function (a, b, c) {
	var md = this
	if (O(a) && O(b)) {
		if (b.v) {
			b.validate = b.v ? true : false
		}
	}
	if (S(a) && O(c)) {
		if (c.v) {
			c.validate = c.v ? true : false
		}
	}
	md.set(a, b, c)
	return md
}
md.o = function (a, b) {
	if (U(b)) {
		return this.get(a)
	}
	this.set(a, b)
	return this
}
md.sv = md.S = md.save
md.at = function () {
	return this.attributes
}
md.hC = function (at) {
	var md = this, g = G(arguments), o
	o = g.F ? {fn: g.f} : F(g.s) ?
	{at: g.f, fn: g.s} : {}
	if (o.fn) {
		if (md.hC(o.at)) {
			o.fn()
		}
		return this
	}
	return this.hasChanged(at)
}
md.a2 = function (a) {
	if (!this.q) {
		return this
	}
	return this.q.a2(a)
}
md.J = md.j = md.tJ = function () {
	return this.toJSON()
}
md.tS = md.sJ = md.jS = function () {
	return _.jS(this.J())
}
md.$l = md.lJ = function () {
	return $l(this.tS())
}
md.l = function () {
	$l(JSON.stringify(this.toJSON()))
	return this
}
md.ls1 = md.l1 = md.lT1 = md.lTo1 = function (a, b, c, d) {
	return this.listenToOnce(a, b, c, d)
}
md.ls2 = md.l2 = md.lT = md.lTo = function (a, b, c, d) {
	return this.listenTo(a, b, c, d)
}
md.at = md.attributes
md._s = function (a, b, c) {
	if (O(a) && O(b)) {
		if (b.v) {
			b.validate = b.v ? true : false
		}
	}
	if (S(a) && O(c)) {
		if (c.v) {
			c.validate = c.v ? true : false
		}
	}
	return m.set(a, b, c)
}
 
$Df = function (ob) {
	return $M({df: ob})
}
bbEvents()
router()
bbView()
bbLStore()
function bbEvents(){
 
	clEvents()
	function clEvents() {
		cl.V = function (Vw, ob) {
			ob = ob || {}
			ob.m = this
			return Vw(ob)
		}
//cl.o= function(){var g=G(arguments); this.on.apply(this, g) }
		cl.tr = function (a, b) {
			this.trigger(a, b);
			return this
		}
		cl.oRm = function (a, b, c) {
			return this.on('remove', a, b, c)
		}   // "remove" (model, collection, options) — when a model is rcl from a collection.
		cl.oX = cl.oD = function (fn) {
			return this.on('destroy', fn)
		} // "destroy" (model, collection, options) — when a model is destroyed.
		cl.oR = cl.oRs = function (fn) {
			return this.on('reset', fn)
		}  // "reset" (collection, options) — when the collection's entire contents have been replaced.
		cl.oSo = function (a, b, c) {
			return this.o('sort', a, b, c)
		}    // "sort" (collection, options) — when the collection has been re-sorted.
		cl.oC = cl.oCh = function (n, fn) {
			if (U(fn)) {
				return this.on('change', n)
			}
			return this.on('change:' + n, fn)
		} // "change" (model, options)  — when a model's attributes have changed. // "change:[attribute]" (model, value, options)  — when a specific attribute has been updated.
		cl.oQ = cl.Rq = function (mdCl, fn) {
			return this.on('request', fn)
		}      // on start of md|cl SERVER request function passed(md_or_cl,  xhr, op)
		cl.oS = cl.oSy = function (a, b, c) {
			return this.o('sync', a, b, c)
		} // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
		cl.oZ = cl.oE = cl.oEr = function (a, b, c) {
			return this.o('error', a, b, c)
		} //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
		cl.oIv = function (a, b, c) {
			return this.on('invalid', a, b, c)
		}  //"invalid" (model, error, options) — when a model's validation fails on the client.
		cl.o$ = cl.oAl = function (fn) {
			return this.on('all', fn)
		}   //passes event name as 1st ag
		cl.oA = function (fn) {
			fn = fn || function (m) {
				m.at = m.attributes
				m.s = function (a, b, c) {
					if (O(a) && O(b)) {
						if (b.v) {
							b.validate = b.v ? true : false
						}
					}
					if (S(a) && O(c)) {
						if (c.v) {
							c.validate = c.v ? true : false
						}
					}
					return m.set(a, b, c)
				}
				m.g = m.get
				m.j = m.toJSON
				m.o = m.on
				E$(m)
				a.A(m)
			}
			return this.on('add', fn)
		} // "add" (model, collection, options) — when a model is added to a collection.
	}
	
	$ev = _.x({}, Bb.E)
	$on = function (ev, fn) {
		$ev.on(ev, fn)
	}}
function router(){
//http://www.codeproject.com/Articles/803073/BackBone-Tutorial-Part-Understanding-Backbone-js-R
	Bb.H = Bb.History
	Bb.h = Bb.history
	Bb.h.tr = Bb.h.trigger
	Bb.h.s = Bb.h.start
	R$R = $rR = function (fn) {
		return R$({R: fn})
	}
	anchorClickBlocker = function () {
		//looks for clicks on any anchor els where
		//href starts with '/' (no domain) and stop
		//bw from nv to it
		$('body').on('click', 'a[href^="/"]', function (ev) {
			$l('wow')
			ev.preventDefault()
			r.n($(this).attr('href', {trigger: true}))
		})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
		$('body').on('click', 'a[href^="/"]', function (ev) {
			ev.preventDefault()
			r.n($(this).attr('href'))
		})
	}
	knockAncs = function (ev) {
		ev.preventDefault()
		rtr.n($(this).attr('href',
				{trigger: true}))
	}
	$TrRtrFn = notUsed = function (rtr, fn) {
		//rtr =	$Trg$( new( R$R( ob ) ), 'contents')
		return function (md) {
			$Trg(rtr, fn(md))
		}
	}
	$Rt = function (o, root) {
		if (!o['routes'] && !o['rts'] && !o['rt'] && !o['R']) {
			o = {routes: o}
		}
		return $rt(Bb.R.x(o), root)
	}
	rtr = Bb.R.prototype
	$trg = function () {
		$ev.trigger.apply($ev, arguments)
	}
//var vw=this;return vw.cl(function (md) {vw.A(Bb.el( Li_, md ))})
//$:  'doc:selected', //R: function () {return this.addVal('title')},
	V$R = function (fn) {
		return V$({R: fn})
	}
	Bb.Co = Bb.Controller = function (Vw, md) {
		return new Vw({model: md})
	}
	Bb.el = function (Vw, md) {
		return new Vw({model: md}).el
	}
	$start = $route = function () {
		_$start = function () {
			Bb.h.s()
		}
		Bb.h.s({pushState: true})
		return new Rtr
	}
	sRtr = function (rtr) {
		rtr.n = function (url, op) {
			this.navigate(url, op);
			return this
		}
		rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
			return this.n(url, {trigger: true})
		}
		rtr.rt = rtr.A = rtr.oR = function (rt, fn) {
			var rtr = this
			if (O(rt)) {
				//_.e(rt, function (v, k) {rtr.on('route:' +k, v)})
			}
			else {
				rtr.on('route:' + rt, fn)
			}
			return rtr
		}
		rtr.rp = function (url, op) {
			return this._n(url, _.x({replace: true},
					G(arguments).n ? {trigger: true} : {}))
		}//navigate: replace
// history:
		rtr.Fn = function () {
			return function (url) {
				this.N(url)
			}
		}
		return rtr
	}
	$R = $Rtr = R$ = function (ob) {
		ob = ob || {}
		if (O(ob.R)) {
			ob.routes = ob.R
		}
		ob.routes = ob.R ? ob.R : (ob.routes || ob.rt || ob.r || {}) //if (ob.i) {ob.initialize = ob.i}
		//if (ob.$) {ob.initialize = function () {$start(); if (F(ob.$)) {ob.$()}}}
		//if (ob.x) {ob.index = ob.x}
		//if (ob.h) {ob.home = ob.h}
		//ob.routes[''] = ob.routes[''] || 'index'
		//ob.routes = _.x({'': '_'}, ob.routes)
		//ob.routes['*other'] = 'd'
		//ob = _.x({
		//_: function () {$l('INDEX ( _ ) ')},
		//d: function (other) {$l('DEFAULT(d): "' + other + '"')}
		//}, ob)
		//return function (a, b, c, d) {return new Rt(a, b, c, d)}
		//metaClass.. no need for 'new' //= $$R
		var rtr = Bb.R.x(ob)
		return rtr
		//rt._ = _$start
		//rt.$ = $start
		// (goto time: 43:42 )  https://www.youtube.com/watch?v=FXBCBjLGlK4
// MUST WATCH !!!!!!!!! https://www.youtube.com/watch?v=b4R3d46Ce80 
// BEST VIDEO (WATCH ALL, KNOW ALL)  
//  https://www.youtube.com/watch?v=cIq6Z_Vv4nY
// RTR ALL U NEED TO KNOW!!!      
	}
	$RoApp = function (name, CALLBACK) {
		window[name] = function () {
			name = name.toUpperCase()
			$.d('B').W('auto').H(8).A('this is RoApp: ').fS(75).col('r')
			$.sp(name).fS(100).C('o', 'x')
			$.hr()
			d = $.d().id('ct').fS(40)
			CALLBACK()
			Bb.h.s({pushState: true, root: "/box/" + name + "/"})
		}
	}
	$rt = function (Rtr, root, ob) {
		if (Rtr) {
			rtr = rt(Rtr, ob)
		}
		Bb.h.s({
			root: root,
			pushState: true
		})
		return rtr
		function rt(Rtr, ob) {
			return sRtr(new Rtr(ob))
		}
	}
	 
}
function bbView(){
	$.fn.$V = function (ob) {
		ob = ob || {};
		ob.el = this;
		return $V(ob)
	}//$.fn.V
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.model
		ob.m = ob.md = ob.m = this
		return Vw(ob)
	}
	md._V = function (ob) {
		return this.V(_V(ob))
	}
	vw.h1 = function (val) {
		var h1 = this.model.h1(val)
		this.$el.A(h1)
		return h1
	}
	vw.d = function (val) {
		return this.model.d(val).a2(this.$el)
	}
	vw.C$ = function (s) {
		this.$el.C$(s)
		return this
	}
	V$Ul = function (ob) {
		ob = F(ob) ? {R: ob} : ob
		return V$(_.x({tagName: 'ul'}, ob))
	}
	V$Li = function (ob) {
		return V$(_.x({tagName: 'li'}, ob))
	}
	V$Li$ = function (ob) {
		return V$(_.x({
			I: 1,
			tagName: 'li'
		}, ob))
	}
	Bb.V.ob = function (ob) {
		ob = ob || {}
		if (ob.q) {
			ob.el = ob.q
		}
		if (S(ob.R)) {
			var str = ob.R
			ob.R = function () {
				return this.addVal(str)
			}
		}
		ob.id = D(ob.id) ? ob.id :
		ob.x || ob._ || ob['#']
		ob.model = ob.model || ob.md || ob.m
		ob.collection = ob.collection || ob.cl || ob.c
		ob.tagName = ob.tagName || ob.tn || ob.t
		ob.className = ob.className || ob.k //if (ob.k) {ob.className = ob.k}
		ob.defaults = ob.defaults || ob.df || ob.d
		//ob.render = ob.render ||ob.R|| ob.rn || ob.rr || ob
		ob.E = ob.E || {}
		if (F(ob.cl)) {
			ob.E.click = ob.cl
		}
		if (S(ob.$)) {
			var str = ob.$
			ob.$ = function () {
				return this.trg(str)
			}
		}
		if (F(ob.$)) {
			ob.E.click = ob.$
		}
		if (F(ob.click)) {
			ob.E.click = ob.click
		}
		ob.events = ob.events || ob.E || ob.ev || ob.e // || {$: function () {}}//; EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}; _.e(ob.events, function (v, k) {if (EVob[k]) {ob.events[EVob[k]] = v}})
		//ob.el = ob.el || ob.q
		//if (ob.q) {ob.el = q}
		if (!F(ob.I) && ob.I) {
			ob.I = function () {
				this.R()
			}
		}
		if (F(ob.I)) {
			ob.initialize = ob.I
		}
		return ob
	} // = V__ = _vw
	V$ = Bb.V.x = function (ob) {
		return Bb.V._x(Bb.V.ob(ob))
	}
	$v = function (ob, ob2) {
		var Vw = V$(ob)
		return new Vw(Bb.V.ob(ob2))
	}
	_v = $$v = function () {
		var Vw = V$()
		return new Vw(Bb.V.ob(ob))
	}
	_V = $$V = function (ob, ob2) {
		var Vw = V$(ob)
		var fn = function (ob, q) {
			var vw = new Vw(Bb.V.ob(ob))
			vw.md = vw.model;
			vw.cl = vw.collection
			vw.q = vw.$el
			if (q) {
				alert('see $$V');
				vw.a2(q)
			}
			return vw
		}
		return ob2 ? fn(ob) : fn
	}
	V_ = function (ob) {
		return _V()(ob)
	}
	$V = function (ob, ob2) {
		return _V(ob)(ob2)
	}
	vw.s = function (a, b) {
		this.model.set(a, b);
		return this
	}
	vw.g = vw.get = function (m) {
		if (this.model) {
			return this.model.get(m)
		}
		else if (this.collection && this.collection.get) {
			return this.collection.get(m)
		}
	}
	vw.o = function (a, b) {
		if (U(b)) {
			return this.get(a)
		}
		this.set(a, b)
		return this
	}
	vw.A = vw.add = function (ob) {
		var g = G(arguments), vw = this
		_.e(g.A ? g.f : g, function (q) {
			vw.$el.A(q)
		})
		var vw = this, q = vw.$el, g = G(arguments)
		//if (S(ob)) { ob = $.sp(vw.g(ob)) }
		//if (ob) {q.A(ob)}
		//if (U(ob) || g.p) {q.A()}
		return vw
	}
	vw.a2 = function (a) {
		if (this.$el) {
			this.$el.a2(a)
		}
		return this
	}
	vw.E = function () {
		this.$el.E();
		return this
	}
	vw.eM = function (fn) {
		_.e(this.model, fn);
		return this
	}
	vw.cl = vw.eCl = vw.e = function (fn) {
		var cl = (this.collection || this.cl)
		if (U(fn)) {
			return cl
		}
		if (cl) {
			_.e(cl, fn)
		}
		return this
	}
	vw.ECl = function (fn, cl) {
		this.E();
		if (cl) {
			_.e(cl, fn)
			return this
		}
		return this.eCl(fn)
	}
	vw.addVal = function (ob) {
		this.$el.A(this.g(ob))
		return this
	}
	vw.trg = function (ev) {
		$ev.trigger(ev, this.model);
		return this
	}
	vw.rEl = function () {
		return this.R().el
	}
	vw.renCl = function (Vw) {
		var vw = this
		return vw.cl(function (md) {
			vw.A(Bb.el(Vw, md))
		})
	}
	vw.eAlt = function (a, b) {
		var cl = this.collection || this.cl;
		cl.each(a, b)
		return this
	}
	vw.H = vw.h = function (a) {
		if (U(a)) {
			return this.$el.h()
		}
		this.$el.h(a);
		return this
	}
	vw.J = vw.tJ = vw.j = function (fn) {
		var vw = this, j
		if (this.collection) {
			j = this.collection.toJSON()
			if (F(fn)) {
				_.e(j, fn);
				return vw
			}
			return j
		}
		if (this.model) {
			return this.model.toJSON()
		}
	}
	vw.oC = function () {
		if (!this.model) {
			return false
		}
		this.model.oC.apply(this.model, arguments)
		return this
	}
	vw.ds = function () {
		if (this.model) {
			this.model.destroy()
		}
	}
 
	function ach$$$() {
		V$i = function (ob) {
			if (F(ob)) {
				ob = {R: ob}
			}
			ob.I = 1
			return V$(ob)
		}
		$FirstVw = V$i(function () {
			var $$lb = $.lb('My 1st View')
			var $$a = $.a('Go to 2nd View', 'sec')
			this.A(ll.oh($$lb, ll, $$a))
		})
		$SecVw = V$i({
			R: ll.TpFn(ll($.lb('My 2nd View'),
					$.br(), $.a().hr('first').A('Go to 1st View')))
		})
	}
	
	Bb.tr = Bb.trV = Bb.trVw = function (ob) {
		ob = _.x(ob || {}, {tagName: 'tr'})
		var view = Bb.V.x(ob)
		return view
	}
	Bb.ul = $.uV = $.ulV = function (ob) {
		ob = ob || {};
		ob.tagName = 'ul';
		return $V(ob)
		// make a bb view with t:ul
	}
}
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
//view
BB16 = VIEW = function () {
	$.fn.V = function (ob) {
		ob = ob || {};
		ob.el = this
		return $V(ob)
	}
	$V({
		el: $.dA('g', 400, 400, 200, 200),
		R: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.R()
			})
		},
		I: function () {
			this.R()
		}
	})
	Vw = _V({
		R: function () {
			this.A($.ul(['hello']).fZ(30))
		},
		I: function () {
			this.R()
		}
	})
	Vw = V$({
		el: q = $.dA('g', 400, 400, 200, 200),
		R: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.R()
			})
		},
		I: function () {
			this.R()
		}
	})
	Vw2 = V$({
		R: function () {
			this.A($.ul(['hello']).fZ(30))
		},
		I: function () {
			this.R()
		}
	})
	new Vw()
	$.bt('orange', function () {
		new Vw2({el: $.d('O', 500, 500)})
		Vw({el: $.d('O', 500, 500)})
	})
}
BB17 = NJA = MDV = MVW = BMV = XMDVW = function () {
	Md = _M({d: {n: 'j', a: 20, o: 'p'}})
	Vw = _V({
		tagName: 'li',
		_: 'some-per', k: 'per',
		R: function () {
			this.$el.A('n').A()
		},
		I: function () {
			this.R()
		}
	})
	md = Md()
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.md = ob.m = this
		return Vw(ob)
	}
	md.V(Vw)
	_.in(1, function () {
		$.C('R')
		md.l()
		$Ms(J.s(md.J()))
	})
}
BB12 = PVR = PER = function () {
	pV = _V({
		t: 'li', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})({
		m: $M({d: {n: 'j', a: 20, o: 'p'}})
	})
	_.ev(.5, function () {
		pV.r()
	})
}
//rouer
  ROUT = function () {
	ct = $.d()
	_.e(['home', 'about'], function (o) {
		ct.A($nav(o))
		$mockPage(o)
		$('.' + o + '-nav').$(function () {
			rtr.N(o)
		})
	})
	$Rt({
		'': sh('home'), home: sh('home'),
		about: sh('about')
	}, '/box/rout')
	function sh(o) {
		return function () {
			$('.pg').hd()
			$('*').rmK('A')
			$('#' + o + '-pg').sh()
			$('.' + o + '-nav').K('A')
		}
	}
	
	$s({_A: {C: 'y', c: 'z'}})
}
//events
BB5 = SAMP = function () {
 
	d = $.d()
	Rec = bb.M.x()
	RecV = bb.V.x({
		tagName: 'div', className: 'rec',
		events: {'click': 'move'},
		move: function () {$l('clk move')
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
	_.e([
		new Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		new Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		new Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		var r = new RecV({
			model: md
		})
		r.rr().$el.a2(d)
	})
}

BB6 = MCH = CHG = ONCHANGE = SIDEBAR = function () {
	$('body').fS(30).A(ip = $.ip())
	md = M_({rx: 'antibiotic'})
	_V({
		ren: function () {
			return this.h(this.g('rx'))
		},
		initialize: function () {
			var vw = this;
			this.ren()
			this.model.on('change', function () {
				vw.ren()
			})
		}
	})({
		el: $.dA('o', 300, 400).XY(200, 200),
		model: md
	})
	$.bt('submit input val', function () {
		md.set('rx', ip.v())
	})
}
BB8 = EVENTS = BEAUTY = function () {
	dv = $.d('r', 200).A($.h1('hello'),
			bt = $.bt('-------'))
	Vw = Bb.V.x({
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'R',
			'mouseover': function () {
				dv.C($r())
			}
		},
		R: function () {
			$.C($r())
		}
	})
	new Vw({
		I: 1,
		el: dv
	})
}
//
BB15 = XCHANGECOL = PROMPTCOLOR = function () {
	z()
	d = $.dA(400, 400, 300, 200)
	Md = $$M({
		promptColor: function () {
			this.s({
				co: prompt('color:')
			})
		}
	})
	sb = Md()
	sb.on('change:co', function (mod, col, ops) {
		$l('new color!: ' + col);
		d.C(col)
	})
	sb.s({co: 'g'})
	_.in(2, function () {
		sb.promptColor()
	})
}
BB18 = XDEFAULT = function () {
	Md = _M({defaults: {n: 'j', a: 20, o: 'p'}})
	Vw = _V({
		tagName: 'li',
		R: function () {
			this.$el.A('n: ' + this.g('n'))
		},
		I: function () {
			this.$el.A().C('r').col('b').fS(149);
			this.R()
		}
	})
	md = Md()
	vw = Vw({m: md})
}
BB19 = MDG = function () {
	$.h3('p: ' + M_({name: 'jay'}).g('name'))
}
BB9 = VD1 = BB7 = BVD = MVD = function () {
	VD2 = XBACKVALL = function () {
		$l('backvall')
		Md = $$M({
			defaults: {lame: true},
			validate: function (at) {
				$l('in validate')
				_at = at
				if (!at) {
					return false
				}
				if (at.n == 'rigo') {
					return "name can't be rigo!"
				}
			},
			i: function () {
				var t = this
				t.on('error', function (m, e) {
					alert(3);
					$l(e)
				})
				t.on('change:n', function (m, e) {
					alert(3);
					$l(e)
				})
			}
		})
		md = Md({n: "migo", a: 7})
		_.in(3, function () {
			$.C('r')
			md.oIv(function (m, er) {
				$Ms('...');
				$Ms('er: ' + er);
				$Ms('...')
			})
			md.s({n: 'rigo'}, {validate: true})
		})
	}
	Md = _M({
		defaults: {lame: true},
		validate: function (at) {
			if (!at) {
				return false
			}
			if (at.n == 'rigo') {
				return "name can't be rigo!"
			}
		},
		i: function () {
			this.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			this.on('change:n', function (m, e) {
				alert(3);
				$l(e)
			})
		}
	})
	md = Md({n: "migo", a: 7})
	_.in(1, function () {
		$.C('r')
		md.oIv(function (m, er) {
			$Ms('...');
			$Ms('er: ' + er);
			$Ms('...')
		})
		md.s({n: 'rigo'}, {validate: true})
	})
}
$.bd=function(){return $('body')}