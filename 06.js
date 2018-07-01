var str = `800-456-7000
(555) 456-7685
4567891000
`

var regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g
// (?:...) - turn off the captured group

console.log(str.match(regex))

console.log(str.replace(regex, 'area code: $1'))
