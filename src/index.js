module.exports = function reverse (n) {
    const reverse = n.toString().split('').reverse()
    if (reverse.includes('-')) {
        reverse.splice(reverse.length - 1, 1)
    }

    return +reverse.join('')
}
