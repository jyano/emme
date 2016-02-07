//https://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/


MyView = Bb.V.x({
    I: function(){this.model.on("change", this.R, this)},
    R: function(){},
    onClose: function(){this.model.off("change", this.R)}
})


MyRouter = Bb.R.x({
    I: function(o){this.appView = o.appView},
    R: {"": "home", "post/:id": "showPost"},
    home: function(){
        this.appView.showView( new HomeView() )},
    showPost: function(id){
        this.appView.showView(  new PostView({model:  posts.get(id)}))}
})

APPVIEW=function(){


    appView = new AppView()

    rtr = new MyRouter({appView: appView})
}