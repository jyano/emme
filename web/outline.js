 /*
  A dotted outline

  A dashed outline

  A solid outline

  A double outline

  A groove outline

  A ridge outline

  An inset outline

  An outset outline


  */
 
 $.Ol = $.outline = function () {
 
	 var g = G(arguments), o, ol
	 
	 o = g.N_ ? {w: g.f} :
			 Oo('c', o) ?
			 {c: g.f, w: g.s, s: g.t} :
			 {w: g.f, s: g.s}
			 
	 if (S(g.f)) {
		 o = g.f.split(' ')
		 ol = _.j([
		 
			 $r('c', o[0]),
			 oO('oW', o[1] || 5) + 'px',
			 oO('oS', o[2] || '-')
		 ])
		 $l(ol)
		 return ol
	 }
	 
	 ol = _.j([
		 $r('c', o.c),
		 N(o.w) ? o.w + 'px' : $r('ow', o.w),
		 
		 $r('os', o.s)
	 ])
	 
	 //$l( ol )
	 return ol
 }