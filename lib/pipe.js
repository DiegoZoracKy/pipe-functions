'use strict';
// V1, good times!
// const pipe = (...fns) => fns.reduce((v, f) => v && v.constructor === Function ? f(v()) : v && v.then ? v.then(v => f(v)) : f(v));

const pipe = (...fns) => fns.reduce((v, f, i) => {
	if (i === 1 && v && v.constructor === Function) {
		let exec = v();
		if (exec.then) {
			return exec.then(v => f(v));
		} else {
			return f(exec);
		}
	} else if (v && v.then) {
		return v.then(v => f(v));
	} else {
		return f(v);
	}
});

module.exports = pipe;