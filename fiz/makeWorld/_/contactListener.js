 
	
	b2d.CL = b2d.D.b2ContactListener
	$pt.cL = b2d.CL.prototype
	cL = $pt.cL
	cL.b = cL.bg = function (fn) {
		this.BeginContact = fn;
		return this
	}
	cL.end = cL.e = function (fn) {
		this.EndContact = fn
		return this
	}
	cL.pre = cL.p = function (fn) {
		this.PreSolve = fn
		return this
	}
	cL.po = cL.P = function (fn) {
		this.PostSolve = fn
		return this
	}
//End Contact Event: called when two fixtures cease to overlap.
// - called for sensors and non-sensors. - may be called when a body is destroyed ( event can occur outside  time step)
//Begin Contact Event : called when two fixtures begin to overlap.
//  - called for sensors and non-sensors. - can only occur inside the time step.
// = w.startListening
//Do not keep a reference to the pointers sent to b2ContactListener. 
//  (make  deep copy of cx point data into your own buffer. 
// The example below shows one way of doing this.
//At run-time you can create an instance of the listener and register it 
// with w.SetContactListener. 
// Be sure your listener remains in scope while the world object exists.
//You can receive contact data by implementing b2ContactListener. supports  events: begin, end, pre-solve, post-solve.
	w.SCL = function (cL) {
		this.SetContactListener(cL || $cL())
		return this
	}
	$CL = function () {
		return new b2d.CL
	}
	alpha = w.cL = function () {
		var cL = $CL()
	}
	$CL.handle = function (arr) {
		return function (cx, d) {
			_.e(arr, function (fn) {
				fn(cx, d)
			})
		}
	}//direction of collision normal:
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
// ALL 4 cx handlers
// give you a b2Contact pointer,
// so we have access to the same points and normal - see: begin
// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  c.SetFriction( friction)  // persists for duration of contact
//  c.SetRestitution(  restitution)   //persists for duration of contact
//  c.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
	b2d.listener = function () {
		return new b2.Dynamics.b2ContactListener
	}
	w.listen = w.sCL = w.SetContactListener
	//l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
	//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
	//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
	//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
	b2d.L = b2d.listener = b2d.contactListener = function () {
		return new b2d.Dynamics.b2ContactListener
	}
	//w.listen = w.setContactListener = w.sCL = w.SetContactListener