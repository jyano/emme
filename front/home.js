LoggedInNavView = Bb.V.x({
	
	initialize: function () {
		$l('loggedinnavview!')
		this.render()
		n= 0
		$.get('/user/session', function (sess) {
			var ss = sess || {}
			$l('ss len: ' + _.size(ss))
			_.e(ss, function (v, k) {
			
				
					$l(n +' #----' + k + ' ===== ' + J.s(v))
				n++
			})
			

			$Im('me', function(){
			div= $.sp().C('b').pad(20).dgb()
				$(this).C('r').a2( div)
			})
			
			
		 
		})
		
		return this
	},
	
	el: '#loggedInDiv',
	
	render: function () {
		$.get('/user/session', function (sess) {
			var ss = sess || {}
			
			
			$l('ss len: ' + _.size(ss) )
			_.e(ss, function(v,k){
				
				$l(k + ', ' + v)
			})
			
			loggedInDiv.E(
					ss.un ?
							IsLoggedInTempl(ss) :
							NotLoggedInTempl()
			)
		})
	}
})


function setCss(){
	$s({
		$: {M: 2, P: 2, fS: 22, tA: 'c'},
		bd: {
			C: 'R',
			dp: 'fl',
			dir: 'c',
			jC: 'center',
			alI: 'c',
			wr: 'wrap'
		},
		d: {P: 10, M: 10},
		$content: {
			display: 'flex',
			'flex-direction': 'column',
			'justify-contents': 'center'
		},
		
		_flex: {
			dp: 'fl'
		}
	})}


HOME = function () {setCss()
	
	content = $.d().id('content')
 

	loggedInDiv = $.d().C('y').H(100).A('???').id('loggedInDiv')
	
	view = new LoggedInNavView()
	
	blue=$.d().C('b').A($.f().attr({
				enctype: 'multipart/form-data',
				action: '/imgFile'}).A(
					$.ip().ty('file').name('fieldname'), $.ip().name('title'),
					$.bt('submit form', function (e) {//e.preventDefault()
					})))
	
	
	
	
	y = 80
	n = 0
	pics = $.d()
	$.get('/myFileImgs', function (p) {
		_.e(p, function (p) {$l('pic: ' + n++)
	 
			
			
			$.pic(p).a2(pics)//.$(function(){Cuttable(p.dU)})
		})
	
	})
	 
	 
	flex = $.dK('flex')
	flex2 = $.dK('flex')
	
	$.get('/cutout', function (cutouts) {
		n = 0
		_.e(cutouts, function (cutout) {
			n++
			cut = cutout
			i = $.i(cutout.dU)
			i.WH(150, 150).a2(flex)
			i.$(function(){
			
				
				dU = $.c().rm().WH(i.W(), i.H()).d(i).dU()
				 
				
				$.post('/changeMug', {dU: dU}, function(user){
				
				$l(u=user)
					
				})
			})
			
		})
		
	 		/*
		$.get('/admin/allCutouts', function (cutouts) {
			$.br()
		 
			_.e(cutouts, function (cutout) {
				n++
				cut = cutout
				
				var d = $.sp().A(
						$.d().C('w').A(
								$.i(cutout.dU).WH(75, 75),
								$.h3(cutout.un ? 'user: ' + cutout.un  :  '?')
						)
						
				).a2(flex2)
			})
			 
		})*/
		
	})

	content.A(
			loggedInDiv,
			blue,
			pics,flex,flex2
	)
	_.in(function(){
		$.i(defaultMug).dgb()
	})
	
}


function newAcc() {
	creds = {
		un: $('#un').val(),
		pw: $('#pw').val()
	}
	$l('will make new account: ' + creds.un + ' : ' + creds.pw)
	_unIsAvailible = function (un, fn) {
		$.g('/wappy/unIsAvail', fn)
	}
	_unIsAvail(creds.un, function (un) {
		if (un) {
			$l('available')
		}
		else {
			$l('taken')
		}
		view.render()
	})
}
ADB2 = function () {
	$Ld(function () {
		__C().$(function (xx, y) {
			x.dc(xx, y, 10, 'y').col('r')
		})
		x.d('chicks', 600, 300)
	})
}
ADB1 = function () {
	$Ld(function () {
		__C().$(function (xx, y) {
			x.dc(xx, y, 10, 'y').C('o').col('r').C()
		})
		x.d('chicks', 600, 300)
	})
}

ADB = function () {
	
	$Ld(function () {
	
		ptsArr = []
		onCl = function (xx, y) {
			ptsArr.push([xx, y])
			x.d('chicks', 600, 300)
			x.dc(xx, y, 10, 'y')
					.C('o').col('r').C()
		}
		
		__C().$(onCl)
		c.dblclick(function () {
			c.off('click')
			x.cP().C().col()
			x.cP()
			x.b()
			x.clR()
			x.mt(ptsArr[0][0], ptsArr[0][1])
			_.e(_.r(ptsArr), function (pt) {
				x.lt(pt[0], pt[1])
			})
			x.cvC('z').cP().C().col().cl().d(
					'chicks', 600, 300)
			$Im(x.tDU(), function () {
				x1.d(this, 100, 100)
			})
		})
		x.d('chicks', 600, 300)
		x1 = $.c().abs().ctx()
		$.bt('snap', function () {
			$.post('/cutout', {dU: x1.dU()})
		})
	})
	
}

ADB = function () {

	Cuttable('chicks')

}


Cuttable=function(img){
	$Im(img, function (chicks) {
		ptsArr = []
		__C().$(function (xx, y) {
			ptsArr.push([xx, y])
			x.dI(chicks, 10, 10)
			x.dc(xx, y, 10, 'y').C('o').col('r').C()
		})
		x.d(chicks, 10, 10)
		x1 = $.c().ctx()
		$.bt('snap', function () {
			$.post('/cutout', {dU: x1.dU()})
		})
		c.dblclick(function () {
			c.off('click')
			x.cP().C().col()
			x.cP()
			x.b()
			x.clR()
			x.mt(ptsArr[0][0], ptsArr[0][1])
			_.e(_.r(ptsArr), function (pt) {
				x.lt(pt[0], pt[1])
			})
			x.cvC('z').cP().C().col().cl().d(chicks, 10, 10)
			$Im(x.tDU(), function () {
				x1.d(this, 10, 10)
			})
		})
	})
}


$.pic = function (p) {
	
	var fileN = p._id + p.ext
	
	var img = $.i('/' + fileN)
	
	img.img = img[0]
	
	return img.WH(100,100).$(function () {
	Cuttable(fileN)
		//$.cut(fileN)
	
	})
}
$.fn.dU=function(){return this.gC().dU()}
  