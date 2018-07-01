var str = `for
foobar
foobaz
fooboo
`

//  (?=..) - do not include group into the match === look ahead
//  (?!..) - negated look ahead
var regex = /foo(?=bar|boo)/g

console.log(str.match(regex))
