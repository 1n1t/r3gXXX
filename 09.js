var str = 'it was the the thing thing'

var regex = /(\w+)\s?(?=\1)/g

// (...)\1 = back reference
// (the)\s?\1 === (the)\s(the)

console.log(str.match(regex))
console.log(str.replace(regex, ''))

var html = `<b>Bold</b><i>italics</i>`
var tagRegex = /<(\w+)>(.+)<\/\1>/g

console.log(html.match(tagRegex))
console.log(html.replace(tagRegex, '$2\n'))
