Books = [
    new Bb.M({
        title:'javascript'
    }),
    new Bb.M({
        title:'java'
    })
]
Topics = [
    {topic:'closure', book:'javascript'},
    {topic:'loops', book:'javascript'},
    {topic:'recursion', book:'java'}
]
Messages=  [
    new Bb.M({
        book:'javascript',
        topic:'loops',
        message:'loopy doopy'
    }) ,
    new Bb.M({
        book:'javascript',
        topic:'loops',
        message:'its a long loops'
    }),
    new Bb.M({
        book:'javascript',
        topic:'closure',
        message:'its a long closure'
    })
]

vent = _.x({}, Bb.E)

CollectionView=  Bb.ul({
    R:function(){return this.each(function(book){
        this.A($MdViewEl( ListView, book))
    })}
})

ListView = Bb.li({

    events:{click:function(){vent.trigger('book:selected', this.model)}},
    R:function(){return this.html( this.g('title'))}
})


BookView = Bb.V.x({R:function(){
        var vw =this
        var title = vw.g('title')

      this.A($.sp('back to all books <-').$(function(){rtr.N('/books')}),
          $.h1( title + ' book topics:' ))


        _.e(Topics, function(topic){
            if(title == topic.book) {
                var bookTopic =topic.topic
                vw.A($.h4(bookTopic).$(function(){rtr.N('/messages/'+title+'/'+ bookTopic)
                }))}


        })

return this
}})

TopicView = Bb.V.x({
    R:function(){
        var vw =this
        var topic = vw.g('topic')
        var book = vw.g('book')
        this.A(
            $.sp('back to all books <-').$(function(){rtr.N('/books')}),
            $.sp('back to book: '+book+ ' <-').$(function(){rtr.N('/books/book#'+book)}),
            $.h1( title + ' book topics:' ))
        _.e(Topics, function(topic){
            if(title == topic.book) {
                var bookTopic =topic.topic
                vw.A($.h4(bookTopic).$(function(){rtr.N('/messages/'+title+'/'+ bookTopic)
                }))}})
        return this
    }
})

BookRtr=Bb.R.x({
    routes: {


        books:'books',
        'book/:title':'viewBook'

    },

    books:function(){$l('books')
        $.E('books:', $ClViewEl(CollectionView, Books))
    },

    viewBook:function(title){
        $.H($MdViewEl(BookView, _(Books).find(function(book){
            return book.g('title') == title
        })))
    }
})

BOOKS=function(){
    vent.on('book:selected', function(item){rtr.N('book/'+ item.g('title'))})
    Bb.h.start()
    rtr = new   BookRtr()
    rtr.N('books')
}