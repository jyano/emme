
Twit = Bb.M.x({
    idAttribute: "_id",
    urlRoot: '/twits',
    df: {un: 'fred',
        sts: 'sleeping'}
})


Twits = TwitsList = Bb.C.x({
    url: '/twits',
    model: Twit
})


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

        //'click .details': 'details',
        'blur .sts': 'close',

        'keypress .sts': function (ev) {
            if ((ev.which) == 13) {
                this.close()
            }
        },

    },

    H:function(ob){
        return [
            $.sp().A(

                $.a('[details]', '#twits/'+ ob._id).K('details'),

                $.a('[edit]').K('edit'),
                $.a('[delete]').K('delete')
            ),

            $.sp(ob.un).K('un'),
            ': ',
            $.sp(ob.sts).K('sts')
        ]
    },


    R: function () {
        this.$el.E().A( this.H( this.tJ()) )
        return this
    },

    details:function(ev){
 ev.preventDefault()
    rtr.navigate()
    },


    close: function () {
        var vw = this
        vw.model.set('sts', vw.$('.sts').T())
        vw.model.save();
        vw.$('.sts').ed(0)
    }
})

TwitsView = TwitsIndexView= Bb.V.x({
    el:'#twitsList',
    I: function () {
        var vw = this
        this.collection.on('all', function () {
            vw.R()
        })
        this.collection.fetch()
    },
    hide:function(){
        this.$el.hide()
        return this
    },
    show:function(md){
        this.$el.show()
        return this
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
    $s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'},

        user:{'text-decoration':'underline'},
        $details: {
            display:'none'//, position:'absolute', w:'100%', h:'100%', C:'y', top:0, bottom:0
        }
    })

    $.f([
        $.lb('username'), $.ip().at('name', 'un').id('un'),
        $.lb('status'), $.ip().at('name', 'sts').id('sts'),
        $.bt('post', function (ev) {
            ev.preventDefault()
            twits.create({un: $('#un').v(), sts: $('#sts').v()})
        })
    ])

        $.d().id('twitsList').C('b')

        $.d().id('details').C('r').A('afdsfasd')


    twitsView= new TwitsView({
        collection: twits = new TwitsList()
    })
    twitDetailsView =new TwitDetailsView()
    Rtr = new TwitRouter()
    Bb.history.start({//pushState:true
    })

}

TwitRouter = Bb.R.x({

    routes:{
        '':'index',
        'twits/:id':'show'
    },

    index:function(){
        $l('index')
        twitDetailsView.hide()
        twitsView.show()
    },

    show:function(id){


        $l('sho2!!!')
        var model = new Twit({_id: id})
        model.fetch({
            success:function(model){  $l('success')
                m = model
                twitDetailsView.show(model)
                twitsView.hide()

            },
            error:function(){$l('error')}
        })
    }
})

TwitDetailsView=Bb.V.x({

    el: '#details',

    events: {'click .back':'back'},

    back:function(ev){
        $l('back')
        ev.preventDefault()
        rtr.navigate('', {trigger:true})
    },

    hide:function(){
        this.$el.hide()
        return this
    },
    show:function(md){

        this.model=md
        this.R()
        this.$el.show()
        return this
    },

    H:function(o){
        var kids = [
            $.h2(o.sts),
            $.h4(o.un),
            $.bt('back', function(ev){
                $l('back')
                ev.preventDefault()
                rtr.navigate('', {trigger:true})
            }).K('back')
        ]
        return kids
    },

    R:function(){
        $l('details render')
        ob=this.model.tJ()
        h= this.H(ob)
        this.$el.E().html(h)
        return this
    }
})