var str = `Cat
sat on
the hat.`

var regex = /..at\./g

//  . - any character but no line-break

console.log(str.match(regex))
