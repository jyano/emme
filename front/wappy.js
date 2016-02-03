 
UPL = USERUPLOAD = function () {
	$s({
		$: {M: 2, P: 2, fS: 16, tA: 'c'},
		bd: {
			C: 'R', dp: 'fl', dir: 'c', alI: 'c',
			wr: 'wrap'
		}
	}) 
	
	form = $.f().attr({
		enctype: 'multipart/form-data'//,action: '/imgFile'
	})
	
	form.A(
			$.ip().ty('file').name('fieldname'),
			$.ip().name('title'),
			$.bt('submit form', function (e) {
				//e.preventDefault()
			})
	)
	y = 80
	n = 0
	
	$.get('/myFileImgs', function (p) {
		pics = p
		_.e(p, function (p) {
			$l('pic: ' + n++)
			//$('body').A($('<image>').attr('src', src))
			//$.i('/' + p._id + p.ext).A().W(100).H(100)
			$.pic(p)
			//$.picDiv(y).A(UpPic(p))
			//y += 220
		})
	})
	//function UpPic(p) {return $.sp().A($.pic(p), $.delBt('/pic', p))}
}


EDIT = function () {
	st = $St()
	 d = $.d().A( st.canvas)
	 
	$.h1('-- just YOUR cutouts ---')
	$.get('/cutout', function (cutouts) {
		n = 0
		_.e(cutouts, function (cutout) {
			n++
			cut = cutout
			i = $.i(cutout.dU)
			i.WH(100, 100)
			var d = $.d().A(
					$.h5(cutout.un || 'anonymous'),
					i
			)
		})
		$.h1('number of cutouts is ' + n)
		$.h1('-- now ALL ---')
		$.get('/admin/allCutouts', function (cutouts) {
			n = 0
			_.e(cutouts, function (cutout) {
				n++
				cut = cutout
				i = $.i(cutout.dU)
				i.WH(100, 100)
				var d = $.sp().A(
						$.h5(cutout.un || 'anonymous'),
						i
				)
				
			})
			d.$(function () {
				st.bm(i.d, function (bm) {
					bm.rC(200, 200).XY(200, 300).TR()
				})
			})
			d.mar(20).C('r')
			$.h1('number of cutouts is ' + n)
		})
	})
	d.C('b').al(.6).W(400).H(100)
	d.ov('scroll').css('overlflow-y', 'auto')
//	$.eJ('/cutouts', function (i) {c = d.Can('o', 40, 40);c.fit(i.d)// d.A($.btX('/img', i, '-'))})
	
	$.$$(function () {
		$.post('/cutout', {d: st.dU()}, $.rl)
	})

}

