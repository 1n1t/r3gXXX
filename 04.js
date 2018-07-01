var str = `cat
mat bat Hat
?at 0at`

var regex = /[a-zA-Z0-9?]at/g

//  [cb] - or 'c' or 'b', orfer is not impottant
//  [^cb] - neither 'c' nor 'b'
//  [a-z] - range from a to z
//  [a-zA-Z0-9] - union ranges

//  [a-zA-Z0-9] === \w (not space, symbols or unicode characters)
//  \d === only digits
//  \s === white space

//  \W === ^\w
//  \D === ^\d
//  \S === ^\s

console.log(str.match(regex))
