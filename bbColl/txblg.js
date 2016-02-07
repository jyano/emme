MessageView = GenView.tr.extend({

    //   btGroup_: function () {return $.td.A($.bt('Edit Message').K('edit-message'), $.bt('Delete').K('delete-message'), $.bt('Update').K('update-message').none(), $.bt('Cancel').K('cancel').none())},

    row: function (ob) {
        return [

            $.sp(ob.chapter).K('chapter').click(function(){

                chapterView.R(ob)
            }),

            $.sp(ob.topic).K('topic'),

            $.sp(ob.message).K('message'),
            [
                $.bt('Edit').K('edit-message'),
                $.bt('Delete').K('delete-message'),
                $.bt('Update').K('update-message').none(),
                $.bt('Cancel').K('cancel').none()
            ]
        ]
    },

    events: {
        'click .cancel': 'cancel',
        'click .edit-message': 'edit',
        'click .update-message': 'update',
        'click .delete-message': 'delete'
    },

    edit: function () {
        var vw = this
        vw.$('.edit-message').hide();vw.$('.delete-message').hide();
        vw.$('.update-message').show();vw.$('.cancel').show()
        var chapter = vw.$('.chapter').html()
        var topic = vw.$('.topic').html()
        var message = vw.$('.message').html()
        this.$('.chapter').E().A($.ip.K("chapter-update").val(chapter))
        this.$('.topic').E().A($.ip.K("topic-update").val(topic))
        this.$('.message').E().A($.ip.K("message-update").val(message))// use .h( or .H( instead of E().A(
    },
    // user - chapter, title - topic, url - message

    update: function () {
        var md = this.model
        md.set('chapter', $('.chapter-update').v())
        md.set('topic', $('.topic-update').v())
        md.set('message', $('.message-update').v())
        md.save(null, {
            success: function () {
                $l('success updated!')
            }
        })
    },

    cancel: function () {messagesView.R()},

    delete: function () {this.model.destroy()}

})

ChapterView =Bb.V.x({

    //   btGroup_: function () {return $.td.A($.bt('Edit Message').K('edit-message'), $.bt('Delete').K('delete-message'), $.bt('Update').K('update-message').none(), $.bt('Cancel').K('cancel').none())},

    el:'.message-detail',
    R: function (ob) {this.$el.E()
        this.$el.A('chapter view for chapter: ' + ob.chapter)
        return this
    },

    initialize:function(){this.R({chapter:'fdsa'}); return this},

    events: {
        'click .cancel': 'cancel',
        'click .edit-message': 'edit',
        'click .update-message': 'update',
        'click .delete-message': 'delete'
    },

    edit: function () {
        var vw = this
        vw.$('.edit-message').hide();vw.$('.delete-message').hide();
        vw.$('.update-message').show();vw.$('.cancel').show()
        var chapter = vw.$('.chapter').html()
        var topic = vw.$('.topic').html()
        var message = vw.$('.message').html()
        this.$('.chapter').E().A($.ip.K("chapter-update").val(chapter))
        this.$('.topic').E().A($.ip.K("topic-update").val(topic))
        this.$('.message').E().A($.ip.K("message-update").val(message))// use .h( or .H( instead of E().A(
    },
    // user - chapter, title - topic, url - message

    update: function () {
        var md = this.model
        md.set('chapter', $('.chapter-update').v())
        md.set('topic', $('.topic-update').v())
        md.set('message', $('.message-update').v())
        md.save(null, {
            success: function () {
                $l('success updated!')
            }
        })
    },

    cancel: function () {messagesView.R()},

    delete: function () {this.model.destroy()}

})


MessagesView = CollView.extend({subView: MessageView})

