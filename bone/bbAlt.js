
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
$Df = function (ob) {
    return $M({df: ob})
}
BB12 = PVR = PER = function () {
    pV = _V({
        t: 'li', k: 'per',
        r: function () {this.$el.A('n').A()
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
//
BB15 = XCHANGECOL = PROMPTCOLOR = function () {

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
_C = _Cl = $$C = function (ob) {
    var Cl = C$(ob)
    return function (ob) {
        ob = ob || {}
        var cl
        ob.collection = ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        cl = new Cl(ob) //if(q){cl.a2(q)}
        cl.q = cl.$el
        cl.a2 = function (a) {
            return cl.q.a2(a)
        }
        cl.g = function (a) {
            if (a) {
                return cl.model.get(a)
            }
        }
        //cl.A=function(ob){
        //
        //var g=G(arguments)
        //if(S(ob)){ob = cl.g(ob)}
        //if(ob){this.$el.A(ob)}
        //if(U(ob) || g.p){ this.$el.A() }
        //return this.$el
        //}
        ////_.b(ob._i,cl) (op)
        //E$(cl)
        // $.ext(bb.Collection)
        return cl
    }
}

C_ = Cl_ = function (ob) {
    return _C()(ob)
}
$C = $Cl = function (ob, ob2) {
    return _C(ob)(ob2)
}
BB13 = ACE = ADDCHICKEVENT = function () {
    $s({i: {w: 50, h: 50}})

    _.x({}, Bb.E).on('yo', function () {
        var g = G(arguments)
        $.sp(g).fS(50)
    }).trigger('yo', 'a', 'b', 'c')
    Cl = $$C({})
    cl = Cl().oA(function (s) {
        $.A($.h1("new!!!!!! " + s.g('n')))
        $.i('chicks').A()
    }).A([{n: 'g1'}, {n: 'g2'}])
    ev = _.x({}, Bb.E)
    ev.b("fun:had", function () {
        $.A($.h1("yaaaaaaaaaaaa!!!!!! "))
        $.i('guy').A()
    })// bind? on?
    ev.tr("fun:had")//trigger  //it'll alert "wee!"
}
BB14 = COLLECTIONONADD = CLA = CLONADD = function () {
    $.i('chicks').A()
    Cl = _C({})
    cl = Cl().oA(function (s) {
        $l("new!!!!!! " + s.g('n'))
    }).A([{n: 'g1'}, {n: 'g2'}])
}
BB11 = LEN = function () {
    BB17 = COLLECTIONLENGTH = TDS = CRM = CLLEN = function () {
        Td = _M({df: {tt: '', completed: false}});
        Md = _M({
            d: {tt: '', completed: false}
        })
        Cl = _C({md: Md})
        cl = Cl([Td({tt: 'Read', id: 2})]);
        $Ms('len 1?: ' + cl.length)
        TdsCl = _C({md: Td})
        tds = TdsCl([
            a = Td({tt: 'Jam'}),
            b = Td({tt: 'Chin'})
        ])
        $Ms('len 2?: ' + tds.length)
        tds.A(c = Td({tt: 'Disn'}))
        $Ms('len 3?: ' + tds.length)
        tds.rm([a, b]);
        $Ms('len 1?: ' + tds.length)
        tds.rm(c);
        $Ms('len 0?: ' + tds.length)
    }
    $Ms('CLLEN')
    Td = $$M({df: {tt: '', completed: false}});
    Md = $$M({
        d: {tt: '', completed: false}
    })
    Cl = $$C({
        md: Md
    })
    cl = Cl([Td({tt: 'Read', id: 2})]);
    $Ms('len 1?: ' + cl.length)
    TdsCl = $$C({md: Td})
    tds = TdsCl([
        a = Td({tt: 'Jam'}),
        b = Td({tt: 'Chin'})
    ])
    $Ms('len 2?: ' + tds.length)
    tds.A(c = Td({tt: 'Disn'}))
    $Ms('len 3?: ' + tds.length)
    tds.rm([a, b]);
    $Ms('len 1?: ' + tds.length)
    tds.rm(c);
    $Ms('len 0?: ' + tds.length)
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