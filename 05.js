var str = `for
foobar
foobaz
fooboo
`

var regex = /foo(bar|boo)/g

//  () for grouping

console.log(str.match(regex))

//  $1 - first captured group
console.log(str.replace(regex, '**$1**'))
