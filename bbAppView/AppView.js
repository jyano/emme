Bb.V.prototype.close =Bb.V.prototype.closeView =  function(){
    this.remove();
    this.unbind();
    if (this.onClose){this.onClose()}
    return this
}

Bb.V.prototype.openView = function () {var view=this
    view.R();
    $(el).html(view.el);
    if (F(view.onShow)) {view.onShow()}
}

RegionView =Bb.V.x({
    el: '#main',
    showView:function(vw) {
        if (this.curView){this.curView.close()}
        this.curView = vw
        //this.openView(currentView)
       this.$el.html(this.curView.R().el)
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
    },

    transitionIn: function (fn) {var view = this
        _.delay(function () {
            view.$el.K('is-visible').one('transitionend', function () {
                if (F(fn)) {fn()}})}, 20)
    },

    transitionOut: function (fn) {var view = this;
        view.$el.rmK('is-visible').one('transitionend', function () {
            if (F(fn)) {fn()}})
    }
})
