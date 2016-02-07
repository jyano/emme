//https://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/


Bb.V.prototype.closeView = function (v) {var view=this
    if ( F(view.close)) {view.close()}
}


Bb.V.prototype.openView = function () {var view=this
    view.R();
    $(el).html(view.el);
    if (F(view.onShow)) {view.onShow()}
}
  el = "#mainregion";
RegionManager = {};



RegionManager.show = function (view) {
    closeView(currentView);
    currentView = view;
    openView(currentView)
}
