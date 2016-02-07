//http://mikefowler.me/2013/11/18/page-transitions-in-backbone/

app.Router = Bb.R.x({

    R: {
        '': 'home',
        'activity': 'activity'

    },

    home: function () {app.instance.showView(new app.Views.Home())},
    activity: function () {app.instance.showView( new app.Views.Activity())}

})

 

app.Views.App =Bb.V.x({
    
    transitionIn: function (fn) {var view = this
    _.delay(function () {
        view.$el.K('is-visible').one('transitionend', function () {
            if (F(fn)) {fn()}})}, 20)

    },
    
    transitionOut: function (fn) {var view = this;
        view.$el.rmK('is-visible').one('transitionend', function () {
            if (F(fn)) {fn()}})
    },

    showPage: function (view) {
        var prev  = this.curPage || null;
        var next = view
        if (prev) {prev.transitionOut(function () {prev.rm()})}
        next.R({ page: true });
        this.$el.A( next.$el );
        next.transitionIn();
        this.curPage = next
    },


    R: function (o) {o = o|| {}
        if (o.page === true) {this.$el.K('page')}
        return this
    }
})


PAGETRAN  = function(){
    $s({
         _page: {
         position: 'absolute',
         top: 0, right: 0, bottom: 0, left: 0,
         transition: 'transition 0.5s ease',
         transform: 'translate3d(100%, 0, 0)'
         },

         '.page.is-visible': {transform:'translate3d(0, 0, 0)'}

    })
}