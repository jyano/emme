V$ = function () {
	var g = G(arguments), o, v, a
	a = O(g.f) ? g.f : {}
	o = {ob: g.f}
	o.ob = o.b || {}
	if (a.I) {
		a.initialize = a.I
	}
	if (a.R) {
		a.render = a.R
	}
	if (a.r) {
		a.render = a.r
	}
	if (a.rr) {
		a.render = a.rr
	}
	if (a.E) {
		a.events = a.E
	}
	if (a.T) {
		a.template = a.T
	}
	if (a.t) {
		a.tagName = a.t
	}
	if (a.k) {
		a.className = a.k
	}
	if (a.i) {
		a.id = a.i
	}
	Vw = bb.V.e(ob)
	if (a.m) {
		a.model = a.m
	}
	if (a.md) {
		a.model = a.md
	}
	if (a.cl) {
		a.collection = a.cl
	}
	vw = new Vw(a)
	return vw
}
qiv=function(a){return qi(a).v()}
pr=prompt
tp= _.template


ext=function(o){
    o.e=o.extend
    return o}

Bb=Backbone
Bb.M=ext(Bb.Model)
Bb.R=ext(Bb.Router)
Bb.C=ext(Bb.Collection)
Bb.h=Bb.history
Bb.h.s=Bb.h.start
Bb.Ma=Bb.Marionette
Bb.Ma.IV=Bb.Ma.ItemView
Bb.Ma.CV=Bb.Ma.CollectionView
Bb.Ma.CpV=Bb.Ma.CompositeView


bbR=function(o){o=ob(o)

    if(o.R){o.routes=o.R}

    var r=Bb.Router.extend(o)

    r.o=r.on

    return function(){
        var a=new r
        a.o= a.on
        a.oR=function(r,f){a.o('route:'+r, f)}
        a.n=function(frag,op){

            if(O(op)){
                if(D(op.t)){op.trigger=op.t?true:false}
                if(D(op.r)){op.replace=op.r?true:false}}

            a.navigate(frag, op)


        return a}
        return a}
}


bbH=function(){Bb.history.start()}




Eve=function(){


    var e= _({}).extend(Backbone.Events)

    e.o= e.bind
    e.e= e.trigger

    return e}

bbE=function(o){

    // "add" (model, collection, options)
    // — when a model is added to a collection.
    // "remove" (model, collection, options) — when a model is removed from a collection.
    // "reset" (collection, options) — when the collection's entire contents have been replaced.
    // "sort" (collection, options) — when the collection has been re-sorted.
    o.e= o.trigger
    o.o= o.on
    o.oA=function(a){
        return o.o('add',function(m){a(sMd(m))})}


    o.oRm=function(a,b,c){return o.o('remove',a,b,c)}
    o.oR=function(a,b,c){return o.o('reset',a,b,c)}
    o.oSo=function(a,b,c){return o.o('sort',a,b,c)}

    o.oC=function(n,f){
        if(U(f)){return o.o('change', n)};
        return o.o('change:'+n, f)} // "change" (model, options) — when a model's attributes have changed.// "change:[attribute]" (model, value, options) — when a specific attribute has been updated.

    o.oD=function(a,b,c){return o.o('destroy',a,b,c)}// "destroy" (model, collection, options) — when a model is destroyed.
    o.oQ=function(a,b,c){return o.o('request',a,b,c)}// "request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
    o.oS=function(a,b,c){return o.o('sync',a,b,c)}// "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
    o.oE=function(a,b,c){return o.o('error',a,b,c)} //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.

    o.oIV= o.oI= o.oV=function(a,b,c){
        return o.o('invalid',a,b,c)
    } //"invalid" (model, error, options) — when a model's validation fails on the client.


    o.oR=function(n,f){
        if(U(f)){return o.o('route', n)}
        return o.o('route:'+n, f)
    }

    //"route:[name]" (params)— Fired by the router when a specific route is matched.  //"route" (route, params)   — Fired by the router when any route has been matched.
    //"route" (router, route, params)  — Fired by history when any route has been matched.


    o.oAl=function(f){return o.o('all', f)} //passes event name as 1st ag

    return o}



