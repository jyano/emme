$L('ipsum','mock')

server = {
	d: 2,
	n: 2,
	docs: {
		1: {text: 'this is a doc', id: 1}
	},
	notes: {
		1: {1: {text: 'note'}, 2: {text: 'another note'}}
	},
	get: {
		'/docs': function (q, p) {
			var res = []
			for (var doc in docs) {
				if (docs.hasOwnProperty(doc)) {
					res.push(docs[doc])
				}
			}
			p.json(res)
		},
		'/docs/:did/notes': function (q, p) {
			var res = [], n = notes[q.params.id]
			for (var note in n) {
				if (n.hasOwnProperty(note)) {
					res.push(n[notes])
				}
			}
		}
	},
	post: {
		'/docs': function (q, p) {
			var doc = q.body
			doc.id = d++
			docs.doc.id = doc
			p.json(doc)
		},
		'/docs/:did/notes': function (q, p) {
			var note = q.body, id = q.params.id
			note.id = n++
			if (!notes[id]) {
				notes[id] = {}
			}
			notes[id][notes.id] = note
			p.json(note)
		}
	},
	put: {
		'docs/:id': function (q, p) {
			docs[q.params.id] = q.body
			p.json(q.body)
		},
		'docs/:did/notes:nid': function (q, p) {
			notes[q.params.id][q.params.nid] = q.body
			p.json(q.body)
		}
	}
}
yada = function (n) {
	n = N(n, 20)
	var str = ''
	_.t(n, function () {
		str += 'yada '
	})
	return str
}

 
function mock() {
	bbMock = function () {
		return docs = _.m($mk.docs, function (doc) {
			return new Bb.Model(doc)
		})
	}
	__ = 'fadsfasasdf'
	Ap = {M: {}, C: {}, V: {}, T: {}}
	$Mk = function () {
		$mk = function () {
		}
		ipsum()
		mks()
		function mks() {
			$mk.strs = ['wallaby', 'Macropus', 'agilis',
				'Agouti', 'Dasyprocta', 'leporina']
			$mk.Doc = function (title, content) {
				title = title || $mk.l1()
				content = content || $mk.lI()
				return {
					title: title,
					content: content
				}
			}
			$mk.Docs = function (num) {
				var docs = []
				_.t(N(num, 27), function () {
					docs.push($mk.Doc())
				})
				return docs
			}
			$mk.docs = $mk.Docs(12)
			var Doc = $mk.Doc
			$mk.obs = [
				new Doc('title1', 'content1'),
				new Doc('title2', 'content2'),
				new Doc('title3', 'content3'),
				new Doc('title4', 'content4'),
				new Doc('title5', 'content5'),
			]
			$mk.ob = {
				eyes: 2,
				'secret nickname': null,
				obs: $mk.obs,
				strs: $mk.strs,
				likes: ['shopping', 'puking']
			}
			$mk.ob = {
				ob: $mk.ob,
				eyes: 2,
				'secret nickname': null,
				obs: $mk.obs,
				strs: $mk.strs,
				likes: ['shopping', 'puking']
			}
		}
		
		function ipsum() {
			$mk.lI = function (n) {
				n = N(n, R(40))
				var str = _.sample($mk.strs)
				_.t(n, function () {
					str += ' ' + _.sample($mk.strs)
				})
				return str
			}
			$mk.l1 = function () {
				return $mk.lI(1) + $sa.S($sa.S('-') + $mk.lI(1))
			}
		}
	}
	$Sa = function () {
		$sa = function (a, b) {
			if (U(b)) {
				return _.partial($sa, a)
			}
			return _.sample(arguments)
		}
		$sa.S = $sa('')
	}
	$Sa()
	$Mk()
//$mk.css = $s({h1: {C: 'o'}, li: {C: 'o'}, ul: {C: 'gray'}, d: {C: 'r'}, $: {B: '4px dashed pink', M: 20}})
	$mk.$ = function () {
		$s($mk.css)
		return $
	}
	$mockPage = function (pageName) {
		return $.sp(pageName).id(pageName + '-pg').K('pg').fS(50)
	}
}

