$L('nok','baseApps','listApps')
$.okPD = function (fn) {
	return $.ok(function (ev) {
		_.pD(ev)
		return fn(ev)
	})
}
$.lIp = function (lbTx, id) {
	var ip = $.ip()
	ip.id(id || lbTx)
	var p = $.p()
	p.A($.lb(lbTx + ': '), ip)
	p._ip = ip
	return p
}
$.fo = function (title, chArr, fn) {
	var f = $.f()
	f.A($.h1(title))
	if (A(chArr)) {
		_.e(chArr, function (ch) {
			f.A(ch)
		})
	}
	if (F(fn)) {
		f.A($.okPD(fn))
	}
}
$.fAc = function (ac) {
	return $.f().ac(ac)
}
$.ipStPr = function (id) {
	var ip = $.ip().stPr()
	if (S(id)) {
		ip.id(id)
	}
	return ip
}
$.spC = $.spCA = function (C, CH) {
	var g = G(arguments)
	var $el = $.sp()
	$el.C(C)
	A(CH) ? _.e(CH, add) : _.e(g.r, add)
	return $el
	function add(ch) {
		$el.A(ch)
	}
}
$.btC = $.btCA = function (C, chArr, fn) {
	var bt = $.bt(' ', fn).C(C)
	_.e(chArr, function (ch) {
		bt.A(ch)
	})
	return bt
}
$.okP = $.okPo = function (url, da, fn) {
	$.okPD(function () {
		$.P(url, da, fn)
	})
}
$.iV = function (id) {
	return $(S.eL(id, '#')).v()
}
$.IV = function (id) {
	return $(S.eL(id, '#')).V()
}
$.IVOb = function () {
	var g = G(arguments)
	var ob = {}
	_.e(g, function (arg) {
		ob[arg] = $.IV(arg)
	})
	return ob
}
$.fn.su = function (fn) {
	var $el = this
	$el.submit(fn)
	return $el
}
$.fn.suPD = $.fn.suPrDf = function (fn) {
	var $el = this
	$el.su(function (ev) {
		$.pD(ev)
		fn(ev)
	})
	return $el
}
$.P$d = function (url, ipId, title) {
	$.P(url, $.IV(ipId), $cDFn(title))
}
$.cDFn = function (title) {
	return function (da) {
		$cD(title, da)
	}
}
$.cD = function () {
	var g = G(arguments), o
	o = (g.S_ && g.s) ?
	{title: g.f, da: g.s} :
			g.S_ ? {title: g.f, da: window[g.f]} :
			{da: g.f}
	$l(o.title + ' ->')
	console.dir(o.da)
	return o.da
}
$.dHr = function () {
	var d = $.d.apply($, arguments)
	return $.d().A(d, $.hr())
}
$.pD = _.pD = function (ev) {
	ev.preventDefault()
	return ev
}
$.fS = function (size) {
	$s({$: {fS: (N(size, 40))}})
	return $
}
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
}
$.E = function () {
	var bd = $.bd()
	bd.E.apply(bd, arguments)
	return $
}
$.uLE = function (a) {
	var g = G(arguments)
	return $.ulE(a, $.li(g.r))
}
$KOob = function (k, v) {
	var g = G(arguments)
	if (g.O) {
		var o = []
		_.e(g.f, function (v, k) {
			o.push($KOob(k, v))
		})
		return o.join()
	}
	k = KOob[k] ? KOob[k] : k
	v = v ? ': ' + v : ''
	return k + v
}
e$ = function (bnd, kids) {
	var g = G(arguments)
	var sp = $.sp(A(g.s) ? g.s : g.r)
	sp.e$(bnd)
	return sp
}
ok$o = function (key, val) {
	vm = $Ob(key, $o(val))
	ok(vm)
}
//$.sl.o$ = function (a) {return $.sl().o$(a)}//= OptionBoundSelect = $sl$o = $.sel.op = sel$op = $.sO = $.slO
t$sp = function () {
}
v$tI = v$ip = ko.v$tI = ko.v$ip = $.ip$v = function () {
}
function nok(){
 
	$.ok = function (fn) {
		return $.bt('ok', fn)
	} ///////
	ok = function self(vm, el) {
		if (A(vm)) {
			return self(vm[0], vm[1])
		}
		if (S(vm)) {
			return self($Ob(vm, el))
		}
		window.vm = vm
		ko.aB(vm, el)
		return vm
	}
	$ok = function self() {

// ???? pass plain object and element(string or ob?) :)
		var g = G(arguments)
		if (g.p) {
			_.in(0, function () {
				self.apply(null, g)
			})
		}
		// pass nothing -> {da: $o(1)} Note: 'da' replaced '$'
		if (g.u) {
			g.f = 'da'
		}
		// pass a single key, value -> {key:value}
		vm = S(g.f) ? Ob(g.f, D(g.s) ? g.s : $o(g.n)) :
			// pass just a value -> {$: value}
				F(g.f) || N(g.f) || A(g.f) ?
						Ob('da', g.f)
					// pass just plain obj (normal)
						: g.f
		ok(vm)
	}
	OK = function (vm) {
		_.in(.1, function () {
			ok(vm)
		})
	}
	$.fn.h$ = function (s) {
		//= $.fn.bH 
		return this.b('html', s)
		// = $.fn.bH
	}
	$.fn.t$ = function (bnd) {
		return this.b('text', bnd || '$data')
	}
	$.fn.at$ = $.fn.a$ = function (s) {
		return this.b('attr', s)
	}
	$.fn.v$ = function (s) {
		var g = G(arguments)
		str = "value: " + s
		if (!g.n) {
			str += ", valueUpdate: 'afterkeydown'"
		}
		this.b(str)
		return this
	}
	$.fn.fc$ = $.fn.f$ = function (s) {
		return this.b('hasFocus', s)
	}
	$.fn.if$ = function (s) {
		return this.b('if', s)
		// = $.fn.bI = $.fn.bIf
	}
	$.fn.n$ = $.fn.not$ = function (s) {
		return this.b('ifnot', s)
	}
	$.fn.en$ = function (s) {
		return this.b('enable', s)
	}
	$.fn.d$ = function (s) {
		return this.b('disable', s)
	}
	$.fn.vs$ = function (bnd) {
		return this.b('visible', bnd)
	}
	$.fn.w$ = function (s) {
		return this.b('with', s)
	}
	$.fn.cl$ = $.fn.b$ = function (s) {
		return this.b('click', s)
	}
	$.fn.ev$ = function (s) {
		return this.b('event', s)
	}
	$.fn.ch$ = function (bnd) {
		return this.b('checked', bnd)
	}
	$.fn.tI$ = function (s) {
		return this.b('textInput', s)
	}
	$.fn.st$ = function (s) {
		return this.b('style', s)
	}
	$.fn.css$ = function (s) {
		//= $.fn.bS
		return this.b('css', s)
	}
	$.fn.o$ = $.fn.op$ = _optionbind = function (s) {
		return this.b('options', s)
	}
	$.fn.sO$ = $.fn.bSO = function (s) {
		return this.b('selectedOptions', s)
	}
	$.fn.sm$ = function (s) {
		return this.b('submit', s)
	}
	$.fn.u$ = $.fn.uN$ = function (s) {
		return this.b('uniqueName' + s)
	}
	$.fn.tp$ = $.fn.bTp = function (s) {
		return this.b('template', s)
	}
	$.fn.e$ = function (s) {
//return this.b('foreach',S)
// = $.fn.bE
		// if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
		var q = this, g = G(arguments)
		return g.p ? '$data.' + s : q.b('foreach', s)
//= $.fn.bindKOEach = $.fn.koE = $.fn.eKo = $.fn.bE = $.fn.ko_e 
	}
	$.fn.e$da = function (a) {
		//=$.fn.eD = $.fn.eB =  $.fn.bindKOEachData 
		return this.b('$data.' + a)
	} 
	$o = function () {
		var g = G(arguments)
		g[0] = D(g.f) ? g.f :
				D(g.s) ? g.s : g.n ?
						0 : 1
		return ko.o.apply(ko, g)
	}
	$oA = $oa = function () {
		var g = G(arguments)
		return ko.oA(g.A_ ? g.f : g)
	}
	$cO = $c = function () {
		return ko.computed.apply(ko, arguments)
	}
	$.fn.dB = function (dB, p2) {
		return this.at({'data-bind': p2 ? (dB + ':' + p2) : dB})
	}
	$.fn.ko = function (a, b) {
		var o = []
		if (O(a)) {
			_.e(a, function (v, k) {
				if (KOob[k]) {
					k = KOob[k]
				}
				o.push(k + ':' + v)
			})
			this.b($l(o.join()))
		}
		else {
			if (KOob[a]) {
				a = KOob[a]
			}
			str = a + ':' + b;  // str= oO('b', a)
			this.at({'data-bind': str})
		}
		return this
	}
	$.fn.b = function (a, b) {
		var q = this, g = G(arguments)
		var str = g.O ? $KOob(g.f) :
				hasCln(a) ? a :
						$KOob(a, b || 't')
		return q.dB(str)
		function hasCln(str) {
			return str.indexOf(':') != -1
		}
	}
	ok.oA = function (key, oA) {
		ok($Ob(key, $aO(oA)))
	}
	$.ko = function () {
	}
	t$ = ok.t$ = t$d = $.d.t$ = function (bd, textVal) {
		return $.sp().t$(bd).A(textVal || '')
	}
	cl$ = function (bnd, btTx) {
		var g = G(arguments)
		var bt = $('<button>').A()
		bt.cl$(bnd)
		bt.A(D(btTx) ? btTx : bnd)
		return bt
	}
	vs$ = function (bnd, kids) {
		var g = G(arguments)
		return $.sp(A(g.s) ? g.s : g.r).vs$(bnd)
	}
	v$ = function (bnd, kids) {
		var g = G(arguments)
		return $.ip(A(g.s) ? g.s : g.r).v$(bnd)
	}
	fc$ = function (bnd, kids) {
		var g = G(arguments)
		return $.ip(A(g.s) ? g.s : g.r).fc$(bnd)
	}
	tI$ = function (bnd, kids) {
		var g = G(arguments)
		return $.ip(A(g.s) ? g.s : g.r).tI$(bnd)
	}
	pw$ = function (bnd, kids) {
		var g = G(arguments)
		return $.pw(A(g.s) ? g.s : g.r).tI$(bnd)
	}
	ch$ = function (bnd) {
		return $.cb().ch$(bnd)
	}
	ip$ = function (ob) {
		return $.ip().b(ob)
	}
	d$ = function (ob) {
		return $.d().b(ob)
	}
	w$ = function (bnd, kids) {
		var g = G(arguments)
		return $.sp(A(g.s) ? g.s : g.r).w$(bnd)
	}
}
function baseApps(){

	K99 = CSSDATACLICK = KNOCKS = function () {
		$.ul().K('fs').e$("fs").A($.li().b(
				"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
		))
		MVM = function () {
			var o = {}
			o.fs = ['I', 'A', 'Se', 'Sp']
			o.chFI = $o()
			o.gtf = function (f) {
				$l('gtf')
				o.chFI(f)
			}
			return o
		}
		ok(MVM())
	}
	KOH= KOHTML= function () {
		init()
		$.d().fS(100).h$('htmlContent')
		ok(vm = {htmlContent: $o('wait..')})
		_.in(2, function () {
			vm.htmlContent(
					"<em>report: <a href=playboyUrl>here</a>.</em>"
			)
		})
		function init() {
			playboyUrl = 'http://www.playboy.com'
		}
	}
	KOAT=  KOATTR = function () {
		$.a('report').fS(100).at$('{href: urlName, title:titleName}')
		ok({
			urlName: $o("http://www.hustler.com"),
			titleName: $o("statistics")
		})
	}
	KOIF=  function () {
		$.cb().b('checked', 'dispMs')
		$.sp('Disp ms')
		$.d().if$('dispMs').A(
				$.p('Here is a message. Astonishing'))
		ok(vm = {dispMs: $o(0)})
	function alt(){
		KOIF = KO15 = function () {
			$.A(
					$('<label><input type="checkbox" data-bind="checked: displayMessage" /> Display message</label>').C('r'),
					$(' <div data-bind="if: displayMessage">Here is a message. Astonishing.</div>').C('b')
			)
			_.in(function () {
				ok({
					displayMessage: $o(false)
				});
			})
		}}
	}
	KOEN= ENAB = PHONENUMBER = function () {
		$s({$: {M: 10}})
		$.sp(['phone #:', v$('num').en$('hasPhone')])
		$.sp([ch$('hasPhone'), 'I have phone'])
		ok({
			num: '',
			hasPhone: $o(0)
		})
	}
	KOT= KOTEXT = function () {
		t$('textVal')
		ok(vm = $Ob('textVal', $o('startValue')))
		_.in(4, function () {
			vm.textVal('changed the view model!')
		})
	}
	KOW= KOWITH = function () {
		$.d([
			$.h1().t$('city'),
			$.p([
				'lat:', t$('lat'),
				'lon:', t$('lon')
			]).b('w', 'xy')
		])
		ok({
			city: "London",
			xy: {lat: 51, lon: -0.1}
		})
	}
	KOVS= KOVISABLE = function () {
		$.d().A('ALWAYS HERE!')
		$.d().A('see me if true!').vs$('shouldIBeVisible')
		ok(vm = {shouldIBeVisible: $o(1)})
		_.in(4, function () {
			vm.shouldIBeVisible(0)
			_.in(2, function () {
				vm.shouldIBeVisible(1)
			})
		})
	}
	KOCL= KOCLICK= function () {
		$$s({M: 10, C: 'r', c: 'w'})
		$.bt('makeDiv').cl$('newDiv')
		vm = {
			newDiv: function () {
				$.C($r())
				$.d().A("i'm a freaking div").C($r())//.cl$('name')
			}
		}
		ok(vm)
	}
	KOCP= COMP=KOCOMPUTED = function () {
		$s({$: {P: 5, c: 'o', fS: 50}})
		$.d().A(
				$.d().A('F: ', $.sp().t$('f')),
				$.d().A('L: ', $.sp().t$('l')),
				$.d().A('FL: ', $.sp().t$('fl')),
				$.sp().A('F: ', $.ip().v$('f')),
				$.d().A('L: ', $.ip().v$('l')), //.id('l'), 
				$.bt('click me').cl$('capL')
		).C('b').pad(20)
		vm = {
			f: $o('jason'),
			l: $o('yanofski'),
			capL: function () {
				this.l(this.l().toUpperCase())
			}
		}
		vm.fl = ko.c(function () {
			return vm.f() + ' ' + vm.l()
		})
		ok(vm)
	}
	KOPRE= KIP = function () {
		$.p('Login name:').A($.ip().tI$('un'))
		//$.p('Login name:').A($.ipTi('un'))
		$.p('Pw:').A($.pw().tI$('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
		//$.p('Pw:').A($.pwTi('pw'))
		// $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
		$.A('vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
		ok(vm = {un: $o(''), pw: $o('abc')})
	}
}
function listApps(){
	KO1 = KODEL = DELETEWORKS = ADD3 = ULP = function () {
		ok(function () {
			$s({
				bd: {C: 'x', c: 'y'}, $: {
					C: 'n', c: 'z',
					M: 5, fS: 42
				}, sp: {C: 'o', c: 'z'}
			})
			cl$('add', 'ADD')
			e$('people', $.d([
				'name: ',
				t$('$index'), t$('name'),
				cl$('$root.rm', 'DELETE')
			]))
			cl$('add', 'ADD')
			var o = {people: $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])}
			o.add = function () {
				o.people.push({n: "New at " + new Date().time})
			}
			o.rm = function () {
				o.people.remove(this)
			}
			return o
		}())
	}
	KO2 = SEAT = SEAT_RESERVATIONS = function () {
		$Ms('TUTC')
		$.h2().A('Your seat reservations (', t$("seats().length"), ')')
		$.t().A(
				$('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
				$('<tbody>').e$('seats').A($.tr().A(
						$.td().t$('name'),
						$.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
						$.td().t$('formattedPrice'),
						$.td().A($.a('Remove', '#').b$("$root.removeSeat")))))
		$.h3().A('Total surcharge: $', $.sp().t$('totalSurcharge().toFixed(2)')).vs$('totalSurcharge() > 0')
		$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
		ok(new ReservationsViewModel())
		function SeatReservation(name, initialMeal) {
			var self = this;
			self.name = name;
			self.meal = ko.observable(initialMeal);
			self.formattedPrice = ko.computed(function () {
				var price = self.meal().price;
				return price ? "$" + price.toFixed(2) : "None";
			});
		}
		
		function ReservationsViewModel() {
			var self = this;
			// Non-editable catalog data - would come from the server
			self.availableMeals = availableMeals
			// Editable data
			self.seats = ko.observableArray([
				new SeatReservation("Steve", self.availableMeals[0]),
				new SeatReservation("Bert", self.availableMeals[0])
			])
			self.totalSurcharge = ko.computed(function () {
				var total = 0;
				for (var i = 0; i < self.seats().length; i++)
					total += self.seats()[i].meal().price;
				return total;
			})
			self.addSeat = function () {
				self.seats.push(new SeatReservation("", self.availableMeals[0]));
			}
			self.removeSeat = function (seat) {
				self.seats.remove(seat)
			}
		}
	}
	KO3 = KOADDER = function () {
		$.d([$.p(
				t$('f'),
				' ',
				t$('l')
		)]).e$('peep')
		vm = {
			peep: $oA([
				{f: 'B', l: 'Bb'},
				{f: 'C', l: 'Cc'},
				{f: 'D', l: 'Dd'}
			])
		}
		ok(vm)
		$.bt('push', function () {
			vm.peep.push({f: 'j', l: 'y'})
		})
	}
	KO4 = BETTERLIST = function (n, ch) {
		LST1 = function (n, ch) {
			$s({
				_sl: {
					fS: 16,
					C: 'i', c: 'j',
					position: 'relative',
					display: 'inline-block',
					P: 66,
					h: '60%'
				}
			})
			$.f().A('Add item:',
					$.ip().tI$('itemToAdd'),
					$.sm('Add').en$('itemToAdd().length > 0')
			).sm$('addItem')
			$.p('Your values: ')
			$.sl().at({multiple: "multiple", height: 5})
					.b({o: 'allItems', sO: 'selectedItems'}).K('sl')
			$.d([
				$.bt('Remove').b({cl: 'removeSelected', en: 'selectedItems().length > 0'}),
				$.bt('Sort').b({cl: 'sortItems', en: 'allItems().length > 1'})
			])
			var BetterListModel = function () {
				this.itemToAdd = ko.observable("");
				this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
				this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
				this.addItem = function () {
					$l('add')
					if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
					// Prevent blanks and duplicates
						this.allItems.push(this.itemToAdd());
					this.itemToAdd(""); // Clear the text box
				};
				this.removeSelected = function () {
					this.allItems.removeAll(this.selectedItems());
					this.selectedItems([]); // Clear selection
				};
				this.sortItems = function () {
					this.allItems.sort();
				};
			}
			ok(vm = new BetterListModel());
		}
		$s({
			_sl: {
				fS: 16,
				C: 'i', c: 'j',
				position: 'relative',
				display: 'inline-block',
				P: 66,
				h: '60%'
			}
		})
		$.f().A('Add item:',
				$.ip().tI$('itemToAdd'),
				$.sm('Add').en$('itemToAdd().length > 0')
		).sm$('addItem')
		$.p('Your values: ')
		$.sl().at({multiple: "multiple", height: 5})
				.b({o: 'allItems', sO: 'selectedItems'}).K('sl')
		$.d([
			cl$('removeSelected', 'Remove')
					.en$('selectedItems().length > 0'),
			cl$('sortItems', 'Sort').en$('allItems().length > 1')
		])
		var BetterListModel = function () {
			this.itemToAdd = ko.observable("");
			this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
			this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
			this.addItem = function () {
				$l('add')
				if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
				// Prevent blanks and duplicates
					this.allItems.push(this.itemToAdd());
				this.itemToAdd(""); // Clear the text box
			}
			this.removeSelected = function () {
				$l('rm')
				this.allItems.removeAll(this.selectedItems());
				this.selectedItems([]); // Clear selection
			}
			this.sortItems = function () {
				$l('sort')
				this.allItems.sort();
			}
		}
		ok(vm = new BetterListModel());
	}
	KO5 = TBE = function () {

		$.t([$.tH().A($.tr().A(
				$.th().A('First name'),
				$.th().A('Last name'))),
			
			$.tB().e$('people').A(
					$.tr().A($.td().t$('fn'),
							$.td().t$('ln'))
							
			)])
		ok({
			people: [
				{fn: 'B', ln: 'Bert'},
				{fn: 'Ch', ln: 'Char'},
				{fn: 'De', ln: 'Dent'}
			]
		})
	}
	KO6 = TBTR = function () {
		$.bd().fS(30)
		$.t([$.tH([$.tr([$.th('F'), $.th('L')])]),
			$.tB().e$('peep')]).A($.tr([$.td().t$('f'),
			', ', $.td().t$('l')]))
		$.t().e$('peep').A(
				$.tH([$.tr([$.th('F'), $.th('L')])]),
				$.tr() [
						$.tr([$.td().t$('f'),
							', ', $.td().t$('l')])])
		//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
		ok({peep: $O([{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])})
		//ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})
	}
	KO7 = KOCL = function () {
		Per = function (n, ch) {
			var per = this
			per.n = n
			per.ch = ko.oa(ch)
			per.A = function () {
				per.ch.push('new ch')
			}
		}
		peep = [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
		$.ul().e$('peep').A(
				$.li().A(
						$.d([
							$.sp().t$('n'), 'has',
							$.sp().t$('ch().length'),
							'children &nbsp;',
							$.a('New').ch$('A')]),
						$.ul().e$('ch').A(
								$.li([$.sp().t$(), $.sp().vs$('$root.showDT').A(
										' (child rendered at ',
										$.sp().t$('$Dt().getSeconds()'), ')')]))))
		$.cb().ch$('showDT').a2($.lb('Show time:'))
		ok({peep: peep, showDT: $o()})
	} }
function _pre(){
	KOob = {
		e: 'foreach',
		ch: 'checked', c: 'checked',
		t: 'text',
		v: 'value',
		h: 'html',
		i: 'if',
		$: 'click',
		fc: 'hasFocus', hF: 'hasFocus', f: 'hasFocus',
		w: 'with',
		at: 'attr', a: 'attr',
		en: 'enable',
		vs: 'visible', tI: 'textInput',
		o: 'options',
		oT: 'optionsText',
		ev: 'event',
		sm: 'submit',
		sO: 'selectedOptions',
		n: 'ifnot',
		d: 'disable',
		///////////
		u: 'uniqueName', vU: 'valueUpdate',
		cm: 'component', tp: 'template',
		////////////////////
		s: 'css', sty: 'style', y: 'style'
	}
	ko.ut = ko.u = ko.utils
	ko.cm = ko.components
	ko.vE = ko.ve = ko.virtualElements
	ko.aB = ko.ab = ko.applyBindings
	ko.o = ko.observable
	ko.c = ko.computed
	ko.pC = ko.pc = ko.pureComputed
	ko.oA = ko.oa = ko.observableArray
	ko.aF = ko.ut.aF = ko.u.af = ko.u.arrayFilter
	ko.cm.rg = ko.cm.register
	ko.bH = ko.bh = ko.BH = ko.bindingHandlers
	ko.rTp = ko.rT = ko.renderTemplate
	ko.dO = ko.do = ko.dependentObservable
	ko.uw = ko.unwrap
	ko.ut.uo = ko.ut.unwrapObservable
	ko.bD = ko.applyBindingsToDescendants
	ko.cm.iR = ko.cm.isRegistered
	ko.vE.aB = ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
	ko.cm = ko.cmp = ko.comp = ko.components
	ko.rg = ko.cm.rg = ko.cm.reg = ko.cm.register
	ko.cm.iR = ko.cm.isRegistered
	ko.o.prototype.rm = ko.o.prototype.remove
}
KOAT = function () {
	_$({
		// color
		C: 'r',
		// app hw title header 
		t: 'attributes.. unlikely to use?',
		vm: {
			url: $o("year-end.html"),
			tt: $o("stats report")
		},
		A: [
			$.a('report').at$('{href:url,title:tt}')
		]
	})
}
KOBVS = function () {
	_$({
		C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
		el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
		_: function () {
			vm.vs(0);
			_.in(function () {
				vm.vs(1)
			})
		}
	})
}
$ok = function (vm, appCtn) {
	$.app(appCtn)
	ok(F(vm) ? vm() : vm)
}
FOCUS = function () {
	_$({
		C: 'u',
		t: 'read&write els “focusedness”  by binding it to  obserb',
		vm: {editingName: $o()},
		A: [
			$.ip().b("hasFocus: editingName"),
			$.h1('editing..').bVs('editingName'),
			$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")
		]
	})
}
VISABLE = function () {
	_$({
		C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
		el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
		_: function () {
			vm.vs(0);
			_.in(function () {
				vm.vs(1)
			})
		}
	})
}
ATTR = function () {
	_$({
		C: 'w',
		t: 'attributes.. unlikely to use?',
		vm: {url: $o("year-end.html"), tt: $o("stats report")},
		A: [$.aA('{href:url,title:tt}', 'report')]
	})
}
KOCSS = function () {
	_$({
		c: 'v', t: 'css example.. will i use it?', vm: {n: $o(1)},
		A: $.d(['info']).b("style: {color: n()<0?'red':'black'}"),
		_: function () {
			vm.n(-5)
		}
	})
}

function koElsFancy(){
	ENAB0 = function () {
		$.mar().sp([
			'phone #:', ip$({v: 'num', en: 'hasPhone'}),
			ch$('hasPhone'), 'I have phone'])
		ok({
			hasPhone: $o(0), num: ''
		})
	}
	TEXT0 = function () {
		t$('textVal').C('p')
		ok$o('textVal', 'startValue')
		_.in(function () {
			vm.textVal('changed the view model!')
		})
	}
	CPD0 = function () {
		$.A('F: ', t$('f'),
				'L: ', t$('l'), 'F: ',
				v$('f'), 'L: ', v$('l'),
				'L: ', t$('fl'),
				$.bt('caps').cl$('capL')
		)
		vm = {
			f: $o('j'),
			l: $o('y'),
			capL: function () {
				this.l(this.l().toUpperCase())
			}
		}
		vm.fl = ko.c(function () {
			return vm.f() + ' ' + vm.l()
		})
		ok(vm)
	}
	KNOCKS = function () {
		$.A(pg('F: ', _B().b('t', 'f')),
				pg('L: ', _B().b('t', 'l')),
				pg('F: ', ip().b('V', 'f')),
				pg('L: ', ip().b('V', 'l')).id('l'),
				pg('L: ', _B().b('t', 'fl')),
				bt('caps').b('$', 'capL'))
		vm = {}
		vm.f = $o('j')
		vm.l = $o('y')
		vm.fl = ko.c(function () {
			return vm.f() + ' ' + vm.l()
		})
		vm.capL = function () {
			vm.l(uC(vm.l()))
		}
		ok(vm)
	}
	KIP0 = function () {
		$.A('Login name:', tI$('un'),
				'Pw:', pw$('pw'),
				'vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
		creds = {un: $o(''), pw: $o('abc')}
		ok(creds)
	}
	FOC0 = function () {
//bind cb and bind ip to 'enable'
		$.A('Name:',
				ip$({vs: 'editing', hasFocus: 'editing', v: 'name'}),
				d$({vs: '!editing()', t: 'name', cl: 'edit'})
		)
		$.p('Click the name to edit it; click elsewhere to apply changes')
		function VM(n) {
			var vm = this
			vm.name = $o(n)
			vm.editing = $o()
			vm.edit = function () {
				vm.editing(1)
			}
		}
		
		ok(new VM("Bert Bertington"))
	}
	K3 = VALUE = VAL = function () {
		$.A('Name:',
				ip$({v: 'editing', v: 'name', f: 'editing'}),
				d$({v: '!editing()', t: 'name', $: 'edit'}),
				$.p('Click the name to edit it; click elsewhere to apply changes'))
		ok({
			name: $o("Bert Bertington"),
			editing: $o(),
			edit: function () {
				vm.editing(true)
			}
		})//KOFCC
	}
	K1 = KOO = function () {
		$.A(
				'Hello, ', t$('fullName'), '!',
				'First name: ', v$('firstName'),
				'Last name: ', v$('lastName')
		)
		VM = function (first, last) {
			this.firstName = $o(first)
			this.lastName = $o(last)
			this.fullName = $cO(function () {
				return this.firstName() + " " + this.lastName();
			}, this)
		}
		ok(new VM("rigo", "ochoa"))
	}
	FOCUS = FCB = function () {//working!!!
		_$({
			C: 'u', t: 'read&write els “focusedness”  by binding it to  obserb',
			vm: {editingName: $o()},
			A: [
				$.ip().fc$("editingName"),
				$.h1('editing..').vs$('editingName'),
				$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")]
		})
	}
	SPAM0 = function () {
		$.A('spam?', ch$('want'),
				vs$('want', [
					'flavs:', $.cKO('Cherry', 'flav', 'cherry'),
					$.cKO('Almond', 'flav', 'almond'),
					$.cKO('Glut', 'flav', 'glut')
				])
		)
		ok(vm = {
			want: $o(1),
			flav: $oA(["cherry", "almond"])
		})
		_.in(2, function () {
			vm.wantSpam(0)
		})
//bind cb 'checked' to boolean
		//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
	}
	VIS0 = function () {
		$.h1().A('ALWAYS HERE!', vs$('vs', 'see me if true!'))
		ok(vm = {vs: $o(1)})
		_.in(function () {
			vm.vs(0);
		})
	}
	CLC0 = SMCL0 = function () {
		cl$('newDiv')
		ok({
			newDiv: function () {
				cl$('name',
						"i'm a freaking div").C($r())
			},
			name: function () {
				alert(this)
			}
		})
	}
	WITH0 = function () {
		w$('xy', [t$('city'), 'lat:', t$('lat'), 'lon:', t$('lon')])
		ok({city: "London", xy: {lat: 51, lon: -0.1}})
	}
	ADD00 = EACHDIVADD = EDA = function () {
		$.ip().tI$('name')
		$.h1().t$('name')
		$.ul().e$('arr').A($.li().t$())
		$.sm().cl$('A')
		_.in(1, function () {
			vm.name('girf')
			_.e(['a', 'b', 'c'], function (i) {
				vm.arr.push(i)
			})
		})
		e$('peep', t$('f'), ' ', t$('l'))
		ok(vm = {
			name: $o('zi'), arr: $oa(),
			A: function () {
				this.arr.push(this.name())
			}, peep: $oA()
		})
		$.bt('push', function () {
			vm.peep.push({f: 'j', l: 'y'})
		})
	}
	ADD10 = ULA = BINDUL = BUL = MONK = function () {
		$.h1('monkey').t$('monkey')
		$.ip().v$('monkey')
		$.sm('hello').cl$('A')
		//  $.s$('a','play');
//    $.U('cl',[            'my name is ',$.sT('n'),            ' and i like to play ', $.sT('c')])
		e$('list', ['my name is ', t$('name'),
			' and i like ', t$('color')])
		vm = {
			monkey: $o(), list: $oa(),
			A: function () {
				this.list.push({name: 'j', color: $r()})
			}
		}
		vm.monkey('elephant')
		ok(vm)
		_.ev(8, function () {
			vm.A()
		})
		//https://www.youtube.com/watch?v=JGwRIbWWqjE
	}
	ADD20 = ULADD = ULA = function () {
		peep = Peep()
		$.lb('Show time: ').A(ch$('showDT'))
		e$('peep', [$.d([t$('n'), 'has',
			t$('ch().length'),
			'children &nbsp;',
			ch$('New', 'A')]),
			e$('ch', [t$(), vs$('$root.showDT').A(
					' (child rendered at ',
					t$('new Date().getSeconds()'), ')')])])
		ok({
			peep: peep,
			showDT: $o()
		})
		//add, conditional el
		//anonymous vm
	}
	DEL0 = ADD3 = ULP = function () {
		$.ul().e$('people').A(
				$.li().A(
						$.sp('pos/name: '),
						$.sp().t$('$index'),
						$.sp().t$('name'),
						$.a('X').cl$('$parent.rm'))
		)
		$.bt('add').cl$('add')
		vm = function () {
			var o = {}
			o.people = $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
			o.add = function () {
				o.people.push({n: "New at " + new Date().time})
			}
			o.remove = function () {
				o.people.rm(this)
			}
			return o
		}
		ok(vm())
	}
	REMM = ULDEL = ULD = function () {
		e$('peep', //bind bt 'click' to parent.rem
				['pos/name: ', t$('$index'), t$('n')//, cl$('rm')
				])
		cl$('A')
		ch$('rm')
		ok(vm = {
			peep: $oA({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
			A: function () {
				this.peep.push({n: "New at " + new Date()})
			},
			rm: function (a) {
				this.peep.remove(this)
			}
		})
	}
	ULINDEX = function () {
		format()
		s2(
				h4('People'),
				ul().b('E', 'people')(
						li()(
								sp('pos/name: '),
								sp().b('t', '$index'),
								sp().b('t', 'n'),
								lk(' X').b('$', '$parent.rem')
						)
				),
				bt('add').b('$', 'add')
		)
		vm = function () {
			var o = {}
			o.people = $oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
			o.add = function () {
				o.people.push({n: "New at " + new Date()})
			}
			o.rem = function () {
				o.people.remove(this)
			}
			return o
		}
		ko.ab(vm()
		)
	}
	$.tdT = function (a, b) {
		var td = $.td()
		td.bT(a)
		if (A(b)) {
			_.e(b, function (el) {
				td.A(el)
			})
		}
		return td
	}
	$d.cm$ = function (a) {
//= $.dCm
		return $.d().cm$(a)
	}
	ko.cb = $.cC = function (a) {
		//$.cb_c =  $.cbC
		return $.cb().ch$(a)
	}
	ko.sp = function (t) {
		return $.sp().t$(t)
	}
	$.d_w = function (a, b) {
		var d = $.d().bW(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
		//= $.dW = $.dBw
	}
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).bA(a)
	}
	$.d_h = $.dH = function (a) {
		return $.d().bH(a)
	}
	$.d_cm = $.dCm = function (a) {
		return $.d().bCm(a)
	}
	ko.d.if = $.d_if = $.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.sp_t = $.spT = $.spBt = function (a, b) {
		return $.sp(b).bT(a)
	}
	$.sp_t = $.sT = $.spT = function (a, b) {
		a = a || '$data'
		return $.sp(b).bT(a)
	}
	$.h1_bt = $.h1T = $.h1Bt = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.li_t = $.liT = $.liBt = function (a) {
		return $.li().bT(a)
	}
	$.td_t = $.tdT = function (a, b) {
		var td = $.td()
		td.bT(a)
		if (A(b)) {
			_.e(b, function (el) {
				td.A(el)
			})
		}
		return td
	}
	$.h1T = $.h1Bt = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.p_i = $.pI = function (a, b, c, d) {
		var p = $.p(b, c, d).bI(a)
	}
	$.p_t = $.pT = function (a) {
		var p = $.p()
		p.bT(a)
		return p
	}
	$.sT = $.spT = function (a, b) {
		return $.sp(b)
				.bT(a || '$data')
	}
	$.spVs = function (a) {
		return $.sp().bVs(a)
		return $.sp().b('vs', a)
	}
	$.dV = $.dVs = function () {
		var g = G(arguments),
				d = $.d().bVs(g.f)
		_.e(g.r, function (q) {
			d.A(q)
		})
		return d
	}
	$.dCm = function (a) {
		return $.d().bCm(a)
	}
	$.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d//$.dI=
	}
	$.dW = $.dBw = function (a, b) {
		var d = $.d()
				.bW(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.dT = function (a) {
		return $.d().bT(a)
	}
	$.dH = function (a) {
		return $.d().bH(a)
	}
	$.dCm = function (a) {
		return $.d().bCm(a)
	}
	$.dT = function (a) {
		return $.d().bT(a)
	}
	$.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.sT = $.spT = function (a, b) {
		return $.sp(b).bT(a || '$data')
	}
	$.ST = function (t) {
		return $.S().bT(t)
	}
	$.pT = function (a) {
		var p = $.p()
		p.bT(a);
		return p
	}
	$.h1T = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.liT = function (a) {
		return $.li().bT(a)
	}
	$.tdT = function (a, b) {
		var td = $.td().bT(a)
		if (A(b)) {
			_.e(b, function (el) {
				td.A(el)
			})
		}
		return td
	}
	$.pI = function (a, b, c, d) {
		return $.p(b, c, d).if$(a)
	}
///
	$.ip.v$ = ValueBoundTextInput = function () {
		//= $.iV = $.ipV = $.ipBv = $.ip_v
		var g = G(arguments), ip
		ip = $.ip()
		ip.v$.apply(ip, g)
		return ip
	}
	TextInputBoundTextInput = $.ipTi = $.ip_tI = $.ip_ti = function (a) {
		return $.ip().tI$(a)
	}
	TextBoundPasswordInput = $.pwTi = $.pw_tI = $.pw_ti = function (a) {
		return $.pw().tI$(a)
	}
	EnableBoundSubmitButton = $.smEn = function (a) {
		return $.sm().en$(a)
	}
	EnableBoundSpan = $.b$ = $.bt$ = $.btB$ = function (a, b, c) {
		var bt = $.bt(a)
		bt.cl$(b || a)
		if (c) {
			bt.en$(c)
		}
		return bt
	}
	$.bt.cl$ = ClickBoundButton = $.$bt = function (a, b) {
		var g = G(arguments)
		b = b || a
		if (g.n) {
			b = '$parent.' + b
		}
		return $.bt(a).cl$(b)
	}
	$.cl$ = $.c$cl = $.c$ = function (fn) {
		return $.cb().ch$(fn)
	}
	ClickBoundSubmitButton = $.s$ = function (a, b, c, d) {
		return $.sm(b, c, d).cl$(a)
	}
	$.sp.cl$ = ClickBoundSpan = $.b$$ = function () {
		var sp = $.sp()
		_.e(arguments, function (a) {
			sp.A($.cl$(a))
		})
		return sp
	}
	$.sm.cl$ = ClickBoundSubmitButton = $sb_$ = $.s$ = function (a, b, c, d) {
		return $.sb(b, c, d).cl$(a)
	}
	$.cb.ch$ = CheckedBoundCheckbox = $.cC = $.cbC = function (a, val) {
		//if (U(a)) {a = '$'}
		var cb = $.cb().ch$(a)
		cb.val(val)
		return cb
	}
	$.p.ch.ch$ = CheckedBoundCheckboxInParagraph = cbKO = cb2 = function (m, binding, val) {
		var cb = CheckedBoundCheckbox(binding, val)
		var ch = [$.sp().A(m), cb]
		return $.p(ch)
	}
	$.p.sp.ch$ = CheckBoundSpanInP = $.cKO = function (m, b, v) {
		var cb = $.cb()
		cb.v(v)
		cb.ch$(b)
		return $.p().A(
				$.sp().A(m),
				cb
		)
		//=cbKO=cb2
	}
	$.a$ = function (t, fn) {
		return $.a(t).b('$', fn)
	}
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).at$(a)
	}
	$.t.vs$ = $.tVs = function (a) {
		return $.t().vs$(a)
	}
	$.em.t$ = function (t) {
//em_t = em$t = t$Em = $.emT = $.eT
		return $.em().t$(t)
	}
	$.sl._$ = SelectBound_ = $sl$ = _selectBind = $.slB = function (a) {
		var q = $.sl()
		q.b.apply(q, arguments)
		return q
	}
	sm$f = $.fSb = $.fBsb = function (a, b) {
		var f = $.f()
		f.b({sb: a})
		//f.bSb(a)
		if (A(b)) {
			_.e(b, function (el) {
				f.A(el)
			})
		}
		return f
	}
	SubmitBoundForm = $.f_sb = $.fSb = $.fBsb = $.fSm = $.fBSm = function (a, b) {
		var f = $.f()
		f.sm$(a)//f.b({sb: a})
		if (A(b)) {
			_.e(b, function (b) {
				f.A(b)
			})
		}
		return f
		$.fSbold = function (a, b) {
			var f = $.f();
			f.b({sb: a})
			if (A(b)) {
				_.e(b, function (el) {
					f.A(el)
				})
			}
			return f
		}
	}
}
function selectMisc(){
	KOLST = EACHS = SELLISTMISC = function () {
		$.d().A(
				$.f().b('S', 'addItem').A(
						$.sp('add item'),
						$.ip().b({
							v: 'itemToAdd'//,vu:'afterkeydown'
						}),
						$.sm('add').e$('itemToAdd().length>0')),
				$.d().A($.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							sO: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok(o = BLM())
		form = f = $.f()
		form.sm$('addItem').A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sb('add').en$('itemToAdd().length>0'))
		$.d().A(form,
				$.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems', sO: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		ok(new Lst())
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
		f = $.f().A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sm('add').en$('itemToAdd().length>0')
		)
		f.sm$('addItem')
		$.d().A(f, $.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							sO: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
		f = $.fo().sm$('A', ['Add:',
			$.ip().v$('tA'),
			$.sb('Add').en$('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({
				$: 'srt',
				en: 'all().length > 1'
			})
		])
		ok(new Lst())
		//sort, remove
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		ok(new Lst())
		f = $.fSm('A', ['Add:',
			$.ipV('tA'),
			$.sb('Add').en$('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		ok(new Lst())
		f = $.f()
		f.bSb('addItem').A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sb('add').e$('itemToAdd().length>0')
		)
		$.d().A(f,
				$.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
		ok(new Lst())
	}
	REMOVE1 = EACH = function () {
		$.fo({submit$: 'aT'},
				"Add task: ",
				$.ip("What?").v$('nT'),
				$.bt('Add').at('t', 's')
				//alt = $.fo.sm$("aT").A("Add task: ", $.ip("What?").v$('nT'), $.bt('Add').at('t', 's')),
		)
		$.ul({
			enable$: 'ts',
			visible$: 'ts().length>0',
			child: $.li([
				$.cb.checked$('iD'),
				$.ip({value$: 't', disable$: 'iD'}),
				$.a({checked$: '$parent.rmT'}, 'Del')
			])  //alt = $.ul().A($.li().A($.cb().ch$('iD'), ip().b("value:t, disable:iD"), lk('Del').b('ch', '$parent.rmT'))).b("foreach:ts, visible:ts().length>0"),
		})
		$.d([
			"You have",
			$.B({text$: "inc().length"}, "&nbsp;"),
			$.sp({vs$: "inc().length==0"}, "inc task(s)   - beer!")
		])
		tlVM = function () {
			var o = {}
			o.itemToAdd = $o('')
			o.allItems = $oa(['a', 'b', 'c'])
			o.selectedItems = $oa(['d'])
			o.addItem = function () {
				if (o.itemToAdd() != ''//&& o.allItems.indexOf(o.itemToAdd())<0
				) {
					o.allItems.push(o.itemToAdd());
					o.itemToAdd('')
				}
			}
			o.removeSelected = function () {
				o.allItems.removeAll(
						o.selectedItems())
				o.selectedItems([])
			}
			o.sortItems = function () {
				o.allItems.sort()
			}
			return o
		}
		tlVM = function () {
			var o = {
				ts: $oa([]),
				nT: $o()
			}
			o.inc = $c(function () {
				return ko.ut.af(
						o.ts(),
						function (t) {
							return !t.iD()
						}
				)
			})
			o.aT = function () {
				o.ts.push(Task({t: o.nT()}))
				o.nT("")
			}
			o.rmT = function (t) {
				o.ts.remove(t)
			}
			$.gJ('/ts', function (d) {
				o.ts(_.m(d, function (i) {
					return Task(i)
				}))
			})
			return o
		}
		ok(tlVM())
	}
	REMOVE = TASKS = function () {
		$.f().sm$('aT').A().A("Add task: ",
				$.ip().v$('nT').ph("What?"),
				$.bt('Add')//.bS('s') // ??
		)
		$.ul().b({
			e: 'ts',
			vs: 'visible:ts().length>0'
		}).A(
				$.li().A(
						$.cb().bC('iD'),
						$.ip().b("value:t, disable:iD"),
						$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").t$("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").v$("inc().length==0").A()
		ok({
			itemToAdd: $o(''),
			allItems: $oA(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
		vm2 = {
			ts: ko.oa(),
			nT: ko.o(),
			inc: ko.c(function () {
						var vm = this
						return ko.ut.af(
								vm.ts(), function (t) {
									return !t.iD()
								})
					}
			),
			aT: function () {
				this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
				this.nT('')
			},
			rmT: function () {
				o.ts.remove(this)
			}
		}
		/*
		 ko.b(vm2)
		 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
		 */
	}
	BLM = function () {
		var o = {}
		o.itemToAdd = $o('')
		o.allItems = $oa(['a', 'b', 'c'])
		o.selectedItems = $oa(['d'])
		o.addItem = function () {
			if (o.itemToAdd() != ''//&& o.allItems.indexOf(o.itemToAdd())<0
			) {
				o.allItems.push(o.itemToAdd());
				o.itemToAdd('')
			}
		}
		o.removeSelected = function () {
			o.allItems.removeAll(o.selectedItems())
			o.selectedItems([])
		}
		o.sortItems = function () {
			o.allItems.sort()
		}
		return o
	}
	TSK = FILTERBYPROPERT = FILTERTASKSPLUGIN = function () {
		Task = koTask = function (title, done) {
//return {tt: ko.o(title), done: ko.o(done)}
			this.title = $o(title)
			this.done = $o(done)
			Task_ = function (d) {
				return {
					title: $o(d.t),
					done: $o(d.iD)
				}
			}
		}
//FILTERBYPROP IN ADDINGCUSTOM FNS http://knockoutjs.com/documentation/fn.html
		ko.oA.fn.filterByProperty = function (propName, matchValue) {
			return ko.pC(function () {
				var allItems = this(),
						matchingItems = [];
				for (var i = 0; i < allItems.length; i++) {
					var current = allItems[i];
					if (ko.unwrap(current[propName]) === matchValue)
						matchingItems.push(current)
				}
				return matchingItems
			}, this)
		}
		function VM(p) {
			this.tasks = ko.oa([
				Task('Find new desktop background', true),
				Task('Put shiny stickers on laptop', false),
				Task('Request more reggae music in the office', true)
			])
			this.doneTasks = this.tasks.filterByProperty("done", true)
			this.prods = $oA()
			this.somePop = p.smKey
			this.tasks = $oA([
				new Task('Find new desktop background', 1),
				new Task('Put shiny stickers on laptop', false),
				new Task('Request more reggae music in the office', 1)
			])
			// Here's where we use the custom function
			this.doneTasks = this.tasks.filterByProperty("done", 1)
		}

//filter the items using the filter text
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items()
			}
			else {
				return ko.utils.arrayFilter(t.items(), function (it) {
					return ko.utils.stringStartsWith(
							it.name().toLowerCase(), fl)
				})
			}
		}, vm)
		$.h3('All tasks').A(t$('tasks().length'))
		$.ulE('tasks', [
			$.lL([$.cb().ch$('done'), t$('tt')])
		])
		$.h3('Done tasks').A($.spT('doneTasks().length'))
		$.ulE('doneTasks', [$.liT('tt')])
		tasks = $oA(
				Task('new background', 1), Task('stickers'), Task('reggae', 1)
		)
		ok({
			tasks: tasks,
			doneTasks: tasks.filterByProperty("done", 1)
		})
		/*alt:
		 this.doneTasks = ko.pureComputed(function() {
		 var all = this.tasks(), done = [];
		 for (var i = 0; i < all.length; i++)
		 if (all[i].done())
		 done.push(all[i]);
		 return done;
		 }, this);
		 */
		function alt() {
			FLVIEWPLG = function () {
				tasks = $oA(
						Task('Find new desktop background', 1),
						Task('Put shiny stickers on laptop'),
						Task('Request more reggae music in the office', 1))
				//$.h3('All tasks').A($.spT('tasks().length'))
				$.h3('All tasks').A($.sp().t$('tasks().length'))
				$.h3('All tasks').A($.sp().t$('tasks().length'))
				$.ulE('tasks', [
					$.lL([
						$.cb().ch$('done'), $.sp().t$('tt')
					])
				])
				$.h3('Done tasks').A($.sp().t$('doneTasks().length'))
				$.ulE('doneTasks', [$.li().t$('tt')])
				$.ulE('tasks', [$.lL([$.cb().ch$('done'), $.sp().t$('tt')])])
				$.h3('All tasks').A($.sp().bT('tasks().length'))
				$.ul().bE('tasks').A($.li().A(
						$.lb().A($.cb().ch$('done'), $.sp().t$('title'))))
				$.h3('Done tasks').A($.sp().bT('doneTasks().length'))
				$.ul().e$('doneTasks').A($.li().bT('text'))
				ko.b(new AppViewModel())
				/*alt:
				 this.doneTasks = ko.pureComputed(function() {
				 var all = this.tasks(), done = [];
				 for (var i = 0; i < all.length; i++)
				 if (all[i].done())
				 done.push(all[i]);
				 return done;
				 }, this);
				 */
				// $.ul().bE('tasks').A($.li().A($.lb().A($.cb().bC('done'), $.sp().bT('title'))))
				$.h3('Done tasks').A($.sp().t$('doneTasks().length'))
				// $.h3('Done tasks').A($.sp().bT('doneTasks().length'))
				$.ul([$.li().t$('tt')]).e$('doneTasks')
				//$.ul().bE('doneTasks').A( $.li().bT('text') )
				ok({
					tasks: tasks,
					doneTasks: tasks.filterByProperty("done", 1)
				})
				/*alt:
				 this.doneTasks = ko.pureComputed(function() {
				 var all = this.tasks(), done = [];
				 for (var i = 0; i < all.length; i++)
				 if (all[i].done())
				 done.push(all[i]);
				 return done;
				 }, this);
				 */
			}
			tasks = $oA([
				new Task('Find new desktop background', true),
				new Task('Put shiny stickers on laptop', false),
				new Task('Request more reggae music in the office', true)
			])
		}
	}
	BTRLST = function () {
//http://knockoutjs.com/documentation/unobtrusive-event-handling.html
		f = $.fSb('A', ['Add:',
			v$('tA'),
			$.sb('Add').en$('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		ok(new Lst())
		function more() {
			BTRLST1 = function () {
				$.f().b({sb: 'A'}).A('Add item:',
						$.ip().b({v: 'tA', vU: 'afterkeydown'}),
						$.sb('Add').b('en', 'tA().length > 0')
				)
				$.p('Your values:')
				$.sl().mlt().b({o: 'all', so: 'sl'})
				$.d([
					$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
					$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
				])
				$b(new Lst())
			}
			Lst = function () {
				this.tA = $o('')
				this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
				this.sl = $oa(['Hm'])
				this.A = function () {
					if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
						this.all.push(this.tA())
						this.tA('')
					}
				}
				this.A = function () {
					if (this.tA() &&
							this.all.indexOf(this.tA()) < 0
					) {
						this.all.push(this.tA())
						this.tA('')
					}
				}
				this.xSl = function () {
					this.all.removeAll(this.sl())
					this.sl([])
				}
				this.srt = function () {
					this.all.sort()
				}
				this.xSl = function () {
					this.all.removeAll(this.sl())
					this.sl([])
				}
				this.srt = function () {
					this.all.sort()
				}
			}
		}
	}
}