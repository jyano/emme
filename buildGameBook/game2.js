BubbleShoot={}
Bubble = function(sprite){
    var that=this
    this.getSprite = function(){return sprite}
}
Bubble.create=function(){
    var sprite = $(document.createElement('div'))
    sprite.K('bubble bubble_0')
    return new Bubble(sprite)
}

BubbleShoot.Bubble = Bubble
