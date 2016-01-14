import Romantic from './'
import test from 'ava'

test('main', t => {
	const romantic = new Romantic()
	const res = romantic.match(
		'init <foo> <bar-bee> -- hafd',
		'init what cool-d sdfa sadf  sgfsdf'
	)
	t.same(res.foo, 'what')
	t.same(res['bar-bee'], 'cool-d')
})