FANCY = function (x, y) {
	z()
	$.iD = $.imgDiv = function (st) {
		d = $.d('y', '+')
		$.eGj('img', function (i) {
			d.A($.c(100, 100).fit(i.d)
					.$(function () {
						st.bm(i.d, function (bm) {
							bm.sXY(.4).dg()
						})
					}))
		})
	} 
	canvas = $.c('g', 400)
	stage = new cjs.Stage(canvas[0]).t()
	frame = $.dragFrame(theSpan = $.sp())
	theSpan.A(
			$.bt('X', function () {
				frame.remove()
			}),
			$.bt('pics', function () {
				$.imgDiv(stage)
			}),
			$.bt('transform'),
			$.bt('text'),
			$.bt('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						stage.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							stagePainter(paintStage)
						})
			}),
			$.bt('cut'),
			$.bt('save'))
	theSpan.A($.br(), canvas)
	theSpan.A($.div().A(
			$.bt('clear', function () {
				stage.removeAllChildren()
			}),
			$.bt('flat', function () {
				stage.removeAllChildren()
				stage.bm(stage.toDataURL(), function (bm) {
					bm.drag()
				})
			}),
			$.bt('clone', function () {
				var newSpan = $.sp()
				var newStage = $.dragStage(newSpan)
				newStage.bm(stage.du(), function (bm) {
					SL(bm)
				})
			}),
			$.bt('recur', function () {
				stage.bm(stage.du(), function (bm) {
					bm.sXY(.4)
					SL(bm)
				})
			}),
			$.bt('copy', function () {
				_copy = stage.du()
			}),
			$.bt('paste', function () {
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.bt('replace', function () {
				stage.rm()
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			})
	))
	theSpan.dblclick(function () {
		$('bt').toggle()
	})
	theSpan.A()
} 
 
appInitRdyFn = function () {
	$.getJSON('/loggedIn', function (un) {
		$l('un: ' + un);
		Y._userName = _un = un
		notLoggedIn(un) ?
				Y.render('GuestPage') : enterSite()
		////////// guest(); getMug(); socks(); home()
	})
}
onRdyFn = function () {
	if (window[_app = S.uC(_app)]) {
		window[_app]()
	}
}
logInUser = function (un) {
	k.em('id', un);
	k.em('joinRoom', _username)
	$.get('/myMug', function (mug) {
		__mug = mug
		//$l('going to home page..')
		Y('HomePage')
	})
}
userOnRdyFn = function () {
	$.getJSON('/loggedIn', function (un) {
		__un = un
		__un ? logInUser(__un) : Y('GuestPage')
	})
}
$logOut = function (fn) {
	fn = fn || function () {
		$ren('GuestPage')
		// Y('GuestPage')
	}
	$a.getJSON('/logOut', fn)
}
 
$.getJSON('loggedIn', function (un) {
	$('#uname').text(_un = $l(un))
})
LoginBar = function () {
}
HOM =  function () {
	$s({
		$: {M: 2, P: 2, fS: 20, tA: 'c'},
		bd: {
			C: 'R', dp: 'fl', dir: 'c', alI: 'c',
			wr: 'wrap'
		}
	})
	loggedInDiv = $.d('y', 400, 100)
	$.get('/user/session', function (sess) {
		var ss = sess || {}
		if (ss.un) {
			loggedInDiv.A($.h1('welcome you logged in as "' + ss.un + '"'),
					$.bt('logout', function () {
						$.get('/user/logout', function (res) {
							$l('logout res:')
							$l(res)
						})
					})
			)
		}
		else {
			loggedInDiv.A(
					$.h1('welcome you are NOT logged in'),
					$.d().s({dp: 'fl', jfC: 'sB', w: '20%', wr: 'wrap'}).A(
							$.d().s({dp: 'fl'}),//.A(' no session data ...'),
							$.d().s({dp: 'fl'}).A(
									$.ip().H(35).C('_b').ph('username').id('un'),
									$.ip().H(25).C('_b').ph('password').id('pw')
							),
							$.d().H(50).s({dp: 'fl'}).A(
									$.bt('login', loginUser).C('y'),
									$.bt('new', newAcc).C('y')
							)
					)
			)
		}
	})
	//$.d($.h1('welcome to wappy').fS(50)//, $.bt('get session', function () {$.get('/user/session', function (sess) {ss = sess || {};_.e(ss = sess, function (v, k) {one.E().A($.h2(k + ' : '), $.h1(v))})})})
	//)
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
		})
	}
	
	function loginUser() {
		creds = {
			un: $('#un').val().toLowerCase(),
			pw: $('#pw').val().toLowerCase()
		}
		$l('will try to login: ' + creds.un + ' : ' + creds.pw)
		$.post('/user/login', creds, function (res) {
			$l('res')
			$l(res)
		})
	}
}

HOMPAG = function () {
	
	$s({
		$: {M: 2, P: 2, fS: 20, tA: 'c'},
		bd: {
			C: 'R',
			 dp: 'fl', dir: 'c', 
			 alI: 'c',
			wr: 'wrap'
		}
	})
	
	
	LoggedInNavView = Bb.V.x({
	
		render: function(){
		
		}
	})
	
	
	loggedInDiv = $.d().C('y').H( 100).A('???')
	
	$.get('/user/session', function (sess) {
		var ss = sess || {}
	
		loggedInDiv.E(ss.un?	
				IsLoggedInTempl(ss) :
				NotLoggedInTempl())
				
	})
 
	
	

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
	})
}
function loginUser() {
	creds = {
		un: $('#un').val().toLowerCase(),
		pw: $('#pw').val().toLowerCase()
	}
	$l('will try to login: ' + creds.un + ' : ' + creds.pw)
	$.post('/user/login', creds, function (res) {
		$l('res')
		$l(res)
	})
}
}
 


