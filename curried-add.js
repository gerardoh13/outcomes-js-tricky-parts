function curriedAdd(total) {
    if (total === undefined) return 0
    return function add(num) {
        if (num === undefined || Number.isNaN(num)) return total
        total += num
        return add
    }
}

module.exports = { curriedAdd };
