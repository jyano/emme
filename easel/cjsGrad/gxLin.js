gx.lGF = function () {
	var gx = this, g = G(arguments)
	
	g[0] = colArrParse(g[0])
	 if(A(g[2])){
		 g = [g[0],g[1]].concat(g[2])}
	return gx.bLGF.apply(gx, g)
}


GXLIN= function(){
	
	grad()
	
	g.bLGF(['red','blue'],[0,1],
			0,0,400,500).fr(0,0,400,400) 
	 
}



GLGR =  function () {
	setup()
	
	h = s.h(40, 10, 'b', 16).drag()
 	
	h.graphics.lGF(
			['u', 'r'] , [0,1], [0, 0, 400, 400]
	)
			
		    .dr(0, 0, 400, 400)

	a = [1,2,3]
	b  = [4,5,6]
} 

function lgParse(){var g=G(arguments),o
	
	
}
function stopParse(num){

	num= N(num,2)
	
	
	
}
function colArrParse(arr){
	return _.m(arr, function(col){
		return oO('c', col)
	})
}