sMd=function(m){
    m.at= m.attributes

    m.s=function(a,b,c){

        if(O(a) && O(b)){
          if(b.v){b.validate= b.v?true:false}}


        if(S(a) && O(c)){
            if(c.v){c.validate= c.v?true:false}
        }

        return m.set(a,b,c)

      }



    m.g= m.get
    m.j= m.toJSON
    m.o= m.on
    bbE(m)
    return m}

bbM=function(a){a=ob(a)

    if(a.i){a.initialize=_v(a.i)}
    if(a.I){a.initialize=_v(a.I)}

    if(a.d){a.defaults=a.d}
    if(a.D){a.defaults=a.D}

    if(a.v){a.validate=a.v}
    if(a.V){a.validate=a.V}

    a.idAttribute= "_id"

    var m=Backbone.Model.extend(a)

    sMd(m)

    return function(a){
      var o=new m(a)

        sMd(o)

     return o}
}



bbV=function(a){a=ob(a)

    if(a.I){a.initialize = a.I}

    if(a.R){a.render = a.R}
    if(a.E){a.events = a.E}
    if(a.T){a.template = a.T}

    if(a.t){a.tagName = a.t}
    if(a.k){a.className = a.k}
    if(a.i){a.id=a.i}

    a.g=function(m){return this.model.get(m)}
    a.H=function(a){this.$el.html(a);return this}

    a.J=function(){return this.model.toJSON()}
    //a.cl= a.collection
    //a.q= qq(a.el)


    var v=Bb.View.extend(a)

    return function(a){
        a=ob(a)
        if(a.m){a.model= a.m}

        if(a.cl){
            a.collection= a.cl

        }


        var z=new v(a)
        z.cl= z.collection
        z.e=function(a,b){return z.cl.each(a,b)}
        z.q= qq(z.$el)
        z.r=function(){return z.render()}
        return  z

    }}




sCl=function(c){
    c=bbE(c)
    c.a=c.add
    c.j= c.toJSON
    c.rm= c.r= c.remove
    return c}

