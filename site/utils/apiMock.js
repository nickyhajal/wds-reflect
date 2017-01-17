import MockAdapter from 'axios-mock-adapter';
import s from 'underscore.string';
import urler from '~/utils/url';


let mock = false;

export default {
	init(adapter) {
		mock = adapter;
	},

	on(req) {
		const bits = req.split(' ');
		const url = `${urler('api')}/${bits[1]}`;
		const method = s.capitalize(bits[0]);
		return mock[`on${method}`](url);
	},

	reset() {
		mock.reset();
	},
}