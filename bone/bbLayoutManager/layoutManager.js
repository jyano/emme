

twitter= {

    module:function(){
        var modules={}
        return function(name){
            if(modules[name]){return modules[name]}
        }
        return modules[name]={views:{}}
    }(),

    app: _.extend({},Bb.Events)
}
//Twot module!
function Twot(Twot){

    Twot.Collection = Bb.C.x({

        url:function(){return twoots},
        parse: function(data){return data.results}

    })

    Twot.Views.List=Bb.V.x({

        template: '#list',

        events:{'click li':'update'},

        update:function(ev){

            var index = $(ev.target).index()
            var model = this.collection.at(index)
            this.trigger('update', model)
        },

        serialize:function(){return {twots: this.collection}}
    })

    Twot.Views.Detail =Bb.LayoutManager.View.extend({template: '#detail',

        serialize:function(){return {twot:this.model}}
    })

}


LAYOUT_MANAGER= LOM=function(){


    Twot(twitter.module('twot'))
    app = twitter.app
    Twot = twitter.module('twot')

    Router = Bb.R.x({
        routes:{'':index},
        index:function(){

            var main = new Bb.LayoutManger({
                name:'#main'

            })
            var twots = new Twot.Collection()
            twots.fetch().success(function(){
                var list = main.views['.list']=new Twot.Views.List({collection:twots})
                var detail = main.views['.detail'] = new Twot.Views.Detail({model:twots.at(0)})

                list.bind('update', function(model){
                    detail.model = model
                    detail.render(main)

                })

                main.render(function(contents){

                    $('.container').html(contents)
                })


            })

        }
    })

    app.router = new Router()
    Bb.history.start()

}

LOM=function(){$.h1('LayoutManger examples')

    $s(lomCss)
    Bb.Layout.configure({
        // Put options here.
    })

    html = templateMain()


}
