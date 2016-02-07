md.o = function (a, b) {
    if (U(b)) {
        return this.get(a)
    }
    this.set(a, b)
    return this
}
//QT:  an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
$.tpFn = qT = function (tpFn, ob, el) {
    return tpFn(ob, $(el || '<span>'))
}
$.tpFn.thed = sampleTemplate = function (ob, el) {
    return $(el).A($.tH().A(
        $.tr().K('header')(
            $.th().A('Name'),
            $.th().A('Age'))))
}
//   use like this: q = $.tpFn( $.tpFn.thed ).A()


$.tpFn.lii = function (ob, el) {//two ways ok!!!!
//can pass://1) jq/el
    return $(el).A($.li(ob.me), $.li(ob.me))
}

$.tpFn.lii2 = function (ob, el) {
    //2) or .... array
    return [$.li().A(ob.me), $.li().A(ob.me)]
    // use like this: q= $.tpFn( $.tpFn.lii, {me:'jason'} ).A()
}
//  QTexample: resultingChildElOrEls = $.tpFn($.tp.lii, {me: 'jason'}).A()
