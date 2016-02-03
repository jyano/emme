 BGB=function(){

     $s({

         bd: {M:0, C:'r'},

         $page:{

             position:'absolute',
             left:0,top:0,
             width:1000,
             height:738,
             C:'e',
             c:'f'
         },

         '#topbar':{
             position:'absolute',
             left:0,
             top:0,
             width:1000,
             height:70,
             C:'b',
             c:'r'

         },

         $game:{
             position:'absolute',
             left:0,top:70,
             width:1000,
             height:620,
             C:'o',
             c:'x',
             clip:'auto',
             overflow:'hidden'

         },


         '#footerbar':{
             position:'absolute',
             left:0,top:690,
             width:1000,height:48,
             C:'y',c:'g'
         },
         _dialog:{},
         '.dialog h2':{},
         '.butstartgame':{

             position:'absolute',left:100,top:360,height:60,width:200,C:'o',cursor:'pointer','border-radius': 15,
             border:'2px solid green','font-size': 28, 'line-height':60,'font-weight':'bold','text-shadow':'0px 1px 1px purple'


         },
     '.butstartgame:hover':{C:'y'},
         '#startgame':{display:'block'},

     })




     $.d().id('page').A(

         $.d().id('topbar').A('top bar'),
         $.d().id('game').A('game'),
         $.d().id('footerbar').A('footer bar'),
         $.d().id('startgame').K('dialog').A(
             $.d().id('startgamemessage').A($.h2('Start new game')),
             $.d().K('butstartgame button').A('New game')
         )
     )



    // game  = new BubbleShoot.Game()
     //game.init()
 }

 BubbleShoot={}
 BubbleShoot.Game=  function(){

     this.init=function(){$('.but_start_game').bind('click', startGame)}
     var startGame=function(){$('.but_start_game').unbind('click')
     BubbleShoot.ui.hideDialog()
     }
 }
 ui={init:function(){},
 hideDialog:function(){$('.dialog').fadeOut(300)}}
 BubbleShoot.ui=ui
 $('.butstartbgame').unbind('click')
 BubbleShoot.ui.hideDialog()
