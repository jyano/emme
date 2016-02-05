TXTA=function(){

    $('<textarea>').A().C('w').W(400)
}

// pw = Jason73
TXA =   function () {
    $l('text area pearls of wisdom')
    $.h1('text area pearls of wisdom')

     Twit = Bb.M.x({
        idAttribute: "_id",
        //url: '/twits',
        df: {un: 'fred', sts: 'sleeping'}
    })
    Twits = TwitsList = Bb.C.x({
        url: '/twits',
        model: Twit
    })

    $s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
    $.f([//$.lb('topic'),
        $.ip().at('name', 'un').id('un'),
        $.br(),
        //$.lb('twit'),
        $('<textarea>').H(100).at('name', 'sts').id('sts'),
        $.bt('post', function (ev) {
            ev.preventDefault()
            twits.create({un: $('#un').v(), sts: $('#sts').v()})
        })])
    TwitView = Bb.V.x({
        tagName: 'p',
        events: {
            'click .edit': function (ev) {
                $.pD(ev);
                this.$('.sts').edFoc()
            },
            'click .delete': function (ev) {
                $.pD(ev);
                this.model.destroy()
            },
            'blur .sts': 'close',
            'keypress .sts': function (ev) {
                if ((ev.which) == 13) {
                    this.close()
                }
            }
        },
        close: function () {
            var vw = this
            vw.model.set('sts', vw.$('.sts').T())
            vw.model.save();
            vw.$('.sts').ed(0)
        },
        R: function () {
            this.$el.E().A(
                $.sp().A($.a('[details]').K('details'),
                    $.a('[edit]').K('edit'),
                    $.a('[delete]').K('delete')),
                $.sp(this.model.get('un')).K('un'), ': ',
                $.sp(this.model.get('sts')).K('sts'))
            return this
        }
    })
    TwitsView = Bb.V.x({
        initialize: function () {
            var vw = this
            this.collection.on('all', function () {
                vw.R()
            })
            this.collection.fetch()
        },
        R: function () {
            var vw = this
            vw.$el.E()
            vw.collection.each(function (md) {
                var twitV = new TwitView({model: md})
                vw.$el.A(twitV.R().el)
            })
        }
    })
    twits = new TwitsList()
    twitsV = new TwitsView({el: $.d(), collection: twits})
    //Bb.M.prototype.idAttribute = '_id'
}
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

Message=    Bb.M.x({

    idAttribute: "_id",
    D: {

        book:'',
        chapter: '',
        topic: '',
        message: ''
    }
})


Messages = Bb.C.x({
    model: Message, url: '/api/messages'
})
