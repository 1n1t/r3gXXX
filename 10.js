var str = `12/1/16
12-1-13
11-16-17
12-01-2016
`

var regex = /^12.+16$/gm

//  ^ - begining of a line
//  m - multiline flag
//  $ - end of a line

console.log(str.match(regex))