bbC=function(a){

    //if(U(a)){var c=new Backbone.Collection; return sCl(c)}

    a=ob(a)

    if(a.m){a.model= a.m}

    var c=Backbone.Collection.extend(a)

    return function(o){o=ob(o)

        //if(o.m){o.model= o.m}

        var b=new c(o)
        o.o=o.on
        bbE(o)
        return b}

}
ROUTE = function () {
	z()
	r = bbR({
		R: {"*x": "d"}
	})()
	r.oR('d', function (a) {
		alert(a)
	})//#hello -> 'hello'
	r.oR('e', function (a) {
		alert(a)
	})//#e -> 'e' (could do '/#/e')
	bbH()
}
ROUTEPAMS = function () {
	z()
	rtr = bbR({
		R: {
			'': 'home',
			'view': 'v',
			'new': 'nn',
			':id': 'en',
			'posts/:id': 'gPo',
			'*acts': 'dfR',
			'download/*path': 'dlF',
			':route/:action': 'ldV'
		},
		home: function () {
			al('home')
		},
		v: function () {
			al('image')
		},
		nn: function () {
		},
		en: function (id) {
			al(id)
		}
	})
	r = rtr()
	r.oR('dfR', al)
	r.oR('gPo', function (id) {
		al('gPo# ' + id)
	})
	r.oR('gPo', function () {
		alert(3)
	}) //both routes fire!
	r.oR('dlF', al)
	r.oR('ldV', function (rt, ac) {
		al(rt + '_' + ac)
	})
	bbH()  // or Bb.h.s({pushState: true})
}
ROUTENAV = function () {
	z()
	Rt = bbR({
		routes: {
			'po/:id': 'gp',
			'*a': 'dr'
		},
		dr: function (a) {
			al(a)
		},
		gp: function (id) {
			al('Get post ' + id)
		}
	})
	r = Rt()
	bbH()
	bt('hi', function () {
		r.n('po/2', {t: 1})
	}).a()
}
BBVIEW = function () {
	z()
	di('div1').a().w(500).h(500).c('r')
	ListView = bbV({
		el: $('#div1')[0],
		I: function () {
			this.R()
		},
		R: function () {
			//this.$el.append("<ul><li> hello </li></ul>")
			qq(this.$el)("<ul><li> hello </li></ul>")
		}
	})
	v = ListView()
}
BACKSET = function () {
	z()
	d = dva(400)
	Sid = bbM({
		promptColor: function () {
			this.s({
				co: pr('color:')
			})
		}
	})
	sb = Sid()
	sb.on('change:co', function (mod, col) {
		d.c($l(col))
	})
	sb.s({co: 'w'})
	sb.promptColor()
}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
BACKMOD = function () {
	Person = bbM({
		i: function () {
			alert("Welcome")
		}
	})
	person = Person({})
	person.s({name: "Thomas", age: 67})
	z()
	dva(300).id('sb')
	Sidebar = bbM({
		fn: function () {
			return this.s({c: prompt("c?")})
		}
	})
	Sidebar()
			.oC('c',
			function (m, c) {
				qi('sb').c(c)
			})
			.s({c: 'w'}).fn()
}
BACKCOL = function () {
	z()
	baddies = bbC().oA(
			function (s) {
				alert("new baddie: " + s.g("n"))
			})
	baddies.a([{n: "bad1"}, {n: "bad2"}])
}
BACKCOL2 = function () {
	Friend = bbM({
		d: {lame: true}
	})
	f1 = Friend({name: "Thomas", age: 67})
	f2 = Friend({game: 'jigo'})
	f2.s({name: "Rigo", age: 7})
	f2.s('mame', 'hah')
	c = bbC()
	f1 = c.a(f1)
	f2 = c.a(f2)
	c.rm(f1)
}
BACKVAL = function () {
	Person = bbM({
		d: {lame: true},
		i: function () {
			var t = this
			t.on('error',
					function (m, e) {
						alert(3);
						$l(e)
					})
			t.on('change:name',
					function (m, e) {
						alert(3);
						$l(e)
					})
		},
		v: function (at) {
			if (at.name == 'rigo') {
				return "name can't be rigo!"
			}
		}
	})
	p = Person({name: "rigo", age: 7})
	//c=bbC({m:Person})
	//p1=c.a(person1)
	//p2=c.a(person2)
	//c.rm(p1)
}
BACKDEMO = function () {
	z()
	Temp('task', [
		lb('Task: '),
		tx().id('task_desc'),
		bt('add task').id('btn')])
	di('container').a()
	bbR({
		R: {
			'': 'first',
			'first': 'first',
			'second': 'second'
		},
		first: function () {
			$l('first')
		},
		second: function () {
			new Task()
			$l('second')
		}
	})()
	bbH()
	Task = bbV({
		el: $('#container'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.html(temp('task'))
		},
		e: {'click button': 'add'},
		add: function () {
			alert(qiv('task_desc') + ' task added')
		}
	})
}
MOD = function () {
	m = bbM({n: 'j'})
	Donut = bbM({
		d: {
			n: null,
			sparkles: false,
			cream_filled: false
		},
		u: function () {
			var t = this
			return t.id ? '/donuts/' + t.id : '/donuts'
		}
	})
	bostonCream = Donut({
		n: 'Boston Cream',
		cream_filled: true
	})
	bostonCream.s({sprinkles: true})
	bostonCream.S() //save
	Donuts = bbC({
		m: Donut,
		url: "/donuts"
	})
	donuts = Donuts()
	donuts.fetch()// donuts.at(0); -> gets donuts by index.
	// donuts.get(0); -> gets donuts by id.
	// donuts.each(function(d){$l(d.get("name"))})
	// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
	// donuts.map(function(d){return d.get("name")})
	DonutShop = bbM({
		defaults: {n: "Untitled"},
		initialize: function () {
			var t = this
			t.donuts = Donuts()
			t.donuts.url = 'donut_shops/' + t.id + "/donuts"
		}
	})
	donutShop.oA(function (donut) {
		alert("added " + donut.get("name"))
	})
	lemonFilled = donutShop.donuts.a({
		n: "Lemon Filled"
	})
	a = Eve()
	a.o("fun:had", function () {
		alert("wee!")
	});
	a.e("fun:had")//it'll alert "wee!"
}

