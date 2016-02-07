md.View = function (Vw, ob) {
    ob = ob || {}
    ob.model
    ob.m = ob.md = ob.m = this
    return new Vw(ob)
}
md._View = function (ob) {
    return this.View(Bb.V.x(ob))
}
vw.h1 = function (val) {
    var h1 = this.model.h1(val);this.$el.A(h1);return h1
}
vw.d = function (val) {return this.model.d(val).a2(this.$el)}
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

$.fn.View = function (ob) {
    ob = ob || {};
    ob.el = this;
    return Bb.V.x(ob)
}//$.fn.V

Bb.ul =   function (ob) {
    ob = ob || {};
    ob.tagName = 'ul';
    return Bb.V.x(ob)
    // make a bb view with t:ul
}
Bb.li =   function (ob) {
    ob = ob || {};
    ob.tagName = 'li';
    return Bb.V.x(ob)
    // make a bb view with t:ul
}



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