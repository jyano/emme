vw.o = function (a, b) {
    if (U(b)) {
        return this.get(a)
    }
    this.set(a, b)
    return this
}
