Docs = [
    new Bb.M({  title:'title1', content:'its a long story'}),
    new Bb.M({  title:'title2', content:'longer story....................'})
]
vent = _.x({}, Bb.E)

ContentsView = Bb.ul({
    R:function(){return this.each(function(doc){
        this.A($MdViewEl(DocListView, doc))})}})


DocListView = Bb.li({
    events:{click:function(){vent.trigger('doc:selected', this.model)}},
    R:function(){return this.html( this.get('title'))}
})

DocView = Bb.V.x({R:function(){
    this.$el.A(
        $.sp('back to docs <-').$(function(){
            rtr.N('/contents')
        }),
        $.h1(this.get('title')),
        $.d().A(this.get('content')))
    return this
}})

DocRtr=Bb.R.x({
    routes:{contents:'contents', 'view/:title':'viewDoc'},
    contents:function(){$('body').html($ClView(  ContentsView, Docs).R().el)},
    viewDoc:function(title){
        var md =  _(Docs).find(function(doc){return doc.get('title') == title})
        $('body').E($MdViewEl(DocView,md))
    }
})




DOCS=function(){

    vent.on('doc:selected', function(doc){
        rtr.N('view/'+ doc.get('title'))

    })


    Bb.h.start()

    rtr = new DocRtr()

    rtr.N('contents' )
}
Docs = [
    new Bb.M({  title:'title1', content:'its a long story'}),
    new Bb.M({  title:'title2', content:'longer story....................'})
]
vent = _.x({}, Bb.E)

ContentsView = Bb.ul({
    R:function(){
        return this.each(function(doc){

            this.A(
                $MdViewEl(DocListView, doc)
            )
        })}})


DocListView = Bb.li({
    events:{click:function(){vent.trigger('doc:selected', this.model)}},
    R:function(){return this.html( this.get('title'))}
})

DocView = Bb.V.x({R:function(){
    this.$el.A(
        $.sp('back to docs <-').$(function(){
            rtr.N('/contents')
        }),
        $.h1(this.get('title')),
        $.d().A(this.get('content')))
    return this
}})

DocRtr=Bb.R.x({
    routes:{contents:'contents', 'view/:title':'viewDoc'},
    contents:function(){$('body').html($ClView(  ContentsView, Docs).R().el)},
    viewDoc:function(title){
        var md =  _(Docs).find(function(doc){return doc.get('title') == title})
        $('body').E($MdViewEl(DocView,md))
    }
})




DOCS=function(){

    vent.on('doc:selected', function(doc){rtr.N(  'view/'+ doc.get('title'))})


    Bb.h.start()

    rtr = new DocRtr()

    rtr.N('contents' )
}