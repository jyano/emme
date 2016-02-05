
Bb.M.ob = function (ob) {
    ob = ob || {} // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s} //o=o||{}
    ob.initialize = ob.initialize || ob.I || ob.i || function () {}
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
                    return this.g(a)
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
    ob.events = ob.events ||ob.E || ob.ev || ob.e
    ob.id = D(ob.id) ? ob.id : ob.x
    ob.idAttribute = ob.idAttribute || ob._id
    ob.model = ob.model || ob.md || ob.m
    ob.collection = ob.collection || ob.cl || ob.c
    ob.render = ob.render || ob.R || ob.rr || ob.rn || ob.r
    ob.tagName = ob.tagName || ob.tn || ob.t
    ob.validate = ob.validate || ob.v
    return ob
}

M$ = Bb.M.x = function (ob,ob2) {
    var Md= Bb.M._x(Bb.M.ob(ob))
    if(O(ob2)){return new Md(Bb.M.ob(ob2))}
    return Md
}

$m = function (ob, ob2) {
    $l('$m')
    return   M$(ob,ob2)}
_m = $$m = function () {$l('_m or $$m')
    return new M$({}, Bb.M.ob(ob))}
//md.h1 = function (val) {;var h1 = $.h1(this.get(val));return h1}
//md.sp = function (val) {return $.sp().A(this.get(val))}
//md.d = function (val) {return $.d().A(this.get(val))}
md.g = md.get;

md.sv = md.S = md.save
md.at = function () {return this.attributes}
//md.at = md.attributes

hasChanged=md.hC = function (at) {
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

 md.tJ = md.J = md.j =function () {
    return this.toJSON()
}
stringifiedJson=md.tJS =md.tS = md.sJ = md.jS = function () {return _.jS(this.tJ())}
md.$l = md.lJ = function () {return $l(this.tJS())}
md.l = function () {
    this.$l()
    return this
}

md.ls1 = md.l1 = md.lT1 = md.lTo1 = function (a, b, c, d) {
    return this.listenToOnce(a, b, c, d)
}
md.ls2 = md.l2 = md.lT = md.lTo = function (a, b, c, d) {
    return this.listenTo(a, b, c, d)
}

md.s = md._s = function (a, b, c) {
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
    return md}



$MdDf = function (ob) {return Bb.M.x({df: ob})}
$MdView =$ModelView = function(View, md){return new View({model: md})}
$MdViewEl =function(View, md){return new View({model: md}).R().el}



alertt=md.a2 = function (a) {alert('md.a2')
    if (!this.q) {return this}
    return this.q.a2(a)
}