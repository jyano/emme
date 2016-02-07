
$.fn.td = function () {
    var td = $.td.apply(null, arguments)
    this.A(td)
    return td
}
$.fn.tds = function () {
    var g = G(arguments)
    var q = this
    _.e(g.A ? g.f : g, function (ch) {
        q.td(ch)
    })
    return q
}
$.td.kids = function () {
    var g = G(arguments)
    var kids = g.A ? g.f : g
    return _.m(kids, function (o) {
        var td = $.td()
        _.e(A(o) ? o : [o], function (ch) {
            td.A(ch)
        })
        return td
    })
}

tdFn = function (fn) {
    return function (ob) {
        var kids = fn(ob)
        return $.td.kids.apply(null, kids)
    }
}


CollView = Bb.V.x({
    I: function () {
        var view = this
        view.model.on('all', function () {
            _.in(.03, function () {
                view.R()
            })
        })

    },
    R: function () {
        var view = this.H('')
        view.model.each(function (model) {
            view.A((new view.subView({model: model})).R().el)
        })
        return view
    }
})

GenView = Bb.V.x({

    G: function (ob) {
        return $.tr().A(J.s(ob)).C('b', 'y')
    },

    R: function () {
        var view = this
        _.e(view.G(view.tJ()), function (el) {
            view.A(el)
        })

        return view
    }
})
GenView.tr = Bb.V.x({
    tagName: 'tr',

    G: function (ob) {
        return $.tr().A(J.s(ob)).C('b', 'y')
    },

    R: function () {
        var view = this
        _.e(tdFn((view.row || view.tr || view.G))(view.J()),
            function (el) {
                view.A(el)
            })
        return view
    }
})


$.ip.K = function (k) {
    return $.ip().K(k)
}