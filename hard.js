const stringFun = function(string) {
    if(typeof string !== 'string') {
        return 'Please use a string variable'
    }
    let trimmed = string.trim()
    if(string.length > 30) {
        return trimmed.slice(0, 30) + '...'
    }
    return trimmed
    
}
