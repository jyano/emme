Bb.H = Bb.History
Bb.h = Bb.history
Bb.h.tr = Bb.h.trigger
Bb.h.s = Bb.h.start
rtrPt()
function rtrPt() {
    rtr = Bb.R.prototype
    rtr.n = function (url, op) {
        this.navigate(url, op);
        return this
    }
    rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
        return this.navigate(url, {trigger: true})
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
    rtr.n = function(){
        this.navigate.apply(this, arguments)
        return this
    }
    rtr.N=function(rt){
        this.navigate(rt, {trigger:true})
        return this
    }
}
$start = $route = function () {
    _$start = function () {
        Bb.h.s()
    }
    Bb.h.s({pushState: true})
    return new Rtr
}
$Rt = function (o, root, ob) {
    o.routes = o.routes || o.rts || o.rt || o.R
    if(!o.routes){o = {routes:o}}
    var Rtr=Bb.R.x(o)
    var rtr = new Rtr(ob)
    Bb.h.s({
        root: root,
        pushState: true
    })
    return rtr
}
$RoApp = function (name, CALLBACK) {
    window[name] = function () {
        name = name.toUpperCase()
        $.d('B').W('auto').H(8).A('this is RoApp: ').fS(75).col('r')
        $.sp(name).fS(100).C('o', 'x')
        $.hr()
        d = $.d().id('ct').fS(40)
        CALLBACK()
        Bb.h.s({
            pushState: true,
            root: "/box/" + name + "/"
        })
    }
}
ROUT = function () {

    $s({_A: {C: 'y', c: 'z'}})
    //
    ct = $.d()
    //


    ct.A($.sp('home').K('home-nav'))
    $.sp('home').id('home-pg').K('pg').fS(50)
    $('.home-nav').$(function () {rtr.N('home') })


    ct.A($.sp('about').K('about-nav'));
    $.sp('about').id('about-pg').K('pg').fS(50)
    $('.about-nav').$(function () {rtr.N('about')})



    $Rt({
        home: function () {clear();$('.home-nav').K('A'); $('#home-pg').show()},
        about:function () {clear();$('.about-nav').K('A');$('#about-pg').show()}
    }, '/box/rout')


    function clear(){
        $('.pg').hide()
        $('*').rmK('A')
    }


}
old=function(){
    $TrRtrFn = notUsed = function (rtr, fn) {
        //rtr =	$Trg$( new( R$R( ob ) ), 'contents')
        return function (md) {
            $Trg(rtr, fn(md))
        }
    }
    R$R = $rR = function (fn) {

    xxx$R = $Rtr = R$ = function (ob) {
        ob = ob || {}
        if (O(ob.R)) {ob.routes = ob.R}
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
    return R$({R: fn})
}
}
function handleAncs() {
    knockAncs = function (ev) {
        ev.preventDefault()
        rtr.n($(this).attr('href',
            {trigger: true}))
    }

    anchorClickBlocker = function () {

//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
        $('body').on('click', 'a[href^="/"]', function (ev) {
            ev.preventDefault()
            r.n($(this).attr('href'))
            // r.n($(this).attr('href', {trigger: true}))
        })
    }
}
handleAncs()
//just some article about routers
// http://www.codeproject.com/Articles/803073/BackBone-Tutorial-Part-Understanding-Backbone-js-R