function ipsum() {
	$.ips = function (len) {
		len = len || 1;
		var str = '';
		_.t(len, function () {
			str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
		});
		return str
	}
	$.ipsP = function (len) {
		return $.p().A($.ipsum(len))
	}
	$.fn.ips = $.fn.ipsum = function () {
		var that = this
		_.each(arguments, function (num) {
			that.A($.ipsum(num))
		})
		return this
	}
	$.fn.ipsumP = function () {
		var el = this
		_.e(arguments, function (num) {
			el.A($.ipsumP(num))
		})
		return el
	}
	ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
	'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
	ips2 = l1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
	'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
	'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
	'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
	'te feugait nulla facilisi.'
	ips3 = l2 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
	'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
	'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
	'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
	'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
	'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
	'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
	'ut laoreet dolore magna aliquam erat volutpat.'
}
function data() {
	_bor = '5px solid red'
	_bulls = '&bull; &bull; &bull;'
	ooo.fl = {
		a: 'auto', b: 'baseline', m: 'center', c: 'column', C: 'column-reverse',
		i: 'initial', _: 'inherit', r: 'row', R: 'row-reverse',
		n: 'nowrap', s: 'flex-start', e: 'flex-end', S: 'stretch',
		sB: 'space-between', sA: 'space-around', w: 'wrap', W: 'wrap-reverse'
	}
	_.x(ooo, {
		dir: {r: 'row', rv: 'row-reverse', c: 'column', cRv: 'column-reverse'},
		wr: {
			w: 'wrap', wr: 'wrap',
			rv: 'wrap-reverse', nw: 'nowrap'
		},
		jfC: {
			st: 'flex-start',
			end: 'flex-end',
			c: 'center',
			sB: 'space-between',
			sA: 'space-around',
			i: 'initial',
			_: 'inherit'
		},
		alC: {
			fs: 'flex-start',
			fe: 'flex-end',
			c: 'center',
			sB: 'space-between',
			sA: 'space-around',
			i: 'initial',
			_: 'inherit'
		},
		alI: {
			fs: 'flex-start',
			fe: 'flex-end',
			c: 'center',
			b: 'baseline',
			s: 'stretch',
			i: 'initial',
			_: 'inherit',
			a: 'auto'
		}
	})
	_tablet = '@media screen and (max-width: 960px)'
	_phone = '@media screen and (max-width: 640px)'
	$tp = window['$tp'] || {}
	tabRus = {$ct: {w: '100%'}, $left: {w: '70%'}, $right: {w: '30%'}, i: {w: '100%'}}
	phRus = {$left: {w: '100%'}, $right: {w: '100%'}}
}
function _pre() {
	red = {C: 'r'}
	black = {c: 'z'}
	displayNone = {display: 'none'}
	body = {C: 'z', c: 'w'}
	divWrapper = {
		display: 'flex',
		'flex-direction': 'column',
		'align-items': 'center'
	}
	divTools = {
		display: 'flex',
		'flex-direction': 'column',
		'align-items': 'center'
	}
	username = {'font-size': 20, 'text-decoration': 'underline'}
	rightBox = {
		float: 'left', width: '250px',
		'margin-left': '20px', border: '3px solid blue'
	}
	leftBox = {
		float: 'left', padding: '20px', border: '3px solid red'
	}
	aFilter = {
		C: 'b',
		c: 'y',
		P: '5px 10px',
		M: '5px',
		'border-radius': '3px',
		'text-decoration': 'none'
	}
	aFilterHelper = {
		C: 'y',
		c: 'b',
		P: '5px 10px',
		M: '5px',
		'border-radius': '3px',
		'text-decoration': 'none'
	}
	bucCSS = {$leftbox: leftBox, $rightbox: rightBox}
	twtCss = {_un: username, _sts: {}}
	CssOb = {
		body: body,
		'.details': displayNone,
		'.active': red,
		'a.filter': aFilter,
		'a.filter:hover': aFilterHelper,
		'div#wrapper': divWrapper,
		'div.tools': divTools,
		'input#searchBox': black
	}
	JQLScss = {
		// {
		// width:250; // float:left;
		// mar:0;
		// background-color:gray;
		// min-height:240;
		// border-radius:10;
		// padding-bottom:15;
		// }
		'.task-list': {
			w: '250px', float: 'left',
			mar: '0px', C: 'gray', 'min-height': '240px',
			'border-radius': '10px', 'padding-bottom': '15px'
		},
		h3: {'text-align': 'center'},
		'.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},
		'.task-list input': {h: '30px'},
		'.task-list input[type="button"]': {w: '100px', mar: '5px'},
		'.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},
		'.td-task > .task-header': {'font-weight': 'bold'},
		'.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
		'.td-task > .task-desc': {'font-size': 'smaller'},
		'#delete-div': {
			C: 'b', bor: '3px dotted #000', mar: '10px', h: '75px',
			'line-height': '75px', 'text-align': 'center'
		}
	}
	yA = yAr = yanofski = ['y', 'a', 'n', 'o', 'f', 's', 'k', 'i']
	uA = usAr = users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
		{'id': 2, 'name': 'Ted', 'last': 'White'},
		{'id': 3, 'name': 'Frank', 'last': 'James'},
		{'id': 4, 'name': 'Ted', 'last': 'Jones'}
	]
	dirData = [
		{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
		{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
		{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
		{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
		{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
		{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
		{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
		{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
		{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
		{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
	]
	bksArr = [
		{title: 'yaba daba', author: 'wanda'},
		{title: 'clawface', author: 'deez nuts'},
		{title: 'under the knee', author: 'p .qu rstly'}
	]
	BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
	codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
	initialData = [
		{name: "Well-Travelled Kitten", sales: 352, price: 75.95},
		{name: "Speedy Coyote", sales: 89, price: 190.00},
		{name: "Furious Lizard", sales: 152, price: 25.00},
		{name: "Indifferent Monkey", sales: 1, price: 99.95},
		{name: "Brooding Dragon", sales: 0, price: 6350},
		{name: "Ingenious Tadpole", sales: 39450, price: 0.35},
		{name: "Optimistic Snail", sales: 420, price: 1.50}
	]
	PLANS = [
		{name: "Mercury", type: "rock"},
		{name: "Venus", type: "rock"},
		{name: "Earth", type: "rock"},
		{name: "Mars", type: "rock"},
		{name: "Jupiter", type: "gasgiant"},
		{name: "Saturn", type: "gasgiant"},
		{name: "Uranus", type: "gasgiant"},
		{name: "Neptune", type: "gasgiant"}
	]
	availableMeals = [
		{mealName: "Standard (sandwich)", price: 0},
		{mealName: "Premium (lobster)", price: 34.95},
		{mealName: "Ultimate (whole zebra)", price: 290}
	]
	peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
	Peep = function () {
		return [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
	}
	__ = 'hjkhjkhjk hkjhjkhjk hjkjkhjhjhk hjkkjhjkhjkhjkhjkhjkhjkh  jkkjkjhjhkjhkh '
	verts = [[-100, 0], [0, -100], [100, -20], [50, 20]]
	guyInBed = [[30], [20, 30, 30], [100, 30]]
	dick = [[50, 300, 0, -100], [50, 100, 150], [50, -100, 150]] //[b2d.poly(50, 300, 0,-100), b2d.circ(50, 100, 150), b2d.circ(50, -100, 150)]
	dick = [
		[50, 300, 0, -100],
		[50, 100, 150],
		[50, -100, 150]
	]
	guyInBed = [
		[30],
		[20, 30, 30],
		[100, 30]
	]
	sqr = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
	combo = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
	flatTri = [[400, 0], [800, 100], [120, 120]]
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	vs2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
	vs3 = [
		[190, 140],
		[170, 180],
		[160, 160]
	]
	vs4 = [
		[131, 84], [224, 110], [174, 280], [120, 136], [60, 167],
	]
	tictactoe = [
		[[200, 0], [200, 600]],
		[[400, 0], [400, 600]],
		[[0, 200], [600, 200]],
		[[0, 400], [600, 400]]
	]
	sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
	sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]
	v = [[-100, 0], [0, -100], [100, 50]]
	vs = [
		[[-100, 0], [0, -100], [100, 50]],
		[[-200, 0], [-100, -100], [0, 50]],
		[[0, 200], [0, -200], [400, -300], [400, 300]]
	]
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	vs2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
	v1 = [[-100, 0], [0, -100], [100, -50], [0, -50]]
	turtle = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	pin = [
		['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
		['w', 8, 0, -75],
		['w', 8, -20, 20],
		['w', 8, 20, 20]
	]
	p1 = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
	p2 = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
}
oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
 
