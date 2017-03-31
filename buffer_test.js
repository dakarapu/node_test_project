const querystring = require('querystring');


const a = querystring.parse('foo=bar&abc=xyz&abc=123');

console.log(a);

const b = querystring.stringify(a);

console.log(b);

const c = querystring.unescape('w=%D6%D0%CE%C4&foo=bar');

console.log(querystring.parse(c));