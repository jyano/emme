
ChapterListView=ListView = Bb.li({
    events:{click:function(){
        vent.trigger('chapter:selected', this.model)}},
    R:function(){return this.html( this.get('title'))}
})


ChaptersCollectionView =ContentsView =Bb.ul({
    R:function(){
        return this.each(function(doc){
            this.A($MdViewEl(ListView, doc))
        })}
})

ChapterItemView=ItemView = Bb.V.x({R:function(){
    this.$el.A(
        $.sp('back to chapters <-').$(function(){
            rtr.N('/contents')
        }),
        $.h1(this.get('title')),
        $.d().A(this.get('content')))
    return this
}})






CHAPS=function(){

    Bb.h.start()

    Rtr=Bb.R.x({

        routes:{contents:'contents', 'view/:title':'viewChapter'},


        contents:function(){
            $('body').html(
                $ClViewEl(  ContentsView, Docs)
            )
        },

        viewChapter: function(title){
            $('body').E(
                $MdViewEl(ItemView,_(Docs).find(function(doc){
                    return doc.get('title') == title
                })))
        }
    })

    rtr = new Rtr()
    rtr.N('contents' )
    vent.on('chapter:selected', function(doc){
        rtr.N('view/'+ doc.get('title'))
    })

}


Messages = [

    new Bb.M({
        chapter:'javascript',
        topic:'topic1',
        message:'its a long story'
    }),

    new Bb.M({
        chapter:'topic2',
        topic:'fun sex',
        message:'longer story....................'
    })
]
