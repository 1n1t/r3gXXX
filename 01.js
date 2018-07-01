var str = 'Is this This'

// var regex = new RegExp('is')
var regex = /is/gi

//  g - global flag
//  i - ignore case

console.log(regex.test(str))

console.log(regex.exec(str))
console.log(regex.exec(str))
console.log(regex.exec(str))

console.log(str.match(regex))
