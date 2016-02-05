Items=  [

    new Bb.M({
        title:' javascript',
        content:'its a long story',
        parent:null
    }),

    new Bb.M({
        title:'  fun',
        content:'longer story....................',
        parent:null
    })
]

vent = _.x({}, Bb.E)

CollectionView=  Bb.ul({
    R:function(){return this.each(function(doc){
        this.A($MdViewEl( ListView, doc))
    })}
})
ListView = Bb.li({
    events:{click:function(){vent.trigger('item:selected', this.model)}},
    R:function(){return this.html( this.get('title'))}
})
ItemView = Bb.V.x({R:function(){
    this.$el.A(
        $.sp('back to docs <-').$(function(){
            rtr.N('/items')
        }),
        $.h1(this.get('title')),
        $.d().A(this.get('content')))
    return this
}})

Rtr=Bb.R.x({
    routes: {items:'items', 'view/:title':'viewItem'},
    items:function(){
        $.E('items:',

            $ClViewEl(CollectionView, Items))
    },

    viewItem:function(title){
        $.H($MdViewEl(ItemView, _(Items).find(function(item){
            return item.g('title') == title
        })))
    }
})

ITEMS=function(){
    vent.on('item:selected', function(item){rtr.N('view/'+ item.g('title'))})
    Bb.h.start()
    rtr = new  Rtr()
    rtr.N('items')
}