var buf = new Buffer(2);
buf[0] = -250;
buf[1] = 260;

// 如果大于255，会对256取模，如果小于0，先模上256，再加上256
console.log(buf);