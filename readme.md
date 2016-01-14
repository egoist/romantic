# romantic [![Build Status](https://travis-ci.org/egoist/romantic.svg?branch=master)](https://travis-ci.org/egoist/romantic)

> Extract variables from string.

## Install

```
$ npm install --save romantic
```

## Usage

```js
const Romantic = require('romantic')

const romantic = new Romantic()
const result = romantic.match(
	'hello <name> <age>',
	'hello egoist 21.4'
)
// => {
//   name: 'egoist',
//   age: '21.4'
// }

// define a custom regex pattern to match variables
const romantic = new Romantic(/your regex/g)
```

## License

MIT © [EGOIST](https://github.com/egoist)
