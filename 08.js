var str = 'This island is his, it is'

var regex = /is\B.*/g

//  \b - word boundary
//  \B - negated \b

console.log(str.match(regex))
