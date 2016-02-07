
Twit = Bb.M.x({idAttribute: "_id",
    df: {un: 'fred', sts: 'sleeping'}})
Twits = TwitsList = Bb.C.x({url: '/twits', model: Twit})


TwitView = Bb.V.x({

    T: 'p',

    E: {
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

    H:function(ob){
        return [
            $.sp().A($.a('[details]').K('details'), $.a('[edit]').K('edit'), $.a('[delete]').K('delete')),
            $.sp(ob.un).K('un'),
            ': ',
            $.sp(ob.sts).K('sts')
        ]
    },


    R: function () {
        this.$el.E().A( this.H( this.tJ()) )
        return this
    },

    close: function () {
        var vw = this
        vw.model.set('sts', vw.$('.sts').T())
        vw.model.save();
        vw.$('.sts').ed(0)
    }
})

TwitsView = Bb.V.x({
    I: function () {
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
            vw.A(twitV.R().el)
        })
    }
})

BB1 = TWIT = function () {

    $s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})

    $.f([

        $.lb('username'), $.ip().at('name', 'un').id('un'),
        $.lb('status'), $.ip().at('name', 'sts').id('sts'),
        $.bt('post', function (ev) {
            ev.preventDefault()
            twits.create({un: $('#un').v(), sts: $('#sts').v()})
        })

    ])





    new TwitsView({

        collection: twits = new TwitsList()

    }).A()


    //
}