function loginUser() {
	creds = {
		un: $('#un').val().toLowerCase(),
		pw: $('#pw').val().toLowerCase()
	}
	$l('will try to login: ' + creds.un + ' : ' + creds.pw)
	$.post('/user/login', creds, function (res) {
		$l('res')
		$l(res)
		view.render()
	})
}

IsLoggedInTempl = function (ss) {
	var d = $.d()
	d.A(
			$.h1('logged in as "' + ss.un + '"'),
			$.bt('logout', function () {
				$.get('/user/logout', function (res) {
					$l('logout res:')
					$l(res)
					view.render()
				})
			}))
	return d
}

NotLoggedInTempl = function () {

	var d = $.d().s({
		dp: 'fl', 'flex-direction': 'column',
		jfC: 'sB', //w: '20%',
		wr: 'wrap'})
	

	d.A(
			$.h1('welcome you are NOT logged in'),
			
			$.d().s({dp: 'fl', jI:'c'}).A(
			
					$.bt('new', newAcc).C('y'),
					
					$.ip().H(50).W(150).C('_b').ph('username').id('un'),
					
					$.ip().H(45).W(50).C('_b').ph('pw').id('pw'),
					
					$.bt('login', loginUser).C('y'))
	)
	
	return d
}
CUTOUTS = function () {
	$.bX = $.btX = function () {
		var g = G(arguments), o = {url: g.f, data: g.s}
		return $.bt('X', function () {
			var bt = this
			$.ajax({
				type: 'DELETE',
				url: o.url,
				data: o.data,
				success: function () {
					rmParOf(bt)
					function rmParOf(bt) {
						$(bt).pa().rm()
					}
				}
			})
		})
	}
	$.fm();
	section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
	y = 80
	$.eJ('/cutouts', function (cutout) {
		var i = $.i(cutout.dU).WH(100, 100).$(function () {
			$.post('/changeMug', {dU: cutout.dU}, function () {
				i.selPic()
			})
		})
		$.dA('b', 100, 100, '+').left(y).top(200).K('pic').A(i, $.btX('/cutout', cutout))
		y += 220
	})
	/*
	 section1.A(
	 $.h4('click a pic to select it as your mug, or the x to delete it'))
	 $.getJSON('/img', function (cutouts) {
	 var top = 80
	 _.e(cutouts, function (cutout) {
	 var imgDiv = $.divA('b', 100, 100).left(top).top(200).K('pic').drag()
	 imgDiv.A(
	 $.img(cutout.d).WH(100).$(function (q) {
	 //	$l('changemug')
	 $l(cutout.d)
	 $.po('/changeMug', {
	 url: cutout.d
	 })
	 ////
	 $('.pic').ea(function (index) {
	 $(this).C('b')
	 })
	 $(this).parent().C('y')
	 }),
	 $.bt('X', function () {
	 var that = this
	 $.ajax({
	 data: cutout,
	 url: '/img',
	 type: 'DELETE',
	 success: function (res) {
	 $(that).parent().remove()
	 }
	 })
	 })
	 )
	 top += 220
	 })
	 })*/
}
CUTS =   function () {
	$s({d: { P: 10, M: 10},
	
		_flex:{
			dp:'fl'
		}
	})
	
flex= $.dK('flex')

//	$.h1('-- just YOUR cutouts ---')
	$.get('/cutout', function (cutouts) {
		n = 0
		_.e(cutouts, function (cutout) {
			n++
			cut = cutout
			i = $.i(cutout.dU)
			i.WH(100, 100) .a2(flex)
		})


		$.h1('YOU have  ' + n + ' cutout(s)')
		 
		flex2 = $.dK('flex')
		
		$.get('/admin/allCutouts', function (cutouts) {
			n = 0
			_.e(cutouts, function (cutout) {
				n++
				cut = cutout
				i = $.i(cutout.dU)
				i.WH(100, 100)
				var d = $.sp().A(
						$.h5(cutout.un || 'anonymous'),
						i
				).a2(flex2)
			})
			$.h1('ALL wappy has ' + n +' cutouts')
		})
	})
}
function AppLoader(appOb) {
}
function AppLoaderApps() {
	App = {
		name: 'DIR',
		js: function () {
		},
		css: {}
	}
}
TextAdder = function (st) {
	var f = $.f().c('x').P(10).W(300).dg()
	f.A(
			$.ip().id('text'),
			$.bt('for text', function () {
				var val = $l($('#text').v())
				$('#text').val('')
				st.A($Tx(val, 'w', 30, 100, 10).SL())
			}),
			$.bt('for text', function () {
				var val = $l($('#text').v())
				$('#text').val('')
				var theText = $Ct().A($Tx(val, 'w', 30, 100, 10)).SL().a2(st)
				theText.dO = _text
				selected(theText)
			})
	)
	return form
}
EWTA = EDIT_WITH_TEXTADDER = function () {
	var r = '#0FF', size = 2, oX = 0, oY = 0, shape
	var st = dragStage()
	imgHolder = $div().a().drg().c('y')
	eaI(function (img) {
		imgHolder($imageSizeFuncCan(
						img.d, 1, function () {
							st.bm(img.d,
									function (bm) {
										SL(bm.sxy(.4))
									}
									, '+')
						} //rgc
				)
		)
	})
	TextAdder2(st)
}
$.dragFrame = function (d) {
	var outer = $.sp().C('b').dp('flex').W(600).dgb().css('padding', 18)//.mar(20)
	//d = d || $.d('y', 50, 50).mar(20).pad(8).A('jjklljkjkl')
	d.on('mousedown', function (e) {
		e.stopPropagation()
	})
	d.a2(outer)
	return outer
}
FANCY = function (x, y) {
	d = $.d().C('r').A('kjkljlkjkjkl kjkjk').A($.i('me'))
	$.dragFrame(d)
}
FANC = FANCYEDITUSESDRAGFRAME = function (x, y) {
	canvas = $.c('g', 400)
	stage = $St(canvas[0])
	frame = $.dragFrame(theSpan = $.sp())
	theSpan.A(
			$.bt('X', function () {
				frame.remove()
			}),
			$.bt('pics', function () {
				$.imagesDiv(stage)
			}),
			$.bt('transform'),
			$.bt('text'),
			$.bt('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						stage.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							stagePainter(paintStage)
						})
			}),
			$.bt('cut'),
			$.bt('save'))
	theSpan.A($.br(), canvas)
	theSpan.A($.d().A(
			$.bt('clear', function () {
				stage.removeAllChildren()
			}),
			$.bt('flat', function () {
				stage.removeAllChildren()
				stage.bm(stage.toDataURL(), function (bm) {
					bm.drag()
				})
			}),
			$.bt('clone', function () {
				var newSpan = $span()
				var newStage = dragStage(newSpan)
				newStage.bm(stage.du(), function (bm) {
					SL(bm)
				})
			}),
			$.bt('recur', function () {
				stage.bm(stage.du(), function (bm) {
					bm.sxy(.4)
					SL(bm)
				})
			}),
			$.bt('copy', function () {
				_copy = stage.du()
			}),
			$.bt('paste', function () {
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.bt('replace', function () {
				stage.rm()
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			})
	))
	theSpan.dblclick(function () {
		$('bt').toggle()
	})
}
INDEXX = function () {
	z()
	s = dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.times(10, function () {
			s.bm('guy', SL)
		})
		s.ix(b, 3)
	})
}
DFP = DRAGFRAME = PATH = function () {
	$Ld(function () {
		s = c = $.c('g', 200, 200)
		d = $.c('x', 200, 200)
		f = $.dragFrame(c)
		f1 = $.dragFrame(d).X(300)
		x = c.ctx()
		xx = d.ctx()
		x.c('X', 'X').fr(0, 0, 1000, 1000)
		x.b(10, 30, 'r', 'X')
		x.lt([[30, 10], [160, 20], [50, 200]]).x()//.D()
		x.cl()
		x.d('me', 50, 50)
		d.ctx().d('me', 0, 0)
		_.in(function () {
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			_.in(function () {
				x.d(d, 0, 0)
				_.in(function () {
					xx.c('X').clearRect(0, 0, 200, 200)
					xx.d(c)
				})
			})
		})
	})
}
