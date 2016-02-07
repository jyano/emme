
show = function(id){
    var detailed = new Bb.LayoutManager({name:detailed})
    this.fetchTwots(function(twots){var detail = detailed.views['.detailed'] = new Twot.Views.Detail({
        model:twots.get(id)
    })

    })

}