console.log(new Buffer('?'),encodeURIComponent('?'));
// <Buffer 3f> '%3F'
console.log(new Buffer('中'),decodeURIComponent(encodeURIComponent('中')));
// <Buffer e4 b8 ad> '%E4%B8%AD'