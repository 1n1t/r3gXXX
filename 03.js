var str = `http://egghead.io
not a web address
http://
https://www.egghead.io more
`
var regex = /https?:\/{2}(www.)?\w+\.\w{2,5}/g

//  a{4,} - quantifyer (from, to)

//  a* - any length of ..a.. or empty string === {0,}
//  a+ - at least 1 symbol === {1,}
//  a? - 0 or 1 aka optional === {0, 1}
console.log(str.match(regex))
