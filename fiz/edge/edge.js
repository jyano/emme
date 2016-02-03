$eH = function (x1, y1, x2, y2) {
	return _$pH().SAE(V(x1, y1, '-'), V(x2, y2, '-'))
}
SAE = function () {
	W().p()
	w.eg(100, 500, 1000, 0)
	w.eg(50, 50, 100, 500)
	w.eg(0, 0, 1000, 100)
	w.cirB(410, 100, 2)
	_.in(4, function () {
		w.eg(100, 100, 500, 300)
		w.eg(100, 200, 500, 400)
		w.eg(100, 300, 500, 500)
		w.eg(1000, 100, 600, 300)
		w.eg(1000, 200, 600, 400)
		w.eg(1000, 300, 600, 500)
		w.cirB(410, 100)
	})
}
moreEdge = function () {
	EDE = function () {
		W()
		v1 = V(0, 0)
		v2 = V(40, 0)
		eH = $eH()
		eH.Set(v1, v2)
	}
	GHOST = GHO = function () {
// / // This an edge shape with ghost vertices.
		eH = $eH()
		eH.Set(v1 = V(30, 8), v2 = V(0, 0));
		eH.m_hasVertex0 = true;
		eH.m_hasVertex3 = true;
		eH.m_vertex0 = v0 = V(40, 0);
		eH.m_vertex3 = v3 = V(40, 14);
	}
//chain:
	CHAIN = CHA = function () {
		vs = [V(30, 0), V(50, 10), V(0, 0), V(-30, 80)]
		chain = $chH()
		chain.CreateChain(vs, 4);
	}
	GHOSTVERTS = GHV = function () {
// // Install ghost vertices
		chain = $chH();
		chain.SetPrevVertex(V(90, 30));
		chain.SetNextVertex(V(-60, 0))
	}
	LOOP = function () {// You may also create loops automatically.
//
// // Create a loop. The first and last vertices are connected.
//
		chain = $chainH();
		chain.CreateLoop(vs, 4);
		// Self-intersection of chain shapes is not supported.
// It might work, it might not.
// The code that prevents ghost collisions assumes there are no self-intersections
// of the chain.
// Each edge in the chain is treated as a child shape and can be accessed by index.
//
// // Visit each child edge.
//
		for (i = 0; i < chain.GetChildCount(); ++i) {
			eH = $eH();
			chain.GetChildEdge(eH, i)
		}
	}
}
b2d.edg = function (x1, y1, x2, y2) {
	var fd = b2d.pol()
	fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
	return fd
}
function edges() {
	b2d.edge = function (x1, y1, x2, y2) {
		var fd = b2d.poly()
		fd.shape.SetAsEdge(V(x1, y1).div(), V(x2, y2).div())
		return fd
	}// https://developer.chrome.com/devtools/docs/workspaces !!!!!
}
function more() {
	//edge shape:
	pH.SAE = function (v1, v2) {
		this.SetAsEdge(v1, v2)
		return this
	}
	$eH = function (x1, y1, x2, y2) {
		return _$pH().SAE(V(x1, y1, '-'), V(x2, y2, '-'))
	}
	SAE = function () {
		W().p()
		w.eg(100, 500, 1000, 0)
		w.eg(50, 50, 100, 500)
		w.eg(0, 0, 1000, 100)
		w.cirB(410, 100, 2)
		_.in(4, function () {
			w.eg(100, 100, 500, 300)
			w.eg(100, 200, 500, 400)
			w.eg(100, 300, 500, 500)
			w.eg(1000, 100, 600, 300)
			w.eg(1000, 200, 600, 400)
			w.eg(1000, 300, 600, 500)
			w.cirB(410, 100)
		})
	}
	moreEdge = function () {
		EDE = function () {
			W()
			v1 = V(0, 0)
			v2 = V(40, 0)
			eH = $eH()
			eH.Set(v1, v2)
		}
		GHOST = GHO = function () {
// / // This an edge shape with ghost vertices.
			eH = $eH()
			eH.Set(v1 = V(30, 8), v2 = V(0, 0));
			eH.m_hasVertex0 = true;
			eH.m_hasVertex3 = true;
			eH.m_vertex0 = v0 = V(40, 0);
			eH.m_vertex3 = v3 = V(40, 14);
		}
//chain:
		CHAIN = CHA = function () {
			vs = [V(30, 0), V(50, 10), V(0, 0), V(-30, 80)]
			chain = $chH()
			chain.CreateChain(vs, 4);
		}
		GHOSTVERTS = GHV = function () {
// // Install ghost vertices
			chain = $chH();
			chain.SetPrevVertex(V(90, 30));
			chain.SetNextVertex(V(-60, 0))
		}
		LOOP = function () {// You may also create loops automatically.
//
// // Create a loop. The first and last vertices are connected.
//
			chain = $chainH();
			chain.CreateLoop(vs, 4);
			// Self-intersection of chain shapes is not supported.
// It might work, it might not.
// The code that prevents ghost collisions assumes there are no self-intersections
// of the chain.
// Each edge in the chain is treated as a child shape and can be accessed by index.
//
// // Visit each child edge.
//
			for (i = 0; i < chain.GetChildCount(); ++i) {
				eH = $eH();
				chain.GetChildEdge(eH, i)
			}
		}
	}
}
function edgePairs() {//b2ControllerEdge "A controller edge is used to connect bodies and controllers together in a bipartite graph.";
	b2d.CE = b2d.CoE = b2d.ControllerEdge = b2d.Cos.b2ControllerEdge
// In graph theory, 
// a bipartite graph (or bigraph)
// is a SIMPLE graph 
// whose vertices can be divided 
// into two disjoint sets  (X,Y)  ~ G = (X,Y, E)
// and
// (that is, and are each independent sets)
// such that
// every edge connects a vertex in to one in .
// ( every edge is between a vertex in X and a vertex in Y
// Vertex set and are often denoted as partite sets.
	cE = b2d.CE.prototype
	cE.co = cE.Co = cE.C = function () {
		return this.controller
	}
	cE.pC = function () {
		return this.prevController
	}
	cE.nC = function () {
		return this.nextController
	}
	cE.pB = function () {
		return this.prevBody
	}
	cE.nB = function () {
		return this.nextBody
	}
	cE.b = cE.B = function () {
		return this.body
	}
}
$eF = function (a, b, c, d) {
	var f = $fD()
	f.shape = $eH(a, b, c, d)
	return f
}
b2d.edg = function (x1, y1, x2, y2) {
	var fd = b2d.pol()
	fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
	return fd
}