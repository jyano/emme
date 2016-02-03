w.startListening = w.handle = function () {
	var w = this
	
	w.bH =	w.beginHandlers = w.BG = w.BG || [] //bH
	w.pH = w.preHandlers = w.PRE = w.PRE || [] //pH
	w.PH = w.postHandlers = w.PO = w.PO || [] // PH
	w.eH = w.endHandlers = w.END = w.END || [] // eH
	
	  
	
	w.listener = w._l  = w.ln = w.ln || new b2d.Dynamics.b2ContactListener// b2d.listener() || $cL() || $CL()
	 
	
	w.listener.BeginContact = function (cx) {_.e(w.beginHandlers, function (func) {func(cx)})}
	w._l.BeginContact = function (cx) {
		_.e(w.BG, function (fn) {
			_.in(0, function () {
				fn(cx)
			})
		})
	}
	w.ln.BeginContact = function (cx) {
		_.e(w.bH, function (fn) {$.do(function () {fn(cx)})})
	}
	function end(){
		w.listener.EndContact = function (cx) {
			_.each(w.endHandlers,
					function (func) {
						func(cx)
					})
		}
		w._l.EndContact = function (cx) {
			_.e(w.endHandlers,
					function (func) {
						$.do(function () {
							func(cx)
						})
					})
		}
		w._l.EndContact = function (cx, d) {
			_.e(w.END, function (fn) {
				fn(cx, d)
			})
		}
		w.ln.EndContact = function (cx) {
			_.e(w.eH, function (fn) {
				$.in(0, function () {
					fn(cx)
				})
			})
		}}
function pre(){
	w._l.PreSolve = function (cx) {
		_.e(w.preHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w.ln.PreSolve = function (cx) {
		_.e(w.pH, function (fn) {
			$.do(function () {
				fn(cx)
			})
		})
	}
	w._l.PreSolve = function (cx, d) {
		_.e(w.PRE, function (fn) {
			fn(cx, d)
		})
	}}
	function post(){
		w._l.PostSolve = function (cx, pam2) {
			_.e(w.postHandlers,
					function (func) {
						$.do(function () {
							func(cx, pam2)
						})  //second arg???????
					})
		}
		w._l.PostSolve = function (cx, d) {
			_.e(w.PO, function (fn) {
				fn(cx, d)
			})
		}
		w.ln.PostSolve = function (cx, pam2) {
			_.e(w.PH, function (fn) {
				$.do(function () {
					fn(cx, pam2)
				})
			})
		}}
	
	w.listen(w.listener)
	
	w.SetContactListener(w.ln)
	_.x(w._l, {
		BeginContact: function (cx) {
			_.e(w.BG, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		EndContact: function (cx) {
			_.e(w.END, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		PreSolve: function (cx, i) {
			_.e(w.PRE, function (fn) {
				fn(cx, i)
			})
		},
		PostSolve: function (cx, pam2) {
			_.e(w.PO, function (fn) {
				_.in(0, function () {
					fn(cx, pam2)
				})
			})
		}
	})
	w.SCL(w._l)
	return w
}
//w._l.BeginContact = $CL.handle(w.BG)
//function (cx,d) {_.e(w.BG, function (fn) {fn(cx,d)})}
	
