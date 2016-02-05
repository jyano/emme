
    cl.V = function (Vw, ob) {
        ob = ob || {}
        ob.m = this
        return Vw(ob)
    }
//cl.o= function(){var g=G(arguments); this.on.apply(this, g) }
    cl.tr = function (a, b) {
        this.trigger(a, b);
        return this
    }
    cl.oRm = function (a, b, c) {
        return this.on('remove', a, b, c)
    }   // "remove" (model, collection, options) — when a model is rcl from a collection.
    cl.oDs = cl.oX = cl.oD = function (fn) {
        return this.on('destroy', fn)
    } // "destroy" (model, collection, options) — when a model is destroyed.
    cl.oRs =  cl.oR =function (fn) {
        return this.on('reset', fn)
    }  // "reset" (collection, options) — when the collection's entire contents have been replaced.
    cl.oSo = function (a, b, c) {
        return this.on('sort', a, b, c)
    }    // "sort" (collection, options) — when the collection has been re-sorted.
   cl.oCh = cl.oC =  function (n, fn) {
        if (U(fn)) {
            return this.on('change', n)
        }
        return this.on('change:' + n, fn)
    } // "change" (model, options)  — when a model's attributes have changed. // "change:[attribute]" (model, value, options)  — when a specific attribute has been updated.
    cl.Rq= cl.oQ =  function (mdCl, fn) {
        return this.on('request', fn)
    }      // on start of md|cl SERVER request function passed(md_or_cl,  xhr, op)
    cl.oSy = cl.oS = function (a, b, c) {
        return this.on('sync', a, b, c)
    } // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
    cl.oEr = cl.oZ = cl.oE = function (a, b, c) {
        return this.on('error', a, b, c)
    } //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
    cl.oIv = function (a, b, c) {
        return this.on('invalid', a, b, c)
    }  //"invalid" (model, error, options) — when a model's validation fails on the client.
    cl.o$ = cl.oAl = function (fn) {
        return this.on('all', fn)
    }   //passes event name as 1st ag
    cl.oA = function (fn) {
        fn = fn || function (m) {
                m.at = m.attributes
                m.s = function (a, b, c) {
                    if (O(a) && O(b)) {
                        if (b.v) {
                            b.validate = b.v ? true : false
                        }
                    }
                    if (S(a) && O(c)) {
                        if (c.v) {
                            c.validate = c.v ? true : false
                        }
                    }
                    return m.set(a, b, c)
                }
                m.g = m.get
                m.j = m.toJSON
                m.o = m.on
                E$(m)
                a.A(m)
            }
        return this.on('add', fn)
    } // "add" (model, collection, options) — when a model is added to a collection.


$ev =vent= _.x({}, Bb.E)
$on = function (ev, fn) {
    $ev.on(ev, fn)
    // $ev.on(ev, fn)
}