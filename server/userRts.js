
var creds
$a.post('/user', function (q, p, nx) {
	Ur.cr(q.b, function (z, user) {
		q.ss.un = user.un
		q.ss.sv(function () {
			p.js(user.un)
		})
	})
})
$a.post('/user/user', function (q, p, nx) {
	User.create(q.body, function (z, user) {
		if (z) {
			p.j('z');
			nx(z)
		}
		else {
			$l(user)
			var ss = q.ss = q.session
			// _.x(q.ss, {un: u.un,  loggedIn: true}).save(function () { p.json(u.un) })
			//set session u=u.u (user name= user.username)
			q.ss.un = user.un //set session li=true (loggedIn=true)//q.ss.loggedIn = true
			//save ss and send back a json obj of username -so a string?
			//_.x(q.session, {un: u.un, loggedIn: true})
			q.ss.save(function () {
				p.json(ss)
			})
		}
	})
	//$l(z.code == 11000 ? '!!' : '!');//$d(z);
})
$a.post('/user/login', function (q, p, next) {
	$l('user trying to login:')
	$l(q.body)
	var ss = q.session
	//check if un and pw are legit
	//creds = {un: q.body.un, pw: q.body.pw}
	User.findOne(creds = q.body, function (er, user) {
		if (er) {
			next(er)
		}
		else if (user) {
			var un = user.un
			$l('logged in: ' + un + ' !')
			ss.un = un //=q.un =q.ss.loggedIn = q.loggedIn = q.ss.u= q.ss.li
			ss.save(function () {
				$l('q.ss.un: ' + ss.un)
				p.json(un)
			})
		}
		else {
			$l('FAIL -> guest');
			p.json('guest')
		}
	})
})
 
$a.delete('/user', function (q, p, nx) {
	User.remove(q.body, function (z, da) {
		if (!z) {
			p.send(da)
		}
		else {
			$l('z')
		}
	})
})
$a.get('/user/logout', function (q, p, next) {
	$l('user trying to LOG OUTTTT:')
	$l(q.body)
	var ss = q.session
	var un = ss.un
	ss.un = null //=q.un =q.ss.loggedIn = q.loggedIn = q.ss.u= q.ss.li
	ss.save(function () {
		$l('q.ss.un: ' + ss.un)
		p.json(un)
	})
})
$a.get('/user/session', function (q, p) {
	var ss = q.session
	$l('ss: ')
	$l(ss)
	if (ss.views) {
		ss.views++
	}
	else {
		ss.views = 1
	}
	p.send(ss)
})

$a.get('/user/ses', function (q, p) {
	var ss = q.session
	$l('ss: ')
	$l(ss)
	if (ss.views) {
		ss.views++
		p.setHeader('Content-Type', 'text/html')
		p.write('<p>views: ' + ss.views + '</p>')
		p.write('<p>expires in: ' + (ss.cookie.maxAge / 1000) + 's</p>')
		p.write(JSON.stringify(ss, null, '\t'))
		p.end()
	}
	else {
		ss.views = 1
		p.end('welcome to the session demo. refresh!')
	}
})
$a.get('/login', function (q, p) {
	p.send('fred')
}) 
$a.get('/user', function (q, p) {
	Ur.fi(p.daFn($user))
})
$a.get('/user/:un', function (q, p) {
	Ur.f1(
			q.un_(),
			p.daFn($user))
	p.j($user(user))
})

$user = function (o) {
	if (A(o)) {
		return _.m(o, $user)
	}
	return {
		id: o.id,
		un: o.un,
		mug: o.mug,
		sts: o.sts || 'no status'
	}
}
 
username()
userMW()
function username(){
	$a.post('/user/unIsAvail', function (q, p) {
		User.findOne({un: q.body.un}, function (z, user) {
			p.send(user ? false : q.body.un)
		})
	})
	$a.post('/un', function (q, p) {
		$l('un')
		un = q.body.un
		$l('un: ' + un)
		q.session.un = un
		q.session.save(function () {
			$l('q.session: ' + q.session)
			p.send(q.session)
		})
	})
}

function userMW(){

// /W =
//var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}
//  for posting/creating a new user
	$a.get('/user', function (q, p) {
		// *** sends back all the users,
		// but has to parse/filter them first 
		// we only want an ob with THESE FOUR properties 
		// {id, username, mug, status} 
		// (NOT all the actual properties on the ob instance)
		User.find(p.daFn($user))
		// p.da( $user(da) ) // toUser
	})
	$a.get('user/:un', function (q, p) {
		User.findOne(q.un_(), p.daFn($user))
		p.json($user(user))
	})
	$Mw.user = qp(function (q, p, next) {
		if (q.session.un) {
			User.findOne({un: q.session.un()}, function (z, user) {
				// if (z) { nx(z) }
				// next.if(z);
				if (user) {
					q.user = user   //res.locals.U = req.U =
					q.un = user.un//res.locals.u = req.u =
					q.uId = user._id //res.locals.I = req.I =
				}
				next()
			})
		}	//$l('.user mw.. loggedIn?= ' + q.loggedIn) //req.li ||//Midware.u =
		else {
			p.send(false)
		}
		//$l('mw says NOT logged in :(')
		//auth(q, p, next, function (q, p, nx) {
		//	$md.user.findOne({un: q.un},
		//			function (z, user) {if (z) {next(z)} else if (user) {loginSuccess(q, p, user)}
		//				nx()})})
		//
	})
}