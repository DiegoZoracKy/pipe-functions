/*globals describe, it*/
'use strict';

const pipe = require('../');
const assert = require('assert');

const capitalize = v => v[0].toUpperCase() + v.slice(1);
const quote = v => `"${v}"`;
const fetchAndSetBandName = v => new Promise((resolve, reject) => setTimeout(() => resolve(`Pink Floyd - ${v}`), 1000));

describe('Pipe', function() {

	describe('Functions (sync)', function() {

		it(`'time' should be turned into '"Time"'`, function() {
			const result = pipe('time', capitalize, quote);
			assert.equal(result, `"Time"`);
		});

	});

	describe('Functions && Promises (sync && async)', function() {

		it(`'time' should be turned into 'Pink Floyd - Time'`, function(done) {

			pipe('time', capitalize, fetchAndSetBandName)
				.then(result => assert.equal(`Pink Floyd - Time`, result))
				.then(() => done());
		});

	});
});