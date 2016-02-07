
lomCss={
    body:{margin:0,padding:0},

    _list:{
        position:'absolute',
        width: '60%',
        height:'100%',
        C:'l'


    },

    _detail:{
        position:'absolute',
        left: '60%',
        width: '40%',
        height:'100%',
        C:'r'





    }
}
templateMain = function(o){return [
    $.dK('list').A('list will go here..'),
    $.dK('detail').A('twot will go here..')

]}

templateList = function(o){

    if(o.twots.length){
        var ul = $.ul()
        _.e(o.twots,function(twot){
            $.li().A(twot.get('text'))
        })

        return ul
    }
    else {return 'no twots found'}
}
templateDetail = function(o){return [
    $.h1(o.text), $.h3(o['from_user'])
]}


twoots = {
    results: [
        'hello', 'helasfdfdsalo', 'helzzlo',
        'hellafsdo', 'rrrhello', 'bbhello', 'ccchello'
    ]
}