
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
    ob.tagName = ob.tagName || ob.tn || ob.T || ob.t
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


vw.A= vw.add =function(){


    this.$el.A.apply(this.$el, arguments)

    return this

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

vw.each =vw.cl = vw.eCl = vw.e = function (fn) {
    var cl = (this.collection || this.cl || this.model || this.md)
    if (U(fn)) {
        return cl
    }
    fn = _.b(fn, this)
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
vw.rEl = function () {return this.R().el}
vw.renCl = function (Vw) {
    Bb.el = function (Vw, md) {
        return new Vw({model: md}).el
    }
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
vw.html=vw.H = vw.h = function (a) {
    if (U(a)) {
        return this.$el.html()
    }
    this.$el.html(a);
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
onCHangeIthink=vw.oC = function () {
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


Bb.tr = Bb.trV = Bb.trVw = function (ob) {
    ob = _.x(ob || {}, {tagName: 'tr'})
    var view = Bb.V.x(ob)
    return view
}

