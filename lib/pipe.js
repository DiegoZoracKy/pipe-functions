var pipe = function() {return Array.prototype.slice.call(arguments).reduce(function(v, f) {return v.constructor === Function ? v() : v.then ? v.then(function(v) {return f(v); }) : f(v);});};
if (typeof module !== 'undefined' && module.exports)
	module.exports = pipe;