TXBLG = function () {$s({$: {M: 20}, bd: {dp: 'fl'}, d: {C: 'r', c: 'b'}})





    $table = $.t().a2(

        $.dK('ct').A( $.h1('Message App') )

    ).W('40%')


    $thead = $.tH().a2($table)

    $thTr = $.tr().a2($thead).A(
        $.th('Chapter'),
        $.th('Topic'),
        $.th('Message'),
        $.th('action')
    )
    $tbody = $.tB().a2($table).K('messages-list')
    $tr = $.tr().a2($thead)

    $tr.tds(
        $.ip.K('chapter-ip'),
        $.ip.K('topic-ip'),
        $.ip.K('message-ip'),
        $.bt('Add', function () {
            messagesCollection.create({
                chapter: $('.chapter-ip').val(),
                topic: $('.topic-ip').V(),
                message: $('.message-ip').V()
            })
        }).K('add-message')
    )


    $.dK('message-detail').W('40%')

    messagesCollection = new Messages

    messagesView = new MessagesView({
        model: messagesCollection,
        el: '.messages-list'
    })

 chapterView = new ChapterView()

    messagesCollection.fetch()
    
}




MessageView=Bb.V.x({

    R:function(){

        this.$el.append(this.make('h1',null,this.model.get('topic')))
        this.$el.append(this.make('h1',null,this.model.get('message')))

    }
})



MSGRTR=MESSAGEROUTER=function(){
    messages = [

        new Bb.M({chapter:'fasd', topic:'afsd',message:'afsd'}),
        new Bb.M({chapter:'fasd', topic:'afsd',message:'afsd'})


    ]
    MessagesView = Bb.V.x({



        tagName:'ul',
        R:function(){
            var view=this
            this.collection.each(function(message){

                view.$el.append(new MessageListView({

                    model:message

                }))


            }, this)}
    })
    MessageListView = Bb.V.x({

        tagName:'li',
        events:{

            click:function(){
                eventAggregator.trigger('message:selected', this.model)
            }
        },

        R:function(){
            this.$el.html(this.model.get('title'))
            return this
        }
    })
    MessageRouter=Bb.R.x({

        routes:{

            contents:'contents',
            'view/:topic':'viewMessage'
        },

        contents:function(){

            $('body').html(new MessagesView({collection:messages}).R().el)
        },
        viewMessage:function(topic){
            var selectedMessage = _(messages).find(function(message){return message.get('topic') == topic})

            $('body').E().A(new MessageView({model:selectedMessage}).R().el)

        }
    })
    router = new MessageRouter()
    eventAggregator = _.x({}, Bb.E)
    eventAggregator.on('message:selected', function(message){
        var urlPath = 'view/'
        Bb.navigate(urlPath, {trigger:true})
    })
    Bb.history.start()
    router.navigate('contents', {trigger:true})
}

DOCS=function(){
    eventAggregator = _.x({}, Bb.E)
    eventAggregator.on('document:selected', function(doc){
        $l('document:selected -> ' + doc.get('title'))
        var urlPath = 'view/'+ doc.get('title')
       router.navigate(urlPath, {trigger:true})
    })

    documents = [
        new Bb.M({  title:'title1', content:'afsfasdbbbbbbbbfsdad'}),
        new Bb.M({  title:'title2', content:'afafsdzzzzzzzzsdafsd'})
    ]

    ContentsView = Bb.View.extend({

        tagName:'ul',
        R:function(){
            var view=this
            _.e(this.collection,function(doc){
               view.$el.A(
                   new DocumentListView({model:doc}).R().el
               )
           }, this)
        return this
        }
    })

    DocumentListView = Bb.V.x({

        initialize:function(){$l('docListV')},
        tagName:'li',
        events:{

            click:function(){
                eventAggregator.trigger('document:selected', this.model)
            }
        },

        R:function(){$l('rendering')
            this.$el.html('affadsfads' + this.model.get('title'))
            return this
        }
    })
    DocumentView = Bb.V.x({R:function(){

        this.$el.A(

            $.h1(this.model.get('title')),
            $.d().A(this.model.get('content'))
        )
        return this
    }})
    DocumentRouter=Bb.R.x({

        routes:{contents:'contents',
            'view/:title':'viewDocument'},

        contents:function(){
             contentsView = new ContentsView({collection:documents})
            $l('gonna add contentsView to body')
            $('body').html(contentsView.R().el)
        },

        viewDocument:function(title){

            $l('viewDocument')
            var selectedDocument = _(documents).find(function(doc){
                return doc.get('title') == title
            })

            $('body').E().A(
                new DocumentView({model:selectedDocument}).R().el)

        }
    })

    router = new DocumentRouter()

    Bb.history.start()
    router.navigate('contents', {trigger:true})

}
