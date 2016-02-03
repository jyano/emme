w.handling = function () {
	var w = this
	w.bH = [];
	w.pH = [];
	w.PH = [];
	w.eH = [] 
	 l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
l.e=  l.end= function (fn) {this.EndContact = fn; return this}
l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
w.listen = w.setContactListener = w.sCL = w.SetContactListener
	b2d.L = b2d.listener = b2d.contactListener = function () {
		return new b2d.Dynamics.b2ContactListener
	}
	w.SetContactListener(_.x(w.ln = new b2d.Dynamics.b2ContactListener, {
		BeginContact: function (cx) {
			_.e(w.bH, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		EndContact: function (cx) {
			_.e(w.eH, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		PreSolve: function (cx, i) {
			_.e(w.pH, function (fn) {
				fn(cx, i)
			})
		},
		PostSolve: function (cx, pam2) {
			_.e(w.PH, function (fn) {
				_.in(0, function () {
					fn(cx, pam2)
				})
			})
		}
	}))
}
 
 